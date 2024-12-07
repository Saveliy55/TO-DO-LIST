const mongoose = require('mongoose')
const Schema= mongoose.Schema
const workSchema = ({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    time:{
        type: String,
    },
    date:{
        type:String,
    },
    statusTask:{
        type:String,
        default:'Выполнить'  // Done
    
      
    },
})
module.exports= mongoose.model("send",workSchema)