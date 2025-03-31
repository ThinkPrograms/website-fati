 const Card = (data: {image: string, title: string, text: string} ) => {
    return (
      <div className="card">
        <img src={data.image} alt="" className="card-image" />
        <p className="card-title">{data.title}</p>
        <p className="card-details">{data.text}</p>
      </div>
    )
}

export default Card;