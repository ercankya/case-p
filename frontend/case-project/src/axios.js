import axios from './axiosConfig';

export const addPerson = async (person) => {
  try {
    const response = await axios.post('/api/users', person);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPersons = async () => {
  try {
    const response = await axios.get('/api/users');
    return response.data;
  } catch (error) {
    throw error;
  }
};
