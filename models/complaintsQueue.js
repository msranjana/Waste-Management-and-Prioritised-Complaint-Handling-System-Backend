let complaintsQueue = [];

// Add a complaint to the queue
function addComplaint(complaint) {
  complaintsQueue.push({ ...complaint, timestamp: Date.now() });
  complaintsQueue.sort((a, b) => a.priority - b.priority); // Sort by priority
}

// Get all complaints
function getComplaints() {
  return complaintsQueue;
}

// Resolve (remove) the highest-priority complaint
function resolveComplaint() {
  return complaintsQueue.shift(); // Removes the first (highest-priority) complaint
}

module.exports = { addComplaint, getComplaints, resolveComplaint };
