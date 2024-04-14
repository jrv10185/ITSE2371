
import floodImage from '../images/flooding.jpg'


function FloodingInfo(){

    return(
        <li>
            <div>
                <h2>Floods are devastating!</h2>
                <p> There is a reason its mentioned in ancient texts as a civilization killer.</p>
            </div>
            <div><img src={floodImage} alt="flood"/></div>
        </li>
    )
}

export default FloodingInfo;