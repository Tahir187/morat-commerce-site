import { createSlice } from "@reduxjs/toolkit";
import { trending, men, women, kids } from "../data/dummyData";

const initialState = {
  products: [trending, men, women, kids],
  filters: {
    category: [],
    type: [],
    color: [],
    size: [],
    price: { min: 0, max: Infinity },
    search: "",
  },
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  itemsCount: 0,
  totalAmount: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setFilters(state, action) {
      const { filterType, value } = action.payload;

      // Update filter based on type
      switch (filterType) {
        case "category":
          state.filters.category = value; // Replace or append based on selection
          break;

        case "type":
          state.filters.type = value; // Replace or append based on selection
          break;

        case "color":
          state.filters.color = value; // Replace or append based on selection
          break;

        case "size":
          state.filters.size = value; // Replace or append based on selection
          break;

        case "price":
          state.filters.price = value;
          break;

        case "search":
          state.filters.search = value;
          break;

        default:
          break;
      }
    },

    clearFilters(state) {
      state.filters = {
        category: [],
        type: [],
        color: [],
        size: [],
        price: { min: 0, max: Infinity },
        search: "",
      };
    },

    addToCart(state, action) {
      const productId = action.payload;
      console.log("product id in slice", productId);
      const product = action.payload;
      console.log("which product is in Slice", product);
      const existingProduct = state.cart.find((item) => item.id === productId);

      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice =
          existingProduct.quantity * existingProduct.price;
      } else {
        state.cart.push({
          ...product,
          quantity: 1,
          totalPrice: productId.price,
        });
      }
      state.itemsCount = state.cart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalAmount = state.cart.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    removeFromCart(state, action) {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productId);

      state.itemsCount = state.cart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalAmount = state.cart.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    deleteAll(state) {
      state.cart = [];
      state.itemsCount = 0;
      state.totalAmount = 0;
      localStorage.removeItem("cartItems");
    },

    toggleProductQuantity(state, action) {
      const { productId, type } = action.payload;
      const existingProduct = state.cart.find((item) => item.id === productId);

      if (existingProduct) {
        let tempQty = existingProduct.quantity;
        let tempTotalPrice = existingProduct.totalPrice;

        if (type === "INC") {
          tempQty++;
          if (tempQty > existingProduct.stock) tempQty = existingProduct.stock;
        } else if (type === "DEC") {
          tempQty--;
          if (tempQty < 1) tempQty = 1;
        }

        existingProduct.quantity = tempQty;
        existingProduct.totalPrice = tempQty * existingProduct.price;
      } else {
        console.warn(`Product with ID ${productId} not found in cart`);
      }

      state.itemsCount = state.cart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalAmount = state.cart.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});

const filterProducts = (state) => {
  const { products, filters } = state.products;

  const filteredByProducts = products.filter((product) => product);

  let filteredList = filteredByProducts; 

  if (filters?.category?.length) {
    filteredList = filteredList.filter((product) =>
      filters.category.includes(product.category)
    );
  }

  if (filters?.type?.length) {
    filteredList = filteredList.filter((product) =>
      filters.type.includes(product.type)
    );
  }

  if (filters?.color?.length) {
    filteredList = filteredList.filter((product) =>
      filters.color.some((color) => product.color.includes(color))
    );
  }

  if (filters?.size?.length) {
    filteredList = filteredList.filter((product) =>
      filters.size.some((size) => product.size.includes(size))
    );
  }

  if (filters?.price?.min !== 0 || filters.price?.max !== Infinity) {
    filteredList = filteredList.filter(
      (product) =>
        product.price >= filters.price.min && product.price <= filters.price.max
    );
  }

  if (filters?.search?.trim()) {
    const searchTerm = filters.search.toLowerCase();
    filteredList = filteredList.filter((product) => {
      const title = product?.title?.toLowerCase() ?? "";
      const category = product.category ? product.category.toLowerCase() : "";
      return title.includes(searchTerm) || category.includes(searchTerm);
    });
  }

  return filteredList;
};


export const {
  setFilters,
  addToCart,
  removeFromCart,
  deleteAll,
  toggleProductQuantity,
  ...otherAction
} = productsSlice.actions;
export const selectProducts = (state) => filterProducts(state);
export default productsSlice.reducer;
