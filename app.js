
const express = require('express');
const app = express();
app.use(express.static('public')); // 靜態資源設定

const engine = require('ejs-locals'); // 引入 ejs-locals 模組
app.engine('ejs', engine); // 使用 ejs-locals 作為 EJS 引擎
app.set('views', './views'); // 設定視圖的存放目錄為 views 目錄
app.set('view engine', 'ejs'); // 設定視圖引擎為 EJS



// 載入路由
const homeRouter = require('./routes');
const userRouter = require('./routes/user');

// 將路由模組應用到路徑上
app.use('/', homeRouter);
app.use('/user', userRouter);

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json())




app.listen(process.env.PORT || 3000);
