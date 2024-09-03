import { FaInstagram, FaPlay } from "react-icons/fa";
import logoVideo from "../../assets/Logo_yellow.jpg";
import "./StylesContact.scss";
import { TbBrandTelegram } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGithub } from "react-icons/si";

const ContactPage = () => {
    return (
        <div className="Contact">
            <div className="Contact__main">
                <div className="logoVideo">
                    <img src={logoVideo} alt="video" />
                    <button className="buttonVideo">
                        <FaPlay style={{ backgroundColor: "black", fontSize: "2rem" }} />
                    </button>
                </div>

                <div className="text">
                    <span>Trabajemos juntos</span>
                    <p>
                        Podrás expresarte como quieras y cuando quieras, de forma gratuita.
                        Puedes personalizar una plantilla o crear la tuya propia.
                    </p>
                </div>

                <div>
                    <button className="hello">
                        Say Hello{" "}
                        <TbBrandTelegram
                            style={{
                                backgroundColor: "transparent",
                                marginLeft: "10px",
                                fontSize: "1.5rem",
                            }}
                        />
                    </button>
                </div>
            </div>
            <div className="Contact__footer">
                <div>
                    <div>
                        <span>Call:</span>
                        <p>+57 (311) 859 9554</p>
                    </div>
                    <div>
                        <span>Email:</span>
                        <p>yesidvanegas68@.com</p>
                    </div>
                </div>
                <div className="buttonsFollow">
                    <p>Sigueme: </p>
                    <button><IoLogoLinkedin className="redes" /></button>
                    <button><SiGithub className="redes" /></button>
                    <button><FaInstagram className="redes" /></button>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
