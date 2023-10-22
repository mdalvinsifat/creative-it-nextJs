import { NextResponse } from "next/server";

import Course from "../model/model";
import Connection from "../../db/db";

Connection()

export const GET = async(requst , {params}) =>{
    const {id} = params;
    const course = await Course.findById({_id:id})
    return NextResponse.json({course})
}

export const DELETE = async(requst , {params}) =>{
    const {id} = params;
    const course = await Course.findByIdAndDelete({_id:id})
    return NextResponse.json({course})
}



export const PUT = async (requst , {params})=>{
    const {id} = params;
    const {name , title, img , skile, skile1, skile2,skile3, skile4} = await requst.json()
    const course = await Course.findByIdAndUpdate(id,  {name , title, img , skile, skile1, skile2,skile3, skile4} )
    return NextResponse.json({course})
}