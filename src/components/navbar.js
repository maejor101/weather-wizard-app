import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';


function Navbar() {
    return (

        <nav className='navbar'>
            <h2>Weather Wizard</h2>
            <div className='links'>
            <Link to='/' style={{
                    color: "rgb(77, 77, 77)",
                    borderRadius: "8px",
                }}>Home</Link>
                <Link to='/news' style={{
                    color: "rgb(77, 77, 77)",
                }}>News</Link>
             
                <Link to='/fiveday' style={{
                    color: "rgb(77, 77, 77)",
                    borderRadius: "8px",
                }}>weekly</Link>



            </div>
        </nav>

    )
}

export default Navbar;