
import Card from "./components/Card";


const fetchRecipes = async ()=>{
try {
  const response = await fetch("http://localhost:3000/api/recipe",{
    cache : "no-store"
  })
  if(!response.ok){
    throw new Error("Failed to fetch recipes")
  }
  return response.json()
} catch (error) {
  console.log(error)
  return []
}
}

export default  async function Home() {
  const {recipes} = await fetchRecipes()
  console.log(recipes)
  return (
   <div className="flex flex-wrap">
    {
      recipes.map((recipe)=>{
        return (
          <Card key={recipe.id} recipe={recipe} />
        )
      })
    }
    <Card />
   </div>
  );
}



// postgresql://postgres.jjuclcgascwyegoqahtr:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres