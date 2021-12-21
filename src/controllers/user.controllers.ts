import User from "../models/User"
import bcryptjs from "bcryptjs"
const jwt = require("jsonwebtoken")


interface userInfo {
    email: string,
    password: string,
    fullName: string,
    photoProfile?: string,
    _id?: string,
    git?: string,
    linkedin?: string,
    strength?: string[],
    degree?: string,
    technologies?: string[],
    description: string,
    photo: string,
}


const userControllers = {
    signUp: async (req: any, res: any) => {
        try {
            let {email, password, fullName}: userInfo = req.body
            let hashedPassword: string = bcryptjs.hashSync(password)
            let userExisted: string = await User.findOne({email})
            if (userExisted){
                throw new Error("Email ya registrado")
            } 
            const newUser = new User({
                fullName,
                email,
                password: hashedPassword, 
            })
            let newUserRegistered: userInfo = await newUser.save()
            const token = jwt.sign({...newUser}, process.env.SECRETORKEY)
            res.json({success: true, response: {token, _id: newUserRegistered._id}})
            
        }catch(err){
            res.json({success: false, response: err})
        }
    },

    signIn: async (req: any, res: any) => {
        try {
            let {email, password}: userInfo = req.body
            const userFound: userInfo = await User.findOne({email})
            if (!userFound) throw new Error ("Usuario o contraseña incorrecta")
            if (!bcryptjs.compareSync(password, userFound.password)) throw new Error ("Usuario o contraseña incorrecta")
            const token = jwt.sign({...userFound}, process.env.SECRETORKEY)
            res.json({success: true, response: {token, _id: userFound._id}})
        }catch(err){
            res.json({success: false, response: err})
        }
    },

    completeProfile: async (req: any, res: any) => {
        try {
           const userForUpdate: userInfo = await User.findOneAndUpdate({_id: req.params.id}, {...req.body}, {new: true})
           res.json({success: true, response: {_id: userForUpdate._id}})
        }catch(err) {
            res.json({success: false, response: err})
        }
    },
    verifyToken: (req: any, res: any) => {
        const {email, fullName, photo, _id} = req.user
        res.json({email, fullName, photo, _id})
    },

}

export default userControllers




