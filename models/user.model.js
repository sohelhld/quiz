const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username: {type:String,require:true},
        email: {type:String,require:true}, 
},{
    versionKey:false
})

const userModel = mongoose.model("user",userSchema)

module.exports={
    userModel
}