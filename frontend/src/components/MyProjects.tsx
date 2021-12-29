import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { projects } from "./data"



const MyProjects = () => {

    const [projectss, setProjects] = useState<projects>()
    const [loading, setLoading] = useState(false)

    const { getProjects, userState } = useContext(UserContext)
    const { _id } = userState
    

   const getProjectss = async(id) => {
    let res = await getProjects(id)
    setProjects(res.data.response)
    setLoading(true)
   } 

   useEffect(()=> {
    getProjectss(_id)
   }, [])

   if (!loading) {
    <div className="bg-danger d-flex flex-wrap justify-content-around">
        <h1>Loading...</h1>
    </div>
   }

    return (
            
        <div className="bg-danger d-flex flex-wrap justify-content-around">
            {projectss?.map(project => {
                return (
                    <div key={project._id} className="photoProject" style={{backgroundImage: `url(${project.projectPhoto})`, width: "45vw", height: "50vh"}}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                )
                })}  
        </div>
    )
}

export default MyProjects