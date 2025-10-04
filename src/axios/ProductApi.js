import axios from 'axios';
const BASE_URL = 'https://fakestoreapi.com/products';

export const getProductsByCategory = async (category) => {
    try {
        const response = await axios.get(`${BASE_URL}/category/${category}`);
        return response.data;
    }
    


    catch (error) {
        console.error(`Error fetching products in category ${category}:`, error);
        throw error;
    }
}