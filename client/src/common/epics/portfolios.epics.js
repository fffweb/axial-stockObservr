import { Observable } from 'rxjs';

import {
    PORTFOLIOS
} from '../constants/portfolios.constants';

import PortfoliosActions from 'client/src/common/actions/portfolios.actions';
import PortfoliosService from 'client/src/common/services/portfolios.service';

// Fetches the list of portfolios
export const fetchPortfoliosEpic = action$ =>
    action$.ofType(PORTFOLIOS.REQUEST_PORTFOLIOS_LIST)
        .mergeMap(action =>
            PortfoliosService
                .fetchPortfoliosList()
                .map(PortfoliosActions.requestPortfoliosFulfilled)
        );

// Requests the financials for each portfolio
export const requestPortfoliosFinancialsEpic = action$ =>
    action$.ofType(PORTFOLIOS.REQUEST_PORTFOLIOS_LIST_FULFILLED)
        .mergeMap(action =>
            Observable.from(action.payload.portfolios)
                .map(p => PortfoliosActions.requestPortfolioFinancials(p.id))
        );

// Fetches the portfolio financials details
export const fetchPortfolioFinancialsEpic = action$ =>
    action$.ofType(PORTFOLIOS.REQUEST_PORTFOLIO_FINANCIALS)
        .mergeMap(action =>
            PortfoliosService
                .fetchPortfolioFinancials(action.payload.portfolio_id)
                .map(PortfoliosActions.requestPortfolioFinancialsFulfilled)
        );

// Fetches the portfolio details
export const fetchPortfolioDetailsEpic = action$ =>
    action$.ofType(PORTFOLIOS.REQUEST_PORTFOLIO_DETAILS)
        .mergeMap(action => 
            PortfoliosService
                .fetchPortfolioDetails(action.payload.portfolio_id)
                .map(PortfoliosActions.requestPortfolioDetailsFulfilled)
        );

// Request the portfolio financials once we get the portfolio details
export const requestPortfolioFinancialsEpic = action$ =>
    action$.ofType(PORTFOLIOS.REQUEST_PORTFOLIO_DETAILS_FULFILLED)
        .mergeMap(action =>
            PortfoliosService
                .fetchPortfolioFinancials(action.payload.portfolio.id)
                .map(PortfoliosActions.requestPortfolioFinancialsFulfilled)
        );

// Request the portfolio list of stocks once we get the portfolio details
export const requestPortfolioStocksListEpic = action$ =>
    action$.ofType(PORTFOLIOS.REQUEST_PORTFOLIO_DETAILS_FULFILLED)
        .mergeMap(action => 
            PortfoliosService
                .fetchPortfolioStocksList(action.payload.portfolio.id)
                .map(PortfoliosActions.requestPortfolioStocksListFulfilled)
        );