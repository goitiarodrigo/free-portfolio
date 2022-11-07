import styles from '../../styles/headerV2.module.css'
import Nav from '../Nav'


const HeaderV2 = () => {
  return (
    <div className={styles.container}>
        <Nav />
        <div className={styles.header_container}>
            <div className={styles.shape_1}>
                <img src='../assets/shape1.png' alt='...' />
            </div>
            <div className={styles.shape_2}>
                <img src='../assets/shape2.png' alt='...' />
            </div>
            <div className={styles.shape_3}>
                <img src='../assets/shape3.png' alt='...' />
            </div>
            <div className={styles.shape_4}>
                <img src='../assets/shape4.png' alt='...' />
            </div>
            <div className={styles.shape_5}>
                <img src='../assets/shape5.png' alt='...' />
            </div>
            <div className={styles.shape_6}>
                <img src='../assets/shape6.png' alt='...' />
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