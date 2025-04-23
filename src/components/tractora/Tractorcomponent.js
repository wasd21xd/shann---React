import './tractori.css'

import traktor4iki from "./Tractori";
import ForkliftCard from "./card";
import ForkliftModal from "./forliftModal";

import React, { useState } from 'react';

function TractorComponent () {
    const [selectedForklift, setSelectedForklift] = useState(null);

    return (
        <div className="catalog">
            <h1>Каталог погрузчиков</h1>
            <div className="grid">
                {traktor4iki.map(f => (
                    <ForkliftCard key={f.id} forklift={f} onClick={setSelectedForklift}/>
                ))}
            </div>
            <ForkliftModal forklift={selectedForklift} onClose={() => setSelectedForklift(null)}/>
        </div>
    )
};

export default TractorComponent;
