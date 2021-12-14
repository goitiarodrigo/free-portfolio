

const NewProject = () => {
    return (
      <div className="newProjectContainer">
        <div className="inputsProjectContainer">
          <input
            className="form-control"
            type="text"
            placeholder="Título del proyecto"
            name="title"
          />
          <input
            className="form-control"
            type="text"
            placeholder="Link de github"
            name="linkGit"
          />
          <input
            className="form-control"
            type="text"
            placeholder="Link del proyecto"
            name="linkProject"
          />
          <label className="labelInput" htmlFor="inputPhoto">
            Subir foto de proyecto
          </label>
          <input
            className="inputPhoto"
            type="file"
            id="inputPhoto"
            name="projectPhoto"
          />
          <textarea
            className="form-control"
            placeholder="Descripción"
            name="description"
          ></textarea>
          <button>Subir proyecto</button>
        </div>
      </div>
    );
}

export default NewProject