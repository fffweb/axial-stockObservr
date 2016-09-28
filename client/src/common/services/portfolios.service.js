import {
    API_PORTFOLIOS_PATH
}
from 'client/src/common/api/constants';

export class PortfoliosService {
    static $inject = [
        'APIService'
    ];

    constructor(api) {
        this.api = api;
    }

    fetchPortfolios() {
        return this.api.fetch(API_PORTFOLIOS_PATH);
    }
}