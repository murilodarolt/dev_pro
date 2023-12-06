const fs = require('fs');

function getCurrentTimestamp() {
  const currentTimestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
  return `[${currentTimestamp}]`;
}

function logMessage(filename, level, message) {
  const timestamp = getCurrentTimestamp();
  const log = `${timestamp} [${level}] ${message}\n`;

  fs.appendFile(filename, log, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
}

module.exports = logMessage;