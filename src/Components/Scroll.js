import React from 'react';


//two curly braces is cause it is an object inside of a js expression.

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll',
                     overflowX: 'hidden', 
                     maxHeight:'800px'
                    }}>
            {props.children}      
        </div>
    )
}

export default Scroll;