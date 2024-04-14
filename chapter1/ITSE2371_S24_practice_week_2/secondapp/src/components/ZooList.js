//imports - image
import eleImage from '../images/elephant.jpg';
import gifImage from '../images/giraffe.jpg';
import wolfImage from '../images/wolf.jpg';
import zeImage from '../images/zebra.jpg';
//inport css here or above
import mycss from './Exhibit.css';
import ZooAnimals from './ZooAnimals';


function ZooList(){
    return(
        <>
        <h1>This is my zoo list component</h1>
        <ZooAnimals exhibit = "Element Exhibit" desc="This is our elephant" animalImage={eleImage}/>
        <ZooAnimals exhibit = "Giraffe Exhibit" desc="This is our Giraffe" animalImage={gifImage}/>
        <ZooAnimals exhibit = "Wolf Exhibit" desc="This is our Wolf" animalImage={wolfImage}/>
        <ZooAnimals exhibit = "Zebra Exhibit" desc="This is our Zebra" animalImage={zeImage}/>

        </>
    )
}

export default ZooList;