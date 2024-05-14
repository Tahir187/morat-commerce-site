import { createSlice } from "@reduxjs/toolkit";
import {trending, men, women, kids} from "../data/dummyData";

const initialState = {
    products: [
        trending,
        men,
        women,
        kids,
    ],
    filters:{
        category: [],
        type: "",
        color: [],
        size: [],
        price: {min: 0, max: Infinity}
    }
}