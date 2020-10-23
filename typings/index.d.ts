declare module '@amanda/lang' {

	/**
	 * English (United States)
	 *
	 * Written by PapiOphidian.
	 */
	export const en_us: Lang;
	/**
	 * English (owo)
	 *
	 * Written by PapiOphidian.
	 */
	export const en_owo: Lang;
	/**
	 * Spanish
	 *
	 * Written by Jamie.
	 */
	export const es: Lang;
	/**
	 * Dutch
	 *
	 * Written by Nojay.
	 */
	export const nl: Lang;
	/**
	 * Polish
	 *
	 * Written by The Blue Goat.
	 */
	export const pl: Lang;

	export type Lang = {

		admin: {
			evaluate: {
				help: CommandHelp;
				prompts: {
					noInput: "You didn't provide any input to evaluate, silly.";
				};
				returns: {
				};
			};
			execute: {
				help: CommandHelp;
				prompts: {
					noInput: "You didn't provide anything to execute, silly.";
				};
				returns: {
				};
			};
			award: {
				help: CommandHelp;
				prompts: {
					guildOnly: "%username, this command does not work in DMs.";
					invalidAmount: "%username, that is not a valid amount to award.";
					invalidUser: "%username, that is not a valid user.";
					dmFailed: "I couldn't DM that person. Maybe they've blocked me, or maybe they need to turn on DMs in a shared server.";
				};
				returns: {
					channel: "%mention1 has awarded %number amandollars to %mention2";
					dm: "%mention has awarded you %number <a:Discoin:422523472128901140>";
				};
			};
			forcestatusupdate: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
				};
			};
			restartnotify: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
					confirmation: "Alright. You'll be notified of the next time I restart";
				};
			};
		};

		gambling: {
			slot: {
				help: CommandHelp;
				prompts: {
					guildOnly: "%username, this command does not work in DMs.";
					permissionDenied: "I don't have permission to attach files. I work best when I have all of the permissions I've asked for when inviting me. Please modify my permissions.";
					invalidBet: "%username, that is not a valid bet.";
					betSmall: "%username, you must bet at least 2 <a:Discoin:422523472128901140>";
					moneyInsufficient: "%username, you do not have that many amandollars.";
				};
				returns: {
					lost: "Sorry. You didn't get a match. You lost %number <a:Discoin:422523472128901140>";
					triple: "A triple. You won %number <a:Discoin:422523472128901140>";
					heart1: "A single :heart: You won %number <a:Discoin:422523472128901140>";
					heart2: "Wow! Double :heart: You won %number <a:Discoin:422523472128901140>";
					heart3: "WOAH! Triple :heart: You won %number <a:Discoin:422523472128901140>";
				};
			};
			flip: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
					flip: "You flipped %flip";
				};
			};
			betflip: {
				help: CommandHelp;
				prompts: {
					guildOnly: "%username, this command does not work in DMs.";
					invalidBetandSide: "%username, you need to provide a bet and a side to bet on.";
					invalidBet: "%username, that is not a valid bet.";
					betSmall: "%username, you must bet at least 1 <a:Discoin:422523472128901140>";
					moneyInsufficient: "%username, you do not have that many amandollars.";
					invalidSide: "%username, that is not a valid side to bet on.";
				};
				returns: {
					autoChoose: "You didn't choose a side, so I picked one for you:";
					guess: "You guessed %string1 I flipped %string2";
					win: "You guessed it! You got %number <a:Discoin:422523472128901140> %explanation";
					lost: "Sorry, you didn't guess correctly. You lost %number <a:Discoin:422523472128901140>.";
				};
			};
			coins: {
				help: CommandHelp;
				prompts: {
					guildOnly: "%username, this command does not work in DMs.";
					invalidUser: "%username, that is not a valid user.";
				};
				returns: {
					coins: "amandollars for %display";
				};
			};
			daily: {
				help: CommandHelp;
				prompts: {
					guildOnly: "%username, this command does not work in DMs.";
					cooldown: "%username, your daily amandollars will refresh in %number.";
				};
				returns: {
					claimed: "%username claimed their daily and got %number <a:Discoin:422523472128901140>";
				};
			};
			leaderboard: {
				help: CommandHelp;
				prompts: {
					guildOnly: "%username, this command does not work in DMs.";
					pageLimit: "%username, you may only browse up to page %maxPages.";
					pageCurrent: "Page %current of %total";
				};
				returns: {
					emptyPage: "There are only %lastPage pages to browse through.";
				};
			};
			give: {
				help: CommandHelp;
				prompts: {
					guildOnly: "%username, this command does not work in DMs.";
					invalidAmountandUser: "%username, you have to provide an amount to give and then a user.";
					invalidUser: "%username, that is not a valid user.";
					cannotGiveSelf: "You can't give amandollars to yourself, silly.";
					invalidGift: "%username, that is not a valid gift.";
					giftSmall: "%username, you must give at least 1 <a:Discoin:422523472128901140>";
					moneyInsufficient: "%username, you do not have that many amandollars.";
					dmFailed: "I couldn't DM that person. Maybe they've blocked me, or maybe they need to turn on DMs in a shared server.";
				};
				returns: {
					channel: "%mention1 has given %number amandollars to %mention2";
					dm: "%mention has given you %number <a:Discoin:422523472128901140>";
				};
			};
			wheel: {
				help: CommandHelp;
				prompts: {
					guildOnly: "%username, this command does not work in DMs.";
					permissionDenied: "I don't have permission to attach files. I work best when I have all of the permissions I've asked for when inviting me. Please modify my permissions.";
					invalidAmountWheel: "%username, you need to provide an amount to spin the wheel with";
					betSmall: "%username, you must bet at least 1 <a:Discoin:422523472128901140>";
					moneyInsufficient: "%username, you do not have that many amandollars.";
					invalidAmount: "%username, that is not a valid amount.";
				};
				returns: {
					winnings: "%tag bet %number1 amandollars and got %number2 back <a:Discoin:422523472128901140>";
				};
			};
		};

		games: {
			trivia: {
				help: CommandHelp;
				prompts: {
					categorySelect: "To select a category, use `&trivia <category name>`.";
					dm: "%username, I've sent you a DM with the list of categories.";
					noCategory: "%username, I found no categories with that name. Use `&trivia categories` for the complete list of categories.";
					multipleCategories: "%username, there are multiple categories with that name: %string";
					gameInProgress: "%username, there's a game already in progress for this channel.";
					APIError: "There was an error from the api";
					parsingError: "There was an error parsing the data returned by the api";
					permissionDenied: "I don't have permission to add reactions";
					provideAnswer: "To answer, type a letter in chat. You have 20 seconds.";
					reactionRound: "Click the reaction for another round.";
					permissionRound: "You can type `&trivia` or `&t` for another round.";
					winners: "Winners";
					noWinners: "No Winners";
					nextRound: "Next Round";
					categories: "Categories";
					dmError: "you must allow me to DM you for that command to work. Either you've blocked me, or you need to turn on DMs in this server. (server settings → privacy → allow direct messages).";
				};
				returns: {
				};
			};
			minesweeper: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
					info: "%difficulty -- %number1 bombs, %number2 x %number3 board";
					error: "The minimum size is 4 and the max is 14. Bounds have been adjusted to normals";
					rawTooLarge: "The raw content exceeded the 2000 character limit. Consider using a smaller board size";
				};
			};
		};

		images: {
			cat: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
				};
			};
			dog: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
				};
			};
			space: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
				};
			};
			snek: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
				};
			};
			birb: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
				};
			};
			catgirl: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
					error: "Uh oh.";
					offline: "Looks like the nekos.life API is currently offline.\nWe aren't able to fetch new pictures at the moment.\nHere's a sleepy catgirl while we wait for it to come back online.";
				};
			};
		};

		couples: {
			couple: {
				help: CommandHelp;
				prompts: {
					invalidUser: "%username, that is not a valid user.";
					noInfo: "No couple info.";
				};
				returns: {
					infoFor: "Couple info for %tag1 and %tag2";
					users: "Users";
					balance: "Balance";
				};
			};
			marry: {
				help: CommandHelp;
				prompts: {
					noUser: "%username, you need to provide someone to propose to.";
					invalidUser: "%username, that is not a valid user.";
					selfMarried: "%username, you are already married.";
					userMarried: "%username, %user is already married.";
					selfProposed: "%username, you are already proposed to %tag";
					dmFailed: "I couldn't DM that person. Maybe they've blocked me, or maybe they need to turn on DMs in a shared server.";
				};
				returns: {
					proposed: "%username has successfully proposed to %tag. They can use %accept or %decline to marry or decline.";
					dmProposed: "%tag has proposed to you. You can use %accept or %decline to marry or decline.";
				};
			};
			accept: {
				help: CommandHelp;
				prompts: {
					noUser: "%username, you need to provide someone to accept their proposal.";
					invalidUser: "%username, that is not a valid user.";
					noProposal: "%username, %tag has not proposed to you yet.";
					selfProposed: "%username, you cannot accept your own proposal.";
					selfMarried: "%username, you are already married.";
					userMarried: "%username, %user is already married.";
				};
				returns: {
					married: "%tag1 is now married to %tag2";
				};
			};
			decline: {
				help: CommandHelp;
				prompts: {
					noUser: "%username, you need to provide someone to accept their proposal.";
					invalidUser: "%username, that is not a valid user.";
					noProposal: "%username, %tag has not proposed to you yet.";
					selfProposed: "%username, you cannot decline your own proposal.";
					selfMarried: "%username, you are already married.";
					userMarried: "%username, %user is already married.";
				};
				returns: {
					declines: "%tag1 has declined %tag2's marriage proposal.";
				};
			};
			divorce: {
				help: CommandHelp;
				prompts: {
					notMarried: "%username, you are not married to anyone.";
					dmFailed: "I couldn't DM that person. Maybe they've blocked me, or maybe they need to turn on DMs in a shared server.";
				};
				returns: {
					divorced: "%tag1 has filed for a divorce from %tag2: %reason";
					dm: "%tag has filed for a divorce from you: %reason";
				};
			};
			bank: {
				help: CommandHelp;
				prompts: {
					selfNotMarried: "%username, you are not married to anyone.";
					userNotMarried: "%username, %tag is not married to anyone.";
					dmFailed: "I couldn't DM that person. Maybe they've blocked me, or maybe they need to turn on DMs in a shared server.";
				};
				returns: {
					balance: "Couple balance for %tag1 and %tag2";
				};
			};
			withdraw: {
				help: CommandHelp;
				prompts: {
					notMarried: "%username, you are not married to anyone.";
					noMoney: "%username, there is no amandollars to withdraw.";
					invalidAmount: "%username, that is not a valid amount.";
					amountSmall: "%username, you must provide a number greater than 0.";
					amountLarge: "%username, you cannot withdraw more than what is in the couple balance.";
				};
				returns: {
					success: "%username, successfully transacted %amount to your balance";
				};
			};
			deposit: {
				help: CommandHelp;
				prompts: {
					notMarried: "%username, you are not married to anyone.";
					noMoney: "%username, you do not have any amandollars to deposit.";
					invalidAmount: "%username, that is not a valid amount.";
					amountSmall: "%username, you must provide a number greater than 0.";
					amountLarge: "%username, you do not have that many amandollars.";
				};
				returns: {
					success: "%username, successfully transacted %amount from your balance";
				};
			};
			coupleleaderboard: {
				help: CommandHelp;
				prompts: {
					guildOnly: "%username, this command does not work in DMs.";
					pageLimit: "%username, you may only browse up to page %maxPages.";
				};
				returns: {
					emptyPage: "There are only %lastPage pages to browse through.";
					pageCurrent: "Page %current of %total";
				};
			};
		};

		interaction: {
			ship: {
				help: CommandHelp;
				prompts: {
					guildOnly: "%username, this command does not work in DMs.";
					permissionDenied: "I don't have permission to attach files. I work best when I have all of the permissions I've asked for when inviting me. Please modify my permissions.";
					invalidUsers: "%username, you need to provide two users as arguments";
					invalidUser1: "%username: the first member provided was not found";
					invalidUser2: "%username, the second member provided was not found";
					selfShip: "%username, you can't ship someone with themselves, silly";
				};
				returns: {
					rating: "Aww. I'd rate %display1 and %display2 being together a %percentage%";
				};
			};
			bean: {
				help: CommandHelp;
				prompts: {
					guildOnly: "%username, you can't bean someone in DMs, silly";
					invalidUser: "%username, that is not a valid user.";
					selfBean: "%username, you can't bean yourself, silly";
				};
				returns: {
					beaned: "%tag has been banned!";
				};
			};
			hug: {
				help: CommandHelp;
				prompts: {
					dm: "Why would you want to %action someone in DMs?";
					noUser: "You have to tell me who you wanna %action";
					invalidUser: "%username, that is not a valid user.";
				};
				returns: {
					amanda: "**Hugs %username back** :heart:";
					action: "%username hugged %mention";
				};
			};
			nom: {
				help: CommandHelp;
				prompts: {
					dm: "Why would you want to %action someone in DMs?";
					noUser: "You have to tell me who you wanna %action";
					invalidUser: "%username, that is not a valid user.";
				};
				returns: {
					amanda: "owie";
					action: "%username nommed %mention";
				};
			};
			kiss: {
				help: CommandHelp;
				prompts: {
					dm: "Why would you want to %action someone in DMs?";
					noUser: "You have to tell me who you wanna %action";
					invalidUser: "%username, that is not a valid user.";
				};
				returns: {
					amanda: "**Kisses %username back** :heart:";
					action: "%username kissed %mention";
				};
			};
			cuddle: {
				help: CommandHelp;
				prompts: {
					dm: "Why would you want to %action someone in DMs?";
					noUser: "You have to tell me who you wanna %action";
					invalidUser: "%username, that is not a valid user.";
				};
				returns: {
					amanda: "**Cuddles %username back** :heart:";
					action: "%username cuddled %mention";
				};
			};
			poke: {
				help: CommandHelp;
				prompts: {
					dm: "Why would you want to %action someone in DMs?";
					noUser: "You have to tell me who you wanna %action";
					invalidUser: "%username, that is not a valid user.";
				};
				returns: {
					amanda: "Dun poke me ; ^ ;";
					action: "%username poked %mention";
				};
			};
			slap: {
				help: CommandHelp;
				prompts: {
					dm: "Why would you want to %action someone in DMs?";
					noUser: "You have to tell me who you wanna %action";
					invalidUser: "%username, that is not a valid user.";
				};
				returns: {
					amanda: "**Slaps %username back** That hurt me ; ^ ;";
					action: "%username slapped %mention";
				};
			};
			boop: {
				help: CommandHelp;
				prompts: {
					dm: "Why would you want to %action someone in DMs?";
					noUser: "You have to tell me who you wanna %action";
					invalidUser: "%username, that is not a valid user.";
				};
				returns: {
					amanda: "Dun boop me ; ^ ;";
					action: "%username booped %mention";
				};
			};
			pat: {
				help: CommandHelp;
				prompts: {
					dm: "Why would you want to %action someone in DMs?";
					noUser: "You have to tell me who you wanna %action";
					invalidUser: "%username, that is not a valid user.";
				};
				returns: {
					amanda: "≥ w ≤";
					action: "%username patted %mention";
				};
			};
		};

		meta: {
			statistics: {
				help: CommandHelp;
				prompts: {
					slow: "Ugh. I hate it when I'm slow, too";
				};
				returns: {
					songsToday: "**❯ Songs played today:**\n%number";
					songsQueued: "**❯ Song queued:**\n%number";
					voiceConnections: "**❯ Voice connections:**\n%number";
					usersListening: "**❯ Users listening:**\n%number";
					gamesToday: "**❯ Games played today:**\n%number";
					gamesInProgress: "**❯ Games in progress:**\n%number";
					usersPlaying: "**❯ Users Playing:**\n%number";
					heartbeat: "Heartbeat";
					latency: "Latency";
					uptime: "Uptime";
					ramUsage: "RAM usage";
					userCount: "**❯ User count:**\n%number";
					guildCount: "**❯ Server count:**\n%number";
					channelCount: "**❯ Channel count:**\n%number";
				};
			};
			ping: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
					pong: "Pong!";
					heartbeat: "❯ Heartbeat";
					latency: "❯ Latency";
					footer: "W-Wait... It's called table tennis";
				};
			};
			invite: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
					invited: "I've been invited?";
					link: "Invite link: %link";
					notice: "Remember, you need **manage server** permissions to be able to add bots to a server.";
				};
			};
			info: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
					thanks: "Thank you for choosing me as your companion! :heart:\nHere's a little bit of info about me...";
					creators: "Creators";
					links: "Visit Amanda's [website](%website) or her [support server](%server)\nWanna donate? Check out her [Patreon](%patreon) or make a 1 time donation through [PayPal](%paypal).\nWanna see Amanda's growth over time? You can [here](%stats)";
				};
			};
			donate: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
					intro: "Thinking of donating? ❤";
					description: "I'm excited that you're interested in supporting my creators!\n\nIf you're interested in making monthly donations, you can do so on [Patreon](%patreon), or if you'd like to make a one time donation, you can donate through [PayPal](%paypal).\n\nAll money donated will go back into development.\nAccess to Amanda's features will not change regardless of your choice, but you will recieve a donor role in our [Support Server](%server) and get a distinguishing donor badge on &profile.";
				};
			};
			commits: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
				};
			};
			privacy: {
				help: CommandHelp;
				prompts: {
					dmSuccess: "I sent you a DM.";
				};
				returns: {
				};
			};
			user: {
				help: CommandHelp;
				prompts: {
					invalidUser: "%username, that is not a valid user.";
				};
				returns: {
				};
			};
			avatar: {
				help: CommandHelp;
				prompts: {
					invalidUser: "%username, that is not a valid user.";
				};
				returns: {
				};
			};
			icon: {
				help: CommandHelp;
				prompts: {
					guildOnly: "%username, this command does not work in DMs.";
				};
				returns: {
				};
			};
			wumbo: {
				help: CommandHelp;
				prompts: {
					invalidEmoji: "%username, that is not a valid emoji.";
				};
				returns: {
				};
			};
			profile: {
				help: CommandHelp;
				prompts: {
					invalidUser: "%username, that is not a valid user.";
					permissionDenied: "I don't have permission to attach files. I work best when I have all of the permissions I've asked for when inviting me. Please modify my permissions.";
				};
				returns: {
				};
			};
			help: {
				help: CommandHelp;
				prompts: {
					invalidCommand: "**%tag**, I couldn't find the help panel for that command";
				};
				returns: {
					footer: "Type `&help [command]` to see more information about a command";
					mobile: "Click the reaction for a mobile-compatible view";
					main: "Type `&help [category]` to see all commands in that category.\nType `&help [command]` to see more information about a command.";
					info: "Type `&info` to see general information about Amanda.\nFor more, join our support server: %link";
				};
			};
		};

		audio: {
			token: {
				help: CommandHelp;
				prompts: {
					dmFailed: "you must allow me to DM you for that command to work. Either you've blocked me, or you need to turn on DMs in this server. (server settings → privacy → allow direct messages).";
					none: "You do not currently have any tokens. Use `&musictoken new` to generate a new one.";
				};
				returns: {
					dmSuccess: "I sent you a DM.";
					deleted: "Deleted all your tokens. Use `&musictoken new` to generate a new one.";
					new: "Your existing tokens were deleted, and a new one was created.\nDo not share this token with anyone. If you do accidentally share it, you can use `&musictoken delete` to delete it and keep you safe.\nYou can now log in! %website";
					generated: "Here is the token you generated previously:\nYou can use `&musictoken delete` to delete it, and `&musictoken new` to regenerate it.";
				};
			};
			frisky: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
					schedule: "Frisky Radio ­— Schedule";
					footer: "Use &frisky [station] to play a station";
				};
			};
			music: {
				help: CommandHelp;
				prompts: {
					guildOnly: "this command does not work in DMs.";
					invalidSkips: "That is not a valid amount of songs to skip";
					invalidSkipsAmount: "You have to skip 1 or more songs";
					tooManySkips: "You cannot skip more songs than are in the queue!";
					invalidAction: "%username, that's not a valid action. If you want to play something, try `&music play <song>`.\nCheck out `&help music` and `&help playlists` for more things you can do!";
					nothingPlaying: "%username, nothing is currently playing.";
					noResults: "No results.";
					voiceChannelRequired: "%username, you need to join a voice channel to do that.";
					voiceCantJoin: "%username, I don't have permission to join your voice channel.";
					voiceCantSpeak: "%username, I don't have permission to speak in your voice channel.";
					playableRequired: "%username, please provide either a YouTube video link or some words for me to search for.";
					youtubeRequired: "%username, please provide a YouTube link or video ID.";
					invalidLink: "%username, that is not a valid link.";
					queueCannotDo: "The current queue cannot be %action at this time.";
					voiceChannelWaiting: "%username, you need to join a voice channel to do that. Waiting for you to connect...";
					songSelection: "Song selection";
					songSelectionCanceled: "Song selection cancelled";
					totalLength: "Total length: %number";
					queueFor: "Queue for %server";
					everyoneLeft: "Everyone left, so I have as well.";
					songNotPlayingDiscord: "Hmm. Seems like the song isn't playing.\n\n**This is probably an issue with Discord.**\nYou should try changing the server region.\n\nTo report a problem, join our server: https://discord.gg/YMkZDsK";
					songErrorExclaimation: "`song.track` is ! placeholder. This is a bug.";
					songErrorNull: "`song.track` is null or undefined. This is a bug.";
					songNotPlayable: "We couldn't play that song";
					errorOccured: "We ran into an error";
					songErrorNotObject: "Song is not an object %song";
					tooManyErrors: "Too many errors!";
					errorsSuppressed: "Future errors from this queue will be silenced.\nIf any more songs fail, they will be skipped with no message.\nTo report a bug, join our server: https://discord.gg/YMkZDsK";
					autoRanOut: "Auto mode is on, but we ran out of related songs and had to stop playback.";
					queueAlreadyPaused: "Music is already paused. Use `&music resume` to resume.";
					queueNowPlaying: "Now Playing: %song";
					noUsersLeft: "No users left in my voice channel. I will stop playing in %time seconds if nobody rejoins.";
					autoOn: "Auto mode is now turned on.";
					autoOff: "Auto mode is now turned off.";
					loopOn: "Loop mode is now turned on.";
					loopOff: "Loop mode is now turned off.";
					musicPlaying: "Music is playing. If you want to pause, use `&music pause`.";
					songRemoveRequired: "You need to tell me which song to remove. `&music queue remove <number>`\nTo clear the entire queue, use `&music queue clear` or `&music queue remove all`.";
					songRemove1: "Item 1 is the currently playing song. Use `&music skip` to skip it, or `&music queue remove 2` if you wanted to remove the song that's up next.";
					queueSongTotal: "There are %number1 items in the queue. You can only remove items 2-%number2.";
					numberNotInRelated: "The number you typed isn't an item in the related list. Try `&music related`.";
					playNoArguments: "You need to tell me what you want to play. Try one of these things:\n- Search terms, like `despacito`\n- A YouTube link, like `https://youtu.be/kJQP7kiw5Fk`\n- A SoundCloud link, like `https://soundcloud.com/luisfonsiofficial/despacito`\nUse `&help music` for more ideas.";
				};
				returns: {
					queueClear: "Cleared the queue, removing %number";
					queueIn: "The current music session is over in %channel. Go there to see what's playing!";
				};
			};
			playlist: {
				help: CommandHelp;
				prompts: {
					playFromStart: "Play the entire playlist from the start";
					playFromLinked: "Play the playlist, starting at the linked song";
					playOnlyLinked: "Only play the linked song";
					userLinked: "You linked to this song in the playlist: %title";
					query: "What would you like to do?";
					selectionInfo: "To play a more specific range from the playlist, use `&music play <link> <start> <end>`. See `&help playlist` for more information.";
					playlistNameRequired: "%username, you must name a playlist. Use `&music playlists show` to show all playlists.";
					directPlaylist: "%username, you can play a playlist directly! Just pass it to `&music play` like so:%info\n\n\n\nIf you still want to import a playlist into Amanda, you must give it a friendly name first, like `bobs_songs`.";
					playlistNameLimit: "%username, the playlist name must be 24 characters or less.";
					playlistNotExist: "%username, That playlist does not exist. Use `&music playlist %playlist create` to create it.";
					databaseFixed: "%username, The database entries for that playlist are inconsistent. The inconsistencies have been resolved by resetting the order of the songs in that playlist. Apart from the song order, no data was lost. Other playlists were not affected.";
					usePlaylistAdd: "Do not use playlist importing with `playlist add`. Use `playlist import` instead";
					youtubeLinkInvalid: "%username, That is not a valid YouTube link";
					indexRequired: "%username, Please provide the index of the item to remove";
					indexMoveRequired: "Please provide an index to move from and an index to move to.";
					playlistNotOwned: "%username, you do not own that playlist and so cannot modify it.";
					playlistDuplicateSong: "%username, that song is already in the playlist.";
					indexesEqual: "%username, Those two indexes are equal.";
					playlistEmpty: "That playlist is empty. Add some songs with `&music playlist %playlist add <song>`!";
					playlistImporting: "Importing playlist. This could take a moment...\n(Fetching song info)";
					playlistImportAllExisting: "%username, all videos in that playlist have already been imported.";
					playlistImportingDatabase: "Importing playlist. This could take a moment...\n(Updating database)";
					playlistDeleteConfirm: "This action will permanently delete the playlist `%playlist`.\nYou cannot undo this action, and anyone will be able to create a new playlist with the same name.\nPress <:bn_del:331164186790854656> to delete `%playlist` forever.";
					bulkListening: "Okay, I'm listening";
					bulkDescription: "» Type anything to add it to the playlist.\n» Commands starting with `%prefix` will only run the command.\n» Type `undo` to remove the last item in the playlist. 🧹\n» Type `stop` when you're done. You can keep adding things until you type `stop`. 🛑";
					outOfRange: "Out of range.";
					playlistSection: "Playlist section";
					bulkMenuOpen: "You already have a menu open in here. Type `stop` to stop it.";
					playlistPages: "Page %number of %total";
				};
				returns: {
					playlistAdded: "%username, Added **%song** to playlist **%playlist**";
					playlistRemoved: "%username, Removed **%song** from playlist **%playlist**";
					playlistCreated: "%username, Created playlist **%playlist**";
					playlistImportDone: "All done! Check out your playlist with **&music playlist %playlist**.";
					playlistDeleted: "Playlist deleted.";
					playlistDeleteCancelled: "Playlist deletion cancelled";
					playlistMoved: "%username, Moved **%song** to position **%index**";
					bulkDone: "All done! I won't add anything else to the playlist.";
					bulkMenuGone: "(There used to be a menu here, but it's gone now.)";
				};
			};
			debug: {
				help: CommandHelp;
				prompts: {
					guildOnly: "You cannot debug music in a DM channel";
					invalidChannel: "Channel not found";
				};
				returns: {
					tip: "Tip:";
					tipValue: "On top of Read Message and Add Reaction permissions, bots must also have Read Message History permissions to add reactions to messages";
					unnamedNode: "an unnamed node";
					queueUsing: "However, the current queue is using %name";
					infoFor: "Debugging info for %channel";
					permissions: "Permissions:";
					method: "Method:";
				};
			};
		};

		configuration: {
			settings: {
				help: CommandHelp;
				prompts: {
					cantModifyInDM: "You cannot modify a server's settings if you don't use the command in a server";
					backgroundRecommended: "Recommended to be a 800x500px png/jpeg";
					invalidSyntaxScope: "Command syntax is `&settings <scope> <name> <value>`. Your value for `scope` was incorrect, it must be either `self` or `server`.";
					noSettings: "There are no settings set for scope %scope";
					manageServer: "You must have either the Manage Server or Administrator permission to modify Amanda's settings on this server.";
					invalidSyntaxName: "Command syntax is `&settings %usage`. Your value for `name` was incorrect, it must be one of: %settings";
					invalidSettingScope: "The setting `%setting` is not valid for the scope `%scope`.";
					currentValueServer: "Current value of `%setting` is `%value`. This value was set for the server.";
					currentValueInherited: "Current value of `%setting` is not set in this server, so it inherits the default value, which is `%value`.";
					noBackground: "You didn't have a profile background image. No action was taken.";
					donorRequired: "You must be a donor to modify this setting.";
					invalidLink: "There was an error trying to fetch the data from the link provided. Please make sure the link is valid.";
					invalidLangCode: "%username, that is not a valid or supported language code. Supported language codes are %codes";
					invalidSyntaxBoolean: "Command syntax is `&settings <scope> <name> <value>`. The setting `%setting` is a boolean, and so your `%value` must be either `true` or `false`.";
					tooLong: "That setting value is too long. It must not be more than 50 characters.";
				};
				returns: {
					updated: "Setting updated.";
					deleted: "Setting deleted.";
				};
			};
			language: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
				};
			};
			serverlanguage: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
				};
			};
			background: {
				help: CommandHelp;
				prompts: {
				};
				returns: {
				};
			};
		};	};

	export type CommandHelp = {
		usage: string;
		description: string;
	};

	export type LangCommand = {
		help: CommandHelp;
		prompts: {
			[key: string]: string;
		},
		returns: {
			[key: string]: string;
		}
	}

	export type InteractionCommand = {
		help: CommandHelp;
		prompts: {
			/**
			 * No Wildcards.
			 */
			dm: string;
			/**
			 * No Wildcards.
			 */
			noUser: string;
			/**
			 * Wildcards:
			 *
			 * %username - string.
			 */
			invalidUser: string;
		};
		returns: {
			/**
			 * Wildcards:
			 *
			 * %username - string.
			 */
			amanda: string;
			/**
			 * Wildcards:
			 *
			 * %username - string.
			 *
			 * %mention - string.
			 */
			action: string;
		};
	};
}
