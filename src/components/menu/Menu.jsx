import './Menu.scss';
import MenuItem from './Menu-Item';
import { Visibility } from '@material-ui/icons';

function Menu({ menuOpen, setMenuOpen, views }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <MenuItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} id="intro" name="Home" />
                <MenuItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} id="portfolio" name="Portfolio" />
                <MenuItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} id="projects" name="Projects" />
                <MenuItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} id="contact" name="Contact" />
            </ul>
            <p className="visits"> <Visibility /> &nbsp; {views}</p>
        </div>
    );
}

export default Menu;