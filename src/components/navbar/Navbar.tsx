import React from 'react'
import {Wrapper} from './Navbar.style'
import {Link} from 'react-router-dom'
import logo from '../../images/starwarslogo.png'

const Navbar = () => {
    return (
        <Wrapper>
            <Link to='/'>
                <img src={logo} alt="Logo Image For Star Wars"/>
            </Link>
            <h1>Search For The Latest Star Wars Films</h1>
        </Wrapper>
    )
}

export default Navbar
