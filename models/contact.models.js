var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
    fullName: {
        type: String
    },
    companyName: {
        type: String
    },
   
   
    zip: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    adress:{
        type: String 
    },
  
    active: {
        type: Number,
        default: 1
    }
});

var Contact = mongoose.model('contact', ContactSchema);
module.exports = Contact;