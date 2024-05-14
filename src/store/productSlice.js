import { createSlice } from "@reduxjs/toolkit";
import { trending, men, women, kids } from "../data/dummyData";


const initialState = {
  products: [trending, men, women, kids],
  filters: {
    category: [],
    type: "",
    color: [],
    size: [],
    price: { min: 0, max: Infinity },
    search : ''
  },
  cart: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setFilters(state, action) {
        const {filterType, value} = action.payload;

        switch(filterType) {
            case 'category':
                state.filters.category = value;
                break;
            
            case 'type':
                state.filters.type = value;
                break;
            
            case 'color':
                state.filters.color = value;
                break;

            case 'size':
                state.filters.size = value;
                break;

            case 'price':
                state.filters.price = value;
                break;

            case 'search':
                state.filters.search = value;
                break;

            default: 
                break;
        }
    },

    addToCart(state, action){
        const {productId} = action.payload;
        const existingProduct = state.cart.find((item) => item.id === productId);

        if(existingProduct){
            existingProduct.quantity += 1;
        }else{
            const productToAdd = state.products.find((item) => item.id === productId);
            state.cart.push({...productToAdd, quantity: 1});
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cart));
    },

    deletFromCart(state, action){
        const {productId} = action.payload;
        state.cart = state.cart.filter((item) => item.id  !== productId);
        localStorage.setItem('cartItems', JSON.stringify(state.cart));
    },

    deleteAll(state){
        state.cart = [];
        localStorage.removeItem('cartItems');
    },

  },
});

const filterProducts = (state) => {
    const {products, filters} = state;
    let filteredList = products;

    if(filters.category.length){
        filteredList = filteredList.filter((product) =>
            filters.category.includes(product.category)
          );
    }
    if(filters.type.length){
        filteredList = filteredList.filter((product) => filters.type.includes(product.type));
    }
    if(filters.color.length){
        filteredList = filteredList.filter((product) => filters.color.includes(product.color));
    }
    if(filters.size.length){
        filteredList = filteredList.filter((product) => filters.size.includes(product.size));
    }
    if(filters.price){
        filteredList = filteredList.filter((product) => filters.price.includes(product.price));
    }


    if(filters.search){
        const searchTerm = filters.search.toLowerCase();
        filteredList = filteredList.filter((product) => {
            const title = product.title.toLowerCase();
            const type = product.type ? product.type.toLowerCase() : '';
            return title.includes(searchTerm || type.includes(searchTerm));
        });
    }

    return filteredList;
}

export const {setFilters, addToCart, deletFromCart, deleteAll} = productsSlice.actions;
export const selectProducts = (state) => filterProducts(state);
export default productsSlice.reducer;