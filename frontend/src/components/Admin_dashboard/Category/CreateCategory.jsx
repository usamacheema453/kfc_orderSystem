import React, { useState } from 'react';
import axios from 'axios';

const CreateCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const [notification, setNotification] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setCategoryName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/category/add', { name: categoryName });
            setNotification('Category created successfully!');
            setCategoryName(''); // Clear the input field after successful creation
        } catch (error) {
            setNotification('Failed to create category. Please try again.');
            console.error('Error creating category:', error);
        }
        setIsLoading(false);
    };

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl font-bold py-4">Create New Category</h2>
            {notification && <p className="text-center text-red-500">{notification}</p>}
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="categoryName" className="block mb-2 text-sm font-medium text-gray-900">Category Name</label>
                    <input 
                        type="text" 
                        name="categoryName" 
                        value={categoryName} 
                        onChange={handleInputChange} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" 
                        placeholder="Enter category name" 
                        required 
                    />
                </div>
                <button 
                    type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    disabled={isLoading}
                >
                    {isLoading ? 'Creating...' : 'Create Category'}
                </button>
            </form>
        </div>
    );
};

export default CreateCategory;
