import { useContext } from 'react'
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../context/UserContext";


const NewPortfolio = () => {

    const { updateProfileUser, userState } = useContext(UserContext)
    const { _id: id } = userState

    const handleSelectTemplate = (type: string) => {
        const token = sessionStorage.getItem('token')
        toast((t) => (
            <span style={{color: 'black'}}>
                Seguro/a de elegir esta versión?
                <button className="buttonToast yes" onClick={async () => {
                    const response = await updateProfileUser(id!, token!, {versionTemplate: type})
                    if (response.success) {
                        toast.dismiss(t.id)
                        return toast.success('Todo salió bien!', {duration: 1000})
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

    return (
        <div className="newPortfolioContainer">
            <Toaster />
            <div onClick={() => handleSelectTemplate('v1')} className="templateToSelect">
                <img style={{height: "140vh", width: "100%"}} src="https://res.cloudinary.com/mukeniola/image/upload/v1669061650/samples/zhritu3da1ybsxld6zme.jpg" alt="..."/>
            </div>
            <div onClick={() => handleSelectTemplate('v2')} className="templateToSelect">
                <img style={{height: "140vh", width: "100%"}} src="https://res.cloudinary.com/mukeniola/image/upload/v1669064179/samples/cqii0fnt58v9fou0rqdx.jpg" alt="..."/>
            </div>
        </div>
    )
}

export default NewPortfolio