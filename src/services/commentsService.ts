import axiosInstance from '../api/axiosInstance';

export const getAllComments = async () => {
  try {
    const response = await axiosInstance.get(`/comments`);
    return response.data;
    
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
}