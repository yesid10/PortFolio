import { Carousel } from 'antd';
import imageVuelos from "../../assets/vuelos.png";
import imageCine from "../../assets/cineapp.png";
import ImageLoop from "../../assets/loopstudios.png";
import ImageMarketplace from "../../assets/marketplace.png";
import ImagePizaa from "../../assets/imgPizza.png";
import ImageRappi from "../../assets/rappi.png";
import ImageSga from "../../assets/sga.png";
import ImageSnap from "../../assets/snap.jpg";
import ImageSpace from "../../assets/space.png";
import ImageTesla from "../../assets/tesla.png";
import ImageVideotube from "../../assets/videoTube.png";
import StylesPortfolio from "./StylesPortfolio.scss"




const Portfolio = () => {

    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    const worksPortfolio = [
        {
            id: 1,
            image: imageVuelos,
            deployment: 'vercel',
            title: 'Vuelos',
            link: ''
        },
        {
            id: 2,
            image: imageCine,
            deployment: 'vercel',
            title: 'Cine',
            link: ''
        },
        {
            id: 3,
            image: ImageLoop,
            deployment: 'vercel',
            title: 'Loop',
            link: 'https://modulo2-workshop2-tbj7.vercel.app/'
        },
        {
            id: 4,
            image: ImageMarketplace,
            deployment: 'vercel',
            title: 'Marketplace',
            link: ''
        },
        {
            id: 5,
            image: ImagePizaa,
            deployment: 'vercel',
            title: 'Pizza',
            link: 'https://work-shop2-seprint3.vercel.app/'
        },
        {
            id: 6,
            image: ImageRappi,
            deployment: 'vercel',
            title: 'Rappi',
        },
        {
            id: 7,
            image: ImageSga,
            deployment: 'vercel',
            title: 'Sistema de gestion de alumnos',
            link: ''
        },
        {
            id: 8,
            image: ImageSnap,
            deployment: 'vercel',
            title: 'Snap',
            link: ''
        },
        {
            id: 9,
            image: ImageSpace,
            deployment: 'vercel',
            title: 'Space',
            link: 'https://workshop-space-tau.vercel.app/'
        },
        {
            id: 10,
            image: ImageTesla,
            deployment: 'vercel',
            title: 'Tesla',
            link: ''
        },
        {
            id: 11,
            image: ImageVideotube,
            deployment: 'vercel',
            title: 'YouTube',
            link: ''
        }
    ]


    return (
        <div className='portfolio'>
            <h3></h3>
            <Carousel
                autoplay
                arrows
                infinite
                adaptiveHeight
                fade
                
            >
                {
                    worksPortfolio?.map((work) => (
                        <div style={{margin:'0 20rem'}}>
                            <a href={work.link} target="_blank" className='portfolio__carousel' key={work.id}>
                                <img src={work.image} alt={work.title} />
                                <h3>{work.title}</h3>
                            </a>
                        </div>

                    ))
                }

            </Carousel>
        </div>
    )
}

export default Portfolio