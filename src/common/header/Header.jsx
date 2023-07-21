import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem }) => {
  return (
    <div className="header-container">
      <Head />
       <div className="busca">
       <Search CartItem={CartItem} />
       </div>
     <Navbar />
    </div>
  )
}

export default Header
