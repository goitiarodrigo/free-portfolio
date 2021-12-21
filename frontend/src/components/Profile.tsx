

const Profile = () => {
    return (
      <div className="profileContainer">
        <div className="inputsProfileContainer">
          <input
            type="text"
            name="fullName"
            className="form-control"
            placeholder="Nombre y apellido"
            required={true}
          />
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Correo electrónico"
            required={true}
          />
          <input
            type="text"
            name="git"
            className="form-control"
            placeholder="Link de GitHub"
            required={true}
          />
          <input
            type="text"
            name="linkedin"
            className="form-control"
            placeholder="Link de LinkedIn"
            required={true}
          />
          <label>Ingrese cuatro fortalezas</label>
          <input
            type="text"
            name="strength"
            className="form-control"
            placeholder="Fortaleza"
            required={true}
          />
          <input
            type="text"
            name="strength"
            className="form-control"
            placeholder="Fortaleza"
            required={true}
          />
          <input
            type="text"
            name="strength"
            className="form-control"
            placeholder="Fortaleza"
            required={true}
          />
          <input
            type="text"
            name="strength"
            className="form-control"
            placeholder="Fortaleza"
            required={true}
          />
          <input
            type="text"
            name="degree"
            className="form-control"
            placeholder="Título o área. Ej: Desarrollador/a"
            required={true}
          />
          <input
            type="text"
            name="technologies"
            className="form-control"
            placeholder="Tecnologías que utilizas, sin comas ni puntos. Ej: Html Css Js"
            required={true}
          />
          <textarea
            className="form-control"
            placeholder="Descripción tuya"
            name="description"
          ></textarea>
          <input
            className="form-control"
            type="file"
            name="projectPhoto"
            required={true}
          />
        </div>
      </div>
    );
}

export default Profile;