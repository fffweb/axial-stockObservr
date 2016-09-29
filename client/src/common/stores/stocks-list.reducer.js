import { REQUEST_STOCKS_LIST_FULFILLED } from 'client/src/common/actions/constants';

export function stocksListReducer(state = [], { meta, payload, type }) {
    switch (type) {

        case REQUEST_STOCKS_LIST_FULFILLED:
            return payload || [];

        default:
            return state;
    }
}