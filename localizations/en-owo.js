const genewic = {
	error: "API did not weturn any dwata.",
	dm: {
		success: "I sent yowo a DM. (✿◠‿◠)",
		fail: "yowo must awwow me to DM yowo for dat command to work. Either yowo've bwocked me, or yowo need to twurn on DMs in dis server. (server settings → pwivacy → awwow direct mwessages). ┐(‘～`；)┌",
		blocked: "I cowoldn't DM dat person. Maybe dey bwocked me, or maybe dey need to turn on DMs in a shared server. (◕︵◕)"
	},
	command: {
		dmOnly: "dis command can owonly be used in DMs. (⊙︿⊙✿)",
		guildOnly: "dis command does not work in DMs. (⊙︿⊙✿)",
		permPre: "I dowon't have permwission to",
		permPost: "I work best when I have aww of da permissions I've asked for when inviting me. Pwease mwodify my permissions. (●\´ω\｀●)",
		input: {
			invalid: "dat is not a vawid",
			insufficient: "yowo do not have dat many"
		}
	},
	image: {
		dm: "Why would yowo want to %action someone in DMs?",
		noUser: "Yowo have to tell me who yowo wanna %action"
	},
	emoji: {
		discoin: "<a:Discoin:422523472128901140>"
	}
}

module.exports = {
	admin: {
		evaluate: {
			help: {
				usage: "<cowode>",
				description: "Executes awbitwawy JavaScwipt in the pwocess"
			},
			prompts: {
				noInput: "Yowo didn't pwovide any input to evaluate, baka. (>.<)"
			},
			returns: {}
		},
		execute: {
			help: {
				usage: "<cowode>",
				description: "Executes a shell opewation"
			},
			prompts: {
				noInput: "Yowo didn't pwovide anything to execute, baka. (>.<)"
			},
			returns: {}
		},
		award: {
			help: {
				usage: "<amount> <user>",
				description: "Awards a specific user"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				invalidAmount: `%username, ${genewic.command.input.invalid} amount towo award.`,
				invalidUser: `%username, ${genewic.command.input.invalid} user, baka.`,
				dmFailed: genewic.dm.blocked
			},
			returns: {
				channel: "%mention1 has awarded %number amandollars towo %mention2",
				dm: `%mention has awarded yowo %number ${genewic.emoji.discoin}`
			}
		},
		forcestatusupdate: {
			help: {
				usage: "None",
				description: "Forces the current shard to send statistic data to da database"
			},
			prompts: {},
			returns: {}
		},
		restartnotify: {
			help: {
				usage: "None",
				description: "Notifies you when Amanda is onwine again"
			},
			prompts: {},
			returns: {
				confirmation: "Awight. Yowou'll be notified of the next time I westart"
			}
		}
	},

	gambling: {
		slot: {
			help: {
				usage: "[amount: numbwer|all|half]",
				description: "Wuns a wandom swot machine for a chance at amandollars"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				permissionDenied: `${genewic.command.permPre} atwach files. ${genewic.command.permPost}`,
				invalidBet: `%username, ${genewic.command.input.invalid} bet, baka`,
				betSmall: `%username, yowo must bet at weast 2 ${genewic.emoji.discoin}`,
				moneyInsufficient: `%username, ${genewic.command.input.insufficient} amandollars.`
			},
			returns: {
				lost: `Sowwy. Yowo didn't get a mwatch. Yowo wost %number ${genewic.emoji.discoin} (*\´д\｀*)`,
				triple: `A twiple. Yowo won %number ${genewic.emoji.discoin}`,
				heart1: `A single :heart: Yowo won %number ${genewic.emoji.discoin}`,
				heart2: `Wow! Double :heart: Yowo won %number ${genewic.emoji.discoin}`,
				heart3: `WOAH! Twiple :heart: Yowo won %number ${genewic.emoji.discoin}`
			}
		},
		flip: {
			help: {
				usage: "None",
				description: "Fwips a coin"
			},
			prompts: {},
			returns: {
				flip: "You fwipped %flip"
			}
		},
		betflip: {
			help: {
				usage: "<amount: numbwer|all|half> [h|t]",
				description: "Place a bet on a random flip for a chance of amandollars"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				invalidBetandSide: "%username, yowo need to provide a bet and a side to bet on, baka",
				invalidBet: `%username, ${genewic.command.input.invalid} bet.`,
				betSmall: `%username, yowo must bet at least 1 ${genewic.emoji.discoin}`,
				moneyInsufficient: `%username, ${genewic.command.input.insufficient} amandollars.`,
				invalidSide: "%username, that is not a valid side to bet on."
			},
			returns: {
				autoChoose: "Yowo didn't choose a side (>.<), so I picked one for yowo:",
				guess: "Yowo guessed %string1 I fwipped %string2",
				win: `Yowo guessed it! You got %number ${genewic.emoji.discoin} (\´･ω･\`)`,
				lost: `Sowwy but yowo didn't guess cowwectly. Better wuck next time. (*\´д\｀*)`
			}
		},
		coins: {
			help: {
				usage: "[user]",
				description: "Weturns the amount of amandollars yowo or another user has"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				invalidUser: `%username, ${genewic.command.input.invalid} user, baka`,
			},
			returns: {
				coins: `amandollars for %display`
			}
		},
		daily: {
			help: {
				usage: "None",
				description: "A daiwy command that gives a wandom amount of amandollars",
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				cooldown: "%username, yowor daiwy amandollars will wefwesh in %number. (⊙﹏⊙✿)",
			},
			returns: {
				claimed: `%username cwaimed their daily and got %number ${genewic.emoji.discoin} ヽ(\´▽\｀)ノ`
			}
		},
		leaderboard: {
			help: {
				usage: "[local] [page: number]",
				description: "Gets the leaderboard for people with the most amandollars"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				pageLimit: "%username, you may owonly browose up to page %maxPages.",
				pageCurrent: "Page %current of %total"
			},
			returns: {
				emptyPage: "There are onwy %lastPage pages to browose thwoogh."
			}
		},
		give: {
			help: {
				usage: "<amount: numbwer|all|half> <user>",
				description: "Gives amandollars towo a user from ur account"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				invalidAmountandUser: "%username, yowo have to pwovide an amowont towo give and den a user.",
				invalidUser: `%username, ${genewic.command.input.invalid} user, baka.`,
				cannotGiveSelf: "Yowo can't give amandollars to urself, baka. ˇ︿ˇ",
				invalidGift: `%username, ${genewic.command.input.invalid} gift ヾ(ﾟдﾟ)ﾉ`,
				giftSmall: `%username, yowo must give at weast 1 ${genewic.emoji.discoin}`,
				moneyInsufficient: `%username, ${genewic.command.input.insufficient} amandollars.`,
				dmFailed: genewic.dm.blocked
			},
			returns: {
				channel: "%mention1 has given %number amandollars to %mention2 (\´･ω･\`)",
				dm: `%mention has given yowo %number ${genewic.emoji.discoin}`
			}
		},
		wheel: {
			help: {
				usage: "[amount: numbwer|all|half]",
				description: "A Wheel of Fortune for a chance at making more amandollars uwu"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				permissionDenied: `${genewic.command.permPre} attach fwiles. ${genewic.command.permPost}`,
				invalidAmountWheel: "%username, yowo need to pwovide an amount to spin da wheel with (\´ヘ｀()",
				betSmall: `%username, yowo must bet at weast 1 ${genewic.emoji.discoin}`,
				moneyInsufficient: `%username, ${genewic.command.input.insufficient} amandollars.`,
				invalidAmount: `%username, ${genewic.command.input.invalid} amount.`,
			},
			returns: {
				winnings: `%tag bet %number1 amandollars and got %number2 back ${genewic.emoji.discoin} owo`
			}
		}
	},

	games: {
		trivia: {
			help: {
				usage: "[categowy]",
				description: "Pway a game of twivia with other members and win amandollars"
			},
			prompts: {
				categorySelect: "To sewect a category, use `&trivia <category name>`.",
				dm: "%username, I've sent yowo a DM with da list of categowies (\`･ω･´)",
				noCategory: "%username, I found no categowies with that name ┐(‘～`；)┌ Use `&trivia categories` for da compwete wist of categowies.",
				multipleCategories: "%username, dere are multipwe categowies with dat name (◑○◑): %string ",
				gameInProgress: "%username, dere's a game awready in pwogress for dis channel, baka",
				APIError: "dere was an ewwow from da api (´･_･\`)",
				parsingError: "dere was an ewwow parsing da data weturned by da api (´･_･\`)",
				permissionDenied: `${genewic.command.permPre} add reactions`,
				provideAnswer: "To answer, type a letter in chat. You have 20 seconds.",
				reactionRound: "Click the reaction for another round.",
				permissionRound: "You can type \`&trivia\` or \`&t\` for another round.",
				winners: "Winners",
				noWinners: "No Winners",
				nextRound: "Next Round",
				categories: "Categories",
				dmError: genewic.dm.fail
			},
			returns: {}
		},
		minesweeper: {
			help: {
				usage: "[easy|medium|hard] [--raw] [--size:numbwer]",
				description: "Starts a game of minesweeper using da Discord spowoiler system"
			},
			prompts: {},
			returns: {
				info: `%difficulty -- %number1 boom booms, %number2 x %number3 bowoard`,
				error: "da minimum size is 4 and da max is 14. Da bowoard has been adjusted (=゜ω゜)",
				rawTooLarge: "Da raw content exceeded the 2000 character limit (◎_◎;) Pwease use a smaller bowoard size"
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
				description: "Ships two people uwu"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				permissionDenied: `${genewic.command.permPre} attach files. ${genewic.command.permPost}`,
				invalidUsers: `%username, yowo need to pwovide towo users as arguments`,
				invalidUser1: `%username: da first member provided was not found ( ・◇・)？`,
				invalidUser2: `%username, the second member provided was not found ◔_◔`,
				selfShip: "%username, yowo can't ship someone with themselves, siwwy biwwy",
			},
			returns: {
				rating: "OWO. I'd rate %display1 and %display2 being together a %percentage%"
			}
		},
		waifu: {
			help: {
				usage: "[user]",
				description: "Gets da waifu information about yoworself or a user"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				invalidUser: `%username, ${genewic.command.input.invalid} user ヾ(ﾟдﾟ)ﾉ`
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
				description: "Dispways the weaderboawd of the top waifus~"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				pageLimit: "%username, you may owonly browose up to page %maxPages."
			},
			returns: {
				emptyPage: "There are onwy %lastPage pages to browose thwoogh.",
				claimEntry: `%user1 claimed %user2 for %price ${genewic.emoji.discoin}`,
				pageCurrent: "Page %current of %total"
			}
		},
		claim: {
			help: {
				usage: "<amowount: numbwer|all|half> <user>",
				description: "Claims someone as a waifu uwu. Requires amandollars"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				badFormat: "%username, da cowwect format is `&claim <amount> <user>`. Amount comes first, user comes last.",
				invalidUser: `%username, ${genewic.command.input.invalid} user ( ﾟдﾟ)`,
				selfClaim: "%username, yowo can't cwaim yoworself, siwwy biwwy >.<",
				moneyInsufficient: `%username, ${genewic.command.input.insufficient} amandollars.`,
				claimSmall: `%username, yowo must cwaim someone with at least 1 ${genewic.emoji.discoin}`,
				claimedByOther: `%username, dis person has already been claimed by somebody else, for a higher price (╯°□°）╯︵ ┻━┻ You'll need to spend at weast %number amandollars to steal them.`,
				doubleClaim: "%username, yowo've already cwaimed dat person as yowor waifu. If yowo'd wike to increase deir pwice, use `&gift <amount>`",
				dmFailed: genewic.dm.blocked
			},
			returns: {
				claimed: `%mention1 has cwaimed %mention2 for %number ${genewic.emoji.discoin}`,
				dm: `%mention has cwaimed yowo for %number ${genewic.emoji.discoin}`
			}
		},
		divorce: {
			help: {
				usage: "[reason]",
				description: "Divorces a user (≖︿≖✿)"
			},
			prompts: {
				noWaifu: "%username, yowo don't even have a waifu to divorce, siwwy biwwy",
				dmFailed: genewic.dm.blocked
			},
			returns: {
				divorced: "%tag1 has fiwed for a divorce fwom %tag2 with %reason",
				dm: "%tag has fiwed for a divorce fwom yowo with %reason"
			}
		},
		gift: {
			help: {
				usage: "<amwount: numbwer|all|half>",
				description: "Gifts an amwount of amandollars towoards yowor waifu's price"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				noWaifu: "%username, yowo don't even have a waifu to gift amandollars to, baka",
				noGift: "%username, yowo didn't pwovide a gift amount (◕︿◕✿)",
				moneyInsufficient: `%username, ${genewic.command.input.insufficient} amandollars.`,
				invalidGift: `%username, ${genewic.command.input.invalid} gift.`,
				giftSmall: `%username, yowo must gift someone at weast 1 ${genewic.emoji.discoin}`
			},
			returns: {
				gifted: "%tag1 has gifted %number amandollars towoards %tag2's pwice"
			}
		},
		bean: {
			help: {
				usage: "<user>",
				description: "Beans a user "
			},
			prompts: {
				guildOnly: "%username, yowo can't bean someone in DMs, baka",
				invalidUser: `%username, ${genewic.command.input.invalid} user ( ﾟдﾟ)`,
				selfBean: "%username, yowo can't bean yoworself, silly"
			},
			returns: {
				beaned: "%tag has been banned! (=゜ω゜)"
			}
		},
		hug: {
			help: {
				usage: "<user>",
				description: "Hugs someone"
			},
			prompts: {
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
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
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
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
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
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
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
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
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
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
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
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
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
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
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
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
				songsToday: "**❯ Songs played today:**\n%number songs",
				songsQueued: "**❯ Song queued:**\n%number songs",
				voiceConnections: "**❯ Voice connections:**\n%number connections",
				usersListening: "**❯ Users listening:**\n%number users",
				gamesToday: "**❯ Games played today:**\n%number games",
				gamesInProgress: "**❯ Games in progress:**\n%number games",
				usersPlaying: "**❯ Users Playing:**\n%number users",
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
				description: "Add Amanda to a server owo"
			},
			prompts: {},
			returns: {
				invited: "I've been invited?",
				link: "Invite link: %link",
				notice: "Wemember, yowo need **manage server** permwissions to be able to add bots to a server."
			}
		},
		info: {
			help: {
				usage: "None",
				description: "Displays information about Amanda"
			},
			prompts: {},
			returns: {
				thanks: "Thank yowo for choosing me as yowor companion! :heart:\nHere's a wittle bit of info about me...",
				creators: "Cweators",
				links: "Visit Amanda's [website](%website) or her [support server](%server)\nWanna donate? Check out her [Patreon](%patreon) or mwake a 1 time donation thwough [PayPal](%paypal).\nWanna see Amanda's gwowth over time? You can [here](%stats)"
			}
		},
		donate: {
			help: {
				usage: "None",
				description: "Get information on how to donate"
			},
			prompts: {},
			returns: {
				intro: "Thinking of donating? owo ❤",
				description: "I'm excited that yowo're interested in supporting my cweators!"
				+"\n\nIf yowo're interested in mwaking monthwy donations, yowo can do so on [Patreon](%patreon),"
				+" or if yowo'd wike to make a one time donation, yowo can donate thwough [PayPal](%paypal)."
				+"\n\nAww money donated will go back into devewopment."
				+"\nAccess to Amanda's features will not change regardwess of yowor choice,"
				+" but yowo will wecieve a donor role in our [Support Server](%server)"
				+" and get a distingwishing donor badge on &profile."
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
				dmSuccess: genewic.dm.success
			},
			returns: {} // intentionally empty as Privacy policies might not translate properly and may have different implications
		},
		user: {
			help: {
				usage: "[user]",
				description: "Provides information about a user"
			},
			prompts: {
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
			},
			returns: {}
		},
		avatar: {
			help: {
				usage: "[user]",
				description: "Gets a user's avatar"
			},
			prompts: {
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
			},
			returns: {}
		},
		icon: {
			help: {
				usage: "None",
				description: "Gets a server's icon"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`
			}
		},
		wumbo: {
			help: {
				usage: "<emoji>",
				description: "Makes an emoji bigger"
			},
			prompts: {
				invalidEmoji: `%username, ${genewic.command.input.invalid} emoji.`
			},
			returns: {}
		},
		profile: {
			help: {
				usage: "[user]",
				description: "Gets profile information about a user"
			},
			prompts: {
				invalidUser: `%username, ${genewic.command.input.invalid} user.`,
				permissionDenied: `${genewic.command.permPre} attach files. ${genewic.command.permPost}`
			},
			returns: {}
		},
		help: {
			help: {
				usage: "[Command|Categowy]",
				description: "Your avewage hewp command"
			},
			prompts: {
				invalidCommand: "**%tag**, I couldn't find the help pwanel for that command"
			},
			returns: {
				footer: "Type `&help [command]` to see more infowmation about a command",
				mobile: "Cwick the weaction for a mobile-compwatible view",
				main: "Type `&help [categowy]` to see all commands in that categowy."
				+ "\nType `&help [command]` to see more infowmation about a command.",
				info: "Type `&info` to see general information about Amanda.\nFor more, join our support server: %link"
			}
		}
	},

	audio: {
		token: {
			help: {
				usage: "[new|delete]",
				description: "Obtain a web dashboawd wogin token"
			},
			prompts: {
				dmFailed: genewic.dm.fail,
				none: "Yowo do not cuwwently have any tokens. Use `&musictoken new` to genewate a new one."
			},
			returns: {
				dmSuccess: genewic.dm.success,
				deleted: "Deweted aww your tokens. Use `&musictoken new` to genewate a new one.",
				new: "Yowor existing tokens were deweted, and a new one was cweated."
				+"\nDo not shawe this token with anyone. If you do accidentawwy shawe it, you can use `&musictoken delete` to dewete it and keep you safe."
				+"\nYowo can now wog in! %website",
				generated: "Here is the token yowo genewated pweviously:"
				+"\nYowo can use `&musictoken delete` to dewete it, and `&musictoken new` to wegenewate it."
			}
		},
		frisky: {
			help: {
				usage: "[original|deep|chill|classics]",
				description: "Pway Frisky Radio: https://friskyradio.com"
			},
			prompts: {},
			returns: {
				schedule: "Frisky Radio ­— Schedule",
				footer: "Use &frisky [station] to pway a station"
			}
		},
		music: {
			help: {
				usage: "None. You're not supposed to see this.",
				description: "None. You're not supposed to see this."
			},
			prompts: {
				guildOnly: genewic.command.guildOnly,
				invalidSkips: "That is not a vawid amount of songs to skip",
				invalidSkipsAmount: "Yowo have to skip 1 or more songs",
				tooManySkips: "Yowo cannot skip mowe songs than are in the queue!",
				invalidAction: "%username, that's not a vawid action. If yowo want to pway something, try `&music play <song>`.\nCheck out `&help music` and `&help playlists` for more things yowo can do!",
				nothingPlaying: "%username, nothing is cuwwently pwaying.",
				noResults: "No results.",
				voiceChannelRequired: "%username, yoow need to join a voice channel to do that.",
				voiceCantJoin: "%username, I don't have permission to join yowor voice channel.",
				voiceCantSpeak: "%username, I don't have permission to speak in yowor voice channel.",
				playableRequired: "%username, please pwovide either a YouTube video wink or some words for me to search for.",
				youtubeRequired: "%username, please pwovide a YouTube wink or video ID.",
				queueCannotDo: "The cuwwent queue cannot be %action at this time.",
				voiceChannelWaiting: "%username, yowo need to join a voice channel to do that. Waiting for yowo to connect...",
				songSelection: "Song sewection",
				songSelectionCanceled: "Song sewection cancelled",
				totalLength: "Total wength: %number",
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
				queueClear: "Cweared the queue, removing %number",
				queueIn: "The cuwwent music session is over in %channel. Go there to see what's pwaying!"
			}
		},
		playlist: {
			help: {
				usage: "None. You're not supposed to see this.",
				description: "None. You're not supposed to see this."
			},
			prompts: {
				playFromStart: "Pway the entire pwaywist from the start",
				playFromLinked: "Pway the pwaywist, starting at the winked song",
				playOnlyLinked: "Only pway the winked song",
				userLinked: "Yowo winked to this song in the pwaywist: %title",
				query: "What would yowo wike to do?",
				selectionInfo: "To pway a more specific wange from the pwaywist, use `&music play <link> <start> <end>`. See `&help playlist` for mowe information.",
				playlistNameRequired: "%username, yowo must name a pwaywist. Use `&music playlists show` to show aww pwaywists.",
				directPlaylist: "%username, yowo can pway a pwaywist diwectly! Just pass it to \`&music play\` like so:"
				+"%info\n\n\n\nIf you stiww want to import a pwaywist into Amanda, you must give it a fwiendly name first, like `bobs_songs`.",
				playlistNameLimit: "%username, the pwaywist name must be 24 characters or wess.",
				playlistNotExist: "%username, That pwaywist does not exist. Use \`&music playlist %playlist create\` to cweate it.",
				databaseFixed: "%username, The database entwies for that pwaywist are inconsistent. The inconsistencies have been wesolved by wesetting the order of the songs in that pwaywist. Apart fwom the song order, no data was wost. Other pwaywists were not affected.",
				usePlaylistAdd: "Do not use pwaywist importing with `playlist add`. Use `playlist import` instead",
				youtubeLinkInvalid: "%username, That is not a vawid YouTube wink",
				indexRequired: "%username, Pwease pwovide the index of the item to wemove",
				indexMoveRequired: "%username, Pwease pwovide an index to move from and an index to move to.",
				playlistNotOwned: "%username, yowo do not own that pwaywist and so, yowo cannot modify it.",
				playlistDuplicateSong: "%username, that song is alweady in the pwaywist.",
				indexesEqual: "%username, Those two indexes are eqwal.",
				playlistEmpty: "That pwaywist is empty. Add some songs with `&music playlist %playlist add <song>`!",
				playlistImporting: "Importing pwaywist. This could take a moment...\n(Fetching song info)",
				playlistImportAllExisting: "%username, all videos in that pwaywist have already been imported.",
				playlistImportingDatabase: "Importing pwaywist. This could take a moment...\n(Updating database)",
				playlistDeleteConfirm: "This action will permanently dewete the pwaywist `%playlist`. "
				+ "After dewetion, yowo will not be able to pway, dispway, or modify the pwaywist, and anyone will be able to create a new pwaywist with the same name."
				+ "\nYowo will not be abwe to undo this action.\n\n"
				+ "<:bn_del:331164186790854656> - confirm dewetion\n"
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
				playlistAdded: "%username, Added **%song** to pwaywist **%playlist**",
				playlistRemoved: "%username, Wemoved **%song** from pwaywist **%playlist**",
				playlistCreated: "%username, Cweated pwaywist **%playlist**",
				playlistImportDone: "All done! Check out yowor pwaywist with **&music playlist %playlist**.",
				playlistDeleted: "Pwaywist deweted.",
				playlistDeleteCancelled: "Playlist deletion cancelled",
				playlistMoved: "%username, Moved **%song** to position **%index**",
				bulkDone: "All done! I won't add anything else to the playlist.",
				bulkMenuGone: "(There used to be a menu here, but it's gone now.)"
			}
		},
		debug: {
			help: {
				usage: "[Channel]",
				description: "Pwovides debugging infowmation for if audio commands are not working as intended"
			},
			prompts: {
				guildOnly: "You cannot debug music in a DM channel",
				invalidChannel: "Channel not fwound"
			},
			returns: {
				tip: "Tip:",
				tipValue: "On top of Wead Message and Add Weaction permissions, bots must also have Wead Message History permissions to add weactions to messages",
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
				description: "Modify settings Amanda will use for yoursewf or server wide"
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
