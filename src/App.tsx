// src/App.tsx
import React from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';


const App = () => {
    const location = useLocation();

    return (
        <div className="App">
            <Routes location={location} key={location.pathname}>
                <Route  path="/" element ={<Home/>} />
                <Route  path="/recipes" element={<Recipes/>} />
                <Route path="/recipes/:id" element={<RecipeDetail/>} />
            </Routes>
        </div>
    );
};

export default App;
