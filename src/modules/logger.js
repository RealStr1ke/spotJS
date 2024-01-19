import chalk from 'chalk';
const path = require('path');
class Logger {
	constructor() {
		this.raw = console.log;
	}

	async splash() {
		// Read ../splash.txt using Bun
		const splash = await Bun.file(path.join(__dirname, '../splash.txt')).text();
		this.raw(chalk.green.bold(splash));
	}

	log(message, type, prefix = false) {
        let msgColor, prefixColor;
        let defaultPrefixes = {
            error: '[ERROR]',
            warn: '[WARN]',
            info: '[INFO]',
            success: '[SUCCESS]',
            default: '[spotJS]'
        }
        switch (type) {
            case 'error':
                msgColor = chalk.red;
                prefixColor = chalk.red.bold;
                break;
            case 'warn':
                msgColor = chalk.yellow;
                prefixColor = chalk.yellow.bold;
                break;
            case 'info':
                msgColor = chalk.blue;
                prefixColor = chalk.blue.bold;
                break;
            case 'success':
                msgColor = chalk.green;
                prefixColor = chalk.green.bold;
                break;
            default:
                msgColor = chalk.white;
                prefixColor = chalk.white.bold;
                break;
        }

        // If prefix !== false, print custom prefix
        if (prefix !== false) {
            this.raw(prefixColor(prefix), msgColor(message));
        } else {
            this.raw(prefixColor(defaultPrefixes[type]), msgColor(message));
        }
    }

    space(count = 1) {
        this.raw('\n'.repeat(count - 1));
    }
}

export default Logger;

const logger = new Logger();
await logger.splash();
logger.space();
logger.log('Hello, world!', 'info', '[spotJS]');