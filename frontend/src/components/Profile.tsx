import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { newUser } from "./data";


const Profile = () => {

  const [userProfile, setUserProfile] = useState<newUser>({
      photoProfile: "",
      git: "",
      linkedin: "",
      strength: "",
      degree: "",
      technologies: [],
      description: "",
  })

  

  const handleEditProfile = ({ target }: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value, files } = target
    setUserProfile({...userProfile, 
        [name]: name === "photoProfile" ? files![0] : value})

  }

  console.log(userProfile)

  const upProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const FD = new FormData()
    FD.append("file", userProfile?.photoProfile!)
    FD.append("upload_preset", "Images")
    let res = await axios.post("https://api.cloudinary.com/v1_1/mukeniola/image/upload", FD)
    let photo = res.data.secure_url
    let strengthArray: string[] | undefined = userProfile.strength?.split("-")
  }

    return (
      <div className="profileContainer">
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
          <input
            type="text"
            name="technologies"
            className="form-control"
            placeholder="Tecnologías que utilizas, sin comas ni puntos. Ej: Html Css Js"
            required={true}
            onChange={handleEditProfile}
            value={userProfile?.technologies}
          />
          <textarea
            className="form-control"
            placeholder="Descripción tuya"
            name="description"
            onChange={handleEditProfile}
          ></textarea>
          <input
            className="form-control"
            type="file"
            name="photoProfile"
            required={true}
            onChange={handleEditProfile}
            
          />
          <button>Hecho</button>
        </form>
      </div>
    );
}

export default Profile;