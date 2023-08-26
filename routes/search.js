
const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
   res.render('search', {
      title: 'search Page',
   });
   console.log('有人造訪search page');
})

// 使用 body-parser 處理 POST 請求，通過 req.body 獲取解析後的主體數據內容
router.post('/searchList',function(req,res){
   console.log(req.body);
   res.redirect('/search'); 
})


// AJAX
router.post('/searchAJAX',function(req,res){
   res.send(`來自server:\n
   title: ${req.body.title} / content: ${req.body.content}`);
   console.log(req.body);
})


module.exports = router;