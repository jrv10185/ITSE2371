function Weather({title, desc, image}){

    return(
        <li>
            <div>
                <h2>{title}</h2>
                <p style={{color:'green'}}> {desc}</p>
            </div>
            <div><img src={image} alt="weather image"/></div>
        </li>
    )
}

export default Weather;