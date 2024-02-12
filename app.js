const express = require("express");
const res = require("express/lib/response");
const app = express();     // expressning 'app' objectini yaratamiz
const fs = require("fs");

// MongoDB ni chaqirish
const db = require("./server").db(); // shu orqali db ga malumotlar yozish, o'chirish mumkin


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data)
  }
});

// 1: Kirish code      express - framework   app.use ->middleware
app.use(express.static("public"));   // har qanday kelayotgan zaproslar uchun 'public' folderni clientlarga ochib beryapmiz
app.use(express.json());     // kelayotgan 'json' formatdagi datani bizga object holatiga o'girib beradi 
app.use(express.urlencoded({extended: true}));   // (traditional) form request dan POST qilingan narsalarni express server qabul qilishi uchun

// 2: Session code  -> xozircha foydalanmaymiz


// app.set -> configuration
// 3: Views code    (backend da frontend ni yasaymiz) BSSR (backend-server-side-rendering) backend da frontend ni (quramiz) ishga tushiramiz
app.set("views", "views");    // html~css ma'lumotlarini 'views' papkasini ichidan o'qiydi deb ko'rsatib o'tyapmiz 
app.set("view engine", "ejs");   //  'view engine'-miz 'ejs' ekanligini ko'rsatib o'tyapmiz

// 4: Routing code  (har bir page uchun link yaratamiz)
app.post("/create-item", (req, res) => {
  console.log('user entered /create-item');
  //   TODO: code with db here  
  console.log(req.body);
  const new_reja = req.body.reja
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    res.json(data.ops[0])
  });
});

app.get("/author", (req, res) => {
  res.render("author", {user: user});
});

app.get("/", function(req, res) {
  console.log('user entered /');
  db.collection("plans").find().toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      res.render("reja", {items: data});
    }
  })
});




module.exports = app;