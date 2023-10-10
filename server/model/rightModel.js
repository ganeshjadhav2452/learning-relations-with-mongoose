const mongoose = require('mongoose')


const RightSchema = new mongoose.Schema({
    staffId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Staff',
    },
    right:{
        type:String,
       
    }

})

module.exports = mongoose.model('Right',RightSchema)