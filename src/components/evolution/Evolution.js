import './evolution.css';
import React, { useState } from 'react';

import pered1 from '../../img/Shann/mainleft.png';
import mainright from '../../img/evolution/mainright.png';
import topleft from '../../img/evolution/topleft.png'
import bottomleft from  '../../img/evolution/bottomleft.png'
import bottomright from '../../img/evolution/bottomrigth.png'
import topright from '../../img/evolution/topright.png'

const imageSets = [
    {
        id: 0,
        label: 'Технологии 1',
        front: pered1,
    },
    {
        id: 1,
        label: 'Технологии 2',
        front: topleft,
    },
    {
        id: 2,
        label: 'Технологии 3',
        front: bottomleft,
    },
    {
        id: 3,
        label: 'Технологии 4',
        back: mainright,
    },
    {
        id: 4,
        label: 'Технологии 5',
        back: bottomright,
    },
    {
        id: 5,
        label: 'Технологии 6',
        back: topright,
    },


];

function Evolution() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const currentSet = imageSets[selectedIndex];

    return (
        <div className="evolution__container">
            <div className="logo__evolution">
                <h2 className="evolution__logo__text">
                    эволюционные <span className="span__text__evolution">технологии</span>
                </h2>
                <p className="text__evolution">Технологии электромобиля в вилочном погрузчике</p>
            </div>

            {/* Кнопки выбора технологии */}
            <div className="tech__buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
                {imageSets.map((set, index) => (
                    <button
                        key={set.id}
                        className={`tech__button ${selectedIndex === index ? 'active' : ''}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {set.label}
                    </button>
                ))}
            </div>

            {/* Изображения */}
            <div className="content__evolution">
                <img className="tractor1" src={currentSet.front} alt="Передняя часть" />
                <img className="tractor2" src={currentSet.back} alt="Задняя часть" />
            </div>
        </div>
    );
}

export default Evolution;
