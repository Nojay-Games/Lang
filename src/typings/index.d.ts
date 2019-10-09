declare module '@amanda/lang' {

	export const english: Lang;

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
				prompts: { guildOnly: string; invalidAmount: string; invalidUser: string; };
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
				returns: {};
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
				prompts: {};
				returns: {};
			};
			give: {
				help: CommandHelp;
				prompts: { guildOnly: string; invalidAmountandUser: string; invalidUser: string; cannotGiveSelf: string; invalidGift: string; giftSmall: string; moneyInsufficient: string; };
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
				prompts: { categorySelect: string; dm: string; noCategory: string; multipleCategories: string; gameInProgress: string; APIError: string; parsingError: string; };
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
				prompts: { guildOnly: string; noWaifu: string; noGift: string; moneyInsufficient: string; invalidGift: string; };
				returns: { gifted: string; };
			};
			bean: {
				help: CommandHelp;
				prompts: { guildOnly: string; invalidUser: string; selfBean: string; };
				returns: { beaned: string; };
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
		};
	};

	type CommandHelp = {
		usage: string;
		description: string;
	};
}
