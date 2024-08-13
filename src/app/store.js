import { configureStore } from '@reduxjs/toolkit';
import { searchReducer, requestReducer } from '../reducers'; // Import the reducers
import logger from 'redux-logger';

export default configureStore({
  reducer: {
    search: searchReducer, // Assign the searchReducer to the 'search' slice
    request: requestReducer // Assign the requestReducer to the 'request' slice
  }, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});