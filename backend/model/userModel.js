const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a text value'],
    },
    email:{
        type: String,
        required: [true, 'Please add a text value'],
    },
    password:{
        type: String,
        required: [true, 'Please add a text value'],
    },
},
    {
        timestamps: true,
    })
module.exports = mongoose.model('User', userSchema);    