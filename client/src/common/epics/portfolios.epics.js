import { Observable } from 'rxjs';

import {
    PORTFOLIOS
} from '../constants/portfolios.constants';

import PortfoliosActions from 'client/src/common/actions/portfolios.actions';
import PortfoliosService from 'client/src/common/services/portfolios.service';

// Epics
export const fetchPortfoliosEpic = action$ =>
    action$.ofType(PORTFOLIOS.REQUEST_PORTFOLIOS_LIST)
        .mergeMap(action =>
            PortfoliosService
                .fetchPortfoliosList()
                .map(PortfoliosActions.requestPortfoliosFulfilled)
        );

export const requestPortfoliosFinancialsEpic = action$ =>
    action$.ofType(PORTFOLIOS.REQUEST_PORTFOLIOS_LIST_FULFILLED)
        .mergeMap(action =>
            Observable.from(action.payload.portfolios)
                .map(p => PortfoliosActions.requestPortfolioFinancials(p.id))
        );

export const fetchPortfolioFinancialsEpic = action$ =>
    action$.ofType(PORTFOLIOS.REQUEST_PORTFOLIO_FINANCIALS)
        .mergeMap(action =>
            PortfoliosService
                .fetchPortfolioFinancials(action.payload.portfolio_id)
                .map(PortfoliosActions.requestPortfolioFinancialsFulfilled)
        );

export const fetchPortfolioDetailsEpic = action$ =>
    action$.ofType(PORTFOLIOS.REQUEST_PORTFOLIO_DETAILS)
        .mergeMap(action => 
            PortfoliosService
                .fetchPortfolioDetails(action.payload.portfolio_id)
                .map(PortfoliosActions.requestPortfolioDetailsFulfilled)
        );

export const fetchPortfolioStocksListEpic = action$ =>
    action$.ofType(PORTFOLIOS.REQUEST_PORTFOLIO_STOCKS_LIST)
        .mergeMap(action => 
            PortfoliosService
                .fetchPortfolioStocksList(action.payload.portfolio_id)
                .map(PortfoliosActions.requestPortfolioStocksListFulfilled)
        );