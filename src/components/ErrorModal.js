import React from 'react';
import './css/ErrorModal.css';
import {useTranslation} from "react-i18next";

function ErrorModal({error, onClose}) {
    const {t} = useTranslation();
    if (!error) return null;
    return (
        <div className="error-modal-overlay">
            <div className="error-modal">
                <h2>{t('errorModal.title')}</h2>
                <p>{error.message}</p>
                <button onClick={onClose}>{t('errorModal.close')}</button>
            </div>
        </div>
    );
}

export default ErrorModal;