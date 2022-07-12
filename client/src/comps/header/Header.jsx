import React from 'react'
import './Header.css'
import Account from './Account'
import Logo from './Logo'
import Search from './Search'


const Header = () => {
  return (
    <header>
      <Logo/>
      <Search/>
      <Account/>
    </header>
  )
}

export default Header