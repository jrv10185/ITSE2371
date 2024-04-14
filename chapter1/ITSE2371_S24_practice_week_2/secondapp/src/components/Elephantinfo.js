//imports - image
import eleImage from '../images/elephant.jpg';
//inport css here or above
import mycss from './Exhibit.css';
// going to go to zoolist

//add any JS code for setup

//add function to return what you create
function ElephantInfo(){
    //add specific variable and JS code in before we do JSX
    return(
        <li>
            <div>
                <h2>Elephant Information</h2>
                <p> This is our elephant, Kongo.</p>
            </div>
            <div><img src={eleImage} alt="elephant"/></div>
        </li>
    )
}

export default ElephantInfo;
