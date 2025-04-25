import './callbackBlock.css';
import React, { useState } from "react";
import callimg from '../callbackBlock/img__call/igm.png';

function CallbackBlock () {
    const [isFlying, setIsFlying] = useState(false);

    const handleFlyClick = () => {
        setIsFlying(true);
        setTimeout(() => setIsFlying(false), 800); // вернём через 0.8 сек
    };

    return(
        <div className='call__container'>
            <div className='left__side'>
                <div className='logo__call'>
                    <h2 className='h2__call'>связаться <span className='span__call1'>с нами</span></h2>
                    <p className='text__call'>Оставьте заявку – и наш менеджер свяжется с вами, узнает ваши потребности и предложит идеальный погрузчик под ваши задачи</p>
                </div>
                <div className='name__number'>
                    <input className='input__name' type="text" placeholder='Имя'/>
                    <input className='input__name' type='text' placeholder='Телефон'/>
                </div>
                <div className='comment'>
                    <textarea className='commet'>Комментарий</textarea>
                </div>
                <div className='zayavka'>
                    <button
                        className={`btn__zayavka ${isFlying ? 'fly' : ''}`}
                        type='submit'
                        onClick={handleFlyClick}
                    >
                        Отправить заявку
                    </button>
                    <p className="privacy__call">Нажимая кнопку «Отправить», вы соглашаетесь с <a
                        className='a__privacy__call' href="#">Политикой
                        конфиденциальности</a></p>
                </div>
                <p className='number__call'>Или позвоните по телефону: <span className='span__call'>8 800 555 80 80</span></p>
            </div>
            <div className='right__side'>
                <img className='img__call' src={callimg} alt="погрзчик"/>
            </div>
        </div>
    );
}

export default CallbackBlock;
