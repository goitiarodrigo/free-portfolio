import axios from "axios";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { REACT_APP_API_CLOUDINARY, REACT_APP_BACK_URL } from "../constants";
import { UserContext } from "../context/UserContext";
import { checkTypeImage } from "../utils/checkTypeImage";
import { IProject } from "./data";


const NewProject = () => {

    const navigation = useNavigate()
    const { uploadNewProject, userState } = useContext(UserContext)
    const { _id } = userState

    const [loader, setLoader] = useState(false)
    const [newProject, setNewproject] = useState<IProject>({
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
        const isGood = checkTypeImage(newProject.projectPhoto.name)
        if (!isGood) return toast.error("Extensión de imágen no soportado", {duration: 1000})
        try {
            setLoader(true)
            const token = sessionStorage.getItem('token')!
            const FD = new FormData()
            FD.append("file", newProject.projectPhoto)
            FD.append("upload_preset", "Images")
            const res = await axios.post(`${REACT_APP_API_CLOUDINARY}`, FD)
            const photo = res.data.secure_url
            const response = await uploadNewProject(newProject, photo, _id, token)
            if (!response.success) {
                setLoader(false)
                return toast.error(`Ha ocurrido un error, intente nuevamente`, {
                    duration: 1000
                })
            }
            setNewproject({title: "", linkGit: "", linkProject: "", projectPhoto: "", description: ""})
            setLoader(false)
            navigation('/myprojects')
        } catch (error: any) {
            setLoader(false)
            toast.error(`${error.message}`, {
            duration: 1000})
        }
    }
 
    return (
        <div className="newProjectContain">
            <Toaster />
            <h2>Subir nuevo proyecto</h2>
            <form className="inputsProjectContainer" onSubmit={upNewProject} >
                <input
                    className="form-control"
                    type="text"
                    placeholder="Título del proyecto"
                    name="title"
                    onChange={handleNewProject}
                    value={newProject.title}
                    required
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="Link de github"
                    name="linkGit"
                    onChange={handleNewProject}
                    value={newProject.linkGit}
                    required
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
                    accept='image/jpeg, image/png'
                    required
                />
                <textarea
                    className="form-control"
                    placeholder="Descripción"
                    name="description"
                    onChange={handleNewProject}
                    value={newProject.description}
                    required
                ></textarea>
                <button disabled={loader}>{loader ? 'Espere...' : 'Subir proyecto'}</button>
            </form>
        </div>
    );
}

export default NewProject