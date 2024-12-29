
import Card from "./components/Card";
import axios from "axios";
// import { useEffect } from "react";


export default function Home() {
  // const fetchRecipe = async ()=>{
  //   const response = await axios.get("http://localhost:3000/api/recipe/")
  //   console.log(response)
  // }

  // useEffect(()=>{
  //   fetchRecipe()
  // },[])
 

  return (
   <div className="flex flex-wrap">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
   </div>
  );
}


// postgresql://postgres.jjuclcgascwyegoqahtr:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres