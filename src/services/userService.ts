import axiosInstance from '../api/axiosInstance';

// Fetch user details

export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get(`/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};
