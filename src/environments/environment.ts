import { Environment } from './models/environment.model';
import { createProxy } from './utils/create-proxy.util';

export const environment: Environment = createProxy({} as Environment);
