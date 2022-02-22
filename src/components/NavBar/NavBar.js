import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark shadow'>
            <div className='container'>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand text-warning" href="#">2Wheels</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Bicicletas
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Tradicionales</a></li>
                            <li><a className="dropdown-item" href="#">Eléctricas</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Monopatines Eléctricos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Accesorios</a>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    </div>
  )
}

export default NavBar