console.log("Web serverni boshlash");

const express = require("express");
const app = express();     // expressning 'app' objectini yaratamiz
const http = require("http");

// 1: Kirish code      express - framework
app.use(express.static("public"));   // har qanday kelayotgan zaproslar uchun 'public' folderni clientlarga ochib beryapmiz
app.use(express.json());     // kelayotgan 'json' formatdagi datani bizga object holatiga o'girib beradi 
app.use(express.urlencoded({extended: true}));   // (traditional) form request dan POST qilingan narsalarni express server qabul qilishi uchun

// 2: Session code  -> xozircha foydalanmaymiz

// 3: Views code
app.set("views", "views");    
app.set("view enjine", "ejs");   // ejs - framework.   BSSR (backend-server-side-rendering) backend da frontend ni (quramiz) ishga tushiramiz

// 4: Routing code  (har bir page uchun link yaratamiz)
// page - hello
app.get("/hello", function(req, res) {
  res.end('<h1>Hello World</h1>');
});
// page - yangiliklar 
app.get("/news", function(req, res) {
  res.end("<h1>Yangiliklar bo'limidasiz</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
  console.log(`The server is running successfully on port: ${PORT}`);
});

