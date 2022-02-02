//Desestructuracion de objetos
// const cat = {
//     name: "Garfield",
//     age = 10,
//     meow: true
// }

// const {name,age,meow} = cat 

const {Schema, model} = require("mongoose")

const catSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type :Number,
        default:1
    },
    color: {
        type:String,
        enum: ["black","white","brown","grey","orange","yellow"],
    },
    meow: Boolean,

})

module.exports =model("Cat", catSchema)