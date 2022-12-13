import './HomePageCard.css';

const HomePageCard = props => {
    return(
    <div className="card-container">
        <div className="image-container">
            <img className="image-size" src={props.image}/>
        </div>
        <div className="text-container">
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    </div>
    )
}

export default HomePageCard;