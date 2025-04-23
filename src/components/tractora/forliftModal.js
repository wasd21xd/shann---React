import { IoCloseOutline } from "react-icons/io5";
import './card.css'
import React from 'react';

const ForkliftModal = ({ forklift, onClose }) => {
    if (!forklift) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className='left__card'>
                    <img className='img__tractor__card' src={forklift.image} alt={forklift.name}/>
                    <h2 className='name__tractor__card'>{forklift.name}</h2>
                    <ul className='ul__tractor__card'>
                        <li className='item__tractor__card'>
                            Свободный ход : <span className="bold">{forklift.specs.freeLift}</span>
                        </li>
                        <li className='item__tractor__card'>
                            Длина: <span className="bold">{forklift.specs.length}</span>
                        </li>
                        <li className='item__tractor__card'>
                            Ширина: <span className="bold">{forklift.specs.width}</span>
                        </li>
                        <li className='item__tractor__card'>
                            Высота верхнего ограждения: <span className="bold">{forklift.specs.guardHeight}</span>
                        </li>
                        <li className='item__tractor__card'>
                            Внешний радиус поворота: <span className="bold">{forklift.specs.turningRadius}</span>
                        </li>
                        <li className='item__tractor__card'>
                            Масса: <span className="bold">{forklift.specs.weight}</span>
                        </li>
                        <li className='item__tractor__card'>
                            Шины передние: <span className="bold">{forklift.specs.forwardtires}</span>
                        </li>
                        <li className='item__tractor__card'>
                            Шины поворотные: <span className="bold">{forklift.specs.reartires}</span>
                        </li>
                        <li className='item__tractor__card'>
                            Тип электродвигателя: <span className="bold">{forklift.specs.motor}</span>
                        </li>
                        <li className='item__tractor__card'>
                            Тип АКБ: <span className="bold">{forklift.specs.typebattery}</span>
                        </li>
                        <li className='item__tractor__card'>
                            Аккумулятор: <span className="bold">{forklift.specs.battery}</span>
                        </li>
                    </ul>
                </div>
                <div className='btn__tractor__card'>
                    <button className='close__tractor__card' onClick={onClose}><IoCloseOutline/></button>
                    <h2 className='name__tractor__card'>Оставить заявку</h2>
                    <form>
                        <input className='name__tractor__card' placeholder="Имя"/>
                        <input className='number__tracor__card' placeholder="Телефон"/>
                        <input className='email__tractor__card' placeholder="Email"/>
                        <textarea className='comment__tractor__card' placeholder="Комментарий"/>
                        <button className='submit__tracor__card' type="submit">Оставить заявку</button>
                    </form>
                    <p className="modal-privacy1">Нажимая кнопку «Отправить», вы соглашаетесь с <a
                        className='a__modal-privacy' href="#">Политикой
                        конфиденциальности</a></p>
                </div>
            </div>
        </div>
    );
};

export default ForkliftModal;
