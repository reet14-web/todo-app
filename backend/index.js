const express =require ("express");
const {createtodo, updatetodo}=require("./types");
const { todo } = require("./db");
const app=express();
app.use(express.json());//will be able to pass a body if its a json body,allows to passs all forms of inputs
//body{expected
 //title:String;
//descrition:string
    //
//}




app.post("/todo" , async function (req,res){//creating todo
const createPayload=req.body;
const parsedPayload=createtodo.safeParse(createPayload);
if(!parsedPayload.success){
    res.status(411).json({
        msg:"you sent the wrong  input",
    })
    return;
}
//mongodb:
//async and await
  await todo.create({
     title:createPayload.title,
    description:createPayload.description,
  completed:false
})
res.json({
    msg:"todo created"  
})

//creating mongidb ,putting something mongodb,updating somthing in mongodb,and getting something from mongodb
})
app.get("/todos" , async function(req,res){//get todo
const todos =  await todo.find({

});
res.json({
     todos//promise,its a promise which will happen 

}) 
})
//
app.put("/completed" , async function(req,res){//marking to put a completed todo
  const updatepayload=req.body;
  const parsepayload=updatetodo.safeParse(updatepayload);
  if(!parsepayload.success){
    res.status(411).json({
        msg:"wrong input"
    })
    return;
  }
 await todo.update({
_id:req.body.id//underscore mongo db automated plz update to this underscore id
 },{
    completed:true
 })
 res.json({
    msg:"Todo mark as completed"
 })
 })
 app.listen(3000);