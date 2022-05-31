import React from 'react'
import logo from '../img/Logo.png'
import search from '../img/mdi_search.png'
const Header = () => {
  return (
    <div><header class="menu">
    <ul>
    <li>
        <img src={logo}/>
    </li> 
    <li>
        <a href="">blog</a>
    </li>
    <li>
        <a href="">contact</a>
    </li> 
    <li>
        <a href="">about</a>
    </li>
    <li>
        <img src={search}/>
    </li>

    </ul>
</header></div>
  )
}

export default Header