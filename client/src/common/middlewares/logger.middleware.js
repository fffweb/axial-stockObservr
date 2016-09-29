import createLogger from 'redux-logger';

export const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true
});