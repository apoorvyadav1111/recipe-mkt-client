// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div 
            className="bg-cover bg-center min-h-screen flex flex-col justify-between p-10" 
            style={{ backgroundImage: "url('/background.jpg')" }}
        >
            <div className="flex flex-grow items-center justify-end">
                <div className='max-w-md text-center'>
                    <h1 className="text-6xl font-bold mb-4 text-rose-600">Welcome to the Recipe App</h1>
                    <button className='rounded-full bg-blue-800 p-4 hover:animate-pulse'>
                        <Link to="/recipes" className="text-white p-4">Browse Recipes</Link>
                    </button>
                </div>
            </div>
            <footer className='text-black text-right text-sm'>
                Photo by <a href="https://unsplash.com/@brookelark?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brooke Lark</a> on <a href="https://unsplash.com/photos/variety-of-sliced-fruits-08bOYnH_r_E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> | 
                <a href="https://apoorvyadav.vercel.app"> Demo Website by Apoorv Yadav </a>
            </footer>
           
        </div>
    )
};

export default Home;
