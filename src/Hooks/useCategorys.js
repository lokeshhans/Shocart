import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:8765/products";

function useCategorys() {
  const [categoryList, setCategoryList] = useState(null);
  const getAllCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categories`, {
        withCredentials: true,
      });
      setCategoryList(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  return [categoryList];
}

export default useCategorys;
