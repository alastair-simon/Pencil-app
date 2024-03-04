const myRouter = require("express").Router();
const controller = require("./controller/controller")

myRouter.get("/artists", controller.getArtists);
myRouter.post("/artists", controller.addArtist);

myRouter.get("/projects", controller.getProjects);
myRouter.post("/projects", controller.addProject);
myRouter.put("/projects/:id", controller.putProject);

// myRouter.post("/artistLiked", controller.addLike);

// myRouter.get("/events", controller.getEvents);
// myRouter.post("/events", controller.addEvent);

module.exports = myRouter;
