import { STOCKS } from '../constants/stocks.constants';

const initialState = [];

export function stocksListReducer(state = initialState, { meta, payload, type }) {
    switch (type) {

        case STOCKS.REQUEST_STOCKS_LIST_FULFILLED:
            return payload.stocks || initialState;

        default:
            return state;
    }
}