import React from 'react'
import {Wrapper} from './Navbar.style'
import {Link} from 'react-router-dom'
import logo from '../../images/starwarslogo.png'

const Navbar = () => {
    return (
        <Wrapper>
            <Link to='/'>
                <img src={logo} alt="Logo For Star Wars"/>
            </Link>
            <h1>Search For Star Wars Films</h1>
        </Wrapper>
    )
}

export default Navbar
