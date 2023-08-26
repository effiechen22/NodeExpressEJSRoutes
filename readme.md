Date : 2023-08-26

<!-- Title -->
# Node.js Express框架: 使用EJS視圖引擎+實踐路由模組化

<!-- Overview - MyProjects -->
- 開發人員 [Effie Chen](https://github.com/effiechen22)

- 動機目的

   為了更深入了解 Node.js 和 Express 框架，以及如何有效地使用視圖引擎來共用 HTML 內容，  
   同時實踐路由模塊化的技術，從而提升代碼的可讀性和整體架構的完整性。


- 環境與版本
   - 作業系統:           Windows 11 家用版 | 版本：22H2 | OS組件：22621.2134
   - 開發軟件(IDE):      Visual Studio Code
   - node.js版本:        18.17.0
   - NPM
      - body-parser版本:    ^1.20.2
      - ejs-locals版本:     ^1.0.2
      - express版本:        ^4.18.2

- 開發工具
   - 前端開發
      - HTML \ CSS \ JavaScript
      - EJS(Embedded JavaScript)視圖引擎，用於在 Express 中渲染視圖。
   - 後端開發
      - Node.js
      - Express，用於構建後端 Web 應用程序的 Node.js 框架。
   - 版本控制
      - Git

- 安裝與使用  

   - 在專案根目錄下，執行以下步驟以啟動應用程序：
      1. 複製專案倉庫🚧：git clone https://github.com/你的使用者名稱/你的專案.git
      2. 進入專案目錄：cd 你的專案
      3. 安裝相依套件：npm install
      4. 啟動應用程式：npm start

   - 訪問 `http://localhost:3000` 查看應用程序。

- 🚧專案架構 [View Structure](https://miro.com/)  
   /  
   /layout     - EJS 視圖引擎  
   /user   
   /user/photo - 子路由設定  
   /search     - AJAX 前後端介接  


- 🚧專案Demo 
   [View Demo](https://effiechen22.github.io/)



<!-- Outline -->
## 🚧大綱


<!-- Content  -->

## 🚧內容
### Node.js + Express框架
### 使用express.Router();實現路由模組化 
### 視圖引擎 EJS
### POST AJAX 前後端介接
   - x-www-form-urlencoded 格式實作
   - json 格式實作