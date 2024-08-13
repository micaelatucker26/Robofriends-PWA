import { createSlice } from '@reduxjs/toolkit';

// Slice for managing search state
const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchField: ''
    },
    reducers: {
        setSearchField: (state, action) => {
            state.searchField = action.payload;
        }
    }
});

// Slice for managing request state
const requestSlice = createSlice({
    name: 'request',
    initialState: {
        isPending: false,
        robots: [],
        error: ''
    },
    reducers: {
        requestRobotsPending: (state) => {
            state.isPending = true;
        },
        requestRobotsSuccess: (state, action) => {
            state.robots = action.payload;
            state.isPending = false;
        },
        requestRobotsFailed: (state, action) => {
            state.error = action.payload;
            state.isPending = false;
        }
    }
});

// Export action creators
export const {
    setSearchField
} = searchSlice.actions;

export const {
    requestRobotsPending,
    requestRobotsSuccess,
    requestRobotsFailed
} = requestSlice.actions;

// Export reducers
export const searchReducer = searchSlice.reducer;
export const requestReducer = requestSlice.reducer;

// Redux Thunk async action
export const requestRobots = () => (dispatch) => {
    dispatch(requestRobotsPending());
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch(requestRobotsSuccess(data)))
        .catch(error => dispatch(requestRobotsFailed(error)));
};
