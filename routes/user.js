
const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
   res.render('user', {
      title: 'User Page',
   });
   console.log('有人造訪user page');
})

router.get('/photo',function(req,res){
   res.render('user', {
      title: 'User Page - photo',
   });
   console.log('有人造訪user page - photo');
})


module.exports = router;