import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"

const Header = ({ CartItem }) => {
  return (
    <div className="header-container">
        <Head />
      <div className="busca">
        <Search CartItem={CartItem} />
      </div>
    </div>
  )
}

export default Header
