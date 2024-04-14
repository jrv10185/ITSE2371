import React from 'react';

function Title({text}){
    return(

        <h1>
            {!text ? "Title" : text}
        </h1>
    )
}

export default Title;