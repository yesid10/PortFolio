import './StylesSkills.scss';
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from 'react-icons/di';
import { SiSpringboot, SiGit, SiGithub } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io5";

const Skills = () => {

  const arrarKills = [
    {
      id: 1,
      icon: <AiOutlineHtml5 style={{color:'#252439'}}/>,
      name: "HTML",
      xp: "90%"
    },
    {
      id: 2,
      icon: <DiCss3  style={{color:'#252439'}}/>,
      name: "CSS",
      xp: "85%"
    },
    {
      id: 3,
      icon: <IoLogoJavascript style={{color:'#252439'}}/>,
      name: "JavaScript",
      xp: "80%"
    },
    {
      id: 4,
      icon: <DiReact style={{color:'#252439'}}/>,
      name: "React.js",
      xp: "75%"
    },
    {
      id: 5,
      icon: <SiSpringboot style={{color:'#252439'}}/>,
      name: "SpringBoot",
      xp: "70%"
    },
    {
      id: 6,
      icon: <SiGit style={{color:'#252439'}}/>,
      name: "Git",
      xp: "80%"
    },
    {
      id: 7,
      icon: <SiGithub style={{color:'#252439'}} />,
      name: "GitHub",
      xp: "85%"
    }
  ];

  return (
    <div className="SkillsFuction">
      {
        arrarKills?.map(skill => (
          <div className='icons' key={skill.id}>
            <span className='iconFigure'>{skill.icon}</span>
            <span className='info'>{skill.name} <span style={{fontWeight:'700'}}>({skill.xp})</span></span> 
          </div>
        ))
      }
    </div>
  )
}

export default Skills
