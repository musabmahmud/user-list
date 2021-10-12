import React from 'react';
import "./Des.css";
const Des = (props) => {
    return (
        <div className="des">
            <h3>Number of Hired Members : {props.person}</h3>
            <p>Total Cost: ${props.total}</p>
            
        </div>
    );
};

export default Des;