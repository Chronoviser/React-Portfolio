import './Intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

function Intro() {

    const professionRef = useRef();

    useEffect(() => {
        init(professionRef.current, {
            showCursor: true,
            backDelay: 1000,
            strings: ["Android Apps Developer", "Web Apps Developer", "Desktop Apps Developer", "Startup Enthusiast"]
        })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="Abhishek Singh" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Namaste🙏, I'm</h2>
                    <h1>Abhishek Singh</h1>
                    <h3><span ref={professionRef} /></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down" />
                </a>
            </div>
        </div>
    );
}

export default Intro;