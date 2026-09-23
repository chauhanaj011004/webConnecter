const mongoose = require("mongoose")

const dbConnect = async ()=>{
    mongoose.connect("mongodb+srv://chauhanaj011004_db_user:Password@cluster0.p9pzjhi.mongodb.net/Test1?appName=Cluster0/")
}
module.exports = {dbConnect};