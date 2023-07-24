import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTBiMzM5NGUxOGZmZjQwZThiZGExMjVkZjlkZmNhMCIsInN1YiI6IjY0YWJhYzg0NmEzNDQ4MDEwYjcxMDc1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2-9apDAnB9If9OEtvOWFYg5y0dlDK-pb-JbNb7a8mWQ';

const $axios = axios.create({
  baseURL: baseUrl,
});

$axios.interceptors.request.use((config) => {
  config.headers['accept'] = 'application/json';
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

export const axiosBaseQuery = async (request: AxiosRequestConfig): Promise<any> => {
  try {
    const response = await $axios(request);
    return { data: response.data };
  } catch (error) {
    const { response } = error as AxiosError;

    if (response) {
      return { error: response.data };
    }
    throw error;
  }
};

export default $axios;
