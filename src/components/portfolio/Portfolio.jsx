import { useEffect, useState } from 'react';
import PortfolioItem from './Portfolio-Item';
import './Portfolio.scss';
import { portfolioItems } from '../../constants/Portfolio-Data.js';

function Portfolio({ data }) {

    const [selectedItem, setSelectedItem] = useState("featured");
    const [show, setShow] = useState(data.featured);

    useEffect(() => {
        switch (selectedItem) {
            case "featured":
                setShow(data.featured);
                break;
            case "web":
                setShow(data.web);
                break;
            case "mobile":
                setShow(data.mobile);
                break;
            case "desktop":
                setShow(data.desktop);
                break;
            default:
                setShow(data.featured);
        }
    }, [selectedItem, data])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {
                    portfolioItems.map((item, _) =>
                        <PortfolioItem
                            key={_}
                            id={item.id}
                            title={item.title}
                            active={selectedItem === item.id}
                            setSelectedItem={setSelectedItem}
                        />)
                }
            </ul>
            <div className="container">
                {
                    show.map((d, _) => (
                        <div className="item" key={_}>
                            <img src={d.img} alt={d.title} />
                            <h3>{d.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Portfolio;