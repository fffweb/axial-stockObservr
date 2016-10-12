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
export const requestPortfoliosStocksListsEpic = action$ =>
    action$.ofType(PORTFOLIOS.REQUEST_PORTFOLIOS_LIST_FULFILLED)
        .mergeMap(action =>
            Observable.from(action.payload.portfolios)
                .map(p => PortfoliosActions.requestPortfolioDetails(p.id))
        );

// Fetches the portfolio details
export const fetchPortfolioDetailsEpic = action$ =>
    action$.ofType(PORTFOLIOS.REQUEST_PORTFOLIO_DETAILS)
        .mergeMap(action => 
            PortfoliosService
                .fetchPortfolioDetails(action.payload.portfolio_id)
                .map(PortfoliosActions.requestPortfolioDetailsFulfilled)
        );

// Request the portfolio list of stocks once we get the portfolio details
export const requestPortfolioStocksListEpic = action$ =>
    action$.ofType(PORTFOLIOS.REQUEST_PORTFOLIO_DETAILS_FULFILLED)
        .mergeMap(action => 
            PortfoliosService
                .fetchPortfolioStocksList(action.payload.portfolio.id)
                .map(payload => ({
                    portfolio_id: action.payload.portfolio.id,
                    portfolio_stocks: payload
                }))
                .map(PortfoliosActions.requestPortfolioStocksListFulfilled)
        );

// Sell the portfolio stock
export const sellPortfolioStocksListEpic = action$ =>
    action$.ofType(PORTFOLIOS.SELL_PORTFOLIO_STOCK)
        .mergeMap(action => 
            PortfoliosService
                .sellPortfolioStock(action.payload.portfolio_stock_id)
                .map(payload => ({
                    portfolio_id: action.payload.portfolio_id,
                    portfolio_stock_id: action.payload.portfolio_stock_id
                }))
                .map(PortfoliosActions.requestSellPortfolioStockFulfilled)
        );

// Requests the financials for each portfolio
export const refreshPortfolioFinancialsEpic = action$ =>
    action$.ofType(PORTFOLIOS.SELL_PORTFOLIO_STOCK_FULFILLED)
        .mergeMap(action =>
            Observable
                .of(action.payload)
                .map(p => PortfoliosActions.refreshPortfolioFinancials(p.portfolio_id))
        );