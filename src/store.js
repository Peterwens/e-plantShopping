import { configureStore } from '@reduxjs/toolkit'; // Import the configureStore function from @reduxjs/toolkit
import cartReducer from './CartSlice'; // Import the reducer function from CartSlice.jsx

// Configure the store
const store = configureStore({
    reducer: {
        cart: cartReducer, // Associate the cart reducer with the cart slice of state
    },
});

// Export the configured store
export default store;
