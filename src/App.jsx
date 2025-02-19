import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'

function App() {

  const apiKey = "98e3fb1f"

  const [movie, setMovie] = useState(null)

  const getMovie = async(searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    )

    const data = await response.json()
    setMovie(data)
  }

  return (
    <>
      <div className='App'>
       <Form moviesearch={getMovie} />
       <MovieDisplay movie={movie} />
      </div>
    </>
  )
}

export default App
