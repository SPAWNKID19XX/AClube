import { useState } from "react";
import { FaCookieBite } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CookieConsent = () => {
    const { t } = useTranslation();

    const [isVisible, setIsVisible] = useState(() => {
        const hasConsent = localStorage.getItem("cookieConsent");
        return !hasConsent; 
    });

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div
        style={{
            position: "fixed",
            bottom: 16,
            left: 16,
            right: 16,
            backgroundColor: "#111",
            padding: "20px",
            boxShadow: "0 -2px 5px rgba(0,0,0,0.4)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "16px",
            color: "white",
            border: "2px dotted #961010", // dotted (не doted)
        }}
        >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaCookieBite size={24} />
            <p style={{ margin: 0 }}>{t("footer.info_cookies.p")}</p>
        </div>

        <button
            onClick={handleAccept}
            style={{
            padding: "8px 16px",
            backgroundColor: "#961010",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            flexShrink: 0,
            }}
        >
            {t("footer.info_cookies.btn")}
        </button>
        </div>
    );
    };

export default CookieConsent;
