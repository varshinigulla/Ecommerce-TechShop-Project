import { createSlice } from "@reduxjs/toolkit";

let initialCart = JSON.parse(localStorage.getItem("Cart")) || [];

const carts = createSlice(
    {
        name:"Cart",
        initialState:initialCart,

        reducers:{
            //add to cart
            AddToCart:(state,action) => {
                let id = action.payload
                let addItem = state.find(product =>product.id === id.id)

                if (addItem) {
                    addItem.quantity +=1
                }
                else {
                    state.push(id)
                }

                localStorage.setItem("Cart",JSON.stringify(state))
            },
            //remove from cart
            RemoveFromCart:(state,action) => {
                let id = action.payload
                let removeItem = state.filter(product => product.id !== id)

                localStorage.setItem("Cart",JSON.stringify(removeItem))
                return removeItem
            },
            //increment
            Increment : (state,action) => {
                let id = action.payload
                let inc = state.find(product => product.id === id)

                if(inc) inc.quantity += 1

                localStorage.setItem("Cart",JSON.stringify(state))
            },
            // decrement
            Decrement : (state,action) => {
                let id = action.payload
                let dec = state.find(product => product.id === id)
                if(dec && dec.quantity>1) dec.quantity -= 1

                localStorage.setItem("Cart",JSON.stringify(state))
            }
        }
    }
)

export const {AddToCart,RemoveFromCart,Increment,Decrement} = carts.actions;
export default carts.reducer