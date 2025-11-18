import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  Product_Name: { type: String, require: true },
  Product_Price: { type: Number, require: true },
  Product_Discount: { type: String, require: true },
  Product_Image: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
});
export const Product = mongoose.model("Product", productSchema);
