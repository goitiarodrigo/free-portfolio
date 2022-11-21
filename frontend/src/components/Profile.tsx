import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { newUser } from "./data";
import toast, { Toaster } from "react-hot-toast";
import Chips from "react-chips"
import { UserContext } from "../context/UserContext";
import { REACT_APP_BACK_URL } from "../constants";


const Profile = () => {

    const { userState, updateProfileUser } = useContext(UserContext)
    const { git, linkedin, strength, degree, technologies, description, _id: id } = userState

    const [loader, setLoader] = useState(false)
    const [userProfile, setUserProfile] = useState<newUser>({
        git: "",
        linkedin: "",
        strength: "",
        degree: "",
        technologies: [],
        description: "",
    })

    useEffect(() => {
        setUserProfile({
            git,
            linkedin,
            strength,
            degree,
            technologies,
            description,
        })
    }, [])

    const handleEditProfile = ({ target }: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value, files } = target
        setUserProfile({...userProfile, [name]: name === "photoProfile" ? files![0] : value})   
    }

    const upProfile = async (e: FormEvent<HTMLFormElement>) => {
        setLoader(true)
        e.preventDefault()
        try {
            const dataToUpdate = userProfile
            const token = sessionStorage.getItem('token')
            const res =  await updateProfileUser(id!, token!, dataToUpdate)
            if (!res.success) {
                setLoader(false)
                return toast.error('Ha ocurrido un error. Intente mas tarde', { duration: 1300 })
            }
            toast.success('Su perfil ha sido actualizado con éxito.', { duration: 1300 })
            setLoader(false)
        } catch (error: any) {
            setLoader(false)
            toast.error(error.message, { duration: 1300 })
        }
    }

    return (
        <div className="profileContainer">
            <Toaster />
            <span className="webPage">Tu página es: {`http://localhost:3000/template/${id}`}</span>
            <h2>Completa tu perfil</h2>
            <form className="inputsProfileContainer" onSubmit={upProfile}>
            <input
                type="text"
                name="git"
                className="form-control"
                placeholder="Link de GitHub"
                required={true}
                onChange={handleEditProfile}
                value={userProfile?.git}
            />
            <input
                type="text"
                name="linkedin"
                className="form-control"
                placeholder="Link de LinkedIn"
                required={true}
                onChange={handleEditProfile}
                value={userProfile?.linkedin}
            />
            
            <input
                type="text"
                name="strength"
                className="form-control"
                placeholder="Fortaleza"
                required={true}
                onChange={handleEditProfile}
                value={userProfile?.strength}
            />
            
            <input
                type="text"
                name="degree"
                className="form-control"
                placeholder="Título o área. Ej: Desarrollador/a"
                required={true}
                onChange={handleEditProfile}
                value={userProfile?.degree}
            />
            <div className="chipsContainer">
                <Chips
                    value={userProfile.technologies}
                    onChange={data => setUserProfile({...userProfile, technologies: data})}
                    placeholder='Tecnologías que utilizas. Separa cada una con la tecla de tabulación ⌨️'
                />
            </div>
            <textarea
                className="form-control"
                placeholder="Descripción tuya"
                name="description"
                onChange={handleEditProfile}
                value={userProfile?.description}
            ></textarea>
            <button disabled={loader}>{loader ? 'Actualizando...' : 'Actualizar'}</button>
            </form>
        </div>
    );
}

export default Profile;