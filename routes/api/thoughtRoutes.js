const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-controller'); 

// GET all thoughts
router.get('/', getAllThoughts);

// GET a single thought by its _id
router.get('/:id', getThoughtById);

// POST a new thought
router.post('/', createThought);

// PUT (update) a thought by its _id
router.put('/:id', updateThought);

// DELETE a thought by its _id
router.delete('/:id', deleteThought);

// POST a reaction for a thought
router.post('/:thoughtId/reactions', createReaction);

// DELETE a reaction by its reactionId from a thought
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;
