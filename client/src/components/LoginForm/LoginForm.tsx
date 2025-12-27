import './LoginForm.css'
import {useState} from "react";
import axios from "axios";
import {useTranslation} from "react-i18next";



interface LoginForm {
    username: string;
    password: string;
}


const LoginForm = () => {
    const {t} = useTranslation();



    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const target = e.target;
        const value = target instanceof HTMLInputElement && target.type === 'checkbox'
            ? target.checked
            : target.value;
        const name = target.name;

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${apiUrl}/api/v1/main/`, formData);
            console.log('Success:', response.data);
            alert(t("ftr.frm.success_msg"));
            setFormData({
                username: '',
                password: ''
            });
        } catch (error: Error | unknown) {
            console.error('Error:', error);
            alert(t("ftr.frm.error_msg"));
        }
    };

    return (
        <div className='contact-form-section'>
            <div className="container">
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Password*</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">{t("ftr.frm.btn")}</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;