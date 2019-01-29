export const environment = {
  production: true,
  urls: {
    todo: {
      base: '/api/todo',
      archive: (id: number) => `/api/todo/${id}/archive`
    }
  }
};
