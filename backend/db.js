/*todo{
    title:string;
    description:title;
    completed:boolean;
}
*/


const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://reetmalik14:12345@cluster0.sembauz.mongodb.net/todos")
const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})


const todo = mongoose.model('todos', todoschema);
module.exports={
    todo
}