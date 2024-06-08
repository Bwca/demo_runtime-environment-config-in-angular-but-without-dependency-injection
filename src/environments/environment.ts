import { Environment } from './models/environment.model';
import { EnvironmentLoader } from './utils/environment-loader.util';
import { createProxy } from './utils/create-proxy.util';

export const environment: Environment = createProxy(
    {} as Environment
);
