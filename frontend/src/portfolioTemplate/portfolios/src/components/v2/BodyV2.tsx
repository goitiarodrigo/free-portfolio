import styles from '../../styles/bodyV2.module.css'
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const arr = ["React", "React", "React", "React", "React", "React", "React", "React", "React", "React", "React"]
let newArr: any[] = []

const BodyV2 = () => {

  for (let i = 0; i <= arr.length; i=i+3) {
    newArr.push(arr.slice(i, i+3))
  }

  return (
    <div id='about' className={styles.container}>
        <div className={styles.about_container}>
            <div className={styles.profile_container}>
                <div className={styles.photo_container}>
                    <div style={{backgroundImage: 'url("https://wpocean.com/html/tf/folio-live/folio/assets/images/about/about.jpg")'}} className={styles.profile_photo}>
                    </div>
                </div>
                <div className={styles.description_container}>
                    <h3>I create products not just art</h3>
                    <p>My name is John Smith. I am a web designer and developer.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <a>Saber más.</a>
                </div>
            </div>                 
            <Carousel
                className={styles.carousel_container}
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
                {newArr.map((arra, index) => {
                    return (
                    <div key={index} className={styles.tecnologies_container}>
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

export default BodyV2