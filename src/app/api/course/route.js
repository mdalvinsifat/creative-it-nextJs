import { NextResponse } from "next/server"
import Course from "./model/model"
import Connection from "../db/db"

Connection()
export const GET = async(requst)=>{
    const course = await Course.find()
    return NextResponse.json({course})
}


export const POST= async (requst )=>{
    const {name , title, img , skile, skile1, skile2,skile3, skile4} = await requst.json()
    const course = await Course.create(
        {name , title, img , skile, skile1, skile2,skile3, skile4}
    )
    return NextResponse.json({course})
}