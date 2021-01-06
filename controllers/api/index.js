// file collects all api routes and packages them up

const router = require('express').Router();

const userRoutes = require('./user-routes.js'); 
const postRoutes = require('./post-routes'); 

// prefixes routes
router.use('/users', userRoutes); 
router.use('/posts', postRoutes);

module.exports = router;