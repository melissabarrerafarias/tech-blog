const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1,
        post_description: 'yay this is working!',
        title: 'check it out mom',
        created_at: new Date(),
        comments: [{}, {}],
        user: {
            username: 'test_user'
        }
    });
});

module.exports = router;