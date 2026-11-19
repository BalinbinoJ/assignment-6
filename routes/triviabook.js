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
router.get('/:id', getQuestionByIdController);
router.get('/topic/:topic', getQuestionsByTopicController);
router.get('/topic/:topic/:difficulty', getQuestionsByDifficultyController);
router.get('/random', getRandomQuestionController);
router.get('/topic/:topic/limit/:limit', getLimitedQuestionsByTopicController);

export default router;