
import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './postsSlice';

const appStore = (preloadedState) => {
    const store = configureStore({
        reducer: postsReducer,
        preloadedState
    });

    return store
}


export default appStore;