import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: 0,
        minPrice: 0,
        maxPrice: 100
    },
};

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    //console.log(products)
    const [state, dispatch] = useReducer(reducer, initialState);

    // to set grid view

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }

    // to set the list view
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    };

    // sorting funtion 
    const sorting = (event) => {
        let userValue = event.target.value;
        console.log(userValue)
        dispatch({ type: "GET_SORT_VALUE", payload: userValue })
    }
    // update the filter values
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        //console.log(value)

        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } })
    }

    // to clear the filter
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
    };

    //to sort the products with dropdown
    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS", payload: products })
    }, [state.sorting_value])

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
    }, [state.filters])
            
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);


    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters }}>
            {children}
        </FilterContext.Provider>
    );
};
//custom hook
const useFilterContext = () => {
    return useContext(FilterContext);
};
export { FilterContext, useFilterContext }