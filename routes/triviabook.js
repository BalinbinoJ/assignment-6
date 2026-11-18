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
router.get('/topics', getAllTopicsController);
router.get('/:id', getQuestionByIdController);
router.get('/topics/:topic', getQuestionsByTopicController);
router.get('/topics/:topic/:difficulty', getQuestionsByDifficultyController);
router.get('/random', getRandomQuestionController);

export default router;