//imports - image
import gifImage from '../images/giraffe.jpg';
//inport css here or above
// going to go to zoolist

//add any JS code for setup

//add function to return what you create
function GiraffeInfo(){
    //add specific variable and JS code in before we do JSX
    return(
        <li>
            <div>
                <h2>Giraffe Information</h2>
                <p> This is our giraffe, Spot.</p>
            </div>
            <div><img src={gifImage} alt="giraffe "/></div>
        </li>
    )
}

export default GiraffeInfo;