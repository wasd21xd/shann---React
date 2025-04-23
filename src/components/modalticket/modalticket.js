import React from 'react';
import './modalticket.css';
import { IoCloseOutline } from "react-icons/io5";

const ModalForm = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-form" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}><IoCloseOutline/></button>
                <h2>Оставить заявку на консультацию</h2>
                <p>Оставьте заявку — и наш менеджер свяжется с вами, узнает ваши потребности и предложит идеальный погрузчик под ваши задачи.</p>
                <form>
                    <div className="modal-form-inputs">
                        <input type="text" placeholder="Имя" />
                        <input type="text" placeholder="Телефон" />
                        <input type="email" placeholder="E-mail" />
                    </div>
                    <textarea placeholder="Пожелания по комплектации погрузчика" rows={5}></textarea>
                    <button type="submit" className="submit-btn">Отправить</button>
                    <p className="privacy">Нажимая кнопку «Отправить», вы соглашаетесь с <a href="#" className="a__modal-privacy">Политикой конфиденциальности</a></p>
                </form>

            </div>
        </div>
    );
};

export default ModalForm;
