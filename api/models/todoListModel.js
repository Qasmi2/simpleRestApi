'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name:{ 
        type : String,
        // required: 'Please Enter the name of the task ...'
    },
    created_date:{ 
        type: Date, 
        default: Date.now
    },
    status:{
        type: [{
            type: String, 
            enum: ['panding','ongoing','completed']
        }], 
        default: ['panding']
    }
});

module.exports = mongoose.model ('Tasks',TaskSchema);