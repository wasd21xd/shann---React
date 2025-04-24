import image_146 from '../../img/Shann/image146 копия1.png'
import tractor from '../../img/Shann/tractor.svg'


import './Shann.css'


function Shann({onOpenModal}) {
    return (
        <div className="Shann__container">
        <div className="flex">
        <div className="text__Shann">
        <p className="logo__text__Shann">электромобильный вилочный погрузчик <span class="span__text__Shann">нового поколения SHANN</span> </p>
    <p className="callback__info">Оставьте заявку и получите консультацию специалиста</p>
</div>
    <div className="callback__btn">
        <button type="submit" className="btn__Shann" onClick={onOpenModal}>Получить предложение</button>
        <p className="callback-text">
            <img src={tractor} alt="иконка телефона" className="phone-icon"/>
                Перезвоним в течение дня для консультации
        </p>
    </div>
</div>
    <div className="img__Shann">
        <img className="tractor" src={image_146}/>
    </div>
</div>
    );
}

export default Shann;
