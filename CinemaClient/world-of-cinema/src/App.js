import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './Components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/home/Home';
import Header from './Components/header/Header';
import Trailer from './Components/trailer/Trailer';
import Review from './Components/reviewForm/Review';
import NotFound from './Components/notFound/NotFound';

function App() {

  const [cinema, setCinema] = useState([]);
  const [movie, setMovie] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getCinema = async () => {
    try
    {
      const response = await api.get("/api/v1/cinema");
      
      console.log(response.data);
      setCinema(response.data);
    }
    catch(err)
    {
      console.log(err);
    }
    
  }

  const getMovieData = async(movieId) => {
      try {
        const response = await api.get(`/api/v1/cinema/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

      } catch (error) {
        
      }
  }

  useEffect(() => {
    getCinema();
  }, [])

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home cinema={cinema}/>}></Route>
            <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
            <Route path='/Reviews/:movieId' element={<Review getMovieData = {getMovieData} reviews = {reviews} movie = {movie} setReviews = {setReviews} />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
