
function ZooAnimals({exhibit, desc, animalImage}){
    //add specific variable and JS code in before we do JSX
    return(
        <li>
            <div>
                <h2>{exhibit}</h2>
                <p> {desc}</p>
                <div><img src={animalImage} alt="an animal"/></div>
            </div>

        </li>
    )
}

export default ZooAnimals;