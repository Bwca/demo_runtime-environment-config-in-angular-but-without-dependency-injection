import { EnvironmentLoader } from './environment-loader.util';

export function createProxy<T extends object>(target: T, path = ''): T {
    return new Proxy(target, {
        get: function (obj, prop: string) {
            const fullPath = path ? `${path}.${prop.toString()}` : prop;

            const value = fullPath
                .split('.')
                .reduce((a, c) => a[c], EnvironmentLoader.environment as any);

            if (value && typeof value === 'object') {
                return createProxy(value, fullPath.toString());
            }
            return value;
        },
    });
}
