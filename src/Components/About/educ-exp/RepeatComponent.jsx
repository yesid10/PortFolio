import  "./StylesRepeatComponent.scss";

const RepeatComponent = ({info}) => {
  return (

    <div className='educationFuction'>
      {info?.map((item) => (
        <div key={item.id} className="container">
            <p className="date">{item.date}</p>
            <p className="institution">{item.institution}</p>
            <span></span>
            <p className="grade">{item.title}</p>
        </div>
      ))}
      
    </div>
  )

}

export default RepeatComponent
