import React from 'react';
import './language-selector.css';
import { useTranslation } from "react-i18next";

interface Language {
    code: string;
    label: string;
}

const languages: Language[] = [
    {
        code: 'en',
        label: 'EN'
    },
    {
        code: 'pt',
        label: 'PT'
    },
    {
        code: 'es',
        label: 'ES'
    }

];

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = event.target.value;

        i18n.changeLanguage(newLang);
        localStorage.setItem("lang", newLang);

        console.log("selected:", newLang);
    };

    const getCurrentLanguage = () => {
        console.log('current language',i18n.language)
        return languages.find(lang => lang.code === i18n.language) || languages[0];
    };


    

    

    return (
        <div className="language-dropdown">
            <select
                value={i18n.language}
                onChange={handleLanguageChange}
                className="language-select"
            >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.label}
                    </option>
                ))}
            </select>
            <p>{getCurrentLanguage().label}</p>
        </div>
    );
};

export default LanguageSwitcher;