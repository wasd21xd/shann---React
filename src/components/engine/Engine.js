import "./engine.css"
import engine from '../../img/engine/engine.png'

function Engine () {
    return (

<div className='engine__container'>
    <div className='engine__logo'>
        <p className='logo__text__engine'>двигатель<span className='span__text__engine'> и АКБ </span></p>
        <ul className='ul__engine'>
            <li className='li__item'>1,5 часа составляет время зарядки</li>
            <li className='li__item1'>Однократная потребляемая мощность АКБ 15 кВт/ч (30% экономия затрат на электроэнергию) </li>
            <li className='li__item'>Интеллектуальный контроль температуры</li>
            <li className='li__item'>Синхронный двигатель с постоянными магнитами</li>
            <li className='li__item'>Несколько режимов работы: ECO, STANDARD, POWER</li>
        </ul>
    </div>
    <div className='engine'>
        <img className='img__engine' src={engine} alt='двигатель'/>
        <div className='circle'></div>
    </div>
</div>

    );
}


export default Engine;
