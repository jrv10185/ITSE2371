import TornadoInfo from './tornado';
import LightInfo from './lightening';
import FloodingInfo from './flooding';
//inport css here or above
import mycss from '../components/weather.css';

function WeatherList(){
    return(
        <>
        <h1>Some of my favorite weather events</h1>
        <ul>
        <TornadoInfo/>
        <LightInfo/>
        <FloodingInfo/>
        </ul>
        </>
    )
}

export default WeatherList;