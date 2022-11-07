import styles from '../../styles/projectsV2.module.css'

const ProjectsV2 = () => {

    const arrProjects = [{name: "Proyecto", description: "descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion", image: "https://wpocean.com/html/tf/folio-live/folio/assets/images/protfolio/img-1.jpg", linkPage: "https://github.com", linkLinkedin: "https://linkedin.com.ar"},
    {name: "Proyecto", description: "descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion", image: "https://wpocean.com/html/tf/folio-live/folio/assets/images/protfolio/img-1.jpg", linkPage: "https://github.com", linkLinkedin: "https://linkedin.com.ar"},
    {name: "Proyecto", description: "descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion", image: "https://wpocean.com/html/tf/folio-live/folio/assets/images/protfolio/img-1.jpg", linkPage: "https://github.com", linkLinkedin: "https://linkedin.com.ar"},
    {name: "Proyecto", description: "descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion", image: "https://wpocean.com/html/tf/folio-live/folio/assets/images/protfolio/img-1.jpg", linkPage: "https://github.com", linkLinkedin: "https://linkedin.com.ar"},
    {name: "Proyecto", description: "descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion", image: "https://wpocean.com/html/tf/folio-live/folio/assets/images/protfolio/img-1.jpg", linkPage: "https://github.com", linkLinkedin: "https://linkedin.com.ar"},
    {name: "Proyecto", description: "descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion descripcion", image: "https://wpocean.com/html/tf/folio-live/folio/assets/images/protfolio/img-1.jpg", linkLinkedin: "https://linkedin.com.ar"},

    ]

    const openPageSvg = <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill='#0c0b48' viewBox="0 0 512 512"><path d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0h252c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"/></svg>
    const gitSvg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill='#0c0b48' width={30} height={30}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>


  return (
    <div id='projects' className={styles.container}>
        <h1>Proyectos</h1>
        <div className={styles.projects_container}>
            {
                arrProjects.map((project, index) => {
                    return (
                        <div key={index} style={{backgroundImage: `url(${project.image})`}} className={styles.project_image}>
                            <div className={styles.effectFirst}>
                                <div className={styles.effect}>
                                    <div className={styles.description_container}>
                                        <h2>{`${project.name} ${index}` }</h2>
                                        <p>{project.description}</p>
                                        <div className={styles.anchor_container}>
                                            {project.linkPage && <a target="_blank" rel="noreferrer" href={project.linkPage}>{openPageSvg}</a>}
                                            <a target="_blank" rel="noreferrer" href={project.linkLinkedin}>{gitSvg}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProjectsV2