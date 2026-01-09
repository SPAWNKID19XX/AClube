import "./main-content.css";
import { useTranslation } from "react-i18next";
import shampagne from "../../assets/img/bg-shampagne.png";
import mask from "../../assets/img/mask.png";
import React, { useState } from "react";
import PrivacyModal from "../pup-main-form/privacy-modal";
import { apiFetch } from "../../api/client";

/**Description fields for subscribe form*/
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
        e.preventDefault(); 
        if (!form.acceptedTerms) {
            alert(t("main_content.alerts.0"));
            return;
        }


        try {
            const res = await apiFetch("/notifications/api/v1/subscribe/", {
                method: "POST",
                body: JSON.stringify({
                name: form.name,
                email: form.email,
                phone: form.phone,
                axcepted: form.acceptedTerms,
                }),
            });

            console.log(res);
        
            if (!res.ok) {
                const errText = await res.text();
                const errData = JSON.parse(errText)
                console.error("API error:", res.status, errText);
                alert(errData.email?.[0] || t("main_content.alerts.1"));
                return;
            }

            const data = await res.json();
            console.log("Saved in Django:", data);

            setForm({
                name: "",
                email: "",
                phone: "",
                acceptedTerms: false,
            });

            alert(t("main_content.alerts.2"));
        } catch (err) {
            console.error("Network error:", err);
            alert(t("main_content.alerts.3"));
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
                <form onSubmit={handleSubmit}>
                    <h1>{t("main_content.form.title")}</h1>
                    <p className="form_subtitle">{t("main_content.form.subtitle")}</p>
                    <div className="row">
                    <label>{t("main_content.form.label.0")}:</label>
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
                    
                        <input
                            type="checkbox"
                            checked={form.acceptedTerms}
                            onChange={onChange("acceptedTerms")}
                        />

                        <label>
                            <span>
                            {t("main_content.form.terms.0")}{" "}
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
                    <button className="btn-subscribe-submite" type="submit">
                    {t("main_content.form.button_submit")}
                    </button>
                </form>
            </div>
        </div>

        <PrivacyModal open={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        </>
    );
}

export default MainContent;
