import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import kasasListData from '../data/kasasItems';
import ArrowRight from '../assets/img/right_arrow.svg';
import ArrowLeft from '../assets/img/left_arrow.svg';
import '../styles/components/Slider.css';


const Slider = () => {
    const idKasa = useParams('id').id;
    const dataCurrentKasa = kasasListData.find(data => data.id === idKasa);

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === dataCurrentKasa.pictures.length - 1)
        setCurrentIndex(0)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
        setCurrentIndex(dataCurrentKasa.pictures.length - 1)
    }
    
    return (

        <section className='slider' style={{backgroundImage : `url(${dataCurrentKasa.pictures[currentIndex]})`}}>
            {dataCurrentKasa.pictures.length > 1 && 
                <>
                    <img 
                        className='slider-arrow-left' 
                        src={ArrowLeft} 
                        alt="show next slider" 
                        onClick={prevSlide}
                    />
                    <img 
                        className='slider-arrow-right' 
                        src={ArrowRight} 
                        alt="show previous slider" 
                        onClick={nextSlide}
                    />
                    <p className='slideCount'> {currentIndex + 1} / {dataCurrentKasa.pictures.length} </p>
                </>
            }
        </section>
    );
};

export default Slider;