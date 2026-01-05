import React, { useState, useEffect, type ReactNode } from 'react';
import { AuthContext, type User } from './auth-context';
import api from '../../api/exios';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true); // await while get user_data

    const refreshAndLoadUser = async () => {
        try {
            // 1. Try to update a token
            const refreshRes = await api.post('users/api/v1/auth/token/refresh/');
            const access = refreshRes.data.access;
            setAccessToken(access);

            // 2.get token      
            const userRes = await api.get('users/api/v1/auth/user/', {
                headers: { Authorization: `Bearer ${access}` }
            });
            setUser(userRes.data);
        } catch (err) {
            console.log("Session doen't valid or token expired", err);
            setAccessToken(null);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // execut once on start of app
        refreshAndLoadUser();
    }, []);



    return (

        <AuthContext.Provider value={{ accessToken, setAccessToken, user, setUser }}>
            {!loading && children} 
            {/* Не рендерим приложение, пока не узнаем статус юзера */}
        </AuthContext.Provider>
    );
};
