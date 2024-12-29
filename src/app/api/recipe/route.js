import { recipes } from "@/db/schema"
import { db } from "../../../db/db"



export async function GET(){
    const datas = await db.select().from(recipes)
    return Response.json({
        recipes : datas
    })
}

export async function POST(request){
    let data = await request.json()
   try {
     await db.insert(recipes).values(data) 
     return Response.json({
        message : "Date inserted successfully"
     },{status : 201})
   } catch (error) {
     return Response.json({
        message : error.message
     },{status:500})
   }
}