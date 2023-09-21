const mongoose = require('mongoose');

// queryform schema information
const queryFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,  
        required: [true, 'email is required'],
    },
    mobileNo: {
        type: Number,
        required: [true, 'Mobile no is required'],
    },
    courseToApply: {
        type: String,
        required: [true, 'Course Name is required']
    }, 
     
},{
    timestamps: true,
    get: time => time.toDateString()
 }
);

const QueryForm =  mongoose.model("QueryForm", queryFormSchema)

module.exports = QueryForm;