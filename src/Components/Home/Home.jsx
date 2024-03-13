import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import "./StylesHome.scss"
import fotoHojaVida from "../../assets/Diseño sin título.png";


const Home = () => {

  return (
    <div className="home">
      <div className="home__info">
        <div>
          <h1>Yesid Vanegas✌️</h1>
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
        <div>
          <button>Say Hello</button>
          <button>My works <HiOutlineArrowUpRight /> </button>
        </div>
        <div>
          <p>Sigueme: </p>
          <button><IoLogoLinkedin /></button>
          <button><SiGithub /></button>
          <button><FaInstagram /></button>
          <div>
            <iframe style={{ border: 'none', width: '2.4rem', padding: "0", margin: '0' }} src="https://lottie.host/embed/1a15d0e4-e3bd-4e81-ad5c-e5afcc0f783f/ldhHOvz4WO.json"></iframe>
          </div>
        </div>
      </div>

      <div className="home__imagen">
        <figure>
          <img src={fotoHojaVida} alt="yo" />
        </figure>

        <button>Bienvenidx a Yesid</button>

      </div>
    </div>
  )
}

export default Home
