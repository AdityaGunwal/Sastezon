import { User } from "../Models/User.js"
import bcrypt from "bcrypt"
export const register = async (req,res)=>{
    const {Name, Email, Password} = req.body
    try {
        let user = await User.findOne({Email})

        if (user){
            return res.json({message: "User Already Exists", success: false})
        }
        else{
            const hashpass = await bcrypt.hash(Password,10)
            user = await User.create({Name, Email, Password: hashpass})
    
            res.json({message: "User Created Successfully", user,success:true})
        }
    } catch (error) {
        res.json({message: error.message})
    }
}

export const login = async (req,res)  => {
    const {Email,Password} = req.body

    try {
        let user = await User.findOne({Email})
        if (!user){
            return res.json({message: "User Not Found", success: false})
        }
        if (!Password){
            return res.json({message: "Password wrong", success: false})
        }
        else{
            res.json({message:`Welcome ${user.Name}`, user,success:true})
        }
    } catch (error) {
        res.json({message: error.message})
    }
}

// i am the glob glo glab galab 