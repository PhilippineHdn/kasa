import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import kasasListData from '../data/kasasItems';
import downArrow from '../assets/img/down_arrow.svg'
import upArrow from '../assets/img/up_arrow.svg';
import '../styles/components/Dropdown.css';

const Dropdown = () => {

    const idKasa = useParams('id').id;
    const dataCurrentKasa = kasasListData.find(data => data.id === idKasa);

    const [dropdownState, setdropdownState] = useState(false);

    function handleClick(){
        setdropdownState(dropdownState => !dropdownState)
    }

    const toggleClassCheck = dropdownState ? 'display' : 'hidden';

    return (
        <div className="dropdown">
            <button type="button" className="button" onClick={handleClick} >
                <p>Équipements</p>
                <img src={toggleClassCheck === 'hidden' ? downArrow : upArrow} alt='up-arrow'/>
            </button>
            <div className={`dropdown-list-${toggleClassCheck}`}>
                <ul className='list-options'>
                    {dataCurrentKasa.equipments.map((equipment, index) => (
                        <li className='list-option' key={index}>{equipment}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;