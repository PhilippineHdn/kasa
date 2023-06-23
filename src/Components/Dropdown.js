import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import downArrow from '../assets/img/down_arrow.svg'
import upArrow from '../assets/img/up_arrow.svg';
import '../styles/components/Dropdown.css';

const Dropdown = (props) => {

    const dropdownTitle = props.dropdownTitle;
    const content = props.content;
    const location = useLocation();

    const [dropdownState, setdropdownState] = useState(false);

    function handleClick(){
        setdropdownState(dropdownState => !dropdownState)
    }

    const toggleClassCheck = dropdownState ? 'display' : 'hidden';
    return (
         <div className={ location.pathname === '/about' ? "about-dropdown" : "dropdown" }> 
            <button type="button" className="button" onClick={handleClick}>
                <p>{dropdownTitle}</p>
                <img src={toggleClassCheck === 'hidden' ? downArrow : upArrow} className={toggleClassCheck === 'hidden' ? 'down-arrow' : 'up-arrow'} alt='arrow'/>
            </button>
            <div className={`dropdown-list-${toggleClassCheck}`}>
                    {Array.isArray(content) ? 
                        content.map((equipment, index) => (
                            <ul className='list-options'>
                                <li key={index}>{equipment}</li>
                            </ul>
                        ))
                        : <p className='dropdown-text'>{content}</p>
                    }
            </div>
         </div>
    );
};

export default Dropdown;