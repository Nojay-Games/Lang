/**
 * Export properties are keyed by *CommandGroup* names.
 * Each *CommandGroup* consists of an *Object* filled with *LangCommand*s keyed by command names.
 * A *LangCommand* consists of *Object*s of `prompts` and `returns` and also an *Object* describing it's help meta data.
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
	error: "API did not return any data.",
	dm: {
		success: "I sent you a DM.",
		fail: "you must allow me to DM you for that command to work. Either you've blocked me, or you need to turn on DMs in this server. (server settings → privacy → allow direct messages).",
		blocked: "I couldn't DM that person. Maybe they've blocked me, or maybe they need to turn on DMs in a shared server."
	},
	command: {
		dmOnly: "this command can only be used in DMs.",
		guildOnly: "this command does not work in DMs.",
		permPre: "I don't have permission to",
		permPost: "I work best when I have all of the permissions I've asked for when inviting me. Please modify my permissions.",
		input: {
			invalid: "that is not a valid",
			insufficient: "you do not have that many"
		}
	},
	emoji: {
		discoin: "<a:Discoin:422523472128901140>"
	}
};

module.exports = {
	admin: {
		evaluate: {
			help: {
				usage: "<code>",
				description: "Executes arbitrary JavaScript in the process"
			},
			prompts: {
				noInput: "You didn't provide any input to evaluate, silly."
			},
			returns: {}
		},
		execute: {
			help: {
				usage: "<code>",
				description: "Executes a shell operation"
			},
			prompts: {
				noInput: "You didn't provide anything to execute, silly."
			},
			returns: {}
		},
		award: {
			help: {
				usage: "<amount> <user>",
				description: "Awards a specific user"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidAmount: `%username, ${generic.command.input.invalid} amount to award.`,
				invalidUser: `%username, ${generic.command.input.invalid} user.`,
				dmFailed: generic.dm.blocked
			},
			returns: {
				channel: "%mention1 has awarded %number Discoins to %mention2",
				dm: `%mention has awarded you %number ${generic.emoji.discoin}`
			}
		}
	},

	gambling: {
		slot: {
			help: {
				usage: "[amount: number|all|half]",
				description: "Runs a random slot machine for a chance at Discoins"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} attach files. ${generic.command.permPost}`,
				invalidBet: `%username, ${generic.command.input.invalid} bet.`,
				betSmall: `%username, you must bet at least 2 ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} Discoins.`
			},
			returns: {
				lost: `Sorry. You didn't get a match. You lost %number ${generic.emoji.discoin}`,
				triple: `A triple. You won %number ${generic.emoji.discoin}`,
				heart1: `A single :heart: You won %number ${generic.emoji.discoin}`,
				heart2: `Wow! Double :heart: You won %number ${generic.emoji.discoin}`,
				heart3: `WOAH! Triple :heart: You won %number ${generic.emoji.discoin}`
			}
		},
		flip: {
			help: {
				usage: "None",
				description: "Flips a coin"
			},
			prompts: {},
			returns: {}
		},
		betflip: {
			help: {
				usage: "<amount: number|all|half> [h|t]",
				description: "Place a bet on a random flip for a chance of Discoins"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidBetandSide: "%username, you need to provide a bet and a side to bet on.",
				invalidBet: `%username, ${generic.command.input.invalid} bet.`,
				betSmall: `%username, you must bet at least 1 ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} Discoins.`,
				invalidSide: "%username, that is not a valid side to bet on."
			},
			returns: {
				autoChoose: "You didn't choose a side, so I picked one for you:",
				guess: "You guessed %string1 I flipped %string2",
				win: `You guessed it! You got %number ${generic.emoji.discoin}`,
				lost: `Sorry but you didn't guess correctly. Better luck next time.`
			}
		},
		coins: {
			help: {
				usage: "[user]",
				description: "Returns the amount of Discoins you or another user has"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidUser: `%username, ${generic.command.input.invalid} user.`,
			},
			returns: {
				coins: `Coins for %display`
			}
		},
		daily: {
			help: {
				usage: "None",
				description: "A daily command that gives a random amount of Discoins",
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				cooldown: "%username, your daily coins will refresh in %number.",
			},
			returns: {
				claimed: `%username claimed their daily and got %number ${generic.emoji.discoin}`
			}
		},
		leaderboard: {
			help: {
				usage: "[page]",
				description: "Gets the leaderboard for people with the most coins"
			},
			prompts: {},
			returns: {}
		},
		give: {
			help: {
				usage: "<amount: number|all|half> <user>",
				description: "Gives discoins to a user from your account"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidAmountandUser: "%username, you have to provide an amount to give and then a user.",
				invalidUser: `%username, ${generic.command.input.invalid} user.`,
				cannotGiveSelf: "You can't give coins to yourself, silly.",
				invalidGift: `%username, ${generic.command.input.invalid} gift.`,
				giftSmall: `%username, you must give at least 1 ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} Discoins.`,
				dmFailed: generic.dm.blocked
			},
			returns: {
				channel: "%mention1 has given %number Discoins to %mention2",
				dm: `%mention has given you %number ${generic.emoji.discoin}`
			}
		},
		wheel: {
			help: {
				usage: "[amount: number|all|half]",
				description: "A Wheel of Fortune for a chance at making more Discoins"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} attach files. ${generic.command.permPost}`,
				invalidAmountWheel: "%username, you need to provide an amount to spin the wheel with",
				betSmall: `%username, you must bet at least 1 ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} Discoins.`,
				invalidAmount: `%username, ${generic.command.input.invalid} amount.`,
			},
			returns: {
				winnings: `%tag bet %number1 Discoins and got %number2 back ${generic.emoji.discoin}`
			}
		}
	},

	games: {
		trivia: {
			help: {
				usage: "[category]",
				description: "Play a game of trivia with other members and win Discoins"
			},
			prompts: {
				categorySelect: "To select a category, use `&trivia <category name>`.",
				dm: "%username, I've sent you a DM with the list of categories.",
				noCategory: "%username, I found no categories with that name. Use `&trivia categories` for the complete list of categories.",
				multipleCategories: "%username, there are multiple categories with that name: %string",
				gameInProgress: "%username, there's a game already in progress for this channel.",
				APIError: "There was an error from the api",
				parsingError: "There was an error parsing the data returned by the api",
				permissionDenied: `${generic.command.permPre} add reactions`
			},
			returns: {}
		},
		minesweeper: {
			help: {
				usage: "[easy|medium|hard] [--raw] [--size:number]",
				description: "Starts a game of minesweeper using the Discord spoiler system"
			},
			prompts: {},
			returns: {
				info: `%difficulty -- %number1 bombs, %number2 x %number2 board`,
				error: "The minimum size is 4 and the max is 14. Bounds have been adjusted to normals",
				rawTooLarge: "The raw content exceeded the 2000 character limit. Consider using a smaller board size"
			}
		}
	},

	interaction: {
		ship: {
			help: {
				usage: "<user 1> <user 2>",
				description: "Ships two people"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} attach files. ${generic.command.permPost}`,
				invalidUsers: `%username, you need to provide two users as arguments`,
				invalidUser1: `%username: the first member provided was not found`,
				invalidUser2: `%username, the second member provided was not found`,
				selfShip: "%username, you can't ship someone with themselves, silly",
			},
			returns: {
				rating: "Aww. I'd rate %display1 and %display2 being together a %percentage%"
			}
		},
		waifu: {
			help: {
				usage: "[user]",
				description: "Gets the waifu information about yourself or a user"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				price: "Price:",
				claimedBy: "Claimed By:",
				gifts: "Gifts:"
			}
		},
		claim: {
			help: {
				usage: "<amount: number|all|half> <user>",
				description: "Claims someone as a waifu. Requires Discoins"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				badFormat: "%username, the correct format is `&claim <amount> <user>`. Amount comes first, user comes last.",
				invalidUser: `%username, ${generic.command.input.invalid} user.`,
				selfClaim: "%username, you can't claim yourself, silly",
				moneyInsufficient: `%username, ${generic.command.input.insufficient} Discoins.`,
				claimSmall: `%username, you must claim someone with at least 1 ${generic.emoji.discoin}`,
				claimedByOther: `%username, this person has already been claimed by somebody else, for a higher price. You'll need to spend at least %number Discoins to steal them.`,
				doubleClaim: "%username, you've already claimed that person as your waifu. If you'd like to increase their price, use `&gift <amount>`",
				dmFailed: generic.dm.blocked
			},
			returns: {
				claimed: `%mention1 has claimed %mention2 for %number ${generic.emoji.discoin}`,
				dm: `%mention has claimed you for %number ${generic.emoji.discoin}`
			}
		},
		divorce: {
			help: {
				usage: "[reason]",
				description: "Divorces a user"
			},
			prompts: {
				noWaifu: "%username, you don't even have a waifu to divorce, silly",
				dmFailed: generic.dm.blocked
			},
			returns: {
				divorced: "%tag1 has filed for a divorce from %tag2 with %reason",
				dm: "%tag has filed for a divorce from you with %reason"
			}
		},
		gift: {
			help: {
				usage: "<amount: number|all|half>",
				description: "Gifts an amount of Discoins towards your waifu's price"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				noWaifu: "%username, you don't even have a waifu to gift Discoins to, silly",
				noGift: "%username, you didn't provide a gift amount",
				moneyInsufficient: `%username, ${generic.command.input.insufficient} Discoins.`,
				invalidGift: `%username, ${generic.command.input.invalid} gift.`,
				giftSmall: `%username, you must gift someone at least 1 ${generic.emoji.discoin}`
			},
			returns: {
				gifted: "%tag2 has gifted %number Discoins towards %tag2's price"
			}
		},
		bean: {
			help: {
				usage: "<user>",
				description: "Beans a user"
			},
			prompts: {
				guildOnly: "%username, you can't bean someone in DMs, silly",
				invalidUser: `%username, ${generic.command.input.invalid} user.`,
				selfBean: "%username, you can't bean yourself, silly"
			},
			returns: {
				beaned: "%tag has been banned!"
			}
		}
	},

	meta: {
		invite: {
			help: {
				usage: "None",
				description: "Add Amanda to a server"
			},
			prompts: {},
			returns: {
				invited: "I've been invited?",
				notice: "Remember, you need **manage server** permissions to be able to add bots to a server."
			}
		},
		info: {
			help: {
				usage: "None",
				description: "Displays information about Amanda"
			},
			prompts: {},
			returns: {
				thanks: "Thank you for choosing me as your companion! :heart:\nHere's a little bit of info about me...",
				creators: "Creators:",
				links: "Visit Amanda's [website](%website) or her [support server](https://discord.gg/zhthQjH)\nWanna donate? Check out her [Patreon](https://www.patreon.com/papiophidian) or make a 1 time donation through [PayPal](https://paypal.me/papiophidian)."
			}
		},
		donate: {
			help: {
				usage: "None",
				description: "Get information on how to donate"
			},
			prompts: {},
			returns: {
				intro: "Thinking of donating? ❤",
				description: "I'm excited that you're interested in supporting my creators!"
				+"\n\nIf you're interested in making monthly donations, you can do so on [Patreon](https://www.patreon.com/papiophidian),"
				+" or if you'd like to make a one time donation, you can donate through [PayPal](https://paypal.me/papiophidian)."
				+"\n\nAll money donated will go back into development."
				+"\nAccess to Amanda's features will not change regardless of your choice,"
				+" but you will recieve a donor role in our [Support Server](https://discord.gg/zhthQjH)"
				+" and get a distinguishing donor badge on &profile."
			}
		},
		
	}
};
