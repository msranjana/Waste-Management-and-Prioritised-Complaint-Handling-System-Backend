const express = require('express');
const app = express();
const PORT = 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Import routes
const complaintsRoutes = require('./routes/complaints');
const resolvedRoutes = require('./routes/resolved');
const logsRoutes = require('./routes/logs');

// Use routes
app.use('/complaints', complaintsRoutes);
app.use('/resolved', resolvedRoutes);
app.use('/logs', logsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
