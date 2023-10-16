const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// Routes for /api/users

// Get all users
router.get('/', getAllUsers);

// Get a single user by its _id and populate thoughts and friends data
router.get('/:id', getUserById);

// Create a new user
router.post('/', createUser);

// Update a user by its _id
router.put('/:id', updateUser);

// Remove a user by its _id
router.delete('/:id', deleteUser);

// Add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', addFriend);

// Remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', removeFriend);

module.exports = router;
