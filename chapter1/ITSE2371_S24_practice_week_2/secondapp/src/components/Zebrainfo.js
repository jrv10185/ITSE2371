//imports - image
import zeImage from '../images/zebra.jpg';
//inport css here or above
// going to go to zoolist

//add any JS code for setup

//add function to return what you create
function ZebraInfo(){
    //add specific variable and JS code in before we do JSX
    return(
        <li>
            <div>
                <h2>Zebra Information</h2>
                <p> This is our Zebra, Stripes.</p>
            </div>
            <div><img src={zeImage} alt="Zebra "/></div>
        </li>
    )
}

export default ZebraInfo;