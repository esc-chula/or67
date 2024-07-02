'use client';

import { useSearchParams } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

export interface AuthContextType {
    loading: boolean;
    appId: string;
    callbackUrl: string;
}

export const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    const params = useSearchParams();

    const [loading, setLoading] = useState<boolean>(true);
    const [appId, setAppId] = useState<string>('');
    const [callbackUrl, setCallbackUrl] = useState<string>('');

    useEffect(() => {
        const appIdParams = params.get('appId') || '';
        const callbackUrlParams = params.get('callbackUrl') || '';

        if (!appIdParams || !callbackUrlParams) {
            setLoading(false);
            return;
        }

        setAppId(appIdParams);
        setCallbackUrl(callbackUrlParams);
    }, [params]);

    return (
        <AuthContext.Provider
            value={{
                loading,
                appId,
                callbackUrl,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
