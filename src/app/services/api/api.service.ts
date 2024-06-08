import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private httpClient: HttpClient) {}

    public getSomePosts(): Observable<unknown> {
        return this.httpClient.get(`${environment.api}/posts`);
    }

    public getSomeUsers(): Observable<unknown> {
        return this.httpClient.get(environment.apiWithEndpoints.users);
    }
}
