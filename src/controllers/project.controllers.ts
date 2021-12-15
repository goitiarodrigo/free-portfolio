import Project from "../models/Project";


interface newProject {
    title: string,
    linkGit?: string,
    linkProject?: string,
    projectPhoto: string,
    description: string,
}

const projectsControllers = {
    newProject: async (req: any, res: any) => {
        try {
            let {title, linkGit, linkProject, projectPhoto, description}: newProject = req.body
            let newProject = await new Project({
                title,
                linkGit,
                linkProject,
                projectPhoto,
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
    }
}

export default projectsControllers