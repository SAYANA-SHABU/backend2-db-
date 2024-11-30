const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Sayana:sayana281204@cluster0.eknc6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")// connect to mongoose
  .then(() => {
    console.log("Connected!")
  })
.catch((err)=>{
    console.log(err)
})