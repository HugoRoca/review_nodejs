require("express-async-errors");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const { NotFoundModdleware, ErrorMiddleware } = require("../middleware");
const swaggerUI = require("swagger-ui-express");
const { SWAGGER_DOC } = require("../config");
const swaggerDocument = require(SWAGGER_DOC);

module.exports = function ({
  HomeRoutes,
  UserRoutes,
  IdeaRoutes,
  CommentRoutes,
  AuthRoutes,
}) {
  const router = express.Router();
  const apiRoutes = express.Router();
  apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());

  apiRoutes.use("/home", HomeRoutes);
  apiRoutes.use("/user", UserRoutes);
  apiRoutes.use("/idea", IdeaRoutes);
  apiRoutes.use("/comment", CommentRoutes);
  apiRoutes.use("/auth", AuthRoutes);

  router.use("/v1/api", apiRoutes);
  router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

  router.use(NotFoundModdleware).use(ErrorMiddleware);

  return router;
};
