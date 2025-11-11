import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from '../api/axiosInstance';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
    company?: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

interface UsersState {
    data: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    data: [],
    loading: false,
    error: null,
};

//Async thunk to fetch all users

export const fetchUsers = createAsyncThunk<User[]>(
        'users/fetchAll',
        async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<User[]>('/users');
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.message || 'Failed to fetch users');
    }
  }
);  

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = (action.payload as string) || action.error.message || 'Error';
        }); 
        }
    }

)

export default usersSlice.reducer;