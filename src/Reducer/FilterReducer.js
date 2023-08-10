const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":

    let priceArr = action.payload.map((curElem) => curElem.price);
    // console.log(priceArr)
    let maxPrice = Math.max(...priceArr);
    // console.log(maxPrice)
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };
      case "CLEAR_FILTERS":
        // if(state.all_products ===[]){
        //   console.log("darain!")
        //   return
        // }
        return {
          ...state,
          filters: {
            ...state.filters,
            text: "",   
            category: "all",
            company: "all",
            color: "all",
            maxPrice: 0,
            price: state.filters.maxPrice,
            minPrice: state.filters.maxPrice,
          },
        
        };
  
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      }
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort").value
      //console.log(userSortValue);
      return {
        ...state,
        sorting_value: action.payload,
      }

    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortProduct = [...action.payload];

      if (state.sorting_value === "a-z") {
        newSortData = tempSortProduct.sort((a, b) => {
          return a.name.localeCompare(b.name)
        });
      }
      if (state.sorting_value === "z-a") {
        newSortData = tempSortProduct.sort((a, b) => {
          return b.name.localeCompare(a.name)
        });
      }
      if (state.sorting_value === "lowest") {
        newSortData = tempSortProduct.sort((a, b) => {
          return a.price - b.price
        });
      }
      if (state.sorting_value === "highest") {
        newSortData = tempSortProduct.sort((a, b) => {
          return b.price - a.price
        });
      }
      //console.log("S",state.filter_products)
      return {
        ...state,
        filter_products: newSortData,
      }
    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      }
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let temFilterProduct = [...all_products];
      const { text, category, company,color,price } = state.filters;

      if (text) {
        temFilterProduct = temFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
        console.log(temFilterProduct, "tem")
      } else if (category !== "all") {
        temFilterProduct = temFilterProduct.filter((curElem) => {
          return curElem.category === category;
        });
      } else if (company !== "all") {
        temFilterProduct = temFilterProduct.filter((curElem) => {
          return curElem.company === company;
        });
      }else if(color!=="all"){
        temFilterProduct = temFilterProduct.filter((curElem) => {
          return curElem.colors.includes(color);
        });
      }
    
      if(price) {
        temFilterProduct = temFilterProduct.filter((curElem) =>{
           return curElem.price <= price
      }
        );
      }


      // console.log("text wala",state.filter_products)

      
      return {
        ...state,
        filter_products: temFilterProduct,
      };
    default:
      return state;
  }
};

export default FilterReducer