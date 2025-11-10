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

//Fetch users posts

export const getAllPosts = async () => {
  try {
    const response = await axiosInstance.get(`/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};


//Fetch users comments

export const getAllComments = async () => {
  try {
    const response = await axiosInstance.get(`/comments`);
    return response.data;
    
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
}
