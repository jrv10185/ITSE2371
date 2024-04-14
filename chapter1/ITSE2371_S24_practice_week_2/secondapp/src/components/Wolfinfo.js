//imports - image
import wolfImage from '../images/wolf.jpg';
//inport css here or above
// going to go to zoolist

//add any JS code for setup

//add function to return what you create
function WolfInfo(){
    //add specific variable and JS code in before we do JSX
    return(
        <li>
            <div>
                <h2>Wolf Information</h2>
                <p> This is our wolf, Grey.</p>
            </div>
            <div><img src={wolfImage} alt="wolf"/></div>
        </li>
    )
}

export default WolfInfo;