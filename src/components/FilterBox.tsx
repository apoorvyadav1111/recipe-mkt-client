import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface FilterBoxProps {
    onFilterChange: (filters: { searchString: string, minRating: number, cuisine: string }) => void;
}

const cuisines = ['All', 'Italian', 'Mexican', 'Indian', 'Chinese', 'American', 'British'];


const FilterBox = ({onFilterChange}:FilterBoxProps) => {
    const [searchString, setSearchString] = useState<string>('');
    const [minRating, setMinRating] = useState<number>(1);
    const [cuisine, setCuisine] = useState<string>('');

    const handleFilterChange = () => {
        onFilterChange({ searchString, minRating, cuisine });
    }

    const handleRatingChange = (rating: number) => {
        setMinRating(rating);
        onFilterChange({ searchString, minRating: rating, cuisine });
    }

    const handleCuisineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCuisine(e.target.value);
        onFilterChange({ searchString, minRating, cuisine: e.target.value });
    }

    return (
        <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow-lg flex space-x-10 border">
            <div className="mb-2">
                <label className="block text-gray-700">Search by ingredient:</label>
                <input
                    type="text"
                    placeholder="e.g. chicken, tomato, etc."
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                    onBlur={handleFilterChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-2">
                <label className="block text-gray-700">Cuisine:</label>
                <select
                    value={cuisine}
                    onChange={handleCuisineChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    {cuisines.map((cuisine) => (
                        <option key={cuisine} value={cuisine}>
                            {cuisine}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-2">
                <label className="block text-gray-700 mb-1">recipe instruction ratings (minimum):</label>
                <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FontAwesomeIcon
                                key={star}
                                icon={faStar}
                                onClick={() => handleRatingChange(star)}
                                className={`text-xl cursor-pointer ${star <= minRating ? 'text-yellow-400' : 'text-gray-400'}`}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
 
export default FilterBox;