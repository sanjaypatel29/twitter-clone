const express = require("express");
const { postTweet } = require("../Controllers/tweetControllers")
const router = express.Router();

router.post("/tweet", postTweet)

module.exports = router