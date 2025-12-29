import { useContext } from 'react';
import { AuthContext, type AuthContextType } from '../components/AuthContext/AuthContext';

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};
