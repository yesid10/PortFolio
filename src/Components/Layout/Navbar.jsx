import { Outlet } from "react-router-dom";
import './StylesNavbar.scss'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div>yesid</div>
            <div className="navbar__menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>yesid</div>
        </div>
        <Outlet/>
    </>
  )
}

export default Navbar