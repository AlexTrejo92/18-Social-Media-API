const router = require('express').Router();
const {getThoughts,getSingleThought,createThought,updateThought,deleteThought} = require('../../controllers/thoughtController')

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtID').get(getSingleThought).put(updateThought).delete(deleteThought);

// TODO: Check the reactions route and controller

router.route('/:thoughtID/reactions').post(createReaction);
router.route('/:thoughtID/reactions').delete(deleteReaction);