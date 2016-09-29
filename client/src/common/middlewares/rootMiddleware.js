import { loggerMiddleware } from './logger.middleware';
import { epicMiddleware } from './epics.middleware';

export const middlewares = [epicMiddleware, loggerMiddleware];