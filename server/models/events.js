const mongoose = require("./index.js");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: String,
  location: String,
  rate: String,
  skills: [String],
  mainSkill: String,
  profileImg: String,
  work: [
    {
      description: [String],
      images: [String],
    },
  ],
});

const projectSchema = new Schema({
  projectOwner: String,
  description:String,
  projectName: String,
  numberContributors: Number,
  artists: [artistSchema],
});

// const usersSchema = new Schema({
//   name: String,
//   profileImg: String
// });

// const pastWorkSchema = new Schema({
//   description: String,
//   images: [String]
// });

const artistLikes = new Schema({
  artistsInfo: {
    type: mongoose.ObjectId,
    ref: "Artist",
  },
  numberOfLikes: Number,
  numberOfDislikes: Number
});

const Artist = mongoose.model("Artist", artistSchema);
const Projects = mongoose.model("Projects", projectSchema);
const ArtistLikes = mongoose.model("ArtistLikes", artistLikes);
// const Users = mongoose.model("Users", usersSchema);

module.exports = { Artist, Projects, ArtistLikes };
