

import { MovieProps, SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { useState } from 'react';
import React from 'react';



export function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);


  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar setMovies={setMovies} />
        <Content movies={movies}/>
  </div>
    )
}