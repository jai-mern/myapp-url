import axios from 'axios';

const BASE_URL = 'https://example.com/auth';

const authApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (userData) => {
  try {
    const response = await authApi.post('/login', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error logging in');
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await authApi.post('/register', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error registering user');
  }
};
