/**
 * This script is meant to check which language files have missing categories, commands and properties.
 * This was not meant to be run within a long running process and just meant to be a one-shot stat but I can't stop you.
 */
undefined;

const fs = require("fs");
const path = require("path");

const English = require("../localizations/en-us");

/** @type {Array<[string, import("@amanda/lang").Lang]>} */
const languages = fs.readdirSync(path.join(__dirname, "./localizations"))
	.filter(i => !i.includes("en-us"))
	.map(i => [path.parse(i).name, require(path.join(__dirname, "./localizations", i))]);

for (const [langcode, lang] of languages) {
	/** @type {Array<keyof import("@amanda/lang").Lang>} */
	// @ts-ignore
	const encats = Object.keys(English);
	/** @type {Array<keyof import("@amanda/lang").Lang>} */
	// @ts-ignore
	const lcats = Object.keys(lang);

	/** @type {Array<keyof import("@amanda/lang").Lang>} */
	const missingCategories = [];
	encats.forEach(i => {
		if (!lcats.includes(i)) missingCategories.push(i);
	});

	// How would you even type this???
	const encommands = encats.map(i => English[i]).reduce((acc, cur) => Object.assign(acc, cur), {});
	const lcommands = lcats.map(i => lang[i]).reduce((acc, cur) => Object.assign(acc, cur), {});
	const enckeys = Object.keys(encommands);
	const lckeys = Object.keys(lcommands);

	/** @type {Array<string>} */
	const missingCommands = [];
	enckeys.forEach(i => {
		if (!lckeys.includes(i)) missingCommands.push(i);
	});

	/** @type {Array<[string, string]>} */
	const missingCommandPrompts = [];
	/** @type {Array<[string, string]>} */
	const missingCommandReturns = [];

	for (const command of enckeys) {
		if (!lcommands[command]) continue;
		/** @type {import("@amanda/lang").LangCommand} */
		const encmd = encommands[command];
		/** @type {import("@amanda/lang").LangCommand} */
		const lcmd = encommands[command];

		if (encmd.prompts) {
			Object.keys(encmd.prompts).forEach(i => {
				if (lcmd.prompts && !lcmd.prompts[i]) missingCommandPrompts.push([command, i]);
			});
		}
		if (encmd.returns) {
			Object.keys(encmd.returns).forEach(i => {
				if (lcmd.returns && !lcmd.returns[i]) missingCommandReturns.push([command, i]);
			});
		}
	}

	console.log(`Stat for ${langcode}\n\n\nMissing Categories:\n${missingCategories.length > 0 ? missingCategories.join(", ") : "None"}\n\nMissing Commands:\n${missingCommands.length > 0 ? missingCommands.join(", ") : "None"}\n\nMissing Command Prompts:\n${missingCommandPrompts.length > 0 ? missingCommandPrompts.map(i => `${i[1]} in ${i[0]}`).join(", ") : "None"}\n\nMissing Command Returns:\n${missingCommandReturns.length > 0 ? missingCommandReturns.map(i => `${i[1]} in ${i[0]}`).join(", ") : "None"}\n\n\n`);
}
