const mongoose = require("mongoose")
const Cat = require("./models/Cat")
mongoose
.connect('mongodb://localhost:27017/catss',{})
.then(() => {
    console.log('connected to mongodb');
})
.catch((err) => {
    console.log(err);
})
//nombre  👇 Cat en el mundo de JS
    //const Cat = mongoose.model('Cat',{name:String})
//nombre de la coleccion        👆         👆 Esctructura (Schema) 

//const nina = new Cat({name:"Nina"})
//nina.save().then((res) => {console.log(res)}).catch((e) =>{ console.log(e)}) // agrega info al mongosee

//CREATE
//Cat.create({name:"Garfield"},{name:"Firulais"},{name:"Benito Bodoque"}).then((r) => {console.log(r)}).catch((e) =>{console.log(e)})

//FIND
//Cat.find().then((r)=>console.log(r)).catch((e) =>console.log(e))

//Async await busca todos
/*async function listAllCats(){
    try{
       const cats= await Cat.find()
        console.log(cats)
    }catch(error){
        console.log(error)
    }

}
listAllCats()*/

//Async await busca uno

// async function listAllCats(){
//     try{
//         const cats= await Cat.findOne({name:"Garfield"})
//         console.log(cats)
//     }catch(error){
//         console.log(error)
//     }

// }
// listAllCats()

//Cat.create({name: "Tomas", color: "yellow",meow:true}).then((cat)=> console.log(cat))

//READ te ayuda para buscar 
Cat.find({
    color: "yellow",
    },
    {name:1}
).then((cats) => console.log(cats))

//UPDATE actualiza el valor 
// Cat.updateOne({ name: "Garfield" }, { name: "garfield", age: 5 })
//   .then((cat) => console.log(cat))
//   .catch((e) => console.log(e));

// Cat.findByIdAndUpdate(
//   "61facc4d3528aff2796aaca4",
//   { name: "Michiote", age: 8 },
//   { new: true }
// )
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

//DELETE
// Cat.deleteOne({ name: "Michiote" })
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));