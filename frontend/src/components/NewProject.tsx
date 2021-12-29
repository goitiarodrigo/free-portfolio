import axios from "axios";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";


const NewProject = () => {

  const { uploadNewProject, userState } = useContext(UserContext)
  const { _id } = userState

  const [newProject, setNewproject] = useState({
    title: "",
    linkGit: "",
    linkProject: "",
    projectPhoto: "",
    description: ""
  })

  const handleNewProject = (e: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement> ):void => {

    setNewproject({
      ...newProject,
      [e.target.name]:
        e.target.name === "projectPhoto" ? e.target.files![0] : e.target.value,
    })
  }

  
  const upNewProject = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const FD = new FormData()
    FD.append("file", newProject.projectPhoto)
    FD.append("upload_preset", "Images")
    let res = await axios.post("https://api.cloudinary.com/v1_1/mukeniola/image/upload", FD)
    let photo = res.data.secure_url
    let response = await uploadNewProject(newProject, photo, _id)
    setNewproject({title: "", linkGit: "", linkProject: "", projectPhoto: "", description: ""})
  }

  
    return (
      <div className="newProjectContainer">
        
          <form className="inputsProjectContainer" onSubmit={upNewProject} >
            <input
              className="form-control"
              type="text"
              placeholder="Título del proyecto"
              name="title"
              onChange={handleNewProject}
              value={newProject.title}
            />
            <input
              className="form-control"
              type="text"
              placeholder="Link de github"
              name="linkGit"
              onChange={handleNewProject}
              value={newProject.linkGit}
            />
            <input
              className="form-control"
              type="text"
              placeholder="Link del proyecto"
              name="linkProject"
              onChange={handleNewProject}
              value={newProject.linkProject}
            />
            
            <input
              className="form-control"
              type="file"
              name="projectPhoto"
              onChange={handleNewProject}
            />
            <textarea
              className="form-control"
              placeholder="Descripción"
              name="description"
              onChange={handleNewProject}
              value={newProject.description}
            ></textarea>
            <button>Subir proyecto</button>
          </form>
        
      </div>
    );
}

export default NewProject