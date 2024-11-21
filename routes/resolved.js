const express = require('express');
const router = express.Router();
const { resolveComplaint } = require('../models/complaintsQueue');
const { addResolvedComplaint, getResolvedComplaints } = require('../models/resolvedStack');

// POST /resolve
router.post('/', (req, res) => {
  const resolvedComplaint = resolveComplaint();

  if (!resolvedComplaint) {
    return res.status(400).send({ error: 'No complaints to resolve' });
  }

  addResolvedComplaint(resolvedComplaint);
  res.send({ message: 'Complaint resolved!', resolvedComplaint });
});

// GET /resolved
router.get('/', (req, res) => {
  const resolvedComplaints = getResolvedComplaints();
  res.send(resolvedComplaints);
});

module.exports = router;
