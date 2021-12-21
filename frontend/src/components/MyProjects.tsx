import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"



const MyProjects = () => {

    const [num, setNum] = useState(0)

    const { getProjects } = useContext(UserContext)
    

   const getProjectss = async() => {
   let res = await getProjects()
   console.log(res)
        
   } 

   console.log(num)
    return (
        
            
            <div className="bg-danger d-flex flex-wrap justify-content-around">
                
                <div className="photoProject" style={{backgroundImage: 'url("https://i.postimg.cc/R0pjQ1Pq/Sin-t-tulo-Tu-historia-1920-x-1080-px.png")', width: "45vw", height: "50vh"}}>
                    <h3>Fakebook</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, consequuntur optio enim deleniti fugit ea dolorem, debitis accusamus impedit error voluptatum recusandae unde saepe ullam cumque quos ad id nostrum.</p>
                </div>
                <div className="photoProject" style={{backgroundImage: 'url("https://i.postimg.cc/R0pjQ1Pq/Sin-t-tulo-Tu-historia-1920-x-1080-px.png")', width: "45vw", height: "50vh"}}>
                    <h3>Fakebook</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, consequuntur optio enim deleniti fugit ea dolorem, debitis accusamus impedit error voluptatum recusandae unde saepe ullam cumque quos ad id nostrum.</p>
                </div>
                <div className="photoProject" style={{backgroundImage: 'url("https://i.postimg.cc/R0pjQ1Pq/Sin-t-tulo-Tu-historia-1920-x-1080-px.png")', width: "45vw", height: "50vh"}}>
                    <h3>Fakebook</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, consequuntur optio enim deleniti fugit ea dolorem, debitis accusamus impedit error voluptatum recusandae unde saepe ullam cumque quos ad id nostrum.</p>
                </div>
                
                <button onClick={getProjectss}>Acá</button>

            </div>
        
        
    )
}

export default MyProjects