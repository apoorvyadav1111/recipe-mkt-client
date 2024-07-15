import { Link } from "react-router-dom";
import { Recipe } from "../interfaces/Recipe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface RecipeListProps {
    recipes: Recipe[];
}

const RecipeList = (
    {recipes}: RecipeListProps
) => {

    return ( 
        <>
        <ul className="grid grid-cols-2 justify-center">
            {recipes.map(recipe => (
                <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
                    <div className="p-4 m-4 bg-white rounded shadow">
                        <li>
                            <h2 className="text-2xl font-bold">{recipe.title}</h2>
                            {recipe.rating && (
                                <p className="text-yellow-500">
                                    {[1,2,3,4,5].map((star, i) => (
                                        <FontAwesomeIcon
                                        key={i}
                                        icon={faStar}
                                        className={`text-md cursor-pointer ${star <= recipe.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                                        />
                                    ))}
                                </p>
                            )}
                            <p className="text-black"><i>{recipe.cuisine}</i></p>
                            {recipe.ingredients.slice(0,5).map((ingredient, i) => (
                                <button key={i} className="rounded-full bg-rose-400 px-2 mr-2 text-white text-sm">{ingredient}</button>
                            ))}

                        </li>
                    </div>
                </Link>

            ))}
        </ul>
        </>
     );
}
 
export default RecipeList;