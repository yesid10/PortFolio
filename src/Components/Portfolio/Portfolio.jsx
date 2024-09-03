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
import { useNavigate } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Portfolio = () => {

    const worksPortfolio = [
        {
            id: 1,
            image: imageVuelos,
            deployment: 'Vercel',
            title: 'Vuelos',
            link: ''
        },
        {
            id: 2,
            image: imageCine,
            deployment: 'Vercel',
            title: 'Cine',
            link: ''
        },
        {
            id: 3,
            image: ImageLoop,
            deployment: 'Vercel',
            title: 'Loop',
            link: 'https://modulo2-workshop2-tbj7.vercel.app/'
        },
        {
            id: 4,
            image: ImageMarketplace,
            deployment: 'Vercel',
            title: 'Marketplace',
            link: ''
        },
        {
            id: 5,
            image: ImagePizaa,
            deployment: 'Vercel',
            title: 'Pizza',
            link: 'https://work-shop2-seprint3.vercel.app/'
        },
        {
            id: 6,
            image: ImageRappi,
            deployment: 'Vercel',
            title: 'Rappi',
            link: 'https://sprint-4-rappi.firebaseapp.com/'
        },
        {
            id: 7,
            image: ImageSga,
            deployment: 'Vercel',
            title: 'Sistema de gestion de alumnos',
            link: ''
        },
        {
            id: 8,
            image: ImageSnap,
            deployment: 'Vercel',
            title: 'Snap',
            link: ''
        },
        {
            id: 9,
            image: ImageSpace,
            deployment: 'Vercel',
            title: 'Space',
            link: 'https://workshop-space-tau.vercel.app/'
        },
        {
            id: 10,
            image: ImageTesla,
            deployment: 'Vercel',
            title: 'Tesla',
            link: ''
        },
        {
            id: 11,
            image: ImageVideotube,
            deployment: 'Vercel',
            title: 'YouTube',
            link: ''
        }
    ];

    const handleNavigateProyect = (id) => {
        const idFind = worksPortfolio.find(proyect => proyect.id === id);
        if (idFind?.link) {
            window.open(idFind.link, '_blank');
        }
    };

    return (
        <div className='portfolio'>
            <div className='portfolio__title'>
                <h3>Mira mis mas</h3>
                <div className='titledos'>
                    <h3>recientes proyectos</h3>
                    <span></span>
                </div>
            </div>
            <div className='portfolio__slider'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >

                    {
                        worksPortfolio?.map((work) => (
                            <SwiperSlide className='siliderProjects' onClick={() => handleNavigateProyect(work.id)} key={work.id}>
                                <img src={work.image} />
                                <span>{work.deployment}</span>
                                <h3>{work.title}</h3>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Portfolio