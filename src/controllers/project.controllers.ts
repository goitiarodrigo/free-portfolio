import Project from "../models/Project";
import axios from "axios"

interface newProject {
    title: string,
    linkGit?: string,
    linkProject?: string,
    projectPhoto: string,
    description: string,
}

const projectsControllers = {
    uploadPhoto: async (req: any, res: any) => {
        try {
            const { file } = req.files
            const preset = req.body
            const res = await axios.post("https://api.cloudinary.com/v1_1/mukeniola/images/upload", {file, preset})
            console.log(res)
        }catch(error: any) {
            res.json({success: false, response: error.message})
        }
    },

    newProject: async (req: any, res: any) => {
        try {
            console.log(req.body)
            let {title, linkGit, linkProject, description}: newProject = req.body.project
            let { photo } = req.body
            let newProject = await new Project({
                title,
                linkGit,
                linkProject,
                projectPhoto: photo,
                description
            })
            let savedProject = newProject.save()
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
        try {
            let deletedProject = await Project.findOneAndDelete({_id: req.params.id})
            res.json({success: true, response: deletedProject})
        }catch(err) {
            res.json({success: false, response: err})
        }
    },

    getProjects: async (req: any, res: any) => {
        try {
            let allProjects: string | number | boolean[] = Project.find()
            res.json({success: true, response: allProjects})
        }catch(err) {
            res.json({success: false, response: err})
        }
    },

    
}

export default projectsControllers