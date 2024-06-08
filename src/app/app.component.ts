import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';

import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, AsyncPipe, JsonPipe, NgIf],
    template: ` <p>
        And now for something completely different:
        {{ environment.and.now.for.something.completely.different }}
    </p>`,
})
export class AppComponent implements OnInit {
    public readonly env = environment;
    constructor(private httpClient: HttpClient) {}

    protected readonly environment = environment;

    public ngOnInit(): void {
        this.httpClient.get(`${environment.api}/posts`).subscribe(console.log);
    }
}
