
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.render('index', {
      title: 'Welcome to My Website',
   });
   console.log('有人造訪首頁');
});

module.exports = router;