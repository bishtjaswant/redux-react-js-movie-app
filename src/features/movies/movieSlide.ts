// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Movie} from '../../types/Movies'
import { Show } from '../../types/Show';
import { apiKey } from './../../commons/api/apiKey';


export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://www.omdbapi.com/` }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie, string>({
      query: (search:string='guru',type:string='movie',  plot:string='short')=>({
          url:`?apikey=${apiKey}&s=${search}&type=${type}&plot=${plot}`,
          method:"GET"
      })
    }),
    getShows: builder.query<Show, string>({
      query: (search:string='guru',  type:string='series',  plot:string='short')=>({
          url:`?apikey=${apiKey}&s=${search}&type=${type}&plot=${plot}`, 
          method:"GET"
      })
    }),

    getShowOrMovie: builder.query<Show|Movie, string>({
      query: (omdbId:string, plot:string='full')=>({
          url:`?apikey=${apiKey}&i=${omdbId}&plot=${plot}`, 
          method:"GET"
      })
    }),

  }),
}) ;;


export const { useGetMoviesQuery, useGetShowsQuery, useGetShowOrMovieQuery } = movieApi