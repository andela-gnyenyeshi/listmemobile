import axios from 'axios';

const apiClient = (method, url, rest) => {
  const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: { 'Content-Type': 'application/json' },
  });

  return client({
    method,
    url,
    ...rest,
  });
};

export default apiClient;
