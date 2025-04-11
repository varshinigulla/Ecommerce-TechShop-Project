import { configureStore } from "@reduxjs/toolkit";
import cartOperation from "./CartOperation"

export default configureStore(
    {
        reducer:{
            Cart:cartOperation
        }
    }
)