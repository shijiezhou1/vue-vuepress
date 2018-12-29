var mongoResult = 1000;
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://abc1234:abc1234@cluster0-7lnqj.mongodb.net/test?retryWrites=true';

// Database Name
const dbName = 'node-mongodb-native';
MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
});

module.exports = mongoResult;