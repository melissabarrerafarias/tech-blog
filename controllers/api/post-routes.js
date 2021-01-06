const router = require('express').Router(); 
const { Post, User } = require('../../models'); 

router.get('/', (req, res) => {
    console.log('===========================');
    Post.findAll({
        attributes: ['id', 'post_description', 'title', 'created_at'],
        include: [
            {
                model: User, 
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err); 
        res.status(500).json(err);
    });
});

module.exports = router;