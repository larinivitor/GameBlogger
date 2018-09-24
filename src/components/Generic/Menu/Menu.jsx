import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import './Menu.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const signIn = <FontAwesomeIcon icon={'fa-sign-in-alt'} />

export default class Menu extends React.Component {
        
        _rendermenu(){
            return(
                <div>
<nav class="menu">
  <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
  <label class="menu-open-button" for="menu-open">
    <span class="hamburger hamburger-1"></span>
    <span class="hamburger hamburger-2"></span>
    <span class="hamburger hamburger-3"></span>
  </label>

  <a href="/login" class="menu-item">LogOut</a>
    <a href="#" class="menu-item">Sobre</a>
    <a href="/add" class="menu-item">Add</a>
  <a href="/home" class="menu-item">Home</a>
  <a href="/login" class="menu-item">LogIn</a>

</nav>
    <defs>
      <filter id="shadowed-goo">
          
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
          <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
          <feOffset in="shadow" dx="1" dy="1" result="shadow" />
          <feBlend in2="shadow" in="goo" result="goo" />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
      </filter>
      <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
      </filter>
    </defs>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
            </div>
            )
        }
    
        render(){
            return(
            <div className="Cont--Menu">
                {this._rendermenu()}
            </div>
            )
        }
}




  
