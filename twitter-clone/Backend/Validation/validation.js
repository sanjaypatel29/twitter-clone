const Joi = require("joi");

const registerValidator = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(4).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        tHandle: Joi.string().min(4).required(),
        dob: Joi.string().min(8).required(),
        profileImage: Joi.string().min(4).required(),
    });

    return schema.validate(data);
};

const loginValidator = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(data);
};

const tweetValidator = (data) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        verified: Joi.boolean().required(),
        image: Joi.string().required(),
        tHandle: Joi.string().min(1).required(),
        time: Joi.string().required(),
    })
    return schema.validate(data);
}

module.exports.registerValidator = registerValidator;
module.exports.loginValidator = loginValidator;
module.exports.tweetValidator = tweetValidator;