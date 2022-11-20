import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { IProject } from "./data"

const MyProjects = () => {

    const [projects, setProjects] = useState<IProject[] | []>([])
    const [loading, setLoading] = useState(false)

    const { getProjects, userState } = useContext(UserContext)
    const { _id } = userState
    

   const getAllProjects = async(id) => {
        const res = await getProjects(id)
        setProjects(res.data.response)
        setLoading(true)
    } 

   useEffect(()=> {
        getAllProjects(_id)
   }, [])

   if (!loading) {
    <div className="bg-danger d-flex flex-wrap justify-content-around">
        <h1>Loading...</h1>
    </div>
   }

    return (
            
        <div className="bg-danger d-flex flex-wrap justify-content-around">
            {
                projects.length > 0 ?
                    projects.map(project => {
                        return (
                            <div key={project._id} className="photoProject" style={{backgroundImage: `url(${project.projectPhoto})`, width: "45vw", height: "50vh"}}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        )
                        })
                : null
            }  
        </div>
    )
}

export default MyProjects