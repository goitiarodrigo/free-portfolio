import styles from '../../styles/bodyV1.module.css'
import Flickity from "react-flickity-component";
import { v4 as uuidv4 } from 'uuid';

const arr = ["React", "React", "React", "React", "React", "React", "React", "React", "React", "React", "React"]
let newArr: any[] = []



const BodyV1 = () => {

  for (let i = 0; i <= arr.length; i=i+3) {
    newArr.push(arr.slice(i, i+3))
  }

  return (
    <div id='about' className={styles.body_container}>
        <div className={styles.bodyChildren_container}>
            <h1 className={styles.about_title}>Sobre Mi</h1>
            <div className={styles.about_container}>
                <div className={styles.about_photo}></div>
                <div className={styles.description_container}>
                    <h3>I create products not just art</h3>
                    <p>My name is John Smith. I am a web designer and developer.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <a>Saber más.</a>
                </div>
            </div>
            <Flickity
                className={styles.carousel_container}
                disableImagesLoaded={true}
                options={{
                    initialIndex: 0,
                    autoPlay: true,
                    pageDots: false,
                    prevNextButtons: false
                }}
            >
                {newArr.map((arra) => {
                    return (
                        <div key={uuidv4()} className={styles.tecnologies_container}>
                            {
                                arra.map(item => <span key={uuidv4()}>{item}</span>)
                            }
                    </div>
                    )
                })}
            </Flickity>
        </div>
    </div>
  )
}

export default BodyV1