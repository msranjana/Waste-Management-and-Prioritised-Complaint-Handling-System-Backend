const express = require('express');
const router = express.Router();
const { addComplaint, getComplaints } = require('../models/complaintsQueue');

// POST /complaints
router.post('/', (req, res) => {
  const { type, priority, location } = req.body;

  if (!type || !priority || !location) {
    return res.status(400).send({ error: 'All fields are required: type, priority, location' });
  }

  addComplaint({ type, priority, location });
  res.send({ message: 'Complaint added successfully!' });
});

// GET /complaints
router.get('/', (req, res) => {
  const complaints = getComplaints();
  res.send(complaints);
});

module.exports = router;
