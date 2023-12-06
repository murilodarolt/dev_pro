const logMessage = require('./logger')

logMessage("application.log", "INFO", "User logged in");
logMessage("application.log", "WARNING", "Failed login attempt");