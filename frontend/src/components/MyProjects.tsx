import { useContext, useEffect, useState, ChangeEvent } from "react"
import toast, { Toaster } from "react-hot-toast"
import { deleteSvg, editSvg } from "../assets/indexSvg"
import { UserContext } from "../context/UserContext"
import { IProject } from "./data"

const MyProjects = () => {

    const { getProjects, userState, deleteProject } = useContext(UserContext)
    const { _id } = userState

    const [projects, setProjects] = useState<IProject[] | []>([])
    const [loading, setLoading] = useState(false)
    
    const getAllProjects = async(id) => {
        const res = await getProjects(id)
        setProjects(res.data.response)
        setLoading(true)
    } 

    useEffect(()=> {
        if (_id) {
            getAllProjects(_id)
        }
    }, [_id])

    const handleDeleteProject = async (id: string) => {
        const token = sessionStorage.getItem('token')!
        toast((t) => (
            <span style={{color: 'black'}}>
                Seguro/a querés eliminar?
                <button className="buttonToast yes" onClick={async () => {
                    const response = await deleteProject(id, token)
                    if (response.data.success) {
                        toast.dismiss(t.id)
                        return toast.success('Elminado correctamente', {duration: 1000})
                    }
                    toast.error('Ha ocurrido un error', {duration: 1000})
                }}>
                    Si
                </button>
                <button className="buttonToast no" onClick={() => toast.dismiss(t.id)}>
                    No
                </button>
            </span>
        ));
    }

   if (!loading) {
        <div className="bg-danger d-flex flex-wrap justify-content-around">
            <h1>Loading...</h1>
        </div>
    }

    return (
        <div className="d-flex flex-wrap justify-content-around">
            <Toaster />
            {
                projects.length > 0 ?
                    projects.map(project => {
                        return (
                            <div key={project._id} className="photoProject" style={{backgroundImage: `url(${project.projectPhoto})`}}>
                                <span onClick={() => handleDeleteProject(project._id)}>{deleteSvg}</span>
                                <div className="infoUserProject">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <p>{project.linkGit}</p>
                                    <p style={{fontSize: '12px'}}>{project.linkProject}</p>
                                </div>

                            </div>
                        )
                        })
                : null
            }  
        </div>
    )
}

export default MyProjects