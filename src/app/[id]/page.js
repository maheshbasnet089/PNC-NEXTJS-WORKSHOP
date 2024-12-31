import Link from "next/link"
import DeleteButton from "./component/Delete";

async function SinglePage({params}){
    let recipe;
    let recipeId;
  try {
    recipeId = params.id 
    const response = await fetch("http://localhost:3000/api/recipe/" + recipeId)
    if(!response.ok){
        throw new Error("Failed to fetch the recipe")
    }
    const data = await response.json()
    recipe = data.recipe[0]

  } catch (error) {
    console.log(error)
  }

    return (
<div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                       <Link href="/1/edit">
                       <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit</button>
                       </Link>
                    </div>
            <DeleteButton recipeId={recipeId} />
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{recipe?.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {recipe?.subname}
                </p>
        
           

                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Recipe Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {recipe?.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default SinglePage

