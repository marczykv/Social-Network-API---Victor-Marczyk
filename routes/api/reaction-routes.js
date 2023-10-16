const router = require('express').Router();
const {
  createReaction,
  deleteReaction,
} = require('../../controllers/reaction-controller');

// POST a reaction to a thought
router.post('/:thoughtId/reactions', createReaction);

// DELETE a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;