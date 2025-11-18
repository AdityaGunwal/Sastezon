import { Product } from "../Models/Product.js"


export const addProduct = async (req,res) =>{
    const {Product_Name, Product_Price, Product_Discount, Product_Image} = req.body

    try {
        let product = await Product.create({Product_Name, Product_Price, Product_Discount, Product_Image})
        res.json({message: "Product Added Successfully", Product})
    } catch (error) {
        res.json({message:error.message})
    }
}

export const getallProduct = async (req,res)=>{
    let product = await Product.find().sort({createdAt:-1})
    res.json({message:"All Products", product})
}

export const getProductById = async (req,res) =>{
    const id = req.params.id
    let product = await Product.findById(id)

    if (!product){
        res.json({message:"Invalid ID"})
    }

    res.json({message:"Specific Product", product})
}

export const updateProductById = async (req,res)=>{
    const id = req.params.id;
    let product = await Product.findByIdAndUpdate(id,req.body,{new:true})

    if (!product){
        res.json({message:"Invalid ID"})
    }

    res.json({message:"Product Updated"}, product)
}

export const deleteProductById = async (req,res)=>{
    const id = req.params.id;
    let product = await Product.findByIdAndDelete(id)

    if (!product){
        res.json({message:"Invalid ID"})
    }

    res.json({message:"Product Deleted"}, product)
}