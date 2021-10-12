import React from 'react';
import "./Header.css";

const Header = (props) => {
    return (
        <div className="Header">
            <h1>The List of Users {props.length}</h1>
        </div>
    );
};

export default Header;