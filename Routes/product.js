import express from "express";
import { addProduct, deleteProductById, getallProduct, getProductById, updateProductById } from "../Controllers/product.js";

const router = express.Router()


router.post("/addProduct", addProduct)
router.get("/getallProduct", getallProduct)
router.get("/:id", getProductById)
router.put("/:id", updateProductById)
router.delete("/:id",deleteProductById)

export default router