import { createSlice } from '@reduxjs/toolkit';

export interface IFilmsHistory {
  episode_id:number,
  title: string,
  opening_crawl:string,
  release_date:string,
  director:string,
  producer:string,
}
export interface CurrentFilm{
 currentFilm:IFilmsHistory[]
}

const initialStateForFilm:CurrentFilm={
currentFilm:[]
}

const filmSlice = createSlice({
  name: 'films',
  initialState:initialStateForFilm,
  reducers: {
   setSearchedFilm: (state, action) => {
      state.currentFilm = action.payload;
    },
  }
});

export const { setSearchedFilm } = filmSlice.actions;

export default filmSlice.reducer;
