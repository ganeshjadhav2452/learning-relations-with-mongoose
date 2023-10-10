require("dotenv").config();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback)=>{
    MongoClient.connect(
        `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_USERPASSWORD}@learningcluster.i4rpmhh.mongodb.net/?retryWrites=true&w=majority`
      )
        .then((res) =>{
            _db = res.db()
            console.log("MONGODB CONNECTED SUCCESSFULLY")
            callback()
        })
        .catch((err) => console.log(err));
      
}

const getDB = ()=>{
    if(_db){
        return _db;
    }
}

module.exports = mongoConnect;
module.exports = getDB;