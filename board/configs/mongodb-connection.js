const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://Tae:0809@cluster0.hapf2bc.mongodb.net/board";

module.exports = function (callback) {
  return MongoClient.connect(uri, callback);
}
