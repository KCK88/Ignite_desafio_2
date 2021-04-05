import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";

import '../styles/content.scss'
import { MovieProps } from "./SideBar";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function Content(movies: MovieProps[]) {
  // Complete aqui

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  // const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  // useEffect(() => {
  //   api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
  //     setMovies(response.data);
  //   });
  // })

return (
  <div className="container">
  <header>
    <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
  </header>

  <main>
    <div className="movies-list">
      {
        // @ts-ignore
        movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  </main>
</div>

)
}