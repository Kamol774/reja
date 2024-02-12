const http = require("http");
const mongodb = require("mongodb")

let db;
const connectionString = "mongodb+srv://kkhalilov:Kamol.93@cluster0.ll50jyy.mongodb.net/"


mongodb.connect(
  connectionString, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, 
  (err, client) => {
    if (err) console.log("ERROR on connection mongoDB");
    else{
      console.log("MongoDb connection succeed")
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function() {
        console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
     });
    }
  })
