

const router = require('express').Router();

const apiStuff = require('./api');

const homeStuff = require('./h-route.js');

const dshbrdStuff = require('./d-route.js');


router.use('/api', apiStuff);
router.use('/', homeStuff);
router.use('/dashboard', dshbrdStuff);

router.use((req, res) => {
    
  res.status(404).end();
});

module.exports = router;