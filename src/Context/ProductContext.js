import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/ProductReducer'



const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
// const API = "https://flipcart-mern-eo8h.onrender.com/products"

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
}
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        // debugger
        try {
            const res = await axios.get(url);
            const products = await res.data;
            console.log("products", products)
            dispatch({ type: "SET_API_DATA", payload: products })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
            console.log("products11")
        }
    }

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            console.log("singleProductData", singleProduct)
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    };

    useEffect(() => {
        console.log("firstLine")
        getProducts(API);
    }, [])

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    )
};

// custom Hook
const useProductContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useProductContext } 
