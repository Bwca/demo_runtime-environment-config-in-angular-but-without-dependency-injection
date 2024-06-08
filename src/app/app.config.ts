import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

import { providerEnvironment } from '../environments/providers/provide-environment.provider';

export const appConfig: ApplicationConfig = {
    providers: [provideHttpClient(), providerEnvironment()],
};
