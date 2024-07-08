import {
    setCookie,
    getCookie,
    type CookieValueTypes,
    deleteCookie,
} from 'cookies-next';

export const getStudentCookie = (): CookieValueTypes => {
    return getCookie('sIdentifier');
};

export const setStudentCookie = (studentId: string): void => {
    setCookie('sIdentifier', studentId);
};

export const deleteStudentCookie = (): void => {
    deleteCookie('sIdentifier');
};
