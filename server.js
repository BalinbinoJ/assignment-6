import express from 'express';
import cors from 'cors';
import errorHandler from './middleware/errorHandler.js';
import logger from './middleware/logger.js';
import triviabookRouter from './routes/triviabook.js';

const app = express();
app.use(logger);
app.use(express.json());
app.use(cors());

app.use('/api/triviabook', triviabookRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});