import './Portfolio-Item.scss';

function PortfolioItem({ id, title, active, setSelectedItem }) {
    return (
        <li
            className={"portfolio-item " + (active && "active")}
            onClick={() => setSelectedItem(id)}
        >
            {title}
        </li>
    );
}

export default PortfolioItem;