import React from 'react';
import './css/LanguageSwitcher.css';
import {useTranslation} from 'react-i18next';

function LanguageSwitcher() {
    const {i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-switcher">
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('de')}>Deutsch</button>
        </div>
    );
}

export default LanguageSwitcher;