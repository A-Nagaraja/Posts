import axiosInstance from '../api/axiosInstance';

export const getAllPosts = async () => {
  try {
    const response = await axiosInstance.get(`/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};
