
const express = require('express');
const app = express();
app.use(express.static('public')); // 靜態資源設定

const engine = require('ejs-locals'); // 引入 ejs-locals 模組
app.engine('ejs', engine); // 使用 ejs-locals 作為 EJS 引擎
app.set('views', './views'); // 設定視圖的存放目錄為 views 目錄
app.set('view engine', 'ejs'); // 設定視圖引擎為 EJS

// 載入 body-parser 
const bodyParser = require('body-parser');
// 使用 body-parser : 用途為body解析
app.use(bodyParser.urlencoded({extended:false})); //處理 x-www-form-urlencoded 格式的POST資料
app.use(bodyParser.json()) //bodyParser.json() 處理 json 格式的POST資料


// 載入路由
const homeRouter = require('./routes');
const userRouter = require('./routes/user');
const searchRouter = require('./routes/search');

// 將路由模組應用到路徑上
app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/search', searchRouter);





app.listen(process.env.PORT || 3000);
