import React, { useState } from 'react';
import "./App.css";
function Restart({onClick}) {
    return (
        <button className="restart" onClick={onClick}>
          Play again
        </button>
      )
}

export default Restart