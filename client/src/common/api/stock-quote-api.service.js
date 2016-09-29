import { API_STOCK_QUOTE_URL } from './api.constants';

export class StockQuoteAPIService {
    static $inject = [
        '$http'
    ];

    constructor($http) {
        this.http = $http;
    }

    fetch(path) {
        return this.http.get(`${API_STOCK_QUOTE_URL}${path}`)
            .then(response => response.data);
    }
}