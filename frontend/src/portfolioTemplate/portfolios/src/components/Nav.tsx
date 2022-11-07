import { useState } from "react"
import styles from "../styles/nav.module.css"
import Logo from "../../assets/portfolio.png"

const gripLines = <svg fill="white" height={35} width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg>

const Nav = () => {

  const [isToggleMenu, setIsToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setIsToggleMenu(!isToggleMenu)
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav_container}>
        <img src={Logo} alt='logo'/>
        <div onClick={handleToggleMenu} className={styles.menuSvg}>
          {gripLines}
        </div>
        {
            isToggleMenu ?
                <div className={styles.responsiveContainer} onClick={handleToggleMenu} >
                    <div onClick={e => e.stopPropagation()} className={styles.responsive}>
                        <a>Inicio</a>
                        <a onClick={handleToggleMenu} href="#about">Sobre Mi</a>
                        <a onClick={handleToggleMenu} href="#projects">Proyectos</a>
                        <a onClick={handleToggleMenu} href="#contactForm">Contacto</a>
                    </div>
                </div>
            : 
                null
        }
        <div className={styles.anchor_container}>
            <a>Inicio</a>
            <a href="#about">Sobre Mi</a>
            <a href="#projects">Proyectos</a>
            <a href="#contactForm">Contacto</a>
        </div>
      </nav>
    </div>
  )
}

export default Nav