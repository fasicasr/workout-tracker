const path = require('path');
const router = require('express').Router();


// This is the 'get' route 
router.get('/', (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Here, excercise.html is rendered
router.get('/exercise',(req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// Here, stats.html is rendered
router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;
