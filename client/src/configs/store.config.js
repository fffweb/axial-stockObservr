import { rootReducer } from '../common/reducers/rootReducer';
import { middlewares } from '../common/middlewares/rootMiddleware';

storeConfig.$inject = [
    '$ngReduxProvider'
];

const enhancers = [ window.devToolsExtension ? window.devToolsExtension() : f => f ];

export function storeConfig($ngReduxProvider) {
    $ngReduxProvider.createStoreWith(rootReducer, middlewares, enhancers);
}