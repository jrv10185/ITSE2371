//dont need any imports
//we need function and return
//export

function Greeting({name, color}){
    return (
        <h1 style = {{color: color}}>Hello, {name}.</h1>
    );
};

export default Greeting;