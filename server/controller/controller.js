const { Artist, Projects, ArtistLikes, } = require("../models/events");

//Get Artists
exports.getArtists = async (req, res) => {
  try {
    const event = await Artist.find({});
    res.status(200);
    res.send(event);
  } catch (error) {
    console.log(error);
    res.status(500);// Internal server error
    res.send(error);
  }
};

//Post Artist
exports.addArtist = async (req, res) => {
  try {
    const event = await Artist.create(req.body);
    res.status(201);
    res.send(event);
    console.log(event);
  } catch (error) {
    console.log(error);
    res.status(500); // Internal server error
    res.send(error);
  }
};

//Get projects
exports.getProjects = async (req, res) => {
  try {
    const event = await Projects.find({});
    res.status(200);
    res.send(event);
  } catch (error) {
    console.log(error);
    res.status(500);// Internal server error
    res.send(error);
  }
};

//Post project
exports.addProject = async (req, res) => {
  try {
    const event = await Projects.create(req.body);
    res.status(201);
    res.send(event);
    console.log(event);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};

//Update projects list
exports.putProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const artist = req.body;
    const filter = { _id: projectId };
    const updated = await Projects.findByIdAndUpdate(
      filter,
      { $push: { artists: artist } },
      { new: true }
    );
    res.status(201);
    res.send(updated);
    console.log(updated)
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};


// //Update user likes
// exports.addProject = async (req, res) => {
//   try {
//     const event = await Users.create(req.body);
//     res.status(201);
//     res.send(event);
//     console.log(event);
//   } catch (error) {
//     console.log(error);
//     res.status(500);
//     res.send(error);
//   }
// };