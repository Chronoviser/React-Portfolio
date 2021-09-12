import './Menu.scss';
import MenuItem from './Menu-Item';

function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <MenuItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} id="intro" name="Home" />
                <MenuItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} id="portfolio" name="Portfolio" />
                <MenuItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} id="projects" name="Projects" />
                <MenuItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} id="contact" name="Contact" />
            </ul>
        </div>
    );
}

export default Menu;