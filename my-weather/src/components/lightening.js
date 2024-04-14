


import lightImage from '../images/lightening.jpg'


function LightInfo(){

    return(
        <li>
            <div>
                <h2>Lightening is my favorite weather event!</h2>
                <p> I stare at the natural light show for hours.</p>
            </div>
            <div><img src={lightImage} alt="lightening"/></div>
        </li>
    )
}

export default LightInfo;