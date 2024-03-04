import "./SearchBar.css";
export function SearchBar({ filterSearched }) {

    return (
      <div className="searchWrap">
        <div className="searchBar">
          <input
            id="true"
            onChange={filterSearched}
            type="text"
            className="search"
            placeholder="Search..."
          />
          <button>People</button>
          <button>Skills</button>
        </div>
      </div>
    );
}
