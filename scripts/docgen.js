const fs = require("fs");
const path = require("path");

const typings = path.join(__dirname, "../", "typings");

const en_us = require("../localizations/en-us");

/** @type {Object.<string, Array<{ code: string, name: string }>>} */
const translators = {
	PapiOphidian: [{ code: "en_us", name: "English (United States)" }, { code: "en_owo", name: "English (owo)" }],
	Jamie: [{ code: "es", name: "Spanish" }],
	Nojay: [{ code: "nl", name: "Dutch" }],
	"The Blue Goat": [{ code: "pl", name: "Polish" }]
}

const noWildcardsThree = `			/**\n			 * No Wildcards.\n			 */`;
const usernameWildcardsThree = `			/**\n			 * Wildcards:\n			 *\n			 * %username - string.\n			 */`;

const types = {
	CommandHelp: "	export type CommandHelp = {\n		usage: string;\n		description: string;\n	};",
	LangCommand: "	export type LangCommand = {\n		help: CommandHelp;\n		prompts: {\n			[key: string]: string;\n		},\n		returns: {\n			[key: string]: string;\n		}\n	}",
	InteractionCommand: `	export type InteractionCommand = {\n		help: CommandHelp;\n		prompts: {\n${noWildcardsThree}\n			dm: string;\n${noWildcardsThree}\n			noUser: string;\n${usernameWildcardsThree}\n			invalidUser: string;\n		};\n		returns: {\n${usernameWildcardsThree}\n			amanda: string;\n			/**\n			 * Wildcards:\n			 *\n			 * %username - string.\n			 *\n			 * %mention - string.\n			 */\n			action: string;\n		};\n	};`
}


let typestring = "declare module '@amanda/lang' {\n\n";

const transkeys = Object.keys(translators);

for (const u of transkeys) {
	const user = translators[u];

	user.forEach((cur) => typestring += `	/**\n	 * ${cur.name}\n	 *\n	 * Written by ${u}.\n	 */\n	export const ${cur.code}: Lang;\n`);
}

typestring += "\n	export type Lang = {";

/** @type {Array<keyof import("@amanda/lang").Lang>} */
// @ts-ignore
const categories = Object.keys(en_us);

for (const cat of categories) {
	const commands = en_us[cat];
	const commandKeys = Object.keys(commands);

	typestring += `\n\n		${cat}: {\n`;

	for (const cmd of commandKeys) {
		/** @type {import("@amanda/lang").LangCommand} */
		const command = commands[cmd];

		typestring += `			${cmd}: {\n				help: CommandHelp;\n				prompts: {\n`;

		const promptKeys = Object.keys(command.prompts);
		for (const pk of promptKeys) {
			const prompt = command.prompts[pk];
			typestring += `					${pk}: "${prompt.replace(/`/gm, "\`").replace(/\r|\n|\\r|\\n|\r\n|\\r\\n/gm, "\\n")}";\n`;
		}

		typestring += "				};\n				returns: {\n";

		const returnKeys = Object.keys(command.returns);
		for (const rk of returnKeys) {
			const r = command.returns[rk];
			typestring += `					${rk}: "${r.replace(/`/gm, "\`").replace(/\r|\n|\\r|\\n|\r\n|\\r\\n/gm, "\\n")}";\n`;
		}

		typestring += "				};\n			};\n";
	}

	typestring += "		};";
}

typestring += `	};\n\n${types.CommandHelp}\n\n${types.LangCommand}\n\n${types.InteractionCommand}\n}\n`;

fs.writeFileSync(`${typings}/index.d.ts`, typestring, { encoding: "utf8" });

console.log("Done generating docs");
