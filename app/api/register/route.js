import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { connect } from "mongoose";
import {NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(req){
    try{

        const {name,email,password}=await req.json();

        const hashedPassword = await bcrypt.hash(password,10);
        
        await connectMongoDB();
        await User.create({name,email,password : hashedPassword});

        return NextResponse.json({massage:"User registered"},{status:201});

    }catch (error){
        return NextResponse.json(
            {massage:"An error occurred white registering the user"},{status:500}
        );
    }
}