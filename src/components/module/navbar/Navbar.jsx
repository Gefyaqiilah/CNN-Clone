import React, {useState} from 'react'
import './Navbar.scoped.css'

import {Link} from 'react-router-dom'
import logo from '../../../assets/logo.png'
import defaultUserImage from '../../../assets/default-user-img.jpg'
function Navbar () {
  const [showSearch, setShowSearch] = useState(false)
  
  return (
    <div className="container-fluid p-0 sticky-top index-top">
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo"/>
        </Link>
        <button  type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          {!showSearch && <div className="navbar-nav">
            <div className="nav-item">
              <Link to="" className="text-gray th-red td-none">Home</Link>
            </div>
            <div className="nav-item">
              <Link to="" className="text-gray th-red td-none">Nasional</Link>
            </div>
            <div className="nav-item">
              <Link to="" className="text-gray th-red td-none">Internasional</Link>
            </div>
            <div className="nav-item">
              <Link to="" className="text-gray th-red td-none">Ekonomi</Link>
            </div>
            <div className="nav-item">
              <Link to="" className="text-gray th-red td-none">Olahraga</Link>
            </div>
            <div className="nav-item">
              <Link to="" className="text-gray th-red td-none">Teknologi</Link>
            </div>
            <div className="nav-item">
              <Link to="" className="text-gray th-red td-none">Hiburan</Link>
            </div>
            <div className="nav-item">
              <Link to="" className="text-gray th-red td-none">Gaya Hidup</Link>
            </div>
          </div>}
          {!showSearch && <div className="navbar-nav">  
          <div className="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-gray th-red td-none p-0" href="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          LAINNYA
        </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <div className="nav-item">
           <i class="fa fa-search text-white" onClick={()=>setShowSearch(true)}  aria-hidden="true"></i>
          </div>
          <div className="nav-item dropdown-profile dropdown">
            <div className="img p-0">
              <img src={defaultUserImage} alt="imageuser" class="dropdown-toggle" href="#" data-toggle="dropdown"/>
            </div>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
              <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
	          </ul>
          </div>
          </div>}
          {showSearch && <div className="container-fluid search-wrapper d-flex flex-row justify-content-center h-100 p-3 m-0">
            <input type="text" className="form-control search-input m-0"/>
            <div className="clear-search p-0 m-0 d-flex justify-content-center align-items-center">
              <i className="fa fa-times text-white m-0 text-20" onClick={() => setShowSearch(false)}></i>
            </div>
          </div>
          }
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar