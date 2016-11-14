import { Observable } from 'rxjs';

import { STOCKS } from '../constants/stocks.constants';

import StocksActions from 'client/src/common/actions/stocks.actions';
import StocksService from 'client/src/common/services/stocks.service';

// Request the stock details for a given stock
export const requestStockDetailsEpic = action$ =>
    action$.ofType(STOCKS.REQUEST_STOCK_DETAILS)
        .mergeMap(action =>
            StocksService
                .fetchStockDetails(action.payload.stockId)
                .map(StocksActions.requestStockDetailsFulfilled)
        );