import { Observable } from 'rxjs';
import 'rxjs/add/observable/dom/ajax';

import {
    API_PORTFOLIOS_PATH,
    API_PORTFOLIO_STOCKS_PATH,
    PORTFOLIO_STOCKS_SUBPATH
}
from '../constants/api.constants';

const fetchPortfoliosList = () => (
    Observable.ajax.getJSON(`${API_PORTFOLIOS_PATH}`)
);

const fetchPortfolioDetails = (portfolio_id) => (
    Observable.ajax.getJSON(`${API_PORTFOLIOS_PATH}/${portfolio_id}`)
)

const fetchPortfolioStocksList = (portfolio_id) => (
    Observable.ajax.getJSON(`${API_PORTFOLIOS_PATH}/${portfolio_id}/${PORTFOLIO_STOCKS_SUBPATH}`)
)

const sellPortfolioStock = (portfolio_stock_id) => (
    Observable.ajax
        .delete(`${API_PORTFOLIO_STOCKS_PATH}/${portfolio_stock_id}`)
        .map(() => portfolio_stock_id )
)

export default { 
    fetchPortfoliosList,
    fetchPortfolioDetails,
    fetchPortfolioStocksList,
    sellPortfolioStock
};