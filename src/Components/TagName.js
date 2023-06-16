import React from 'react';
import { useParams } from "react-router-dom";
import kasasListData from '../data/kasasItems';
import '../styles/components/TagName.css';

const TagName = () => {

    const idKasa = useParams('id').id;
    const dataCurrentKasa = kasasListData.find(data => data.id === idKasa);

    return (
        <div className='tag-name'>
        {dataCurrentKasa.tags.map((tag, index) => (
                <div key={index} className='sub-tag-name'>
                    <p className='tag-text'>{tag}</p>
                </div>
            ))}
        </div>
    );
};

export default TagName;