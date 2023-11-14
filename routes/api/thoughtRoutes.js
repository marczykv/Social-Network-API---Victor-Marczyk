const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
} = require('../../controllers/thoughtController'); 
const {
  createReaction, 
  deleteReaction
} = require('../../controllers/reactionController');

// GET all thoughts
router.get('/', getAllThoughts);

// GET a single thought by its _id
router.get('/:id', getThoughtById);

// POST a new thought
router.post('/', createThought);

// PUT (update) a thought by its _id
router.put('/:id', updateThoughtById);

// DELETE a thought by its _id
router.delete('/:id', deleteThoughtById);

// POST a reaction for a thought
router.post('/:thoughtId/reactions', createReaction);

// DELETE a reaction by its reactionId from a thought
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;
