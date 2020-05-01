const en_us = require("./localizations/en-us");
const en_owo = require("./localizations/en-owo");
const es = require("./localizations/es");
const nl = require("./localizations/nl");
const pl = require("./localizations/pl");

const langCodeMap = new Map([
	["nl", nl],
	["en_us", en_us],
	["en_owo", en_owo],
	["es", es],
	["pl", pl]
]);

const langCodeCache = new Map();

const exporting = {};
Object.defineProperties(exporting, {
	"en_us": {
		value: en_us
	},
	"en_owo": {
		get() {
			return fill("en_owo")
		}
	},
	"es": {
		get() {
			return fill("es")
		}
	},
	"nl": {
		get() {
			return fill("nl")
		}
	},
	"pl": {
		get() {
			return fill("pl")
		}
	}
})

module.exports = exporting;

function fill(code) {
	if (langCodeCache.get(code)) return langCodeCache.get(code);
	const commandsRawENNF = Object.values(en_us);
	const commandsRawEN = Object.assign({}, ...commandsRawENNF);
	const categories = Object.keys(en_us);
	const commandsEN = Object.keys(commandsRawEN);

	const commandsRawTargetNF = Object.values(langCodeMap.get(code));
	const commandsRawTarget = Object.assign({}, ...commandsRawTargetNF);
	const commandsTartget = Object.keys(commandsRawTarget);

	for (const command of commandsEN) {
		// Check for if the command is included in the target's commands.
		if (commandsTartget.includes(command)) {
			/** @type {{ help: { usage: string, description: string }, prompts: Object.<string, string>, returns: Object.<string, string> }} */
			const commandEN = commandsRawEN[command];
			/** @type {{ help: { usage: string, description: string }, prompts: Object.<string, string>, returns: Object.<string, string> }} */
			const commandTarget = commandsRawTarget[command];

			const promptsEn = commandEN.prompts;
			const promptsTarget = commandTarget.prompts;
	
			const returnsEn = commandEN.returns;
			const returnsTarget = commandTarget.returns;
	
			// Check for if the prompts are the same.
			// Add prompts which do not exist on target.
			for (const prompt of Object.keys(promptsEn)) {
				if (!promptsTarget[prompt]) promptsTarget[prompt] = promptsEn[prompt];
			}
			// Delete prompts which do not exist on en.
			for (const prompt of Object.keys(promptsTarget)) {
				if (!promptsEn[prompt]) delete promptsTarget[prompt];
			}
	
			// Check for if the returns are the same.
			// Add returns which do not exist on target.
			for (const rt of Object.keys(returnsEn)) {
				if (!returnsEn[rt]) returnsTarget[rt] = returnsEn[rt];
			}
			// Delete returns which do not exist on en.
			for (const rt of Object.keys(returnsTarget)) {
				if (!returnsEn[rt]) delete returnsTarget[rt];
			}
		} else {
			// Else, copy over the command.
			commandsRawTarget[command] = commandsRawEN[command];
		}
	}

	const newTarget = {};

	categories.forEach(item => {
		const commands = Object.keys(en_us[item]);
		newTarget[item] = {};
		for (const command of commands) {
			newTarget[item][command] = commandsRawTarget[command]
		}
	});

	langCodeCache.set(code, newTarget);
	return newTarget;
}
