import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';

const SuccessPage = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const [status, setStatus] = useState('loading'); // loading, success, error

    useEffect(() => {
        if (sessionId) {
            // Подтверждаем оплату на бэкенде
            axios.get(`/api/payments/confirm/?session_id=${sessionId}`)
                .then(() => setStatus('success'))
                .catch(() => setStatus('error'));
        }
    }, [sessionId]);

    if (status === 'loading') return <div>Проверяем ваш платеж...</div>;

    if (status === 'error') return (
        <div>
            <h1>Упс! Что-то пошло не так.</h1>
            <p>Не удалось подтвердить оплату. Свяжитесь с поддержкой.</p>
            <Link to="/">Вернуться на главную</Link>
        </div>
    );

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>✅ Оплата прошла успешно!</h1>
            <p>Спасибо за покупку. Ваша подписка активирована.</p>
            <Link to="/dashboard">Перейти в личный кабинет</Link>
        </div>
    );
};

export default SuccessPage;