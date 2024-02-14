const http = require("http");
const mongodb = require("mongodb")

let db;
const connectionString = "mongodb+srv://kkhalilov:Kamol.93@cluster0.ll50jyy.mongodb.net/"   // mongoDB ga ulanadigan link


mongodb.connect(     // DB ning connect degan methodi => 3ta argument oladi
  connectionString, 
  {
    useNewUrlParser: true,  //urlparser eskirganda -> To use the new parser 
    useUnifiedTopology: true,  // To use the new Server Discover and Monitoring engine
  }, 
  (err, client) => {
    if (err) console.log("ERROR on connection mongoDB");
    else{
      console.log("MongoDb connection succeed")
      module.exports = client;
      const app = require("./app");   // express qurilyapti
      const server = http.createServer(app);  // server hosil bo'yapti
      let PORT = 3000;   // server 3000-portga listen qilyapti
      server.listen(PORT, function() {
        console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
     });
    }
  })
