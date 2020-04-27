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
	image: {
		dm: "Why would you want to %action someone in DMs?",
		noUser: "You have to tell me who you wanna %action"
	},
	emoji: {
		discoin: "<a:Discoin:422523472128901140>"
	}
}

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
				channel: "%mention1 has awarded %number amandollars to %mention2",
				dm: `%mention has awarded you %number ${generic.emoji.discoin}`
			}
		},
		forcestatusupdate: {
			help: {
				usage: "None",
				description: "Forces the current shard to send statistic data to the database"
			},
			prompts: {},
			returns: {}
		},
		restartnotify: {
			help: {
				usage: "None",
				description: "Notifies you when Amanda is online again"
			},
			prompts: {},
			returns: {
				confirmation: "Alright. You'll be notified of the next time I restart"
			}
		}
	},

	gambling: {
		slot: {
			help: {
				usage: "[amount: number|all|half]",
				description: "Runs a random slot machine for a chance at amandollars"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} attach files. ${generic.command.permPost}`,
				invalidBet: `%username, ${generic.command.input.invalid} bet.`,
				betSmall: `%username, you must bet at least 2 ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`
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
			returns: {
				flip: "You flipped %flip"
			}
		},
		betflip: {
			help: {
				usage: "<amount: number|all|half> [h|t]",
				description: "Place a bet on a random flip for a chance of amandollars"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidBetandSide: "%username, you need to provide a bet and a side to bet on.",
				invalidBet: `%username, ${generic.command.input.invalid} bet.`,
				betSmall: `%username, you must bet at least 1 ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
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
				description: "Returns the amount of amandollars you or another user has"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidUser: `%username, ${generic.command.input.invalid} user.`,
			},
			returns: {
				coins: `amandollars for %display`
			}
		},
		daily: {
			help: {
				usage: "None",
				description: "A daily command that gives a random amount of amandollars",
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				cooldown: "%username, your daily amandollars will refresh in %number.",
			},
			returns: {
				claimed: `%username claimed their daily and got %number ${generic.emoji.discoin}`
			}
		},
		leaderboard: {
			help: {
				usage: "[local] [page: number]",
				description: "Gets the leaderboard for people with the most amandollars"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				pageLimit: "%username, you may only browse up to page %maxPages.",
				pageCurrent: "Page %current of %total"
			},
			returns: {
				emptyPage: "There are only %lastPage pages to browse through."
			}
		},
		give: {
			help: {
				usage: "<amount: number|all|half> <user>",
				description: "Gives amandollars to a user from your account"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidAmountandUser: "%username, you have to provide an amount to give and then a user.",
				invalidUser: `%username, ${generic.command.input.invalid} user.`,
				cannotGiveSelf: "You can't give amandollars to yourself, silly.",
				invalidGift: `%username, ${generic.command.input.invalid} gift.`,
				giftSmall: `%username, you must give at least 1 ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				dmFailed: generic.dm.blocked
			},
			returns: {
				channel: "%mention1 has given %number amandollars to %mention2",
				dm: `%mention has given you %number ${generic.emoji.discoin}`
			}
		},
		wheel: {
			help: {
				usage: "[amount: number|all|half]",
				description: "A Wheel of Fortune for a chance at making more amandollars"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} attach files. ${generic.command.permPost}`,
				invalidAmountWheel: "%username, you need to provide an amount to spin the wheel with",
				betSmall: `%username, you must bet at least 1 ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				invalidAmount: `%username, ${generic.command.input.invalid} amount.`,
			},
			returns: {
				winnings: `%tag bet %number1 amandollars and got %number2 back ${generic.emoji.discoin}`
			}
		}
	},

	games: {
		trivia: {
			help: {
				usage: "[category]",
				description: "Play a game of trivia with other members and win amandollars"
			},
			prompts: {
				categorySelect: "To select a category, use `&trivia <category name>`.",
				dm: "%username, I've sent you a DM with the list of categories.",
				noCategory: "%username, I found no categories with that name. Use `&trivia categories` for the complete list of categories.",
				multipleCategories: "%username, there are multiple categories with that name: %string",
				gameInProgress: "%username, there's a game already in progress for this channel.",
				APIError: "There was an error from the api",
				parsingError: "There was an error parsing the data returned by the api",
				permissionDenied: `${generic.command.permPre} add reactions`,
				provideAnswer: "To answer, type a letter in chat. You have 20 seconds.",
				reactionRound: "Click the reaction for another round.",
				permissionRound: "You can type \`&trivia\` or \`&t\` for another round.",
				winners: "Winners",
				noWinners: "No Winners",
				nextRound: "Next Round",
				categories: "Categories",
				dmError: generic.dm.fail
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
				info: `%difficulty -- %number1 bombs, %number2 x %number3 board`,
				error: "The minimum size is 4 and the max is 14. Bounds have been adjusted to normals",
				rawTooLarge: "The raw content exceeded the 2000 character limit. Consider using a smaller board size"
			}
		}
	},

	images: {
		cat: {
			help: {
				usage: "None",
				description: "Sends an image of a cat"
			},
			prompts: {},
			returns: {}
		},
		dog: {
			help: {
				usage: "None",
				description: "Sends an image of a dog"
			},
			prompts: {},
			returns: {}
		},
		space: {
			help: {
				usage: "None",
				description: "Sends an image of space"
			},
			prompts: {},
			returns: {}
		},
		snek: {
			help: {
				usage: "None",
				description: "Sends an image of a snek"
			},
			prompts: {},
			returns: {}
		},
		birb: {
			help: {
				usage: "None",
				description: "Sends an image of a birb"
			},
			prompts: {},
			returns: {}
		},
		catgirl: {
			help: {
				usage: "None",
				description: "Sends an image of a neko girl"
			},
			prompts: {},
			returns: {
				error: "Uh oh.",
				offline: "Looks like the nekos.life API is currently offline."
				+ "\nWe aren't able to fetch new pictures at the moment."
				+ "\nHere's a sleepy catgirl while we wait for it to come back online."
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
				waifu: "Waifu:",
				gifts: "Gifts:",
				nobody: "(nobody)",
				none: "(none)"
			}
		},
		waifuleaderboard: {
			help: {
				usage: "[local] [page: number]",
				description: "Displays the leaderboard of the top waifus"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				pageLimit: "%username, you may only browse up to page %maxPages."
			},
			returns: {
				emptyPage: "There are only %lastPage pages to browse through.",
				claimEntry: `%user1 claimed %user2 for %price ${generic.emoji.discoin}`,
				pageCurrent: "Page %current of %total"
			}
		},
		claim: {
			help: {
				usage: "<amount: number|all|half> <user>",
				description: "Claims someone as a waifu. Requires amandollars"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				badFormat: "%username, the correct format is `&claim <amount> <user>`. Amount comes first, user comes last.",
				invalidUser: `%username, ${generic.command.input.invalid} user.`,
				selfClaim: "%username, you can't claim yourself, silly",
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				claimSmall: `%username, you must claim someone with at least 1 ${generic.emoji.discoin}`,
				claimedByOther: `%username, this person has already been claimed by somebody else, for a higher price. You'll need to spend at least %number amandollars to steal them.`,
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
				description: "Gifts an amount of amandollars towards your waifu's price"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				noWaifu: "%username, you don't even have a waifu to gift amandollars to, silly",
				noGift: "%username, you didn't provide a gift amount",
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				invalidGift: `%username, ${generic.command.input.invalid} gift.`,
				giftSmall: `%username, you must gift someone at least 1 ${generic.emoji.discoin}`
			},
			returns: {
				gifted: "%tag1 has gifted %number amandollars towards %tag2's price"
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
		},
		hug: {
			help: {
				usage: "<user>",
				description: "Hugs someone"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				amanda: "**Hugs %username back** :heart:",
				action: "%username hugged %mention"
			}
		},
		nom: {
			help: {
				usage: "<user>",
				description: "Noms someone"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				amanda: "owie",
				action: "%username nommed %mention"
			}
		},
		kiss: {
			help: {
				usage: "<user>",
				description: "Kisses someone"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				amanda: "**Kisses %username back** :heart:",
				action: "%username kissed %mention"
			}
		},
		cuddle: {
			help: {
				usage: "<user>",
				description: "Cuddles someone"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				amanda: "**Cuddles %username back** :heart:",
				action: "%username cuddled %mention"
			}
		},
		poke: {
			help: {
				usage: "<user>",
				description: "Pokes someone"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				amanda: "Dun poke me ; ^ ;",
				action: "%username poked %mention"
			}
		},
		slap: {
			help: {
				usage: "<user>",
				description: "Slaps someone"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				amanda: "**Slaps %username back** That hurt me ; ^ ;",
				action: "%username slapped %mention"
			}
		},
		boop: {
			help: {
				usage: "<user>",
				description: "Boops someone"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				amanda: "Dun boop me ; ^ ;",
				action: "%username booped %mention"
			}
		},
		pat: {
			help: {
				usage: "<user>",
				description: "Pats someone"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				amanda: "≥ w ≤",
				action: "%username patted %mention"
			}
		}
	},

	meta: {
		statistics: {
			help: {
				usage: "[music|games]",
				description: "Displays detailed statistics for nerds"
			},
			prompts: {
				slow: "Ugh. I hate it when I'm slow, too"
			},
			returns: {
				songsToday: "**❯ Songs played today:**\n%number",
				songsQueued: "**❯ Song queued:**\n%number",
				voiceConnections: "**❯ Voice connections:**\n%number",
				usersListening: "**❯ Users listening:**\n%number",
				gamesToday: "**❯ Games played today:**\n%number",
				gamesInProgress: "**❯ Games in progress:**\n%number",
				usersPlaying: "**❯ Users Playing:**\n%number",
				heartbeat: "Heartbeat",
				latency: "Latency",
				uptime: "Uptime",
				ramUsage: "RAM usage",
				userCount: "**❯ User count:**\n%number",
				guildCount: "**❯ Server count:**\n%number",
				channelCount: "**❯ Channel count:**\n%number",
			}
		},
		ping: {
			help: {
				usage: "None",
				description: "What do you think this does?"
			},
			prompts: {},
			returns: {
				pong: "Pong!",
				heartbeat: "❯ Heartbeat",
				latency: "❯ Latency",
				footer: "W-Wait... It's called table tennis"
			}
		},
		invite: {
			help: {
				usage: "None",
				description: "Add Amanda to a server"
			},
			prompts: {},
			returns: {
				invited: "I've been invited?",
				link: "Invite link: %link",
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
				creators: "Creators",
				links: "Visit Amanda's [website](%website) or her [support server](%server)\nWanna donate? Check out her [Patreon](%patreon) or make a 1 time donation through [PayPal](%paypal).\nWanna see Amanda's growth over time? You can [here](%stats)"
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
				+"\n\nIf you're interested in making monthly donations, you can do so on [Patreon](%patreon),"
				+" or if you'd like to make a one time donation, you can donate through [PayPal](%paypal)."
				+"\n\nAll money donated will go back into development."
				+"\nAccess to Amanda's features will not change regardless of your choice,"
				+" but you will recieve a donor role in our [Support Server](%server)"
				+" and get a distinguishing donor badge on &profile."
			}
		},
		commits: {
			help: {
				usage: "None",
				description: "Gets the latest git commits to Amanda"
			},
			prompts: {},
			returns: {}
		},
		privacy: {
			help: {
				usage: "None",
				description: "Details Amanda's privacy statement"
			},
			prompts: {
				dmSuccess: generic.dm.success
			},
			returns: {} // intentionally empty as Privacy policies might not translate properly and may have different implications
		},
		user: {
			help: {
				usage: "[user]",
				description: "Provides information about a user"
			},
			prompts: {
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {}
		},
		avatar: {
			help: {
				usage: "[user]",
				description: "Gets a user's avatar"
			},
			prompts: {
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {}
		},
		icon: {
			help: {
				usage: "None",
				description: "Gets a server's icon"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`
			}
		},
		wumbo: {
			help: {
				usage: "<emoji>",
				description: "Makes an emoji bigger"
			},
			prompts: {
				invalidEmoji: `%username, ${generic.command.input.invalid} emoji.`
			},
			returns: {}
		},
		profile: {
			help: {
				usage: "[user]",
				description: "Gets profile information about a user"
			},
			prompts: {
				invalidUser: `%username, ${generic.command.input.invalid} user.`,
				permissionDenied: `${generic.command.permPre} attach files. ${generic.command.permPost}`
			},
			returns: {}
		},
		help: {
			help: {
				usage: "[Command|Category]",
				description: "Your average help command"
			},
			prompts: {
				invalidCommand: "**%tag**, I couldn't find the help panel for that command"
			},
			returns: {
				footer: "Type `&help [command]` to see more information about a command",
				mobile: "Click the reaction for a mobile-compatible view",
				main: "Type `&help [category]` to see all commands in that category."
				+ "\nType `&help [command]` to see more information about a command.",
				info: "Type `&info` to see general information about Amanda.\nFor more, join our support server: %link"
			}
		}
	},

	audio: {
		token: {
			help: {
				usage: "[new|delete]",
				description: "Obtain a web dashboard login token"
			},
			prompts: {
				dmFailed: generic.dm.fail,
				none: "You do not currently have any tokens. Use `&musictoken new` to generate a new one."
			},
			returns: {
				dmSuccess: generic.dm.success,
				deleted: "Deleted all your tokens. Use `&musictoken new` to generate a new one.",
				new: "Your existing tokens were deleted, and a new one was created."
				+"\nDo not share this token with anyone. If you do accidentally share it, you can use `&musictoken delete` to delete it and keep you safe."
				+"\nYou can now log in! %website",
				generated: "Here is the token you generated previously:"
				+"\nYou can use `&musictoken delete` to delete it, and `&musictoken new` to regenerate it."
			}
		},
		frisky: {
			help: {
				usage: "[original|deep|chill|classics]",
				description: "Play Frisky Radio: https://friskyradio.com"
			},
			prompts: {},
			returns: {
				schedule: "Frisky Radio ­— Schedule",
				footer: "Use &frisky [station] to play a station"
			}
		},
		music: {
			help: {
				usage: "None. You're not supposed to see this.",
				description: "None. You're not supposed to see this."
			},
			prompts: {
				guildOnly: generic.command.guildOnly,
				invalidSkips: "That is not a valid amount of songs to skip",
				invalidSkipsAmount: "You have to skip 1 or more songs",
				tooManySkips: "You cannot skip more songs than are in the queue!",
				invalidAction: "%username, that's not a valid action. If you want to play something, try `&music play <song>`.\nCheck out `&help music` and `&help playlists` for more things you can do!",
				nothingPlaying: "%username, nothing is currently playing.",
				noResults: "No results.",
				voiceChannelRequired: "%username, you need to join a voice channel to do that.",
				voiceCantJoin: "%username, I don't have permission to join your voice channel.",
				voiceCantSpeak: "%username, I don't have permission to speak in your voice channel.",
				playableRequired: "%username, please provide either a YouTube video link or some words for me to search for.",
				youtubeRequired: "%username, please provide a YouTube link or video ID.",
				queueCannotDo: "The current queue cannot be %action at this time.",
				voiceChannelWaiting: "%username, you need to join a voice channel to do that. Waiting for you to connect...",
				songSelection: "Song selection",
				songSelectionCanceled: "Song selection cancelled",
				totalLength: "Total length: %number",
				queueFor: "Queue for %server",
				everyoneLeft: "Everyone left, so I have as well.",
				songNotPlayingDiscord: "Hmm. Seems like the song isn't playing."
				+ "\n\n**This is probably an issue with Discord.**"
				+ "\nYou should try changing the server region."
				+ "\n\nTo report a problem, join our server: https://discord.gg/YMkZDsK",
				songErrorExclaimation: "`song.track` is ! placeholder. This is a bug.",
				songErrorNull: "`song.track` is null or undefined. This is a bug.",
				songNotPlayable: "We couldn't play that song",
				errorOccured: "We ran into an error",
				songErrorNotObject: "Song is not an object %song",
				tooManyErrors: "Too many errors!",
				errorsSuppressed: "Future errors from this queue will be silenced."
				+ "\nIf any more songs fail, they will be skipped with no message."
				+ "\nTo report a bug, join our server: https://discord.gg/YMkZDsK",
				autoRanOut: "Auto mode is on, but we ran out of related songs and had to stop playback.",
				queueAlreadyPaused: "Music is already paused. Use `&music resume` to resume.",
				queueNowPlaying: "Now Playing: %song",
				noUsersLeft: "No users left in my voice channel. I will stop playing in %time seconds if nobody rejoins.",
				autoOn: "Auto mode is now turned on.",
				autoOff: "Auto mode is now turned off.",
				loopOn: "Loop mode is now turned on.",
				loopOff: "Loop mode is now turned off.",
				musicPlaying: "Music is playing. If you want to pause, use `&music pause`.",
				songRemoveRequired: "You need to tell me which song to remove. `&music queue remove <number>`"
				+ "\nTo clear the entire queue, use `&music queue clear` or `&music queue remove all`.",
				songRemove1: "Item 1 is the currently playing song. Use `&music skip` to skip it, "
				+ "or `&music queue remove 2` if you wanted to remove the song that's up next.",
				queueSongTotal: "There are %number1 items in the queue. You can only remove items 2-%number2.",
				numberNotInRelated: "The number you typed isn't an item in the related list. Try `&music related`."
			},
			returns: {
				queueClear: "Cleared the queue, removing %number",
				queueIn: "The current music session is over in %channel. Go there to see what's playing!"
			}
		},
		playlist: {
			help: {
				usage: "None. You're not supposed to see this.",
				description: "None. You're not supposed to see this."
			},
			prompts: {
				playFromStart: "Play the entire playlist from the start",
				playFromLinked: "Play the playlist, starting at the linked song",
				playOnlyLinked: "Only play the linked song",
				userLinked: "You linked to this song in the playlist: %title",
				query: "What would you like to do?",
				selectionInfo: "To play a more specific range from the playlist, use `&music play <link> <start> <end>`. See `&help playlist` for more information.",
				playlistNameRequired: "%username, you must name a playlist. Use `&music playlists show` to show all playlists.",
				directPlaylist: "%username, you can play a playlist directly! Just pass it to \`&music play\` like so:"
				+"%info\n\n\n\nIf you still want to import a playlist into Amanda, you must give it a friendly name first, like `bobs_songs`.",
				playlistNameLimit: "%username, the playlist name must be 24 characters or less.",
				playlistNotExist: "%username, That playlist does not exist. Use \`&music playlist %playlist create\` to create it.",
				databaseFixed: "%username, The database entries for that playlist are inconsistent. The inconsistencies have been resolved by resetting the order of the songs in that playlist. Apart from the song order, no data was lost. Other playlists were not affected.",
				usePlaylistAdd: "Do not use playlist importing with `playlist add`. Use `playlist import` instead",
				youtubeLinkInvalid: "%username, That is not a valid YouTube link",
				indexRequired: "%username, Please provide the index of the item to remove",
				indexMoveRequired: "Please provide an index to move from and an index to move to.",
				playlistNotOwned: "%username, you do not own that playlist and so cannot modify it.",
				playlistDuplicateSong: "%username, that song is already in the playlist.",
				indexesEqual: "%username, Those two indexes are equal.",
				playlistEmpty: "That playlist is empty. Add some songs with `&music playlist %playlist add <song>`!",
				playlistImporting: "Importing playlist. This could take a moment...\n(Fetching song info)",
				playlistImportAllExisting: "%username, all videos in that playlist have already been imported.",
				playlistImportingDatabase: "Importing playlist. This could take a moment...\n(Updating database)",
				playlistDeleteConfirm: "This action will permanently delete the playlist `%playlist`. "
				+ "After deletion, you will not be able to play, display, or modify the playlist, and anyone will be able to create a new playlist with the same name."
				+ "\nYou will not be able to undo this action.\n\n"
				+ "<:bn_del:331164186790854656> - confirm deletion\n"
				+ "<:bn_ti:327986149203116032> - ignore",
				bulkListening: "Okay, I'm listening",
				bulkDescription: "» Type anything to add it to the playlist."
				+ `\n» Commands starting with \`%prefix\` will only run the command.`
				+ "\n» Type `undo` to remove the last item in the playlist.\u2002🧹"
				+ "\n» Type `stop` when you're done. You can keep adding things until you type `stop`.\u2002🛑",
				outOfRange: "Out of range.",
				playlistSection: "Playlist section",
				bulkMenuOpen: "You already have a menu open in here. Type `stop` to stop it.",
				playlistPages: "Page %number of %total"
			},
			returns: {
				playlistAdded: "%username, Added **%song** to playlist **%playlist**",
				playlistRemoved: "%username, Removed **%song** from playlist **%playlist**",
				playlistCreated: "%username, Created playlist **%playlist**",
				playlistImportDone: "All done! Check out your playlist with **&music playlist %playlist**.",
				playlistDeleted: "Playlist deleted.",
				playlistDeleteCancelled: "Playlist deletion cancelled",
				playlistMoved: "%username, Moved **%song** to position **%index**",
				bulkDone: "All done! I won't add anything else to the playlist.",
				bulkMenuGone: "(There used to be a menu here, but it's gone now.)"
			}
		},
		debug: {
			help: {
				usage: "[Channel]",
				description: "Provides debugging information for if audio commands are not working as intended"
			},
			prompts: {
				guildOnly: "You cannot debug music in a DM channel",
				invalidChannel: "Channel not found"
			},
			returns: {
				tip: "Tip:",
				tipValue: "On top of Read Message and Add Reaction permissions, bots must also have Read Message History permissions to add reactions to messages",
				unnamedNode: "an unnamed node",
				queueUsing: "However, the current queue is using %name",
				infoFor: "Debugging info for %channel",
				permissions: "Permissions:",
				method: "Method:"
			}
		}
	},

	configuration: {
		settings: {
			help: {
				usage: "<self|server> <view|setting name> [value]",
				description: "Modify settings Amanda will use for yourself or server wide"
			},
			prompts: {
				cantModifyInDM: "You cannot modify a server's settings if you don't use the command in a server",
				backgroundRecommended: "Recommended to be a 800x500px png/jpeg",
				invalidSyntaxScope: "Command syntax is `&settings <scope> <name> <value>`. Your value for `scope` was incorrect, it must be either `self` or `server`.",
				noSettings: "There are no settings set for scope %scope",
				manageServer: "You must have either the Manage Server or Administrator permission to modify Amanda's settings on this server.",
				invalidSyntaxName: "Command syntax is `&settings %usage`. Your value for `name` was incorrect, it must be one of: %settings",
				invalidSettingScope: "The setting `%setting` is not valid for the scope `%scope`.",
				currentValueServer: "Current value of `%setting` is `%value`. This value was set for the server.",
				currentValueInherited: "Current value of `%setting` is not set in this server, so it inherits the default value, which is `%value`.",
				noBackground: "You didn't have a profile background image. No action was taken.",
				donorRequired: "You must be a donor to modify this setting.",
				invalidLink: "There was an error trying to fetch the data from the link provided. Please make sure the link is valid.",
				invalidLangCode: "%username, that is not a valid or supported language code. Supported language codes are %codes",
				invalidSyntaxBoolean: "Command syntax is `&settings <scope> <name> <value>`. The setting `%setting` is a boolean, and so your `%value` must be either `true` or `false`.",
				tooLong: "That setting value is too long. It must not be more than 50 characters."
			},
			returns: {
				updated: "Setting updated.",
				deleted: "Setting deleted."
			}
		},
		background: {
			help: {
				usage: "<url>",
				description: "Set the background displayed on &profile"
			},
			prompts: {},
			returns: {}
		}
	}
};
