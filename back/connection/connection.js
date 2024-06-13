const mongoose =require('mongoose')

const url = "mongodb+srv://hari19:1234@cluster0.psgv9vh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const Connection =()=>{
    mongoose.connect(url)
    .then(()=>{
        console.log("DB Connected")
    })
    .catch((err)=>{
        console.log("Connection Error",err)
    })
}

module.exports = Connection;