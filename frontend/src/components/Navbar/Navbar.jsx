import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'

import './navbar.css'


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link to="/" className="navbar-brand"><img src="https://devcoffee.com.br/wp-content/uploads/2022/01/logo_devcoffee_solucoes_tecnologia.png"></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page" >Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/caphe" className="nav-link">Cà phê</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/bakery" className="nav-link">Bakery</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/menu" className="nav-link" >Menu</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}