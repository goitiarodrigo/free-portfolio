import { ChangeEvent, FormEvent, MouseEvent, useContext, useEffect, useState } from "react";
import { newUser } from "./data";
import toast, { Toaster } from "react-hot-toast";
import Chips from "react-chips"
import { UserContext } from "../context/UserContext";

const copyClipboardSvg = <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="gray" viewBox="0 0 512 512"><path d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z"/></svg>


const clipboardCheckSvg = <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="#63e6be" viewBox="0 0 384 512"><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>

const Profile = () => {

    const { userState, updateProfileUser } = useContext(UserContext)
    const { git, linkedin, strength, degree, technologies, description, _id: id } = userState

    const [loader, setLoader] = useState(false)
    const [isCopy, setIsCopy] = useState(false)
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

    const handleCopyWebPage = (e: MouseEvent<HTMLSpanElement>) => {
        setIsCopy(true)
        navigator.clipboard.writeText(`http://localhost:3000/template/${id}`)
        setTimeout(() => {
            setIsCopy(false)
        }, 500)

    }

    return (
        <div className="profileContainer">
            <Toaster />
            <div className="webPageContainer">
                <span>Tu página es:</span>
                <span className="webPage">
                    {`http://localhost:3000/template/${id}`}
                    <span title="Copiar dirección" onClick={handleCopyWebPage}>{ isCopy ? clipboardCheckSvg : copyClipboardSvg}</span>
                </span>
            </div>
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