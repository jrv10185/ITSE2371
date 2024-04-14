import floodImage from '../images/flooding.jpg'
import lightImage from '../images/lightening.jpg'
import tornImage from '../images/tornado.jpg'
import Weather from './weather';
//inport css here or above
import mycss from '../components/weather.css';

function WeatherList(){
    return(
        <>
        <h1>Some of my favorite weather events</h1>
        <ul>
            <Weather title = "Floods are devastating!" desc="There is a reason its mentioned in ancient texts as a civilization killer." image={floodImage}/>
            <Weather title = "Lightening is my favorite weather event!" desc="I stare at the natural light show for hours." image={lightImage}/>
            <Weather title = "Tornadoes are terrifying!" desc="One time one hit my nieghborhood, but completely jumped over my house." image={tornImage}/>
        </ul>
        </>
    )
}

export default WeatherList;