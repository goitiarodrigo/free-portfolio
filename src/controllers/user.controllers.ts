import User from "../models/User"
import bcryptjs from "bcryptjs"
const jwt = require("jsonwebtoken")
const http = require("http")


interface userInfo {
    email: string,
    password: string,
    fullName: string,
    _id?: string,
    git?: string,
    linkedin?: string,
    strength?: string[],
    degree?: string,
    technologies?: string[],
    description: string,
    photoProfile: string,
    _doc: any
}


const userControllers = {
    signUp: async (req: any, res: any) => {
        try {
            let {email, password, fullName, photoProfile}: userInfo = req.body
            let hashedPassword: string = bcryptjs.hashSync(password)
            let userExisted: string = await User.findOne({email})
            if (userExisted){
                throw new Error("Email ya registrado")
            } 
            const newUser = new User({
                fullName,
                email,
                password: hashedPassword,
                photoProfile, 
            })
            let newRegisteredUser: userInfo = await newUser.save()
            const token = jwt.sign({_id: newUser._id}, process.env.SECRETORKEY)
            delete newRegisteredUser._doc.password
            res.json({success: true, response: {token, newRegisteredUser}})
            
        }catch(err: any){
            res.json({success: false, response: err.message})
        }
    },

    signIn: async (req: any, res: any) => {
        
        try {
            let { email }: userInfo = req.body
            const userFound: userInfo = await User.findOne({email})
            if (!userFound) throw new Error ("Usuario no registrado")
            const token = jwt.sign({...userFound}, process.env.SECRETORKEY)
            delete userFound._doc.password
            res.json({success: true, response: {token, userFound} })
        }catch(err: any){
            res.json({success: false, response: err.message})
        }
    },

    completeProfile: async (req: any, res: any) => {
        try {
           const userForUpdate: userInfo = await User.findOneAndUpdate({_id: req.params.id}, {...req.body}, {new: true})
           delete userForUpdate._doc.password
           res.json({success: true, userFound: userForUpdate})
        }catch(err) {
            res.json({success: false, response: err})
        }
    },

    verifyToken: (req: any, res: any) => {
        const { fullName, photoProfile, email, visits, downloadedCv, allScores, _id, messages, strength, technologies, degree, description, git, linkedin, versionTemplate } = req.user
        try {
            res.json({success: true, userFound: { fullName, photoProfile, email, visits, downloadedCv, allScores, _id, messages, strength, technologies, degree, description, git, linkedin, versionTemplate }})
        } catch (error: any) {
            res.json(error)
        }
    },

    messageAction: async (req: any, res: any) => {
        try {
            const {message, fullName, email} = req.body
            let addMessage = await User.findOneAndUpdate({_id: req.params.id}, {$push: {messages: { message, fullName, email, date: Date() }}}, {new: true})
            res.json({success: true, response: addMessage.messages})
        }catch(error: any) {
            res.json({success: false, response: error.message})
        }
    },

    findOneUser: async (req: any, res: any) => {
        try {
            const _id = req.params.id
            const userFound = await User.find({_id})
            if (!userFound) {
                res.json({success: false, response: 'Página no encontrada'})
            }
            res.json({success: true, response: userFound[0]})
        } catch (error: any) {
            res.json({success: false, response: error.message})
        }
    },

    visitsAction: async (req: any, res: any) => {
        try {
            const {visit, month, newMonth, _id} = req.body
            if (newMonth) {
                let user = await User.findOneAndUpdate({_id: req.params.id}, {$push: {visits: {visit, month}}}, {new: true})
                res.json({success: true, response: user.visits})
            } else {
                let user = await User.findOneAndUpdate({"visits._id": _id}, {$set: {"visits.$.visit": visit}}, {new: true})
                res.json({success: true, response: user.visits})
            }
        }catch(error:any) {
            res.json({success: false, response: error.message})
        }
    },

    cvAction: async (req: any, res: any) => {
        try {
            
            let user = await User.findOneAndUpdate({_id: req.params.id}, {...req.body}, {new: true})
            res.json({success: true, response: user.downloadedCv})
        }catch(error: any) {
            res.json({success: false, response: error.message})
        }
    },

    scoreAction: async (req: any, res: any) => {
        
        try {
            const { score } = req.body
            let user = await User.findOneAndUpdate({_id: req.params.id}, {$push: {allScores: {score}}}, {new: true})
            res.json({success: true, response: user.allScores})
        }catch(error: any) {
            res.json({success: false, response: error.message})
        }
    }

}

export default userControllers




