# assignment-6
repository for assignment-6 of CSC372

## Routes

- `POST /api/triviabook` - add a new question
- `GET /api/triviabook/:id` - Retrieve a specific question
- `GET /api/triviabook/topic` - Retrieve all topics present in the trivia book
- `GET /api/triviabook/topic/:topic` - Retrieve all questions under a particular topic
- `GET /api/triviabook/topic/:topic/:difficulty` - Retrieve all questions under a particular topic with under a specific difficulty level
- `GET /api/triviabook/topic/:topic/limit/:limit` - Retrieve a specific number of questions under a particular topic
- `GET /api/triviabook/random` - Retrieve a random question

### Table: `triviabook`
Stores questions within the triviabook.

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `SERIAL` | `PRIMARY KEY`| Unique identifier for each question. |
| `topic` | `TEXT` | `NOT NULL` | Topic the question is affiliated with |
| `question` | `TEXT` | | The question within the table |
| `answer` | `TEXT` |  | The answer to the question |
| `difficulty` | `TEXT` | `NOT NULL` | The difficulty level of the question |

## Setup

1. Clone the repository:
   ```bash
   git clone <github_url>
   cd assignment-6
   ```

2. Install dependencies:
   ```bash
   npm install pg express init cors
   ```

3. Create a `.env` file with your database connection string:
   ```bash
   DATABASE_URL=your_neon_database_connection_string
   ```

4. Start the server:
   ```bash
   node --env-file=.env server.js
   ```

   The server will run on `http://localhost:3000` by default.