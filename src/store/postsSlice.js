import {createSlice, createSelector} from '@reduxjs/toolkit';



const postsSlice = createSlice({
                        name: 'tests',
                        initialState: {
                            posts: [],
                        },

                        reducers: {},

                        extraReducers: {}
                    })

export const postsSelector = createSelector(
                        (state) => ({
                            test: state.tests.test
                        }),

                        (state) => state

                    )

export default postsSlice.reducer;