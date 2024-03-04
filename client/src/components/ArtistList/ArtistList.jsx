import { fetchArtists } from "../../ApiService.js";
import { useState, useEffect } from "react";
import { ArtistListItem } from "../ArtistListItem/ArtistListItem.jsx";
import "./ArtistList.css";
import { PageTitle } from "../PageTitle/pageTitle.jsx";
import { SearchBar } from "../SearchBar/SearchBar.jsx";

export function ArtistList() {
  const [artists, setArtists] = useState([]);
  const [fullArtists, setFullArtists] = useState([]);
  const [isActive, setIsActive] = useState([]);

  useEffect(() => {
    async function fetchAndSet() {
      const data = await fetchArtists();
      setArtists(data);
      setFullArtists(data);
    }
    fetchAndSet();
  }, []);


 function filterSearched(e) {
   const searchValue = e.target.value.toLowerCase();

   if (!searchValue) {
     setArtists(fullArtists);
   } else {
     const searched = artists.filter((artist) =>
       artist.name.toLowerCase().startsWith(searchValue)
     );
     setArtists(searched);
   }
 }

  return (
    <div className="wrapper">
      <PageTitle page="Collection" />
      <SearchBar filterSearched={filterSearched} />

        <ul className="list">
          {artists.map((artist) => {
            return <ArtistListItem artist={artist} key={artist._id} />;
          })}
        </ul>

    </div>
  );
}
