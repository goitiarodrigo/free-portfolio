import styles from '../../styles/bodyV1.module.css'
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
            <Carousel
                plugins={[
                'infinite',
                    {
                        resolve: autoplayPlugin,
                        options: {
                        interval: 4000,
                        }
                    },
                ]}   
                animationSpeed={2000}
            >
                {newArr.map(arra => {
                    return (
                        <div className={styles.tecnologies_container}>
                        {
                            arra.map(item => {
                            return <span>{item}</span>
                            })
                        }
                        </div>
                    )
                })}
            </Carousel>
        </div>
    </div>
  )
}

export default BodyV1