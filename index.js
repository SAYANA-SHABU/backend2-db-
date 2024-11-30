const express = require("express")

require("./connection")

var stdModel =require("./models/student")

var app= express(); 
app.use(express.json());
app.post('/add',async(req,res)=>{
    try {
        await stdModel(req.body).save()
        res.send("Data added!");
    } catch (error) {
       console.log(error);
    }
})
app.get('/view',async(req,res)=>{
    try {
       emp= await stdModel.find()
        res.send(emp);
    } catch (error) {
       console.log(error);
    }
})
app.put('/update/:id',async(req,res)=>{
    try {
      await stdModel.findByIdAndUpdate(req.params.id, req.body)
        res.send("Updated successfully!!");
    } catch (error) {
       console.log(error);
    }
})
app.delete('/del/:id',async(req,res)=>{
    try {
        await stdModel.findByIdAndDelete(req.params.id)
        res.send("deleted successfully!!");
    } catch (error) {
       console.log(error);
    }
})
app.listen(2014,()=>{
    console.log("Port is running"); //port setting
});