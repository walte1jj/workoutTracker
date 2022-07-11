const router = require('express').Router();
require('../../models/User');

const {
  createUser,
  getSingleUser,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);



// const router = require('express').Router();
// const User = require('../../models/User');
// const Exercise = require('../../models/Exercise');


// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json({ Error: err }));
// });


// router.route('/add').post((req, res) => {
//   const { username } = req.body;

//   const newUser = new User({ username });

//   newUser
//     .save()
//     .then(() => res.json({ msg: 'User added!' }))
//     .catch(err => {
//       if (err.code === 11000) {
//         return res.json({ msg: `${username} already exists!` });
//       }
//       res.status(400).json({ Error: err });
//     });
// });


// router.route('/:id').get((req, res) => {
//   Exercise.find({ user: req.params.id })
//     .populate('user')
//     .then(exercises => {
//       console.log(exercises);
//       res.json(exercises);
//     })
//     .catch(err => res.status(400).json({ Error: err }));

// });


// router.route('/:id').delete((req, res) => {
//   Exercise.deleteMany({ username: req.params.id })
//     .then(() => res.json({ msg: 'Exercises Deleted!' }))
//     .catch(err => res.status(400).json({ Error: err }));

//   User.findOneAndDelete({ _id: req.params.id })
//     .then(() => res.json({ msg: 'User Deleted!' }))
//     .catch(err => res.status(400).json({ Error: err }));
// });

module.exports = router;
