import { getEnvironmentVariable } from '../lib/env';

const NocoDBConfig = {
    NOCODB_API_ENDPOINT: getEnvironmentVariable('NOCODB_API_ENDPOINT'),
    NOCODB_API_TOKENS: getEnvironmentVariable('NOCODB_API_TOKENS'),
};

export default NocoDBConfig;
