declare module '@amanda/lang' {

	export const en_us: Lang;
	export const en_owo: Lang;
	export const es: Lang;
	export const nl: Lang;

	export type Lang = {
		admin: {
			evaluate: {
				help: CommandHelp;
				prompts: { noInput: string; };
				returns: {};
			};
			execute: {
				help: CommandHelp;
				prompts: { noInput: string; };
				returns: {};
			};
			award: {
				help: CommandHelp;
				prompts: { guildOnly: string; invalidAmount: string; invalidUser: string; dmFailed: string; };
				returns: { channel: string; dm: string; };
			};
		};

		gambling: {
			slot: {
				help: CommandHelp;
				prompts: { guildOnly: string; permissionDenied: string; invalidBet: string; betSmall: string; moneyInsufficient: string; };
				returns: { lost: string; triple: string; heart1: string; heart2: string; heart3: string; };
			};
			flip: {
				help: CommandHelp;
				prompts: {};
				returns: { flip: string; };
			};
			betflip: {
				help: CommandHelp;
				prompts: { guildOnly: string; invalidBetandSide: string; invalidBet: string; betSmall: string; moneyInsufficient: string; invalidSide: string; };
				returns: { autoChoose: string; guess: string; win: string; lost: string; };
			};
			coins: {
				help: CommandHelp;
				prompts: { guildOnly: string; invalidUser: string; };
				returns: { coins: string; };
			};
			daily: {
				help: CommandHelp;
				prompts: { guildOnly: string; cooldown: string; };
				returns: { claimed: string; };
			};
			leaderboard: {
				help: CommandHelp;
				prompts: { guildOnly: string; pageLimit: string; };
				returns: { emptyPage: string; };
			};
			give: {
				help: CommandHelp;
				prompts: { guildOnly: string; invalidAmountandUser: string; invalidUser: string; cannotGiveSelf: string; invalidGift: string; giftSmall: string; moneyInsufficient: string; dmFailed: string; };
				returns: { channel: string; dm: string; };
			};
			wheel: {
				help: CommandHelp;
				prompts: { guildOnly: string; permissionDenied: string; invalidAmountWheel: string; betSmall: string; moneyInsufficient: string; invalidAmount: string; };
				returns: { winnings: string; };
			};
		};

		games: {
			trivia: {
				help: CommandHelp;
				prompts: { categorySelect: string; dm: string; noCategory: string; multipleCategories: string; gameInProgress: string; APIError: string; parsingError: string; permissionDenied: string; };
				returns: {};
			};
			minesweeper: {
				help: CommandHelp;
				prompts: {};
				returns: { info: string; error: string; rawTooLarge: string; };
			};
		};

		interaction: {
			ship: {
				help: CommandHelp;
				prompts: { guildOnly: string; permissionDenied: string; invalidUsers: string; invalidUser1: string; invalidUser2: string; selfShip: string; };
				returns: { rating: string; };
			};
			waifu: {
				help: CommandHelp;
				prompts: { guildOnly: string; invalidUser: string; };
				returns: { price: string; claimedBy: string; gifts: string; };
			};
			waifuleaderboard: {
				help: CommandHelp;
				prompts: { guildOnly: string; pageLimit: string; };
				returns: { emptyPage: string; };
			};
			claim: {
				help: CommandHelp;
				prompts: { guildOnly: string; badFormat: string; invalidUser: string; selfClaim: string; moneyInsufficient: string; claimSmall: string; claimedByOther: string; doubleClaim: string; dmFailed: string; };
				returns: { claimed: string; dm: string; };
			};
			divorce: {
				help: CommandHelp;
				prompts: { noWaifu: string; dmFailed: string; };
				returns: { divorced: string; dm: string; };
			};
			gift: {
				help: CommandHelp;
				prompts: { guildOnly: string; noWaifu: string; noGift: string; moneyInsufficient: string; invalidGift: string; giftSmall: string; };
				returns: { gifted: string; };
			};
			bean: {
				help: CommandHelp;
				prompts: { guildOnly: string; invalidUser: string; selfBean: string; };
				returns: { beaned: string; };
			};
			hug: {
				help: CommandHelp;
				prompts: { dm: string; noUser: string; invalidUser: string; };
				returns: { amanda: string; action: string; };
			};
			nom: {
				help: CommandHelp;
				prompts: { dm: string; noUser: string; invalidUser: string; };
				returns: { amanda: string; action: string; };
			};
			kiss: {
				help: CommandHelp;
				prompts: { dm: string; noUser: string; invalidUser: string; };
				returns: { amanda: string; action: string; };
			};
			cuddle: {
				help: CommandHelp;
				prompts: { dm: string; noUser: string; invalidUser: string; };
				returns: { amanda: string; action: string; };
			};
			poke: {
				help: CommandHelp;
				prompts: { dm: string; noUser: string; invalidUser: string; };
				returns: { amanda: string; action: string; };
			};
			slap: {
				help: CommandHelp;
				prompts: { dm: string; noUser: string; invalidUser: string; };
				returns: { amanda: string; action: string; };
			};
			boop: {
				help: CommandHelp;
				prompts: { dm: string; noUser: string; invalidUser: string; };
				returns: { amanda: string; action: string; };
			};
			pat: {
				help: CommandHelp;
				prompts: { dm: string; noUser: string; invalidUser: string; };
				returns: { amanda: string; action: string; };
			};
		};

		meta: {
			invite: {
				help: CommandHelp;
				prompts: {};
				returns: { invited: string; notice: string; }; };
			info: {
				help: CommandHelp;
				prompts: {};
				returns: { thanks: string; creators: string; links: string; };
			};
			donate: {
				help: CommandHelp;
				prompts: {};
				returns: { intro: string; description: string; };
			};
			help: {
				help: CommandHelp;
				prompts: { invalidCommand: string; };
				returns: { footer: string; mobile: string; main: string; };
			};
		};

		audio: {
			musictoken: {
				help: CommandHelp;
				prompts: { dmFailed: string; none: string; };
				returns: { dmSuccess: string; deleted: string; new: string; generated: string; };
			};
			frisky: {
				help: CommandHelp;
				prompts: {};
				returns: { schedule: string; footer: string; };
			};
			music: {
				help: CommandHelp;
				prompts: { guildOnly: string; invalidSkips: string; invalidSkipsAmount: string; tooManySkips: string; invalidAction: string; nothingPlaying: string; voiceChannelRequired: string; voiceCantJoin:string; voiceCantSpeak: string; playableRequired: string; youtubeRequired: string; queueCannotDo: string; voiceChannelWaiting: string; songSelection: string; songSelectionCanceled: string; totalLength: string; queueFor: string; };
				returns: { queueClear: string; queueIn: string; };
			};
			playlist: {
				help: CommandHelp;
				prompts: { playFromStart: string; playFromLinked: string; playOnlyLinked: string; userLinked: string; query: string; selectionInfo: string; playlistNameRequired: string; directPlaylist: string; playlistNameLimit: string; playlistNotExist: string; databaseFixed: string; usePlaylistAdd: string; youtubeLinkInvalid: string; indexRequired: string; indexMoveRequired: string; playlistNotOwned: string; playlistDuplicateSong: string; indexesEqual: string; playlistEmpty: string; playlistImporting: string; playlistImportAllExisting: string; playlistImportingDatabase: string; playlistDeleteConfirm: string; };
				returns: { playlistAdded: string; playlistRemoved: string; playlistCreated: string; playlistImportDone: string; playlistDeleted: string; playlistMoved: string; };
			},
			debug: {
				help: CommandHelp;
				prompts: { guildOnly: string; invalidChannel: string; };
				returns: { tip: string; tipValue: string; };
			};
		};

		configuration: {
			settings: {
				help: CommandHelp;
				prompts: { cantModifyInDM: string; backgroundRecommended: string; invalidSyntaxScope: string; noSettings: string; manageServer: string; invalidSyntaxName: string; invalidSettingScope: string; currentValueServer: string; currentValueInherited: string; noBackground: string; donorRequired: string; invalidLink: string; invalidLangCode: string; invalidSyntaxBoolean: string; tooLong: string; };
				returns: { updated: string; deleted: string; };
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
}
