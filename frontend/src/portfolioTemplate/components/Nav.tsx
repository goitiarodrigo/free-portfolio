
import styles from "../styles/nav.module.css"

const Nav = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav_container}>
        <img src="./assets/portfolio.png"/>
        <div>
          <a>Inicio</a>
          <a>Sobre Mi</a>
          <a>Proyectos</a>
          <a>Contacto</a>
        </div>
      </nav>
    </div>
  )
}

export default Nav