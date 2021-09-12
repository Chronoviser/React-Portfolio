function MenuItem({ menuOpen, setMenuOpen, id, name }) {
    return (
        <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href={"#" + id}>{name}</a>
        </li>
    );
}

export default MenuItem;