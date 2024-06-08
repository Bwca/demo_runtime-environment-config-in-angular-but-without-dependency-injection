import { ApplicationConfig } from '@angular/core';

import { providerEnvironment } from '../environments/providers/provide-environment.provider';

export const appConfig: ApplicationConfig = {
    providers: [providerEnvironment()],
};
