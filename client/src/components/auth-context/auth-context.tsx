import { createContext } from 'react';

// Импортируем типы только для описания
export interface AuthContextType {
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;

    user: User | null;
    setUser: (user: User | null) => void;
}

export interface User {
    username: string;
    email?: string;
    first_name?:string;
    last_name?:string;
    // add columns from your DRFSeriualizer.
}

// Экспортируем только объект контекста
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
