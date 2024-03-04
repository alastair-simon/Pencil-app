import { fetchArtists, updateLikes, updateDislikes } from "../../ApiService";
import { useState, useEffect } from "react";
import "./ProjectDetailsItem.css";
import React, { useContext } from "react";
import { ContextComponent } from "../contextComponent";


export function ProjectDetailsItem({ artist }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [fullArtists, setFullArtists] = useState([]);

  useEffect(() => {
    async function fetchAndSet() {
      const data = await fetchArtists();
      setFullArtists(data);
      setLikes(artist.numberOfLikes);
      setDislikes(artist.numberOfDislikes);
    }
    fetchAndSet();
  }, []);


  //  const { fullArtists } = useContext(ContextComponent);

  async function updateLikedArtist(id) {
    await updateLikes(id);
    setLikes((prevLikes) => prevLikes + 1);
  }

  async function updateDislikedArtist(id) {
    await updateDislikes(id);
    setDislikes((prevDislikes) => prevDislikes + 1);
  }

  function handleDislikes() {
    updateDislikedArtist(artist._id);
  }

  function handleLikes() {
    updateLikedArtist(artist._id);
  }

 function getArtistName(name) {
   const searched = fullArtists.find((fullArtist) => fullArtist._id === name);
   return searched ? searched.name : "Artist Not Found";
 }


  return (
    <div className="projectItemWrap">
      <p>{getArtistName(artist.artist)}</p>
      <div className="project-collaborators">
        <img src="" />
      </div>
      <div className="votes">
        <p>{likes}</p>
        <button onClick={handleLikes}>up</button>
        <p>{dislikes}</p>
        <button onClick={handleDislikes}>down</button>
      </div>
    </div>
  );
}
