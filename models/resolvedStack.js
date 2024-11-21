let resolvedStack = [];

// Add a complaint to the resolved stack
function addResolvedComplaint(complaint) {
  resolvedStack.push(complaint);
}

// Get all resolved complaints
function getResolvedComplaints() {
  return resolvedStack;
}

module.exports = { addResolvedComplaint, getResolvedComplaints };
