import { Component } from 'client/src/utils';

import template from './stock-picker.html';

@Component({
    template: template,
    controllerAs: 'stockPickerCtrl',
    bindings: {
        close: '&' // outgoing event
    }
})

export class StockPickerComponent {
    constructor() {
        this.stocks = [];
    }

    $onInit() {
        this.stocks = this.loadAllStocks();
    }

    cancel() {
        this.close();
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for stocks... use $timeout to simulate
     * remote dataservice call.
     */
    querySearch (query) {
        return query ? this.stocks.filter( this.createFilterFor(query) ) : this.stocks;
    }

    /**
     * Create filter function for a query string
     */
    createFilterFor(query) {
        return function filterFn(stock) {
            return (stock.ticker.indexOf(query) === 0);
        };
    }

    /**
     * Build `stocks` list
     */
    loadAllStocks () {
        return [{
            "id": 1,
            "name": "Novavax NVAX",
            "ticker": "NVAX"
        }, {
            "id": 2,
            "name": "Array ARRY",
            "ticker": "ARRY"
        }, {
            "id": 3,
            "name": "Microsoft MSFT",
            "ticker": "MSFT"
        }, {
            "id": 4,
            "name": "Apple AAPL",
            "ticker": "AAPL"
        }, {
            "id": 5,
            "name": "Enteromedics Inc. ETRM",
            "ticker": "ETRM"
        }, {
            "id": 6,
            "name": "Sirius Xm Radio Inc. SIRI",
            "ticker": "SIRI"
        }, {
            "id": 7,
            "name": "Intel INTC",
            "ticker": "INTC"
        }, {
            "id": 8,
            "name": "Applied Materials AMAT",
            "ticker": "AMAT"
        }, {
            "id": 9,
            "name": "Cisco Systems CSCO",
            "ticker": "CSCO"
        }, {
            "id": 10,
            "name": "Gen Probe GPRO",
            "ticker": "GPRO"
        }, {
            "id": 11,
            "name": "Gilead Sciences GILD",
            "ticker": "GILD"
        }, {
            "id": 12,
            "name": "Netflix NFLX",
            "ticker": "NFLX"
        }, {
            "id": 13,
            "name": "Nvidia NVDA",
            "ticker": "NVDA"
        }, {
            "id": 14,
            "name": "Peregrine Pharmaceuticals Inc. PPHM",
            "ticker": "PPHM"
        }, {
            "id": 15,
            "name": "Amarin AMRN",
            "ticker": "AMRN"
        }, {
            "id": 16,
            "name": "Activision Blizzard ATVI",
            "ticker": "ATVI"
        }, {
            "id": 17,
            "name": "Yahoo! Inc. YHOO",
            "ticker": "YHOO"
        }, {
            "id": 18,
            "name": "Comcast CMCSA",
            "ticker": "CMCSA"
        }, {
            "id": 19,
            "name": "Mannkind MNKD",
            "ticker": "MNKD"
        }, {
            "id": 20,
            "name": "Huntington Bancshares HBAN",
            "ticker": "HBAN"
        }, {
            "id": 21,
            "name": "Nektar Therapeutics NKTR",
            "ticker": "NKTR"
        }, {
            "id": 22,
            "name": "Durect DRRX",
            "ticker": "DRRX"
        }, {
            "id": 23,
            "name": "Ariad ARIA",
            "ticker": "ARIA"
        }, {
            "id": 24,
            "name": "Gulfport Energy GPOR",
            "ticker": "GPOR"
        }, {
            "id": 25,
            "name": "Himax HIMX",
            "ticker": "HIMX"
        }, {
            "id": 26,
            "name": "Seagate Technology STX",
            "ticker": "STX"
        }, {
            "id": 27,
            "name": "Ftb FITB",
            "ticker": "FITB"
        }, {
            "id": 28,
            "name": "Lm Ericsson Telephone Company Ads ERIC",
            "ticker": "ERIC"
        }, {
            "id": 29,
            "name": "Starbucks SBUX",
            "ticker": "SBUX"
        }, {
            "id": 30,
            "name": "Symantec SYMC",
            "ticker": "SYMC"
        }, {
            "id": 31,
            "name": "Exelixis EXEL",
            "ticker": "EXEL"
        }, {
            "id": 32,
            "name": "Jetblue Airways JBLU",
            "ticker": "JBLU"
        }, {
            "id": 33,
            "name": "Ebay Inc. EBAY",
            "ticker": "EBAY"
        }, {
            "id": 34,
            "name": "Pain Therapeutics PTIE",
            "ticker": "PTIE"
        }, {
            "id": 35,
            "name": "Endo Pharmaceuticals Holdings Inc ENDP",
            "ticker": "ENDP"
        }, {
            "id": 36,
            "name": "Celldex Therapeutics CLDX",
            "ticker": "CLDX"
        }, {
            "id": 37,
            "name": "Marvell MRVL",
            "ticker": "MRVL"
        }, {
            "id": 38,
            "name": "Qualcomm Incorporated QCOM",
            "ticker": "QCOM"
        }, {
            "id": 39,
            "name": "Amgen Inc. AMGN",
            "ticker": "AMGN"
        }, {
            "id": 40,
            "name": "Discovery Communications DISCA",
            "ticker": "DISCA"
        }, {
            "id": 41,
            "name": "First Solar FSLR",
            "ticker": "FSLR"
        }, {
            "id": 42,
            "name": "Staples SPLS",
            "ticker": "SPLS"
        }, {
            "id": 43,
            "name": "Wynn Resorts WYNN",
            "ticker": "WYNN"
        }, {
            "id": 44,
            "name": "Ocular Sciences OCLR",
            "ticker": "OCLR"
        }, {
            "id": 45,
            "name": "Flextronics FLEX",
            "ticker": "FLEX"
        }, {
            "id": 46,
            "name": "Amazon.com AMZN",
            "ticker": "AMZN"
        }, {
            "id": 47,
            "name": "Navisite NAVI",
            "ticker": "NAVI"
        }, {
            "id": 48,
            "name": "Mylan Inc. MYL ",
            "ticker": "MYL"
        }, {
            "id": 49,
            "name": "Adobe Systems Incorporated ADBE",
            "ticker": "ADBE"
        }, {
            "id": 50,
            "name": "Dollar Tree DLTR",
            "ticker": "DLTR"
        }, {
            "id": 51,
            "name": "Ctrip.com International Ltd. Ads CTRP",
            "ticker": "CTRP"
        }];
    }
}