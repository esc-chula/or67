import { getEnvironmentVariable } from '../lib/env';

const linkAppConfig = {
    LINK_APP_BASE_URL: getEnvironmentVariable('LINK_APP_BASE_URL'),
    LINK_APP_NOCODB_TABLE_ID: getEnvironmentVariable(
        'LINK_APP_NOCODB_TABLE_ID'
    ),
};

export default linkAppConfig;
