import mongoose from 'mongoose'



const AuthSchema = new mongoose.Schema({
    email:String,
    password:String
})


const Auth = mongoose.models.auth || mongoose.model("auth", AuthSchema)

export default Auth ; 