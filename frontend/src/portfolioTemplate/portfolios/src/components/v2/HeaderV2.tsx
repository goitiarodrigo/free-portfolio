import styles from '../../styles/headerV2.module.css'
import Nav from '../Nav'
import shape1 from "../../../assets/shape1.png"
import shape2 from "../../../assets/shape2.png"
import shape3 from "../../../assets/shape3.png"
import shape4 from "../../../assets/shape4.png"
import shape5 from "../../../assets/shape5.png"
import shape6 from "../../../assets/shape6.png"


const HeaderV2 = () => {
  return (
    <div className={styles.container}>
        <Nav />
        <div className={styles.header_container}>
            <div className={styles.shape_1}>
                <img src={shape1} alt='...' />
            </div>
            <div className={styles.shape_2}>
                <img src={shape2} alt='...' />
            </div>
            <div className={styles.shape_3}>
                <img src={shape3} alt='...' />
            </div>
            <div className={styles.shape_4}>
                <img src={shape4} alt='...' />
            </div>
            <div className={styles.shape_5}>
                <img src={shape5} alt='...' />
            </div>
            <div className={styles.shape_6}>
                <img src={shape6} alt='...' />
            </div>
            <div className={styles.header}>
                <div className={styles.description}>
                    <h2>I’m John Smith</h2>
                    <p>Freelance UI/UX Designer</p>
                </div>
                
                <div className={styles.button_container}>
                    <button>Sobre Mi</button>
                    <button>Contácto</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderV2