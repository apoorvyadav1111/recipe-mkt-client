// src/pages/Recipe.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetail';

const Recipe = () => {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/recipes/${id}`)
            .then(response => response.json())
            .then(data => setRecipe(data));
    }, [id]);

    if (!recipe) return <p>Loading...</p>;
    return (
        <div className="p-4">
            <RecipeDetail recipe={recipe} />
        </div>
    );
};

export default Recipe;
