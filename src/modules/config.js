const fs = require('fs');
const path = require('path');
const logger = require('./logger.js');

// Load and/or create config file
let defaultConfig = require('../config.json');

// Get OS
let os = process.platform;

// Check if config file exists
// Linux and BSD: ~/.config/spotJS/config.json
// Windows and macOS not yet supported

if (os === 'linux' || os === 'freebsd' || os === 'openbsd' || os === 'netbsd') {
    let configPath = path.join(process.env.HOME, '.config', 'spotJS', 'config.json');
    if (fs.existsSync(configPath)) {
        
    } else {
        
    }
}
