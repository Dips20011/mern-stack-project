import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
        unique: true,
    },
    company
: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phonenumber: {      
        type: Number,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        required: true,
        unique: true,
    }
});
const Contact = mongoose.model("Contact", userSchema);

export default Contact;