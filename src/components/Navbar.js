import React from 'react'

import './Navbar.css';

function Navbar() {
    return (
        <div className="customNavbar">

            <nav class="navbar navbar-expand-sm navbar-dark bg-dark custom-nav">
            <a class="navbar-brand" href="">LOGO</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainMenu">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="{% url 'home' %}">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://github.com/Mohitb07/mohitboard" target="_blank" rel="noopener noreferrer">Compete</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://github.com/Mohitb07/mohitboard" target="_blank" rel="noopener noreferrer">Practice</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://github.com/Mohitb07/mohitboard" target="_blank" rel="noopener noreferrer">Blogs</a>
                </li>
              </ul>

                <div className="custom-form searchBox">
                <form class="form-inline">
                    <input class="form-control mr-sm-1 searchinput" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-primary my-2 my-sm-0 searchbutton" type="submit"><ion-icon name="search-outline"></ion-icon></button>
                </form>
                </div>

                

                <ul class="navbar-nav ml-auto">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="userMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     User 1
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userMenu">
                      <a class="dropdown-item" href="{% url 'my_account' %}">My account</a>
                      <a class="dropdown-item" href="{% url 'password_change' %}">Change password</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="{% url 'logout' %}">Log out</a>
                    </div>
                  </li>
                </ul>

        
            </div>
        </nav>
            
        </div>
    )
}

export default Navbar
