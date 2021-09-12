import { useEffect, useState } from 'react';
import PortfolioItem from './Portfolio-Item';
import './Portfolio.scss';
import {
    portfolioItems,
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    desktopPortfolio
} from '../../constants/Portfolio-Data.js';

function Portfolio() {

    const [selectedItem, setSelectedItem] = useState("featured");
    const [data, setData] = useState(featuredPortfolio);

    useEffect(() => {
        switch (selectedItem) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "desktop":
                setData(desktopPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selectedItem])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {
                    portfolioItems.map((item) =>
                        <PortfolioItem
                            id={item.id}
                            title={item.title}
                            active={selectedItem === item.id}
                            setSelectedItem={setSelectedItem}
                        />)
                }
            </ul>
            <div className="container">
                {
                    data.map((d) => (
                        <div className="item">
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