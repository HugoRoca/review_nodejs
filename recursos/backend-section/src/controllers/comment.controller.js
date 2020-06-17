let _commentService = null;

class CommentController {
  constructor({ CommentService }) {
    _commentService = CommentService;
  }

  async get(req, res) {
    const { commentId } = req.params;
    const comment = await _commentService.get(commentId);
    return res.send(comment);
  }

  async update(req, res) {
    const { body } = req;
    const { commentId } = req.params;
    const updateComment = await _commentService.update(commentId, body);
    return res.send(updateComment);
  }

  async delete(req, res) {
    const { commentId } = req.params;
    const deleteComment = await _commentService.delete(commentId);
    return res.send(deleteComment);
  }

  async getIdeasComments(req, res) {
    const { ideaId } = req.params;
    const comments = await _commentService.getIdeasComments(ideaId);
    return res.send(comments);
  }

  async createComment(req, res) {
    const { body } = req;
    const { ideaId } = req.params;
    const createComment = await _commentService.createComment(body, ideaId);
    return res.status(201).send(createComment);
  }
}

module.exports = CommentController;
