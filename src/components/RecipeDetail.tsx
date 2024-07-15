import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DetailedRecipe } from "../interfaces/Recipe";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface RecipeDetailProps {
    recipe: DetailedRecipe;
}

const RecipeDetail = ({recipe}:RecipeDetailProps) => {
    if (!recipe) return <p>Loading...</p>;
    return (
        <div className="rounded">
            <h1 className="text-3xl font-bold text-rose-600">{recipe.title}</h1>
            <p className="text-gray-800 font-bold"><i>{recipe.cuisine}</i></p>
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
            <h2 className="text-2xl font-semibold mt-4">Ingredients</h2>
            <ul className="list-disc list-inside">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2 className="text-2xl font-semibold mt-4">Instructions</h2>
            <ol className="list-decimal list-inside">
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
}
 
export default RecipeDetail;