import { Observable } from 'rxjs';
import 'rxjs/add/observable/dom/ajax';

import {
    API_STOCKS_PATH
}
from '../constants/api.constants';

const fetchStockDetails = (stock_id) => (
    Observable.ajax.getJSON(`${API_STOCKS_PATH}/${stock_id}`)
);

export default {
    fetchStockDetails
};