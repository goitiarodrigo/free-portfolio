

const Profile = () => {
    return (
      <div className="profileContainer">
        <div className="inputsProfileContainer">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Nombre"
            required={true}
          />
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Apellido"
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
          <input
            type="text"
            name=""
            className="form-control"
            placeholder=""
            required={true}
          />
          <textarea
            className="form-control"
            placeholder="Descripción tuya"
            name="description"
          ></textarea>
          <label className="labelInput" htmlFor="inputPhoto">
            Foto de presentación (mejor calidad posible)
          </label>
          <input
            className="inputPhoto"
            type="file"
            id="inputPhoto"
            name="projectPhoto"
            required={true}
          />
        </div>
      </div>
    );
}

export default Profile;