const express = require('express');
const router = express.Router();
const { getResolvedComplaints } = require('../models/resolvedStack');
const { generateCSV } = require('../utils/csvWriter');

// GET /generate-log
router.get('/generate-log', (req, res) => {
  const resolvedComplaints = getResolvedComplaints();

  if (resolvedComplaints.length === 0) {
    return res.status(400).send({ error: 'No resolved complaints to log' });
  }

  generateCSV(resolvedComplaints, 'resolved_complaints_log.csv');
  res.send({ message: 'Log file generated successfully!', file: 'resolved_complaints_log.csv' });
});

module.exports = router;
