const BASE_URL = 'http://localhost:3000/api';

export const apiRequest = async <T>(
  endpoint: string,
  method = 'GET',
  data: any = null,
): Promise<T> => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  const config: RequestInit = {
    method,
    headers,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(`${BASE_URL}/${endpoint}`, config);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json() as Promise<T>;
};
