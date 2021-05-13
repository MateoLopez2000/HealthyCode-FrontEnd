import './ResultPage.css';
import SearchBar from '../components/SearchBar1/SearchBarFilter';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import FooterLinks from '../components/FooterLinks/FooterLinks';
import MovieLabel from '../components/MovieLabel/MovieLabel';

function ResultPage() {
  const { fromSearchPage } = this.props.location.state;

  return (
    <body>
      <Header></Header>
      <div className="wrapper">
        <section className="main-container">
          <div className="location" id="home">
            <h1 id="home">Popular on HealthyCode</h1>
            <SearchBar></SearchBar>
            <div className="box">{getMovieList(fromSearchPage)}</div>
          </div>
        </section>
        <FooterLinks></FooterLinks>
        <Footer></Footer>
      </div>
    </body>
  );
}

function getMovieList(MovieList) {
  return MovieList.map((movie) => {
    return <MovieLabel movie={movie.imagen} name={movie.name}></MovieLabel>;
  });
}

export default ResultPage;
