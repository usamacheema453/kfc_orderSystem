import React, { useState, useEffect } from 'react';
import axios from 'axios';
import category from './Category';
const Listing = () => {
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState({
        category: '',
        title: '',
        details: '',
        price: '',
        image: null
    });
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/category');
                
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setProduct(prev => ({ ...prev, image: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        Object.entries(product).forEach(([key, value]) => {
            if (value) formData.append(key, value);
        });

        try {
            const response = await axios.post('http://localhost:5000/api/products/add', formData);
            setNotification('Product added successfully!');
            setProduct({
                category: '',
                title: '',
                details: '',
                price: '',
                image: null
            });
            console.log('details', setProduct);
        } catch (error) {
            console.error('Error adding product:', error);
            setNotification('Failed to add product. Please try again.');
        }
        setIsLoading(false);
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-center text-4xl font-bold py-4">Add Listing of Products</h2>
            {notification && <p className="text-center text-red-500">{notification}</p>}
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a category</label>
                <select 
                    name="category" 
                    value={product.category} 
                    onChange={handleChange} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" 
                    required
                >
                    <option value="">Choose a category</option>
                    {categories.map((item) => (
                        <option key={item._id} value={item._id}>{item.name}</option>
                    ))}
                </select>

                <div className="mb-4">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Product Name</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={product.title} 
                        onChange={handleChange} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" 
                        placeholder="Product name" 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900">Details</label>
                    <input 
                        type="text" 
                        name="details" 
                        value={product.details} 
                        onChange={handleChange} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" 
                        placeholder="Details" 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                    <input 
                        type="number" 
                        name="price" 
                        value={product.price} 
                        onChange={handleChange} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" 
                        placeholder="Price" 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Upload Image</label>
                    <input 
                        type="file" 
                        name="image" 
                        onChange={handleFileChange} 
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" 
                    />
                </div>

                <button 
                    type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    disabled={isLoading}
                >
                    {isLoading ? 'Adding...' : 'Add Product'}
                </button>
            </form>
        </div>
    );
};

export default Listing;
