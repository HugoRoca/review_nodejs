const { Router } = require("express");
const { ParseIntMiddleware, GKPREV6 } = require("../middleware");

module.exports = function ({ IdeaController }) {
  const router = Router();

  router.get("/", ParseIntMiddleware, IdeaController.getAll);
  router.get("/:ideaId", ParseIntMiddleware, IdeaController.get);
  router.post("/", ParseIntMiddleware, IdeaController.create);
  router.get("/:ideaId/all", ParseIntMiddleware, IdeaController.getUserIdeas);
  router.patch("/:ideaId", ParseIntMiddleware, IdeaController.update);
  router.delete("/:ideaId", ParseIntMiddleware, IdeaController.delete);
  router.post(
    "/:ideaId/upvote",
    ParseIntMiddleware,
    IdeaController.upvoteIdeas
  );
  router.post(
    "/:ideaId/downvote",
    ParseIntMiddleware,
    IdeaController.downvoteIdeas
  );

  return router;
};
