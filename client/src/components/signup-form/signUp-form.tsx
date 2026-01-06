import './signUp-form.css'
import {useState} from "react";
import axios from "axios";

import {useTranslation} from "react-i18next";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";





interface SignUpForm {
    username: string;
    email: string;
    password1: string;
    password2:string;
    birth_date:string;
    is_accepted: boolean

}

const getEighteenYearsAgo = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    return date.toISOString().split('T')[0]; // вернет "2007-12-28" (если сегодня 2025-й)
};

const SignUpForm = () => {
    const {t} = useTranslation();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password1: "",
        password2:"",
        birth_date:getEighteenYearsAgo(),
        is_accepted:false
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

        if (formData.password1 !== formData.password2) {
            alert("Passwords doesn't mutch");
            return;
        }

        if (!formData.is_accepted) {
            alert("Read and accept terms");
            return;
        }

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${apiUrl.endsWith('/') ? apiUrl : apiUrl + '/'}users/api/v1/auth/registration/`, formData);
            console.log('Response')
            console.log('Success:', response.data);
            alert(t("ftr.frm.success_msg"));
            setFormData({
                username: "",
                email: "",
                password1: "",
                password2:"",
                birth_date:"",
                is_accepted:false
            });
        } catch (err: unknown) {
            // cheking axios errors
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

    return (
        <div className='signup-form-section'>
            <div className="container">
                <h1>Sign Up Form</h1>
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
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    

                    <div className='row_field'>
                        <label htmlFor="email">Birthday</label>
                        <DatePicker
                            selected={formData.birth_date ? new Date(formData.birth_date) : null}
                            onChange={(date: Date | null) => {
                                if (date) {
                                    setFormData({
                                        ...formData, 
                                        birth_date: date.toISOString().split('T')[0]
                                    });
                                }
                            }}
                            dateFormat="yyyy-MM-dd"
                            maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 18))}
                            showYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={50}
                        />
                    </div>
                    

                    <div className='row_field'>
                        <label htmlFor="email">Password*</label>
                        <input
                            type="password"
                            id="password1"
                            name="password1"
                            value={formData.password1}
                            onChange={handleChange}
                            required
                        />

                    </div>
                    

                    <div className='row_field'>
                        <label htmlFor="pass_confirm">Condition password</label>
                        <input
                            type="password"
                            id="password2"
                            name="password2"
                            value={formData.password2}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="accept_signup_terms">
                        
                        <input
                            type="checkbox"
                            name="is_accepted"
                            checked={formData.is_accepted}
                            onChange={handleChange}
                        />

                        <label>
                            <span> Accept {" "}
                                <span><a href="/privacy-policy">{t("bottom_footer.pp")} </a></span>  
                                <span><a href="/cookie-policy">{t("bottom_footer.cp")} </a></span>
                                <span><a href="/terms-conditions">{t("bottom_footer.tc")}</a></span>
                            </span>
                        </label>




                    </div>
                    <div className="button_submit">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;