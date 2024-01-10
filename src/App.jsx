import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MySelection from './components/MySection';
import MyFooter from './components/MyFooter';
import { Container } from 'react-bootstrap';
import MyList from './components/MyList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
      <Container fluid>
        <BrowserRouter>
          <MyNav />
          
          <Routes>
            <Route path='/' element={<MySelection />} />
            <Route path='/superman' element={<MyList content="Trending Now" moviesName="superman" />} />
            <Route path='/spiderman' element={<MyList content="Watch it Again" moviesName="spiderman" />} />
            <Route path='/lord-of-the-rings' element={<MyList content="New Releases" moviesName="lord of the rings" />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/movie/detail/:movieId' element={<MovieDetail moviesName="superman" />} />
          </Routes>
          <MyFooter />
        </BrowserRouter>
      </Container>
  );
}

export default App;
