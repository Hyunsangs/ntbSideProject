import React from 'react'
import { Link } from 'react-router-dom'
import '../Scss/Header.scss';

function Header() {
  return (
    <div>
        <div className="menu-bar">
            <Link to='/'><p>Dizzy Digi</p></Link>
            <Link to="/explain"><p>웹 소개</p></Link>
            <Link to="/rank"><p>순위 보기</p></Link>
        </div>
            
    </div>
     
  )
}

export default Header
