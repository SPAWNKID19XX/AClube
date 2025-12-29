import { createContext } from 'react';

// Импортируем типы только для описания
export interface AuthContextType {
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;
}

// Экспортируем только объект контекста
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
