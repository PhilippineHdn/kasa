import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Components/Header';
import Slider from '../Components/Slider';
import TagName from '../Components/TagName';
import Dropdown from '../Components/Dropdown';
import Footer from '../Components/Footer';
import kasasListData from '../data/kasasItems';
import redStar from '../assets/img/red_star.svg';
import greyStar from '../assets/img/grey_star.svg';
import { useParams } from "react-router-dom";
import '../styles/components/KasaInformation.css';

const Kasa = () => {
    const { t } = useTranslation();
    const idKasa = useParams('id').id;
    const dataCurrentKasa = kasasListData.find(data => data.id === idKasa);
    const description = dataCurrentKasa.description;
    const equipments = dataCurrentKasa.equipments;
    const rating = dataCurrentKasa.rating;
    
    return (
        <div>
            <Header />
            <Slider />
            
            <div className='information'>
                <div className='information-left'>
                    <h1 className='kasa-main-title'>{dataCurrentKasa.title}</h1>
                    <h2 className='kasa-location'>{dataCurrentKasa.location}</h2>
                </div>
                <div className='information-right'>
                    <h3 className='kasa-host'>{dataCurrentKasa.host.name}</h3>
                    <img className='kasa-host-picture' src={dataCurrentKasa.host.picture} alt={dataCurrentKasa.host.name}/>
                </div>
            </div>
            
            <div className='tag-rate-line'>
                <TagName />
                <div className='star-host-mobile'>
                    <div className='star-line'>
                        {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;
                            return (
                                <img key={`star-${index}`} src={ratingValue <= rating ? redStar : greyStar } alt="star" />
                            )
                        })}
                    </div>
                    <div className='information-right-mobile'>
                        <h3 className='kasa-host'>{dataCurrentKasa.host.name}</h3>
                        <img className='kasa-host-picture' src={dataCurrentKasa.host.picture} alt={dataCurrentKasa.host.name}/>
                    </div>
                </div>
            </div>

            <div className='dropdown-line'>
                <Dropdown dropdownTitle='Description' content={description}/>
                <Dropdown dropdownTitle={t('facilities')} content={equipments} />
            </div>

            <Footer />

        </div>
    );
};

export default Kasa;