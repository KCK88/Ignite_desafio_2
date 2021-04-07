

import { MovieProps, SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { useState } from 'react';

const [movies, setMovies] = useState<MovieProps[]>([]);

function handleChangeMovie(value : MovieProps[]) {
  setMovies(value)
}

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar handleChangeMovie={handleChangeMovie}/>
      <Content />
    </div>
  )
}