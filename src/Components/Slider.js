import React from 'react';
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import kasasListData from '../data/kasasItems';
import '../styles/components/Slider.css';


const Slider = () => {
    const idKasa = useParams('id').id;
    const dataCurrentKasa = kasasListData.find(data => data.id === idKasa);
    
    return (
        <Carousel 
            className='slider' 
            infiniteLoop
        >
            {dataCurrentKasa.pictures.map((picture, index) => (
                <div key={index}>
                    <img src={picture} alt="" className='picture' />
                </div>
            ))}
        </Carousel>
    );
};

export default Slider;