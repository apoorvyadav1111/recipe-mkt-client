// src/pages/Recipes.tsx
import React, { useEffect, useState } from 'react';
import RecipeList from '../components/RecipeList';
import FilterBox from '../components/FilterBox';
import { Recipe } from '../interfaces/Recipe';
import { getAllRecipes } from '../services/recipeService';

const Recipes = () => {
    const [recipes, setRecipes] = useState([] as Recipe[]);
    const [filteredRecipes, setFilteredRecipes] = useState([] as Recipe[]);

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const data = await getAllRecipes();
                setRecipes(data);
                setFilteredRecipes(data);
            } catch (error) {
                console.error('Error fetching recipes: ', error);
            }
        }
        getRecipes();
    }, []);

    const handleFilterChange = (filters: {
        searchString: string,
        minRating: number,
        cuisine: string
    }) => {
        const { searchString, minRating, cuisine } = filters;
        const filtered = recipes.filter(recipe => {
            if (
                    searchString && 
                    !recipe.title.toLowerCase().includes(searchString.toLowerCase()) && 
                    !recipe.ingredients.join(' ').toLowerCase().includes(searchString.toLowerCase())
            ){
                return false;
            }
            if (minRating && recipe.rating < minRating) return false;
            if (cuisine && cuisine !== 'All' && recipe.cuisine !== cuisine) return false;
            return true;
        });
        setFilteredRecipes(filtered);
    }

    return (
        <div className="bg-slate-100 p-10 justify-center">
            <h1 className="text-5xl font-bold text-rose-600  mb-4">Find your recipe</h1>
            <FilterBox onFilterChange={handleFilterChange} />
            <RecipeList recipes={filteredRecipes} />
        </div>
    );
};

export default Recipes;
