import axios from 'axios';

const BASE_URL = 'https://example.com/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTodos = async () => {
  try {
    const response = await api.get('/todos');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching todos');
  }
};

export const createTodo = async (todoData) => {
  try {
    const response = await api.post('/todos', todoData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating todo');
  }
};
