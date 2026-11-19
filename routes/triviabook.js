/*
  Name: Justice Tolentino
  Date: 11.18.2026
  CSC 372-01

  This is the routes/triviabook.js page for my express crud API assignment. This is where the endpoints for the triviabook API are set up.
*/

import { Router } from 'express';
import {
  createQuestionController,
  getAllTopicsController,
  getQuestionByIdController,
  getQuestionsByTopicController,
  getQuestionsByDifficultyController,
  getRandomQuestionController,
  getLimitedQuestionsByTopicController
} from '../controllers/triviabook.js';

const router = Router();

router.post('/', createQuestionController);
router.get('/topic', getAllTopicsController);
router.get('/random', getRandomQuestionController);
router.get('/:id', getQuestionByIdController);
router.get('/topic/:topic', getQuestionsByTopicController);
router.get('/topic/:topic/:difficulty', getQuestionsByDifficultyController);
router.get('/topic/:topic/limit/:limit', getLimitedQuestionsByTopicController);

export default router;