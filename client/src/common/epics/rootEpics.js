/**
 * Combine all epics in this file and export the combined epic.
 */
import { combineEpics } from 'redux-observable';

// our custom data reducer for the data points
import {
    fetchPortfoliosEpic,
    requestPortfoliosStocksListsEpic,
    fetchPortfolioDetailsEpic,
    requestPortfolioStocksListEpic,
    requestPortfolioStocksDetailsEpic,
    sellPortfolioStocksListEpic
}
from './portfolios.epics';

import {
    requestStockDetailsEpic
}
from './stocks.epics';

import {
    stateChangeFetchPortfolioDetailsEpic
}
from './routes.epics'

export const rootEpics = combineEpics(
    fetchPortfoliosEpic,
    requestPortfoliosStocksListsEpic,
    fetchPortfolioDetailsEpic,
    requestPortfolioStocksListEpic,
    requestPortfolioStocksDetailsEpic,
    sellPortfolioStocksListEpic,
    requestStockDetailsEpic,
    stateChangeFetchPortfolioDetailsEpic
);