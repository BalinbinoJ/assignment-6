import pool from './db.js';

async function createQuestion(topic, question, answer, difficulty) {
  const result = await pool.query(
    'INSERT INTO triviabook (topic, question, answer, difficulty) VALUES ($1, $2, $3, $4) RETURNING *',
    [topic, question, answer, difficulty]
  );
  return result.rows[0];
}

async function getAllTopics() {
  const result = await pool.query('SELECT DISTINCT topic FROM triviabook');
  return result.rows;
}

async function getQuestionById(id) {
  const result = await pool.query('SELECT question FROM triviabook WHERE id = $1', [id]);
  return result.rows[0];
}

async function getQuestionsByTopic(topic) {
  const result = await pool.query('SELECT question FROM triviabook WHERE topic = $1', [topic]);
  return result.rows;
}

async function getQuestionsByDifficulty(difficulty) {
  const result = await pool.query('SELECT question FROM triviabook WHERE difficulty = $1', [difficulty]);
  return result.rows;
}

async function getRandomQuestion() {
  const result = await pool.query('SELECT question FROM triviabook ORDER BY RANDOM() LIMIT 1');
  return result.rows[0];
}

async function getLimitedQuestionsByTopic(topic, limit) {
  const result = await pool.query('SELECT question FROM triviabook WHERE topic = $1 LIMIT $2', [topic, limit]);
  return result.rows;
}

export { createQuestion, getAllTopics, getQuestionById, getQuestionsByTopic, getQuestionsByDifficulty, getRandomQuestion, getLimitedQuestionsByTopic };
