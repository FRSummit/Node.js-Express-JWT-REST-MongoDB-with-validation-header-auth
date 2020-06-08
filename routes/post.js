const router = require('express').Router();
const verify = require('./VerifyToken');

router.get('/', verify, (req, res) => {
    // res.json({
    //     posts: {
    //         title: 'My first post',
    //         description: "Post Description"
    //     }
    // });
    res.send(res.user);
    // User.findbyOne({ _id: req.user })
});

module.exports = router;