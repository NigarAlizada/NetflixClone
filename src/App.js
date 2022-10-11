import requests from './requests';

//styling
import './styles/App.css';
import './styles/Row.css';
import './styles/Banner.css';
import './styles/Nav.css';
import './styles/Footer.css';

//components
import Banner from './components/Banner';
import Row from './components/Row';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl = {requests.fetchDocumantaries}/>
      <Footer />
    </div>
  );
}

export default App;
