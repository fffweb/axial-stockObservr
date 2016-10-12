import { Observable } from 'rxjs';
import 'rxjs/add/observable/dom/ajax';

import {
    API_PORTFOLIOS_PATH,
    API_PORTFOLIO_STOCKS_PATH,
    PORTFOLIO_STOCKS_SUBPATH
}
from '../api/api.constants';

const fetchPortfoliosList = () => (
    Observable.ajax.getJSON(`${API_PORTFOLIOS_PATH}`)
);

const fetchPortfolioFinancials = (portfolio_id) => (
    Observable.ajax
        .getJSON(`${API_PORTFOLIOS_PATH}/${portfolio_id}/${PORTFOLIO_STOCKS_SUBPATH}`)
        .map((stocks) => {
            return stocks.map(s => ({
                value: s.qty * s.last,
                change: s.qty * (s.last - s.price),
                cost: s.qty * s.price
            }))
            .reduce((prev, curr) => ({
                portfolio_id: portfolio_id,
                value: prev.value + curr.value,
                change: prev.change + curr.change,
                cost: prev.cost + curr.cost,
                changePct: (((prev.value + curr.value) - (prev.cost + curr.cost)) / (prev.cost + curr.cost)) * 100
            }));
        })
)

const fetchPortfolioDetails = (portfolio_id) => (
    Observable.ajax.getJSON(`${API_PORTFOLIOS_PATH}/${portfolio_id}`)
)

const fetchPortfolioStocksList = (portfolio_id) => (
    Observable.ajax
        .getJSON(`${API_PORTFOLIOS_PATH}/${portfolio_id}/${PORTFOLIO_STOCKS_SUBPATH}`)
        .map((stocks) => {
            return stocks.map((s) => ({
                id: s.id,
                stockId: s.stockId,
                qty: s.qty,
                price: s.price,
                last: s.last,
                change: s.qty * (s.last - s.price),
                value: s.qty * s.last,
                cost: s.qty * s.price,
                changePct: ((s.last - s.price) / s.price) * 100
            }));
        })
)

const sellPortfolioStock = (portfolio_stock_id) => (
    Observable.ajax
        .delete(`${API_PORTFOLIO_STOCKS_PATH}/${portfolio_stock_id}`)
        .map(() => portfolio_stock_id )
)

export default { 
    fetchPortfoliosList,
    fetchPortfolioFinancials,
    fetchPortfolioDetails,
    fetchPortfolioStocksList,
    sellPortfolioStock
};