import express from 'express';

import {getUsers, getUser, createUsers, deleteFavorites, addFavorites, getData, googleLogin} from '../controllers/usersCont.js'

const router = express.Router();

router.get('/', getUsers);
router.get("/id/:id", getData);
router.post('/signin', getUser);
router.post('/', createUsers)
router.post('/google', googleLogin);
router.put('/favorites', addFavorites)
router.delete('/favorites', deleteFavorites);

export default router