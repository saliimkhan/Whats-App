const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/dynamic-chat-app');
// const plm = require(`passport-local-mongoose`);

const chatSchema = new mongoose.Schema({

    sender_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },

    receiver_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },

    message:{
        type:String,
        required:true
    },

    


},
{timestamps:true}
);



// userSchema.plugin(plm);


module.exports = mongoose.model(`Chat`, chatSchema);