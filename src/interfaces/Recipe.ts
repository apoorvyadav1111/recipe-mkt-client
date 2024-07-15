export interface Recipe {
    id: number;
    title: string;
    cuisine: string;
    rating: number;
    ingredients: string[];
}

export interface DetailedRecipe {
    id: number;
    title: string;
    cuisine: string;
    rating: number;
    ingredients: string[];
    instructions: string[];
}
