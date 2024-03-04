// contextComponent.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchArtists } from "../ApiService.js";

const ArtistListContext = createContext({});

export function ContextComponent({ children }) {
  const [fullArtists, setFullArtists] = useState([]);

  useEffect(() => {
    async function fetchAndSet() {
      try {
        const data = await fetchArtists();
        setFullArtists(data);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    }
    fetchAndSet();
  }, []);

  return (
    <ArtistListContext.Provider value={{ fullArtists, setFullArtists }}>
      {children}
    </ArtistListContext.Provider>
  );
}

export const useArtistsContext = () => useContext(ArtistListContext);
