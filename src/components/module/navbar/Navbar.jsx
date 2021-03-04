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
              <Link to="/nasional" className="text-gray th-red td-none">Nasional</Link>
            </div>
            <div className="nav-item">
              <Link to="/internasional" className="text-gray th-red td-none">Internasional</Link>
            </div>
            <div className="nav-item">
              <Link to="/ekonomi" className="text-gray th-red td-none">Ekonomi</Link>
            </div>
            <div className="nav-item">
              <Link to="/olahraga" className="text-gray th-red td-none">Olahraga</Link>
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
          <h6 className="nav-link dropdown-toggle text-gray th-red td-none p-0" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          LAINNYA
          </h6>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><Link to="" className="dropdown-item">Action</Link></li>
              <li><Link to="" className="dropdown-item">Another action</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link to="" className="dropdown-item">Something else here</Link></li>
            </ul>
          </div>
          <div className="nav-item">
           <i className="fa fa-search text-white" onClick={()=>setShowSearch(true)}  aria-hidden="true"></i>
          </div>
          <div className="nav-item dropdown-profile dropdown">
            <div className="img p-0">
              <img src={defaultUserImage} alt="imageuser" className="dropdown-toggle" href="#" data-toggle="dropdown"/>
            </div>
            <ul className="dropdown-menu">
              <li><Link to="" className="dropdown-item"> Submenu item 1</Link></li>
              <li><Link to="" className="dropdown-item"> Submenu item 2 </Link></li>
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