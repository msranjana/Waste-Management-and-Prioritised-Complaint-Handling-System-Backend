const fs = require('fs');

// Generate CSV from resolved complaints
function generateCSV(data, filename) {
  const header = 'S.No,Type,Priority,Location,Resolved Timestamp\n';
  const csvContent = data
    .map((complaint, index) =>
      `${index + 1},${complaint.type},${complaint.priority},${complaint.location},${new Date(complaint.timestamp).toISOString()}`
    )
    .join('\n');

  fs.writeFileSync(filename, header + csvContent, 'utf8');
}

module.exports = { generateCSV };
