import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = ()=>{
    
    return(
        <ul className="navbar-nav ">
            <li className="nav-item"><NavLink to="/" className="nav-link">Mes cours</NavLink></li>
            <li className="nav-item"><NavLink to="/" className="nav-link">Nouveau cours</NavLink></li>
            <li className="nav-item"><NavLink to="/" className="nav-link">Statistiques</NavLink></li>
            <li className="nav-item"><NavLink to="/" className="nav-link">Tags</NavLink></li>
            <li className="nav-item"><NavLink to="/" className="nav-link">Log Out</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;