import { Link } from "react-router-dom";
import { Recipe } from "../interfaces/Recipe";

interface RecipeListProps {
    recipes: Recipe[];
}

const RecipeList = (
    {recipes}: RecipeListProps
) => {

    return ( 
        <>
        <ul className="space-y-4">
            {recipes.map(recipe => (
                <li key={recipe.id} className="p-4 bg-white rounded shadow">
                    <Link to={`/recipes/${recipe.id}`}>
                        <h2 className="text-2xl font-bold">{recipe.title}</h2>
                        <p className="text-gray-600">Cuisine: {recipe.cuisine}</p>
                        <p className="text-gray-600">Rating: {recipe.rating}</p>
                    </Link>
                </li>
            ))}
        </ul>
        </>
     );
}
 
export default RecipeList;