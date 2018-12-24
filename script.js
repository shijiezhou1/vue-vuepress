const mongoose = require('mongoose');

const result = mongoose.connect('mongodb+srv://abc1234:abc1234@cluster0-7lnqj.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

console.log(result);