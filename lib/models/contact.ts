import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    firstName : {
        type : String, 
        requried : true
    },
    lastName : {
        type : String,
        requried : true
    },
    email : {
        type : String,
        requried : true,
    },
    countryCode : {
        type : String,
        requried : true,
    },
    number : {
        type : Number,
        requried : true,
    },
    message : {
        type : String,
        requried : true,
    }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
export default Contact;