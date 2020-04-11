declare module '@amanda/lang' {

	/**
	 * English (US)
	 */
	export const en_us: Lang;
	/**
	 * English (owo)
	 */
	export const en_owo: Lang;
	/**
	 * Spanish
	 */
	export const es: Lang;
	/**
	 * Dutch
	 */
	export const nl: Lang;

	export type Lang = {
		admin: {
			evaluate: {
				help: CommandHelp;
				prompts: {
					/**
					 * No Wildcards.
					 */
					noInput: string;
				};
				returns: {};
			};
			execute: {
				help: CommandHelp;
				prompts: {
					/**
					 * No Wildcards.
					 */
					noInput: string;
				};
				returns: {};
			};
			award: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					guildOnly: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidAmount: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidUser: string;
					/**
					 * No Wildcards.
					 */
					dmFailed: string;
				};
				returns: {
					/**
					 * Wildcards:
					 *
					 * %mention1 - string.
					 *
					 * %number - number.
					 *
					 * %mention2 - string.
					 */
					channel: string;
					/**
					 * Wildcards:
					 *
					 * %mention - string.
					 *
					 * %number - number.
					 */
					dm: string;
				};
			};
			forcestatusupdate: {
				help: CommandHelp;
				prompts: {};
				returns: {};
			};
			restartnotify: {
				help: CommandHelp;
				prompts: {};
				returns: {
					/**
					 * No Wildcards.
					 */
					confirmation: string;
				};
			};
		};

		gambling: {
			slot: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					guildOnly: string;
					permissionDenied: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidBet: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					betSmall: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					moneyInsufficient: string;
				};
				returns: {
					/**
					 * Wildcards:
					 *
					 * %number - number.
					 */
					lost: string;
					/**
					 * Wildcards:
					 *
					 * %number - number.
					 */
					triple: string;
					/**
					 * Wildcards:
					 *
					 * %number - number.
					 */
					heart1: string;
					/**
					 * Wildcards:
					 *
					 * %number - number.
					 */
					heart2: string;
					/**
					 * Wildcards:
					 *
					 * %number - number.
					 */
					heart3: string;
				};
			};
			flip: {
				help: CommandHelp;
				prompts: {};
				returns: {
					/**
					 * No Wildcards.
					 */
					flip: string;
				};
			};
			betflip: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					guildOnly: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidBetandSide: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidBet: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					betSmall: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					moneyInsufficient: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidSide: string;
				};
				returns: {
					autoChoose: string;
					/**
					 * Wildcards:
					 *
					 * %string1 - string.
					 *
					 * %string2 - string.
					 */
					guess: string;
					/**
					 * Wildcards:
					 *
					 * %number - number.
					 */
					win: string;
					/**
					 * No Wildcards.
					 */
					lost: string;
				};
			};
			coins: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					guildOnly: string;
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
					 * %display - string.
					 */
					coins: string;
				};
			};
			daily: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					guildOnly: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 *
					 * %number - number.
					 */
					cooldown: string;
				};
				returns: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 *
					 * %number - number.
					 */
					claimed: string;
				};
			};
			leaderboard: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					guildOnly: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 *
					 * %maxPages - number.
					 */
					pageLimit: string;
				};
				returns: {
					/**
					 * Wildcards:
					 *
					 * %lastPage - number.
					 */
					emptyPage: string;
				};
			};
			give: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					guildOnly: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidAmountandUser: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidUser: string;
					/**
					 * No Wildcards.
					 */
					cannotGiveSelf: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidGift: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					giftSmall: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					moneyInsufficient: string;
					/**
					 * No Wildcards.
					 */
					dmFailed: string;
				};
				returns: {
					/**
					 * Wildcards:
					 *
					 * %mention1 - string.
					 *
					 * %number - number.
					 *
					 * %mention2 - string.
					 */
					channel: string;
					/**
					 * Wildcards:
					 *
					 * %mention - string.
					 *
					 * %number - number.
					 */
					dm: string;
				};
			};
			wheel: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					guildOnly: string;
					/**
					 * No Wildcards.
					 */
					permissionDenied: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidAmountWheel: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					betSmall: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					moneyInsufficient: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidAmount: string;
				};
				returns: {
					/**
					 * Wildcards:
					 *
					 * %tag - string.
					 *
					 * %number1 - number.
					 *
					 * %number2 - number.
					 */
					winnings: string;
				};
			};
		};

		games: {
			trivia: {
				help: CommandHelp;
				prompts: {
					/**
					 * No Wildcards.
					 */
					categorySelect: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					dm: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					noCategory: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 *
					 * %string - string.
					 */
					multipleCategories: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					gameInProgress: string;
					/**
					 * No Wildcards.
					 */
					APIError: string;
					/**
					 * No Wildcards.
					 */
					parsingError: string;
					/**
					 * No Wildcards.
					 */
					permissionDenied: string;
				};
				returns: {};
			};
			minesweeper: {
				help: CommandHelp;
				prompts: {};
				returns: {
					/**
					 * Wildcards:
					 *
					 * %difficulty - string.
					 *
					 * %number1 - number.
					 *
					 * %number2 - number.
					 *
					 * %number3 - number.
					 */
					info: string;
					/**
					 * No Wildcards.
					 */
					error: string;
					/**
					 * No Wildcards.
					 */
					rawTooLarge: string;
				};
			};
			cleverai: {
				help: CommandHelp;
				prompts: {};
				returns: {};
			};
		};

		images: {
			cat: {
				help: CommandHelp;
				prompts: {};
				returns: {};
			};
			dog: {
				help: CommandHelp;
				prompts: {};
				returns: {};
			};
			space: {
				help: CommandHelp;
				prompts: {};
				returns: {};
			};
			snek: {
				help: CommandHelp;
				prompts: {};
				returns: {};
			};
			birb: {
				help: CommandHelp;
				prompts: {};
				returns: {};
			};
			catgirl: {
				help: CommandHelp;
				prompts: {};
				returns: {
					/**
					 * No Wildcards.
					 */
					offline: string;
				};
			};
		};

		interaction: {
			ship: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					guildOnly: string;
					/**
					 * No Wildcards.
					 */
					permissionDenied: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidUsers: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidUser1: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidUser2: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					selfShip: string;
				};
				returns: {
					/**
					 * Wildcards:
					 *
					 * %display1 - string.
					 *
					 * %display2 - string.
					 *
					 * %percentage - number.
					 */
					rating: string;
				};
			};
			waifu: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					guildOnly: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidUser: string;
				};
				returns: {
					/**
					 * No Wildcards.
					 */
					price: string;
					/**
					 * No Wildcards.
					 */
					claimedBy: string;
					/**
					 * No Wildcards.
					 */
					gifts: string;
				};
			};
			waifuleaderboard: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					guildOnly: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 *
					 * %maxPages - number.
					 */
					pageLimit: string;
				};
				returns: {
					/**
					 * Wildcards:
					 *
					 * %lastPage - number.
					 */
					emptyPage: string;
				};
			};
			claim: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					guildOnly: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					badFormat: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidUser: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					selfClaim: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					moneyInsufficient: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					claimSmall: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 *
					 * %number - number.
					 */
					claimedByOther: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					doubleClaim: string;
					/**
					 * No Wildcards.
					 */
					dmFailed: string;
				};
				returns: {
					/**
					 * Wildcards:
					 *
					 * %mention1 - string.
					 *
					 * %mention2 - string.
					 *
					 * %number - number.
					 */
					claimed: string;
					/**
					 * Wildcards:
					 *
					 * %mention - string.
					 *
					 * %number - number.
					 */
					dm: string;
				};
			};
			divorce: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					noWaifu: string;
					/**
					 * No Wildcards.
					 */
					dmFailed: string;
				};
				returns: {
					/**
					 * Wildcards:
					 *
					 * %tag1 - string.
					 *
					 * %tag2 - string.
					 *
					 * %reason - string.
					 */
					divorced: string;
					/**
					 * Wildcards:
					 *
					 * %tag - string.
					 *
					 * %reason - string.
					 */
					dm: string;
				};
			};
			gift: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					guildOnly: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					noWaifu: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					noGift: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					moneyInsufficient: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidGift: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					giftSmall: string;
				};
				returns: {
					/**
					 * Wildcards:
					 *
					 * %tag1 - string.
					 *
					 * %number - number.
					 *
					 * %tag2 - string.
					 */
					gifted: string;
				};
			};
			bean: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					guildOnly: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidUser: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					selfBean: string;
				};
				returns: {
					/**
					 * Wildcards:
					 *
					 * %tag - string.
					 */
					beaned: string;
				};
			};
			hug: InteractionCommand;
			nom: InteractionCommand;
			kiss: InteractionCommand;
			cuddle: InteractionCommand;
			poke: InteractionCommand;
			slap: InteractionCommand;
			boop: InteractionCommand;
			pat: InteractionCommand;
		};

		meta: {
			statistics: {
				help: CommandHelp;
				prompts: {};
				returns: {};
			};
			ping: {
				help: CommandHelp;
				prompts: {};
				returns: {
					/**
					 * No Wildcards.
					 */
					footer: string;
				};
			}
			invite: {
				help: CommandHelp;
				prompts: {};
				returns: {
					/**
					 * No Wildcards.
					 */
					invited: string;
					/**
					 * No Wildcards.
					 */
					notice: string;
				};
			};
			info: {
				help: CommandHelp;
				prompts: {};
				returns: {
					/**
					 * No Wildcards.
					 */
					thanks: string;
					/**
					 * No Wildcards.
					 */
					creators: string;
					/**
					 * Wildcards:
					 *
					 * %website - string.
					 *
					 * %server - string.
					 *
					 * %patreon - string.
					 *
					 * %paypal - string.
					 *
					 * %stats - string.
					 */
					links: string;
				};
			};
			donate: {
				help: CommandHelp;
				prompts: {};
				returns: {
					/**
					 * No Wildcards.
					 */
					intro: string;
					/**
					 * Wildcards:
					 *
					 * %server - string.
					 *
					 * %patreon - string.
					 *
					 * %paypal - string.
					 */
					description: string;
				};
			};
			commits: {
				help: CommandHelp;
				prompts: {};
				returns: {};
			};
			privacy: {
				help: CommandHelp;
				prompts: {
					/**
					 * No Wildcards.
					 */
					dmSuccess: string;
				};
				returns: {};
			};
			user: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidUser: string;
				};
				returns: {};
			};
			avatar: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidUser: string;
				};
				returns: {};
			};
			wumbo: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidEmoji: string;
				};
				returns: {};
			};
			profile: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidUser: string;
					/**
					 * No Wildcards.
					 */
					permissionDenied: string;
				};
				returns: {};
			}
			help: {
				help: CommandHelp;
				prompts: {
					/**
					 * Wildcards:
					 *
					 * %tag - string.
					 */
					invalidCommand: string;
				};
				returns: {
					/**
					 * No Wildcards.
					 */
					footer: string;
					/**
					 * No Wildcards.
					 */
					mobile: string;
					/**
					 * No Wildcards.
					 */
					main: string;
					/**
					 * Wildcards:
					 *
					 * %link - string.
					 */
					info: string;
				};
			};
		};

		audio: {
			token: {
				help: CommandHelp;
				prompts: {
					/**
					 * No Wildcards.
					 */
					dmFailed: string;
					/**
					 * No Wildcards.
					 */
					none: string;
				};
				returns: {
					/**
					 * No Wildcards.
					 */
					dmSuccess: string;
					/**
					 * No Wildcards.
					 */
					deleted: string;
					/**
					 * Wildcards:
					 *
					 * %website - string.
					 */
					new: string;
					/**
					 * No Wildcards.
					 */
					generated: string;
				};
			};
			frisky: {
				help: CommandHelp;
				prompts: {};
				returns: {
					/**
					 * No Wildcards.
					 */
					schedule: string;
					/**
					 * No Wildcards.
					 */
					footer: string;
				};
			};
			music: {
				help: CommandHelp;
				prompts: {
					/**
					 * No Wildcards.
					 */
					guildOnly: string;
					/**
					 * No Wildcards.
					 */
					invalidSkips: string;
					/**
					 * No Wildcards.
					 */
					invalidSkipsAmount: string;
					/**
					 * No Wildcards.
					 */
					tooManySkips: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					invalidAction: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					nothingPlaying: string;
					/**
					 * No Wildcards.
					 */
					noResults: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					voiceChannelRequired: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					voiceCantJoin:string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					voiceCantSpeak: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					playableRequired: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					youtubeRequired: string;
					/**
					 * Wildcards:
					 *
					 * %action - string.
					 */
					queueCannotDo: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					voiceChannelWaiting: string;
					/**
					 * No Wildcards.
					 */
					songSelection: string;
					/**
					 * No Wildcards.
					 */
					songSelectionCanceled: string;
					/**
					 * Wildcards:
					 *
					 * %number - number.
					 */
					totalLength: string;
					/**
					 * Wildcards:
					 *
					 * %server - string.
					 */
					queueFor: string;
				};
				returns: {
					/**
					 * Wildcards:
					 *
					 * %number - number.
					 */
					queueClear: string;
					/**
					 * Wildcards:
					 *
					 * %channel - string.
					 */
					queueIn: string;
				};
			};
			playlist: {
				help: CommandHelp;
				prompts: {
					/**
					 * No Wildcards.
					 */
					playFromStart: string;
					/**
					 * No Wildcards.
					 */
					playFromLinked: string;
					/**
					 * No Wildcards.
					 */
					playOnlyLinked: string;
					/**
					 * No Wildcards.
					 */
					userLinked: string;
					/**
					 * No Wildcards.
					 */
					query: string;
					/**
					 * No Wildcards.
					 */
					selectionInfo: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					playlistNameRequired: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					directPlaylist: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					playlistNameLimit: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 *
					 * %playlist - string.
					 */
					playlistNotExist: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					databaseFixed: string;
					/**
					 * No Wildcards.
					 */
					usePlaylistAdd: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					youtubeLinkInvalid: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					indexRequired: string;
					/**
					 * No Wildcards.
					 */
					indexMoveRequired: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					playlistNotOwned: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					playlistDuplicateSong: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					indexesEqual: string;
					/**
					 * Wildcards:
					 *
					 * %playlist - string.
					 */
					playlistEmpty: string;
					/**
					 * No Wildcards.
					 */
					playlistImporting: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 */
					playlistImportAllExisting: string;
					/**
					 * No Wildcards.
					 */
					playlistImportingDatabase: string;
					/**
					 * Wildcards:
					 *
					 * %playlist - string.
					 */
					playlistDeleteConfirm: string;
					/**
					 * No Wildcards.
					 */
					bulkListening: string;
					/**
					 * Wildcards:
					 *
					 * %prefix - string.
					 */
					bulkDescription: string;
					/**
					 * No Wildcards.
					 */
					outOfRange: string;
				};
				returns: {
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 *
					 * %song - string.
					 *
					 * %playlist - string.
					 */
					playlistAdded: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 *
					 * %song - string.
					 *
					 * %playlist - string.
					 */
					playlistRemoved: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 *
					 * %playlist - string.
					 */
					playlistCreated: string;
					/**
					 * Wildcards:
					 *
					 * %playlist - string.
					 */
					playlistImportDone: string;
					/**
					 * No Wildcards.
					 */
					playlistDeleted: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 *
					 * %song - string.
					 *
					 * %index - number.
					 */
					playlistMoved: string;
					/**
					 * No Wildcards.
					 */
					bulkDone: string;
					/**
					 * No Wildcards.
					 */
					bulkMenuGone: string;
				};
			},
			debug: {
				help: CommandHelp;
				prompts: {
					/**
					 * No Wildcards.
					 */
					guildOnly: string;
					/**
					 * No Wildcards.
					 */
					invalidChannel: string;
				};
				returns: {
					/**
					 * No Wildcards.
					 */
					tip: string;
					/**
					 * No Wildcards.
					 */
					tipValue: string;
					/**
					 * No Wildcards.
					 */
					unnamedNode: string;
					/**
					 * Wildcards:
					 *
					 * %name - string.
					 */
					queueUsing: string;
					/**
					 * Wildcards:
					 *
					 * %channel - string.
					 */
					infoFor: string;
					/**
					 * No Wildcards.
					 */
					permissions: string;
					/**
					 * No Wildcards.
					 */
					method: string;
				};
			};
		};

		configuration: {
			settings: {
				help: CommandHelp;
				prompts: {
					/**
					 * No Wildcards.
					 */
					cantModifyInDM: string;
					/**
					 * No Wildcards.
					 */
					backgroundRecommended: string;
					/**
					 * No Wildcards.
					 */
					invalidSyntaxScope: string;
					/**
					 * Wildcards:
					 *
					 * %scope - string.
					 */
					noSettings: string;
					/**
					 * No Wildcards.
					 */
					manageServer: string;
					/**
					 * Wildcards:
					 *
					 * %usage - string.
					 *
					 * %settings - string.
					 */
					invalidSyntaxName: string;
					/**
					 * Wildcards:
					 *
					 * %setting - string.
					 *
					 * %scope - string.
					 */
					invalidSettingScope: string;
					/**
					 * Wildcards:
					 *
					 * %setting - string.
					 *
					 * %value - any.
					 */
					currentValueServer: string;
					/**
					 * Wildcards:
					 *
					 * %setting - string.
					 *
					 * %value - any.
					 */
					currentValueInherited: string;
					/**
					 * No Wildcards.
					 */
					noBackground: string;
					/**
					 * No Wildcards.
					 */
					donorRequired: string;
					/**
					 * No Wildcards.
					 */
					invalidLink: string;
					/**
					 * Wildcards:
					 *
					 * %username - string.
					 *
					 * %codes - string.
					 */
					invalidLangCode: string;
					/**
					 * Wildcards:
					 *
					 * %setting - string.
					 *
					 * %value - any.
					 */
					invalidSyntaxBoolean: string;
					/**
					 * No Wildcards.
					 */
					tooLong: string;
				};
				returns: {
					/**
					 * No Wildcards.
					 */
					updated: string;
					/**
					 * No Wildcards.
					 */
					deleted: string;
				};
			};
			background: {
				help: CommandHelp;
				prompts: {};
				returns: {};
			};
		};
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

	type CommandHelp = {
		usage: string;
		description: string;
	};

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
	}
}
