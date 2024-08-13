import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../components/CardList';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

// Old Using statements
    //import { connect } from 'react-redux';
    //import { useState, useEffect } from 'react';

import { setSearchField, requestRobots } from '../reducers'; // Import action creators and reducers from reducers.js

const App = () => {
     // We use useSelector to select state from the Redux store
     const searchField = useSelector(state => state.search.searchField);
     const robots = useSelector(state => state.request.robots);
     const isPending = useSelector(state => state.request.isPending);
     const dispatch = useDispatch(); // We use useDispatch to dispatch actions
     
     useEffect(() => {
         // The onRequestRobots action is replaced with dispatching requestRobots action
         dispatch(requestRobots());
     }, [dispatch]);
 
     const onSearchChange = (event) => {
         // The onSearchChange action is replaced with dispatching setSearchField action
         dispatch(setSearchField(event.target.value));
     };
 
     const filteredRobots = robots.filter(robot => {
         return robot.name.toLowerCase().includes(searchField.toLowerCase());
     });
 
     if (isPending) {
         return <h1>Loading...</h1>;
     } else {
         return (
             <div className='tc'>
                 <Header />
                 <SearchBox searchChange={onSearchChange} />
                 <Scroll>
                     <ErrorBoundary>
                         <CardList robots={filteredRobots} />
                     </ErrorBoundary>
                 </Scroll>
             </div>
         );
     }
 };
 
 export default App;