import './SignUpForm.css'
import {useState} from "react";
import axios from "axios";
import {useTranslation} from "react-i18next";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";



interface SignUpForm {
    username: string;
    email: string;
    password: string;
    password_condition:string;
    birth_date:string;
    accept_terms: boolean

}


const SignUpForm = () => {
    const {t} = useTranslation();



    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password_condition:"",
        birth_date:"",
        accept_terms:false
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
            const response = await axios.post(`${apiUrl}users/api/v1/signup/`, formData);
            console.log('Success:', response.data);
            alert(t("ftr.frm.success_msg"));
            setFormData({
                username: "",
                email: "",
                password: "",
                password_condition:"",
                birth_date:"",
                accept_terms:false
            });
        } catch (error: Error | unknown) {
            console.error('Error:', error);
            alert(t("ftr.frm.error_msg"));
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
                        aria-label='BD'
                        value='Select birthday'
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
                        maxDate={new Date()} 
                        showYearDropdown 
                        scrollableYearDropdown
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
                    

                    <div className='row_field'>
                        <label htmlFor="pass_confirm">Condition password</label>
                        <input
                            type="password"
                            id="password_condition"
                            name="password_condition"
                            value={formData.password_condition}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <button type="submit">{t("ftr.frm.btn")}</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;