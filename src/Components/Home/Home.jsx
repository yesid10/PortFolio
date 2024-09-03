import { ImArrowUpRight2 } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import "./StylesHome.scss"
import fotoHojaVida from "../../assets/Foto_Hoja_de_Vida-sin_fondo.png";
import logoVideo from '../../assets/Logotipo tejido en lana tipográfico marrón.jpg';
import { FaPlay } from "react-icons/fa6";
import { TbBrandTelegram } from "react-icons/tb";



const Home = () => {


  return (
    <div className="home">
      <div className="home__info">
        <div className="name">
          <h3>Yesid Vanegas ✌️</h3>
        </div>
        <div className="home__info__rol">
          <span></span>
          <h3>Desarrollador web Frontend</h3>
        </div>
        <div className="home__info__description">
          <p>
            I`m creative designer based in New York, and I`m very passionate and dedicated to my work.
          </p>
        </div>
        <div className="buttonsWorks">
          <button className="hello">Say Hello <TbBrandTelegram style={{ backgroundColor: 'transparent', marginLeft: '10px', fontSize: '1.5rem' }} /></button>
          <button className="works">My works < ImArrowUpRight2 style={{ fontSize: '1.5rem', marginLeft: '10px' }} /> </button>
        </div>
        <div className="buttonsFollow">
          <p>Sigueme: </p>
          <button><IoLogoLinkedin className="redes" /></button>
          <button><SiGithub className="redes" /></button>
          <button><FaInstagram className="redes" /></button>

        </div>

        <iframe className="mouse" style={{ border: 'none', width: '1.5rem', padding: "0", margin: '0' }} src="https://lottie.host/embed/1a15d0e4-e3bd-4e81-ad5c-e5afcc0f783f/ldhHOvz4WO.json">yesid</iframe>

      </div>

      <div className="home__imagen">
        <div className="fotoPerfil">
          <img className="fotoPerfil" src={fotoHojaVida} alt="yo" />
        </div>
        <div className="logoVideo">
          <img src={logoVideo} alt="video" />
          <button className="buttonVideo"><FaPlay style={{ backgroundColor: 'black', fontSize: '2rem' }} /></button>
        </div>


      </div>
    </div>
  )
}

export default Home
