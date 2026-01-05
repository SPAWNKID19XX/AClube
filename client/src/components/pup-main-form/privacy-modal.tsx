import './PrivacyModal.css'
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

type PrivacyModalProps = {
    open: boolean;
    onClose: () => void;
};

function PrivacyModal({ open, onClose }:PrivacyModalProps) {
    const {t} = useTranslation()
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e:KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
        document.removeEventListener("keydown", onKeyDown);
        document.body.style.overflow = "";
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="privacyModalOverlay" onMouseDown={onClose}>
            <div className="privacyModal" onMouseDown={(e) => e.stopPropagation()}>
                <button className="modalClose" type="button" onClick={onClose} aria-label="Close">
                ✕
                </button>

                <h3>{t("privacy_modal.title")}</h3>
                <p>
                {t("privacy_modal.text.0")}
                </p>
                <p>
                {t("privacy_modal.text.1")}
                </p>

                <div className="modalActions">
                    <button type="button" onClick={onClose}>Ok</button>
                </div>
            </div>
        </div>
    );
}

export default PrivacyModal