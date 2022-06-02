
import React, { useState } from 'react';

import HeaderDisplay from "./HeaderDisplay";
import './header.css';

const Header = () => {
    //Declaring the state if the user wants to see the about section.
    const [display, setDisplay] = useState(false);
    const value = () => {
        setDisplay(!display);
        console.log(display);
    }
    return (
        <div>
            <h1 className="header-transition">Header</h1>
            <HeaderDisplay value={value}/>
            
        </div>
        
    )
}

export default Header;