
import tornImage from '../images/tornado.jpg'


function TornadoInfo(){

    return(
        <li>
            <div>
                <h2>Tornadoes are terrifying!</h2>
                <p> One time one hit my nieghborhood, but completely jumped over my house.</p>
            </div>
            <div><img src={tornImage} alt="tornado"/></div>
        </li>
    )
}

export default TornadoInfo;

