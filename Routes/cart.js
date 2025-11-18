import express from "express";
import { addToCart } from "../Controllers/cart.js";
 
const router = express.Router()


router.post("/addCart", addToCart)

export default router