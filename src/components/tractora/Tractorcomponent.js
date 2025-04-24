import './tractori.css'

import traktor4iki from "./Tractori";
import ForkliftCard from "./card";
import ForkliftModal from "./forliftModal";
import catalog from '../../components/tractora/img__tractor/catalog.png'

import React, { useState } from 'react';

function TractorComponent () {
    const [selectedForklift, setSelectedForklift] = useState(null);

    return (
        <div className="catalog__container">
            <h1>Каталог <span className='span__h1'>погрузчиков</span></h1>
            <div className="grid">
                {traktor4iki.map(f => (
                    <ForkliftCard key={f.id} forklift={f} onClick={setSelectedForklift}/>
                ))}
                <div className="grid-placeholder">
                    <img className='img__catalog' src={catalog} alt="кфтфлог"/>
                    <div className='right__catalog'>
                        <h2 className='logo__catalog'>Интересует дизельный  или газобензиновый погрузчик?</h2>
                        <button className='btn__catalog'>Получить прайс-лист</button>
                    </div>
                </div>
            </div>
            <ForkliftModal forklift={selectedForklift} onClose={() => setSelectedForklift(null)}/>
        </div>
    )
};

export default TractorComponent;
