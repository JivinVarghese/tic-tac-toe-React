import React, { useState } from 'react';
import "./App.css";
function Square({value,onClick,}) {
    return(
        <button className='square'onClick={onClick}>
            {value}
        </button>
    
    )

}
export default Square;