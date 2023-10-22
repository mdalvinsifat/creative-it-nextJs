import { NextResponse } from "next/server";
import Auth from "../model/model";
import bcryptjs from 'bcryptjs'
import Connection from "../../db/db";


Connection()
export const POST = async(requst) =>{
    try {
        const body = await requst.json()   
        const {email , password} = body ;
        
        
        const user = await Auth.findOne({email})
        if(user){
            return NextResponse.json({
                success:false,
                message:"user Already Exit"
            })
        }

        const salt = await bcryptjs.genSalt(12)
        const hashpassword = await bcryptjs.hash(password , salt)
       
        const users = new Auth({
        email,
        password:hashpassword
        })

        const savedUser = await users.save()
        return NextResponse.json({
            success:true,
            message:"user create Successfully",
            users
        })

    } catch (error) {
        console.log(error)
    }
}