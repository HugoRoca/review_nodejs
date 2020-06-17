const BaseService = require("./base.service");
let _commentRepository = null,
  _ideaReposotory = null;

class CommentService extends BaseService {
  constructor({ CommentRepository, IdeaRepository }) {
    super(CommentRepository);
    _commentRepository = CommentRepository;
    _ideaReposotory = IdeaRepository;
  }

  async getIdeaComments(ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "ideaId must be sent";
      throw error;
    }

    const idea = await _ideaReposotory.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "idea does not exist";
      throw error;
    }

    const { comments } = idea;
    return comments;
  }

  async createComment(comment, ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "ideaId must be sent";
      throw error;
    }

    const idea = await _ideaReposotory.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "idea does not exist";
      throw error;
    }

    const createdComment = await _commentRepository.create(comment);
    idea.comments.push(createdComment);

    return await _ideaReposotory.update(ideaId, { comments: idea.comments });
  }
}

module.exports = CommentService;
