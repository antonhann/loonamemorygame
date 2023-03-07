const Card = ({idol, image, clicked}) => {
    return(
        <div className = "card" onClick={() => {clicked(idol)}}>
            <img src = {image} alt = {idol}></img>
            <p>{idol}</p>
        </div>
    )
}
export default Card;
    // <div className = "card" key = {index}>
    //                         <img src = {images[item.idol]} alt = {item.idol}></img>
    //                         <button onClick={() => {clicked(item.idol)}}>{item.idol}</button>
    //                     </div>