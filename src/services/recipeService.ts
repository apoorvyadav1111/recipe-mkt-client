const API_URL = process.env.REACT_APP_API_ENDPOINT;

export const getAllRecipes = async () => {
  console.log("here",API_URL);
  try {
    const response = await fetch(`${API_URL}/recipes/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const getRecipeDetail = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/recipes/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching recipe with id ${id}:`, error);
    throw error;
  }
};

