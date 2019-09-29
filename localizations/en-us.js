/**
 * Export properties are keyed by *CommandGroup* names.
 * Each *CommandGroup* consists of an *Object* filled with *LangCommand*s keyed by command names.
 * A *LangCommand* consists of *Array*s of `prompts` and `returns` and also an *Object* describing it's help meta data.
 *
 * Sub commands of Amanda cannot be modified because of the nature of the code. Example: `&music skip` where "skip"
 * cannot be modified. We might add this functionality at a later date. Most likely not.
 *
 * When describing the types of a command argument, those can be modified. Example: `"usage": "<code>"` where code
 * can be changed if applicable.
 *
 * Wild Cards are a concept used in this module. They are delimited by the percent symbol (%) and tell the code to
 * substitute the words connected to it with information which can only be retrieved by the code because it's dynamic
 *
 * Directly below this statement should be an *Object* titled generic. This contains generic phrases as to not repeat typing.
 * Some languages may not support the same fluidity English has so having this is optional. Just as long as the statement
 * ends up making sense to someone reading it from Discord.
 */
undefined;

const generic = {
	"error": "API did not return any data.",
	"dm": {
		"success": "I sent you a DM.",
		"fail": "you must allow me to DM you for that command to work. Either you've blocked me, or you need to turn on DMs in this server. (server settings → privacy → allow direct messages)."
	},
	"command": {
		"dmOnly": "this command can only be used in DMs.",
		"guildOnly": "this command does not work in DMs.",
		"permPre": "I don't have permission to",
		"permPost": "I work best when I have all of the permissions I've asked for when inviting me. Please modify my permissions.",
		"input": {
			"invalid": "that is not a valid",
			"insufficient": "you do not have that many"
		}
	},
	"emoji": {
		"discoin": "<a:Discoin:422523472128901140>"
	}
};

module.exports = {
	"admin": {
		"evaluate": {
			"help": {
				"usage": "<code>",
				"description": "Executes arbitrary JavaScript in the process"
			},
			"prompts": [
				"You didn't provide any input to evaluate, silly."
			],
			"returns": []
		},
		"execute": {
			"help": {
				"usage": "<code>",
				"description": "Executes a shell operation"
			},
			"prompts": [
				"You didn't provide anything to execute, silly."
			],
			"returns": []
		},
		"award": {
			"help": {
				"usage": "<amount> <user>",
				"description": "Awards a specific user"
			},
			"prompts": [
				`%username, ${generic.command.dmOnly}`,
				`%username, ${generic.command.input.invalid} amount to award.`,
				`%username, ${generic.command.input.invalid} user.`
			],
			"returns": [
				"%mention1 has awarded $number Discoins to %mention2",
				`%mention has awarded you $number ${generic.emoji.discoin}`
			]
		}
	},

	"gambling": {
		"slot": {
			"help": {
				"usage": "[amount: number|all|half]",
				"description": "Runs a random slot machine for a chance at Discoins"
			},
			"prompts": [
				`%username, ${generic.command.dmOnly}`,
				`${generic.command.permPre} attach files. ${generic.command.permPost}`,
				`%username, ${generic.command.input.invalid} bet.`,
				`%username, you must bet at least 2 ${generic.emoji.discoin}`,
				`%username, ${generic.command.input.insufficient} Discoins.`
			],
			"returns": [
				`Sorry. You didn't get a match. You lost %number ${generic.emoji.discoin}`,
				`A triple. You won %number ${generic.emoji.discoin}`,
				`A single :heart: You won %number ${generic.emoji.discoin}`,
				`Wow! Double :heart: You won %number ${generic.emoji.discoin}`,
				`WOAH! Triple :heart: You won %number ${generic.emoji.discoin}`
			]
		},
		"flip": {
			"help": {
				"usage": "None",
				"description": "Flips a coin"
			},
			"prompts": [],
			"returns": []
		},
		"betflip": {
			"help": {
				"usage": "<amount: number|all|half> [h|t]",
				"description": "Place a bet on a random flip for a chance of Discoins"
			},
			"prompts": [
				`%username, ${generic.command.dmOnly}`,
				"%username, you need to provide a bet and a side to bet on.",
				`%username, ${generic.command.input.invalid} bet.`,
				`%username, you must bet at least 1 ${generic.emoji.discoin}`,
				`%username, ${generic.command.input.insufficient} Discoins.`,
				"%username, that is not a valid side to bet on."
			],
			"returns": [
				"You didn't choose a side, so I picked one for you:",
				"You guessed %string1 I flipped %string2",
				`You guessed it! You got %number ${generic.emoji.discoin}`,
				`Sorry but you didn't guess correctly. Better luck next time.`
			]
		},
		"coins": {
			"help": {
				"usage": "[user]",
				"description": "Returns the amount of Discoins you or another user has"
			},
			"prompts": [
				`%username, ${generic.command.dmOnly}`,
				`%username, ${generic.command.input.invalid} user.`,
			],
			"returns": [
				`Coins for %display`
			]
		},
		"daily": {
			"help": {
				"usage": "None",
				"description": "A daily command that gives a random amount of Discoins",
			},
			"prompts": [
				`%username, ${generic.command.dmOnly}`,
				"%username, your daily coins will refresh in %number.",
			],
			"returns": [
				`%username claimed their daily and got %number ${generic.emoji.discoin}`
			]
		},
		"leaderboard": {
			"help": {
				"usage": "[page]",
				"description": "Gets the leaderboard for people with the most coins"
			},
			"prompts": [],
			"returns": []
		},
		"give": {
			"help": {
				"usage": "<amount: number|all|half> <user>",
				"description": "Gives discoins to a user from your account"
			},
			"prompts": [
				`%username, ${generic.command.dmOnly}`,
				"%username, you have to provide an amount to give and then a user.",
				`%username, ${generic.command.input.invalid} user.`,
				"You can't give coins to yourself, silly.",
				`%username, ${generic.command.input.invalid} gift.`,
				`%username, you must give at least 1 ${generic.emoji.discoin}`,
				`%username, ${generic.command.input.insufficient} Discoins.`,
			],
			"returns": [
				"%mention1 has given %number Discoins to %mention2",
				`%mention has given you %number ${generic.emoji.discoin}`
			]
		},
		"wheel": {
			"help": {
				"usage": "[amount: number|all|half]",
				"description": "A Wheel of Fortune for a chance at making more Discoins"
			},
			"prompts": [
				`%username, ${generic.command.dmOnly}`,
				`${generic.command.permPre} attach files. ${generic.command.permPost}`,
				"%username, you need to provide an amount to spin the wheel with",
				`%username, you must bet at least 1 ${generic.emoji.discoin}`,
				`%username, ${generic.command.input.insufficient} Discoins.`,
				`%username, ${generic.command.input.invalid} amount.`,
			],
			"returns": [
				`%username bet %number1 Discoins and got %number2 back ${generic.emoji.discoin}`
			]
		}
	}
};