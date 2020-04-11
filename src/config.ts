/**
 * The app's configuration registry.
 * This gets passed to the Configuration class, which returns a config object.
 */
const registry = {
  apiUrl: 'REACT_APP_API_URL',
};

/**
 * The app's configuration class.
 *
 * Pass it a registry object and it will check to make sure the environment variables exist,
 * then return a config object to use in the application.
 *
 * @param {object} registryObject The registry object from which to generate a config.
 * @property {object} config The app's configuration object.
 * @public
 */
class Configuration {
  public config: typeof registry;

  constructor(registryObject: typeof registry) {
    this.config = Object.entries(registryObject).reduce((acc, [key, value]) => {
      // Throw an error if an expected environment variable is undefined.
      if (process.env[value] === undefined) {
        throw new Error(`Undefined environment variable: ${value}`);
      }
      return Object.assign(acc, { [key]: process.env[value] });
    }, {}) as typeof registry;
  }
}

export default new Configuration(registry).config;
