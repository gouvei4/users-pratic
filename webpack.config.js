import { resolve as _resolve } from 'path';

export const resolve = {
    alias: {
        '@services': _resolve(__dirname, 'src/services/userServices/'),
        '@controllers': _resolve(__dirname, 'src/controllers/userControllers/')
    }
};
