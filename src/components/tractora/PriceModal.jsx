import React, { useEffect, useState } from 'react';
import './priceModal.css';

function PriceModal({ isOpen, onClose }) {
    const [isMounted, setIsMounted] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            setTimeout(() => setShowModal(true), 10);
        } else {
            setShowModal(false);
            const timer = setTimeout(() => setIsMounted(false), 400);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isMounted) return null;

    return (
        <div
            className={`modal__overlay ${showModal ? 'show' : ''}`}
            onClick={onClose}
        >
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <h2 className="h2__priceModal">Получить прайс-лист</h2>
                <p className="p__priceModal">
                    Оставьте свои данные, и мы пришлём вам актуальный прайс-лист.
                </p>
                <form className="price__form">
                    <input
                        className="input__priceModal"
                        type="text"
                        placeholder="Ваше имя"
                        required
                    />
                    <input
                        className="input__priceModal"
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <button className="btn__priceModal" type="submit">
                        Отправить
                    </button>
                </form>
                <button className="close__modal" onClick={onClose}>
                    ✕
                </button>
            </div>
        </div>
    );
}

export default PriceModal;
