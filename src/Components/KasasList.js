import React from 'react';
import { NavLink } from "react-router-dom";
import kasasListData from '../data/kasasItems';
import '../styles/components/KasasList.css';

const KasasList = () => {
    return (
        <div className='kasas-list'>
            {kasasListData.map(({ id, title, cover }) =>
                <NavLink to={`kasa/${id}`} >
                    <article key={id} className='kasa'>
                        <img className='kasa-cover' src={cover} alt={`${title} cover`} />
                        <h3 className='kasa-title'>{title}</h3>
                    </article>
                </NavLink>
            )}
        </div>
    );
};

export default KasasList;