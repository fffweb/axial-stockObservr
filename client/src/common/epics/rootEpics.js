/**
 * Combine all epics in this file and export the combined epic.
 */
import { combineEpics } from 'redux-observable';

// our custom data reducer for the data points
import {
    fetchPortfoliosEpic,
    requestPortfoliosFinancialsEpic,
    fetchPortfolioFinancialsEpic,
    fetchPortfolioDetailsEpic,
    fetchPortfolioStocksListEpic
}
from './portfolios.epics';

export const rootEpics = combineEpics(
    fetchPortfoliosEpic,
    requestPortfoliosFinancialsEpic,
    fetchPortfolioFinancialsEpic,
    fetchPortfolioDetailsEpic,
    fetchPortfolioStocksListEpic
);