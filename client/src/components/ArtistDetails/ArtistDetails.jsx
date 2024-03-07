import "./ArtistDetails.css";
import { useParams } from "react-router-dom";
import { useMainContext } from "../contextComponent.jsx";
import { PageTitle } from "../PageTitle/pageTitle.jsx";
import { useState, useEffect } from "react";
import { DropDownListSecond } from "../DropDownListSecond/DropDownListSecond.jsx";
import { Loading } from "../Loading/Loading.jsx";

export function ArtistDetails() {
  const { fullArtists, setFullArtists } = useMainContext();
  const [chosenArtist, setChosenArtist] = useState({});
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
      const delay = setTimeout(() => {
        const artist = fullArtists.find((fullArtist) => fullArtist._id === id);
        if (artist) {
          setChosenArtist(artist);
        }
        setIsLoading(false);
      }, 600);
    return () => clearTimeout(delay);
    }, [fullArtists]);

  return (
    <div className="wrapper">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle page="Artists" />
          <div className="artist-content">
            <div className="artist-profile-details">
              <div className="bg-img-crop">
                <img
                  src={chosenArtist.profileImg}
                  className="artist-profile-image"
                />
              </div>
              <div className="narrow">
                <h3>{chosenArtist.name}</h3>
                <DropDownListSecond />
              </div>

              <div className="artist-infos">
                <div className="space">
                  <p>RATE</p>
                  <div className="border">
                    <p>{chosenArtist.rate}</p>
                  </div>
                </div>
                <div className="space">
                  <p>SKILLS</p>
                  <ul>
                    {chosenArtist.skills &&
                      chosenArtist.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="work">
              <div className="work-links">
                <a className={active ? "active-link" : ""}>Work</a>
                <a className={active ? "" : "active-link"}>Experience</a>
              </div>
              <hr />
              <ul>
                {chosenArtist.work &&
                  chosenArtist.work.map((item, i) => (
                    <li key={i}>
                      <article class="story">
                        <div className="story-img-crop">
                          <img src={item.images}></img>
                        </div>
                        <div className="artistProjectInfo">
                          <p>PROJECT</p>
                          <p>{item.description}</p>
                        </div>
                      </article>
                      <hr />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
