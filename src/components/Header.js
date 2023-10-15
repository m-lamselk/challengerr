import React from 'react'

function Header() {
  return (
    <div>
        <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <a href="index.html" className="logo">
                            <img src="assets/images/logo.png" alt=""></img>
                        </a>
                        <div className="search-input">
                        <form id="search" action="#">
                            <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                            <i className="fa fa-search"></i>
                        </form>
                        </div>
                        <ul className="nav">
                            <li><a href="#" >Players</a></li>
                            <li><a href="#games">Games</a></li>
                            <li><a href="#tournaments">Tournaments</a></li>
                            <li><a href="#">Login/Sign In <img src="assets/images/profile-header.jpg" alt=""></img></a></li>
                        </ul>   
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header
