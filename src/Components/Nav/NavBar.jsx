import "./nav.css"

export default function Nav() {
    return (
        <header>
            <h1>Sushmita</h1>
            <nav>
                <input type="checkbox" id="sidebar-active" />
                <label htmlFor="sidebar-active" className="open-sidebar-button">
                    &#9776;
                </label>
                <label id="overlay" htmlFor="sidebar-active"></label>
                <div className="links-container">
                    <label htmlFor="sidebar-active" className="close-sidebar-button">
                        &times;
                    </label>
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#work">Works</a>
                    <a href="#service">Services</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    )
}