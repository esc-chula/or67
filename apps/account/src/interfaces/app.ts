interface AppResponse {
    appId: string;
    appName: string;
    appDescription: string;
    appOrigins: string[];
    appCallbackUrls: string[];
    ownerStudentId: string;
}

export type { AppResponse };
