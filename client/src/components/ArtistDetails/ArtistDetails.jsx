import "./ArtistDetails.css";
import { useParams } from "react-router-dom";
import { useMainContext } from "../contextComponent.jsx";
import { PageTitle } from "../PageTitle/pageTitle.jsx";
import { useState, useEffect } from "react";

export function ArtistDetails() {
    const { fullArtists, setFullArtists } = useMainContext();
    const [chosenArtist, setChosenArtist] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const artist = fullArtists.find((artist) => artist._id === id);
        if (artist) {
            setChosenArtist(artist);
        }
    }, [fullArtists, id]);

    return (
      <div className="wrapper">
        <PageTitle page={chosenArtist.name} />
        <div className="artist-profile-details">
          <div className="bg-img-crop">
            <img src={chosenArtist.image} alt={chosenArtist.name} />
          </div>
          <h3>{chosenArtist.name}</h3>
          <div>
            <p>Rate</p>
            <p>{chosenArtist.rate}</p>
          </div>
          <div>
            <p>Skills and Tools:</p>
            <ul>
              {chosenArtist.skills &&
                chosenArtist.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className="work">
          <ul>
            {chosenArtist.work && chosenArtist.work.map((item, i) => (
              <li key={i}>
                <img src={item.images[i]}></img>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}
