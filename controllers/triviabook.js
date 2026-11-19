/*
  Name: Justice Tolentino
  Date: 11.18.2026
  CSC 372-01

  This is the controllers/triviabook.js page for my express crud API assignment. This is where the controller functions for handling triviabook requests are defined.
*/


import { createQuestion, getAllTopics, getQuestionById, getQuestionsByTopic, getQuestionsByDifficulty, getRandomQuestion, getLimitedQuestionsByTopic} from '../models/triviabook.js';

function createHttpError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

async function createQuestionController(req, res, next) {
  try {
    const { topic, question, answer, difficulty } = req.body;
    if (!topic || !question || !answer || !difficulty) {
      return next(createHttpError(400, 'All fields are required'));
    }
    const questionObj = await createQuestion(topic, question, answer, difficulty);
    res.status(201).json(questionObj);
  } catch (error) {
    next(error);
  }
}

async function getAllTopicsController(req, res, next) {
  try {
    const topics = await getAllTopics();
    if (!topics || topics.length === 0) {
      return next(createHttpError(404, 'No topics found'));
    }
    res.status(200).json(topics);
  } catch (error) {
    next(error);
  }
}

async function getQuestionByIdController(req, res, next) {
  try {
    const { id } = req.params;
    const question = await getQuestionById(id);
    if (!question) {
      return next(createHttpError(404, 'Question not found'));
    }
    res.status(200).json(question);
  } catch (error) {
    next(error);
  }
}

async function getQuestionsByTopicController(req, res, next) {
  try {
    const { topic } = req.params;
    const questions = await getQuestionsByTopic(topic);
    if (!questions || questions.length === 0) {
      return next(createHttpError(404, 'Topic not found'));
    }
    res.status(200).json(questions);
  } catch (error) {
    next(error);
  }
}

async function getLimitedQuestionsByTopicController(req, res, next) {
  try {
    const { topic, limit } = req.params;
    const questions = await getLimitedQuestionsByTopic(topic, parseInt(limit));
    if (!questions || questions.length === 0) {
      return next(createHttpError(404, 'Topic not found or no questions available'));
    }
    res.status(200).json(questions);
  } catch (error) {
    next(error);
  }
}

async function getQuestionsByDifficultyController(req, res, next) {
  try {
    const { difficulty } = req.params;
    const questions = await getQuestionsByDifficulty(difficulty);
    if (!questions || questions.length === 0) {
      return next(createHttpError(404, 'No questions found for the specified topic and difficulty'));
    }
    res.status(200).json(questions);
  } catch (error) {
    next(error);
  }
}

async function getRandomQuestionController(req, res, next) {
  try {
    const question = await getRandomQuestion();
    if (!question) {
      return next(createHttpError(404, 'No questions available'));
    }
    res.status(200).json(question);
  } catch (error) {
    next(error);
  }
}


export {
  createQuestionController,
  getAllTopicsController,
  getQuestionByIdController,
  getQuestionsByTopicController,
  getQuestionsByDifficultyController,
  getRandomQuestionController,
  getLimitedQuestionsByTopicController
};
