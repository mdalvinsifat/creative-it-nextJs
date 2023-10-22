import mongoose, { mongo }  from "mongoose";



const Connection = async() =>{
    try {
        const res = await mongoose.connect(process.env.MONGOURL)
        console.log("mongoose Connect")
    } catch (error) {
        console.log(error)
    }
}

export default Connection ;