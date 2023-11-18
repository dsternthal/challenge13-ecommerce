const router = require('express').Router();
const apiRoutes = require('./api');


//modulizing the routes
//http://localhost:3001/api
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;