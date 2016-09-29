import { createEpicMiddleware } from 'redux-observable';
import { rootEpics } from '../epics/rootEpics';

export const epicMiddleware = createEpicMiddleware(rootEpics);