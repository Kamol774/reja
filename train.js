// TASK 20 [ejs da portfolio publishing qilish]

const express = require("express");
const res = require("express/lib/response");
const app = express();     
const http = require("http");
const fs = require("fs");


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data)
  }
});

app.use(express.static("public"));   
app.use(express.json());     
app.use(express.urlencoded({extended: true}));  

app.set("views", "views");   
app.set("view engine", "ejs");  

app.get("/author", (req, res) => {
  res.render("author", {user: user});
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
  console.log(`The server is running successfully on port: ${PORT}`);
});






















// TASK 18-19 [express, ejs]

// const express = require("express");
// const res = require("express/lib/response");
// const app = express();     // expressning 'app' objectini yaratamiz
// const http = require("http");
// const fs = require("fs");


// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     user = JSON.parse(data)
//   }
// });

// // 1: Kirish code      
// app.use(express.static("public"));   
// app.use(express.json());     
// app.use(express.urlencoded({extended: true}));  

// // 2: Session code  -> xozircha foydalanmaymiz

// // 3: Views code    
// app.set("views", "views");   
// app.set("view engine", "ejs");  

// // 4: Routing code  (har bir page uchun link yaratamiz)
// app.post("/create-item", (req, res) => {
//   console.log(req.body);
//   res.json({test: "success"});
// });

// app.get("/author", (req, res) => {
//   res.render("author", {user: user});
// });

// app.get("/", function(req, res) {
//   res.render("harid");
// });


// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function() {
//   console.log(`The server is running successfully on port: ${PORT}`);
// });






















// console.log("Dastlabki vazifa");


// console.log("");

// const calculate = require('./hisob.js');

// const natija = calculate.kopaytirish(80, 30);
// console.log("Natija:", natija);
// console.log("=====================");

// const natija1 = calculate.qoshish(80, 30);
// console.log("Natija:", natija1);
// console.log("=====================");

// const natija2 = calculate.ayirish(80, 30);
// console.log("Natija:", natija2);
// console.log("=====================");

// const natija3 = calculate.bulish(80, 30);
// console.log("Natija:", natija3);

// console.log("========================================================================");

 

// const Account = require("./account");

// Account.tellMeAboutClass();
// Account.tellMeTime();
// const myAccount = new Account('Kevin', 250000, 4568645642315263486);

// myAccount.tellMeBalance();
// console.log("*****************")
// myAccount.withdrowMoney(150000);
// console.log("*****************")
// myAccount.makeDeposit(77777);
// console.log("*****************")
// myAccount.giveMeDetails();