/*
  Name: Justice Tolentino
  Date: 11.18.2026
  CSC 372-01

  This is the logger.js page for my express crud API assignment. This is where the request logging middleware is defined.
*/

function logger(req, res, next) {
  const startedAt = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - startedAt;
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`);
  });

  next();
}

export default logger;
