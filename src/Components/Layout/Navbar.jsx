import { Link, Outlet } from "react-router-dom";
import "./StylesNavbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [isSelected, setIsSelected] = useState(1);

  const handleClickSetStyle = (id) => {
    setIsSelected(id);
  };

  const listNavbar = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Service",
      path: "/service",
    },
    {
      id: 4,
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      id: 5,
      name: "Blog",
      path: "/",
    },
    {
      id: 6,
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <div className="navbar">
        <figure className="navbar__logo">
          <img
            src="https://orido-react.vercel.app/img/logo/light.png"
            alt="logo"
          />
        </figure>

        <div className="navbar__menu">
          <ul>
            {/* <li onClick={() => handleClick(1)} className={styleLi === 1 ? 'li_selected' : ''}>Home</li>
            <li onClick={ () => handleClick(2)} className={styleLi === 2 ? 'li_selected' : ''}>About</li>
            <li onClick={ () => handleClick(3)} className={styleLi === 3 ? 'li_selected' : ''}>Service</li>
            <li onClick={() => handleClick(4)} className={styleLi === 4 ? 'li_selected' : ''}>Portfolio</li>
            <li onClick={ () => handleClick(5)} className={styleLi === 5 ? 'li_selected' : ''}>Blog</li>
            <li onClick={ () => handleClick(6)} className={styleLi === 6 ? 'li_selected' : ''}>Contact</li> */}
            {listNavbar?.map((item) => (
              <li key={item.id} onClick={() => handleClickSetStyle(item.id)}>
                <Link to={item.path} style={{borderBottom: isSelected === item.id ? '2px solid #fff' : 'none'}}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar__contacto">
          <button>Contacto</button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
