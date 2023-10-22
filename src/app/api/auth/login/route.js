import { NextResponse } from "next/server"
import Auth from "../model/model"
import bcryptjs from 'bcryptjs'
import JWT from 'jsonwebtoken'
export const POST = async (requst) =>{
    try {
        const body = await requst.json()
        const {email , password} = body 
        
        const user = await Auth.findOne({email})
        if(!user){
            return NextResponse.json({
                success:false,
                message:"user not exit"
            })
        }


        const vaildpassword = await bcryptjs.compare(password , user.password)
        if(!vaildpassword){
            return NextResponse.json({
                success:false, 
                message:"password Incrennt"
            })
        }

        const token = await JWT.sign({
            email: user.email ,
                id :user._id
        },process.env.JWT_SECRETKEY,{expiresIn:"1h"})
    
    
        const respose = NextResponse.json({
            success:true,
            message:"user Login Successfully",  
            token
        })
    
        respose.cookies.set("token", token,{
            httpOnly:true,
        })
    
       return respose

    } catch (error) {
        console.log(error)
    }
}