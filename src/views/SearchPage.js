import './SearchPage.css';
import SearchBar from '../components/SearchBar2/SearchBar';
import Header from '../components/Header/Header';

function SearchPage() {
  return (
    <body>
      <Header></Header>
      <div class="body">
        <form>
          <h1> Find Everything to Watch</h1>
          <SearchBar></SearchBar>
        </form>
      </div>
    </body>
  );
}

export default SearchPage;
