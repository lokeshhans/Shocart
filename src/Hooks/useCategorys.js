import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL = 'https://fakestoreapi.com/products';

function useCategorys() {
  const [categoryList, setCategoryList] = useState(null);
  const getAllCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categories`);
      setCategoryList(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  };
  useEffect(() => {
    getAllCategories()
  }, []);
  return [categoryList];
}

export default useCategorys;
