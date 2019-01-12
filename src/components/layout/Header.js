import React from 'react';
import {Link} from 'react-router-dom'

// stateless or clsss less components
function Header(){
    return(
        <header style={headerStyle}>
             <h1>TodoList</h1>
             <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle}  to="/about" >About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 10px',
    margin: '0'
}

const linkStyle = {
    color: '#fff',
    fontWeight: 700,
}

export default Header;