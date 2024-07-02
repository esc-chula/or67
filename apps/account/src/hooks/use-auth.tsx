import { useContext } from 'react';
import type { AuthContextType } from '@/contexts/auth';
import { AuthContext } from '@/contexts/auth';

function useAuth(): AuthContextType {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export default useAuth;
