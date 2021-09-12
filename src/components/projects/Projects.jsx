import './Projects.scss';
import { data } from '../../constants/Projects-Data.js';
import { useState } from 'react';

function Projects() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (direction) => {
        direction === 0
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="projects" id="projects">
            <div className="slider" style={{ transform: `translate(-${currentSlide * 100}vw)` }}>
                {
                    data.map((d) => (
                        <div className="container">
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">
                                            <img src={d.icon} alt="" />
                                        </div>
                                        <h2>{d.title}</h2>
                                        <p>{d.desc}</p>
                                        <span>Projects</span>
                                    </div>
                                </div>
                                <div className="right">
                                    <img
                                        src={d.img}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick(0)} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick(1)} />
        </div>
    );
}

export default Projects;