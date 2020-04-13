/**
 * The app's configuration registry.
 * This gets passed to the config function, which returns a config object.
 */
const registry = {
  apiUrl: 'REACT_APP_API_URL',
};

/**
 * Generate the app's configuration.
 *
 * Pass it a registry object and it will check to make sure the environment variables exist,
 * then return a config object to use in the application.
 */
export const initializeConfig = <T>(registryObject: T) =>
  Object.entries(registryObject).reduce((acc, [key, value]) => {
    // Throw an error if an expected environment variable is undefined.
    if (process.env[value] === undefined) {
      throw new Error(`Undefined environment variable: ${value}`);
    }
    return Object.assign(acc, { [key]: process.env[value] });
  }, {} as T);

export default initializeConfig(registry);
