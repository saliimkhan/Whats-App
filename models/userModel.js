const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/dynamic-chat-app');
// const plm = require(`passport-local-mongoose`);

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true,
        // unique: true,
    },

    image:{
        type: String,
        require: true,
    },

    password: {
        type: String,
    },

    is_online:{
        type:String,
        default:'0'
    }

    


},
{timestamps:true}
);



// userSchema.plugin(plm);


module.exports = mongoose.model(`User`, userSchema);