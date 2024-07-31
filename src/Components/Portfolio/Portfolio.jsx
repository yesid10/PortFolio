import { Carousel } from 'antd';
import imageVuelos from "../../assets/vuelos.png";

const Portfolio = () => {

    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    const worksPortfolio =[
        {
            id: 1,
            image: imageVuelos,
            title: 'Vuelos',
            description: 'Desarrollo de sitios web y aplicaciones móviles para comprar y reservar vuelos en línea. Utilizo tecnologías modernas como React para crear interfaces de usuario dinámicas y responsivas. Además, tengo experiencia con Firebase para la gestión de backend y autenticación, Redux para el manejo de estado en aplicaciones complejas, Angular para el desarrollo',

        }
    ]


    return (
        <div>
            <Carousel 
            autoplay 
            arrows 
            infinite
            adaptiveHeight
            fade
            >
                <div>
                    {
                    worksPortfolio?.map((work) => (
                        <div>
                            <img src={work.image} alt={work.title} />
                            <h3>{work.title}</h3>
                        </div>
                    ))
                    }
                    <dir>
                        yesid
                    </dir>
                </div>
               
            </Carousel>
        </div>
    )
}

export default Portfolio