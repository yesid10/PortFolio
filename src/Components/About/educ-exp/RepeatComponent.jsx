import  "./StylesRepeatComponent.scss";

const RepeatComponent = ({info}) => {
  return (

    <div className='educationFuction'>
      {info?.map((info) => (
        <div className="container">
            <p className="date">{info.date}</p>
            <p className="institution">{info.institution}</p>
            <span></span>
            <p className="grade">{info.title}</p>
        </div>
      ))}
      
    </div>
  )

}

export default RepeatComponent
