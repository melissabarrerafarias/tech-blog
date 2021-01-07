const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// /api/posts
router.get('/', (req, res) => {
    console.log('===========================');
    Post.findAll({
        attributes: ['id', 'post_description', 'title', 'created_at'],
        order: [['created_at', 'DESC']], // displays most recent posts
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                  model: User,
                  attributes: ['username']
                }
              },
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

// /api/posts/1
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'post_description', 'title', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: "Sorry, no post found with this id" });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// /api/posts
router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        post_description: req.body.post_description,
        user_id: req.body.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// /api/posts/1
router.put('/:id', (req, res) => {
    Post.update(
        {
            title: req.body.title,
            post_description: req.body.post_description
        }, 
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: "Sorry, no post found with this id!"}); 
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err); 
        res.status(500).json(err);
    });
});

// /api/posts/1
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: "Sorry, no post found with this id!"});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err); 
        res.status(500).json(err);
    })
})

module.exports = router;