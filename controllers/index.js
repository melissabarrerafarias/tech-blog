// file collects endpoints and prefixes them with the path /api

const router = require('express').Router(); 

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

// prefix
router.use('/api', apiRoutes); 
router.use('/', homeRoutes);

// if request is made to an endpoint that doesnt exist, they'll recieve a 404 error
router.use((req, res) => {
    res.status(404).end();
}); 

module.exports = router;