import "./SearchPage.css";
import SearchBar from "../components/SearchBar2/SearchBar";

function SearchPage() {
  return (
    <body>
      <div className="body">
        <form>
          <h1> Find Everything to Watch</h1>
          <SearchBar></SearchBar>
        </form>
      </div>
    </body>
  );
}

export default SearchPage;
