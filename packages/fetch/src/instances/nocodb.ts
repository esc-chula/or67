import axios from 'axios';
import { NocoDBConfig } from '@repo/config';

export const fetchNocoDB = axios.create({
    baseURL: `${NocoDBConfig.NOCODB_API_ENDPOINT}/api/v2/tables`,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        'xc-token': NocoDBConfig.NOCODB_API_TOKENS,
    },
});
