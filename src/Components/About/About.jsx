import "./StylesAbout.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__experiencia">
        <h3>10</h3>
        <span>Año de experiencia</span>
        <h3>Yesid Vanegas</h3>
      </div>
      <div className="about__acercademi">
        <span>svg</span>
        <h3>Acerca de mi <span></span></h3>
        <p>With 10 years experience as a professional Web developer,
          I have acquired the skills and knowledge necessary to make
          your project a success. I enjoy every step of the design
          process, from discussion and collaboration.
        </p>
        <div>
          <button>
            Descargar CV
          </button>

          <img src="https://orido-react.vercel.app/img/signature.png" alt="firma" />

        </div>
      </div>
    </div>
  )
}

export default About