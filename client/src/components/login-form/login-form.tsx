import './login-form.css'
import {useState} from "react";
import axios from "axios";
import {useTranslation} from "react-i18next";
import api from '../../api/exios';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";



interface LoginForm {
    username: string;
    password: string;
}


const LoginForm = () => {
    const navigate = useNavigate(); 
    const {t} = useTranslation();
    console.log(t("AlibiClub translater error anulation"))
    const { setAccessToken, setUser } = useAuth(); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Use 'api' insted of 'axios'. 
            // URL relative, becouse baseURL configured axios.tsx
            const response = await api.post('users/api/v1/auth/login/', formData);

            // 1. get access token (Refresh will automatecly puted to cockies)
            const { access } = response.data; // access becouse DRF return ['access', 'refresh'].keys
            
            console.log('===---=== ACCESS:', access)

            // 2. Save access in AuthContext
            setAccessToken(access); 

            const userRes = await api.get('users/api/v1/auth/user', {
                headers: { Authorization: `Bearer ${access}` }
            });
            
            setUser(userRes.data);
            setFormData({ username: "", password: "" });

            // 3. Redirect to index page with logined user
            navigate('/');

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
                    // !network error(frontend error)
                    console.error('Frontend error:', err);
                    alert(err);
                }
        }
    };

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    

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
                            onChange={handleChange}
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
                            onChange={handleChange}
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