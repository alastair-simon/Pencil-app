import { fetchArtists, updateLikes, updateDislikes } from "../../ApiService";
import { useState, useEffect } from "react";
import React, { useContext } from "react";
import { useArtistsContext } from "../contextComponent.jsx";
import "./ProjectDetailsItem.css";

export function ProjectDetailsItem({ artist }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  // const [fullArtists, setFullArtists] = useState([]);
  const { fullArtists, setFullArtists } = useArtistsContext();

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

  function getArtistImage(name) {
   const searched = fullArtists.find((fullArtist) => fullArtist._id === name);
   return searched ? searched.profileImg : "Artist Not Found";
 }

  return (
    <div className="projectItemWrap">
      <div className="">
      <div className="img-crop">
        <img src={getArtistImage(artist.artist)} className="artist-image"></img>
      </div>
      <p>{getArtistName(artist.artist)}</p>
      </div>

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
