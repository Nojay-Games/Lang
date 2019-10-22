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
	error: 'API heeft geen data geretourneerd',
	dm: {
		success: 'Ik heb je een privébericht gestuurd.',
		fail:
			'je moet me toestaan je een privébericht te sturen voor dat commando om te werken. Je hebt me of geblokkeerd, of je moet privéberichten aanzetten in deze server. (server instellingen → privacy → sta directe berichten toe).',
		blocked:
			'Ik kon die persoon geen privébericht sturen. Misschien heeft diegene mij geblokkeerd, of diegene moet misschien privéberichten aanzetten in een gedeelde server.'
	},
	command: {
		dmOnly: 'dit commando kan alleen in een privébericht gebruikt worden',
		guildOnly: 'dit commando werkt niet in een privébericht',
		permPre: 'Ik heb geen toestemming om',
		permPost:
			'Ik werk het best wanneer ik alle toestemmingen heb waar ik voor gevraagd heb wanneer je me uitnodigt. Verander alstublieft mijn toestemmingen.',
		input: {
			invalid: 'dat is geen geldig',
			insufficient: 'je hebt niet zo veel'
		}
	},
	emoji: {
		discoin: '<a:Discoin:422523472128901140>'
	}
};

module.exports = {
	admin: {
		evaluate: {
			help: {
				usage: '<code>',
				description: 'Voert willekeurig JavaScript uit tijdens het proces'
			},
			prompts: {
				noInput: 'Je hebt geen input gegeven om te evalueren, onnozele.'
			},
			returns: {}
		},
		execute: {
			help: {
				usage: '<code>',
				description: 'Voert een shell operatie uit'
			},
			prompts: {
				noInput: 'Je hebt niets gegeven om uit te voeren, onnozele.'
			},
			returns: {}
		},
		award: {
			help: {
				usage: '<hoeveelheid> <gebruiker>',
				description: 'Kent een specifieke gebruiker toe'
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidAmount: `%username, ${generic.command.input.invalid} hoevelheid om toe te kennen.`,
				invalidUser: `%username, ${generic.command.input.invalid} gebruiker.`,
				dmFailed: generic.dm.blocked
			},
			returns: {
				channel: '%mention1 heeft %number Discoins gegeven aan %mention2',
				dm: `%mention heeft je %number ${generic.emoji.discoin} gegeven`
			}
		}
	},

	gambling: {
		slot: {
			help: {
				usage: '[hoeveelheid: nummer|all|half]',
				description:
					'Runt een willekeurige gokautomaat en maakt kans op Discoins'
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} voeg bestanden toe. ${generic.command.permPost}`,
				invalidBet: `%username, ${generic.command.input.invalid} heeft gegokt.`,
				betSmall: `%username, je moet tenminste 2 ${generic.emoji.discoin} gokken`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} Discoins.`
			},
			returns: {
				lost: `Sorry. Je hebt geen match gekregen. Je bent %number ${generic.emoji.discoin} verloren`,
				triple: `Een driedubbele. Je hebt %number ${generic.emoji.discoin} gewonnen`,
				heart1: `Een single :heart: Je hebt %number ${generic.emoji.discoin} gewonnen`,
				heart2: `Wow! Een dubbel :heart: Je hebt %number ${generic.emoji.discoin} gewonnen`,
				heart3: `WOAH! Een driedubbel :heart: Je hebt %number ${generic.emoji.discoin} gewonnen`
			}
		},
		flip: {
			help: {
				usage: 'Geen',
				description: 'Gooit een munt'
			},
			prompts: {},
			returns: {}
		},
		betflip: {
			help: {
				usage: '<hoeveelheid: nummer|all|half> [h|t]',
				description:
					'Plaats een gok op een willekeurige gooi voor een kans op Discoins'
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidBetandSide:
					'%username, je moet een gok geven en een kant om op te gokken.',
				invalidBet: `%username, ${generic.command.input.invalid} heeft gegokt.`,
				betSmall: `%username, je moet tenminste 1 ${generic.emoji.discoin} gokken`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} Discoins.`,
				invalidSide: '%username, dat is geen geldige kant om op te gokken.'
			},
			returns: {
				autoChoose:
					'Je hebt geen kant gekozen, dus ik heb er een voor je gekozen:',
				guess: 'Je hebt %string1 geraden, Ik heb %string2 gegooid',
				win: `Je hebt het geraden! Je hebt %number ${generic.emoji.discoin} gekregen`,
				lost: `Sorry, maar je hebt niet correct geraden. Meer geluk volgende keer.`
			}
		},
		coins: {
			help: {
				usage: '[gebruiker]',
				description:
					'Retourneerd de hoeveelheid Discoins die jij of een andere gebruiker heeft'
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidUser: `%username, ${generic.command.input.invalid} gebruiker.`
			},
			returns: {
				coins: `Munten voor %display`
			}
		},
		daily: {
			help: {
				usage: 'Geen',
				description:
					'Een dagelijks commando dat een willekeurige hoeveelheid Discoins geeft'
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				cooldown:
					'%username, je dagelijkse munten zullen een nieuwe voorraad innemen in %number.'
			},
			returns: {
				claimed: `%username heeft zijn dagelijkse geclaimed en heeft %number ${generic.emoji.discoin} gekregen`
			}
		},
		leaderboard: {
			help: {
				usage: '[pagina]',
				description: 'Krijgt het scorebord voor mensen met de meeste munten'
			},
			prompts: {},
			returns: {}
		},
		give: {
			help: {
				usage: '<hoeveelheid: nummer|all|half> <gebruiker>',
				description: 'Geeft discoins aan een gebruiker vanaf jouw account'
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidAmountandUser:
					'%username, je moet een hoeveelheid geven en dan een gebruiker.',
				invalidUser: `%username, ${generic.command.input.invalid} gebruiker.`,
				cannotGiveSelf: 'Je kan jezelf geen coins geven, onnozele.',
				invalidGift: `%username, ${generic.command.input.invalid} cadeau.`,
				giftSmall: `%username, je moet tenminste 1 ${generic.emoji.discoin} geven`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} Discoins.`,
				dmFailed: generic.dm.blocked
			},
			returns: {
				channel: '%mention1 heeft %number Discoins gegeven aan %mention2',
				dm: `%mention heeft je %number ${generic.emoji.discoin} gegeven`
			}
		},
		wheel: {
			help: {
				usage: '[hoeveelheid: nummer|all|half]',
				description:
					'Een Rad van Fortuin voor een kans om meer Discoins te krijgen'
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} voeg bestanden toe. ${generic.command.permPost}`,
				invalidAmountWheel:
					'%username, je moet een hoeveelheid geven om het rad mee te draaien',
				betSmall: `%username, je moet tenminste 1 ${generic.emoji.discoin} gokken`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} Discoins.`,
				invalidAmount: `%username, ${generic.command.input.invalid} hoeveelheid.`
			},
			returns: {
				winnings: `%tag heeft %number1 Discoins gegokt en heeft %number2 ${generic.emoji.discoin} teruggekregen`
			}
		}
	},

	games: {
		trivia: {
			help: {
				usage: '[categorie]',
				description:
					'Speelt een spel van trivia met andere leden en win Discoins'
			},
			prompts: {
				categorySelect:
					'Om een categorie te selecteren, gebruik `&trivia <categorie naam>`.',
				dm:
					'%username, Ik heb je een privébericht gestuurd met een lijst van categorieën.',
				noCategory:
					'%username, Ik heb geen categorieën gevonden met die naam. gebruik `&trivia categories` voor een complete lijst van categorieën.',
				multipleCategories:
					'%username, er zijn meerdere categorieën met die naam: %string',
				gameInProgress: '%username, er is al een spel bezig voor dit kanaal.',
				APIError: 'Er was een fout van de api',
				parsingError:
					'Er was een fout bij het parseren van de date geretourneerd door de api',
				permissionDenied: `${generic.command.permPre} add reactions`
			},
			returns: {}
		},
		minesweeper: {
			help: {
				usage: '[easy|medium|hard] [--rauw] [--grootte:nummer]',
				description:
					'Begint een spel minesweeper met het Discord spoiler systeem'
			},
			prompts: {},
			returns: {
				info: `%difficulty -- %number1 bommen, %number2 x %number2 bord`,
				error:
					'De minimale grootte is 4 en de maximale grootte is 14. De grenzen zijn aangepast aan het normale',
				rawTooLarge:
					'De rauwe inhoud heeft de 2000 tekenlimiet overschreden. Overweeg een kleinere bordgrootte te gebruiken'
			}
		}
	},

	interaction: {
		ship: {
			help: {
				usage: '<gebruiker 1> <gebruiker 2>',
				description: 'Krijgt twee mensen in een relatie'
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} voeg bestanden toe. ${generic.command.permPost}`,
				invalidUsers: `%username, je moet twee gebruikers geven als argumenten`,
				invalidUser1: `%username: het eerste gegeven lid was niet gevonden`,
				invalidUser2: `%username, het tweede gegeven lid was niet gevonden`,
				selfShip:
					'%username, je kan niet iemand met zichzelf in een relatie krijgen, onnozele'
			},
			returns: {
				rating:
					'Aww. Ik zou de kans dat %display1 en %display2 bij elkaar komen een %percentage% geven'
			}
		},
		waifu: {
			help: {
				usage: '[gebruiker]',
				description: 'Krijgt de waifu-informatie over jezelf of een gebruiker'
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidUser: `%username, ${generic.command.input.invalid} gebruiker.`
			},
			returns: {
				price: 'Prijs:',
				claimedBy: 'Geclaimed Door:',
				gifts: 'Cadeaus:'
			}
		},
		claim: {
			help: {
				usage: '<hoeveelheid: nummer|all|half> <gebruiker>',
				description: 'Claimt iemand als een waifu. Vereist Discoins'
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				badFormat:
					'%username, de juiste indeling is `&claim <hoeveelheid> <gebruiker>`. Hoeveelheid komt eerst, gebruiker komt laatst.',
				invalidUser: `%username, ${generic.command.input.invalid} gebruiker.`,
				selfClaim: '%username, je kan niet jezelf claimen, onnozele',
				moneyInsufficient: `%username, ${generic.command.input.insufficient} Discoins.`,
				claimSmall: `%username, je moet iemand claimen met tenminste 1 ${generic.emoji.discoin}`,
				claimedByOther: `%username, dit persoon is al door iemand anders geclaimd, voor een hogere prijs. Je zou tenminste %number Discoins moeten spenderen om degene te stelen.`,
				doubleClaim:
					'%username, je hebt deze persoon al geclaimd als je waifu. Als je hun prijs wilt verhogen, gebruik `&gift <hoeveelheid>`',
				dmFailed: generic.dm.blocked
			},
			returns: {
				claimed: `%mention1 heeft %mention2 geclaimd voor %number ${generic.emoji.discoin}`,
				dm: `%mention heeft je geclaimd voor %number ${generic.emoji.discoin}`
			}
		},
		divorce: {
			help: {
				usage: '[reden]',
				description: 'Scheidt een gebruiker'
			},
			prompts: {
				noWaifu: '%username, je hebt geen waifu om mee te scheiden, onnozele',
				dmFailed: generic.dm.blocked
			},
			returns: {
				divorced: '%tag1 heeft een scheiding ingediend voor %tag2 met %reason',
				dm: '%tag heeft een scheiding ingediend van jou met %reason'
			}
		},
		gift: {
			help: {
				usage: '<hoeveelheid: nummer|all|half>',
				description:
					"Schenkt een hoeveelheid van Discoins naar je waifu's prijs"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				noWaifu:
					'%username, je hebt geen waifu om Discoins te schenken, onnozele',
				noGift: '%username, je hebt geen hoeveelheid voor een geschenk gegeven',
				moneyInsufficient: `%username, ${generic.command.input.insufficient} Discoins.`,
				invalidGift: `%username, ${generic.command.input.invalid} cadeau.`,
				giftSmall: `%username, je moet iemand tenminste 1 ${generic.emoji.discoin} schenken`
			},
			returns: {
				gifted: "%tag2 heeft %number Discoins geschonken naar %tag2's prijs"
			}
		},
		bean: {
			help: {
				usage: '<gebruiker>',
				description: 'Verboont een gebruiker'
			},
			prompts: {
				guildOnly:
					'%username, je kan niet iemand in een privébericht verbonen, onnozele',
				invalidUser: `%username, ${generic.command.input.invalid} gebruiker.`,
				selfBean: '%username, je kan jezelf niet verbonen, onnozele'
			},
			returns: {
				beaned: '%tag is verbannen!'
			}
		}
	},

	meta: {
		invite: {
			help: {
				usage: 'Geen',
				description: 'Voeg Amanda toe tot een server'
			},
			prompts: {},
			returns: {
				invited: 'Ik ben uitgenodigd?',
				notice:
					'Onthoud, je hebt **beheer server** toestemming nodig om bots toe te voegen aan een server.'
			}
		},
		info: {
			help: {
				usage: 'Geen',
				description: 'Toont informatie over Amanda'
			},
			prompts: {},
			returns: {
				thanks:
					'Dank je voor het kiezen van mij als je metgezel! :heart:\nHier is een beetje informatie over mij a...',
				creators: 'Makers:',
				links:
					"Bezoek Amanda's [website](%website) of haar [ondersteuningsserver](https://discord.gg/zhthQjH)\nWil je doneren? Bekijk haar [Patreon](https://www.patreon.com/papiophidian) of maak een eenmalige donatie door [PayPal](https://paypal.me/papiophidian)."
			}
		},
		donate: {
			help: {
				usage: 'Geen',
				description: 'Krijg informatie over hoe je kan doneren'
			},
			prompts: {},
			returns: {
				intro: 'Aan het nadenken over doneren? ❤',
				description:
					'Ik ben opgewonden over dat je geïnteresseerd bent om mijn makers te ondersteunen!' +
					'\n\nAls je bent geïnteresseerd in het maken van maandelijkse donaties, kan je dat doen op [Patreon](https://www.patreon.com/papiophidian),' +
					' of als je een eenmalige donatie wilt maken, kan je doneren door [PayPal](https://paypal.me/papiophidian).' +
					'\n\nAl het gedoneerde geld gaat terug naar de ontwikkeling.' +
					"\nToegang tot Amanda's kenmerken zullen niet veranderen, wat je keuze ook is," +
					' maar je zult wel een donor rol krijgen in onze [Ondersteuningsserver](https://discord.gg/zhthQjH)' +
					' en een onderscheidende donor badge krijgen op &profile.'
			}
		}
	}
};
