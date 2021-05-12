
import './ResultPage.css';
import SearchBar from "./components/SearchBar1/SearchBarFilter"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import FooterLinks from "./components/FooterLinks/FooterLinks"
import MovieLabel from "./components/MovieLabel/MovieLabel"

function ResultPage() {
  const { fromSearchPage } = this.props.location.state

  return (
    <body>
        <Header></Header>
        <div class="wrapper">
        <section class="main-container" >
                <div class="location" id="home">
                    
                    <h1 id="home">Popular on HealthyCode</h1>
                    <SearchBar></SearchBar>
                    <div class="box">
                         <MovieLabel movie={fromSearchPage}></MovieLabel>   
                         <MovieLabel movie={fromSearchPage}></MovieLabel> 
                         <MovieLabel movie={fromSearchPage}></MovieLabel> 
                         <MovieLabel movie={fromSearchPage}></MovieLabel> 
                         <MovieLabel movie={fromSearchPage}></MovieLabel> 
                         <MovieLabel movie={fromSearchPage}></MovieLabel> 
                         <MovieLabel movie={fromSearchPage}></MovieLabel> 
                         <MovieLabel movie={fromSearchPage}></MovieLabel> 
                         <MovieLabel movie={fromSearchPage}></MovieLabel>   
                    </div>
                </div>
            </section>
            <FooterLinks></FooterLinks>
            <Footer></Footer>
        </div>
    </body>
  );
}

export default ResultPage;
