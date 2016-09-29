import { REQUEST_PORTFOLIOS_LIST_FULFILLED } from 'client/src/common/actions/constants';

export function portfoliosListReducer(state = [], { meta, payload, type }) {
    switch (type) {

        case REQUEST_PORTFOLIOS_LIST_FULFILLED:
            return payload || [];

        default:
            return state;
    }
}