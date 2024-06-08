import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';

import { ApiService } from './services/api/api.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, AsyncPipe, JsonPipe, NgIf],
    template: `<pre *ngIf="posts$ | async as posts">
      {{ posts | json }}
    </pre
        >
        <pre *ngIf="users$ | async as users">
      {{ users | json }}
    </pre
        >`,
})
export class AppComponent {
    public posts$ = this.apiService.getSomePosts();
    public users$ = this.apiService.getSomeUsers();

    constructor(private apiService: ApiService) {}
}
