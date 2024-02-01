console.log("Dastlabki vazifa");

console.log("Web serverni boshlash");

const express = require("express");
const res = require("express/lib/response");
const app = express();     // expressning 'app' objectini yaratamiz
const http = require("http");

// 1: Kirish code      express - framework
app.use(express.static("public"));   // har qanday kelayotgan zaproslar uchun 'public' folderni clientlarga ochib beryapmiz
app.use(express.json());     // kelayotgan 'json' formatdagi datani bizga object holatiga o'girib beradi 
app.use(express.urlencoded({extended: true}));   // (traditional) form request dan POST qilingan narsalarni express server qabul qilishi uchun

// 2: Session code  -> xozircha foydalanmaymiz

// 3: Views code
app.set("views", "views");    
app.set("view engine", "ejs");   //  BSSR (backend-server-side-rendering) backend da frontend ni (quramiz) ishga tushiramiz

// 4: Routing code  (har bir page uchun link yaratamiz)
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({test: "success"});
})

app.get("/", function(req, res) {
  res.render("harid");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
  console.log(`The server is running successfully on port: ${PORT}`);
});

