const { createContainer, asClass, asValue, asFunction } = require("awilix");
const config = require("../config");
const app = require(".");
// services
const {
  HomeService,
  UserService,
  IdeaService,
  CommentService,
} = require("../services");
// controller
const { HomeController } = require("../controllers");
// routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");
// models
const { User, Idea, Comment } = require("../models");
// repositories
const {
  UserRepository,
  IdeaRepository,
  CommentRepository,
} = require("../repositories");

const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    routes: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserService: asFunction(UserService).singleton(),
    CommentService: asFunction(CommentService).singleton(),
    IdeaService: asFunction(IdeaService).singleton(),
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
  });

module.exports = container;
