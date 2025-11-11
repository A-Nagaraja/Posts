import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface PostsState {
    data: Post[];
    loading: boolean;
    error: string | null;
}

const initialState: PostsState = {
    data: [],
    loading: false,
    error: null,
};


//Async thunk to fetch all posts

export const fetchPosts = createAsyncThunk<Post[]>(
     'posts/fetchAll',
     async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<Post[]>('/posts');
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.message || 'Failed to fetch posts');
    }
  }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = (action.payload as string) || action.error.message || 'Error';
        });
    },
});


export default postsSlice.reducer;