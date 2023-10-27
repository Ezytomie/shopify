import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api.instance"; // Adjust this to your actual API instance

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      // Make an API request to fetch the list of products
      const response = await api.get("/products");
      const products = response.data; // Adjust this based on your API response format
      return products;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);

// Add more async thunks for creating, updating, or deleting products if needed
