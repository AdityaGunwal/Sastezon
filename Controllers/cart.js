import { Cart } from "../Models/Cart.js";

export const addToCart = async(req,res) =>{
    const {productId, title, price, qty, img} = req.body;
    const userId = "6909eaaa0a15435bdb69c49e";
    //Aditya Gunwal | 123
    try{
        let cart = await Cart.findOne({ userId })

        if(!cart){
            cart = new Cart({ userId, items: [] })
        }
        const itemIndex = cart.items.findIndex((item)=> item.productId.toString() === productId )
        if (itemIndex> -1){
            cart.items[itemIndex].qty = cart.items[itemIndex].qty + qty;
            cart.items[itemIndex].price = cart.items[itemIndex].price + price * qty;
        }
        else{
            cart.items.push({productId, title, price, qty, img})
        }
        await cart.save()
        res.json({message:"item added to cart", cart})

    }
    catch(error){
        res.json(error.message)
    }
}