import "./nav.css"
import { FaIconName } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


export default function Nav() {
    return (
        <header>
            <h1>Sushmita</h1>
            <nav>
                <input type="checkbox" id="sidebar-active" />
                <label htmlFor="sidebar-active" className="open-sidebar-button">
                    <FontAwesomeIcon className="icc" icon={faBars} />
                </label>
                <label id="overlay" htmlFor="sidebar-active"></label>
                <div className="links-container">
                    <label htmlFor="sidebar-active" className="close-sidebar-button">
                        <FontAwesomeIcon className="icc" icon={faXmark} />
                    </label>
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/work">Works</a>
                    <a href="/service">Services</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </header>
    )
}