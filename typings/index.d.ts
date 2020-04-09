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
					dmFailed: string;
					none: string;
				};
				returns: {
					dmSuccess: string;
					deleted: string;
					new: string;
					generated: string;
				};
			};
			frisky: {
				help: CommandHelp;
				prompts: {};
				returns: {
					schedule: string;
					footer: string;
				};
			};
			music: {
				help: CommandHelp;
				prompts: {
					guildOnly: string;
					invalidSkips: string;
					invalidSkipsAmount: string;
					tooManySkips: string;
					invalidAction: string;
					nothingPlaying: string;
					noResults: string;
					voiceChannelRequired: string;
					voiceCantJoin:string;
					voiceCantSpeak: string;
					playableRequired: string;
					youtubeRequired: string;
					queueCannotDo: string;
					voiceChannelWaiting: string;
					songSelection: string;
					songSelectionCanceled: string;
					totalLength: string;
					queueFor: string;
				};
				returns: {
					queueClear: string;
					queueIn: string;
				};
			};
			playlist: {
				help: CommandHelp;
				prompts: {
					playFromStart: string;
					playFromLinked: string;
					playOnlyLinked: string;
					userLinked: string;
					query: string;
					selectionInfo: string;
					playlistNameRequired: string;
					directPlaylist: string;
					playlistNameLimit: string;
					playlistNotExist: string;
					databaseFixed: string;
					usePlaylistAdd: string;
					youtubeLinkInvalid: string;
					indexRequired: string;
					indexMoveRequired: string;
					playlistNotOwned: string;
					playlistDuplicateSong: string;
					indexesEqual: string;
					playlistEmpty: string;
					playlistImporting: string;
					playlistImportAllExisting: string;
					playlistImportingDatabase: string;
					playlistDeleteConfirm: string;
					bulkListening: string;
					bulkDescription: string;
					outOfRange: string;
				};
				returns: {
					playlistAdded: string;
					playlistRemoved: string;
					playlistCreated: string;
					playlistImportDone: string;
					playlistDeleted: string;
					playlistMoved: string;
					bulkDone: string;
					bulkMenuGone: string;
				};
			},
			debug: {
				help: CommandHelp;
				prompts: {
					guildOnly: string;
					invalidChannel: string;
				};
				returns: {
					tip: string;
					tipValue: string;
					unnamedNode: string;
					queueUsing: string;
					infoFor: string;
					permissions: string;
					method: string;
				};
			};
		};

		configuration: {
			settings: {
				help: CommandHelp;
				prompts: {
					cantModifyInDM: string;
					backgroundRecommended: string;
					invalidSyntaxScope: string;
					noSettings: string;
					manageServer: string;
					invalidSyntaxName: string;
					invalidSettingScope: string;
					currentValueServer: string;
					currentValueInherited: string;
					noBackground: string;
					donorRequired: string;
					invalidLink: string;
					invalidLangCode: string;
					invalidSyntaxBoolean: string;
					tooLong: string;
				};
				returns: {
					updated: string;
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
