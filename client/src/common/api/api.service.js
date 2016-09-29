import { Observable } from 'rxjs';
import 'rxjs/add/observable/dom/ajax';

import { API_BASE_URL } from './api.constants';

export class APIService {
    constructor() {
        this.ajax = Observable.ajax;
    }

    create(path, data) {
        return this.ajax.post(`${API_BASE_URL}${path}`, data);
    }

    delete(path) {
        return this.ajax.delete(`${API_BASE_URL}${path}`);
    }

    fetch(path) {
        debugger;
        return this.ajax.get(`${API_BASE_URL}${path}`);
    }

    update(path, data) {
        return this.ajax.put(`${API_BASE_URL}${path}`, data);
    }
}