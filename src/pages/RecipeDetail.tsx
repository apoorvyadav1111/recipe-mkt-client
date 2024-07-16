// src/pages/Recipe.tsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getRecipeDetail } from '../services/recipeService';

const Recipe = () => {
    const { id } = useParams<{ id: string}>();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const getRecipe = async () => {
            try {
                const data = await getRecipeDetail(id??'');
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        }
        getRecipe();
    }, [id]);

    if (!recipe) return <p>Loading...</p>;
    return (
        <div className="p-12 bg-slate-100">
            <RecipeDetail recipe={recipe} />  
            <Link to="/recipes" className="text-white">
            <button className="mt-4 bg-rose-600 hover:bg-transparent text-white hover:text-rose-600 font-bold py-2 px-4 rounded-md">
                <FontAwesomeIcon icon="arrow-left" className="mr-2" />Home
            </button>
            </Link>
        </div>
    );
};

export default Recipe;
