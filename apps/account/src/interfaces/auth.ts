interface LoginSessionResponse {
    sessionToken: string;
}

interface LoginAppResponse {
    appToken: string;
}

interface ValidateSessionResponse {
    studentId: string;
    name: {
        en: {
            firstName: string;
            lastName: string;
        };
        th: {
            firstName: string;
            lastName: string;
        };
    };
}

interface CheckExpireTokenResponse {
    expire: boolean;
}

interface RefreshTokenResponse {
    token: string;
}

export type {
    LoginSessionResponse,
    LoginAppResponse,
    ValidateSessionResponse,
    CheckExpireTokenResponse,
    RefreshTokenResponse,
};
