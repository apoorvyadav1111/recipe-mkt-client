import { DetailedRecipe } from "../interfaces/Recipe";

interface RecipeDetailProps {
    recipe: DetailedRecipe;
}

const RecipeDetail = ({recipe}:RecipeDetailProps) => {
    if (!recipe) return <p>Loading...</p>;

    return (
        <div className="p-4 bg-white rounded shadow">
            <h1 className="text-3xl font-bold">{recipe.title}</h1>
            <p className="text-gray-600">Cuisine: {recipe.cuisine}</p>
            <p className="text-gray-600">Rating: {recipe.rating}</p>
            <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
            <ul className="list-disc list-inside">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2 className="text-xl font-semibold mt-4">Instructions</h2>
            <ol className="list-decimal list-inside">
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
}
 
export default RecipeDetail;