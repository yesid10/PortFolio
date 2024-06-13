import { TbBrandTelegram } from "react-icons/tb";
import './StylesExperience.scss';


const Experience = () => {


  const arraySkills = [
    {
      id: 1,
      icon: <TbBrandTelegram/>,
    }
  ];


  return (
    <div className="experienciaFuction">
     {
      arraySkills?.map(skill => (
        <div key={skill.id}>
          yesid
          {skill.id}
          {skill.icon}
        </div>
      ))
     }
    </div>
  )
}

export default Experience
