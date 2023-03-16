import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await fetch("https://victor-jheart.onrender.com/api/v1/projects");
    const projects = await response.json();
    return projects;
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProjects.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.projects = action.payload;
    },
  }
});

export default projectSlice.reducer;