import "./StylesAbout.scss";

import { IoDocumentTextOutline } from "react-icons/io5";
import { ImArrowUpRight2 } from "react-icons/im";

const About = () => {
  return (
    <div className="about__experiencia">
      <div className="about">
        <div className="about__experiencia">
          <h3 className="years_experienci">01</h3>
          <span>Año de experiencia</span>
          <h3 className="name">Yesid Vanegas</h3>
        </div>
        <div className="about__acercademi">
          <span className="figure"><svg
            xmlns="http://www.w3.org/2000/svg"
            width="86"
            height="84"
            fill="none"
            className="svg replaced-svg"
            viewBox="0 0 86 84"
          >
            <path
              stroke="#FED546"
              strokeWidth="3"
              d="M69.058 4.995c-3.735.624-13.204 5.856-12.64 14.506m0 0c.161 2.467.391 5.668 3.215 8.008 2.954 2.447 8.865-3.4-3.215-8.008zm0 0c-6.836-2.405-21.423-3.53-25.08 11.21-2.246 11.614 3.5 25.61 6.583 34.838-7.104-11.077-25-24.026-34.585-25.227"
            ></path>
            <path
              fill="#FED546"
              d="M67.81 9.302l1.058-4.54-4.552-1.006.327-1.4 5.956 1.316-1.385 5.94-1.404-.31z"
            ></path>
            <path
              stroke="#FED546"
              strokeWidth="3"
              d="M26.009 78.456c.08-1.274.68-4.651 2.436-7.972M4.841 78.326c3.405-3.658 12.031-11.456 19.298-13.39M55.398 5.34c-1.723-.097-5.107 3.521-4.075 7.117"
            ></path>
          </svg></span>
          <h3>Acerca de mi <span></span></h3>
          <p>With 10 years experience as a professional Web developer,
            I have acquired the skills and knowledge necessary to make
            your project a success. I enjoy every step of the design
            process, from discussion and collaboration.
          </p>
          <div className="firma">
            <button>
              Descargar CV
              <IoDocumentTextOutline style={{ fontSize: '1.5rem', fontWeight: '700', marginLeft: '.4rem' }} />
            </button>
            <img src="https://orido-react.vercel.app/img/signature.png" alt="firma" />
          </div>
        </div>
      </div>

      <div className="areas_experiencia">
        <div>
          <div>
            <h3>Mis areas de experiencia</h3>
            <span></span>
          </div>
          <div>
            <p>You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with an immersive library at your disposal. You can express yourself however you want and whenever you free.

              You can customize a template or make your own from scratch, with an immersive library at your disposal.</p>
          </div>
          <div>
            <button>Mi resumen <IoDocumentTextOutline style={{ fontSize: '1.5rem', fontWeight: '700', marginLeft: '.4rem' }} /></button>
          </div>
        </div>
        <div>
          <div>
            <button>Skills < ImArrowUpRight2 style={{ fontSize: '1.5rem', marginLeft: '10px' }} /></button>
          </div>
          <div>
            <button>Experiencia < ImArrowUpRight2 style={{ fontSize: '1.5rem', marginLeft: '10px' }} /></button>
          </div>
          <div>
            <button>Educacion < ImArrowUpRight2 style={{ fontSize: '1.5rem', marginLeft: '10px' }} /></button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About