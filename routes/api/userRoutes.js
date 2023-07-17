const router = require('express').Router();
const {getUsers,getSingleUser,createUser,updateUser,deleteUser} = require('../../controllers/usersController')
// /api/users
router.route('/').get(getUsers).post(createUser);
router.route('/:userID').get(getSingleUser).put(updateUser).delete(deleteUser);

// TODO: Bonus: remove a user's associated thoughts when deleted.

module.exports = router;