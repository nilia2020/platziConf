import React from "react";
import {Link} from 'react-router-dom'
import "./styles/Navbar.css";
import logo from "../images/logo.svg";

class Navbar extends React.Component {
    render() {
    return (
    <header>
        <nav className="Navbar">
            <section className="container-fluid">
                <Link className="Navbar__brand" to="/">
                    <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                    <span className="fw-light">Platzi</span>
                    <span className="fw-bold">Conf</span>
                </Link>
            </section>
        </nav>
    </header>
    );
    }
}
export default Navbar;
