import { useContext } from 'react'
import { svgDownload, svgEmail, svgGit, svgLinkedin } from '../../../../../assets/indexSvg'
import { UserContext } from '../../../../../context/UserContext'
import { TemplateContext } from '../../context/TemplateContext'
import styles from '../../styles/Form.module.css'

const Form = () => {

    const { userData } = useContext(TemplateContext)
    return (
        <div id='contactForm' className={styles.formContainer}>
            <h2>Contacto</h2>
            <div className={styles.contactContainer}>
                <div className={styles.form}>
                    
                    <div className={styles.inputContainer}>
                        <input placeholder='Nombre' type='text'/>
                        <input placeholder='Apellido' type='text'/>
                        <input placeholder='Email' type='email'/>
                        <input placeholder='Asunto' type='text'/>
                        <textarea placeholder='Escríbeme...'>

                        </textarea>
                        <button >Enviar mensaje</button>
                    </div>
                </div>
                <div className={styles.contactLinks}>
                    <div className={styles.contactCard}>
                        <h3>GitHub</h3>
                        <div>
                            {svgGit}
                            <a href='#'>Ir a mi git</a>
                        </div>
                    </div>
                    <div className={styles.contactCard}>
                        <h3>LinkedIn</h3>
                        <div>
                            {svgLinkedin}
                            <a href='#'>Ir a mi LinkedIn</a>
                        </div>
                    </div>
                    <div className={styles.contactCard}>
                        <h3>{userData?.versionTemplate === 'v1' ? 'Email' : 'CV'}</h3>
                        <div>
                            {userData?.versionTemplate === 'v1' ? svgEmail : svgDownload}
                            <a href='#'>{userData?.versionTemplate === 'v1' ? 'Enviarme un email' : 'Descargar CV'}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form