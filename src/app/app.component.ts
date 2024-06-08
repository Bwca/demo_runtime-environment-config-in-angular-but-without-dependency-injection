import { Component } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `<p>
        Api: {{ environment.api }}
        <br />
        And now for something completely different:
        {{ environment.something.completely.different }}
    </p>`,
})
export class AppComponent {
    protected readonly environment = environment;
}
