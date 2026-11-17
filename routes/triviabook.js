import { Router } from 'express';
import {
  createQuestionController,
  getAllTopicsController,
  getQuestionByIdController,
  getQuestionsByTopicController,
  getQuestionsByDifficultyController,
  getRandomQuestionController
} from '../controllers/triviabook.js';

const router = Router();

router.post('/', createQuestionController);
router.get('/', getAllTopicsController);
router.get('/:id', getQuestionByIdController);
router.get('/topic/:topic', getQuestionsByTopicController);
router.get('/difficulty/:difficulty', getQuestionsByDifficultyController);
router.get('/random', getRandomQuestionController);

export default router;