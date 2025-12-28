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



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${apiUrl.endsWith('/') ? apiUrl : apiUrl + '/'}users/api/v1/login/`, formData);
            console.log('Response')
            console.log('Success:', response.data);
            alert(t("ftr.frm.success_msg"));
            setFormData({
                username: "",
                password: "",
            });
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                const serverData = err.response?.data;

                if (serverData) {
                    console.log("Backend error:", serverData);
                    const messages = Object.values(serverData as Record<string, string[]>).flat();
                    alert(messages.join('\n'));
                } else {
                    alert(err.message);
                }
            } 
                else{
                    // Э!network error(frontend error)
                    console.error('Frontend error:', err);
                    alert(err);
                }
        }
    };

    return (
        <div className='contact-form-section'>
            <div className="container">
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className='row_field'>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            required
                        />
                    </div>
                    
                    <div className='row_field'>
                        <label htmlFor="email">Password*</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            required
                        />

                    </div>
                    <div className="button_submit">
                        <button type="submit">Login</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default LoginForm;