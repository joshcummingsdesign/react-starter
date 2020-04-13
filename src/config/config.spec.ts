import { initializeConfig } from './config';

const mockRegistry = {
  url: 'REACT_APP_URL',
  apiUrl: 'REACT_APP_API_URL',
  analyticsId: 'REACT_APP_ANALYTICS_ID',
};

const expectedConfig = {
  url: 'https://example.com',
  apiUrl: 'https://api.example.com',
  analyticsId: '123456789',
};

const mockProcessEnv = (useMockData?: boolean) => {
  // Remove REACT_APP_ entries from process.env
  Object.keys(process.env).forEach((v) => v.includes('REACT_APP_') && delete process.env[v]);

  if (useMockData) {
    // Replace REACT_APP_ entries in process.env with mock data
    Object.entries(mockRegistry).forEach(([k, v]) => (process.env[v] = (expectedConfig as any)[k]));
  }
};

describe('config', () => {
  // Save original process.env data to restore after tests run
  const OLD_ENV = process.env;

  beforeEach(() => {
    // Prepare process.env for mocking
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterEach(() => {
    // Restore process.env
    process.env = OLD_ENV;
  });

  it('should initialize app configuration', () => {
    mockProcessEnv(true);
    const config = initializeConfig(mockRegistry);
    expect(config).toEqual(expectedConfig);
  });

  it('should throw error on missing environment variable', () => {
    mockProcessEnv();
    let message;
    try {
      initializeConfig(mockRegistry);
    } catch (error) {
      message = error.message;
    }
    expect(message).toEqual('Undefined environment variable: REACT_APP_URL');
  });
});
