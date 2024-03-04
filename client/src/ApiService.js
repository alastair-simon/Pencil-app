const artistsUrl = "http://localhost:3000/artists";
const projectsUrl = "http://localhost:3000/projects";

//Get artists
export async function fetchArtists() {
  try {
    const response = await fetch(artistsUrl);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error);
  }
}


//Get projects
export async function fetchProjects() {
  try {
    const response = await fetch(projectsUrl);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error);
  }
}

//Put todo
export async function addArtist(obj, projectId) {
  try {
    await fetch(projectsUrl + "/" + projectId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    // console.log(JSON.stringify(obj));
  } catch (error) {
    console.error(error);
  }
}

//Post data
export async function postProject(project) {
  try {
    await fetch(projectsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    // setNewevent("");
    // fetchData();
  } catch (error) {
    console.error(error);
  }
}


  // Get likes
  export async function updateLikes(artist) {
    try {
      const response = await fetch(`/projects/artistLikes/artist`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  // Update likes
  export async function updateDislikes(artist) {
    try {
      await fetch(`/project/dislike/artist`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Update dislikes
  const updateDislikes = async (action) => {
    try {
      await fetch(`/project/like/artist`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };


export default ArtistLikesComponent;
