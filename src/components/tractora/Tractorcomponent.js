import './tractori.css';

import traktor4iki from "./Tractori";
import ForkliftCard from "./card";
import ForkliftModal from "./forliftModal";
import PriceModal from "./PriceModal";
import catalog from '../../components/tractora/img__tractor/catalog.png'

import React, { useState } from 'react';

function TractorComponent () {
    const [selectedForklift, setSelectedForklift] = useState(null);
    const [showPriceModal, setShowPriceModal] = useState(false);

    return (
        <div className="catalog__container">
            <h1>Каталог <span className='span__h1'>погрузчиков</span></h1>
            <div className="grid">
                {traktor4iki.map(f => (
                    <ForkliftCard key={f.id} forklift={f} onClick={setSelectedForklift}/>
                ))}
                <div className="grid-placeholder">
                    <img className='img__catalog' src={catalog} alt="каталог"/>
                    <div className='right__catalog'>
                        <h2 className='logo__catalog'>Интересует дизельный  или газобензиновый погрузчик?</h2>
                        <button className='btn__catalog' onClick={() => setShowPriceModal(true)}>
                            Получить прайс-лист
                        </button>
                    </div>
                </div>
            </div>

            <ForkliftModal forklift={selectedForklift} onClose={() => setSelectedForklift(null)} />
            <PriceModal isOpen={showPriceModal} onClose={() => setShowPriceModal(false)} />
        </div>
    )
};

export default TractorComponent;
