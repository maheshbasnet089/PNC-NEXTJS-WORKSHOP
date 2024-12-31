import { recipes } from "@/db/schema"
import { db } from "../../../../db/db"
import { eq } from "drizzle-orm"


export async function GET(request,urlBataAakoData){
    const id = urlBataAakoData.params.id * 1 // "2" * 1 = 2
    try {
        let recipe = await db.select().from(recipes).where(eq(recipes.id,id)) // always returns in array
        if(recipe.length == 0){
            return Response.json({
                message : "no recipe found with that id"
            },{status:404})
        }
        return Response.json({
            message : "Data fetched successfully", 
            recipe
        },{status:200})
    } catch (error) {
        return Response.json({
            message : error.message
        },{status:500})
    }
}

export async function DELETE(request,urlBataAakoData){
    const id = urlBataAakoData.params.id * 1
    try {
        await db.delete(recipes).where(eq(recipes.id,id))
        return Response.json({
            message : "Data deleted successfully", 
        },{status:200})
    } catch (error) {
        return Response.json({
            message : error.message
        },{status:500})
    }
   
}