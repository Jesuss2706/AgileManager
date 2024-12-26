export const environment = {
  production: true,
  app: {
    apiBaseUrl: 'http://localhost:3000/api',
  },
  auth: {
    JWT: localStorage.getItem('token'),
  },
};
