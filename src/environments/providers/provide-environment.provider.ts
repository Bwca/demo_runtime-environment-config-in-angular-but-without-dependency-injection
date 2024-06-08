import { APP_INITIALIZER, Provider } from '@angular/core';

import { EnvironmentLoader } from '../utils/environment-loader.util';

export const providerEnvironment: () => Provider = () => ({
    provide: APP_INITIALIZER,
    useFactory: () => () => EnvironmentLoader.loadEnvironment(),
    multi: true,
});
