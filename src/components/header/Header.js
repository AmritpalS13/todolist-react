
import React, { useState } from 'react';


import './header.css';

const Header = ( { showInputMenu } ) => {
    

    return (
        <div>
            <h1 className="header-transition">Todo List - React</h1>
            <p>By: Paul Sidhu</p>
            <button className='btn' onClick={showInputMenu}>Add</button>
        </div>
        
    )
}

export default Header;