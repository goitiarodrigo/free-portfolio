import Project from "../models/Project";
import axios from "axios"

interface newProject {
    title: string,
    linkGit?: string,
    linkProject?: string,
    projectPhoto: string,
    description: string,
    userId: string
}

const projectsControllers = {
    uploadPhoto: async (req: any, res: any) => {
        
        try {
            const { file } = req.files
            const preset = req.body
            const response = await axios.post(`${process.env.LINKCLOUDINARY}`, req.files)
            res.json({response})
        }catch(error: any) {
            console.log(error.message)
            res.json({success: false, response: error.message})
        }
    },

    newProject: async (req: any, res: any) => {
        try {
            const {title, linkGit, linkProject, description}: newProject = req.body.project
            const { photo, id } = req.body
            
            const newProject = await new Project({
                title,
                linkGit,
                linkProject,
                projectPhoto: photo,
                description,
                userId: id
            })
            const savedProject = newProject.save()
            res.json({success: true, response: savedProject})

        }catch(err) {
            res.json({success: false, response: err})
        }
    },

    editProject: async (req: any, res: any) => {
        try {
            let editedProject: newProject = await Project.findOneAndUpdate({_id: req.params.id}, {...req.body}, {new: true})
            res.json({success: true, response: editedProject})
        }catch(err) {
            res.json({success: false, response: err})
        }
    },

    deleteProject: async (req: any, res: any) => {
        console.log('ejecuta?')
        try {
            let deletedProject = await Project.findOneAndDelete({_id: req.params.id})
            res.json({success: true, response: deletedProject})
        }catch(err) {
            res.json({success: false, response: err})
        }
    },

    getProjects: async (req: any, res: any) => {
        try {
            let allProjects = await Project.find({userId: req.params.id})
            res.json({success: true, response: allProjects})
        }catch(err: any) {
            res.json({success: false, response: err.message})
        }
    },

    
}

export default projectsControllers