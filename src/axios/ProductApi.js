import axios from 'axios';
const BASE_URL = 'https://fakestoreapi.com/products';

export const getProductById = async (id) => { 
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);          
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        throw error;
    }
}
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