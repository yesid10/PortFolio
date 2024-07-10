import { useState } from "react";
import "./StylesServices.scss";
import { ImArrowUpRight2 } from "react-icons/im";
import { Button, Modal } from 'antd';

const Service = () => {
    const services = [
        {
            id: 1,
            title: 'Desarrollo Frontend',
            description: 'Desarrollo sitios web y aplicaciones móviles para empresas. Utilizo tecnologías modernas como React para crear interfaces de usuario dinámicas y responsivas. Además, tengo experiencia con Firebase para la gestión de backend y autenticación, Redux para el manejo de estado en aplicaciones complejas, Angular para el desarrollo de aplicaciones web robustas, y frameworks de diseño como Bootstrap y Sass para estilizar de manera eficiente. Utilizo Git y GitHub para el control de versiones y la colaboración en proyectos. Me apasiona crear experiencias de usuario intuitivas y atractivas que cumplan con los objetivos del cliente y superen sus expectativas.'
        },
        {
            id: 2,
            title: 'Desarrollo Backend',
            description: 'Desarrollo APIs, bases de datos y servicios web. Tengo experiencia con Spring Boot para crear aplicaciones backend robustas y seguras. También manejo SQL y PostgreSQL para la gestión de bases de datos, y tengo conocimientos en C++ para el desarrollo de software de alto rendimiento. Me esfuerzo por asegurar que los servicios backend sean eficientes y escalables, proporcionando una base sólida y confiable para las aplicaciones frontend. Me gusta enfrentar desafíos complejos y encontrar soluciones innovadoras que optimicen el rendimiento y la seguridad.'
        },
        {
            id: 3,
            title: 'Herramientas Ofimáticas',
            description: 'Además de mis habilidades técnicas en desarrollo, tengo experiencia en el uso de diversas herramientas ofimáticas para mejorar la productividad y la gestión de proyectos. Manejo Microsoft Office (Word, Excel, PowerPoint) y Google Workspace (Docs, Sheets, Slides) para la creación y gestión de documentos, hojas de cálculo y presentaciones. Estas habilidades me permiten colaborar efectivamente en entornos de trabajo modernos. Me enorgullezco de mi capacidad para organizar información y presentar datos de manera clara y concisa, facilitando la toma de decisiones informadas.'
        }
    ];

    const [open, setOpen] = useState(false);
    

  return (
    <div className="services">
      <div className="services__title">
        <h1>Servicios</h1>
        <h1>Lo que ofrezco</h1>
        <span></span>
      </div>
      <div className="services__containerInfo">
        {
            services?.map((service) => (
                <div>
                    <span>0{service.id}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    < ImArrowUpRight2 style={{fontSize:'20rem', height:'2rem', color:'#98a5ff'}}/>
                </div>
            ))
        }
      </div>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
};

export default Service;
