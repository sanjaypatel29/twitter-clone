const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/users');
const { registerValidator, loginValidator } = require('../validation/validation');
const registeruser = async (req, res) => {
    try {
        const { error } = registerValidator(req.body);

        if (error) {
            throw new Error(error.details[0].message);
        }

        const { email, password, name, tHandle, profileImage, dob } = req.body;
        const userExists = await User.findOne({ email });
        const twitterHandle = await User.findOne({ tHandle });

        const encryptedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));
        if (userExists) {
            return res.status(400).send("Account already exists");
        }
        if (twitterHandle) {
            return res.status(400).send('Choose another twitter handle');
        }

        const newUser = await new User({
            email,
            password: encryptedPassword,
            name,
            profileImage,
            tHandle,
            dob,
        });
        await newUser.save();
        return res.status(200).send(`${name} registered Successfully`);
    } catch (err) {
        res.status(400).send(err);
    }
};

const loginuser = async (req, res) => {
    try {
        const { error } = loginValidator(req.body);

        if (error) {
            throw new Error(error.details[0].message);
        }

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("Account doesn't exists");
        }

        const passwordCheck = await bcrypt.compare(password, user.password);

        if (passwordCheck) {
            const { emailDb } = user;
            const data = { email: emailDb };
            const authToken = jwt.sign(data, process.env.SECRET_KEY_TO_ACCESS);
            res.json({
                auth: email,
                error: false,
                authToken,
                user,
                message: 'Logged in successfully'
            });
        } else {
            throw new Error('Wrong password');
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

module.exports = { registeruser, loginuser };
