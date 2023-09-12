const { tweetValidator } = require("../Validation/validation")
const tweets = require("../Models/tweets")

const postTweet = async (req, res) => {
    const { error } = tweetValidator(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const tweet = new tweets({
        title: req.body.title,
        image: req.body.image,
        tHandle: req.body.tHandle,
        time: req.body.time,
        verified: req.body.verified
    });
    console.log(tweet)
    try {
        const savedtweets = await tweet.save();
        res.send(savedtweets);
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = { postTweet }