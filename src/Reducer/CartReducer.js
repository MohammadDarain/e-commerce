import {toast } from 'react-toastify';

const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        debugger
        let { id, color, amount, product } = action.payload;
        //console.log("pro",product)
        //alert("pro")

        toast('🦄 Added Successfully to Cart', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

        // tackle the existing products
        const existingProduct = state.cart.find((curElem) => curElem.id === id + color)
        if (existingProduct) {
            //console.log(existingProduct)
            //alert("exis")
            let updateProduct = state.cart.map((curElem) => {
                if (curElem.id === id + color) {
                    let newAmount = curElem.amount + amount;
                    // if(newAmount >=curElem.max){
                    //     newAmount  = curElem.max;
                    // }
                    return {
                        ...curElem,
                        amount: newAmount,
                    };
                } else {
                    return curElem
                }
            });
            return {
                ...state,
                cart: updateProduct
            }
        } else {
            
            let cartProduct;
            cartProduct = {
                id: id + color,
                name: product.name,
                color: color,
                amount: amount,
                image: product.image[0].url,
                price: product.price,
                maxStock: product.stock,
            };

            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        }
    }
    if (action.type === "SET_INCREMENT") {
        //const {id} = action.payload
        let updatedProduct = state.cart.map((curElem) => {

            if (curElem.id === action.payload) {
                //console.log(curElem)
                let increment = curElem.amount + 1;

                return {
                    ...curElem,
                    amount: increment,
                }
            } else {
                return curElem
            }
        });
        return {
            ...state,
            cart: updatedProduct
        }
    }

    if (action.type === "SET_DECREMENT") {
        //const {id} = action.payload
        let updatedProduct = state.cart.map((curElem) => {

            if (curElem.id === action.payload) {
                //console.log(curElem)
                let decAmount = curElem.amount - 1;
                if (decAmount < 1) {
                    decAmount = 1;
                }
                return {
                    ...curElem,
                    amount: decAmount
                }
            } else {
                return curElem
            }
        });
        return {
            ...state,
            cart: updatedProduct
        }
    }
    if (action.type === "CART_TOTAL_ITEM") {
        // console.log("cart", state.cart);
        let updatedItemVal = state.cart.reduce((initial, curElem) => {
            return initial + curElem.amount
        }, 0)
        //console.log(updatedItemVal)
        return {
            ...state,
            total_item: updatedItemVal,
        }
    }
    if (action.type === "CART_TOTAL_PRICE") {
        let totalPrice = state.cart.reduce((initial, curElem) => {
            return initial + (curElem.amount * curElem.price)
        }, 0)
        console.log(totalPrice)
        return {
            ...state,
            total_amount: totalPrice,
        }
    }

    if (action.type === "REMOVE_ITEM") {
        let { id } = action.payload
        //console.log("id", id);


        // let updatedCart = state.cart.splice(action.payload, 1)
        // console.log("up", updatedCart);
        let updatedCart = state.cart.filter((curElem) => {
            return curElem.id !== id;
            //return curElem.id.splice(action.payload,1)
        })
        return {
            ...state,
            cart: updatedCart
        }
    }
    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        }
    }
    return {
        state,
    }

};

export default CartReducer