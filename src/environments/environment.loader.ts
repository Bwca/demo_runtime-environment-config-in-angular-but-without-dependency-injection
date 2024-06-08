import { Environment } from './environment.model';

export class EnvironmentLoader {
    private static env: Environment;

    public static get environment(): Environment {
        return EnvironmentLoader.env;
    }

    public static async loadEnvironment(): Promise<void> {
        const response = await fetch('/assets/environment.json');
        try {
            EnvironmentLoader.env = await response.json();
        } catch (e) {
            console.log('Could not load config, oh no!');
        }
    }
}
