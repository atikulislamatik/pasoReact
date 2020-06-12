import React, {useState} from 'react';
import {IoIosArrowUp} from 'react-icons/io';

const GoTop = () =>{

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <div className="gotop">
            <IoIosArrowUp className="scrollTop" onClick={scrollTop} style={{height: 27, display: showScroll ? 'flex' : 'none'}} />
        </div>
    );
}

export default GoTop ;