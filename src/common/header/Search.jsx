import React from "react"
import logo from './assets/logo.png';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons';


const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container_c_flex'>
          <div className='logo_width '>
            <img src={logo} alt='' />
          </div>

          <div className='search-box_f_flex'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type='text' placeholder='O que você deseja...' />
            {/* <span>All Category</span> */}
          </div>

          <div className='icon_f_flex_width'>
              <div className="usuario">
                <Link to='/login'>
                <FontAwesomeIcon icon={faUser} />
                </Link>
              </div>
                          
              <div className="cart">
              <Link to='/cartpage'>
              <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
