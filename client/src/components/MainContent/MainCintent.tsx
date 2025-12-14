import "./MainCintent.css";
import { useTranslation } from "react-i18next";
import shampagne from "../../assets/img/bg-shampagne.png";
import mask from "../../assets/img/mask.png";
import React, { useState } from "react";
import PrivacyModal from "../PupMainForm/PrivacyModal";

/**
 * 1) Описываем, какие поля есть в форме
 *    (TypeScript будет подсказывать и ловить ошибки)
 */
type FormState = {
    name: string;
    email: string;
    phone: string;
    acceptedTerms: boolean;
};

function MainContent() {
    const { t } = useTranslation();
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        acceptedTerms: false,
    });

   
    const onChange =
        (field: keyof FormState) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = field === "acceptedTerms" ? e.target.checked : e.target.value;

        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
        };

    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // не перезагружать страницу

        // мини-валидация
        if (!form.acceptedTerms) {
            alert("Please axcept terms!!!");
            return;
        }

        try {
        const res = await fetch("http://127.0.0.1:8000/notifications/api/v1/subscribe/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            axcepted: form.acceptedTerms, // snake_case для Django
        }),
        });

        console.log(res);
        

        if (!res.ok) {
            const errText = await res.text();
            console.error("API error:", res.status, errText);
            alert("Ошибка отправки формы");
            return;
        }

        const data = await res.json();
        console.log("Saved in Django:", data);

        // очистить форму после успеха
        setForm({
            name: "",
            email: "",
            phone: "",
            acceptedTerms: false,
        });

        alert("Subscribed!");
        } catch (err) {
        console.error("Network error:", err);
        alert("Network Error (Django Does started?)");
        }
    };

    return (
        <>
        <div className="container">
            <div className="main_content_conteiner">
            <div className="top-section">
                <h1>
                {t("main_content.h1.0")} <br />
                {t("main_content.h1.1")}
                </h1>
                <p>{t("main_content.p")}</p>
            </div>
            </div>
        </div>

        <div className="join-section">
            <div className="coll">
            <img src={shampagne} alt="Shampagne" />
            </div>

            <div className="coll">
            <img src={mask} alt="mask" />
            </div>

            <div className="coll">
            {/* 5) ВАЖНО: onSubmit вешаем на form */}
            <form onSubmit={handleSubmit}>
                <h1>{t("main_content.form.title")}</h1>
                <p className="form_subtitle">{t("main_content.form.subtitle")}</p>

                <div className="row">
                <label>{t("main_content.form.label.0")}:</label>
                {/* 6) Контролируемый input: value + onChange */}
                <input
                    type="text"
                    value={form.name}
                    onChange={onChange("name")}
                    required
                />
                </div>

                <div className="row">
                <label>Email:</label>
                <input
                    type="email"
                    value={form.email}
                    onChange={onChange("email")}
                    required
                />
                </div>

                <div className="row">
                <label>{t("main_content.form.label.1")}:</label>
                <input
                    type="text"
                    value={form.phone}
                    onChange={onChange("phone")}
                />
                </div>

                <div className="row">
                {/* 7) checkbox контролируем через checked */}
                <input
                    type="checkbox"
                    checked={form.acceptedTerms}
                    onChange={onChange("acceptedTerms")}
                />

                <label>
                    <span>
                    {t("main_content.form.terms.0")}{" "}
                    {/* Чтобы ссылка не прыгала наверх страницы */}
                    <a
                        href="#"
                        className="PupopPrivicyLink"
                        onClick={(e) => {
                        e.preventDefault();
                        setIsPrivacyOpen(true);
                        }}
                    >
                        {t("main_content.form.terms.1")}
                    </a>
                    </span>
                </label>
                </div>

                {/* 8) Кнопка submit должна быть button */}
                <button className="btn-subscribe-submite" type="submit">
                {t("main_content.form.button_submit")}
                </button>

                {/* Для обучения можешь показывать state на экране */}
                {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
            </form>
            </div>
        </div>

        <PrivacyModal open={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        </>
    );
}

export default MainContent;
