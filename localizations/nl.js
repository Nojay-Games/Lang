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
	error: "De API heeft geen gegevens teruggestuurd.",
	dm: {
		success: "Ik heb je een privÃ©bericht gestuurd.",
		fail: "je moet me toestaan om je een privÃ©bericht te sturen om dat commando te laten werken. Of je hebt me geblokkeerd, of je moet privÃ©berichten van serverleden toestaan in deze server. (serverinstellingen â†’ privacy-instellingen â†’ directe berichten van serverleden toestaan).",
		blocked: "Ik kon die persoon geen privÃ©bericht sturen. Misschien hebben ze me geblokkeerd, of misschien moeten ze privÃ©berichten in een gemeenschappelijke server aanzetten."
	},
	command: {
		dmOnly: "dit commando kan alleen worden gebruikt in een privÃ©bericht.",
		guildOnly: "dit commando werkt niet in een privÃ©bericht.",
		permPre: "Ik heb geen toestemming om",
		permPost: "Ik werk het beste als ik alle rechten heb waar ik om gevraagd had toen je me uitnodigde. Pas alstublieft mijn rechten aan.",
		input: {
			invalid: "dat is geen geldige",
			insufficient: "je hebt niet zoveel"
		}
	},
	image: {
		dm: "Waarom zou je iemand in een privÃ©bericht willen %action",
		noUser: "Je moet me vertellen wie je wilt %action"
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
				description: "Voert een willekeurig stuk JavaScript uit in het proces"
			},
			prompts: {
				noInput: "Je hebt geen input gegeven om te evalueren, stommerd."
			},
			returns: {}
		},
		execute: {
			help: {
				usage: "<code>",
				description: "Voert een shell-operatie uit"
			},
			prompts: {
				noInput: "Je hebt niets voorzien om uit te voeren, stommerd."
			},
			returns: {}
		},
		award: {
			help: {
				usage: "<hoeveelheid> <gebruiker>",
				description: "Kent een specifieke gebruiker toe"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidAmount: `%username, ${generic.command.input.invalid} hoeveelheid om toe te kennen.`,
				invalidUser: `%username, ${generic.command.input.invalid} gebruiker.`,
				dmFailed: generic.dm.blocked
			},
			returns: {
				channel: "%mention1 heeft %number amandollars toegekend aan %mention2",
				dm: `%mention heeft je %number ${generic.emoji.discoin} toegekend`
			}
		},
		forcestatusupdate: {
			help: {
				usage: "Geen",
				description: "Forceert de huidige shard om statistische gegevens naar de database te sturen"
			},
			prompts: {},
			returns: {}
		},
		restartnotify: {
			help: {
				usage: "Geen",
				description: "Brengt je op de hoogte wanneer Amanda weer online is"
			},
			prompts: {},
			returns: {
				confirmation: "OkÃ©. Je wordt op de hoogte gebracht van de volgende keer dat ik herstart"
			}
		}
	},

	gambling: {
		slot: {
			help: {
				usage: "[hoeveelheid: aantal|all|half]",
				description: "Draait een gokautomaat voor een kans op amandollars"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} bestanden bij te voegen. ${generic.command.permPost}`,
				invalidBet: `%username, ${generic.command.input.invalid} weddenschap.`,
				betSmall: `%username, je moet minstens 2 ${generic.emoji.discoin} inzetten`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`
			},
			returns: {
				lost: `Sorry. Je hebt geen match gekregen. Je bent %number ${generic.emoji.discoin} kwijt`,
				triple: `Een triple. Je hebt %number ${generic.emoji.discoin} gewonnen`,
				heart1: `EÃ©n :heart: Je hebt %number ${generic.emoji.discoin} gewonnen`,
				heart2: `Wauw! Een dubbel :heart: Je hebt %number ${generic.emoji.discoin} gewonnen`,
				heart3: `WOAH! Een driedubbel :heart: Je hebt %number ${generic.emoji.discoin} gewonnen`
			}
		},
		flip: {
			help: {
				usage: "Geen",
				description: "Gooit een munt op"
			},
			prompts: {},
			returns: {
				flip: "Je gooide %flip"
			}
		},
		betflip: {
			help: {
				usage: "<hoeveelheid: aantal|all|half> [h|t]",
				description: "Plaats een weddenschap op een willekeurige flip voor een kans op amandollars"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidBetandSide: "%username, je moet een weddenschap aangaan en een kant om op in te zetten.",
				invalidBet: `%username, ${generic.command.input.invalid} weddenschap.`,
				betSmall: `%username, je moet minstens 1 ${generic.emoji.discoin} inzetten`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				invalidSide: "%username, dat is geen geldige kant om op te wedden."
			},
			returns: {
				autoChoose: "Je hebt geen kant gekozen, dus heb ik er een voor je uitgekozen:",
				guess: "Je raadde %string1, ik flipte %string2",
				win: `Je hebt het geraden! Je hebt %number ${generic.emoji.discoin} gekregen %explanation`,
				lost: `Sorry, je hebt het niet goed geraden. Je hebt %number ${generic.emoji.discoin} verloren`
			}
		},
		coins: {
			help: {
				usage: "[gebruiker]",
				description: "Geeft de hoeveelheid amandollars die jij of een andere gebruiker heeft"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidUser: `%username, ${generic.command.input.invalid} gebruiker.`
			},
			returns: {
				coins: `amandollars voor %display`
			}
		},
		daily: {
			help: {
				usage: "Geen",
				description: "Een dagelijks commando dat een willekeurig aantal amandollars geeft"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				cooldown: "%username, je dagelijkse amandollars zullen verfrissen in %number."
			},
			returns: {
				claimed: `%username claimde zijn dagelijkse amandollars en kreeg %number ${generic.emoji.discoin}`
			}
		},
		leaderboard: {
			help: {
				usage: "[local] [pagina: nummer]",
				description: "Krijgt het scorebord voor mensen met de meeste amandollars"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				pageLimit: "%username, je kan slechts tot en met pagina %maxPages bladeren.",
				pageCurrent: "Pagina %current van %total"
			},
			returns: {
				emptyPage: "Er zijn slechts %lastPage pagina's om door te bladeren."
			}
		},
		give: {
			help: {
				usage: "<hoeveelheid: aantal|all|half> <gebruiker>",
				description: "Geeft amandollars aan een gebruiker vanaf jouw account"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidAmountandUser: "%username, je moet een hoeveelheid geven en dan een gebruiker.",
				invalidUser: `%username, ${generic.command.input.invalid} gebruiker.`,
				cannotGiveSelf: "Je kunt geen amandollars aan jezelf geven, stommerd.",
				invalidGift: `%username, ${generic.command.input.invalid} cadeau.`,
				giftSmall: `%username, je moet minstens 1 ${generic.emoji.discoin} geven`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				dmFailed: generic.dm.blocked
			},
			returns: {
				channel: "%mention1 heeft %number amandollars aan %mention2 gegeven",
				dm: `%mention heeft je %number ${generic.emoji.discoin} gegeven`
			}
		},
		wheel: {
			help: {
				usage: "[hoeveelheid: aantal|all|half]",
				description: "Een Rad van Fortuin voor een kans op het maken van meer amandollars"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} bestanden bij te voegen. ${generic.command.permPost}`,
				invalidAmountWheel: "%username, je moet een bedrag geven om het rad mee te draaien",
				betSmall: `%username, je moet minstens 1 ${generic.emoji.discoin} inzetten`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				invalidAmount: `%username, ${generic.command.input.invalid} hoeveelheid.`
			},
			returns: {
				winnings: `%tag zette %number1 amandollars in en kreeg er %number2 terug ${generic.emoji.discoin}`
			}
		}
	},

	games: {
		trivia: {
			help: {
				usage: "[categorie]",
				description: "Speel een spelletje trivia met andere leden en win amandollars"
			},
			prompts: {
				categorySelect: "Om een categorie te selecteren, gebruik je `&trivia <naam categorie>`.",
				dm: "%username, ik heb je een privÃ©bericht gestuurd met de lijst van categorieÃ«n.",
				noCategory: "%username, ik vond geen categorieÃ«n met die naam. Gebruik `&trivia categories` voor de volledige lijst van categorieÃ«n.",
				multipleCategories: "%username, er zijn meerdere categorieÃ«n met die naam: %string",
				gameInProgress: "%username, er is al een spel aan de gang voor dit kanaal.",
				APIError: "Er was een fout van de api",
				parsingError: "Er was een fout bij het parseren van de gegevens die de api terugstuurde",
				permissionDenied: `${generic.command.permPre} reacties toe te voegen`,
				provideAnswer: "Om te antwoorden, typ een letter in de chat. Je hebt 20 seconden.",
				reactionRound: "Klik op de reactie voor een andere ronde.",
				permissionRound: "Je kan \`&trivia\` of \`&t\` typen voor een andere ronde.",
				winners: "Winnaars",
				noWinners: "Geen Winnaars",
				nextRound: "Volgende Ronde",
				categories: "CategorieÃ«n",
				dmError: generic.dm.fail
			},
			returns: {}
		},
		minesweeper: {
			help: {
				usage: "[easy|medium|hard] [--raw] [--size:nummer]",
				description: "Start een spel minesweeper met behulp van het Discord spoiler systeem"
			},
			prompts: {},
			returns: {
				info: `%difficulty -- %number1 bommen, %number2 x %number3 bord`,
				error: "De minimale grootte is 4 en de maximale grootte is 14. De grenzen zijn aangepast aan de normalen",
				rawTooLarge: "De ruwe inhoud overschreed de 2000 karakterlimiet. Overweeg het gebruik van een kleinere bordgrootte"
			}
		}
	},

	images: {
		cat: {
			help: {
				usage: "Geen",
				description: "Stuurt een afbeelding van een kat"
			},
			prompts: {},
			returns: {}
		},
		dog: {
			help: {
				usage: "Geen",
				description: "Stuurt een afbeelding van een hond"
			},
			prompts: {},
			returns: {}
		},
		space: {
			help: {
				usage: "Geen",
				description: "Stuurt een afbeelding van de ruimte"
			},
			prompts: {},
			returns: {}
		},
		snek: {
			help: {
				usage: "Geen",
				description: "Stuurt een afbeelding van een slang"
			},
			prompts: {},
			returns: {}
		},
		birb: {
			help: {
				usage: "Geen",
				description: "Stuurt een afbeelding van een vogel"
			},
			prompts: {},
			returns: {}
		},
		catgirl: {
			help: {
				usage: "Geen",
				description: "Stuurt een afbeelding van een kattenmeisje"
			},
			prompts: {},
			returns: {
				error: "Oh oh.",
				offline: "Het lijkt erop dat de nekos.life API momenteel offline is."
				+ "\nWe zijn niet in staat om nieuwe foto's te halen op dit moment."
				+ "\nHier is een slaperig kattenmeisje terwijl we wachten tot het weer online komt."
			}
		}
	},

	interaction: {
		ship: {
			help: {
				usage: "<gebruiker 1> <gebruiker 2>",
				description: "Probeert twee mensen te laten daten"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} bestanden bij te voegen. ${generic.command.permPost}`,
				invalidUsers: `%username, je moet twee gebruikers als argument aanvoeren`,
				invalidUser1: `%username: het eerste gegeven lid is niet gevonden`,
				invalidUser2: `%username, het tweede gegeven lid is niet gevonden`,
				selfShip: "%username, je kunt iemand niet met zichzelf laten daten, stommerd"
			},
			returns: {
				rating: "Aww. Ik zou %display1 en %display2 samen een score van %percentage% geven"
			}
		},
		waifu: {
			help: {
				usage: "[gebruiker]",
				description: "Krijgt de waifu-informatie over jezelf of een gebruiker"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidUser: `%username, ${generic.command.input.invalid} gebruiker.`
			},
			returns: {
				price: "Prijs:",
				claimedBy: "Geclaimd Door:",
				waifu: "Waifu:",
				gifts: "Cadeaus:",
				nobody: "(niemand)",
				none: "(geen)"
			}
		},
		waifuleaderboard: {
			help: {
				usage: "[local] [pagina: nummer]",
				description: "Toont het leaderboard van de topwaifus"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				pageLimit: "%username, je kan slechts tot en met pagina %maxPages bladeren."
			},
			returns: {
				emptyPage: "Er zijn slechts %lastPage pagina's om door te bladeren.",
				claimEntry: `%user1 claimde %user2 voor %price ${generic.emoji.discoin}`,
				pageCurrent: "Pagina %current van %total"
			}
		},
		claim: {
			help: {
				usage: "<hoeveelheid: aantal|all|half> <gebruiker>",
				description: "Claimt iemand als een waifu. Vereist amandollars"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				badFormat: "%username, het juiste formaat is `&claim <hoeveelheid> <gebruiker>`. Hoeveelheid komt eerst, gebruiker komt als laatste.",
				invalidUser: `%username, ${generic.command.input.invalid} gebruiker.`,
				selfClaim: "%username, je kunt jezelf niet claimen, stommerd",
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				claimSmall: `%username, je moet iemand claimen met minstens 1 ${generic.emoji.discoin}`,
				claimedByOther: `%username, deze persoon is al door iemand anders geclaimd, voor een hogere prijs. Je moet minstens %number amandollars uitgeven om ze te stelen.`,
				doubleClaim: "%username, je hebt die persoon al geclaimd als je waifu. Als je hun prijs wilt verhogen, gebruik dan `&gift <hoeveelheid>`",
				dmFailed: generic.dm.blocked
			},
			returns: {
				claimed: `%mention1 heeft %mention2 geclaimd voor %number ${generic.emoji.discoin}`,
				dm: `%mention heeft je geclaimd voor %number ${generic.emoji.discoin}`
			}
		},
		divorce: {
			help: {
				usage: "[reden]",
				description: "Scheidt een gebruiker"
			},
			prompts: {
				noWaifu: "%username, je hebt niet eens een waifu om te scheiden, stommerd",
				dmFailed: generic.dm.blocked
			},
			returns: {
				divorced: "%tag1 heeft een scheiding van %tag2 aangevraagd met %reason",
				dm: "%tag heeft een scheiding van je aangevraagd met %reason"
			}
		},
		gift: {
			help: {
				usage: "<hoeveelheid: aantal|all|half>",
				description: "Schenkt een bedrag aan amandollars aan de prijs van je waifu"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				noWaifu: "%username, je hebt niet eens een waifu om amandollars aan te schenken, stommerd",
				noGift: "%username, je hebt geen bedrag gegeven",
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				invalidGift: `%username, ${generic.command.input.invalid} cadeau.`,
				giftSmall: `%username, je moet iemand minstens 1 ${generic.emoji.discoin} schenken`
			},
			returns: {
				gifted: "%tag1 heeft %number amandollars aan %tag2's prijs geschonken"
			}
		},
		bean: {
			help: {
				usage: "<gebruiker>",
				description: "Verboont een gebruiker"
			},
			prompts: {
				guildOnly: "%username, je kan niet iemand in een privÃ©bericht verbonen, stommerd",
				invalidUser: `%username, ${generic.command.input.invalid} gebruiker.`,
				selfBean: "%username, je kan jezelf niet verbonen, stommerd"
			},
			returns: {
				beaned: "%tag is verbannen!"
			}
		},
		hug: {
			help: {
				usage: "<gebruiker>",
				description: "Knuffelt iemand"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} gebruiker.`
			},
			returns: {
				amanda: "**Knuffelt %username terug** :heart:",
				action: "%username knuffelde %mention"
			}
		},
		nom: {
			help: {
				usage: "<gebruiker>",
				description: "Neemt een hap van iemand"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				amanda: "auw",
				action: "%username nam een hap van %mention"
			}
		},
		kiss: {
			help: {
				usage: "<gebruiker>",
				description: "Kust iemand"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				amanda: "**Kust %username terug** :heart:",
				action: "%username kuste %mention"
			}
		},
		cuddle: {
			help: {
				usage: "<gebruiker>",
				description: "Omhelst iemand"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				amanda: "**Omhelst %username terug** :heart:",
				action: "%username omhelsde %mention"
			}
		},
		poke: {
			help: {
				usage: "<gebruiker>",
				description: "Port iemand"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				amanda: "Por me niet ; ^ ;",
				action: "%username porde %mention"
			}
		},
		slap: {
			help: {
				usage: "<gebruiker>",
				description: "Slaat iemand"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				amanda: "**Slaat %username terug** Dat deed me pijn ; ^ ;",
				action: "%username sloeg %mention"
			}
		},
		boop: {
			help: {
				usage: "<gebruiker>",
				description: "Prikt iemands neus"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				amanda: "Prik mijn neus niet ; ^ ;",
				action: "%username prikte %mention's neus"
			}
		},
		pat: {
			help: {
				usage: "<gebruiker>",
				description: "Geeft iemand een tikje"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {
				amanda: "â‰¥ w â‰¤",
				action: "%username gaf %mention een tikje"
			}
		}
	},

	meta: {
		statistics: {
			help: {
				usage: "[music|games]",
				description: "Toont gedetailleerde statistieken voor nerds"
			},
			prompts: {
				slow: "Ugh. Ik haat het ook als ik traag ben"
			},
			returns: {
				songsToday: "**â¯ Nummers vandaag afgespeeld:**\n%number",
				songsQueued: "**â¯ Nummers in de wachtrij:**\n%number",
				voiceConnections: "**â¯ Spraakverbindingen:**\n%number",
				usersListening: "**â¯ Gebruikers die luisteren:**\n%number",
				gamesToday: "**â¯ Spelletjes gespeeld vandaag:**\n%number",
				gamesInProgress: "**â¯ Spelletjes in uitvoering:**\n%number",
				usersPlaying: "**â¯ Gebruikers die spelen:**\n%number",
				heartbeat: "Hartslag",
				latency: "Latentie",
				uptime: "Uptime",
				ramUsage: "RAM-gebruik",
				userCount: "**â¯ Aantal gebruikers:**\n%number",
				guildCount: "**â¯ Aantal servers:**\n%number",
				channelCount: "**â¯ Aantal kanalen:**\n%number",
			}
		},
		ping: {
			help: {
				usage: "Geen",
				description: "Wat denk je dat dit doet?"
			},
			prompts: {},
			returns: {
				pong: "Pong!",
				heartbeat: "â¯ Hartslag",
				latency: "â¯ Latentie",
				footer: "W-Wacht... het heet tafeltennis"
			}
		},
		invite: {
			help: {
				usage: "Geen",
				description: "Voeg Amanda toe aan een server"
			},
			prompts: {},
			returns: {
				invited: "Ik ben uitgenodigd?",
				link: "Uitnodigingslink: %link",
				notice: "Vergeet niet dat je **server beheren** rechten nodig hebt om bots toe te kunnen voegen aan een server."
			}
		},
		info: {
			help: {
				usage: "Geen",
				description: "Toont informatie over Amanda"
			},
			prompts: {},
			returns: {
				thanks: "Bedankt dat je mij als je metgezel hebt gekozen! :heart:\nHier is wat informatie over mij...",
				creators: "Makers",
				links: "Bezoek Amanda's [website](%website) of haar [ondersteuningsserver](%server)\nWil je doneren? Bekijk haar [Patreon](%patreon) of doe een eenmalige donatie via [PayPal](%paypal).\nWil je Amanda's groei in de loop van de tijd zien? Dat kan je [hier](%stats)"
			}
		},
		donate: {
			help: {
				usage: "Geen",
				description: "Krijg informatie over hoe je kunt doneren"
			},
			prompts: {},
			returns: {
				intro: "Denk je eraan om te doneren? â¤",
				description: "Ik ben opgewonden dat je geÃ¯nteresseerd bent in het ondersteunen van mijn makers!" +
					"\n\nAls je geÃ¯nteresseerd bent in het doen van maandelijkse donaties, kan je dit doen op [Patreon](%patreon)," +
					" of als je een eenmalige donatie wilt doen, kan je doneren via [PayPal](%paypal)." +
					"\n\nAl het gedoneerde geld gaat terug in de ontwikkeling." +
					"\nToegang tot Amanda's functies zal niet veranderen, ongeacht je keuze," +
					" maar je krijgt wel een donorrol in onze [Ondersteuningsserver](%server)" +
					" en een onderscheidende donorbadge op &profile."
			}
		},
		commits: {
			help: {
				usage: "Geen",
				description: "Krijgt de nieuwste git commits aan Amanda"
			},
			prompts: {},
			returns: {}
		},
		privacy: {
			help: {
				usage: "Geen",
				description: "Beschrijft Amanda's privacyverklaring"
			},
			prompts: {
				dmSuccess: generic.dm.success
			},
			returns: {} // intentionally empty as Privacy policies might not translate properly and may have different implications
		},
		user: {
			help: {
				usage: "[gebruiker]",
				description: "Geeft informatie over een gebruiker"
			},
			prompts: {
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {}
		},
		avatar: {
			help: {
				usage: "[gebruiker]",
				description: "Krijgt de avatar van een gebruiker"
			},
			prompts: {
				invalidUser: `%username, ${generic.command.input.invalid} user.`
			},
			returns: {}
		},
		icon: {
			help: {
				usage: "Geen",
				description: "Krijgt het pictogram van een server"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`
			},
			returns: {}
		},
		wumbo: {
			help: {
				usage: "<emoji>",
				description: "Maakt een emoji groter"
			},
			prompts: {
				invalidEmoji: `%username, ${generic.command.input.invalid} emoji.`
			},
			returns: {}
		},
		profile: {
			help: {
				usage: "[gebruiker]",
				description: "Krijgt profielinformatie over een gebruiker"
			},
			prompts: {
				invalidUser: `%username, ${generic.command.input.invalid} user.`,
				permissionDenied: `${generic.command.permPre} bestanden bij te voegen. ${generic.command.permPost}`
			},
			returns: {}
		},
		help: {
			help: {
				usage: "[Commando|Categorie]",
				description: "Je gemiddelde helpcommando"
			},
			prompts: {
				invalidCommand: "**%tag**, ik kon het hulp-paneel voor dat commando niet vinden"
			},
			returns: {
				footer: "Typ `&help [commando]` om meer informatie over een commando te zien",
				mobile: "Klik op de reactie voor een mobiel-compatibele weergave",
				main: "Typ `&help [categorie]` om alle commando's in die categorie te zien."
				+ "\nTyp `&help [commando]` om meer informatie over een commando te zien.",
				info: "Typ `&info` om algemene informatie over Amanda te zien.\nVoor meer, word lid van onze ondersteuningsserver: %link"
			}
		}
	},

	audio: {
		token: {
			help: {
				usage: "[new|delete]",
				description: "Verkrijg een webdashboard login token"
			},
			prompts: {
				dmFailed: generic.dm.fail,
				none: "Je hebt momenteel geen tokens. Gebruik `&musictoken new` om een nieuwe te genereren."
			},
			returns: {
				dmSuccess: generic.dm.success,
				deleted: "Ik heb al je tokens verwijderd. Gebruik `&musictoken new` om een nieuwe te genereren.",
				new: "Je bestaande tokens zijn verwijderd, en er is een nieuwe aangemaakt."
				+"\nDeel dit token met niemand. Als je het per ongeluk toch deelt, kan je `&musictoken delete` gebruiken om het te verwijderen en jezelf veilig te houden."
				+"\nJe kan nu inloggen! %website",
				generated: "Hier is het token dat je eerder hebt gegenereerd:"
				+"\nJe kan `&musictoken delete` gebruiken om het te verwijderen, en `&musictoken new` om het opnieuw te genereren."
			}
		},
		frisky: {
			help: {
				usage: "[original|deep|chill|classics]",
				description: "Speel Frisky Radio: https://friskyradio.com"
			},
			prompts: {},
			returns: {
				schedule: "Frisky Radio Â­â€” Schema",
				footer: "Gebruik &frisky [zender] om een zender af te spelen"
			}
		},
		music: {
			help: {
				usage: "Geen. Dit mag je niet zien.",
				description: "Geen. Dit mag je niet zien."
			},
			prompts: {
				guildOnly: generic.command.guildOnly,
				invalidSkips: "Dat is geen geldig aantal nummers om over te slaan",
				invalidSkipsAmount: "Je moet 1 of meer nummers overslaan",
				tooManySkips: "Je kunt niet meer nummers overslaan dan er in de wachtrij staan!",
				invalidAction: "%username, dat is geen geldige actie. Als je iets wilt afspelen, probeer dan `&music play <nummer>`.\nBekijk `&help music` en `&help playlists` voor meer dingen die je kunt doen!",
				nothingPlaying: "%username, er wordt momenteel niets afgespeeld.",
				noResults: "Geen resultaten.",
				voiceChannelRequired: "%username, je moet je aansluiten bij een spraakkanaal om dat te kunnen doen.",
				voiceCantJoin: "%username, ik heb geen toestemming om me bij je spraakkanaal aan te sluiten.",
				voiceCantSpeak: "%username, ik heb geen toestemming om te spreken in je spraakkanaal.",
				playableRequired: "%username, geef alstublieft een YouTube-videolink of enkele woorden waarnaar ik kan zoeken.",
				youtubeRequired: "%username, geef alstublieft een YouTube-link of een video-ID op.",
				invalidLink: "%username, dat is geen geldige link.",
				queueCannotDo: "De huidige wachtrij kan op dit moment niet worden %action.",
				voiceChannelWaiting: "%username, je moet je aansluiten bij een spraakkanaal om dat te kunnen doen. Aan het wachten totdat je verbinding maakt...",
				songSelection: "Songselectie",
				songSelectionCanceled: "Songselectie geannuleerd",
				totalLength: "Totale lengte: %number",
				queueFor: "Wachtrij voor %server",
				everyoneLeft: "Iedereen ging weg, dus ik ging ook.",
				songNotPlayingDiscord: "Hmm. Het lijkt erop dat het liejde niet speelt."
				+ "\n\n**Dit is waarschijnlijk een probleem met Discord.**"
				+ "\nProbeer de serverregio te wijzigen."
				+ "\n\nWord lid van onze server om een probleem te melden: https://discord.gg/YMkZDsK",
				songErrorExclaimation: "`song.track` is ! tijdelijke aanduiding. Dit is een fout.",
				songErrorNull: "`song.track` is null of undefined. Dit is een fout.",
				songNotPlayable: "We konden dat nummer niet afspelen",
				errorOccured: "We kwamen een fout tegen",
				songErrorNotObject: "Liedje is geen object %song",
				tooManyErrors: "Te veel fouten!",
				errorsSuppressed: "Toekomstige fouten uit deze wachtrij worden onderdrukt."
				+ "\nAls er nog meer nummers mislukken, worden ze zonder bericht overgeslagen."
				+ "\nOm een bug te melden, kan je je aanmelden bij onze server: https://discord.gg/YMkZDsK",
				autoRanOut: "Auto modus is ingeschakeld, maar we hadden geen gerelateerde nummers meer en moesten het afspelen stoppen.",
				queueAlreadyPaused: "De muziek is al gepauzeerd. Gebruik `&music resume` om te hervatten.",
				queueNowPlaying: "Nu aan het spelen: %song",
				noUsersLeft: "Er zijn geen gebruikers meer in mijn spraakkanaal. Ik zal stoppen met afspelen over %time seconden als niemand weer aansluit.",
				autoOn: "Auto modus is nu ingeschakeld.",
				autoOff: "Auto modus is nu uitgeschakeld.",
				loopOn: "Lus modus is nu ingeschakeld.",
				loopOff: "Lus modus is nu uitgeschakeld.",
				musicPlaying: "Er speelt muziek. Als je wilt pauzeren, gebruik dan `&music pause`.",
				songRemoveRequired: "Je moet me vertellen welk nummer ik moet verwijderen. `&music queue remove <nummer>`"
				+ "\nOm de hele wachtrij te wissen, gebruik je `&music queue clear` of `&music queue remove all`.",
				songRemove1: "Item 1 is het nummer dat momenteel wordt afgespeeld. Gebruik `&music skip` om het over te slaan, "
				+ "of `&music queue remove 2` als je het volgende nummer zou willen verwijderen.",
				queueSongTotal: "Er staan %number1 items in de wachtrij. Je kunt alleen items 2-%number2 verwijderen.",
				numberNotInRelated: "Het nummer dat je hebt getypt is geen item in de gerelateerde lijst. Probeer `&music related`.",
				playNoArguments:
					"Je moet me vertellen wat je wilt afspelen. Probeer een van deze dingen:"
					+ "\n- Zoektermen, zoals `despacito`"
					+ "\n- Een YouTube-link, zoals `https://youtu.be/kJQP7kiw5Fk`"
					+ "\n- Een SoundCloud-link, zoals `https://soundcloud.com/luisfonsiofficial/despacito`"
					+ "\nGebruik `&help music` voor meer ideeÃ«n."
			},
			returns: {
				queueClear: "De wachtrij is leeggehaald, %number verwijderd",
				queueIn: "De huidige muzieksessie is in %channel. Ga daarheen om te zien wat er wordt afgespeeld!"
			}
		},
		playlist: {
			help: {
				usage: "Geen. Dit mag je niet zien.",
				description: "Geen. Dit mag je niet zien."
			},
			prompts: {
				playFromStart: "Speel de hele afspeellijst af vanaf het begin",
				playFromLinked: "Speel de afspeellijst af, beginnend bij het gelinkte nummer",
				playOnlyLinked: "Speel alleen het gelinkte nummer af",
				userLinked: "Je hebt naar dit nummer gelinkt in de afspeellijst: %title",
				query: "Wat zou je willen doen?",
				selectionInfo: "Om een meer specifiek bereik van de afspeellijst af te spelen, gebruik je `&music play <link> <begin> <einde>`. Zie `&help playlist` voor meer informatie.",
				playlistNameRequired: "%username, je moet een afspeellijst een naam geven. Gebruik `&music playlists show` om alle afspeellijsten te tonen.",
				directPlaylist: "%username, je kunt een afspeellijst direct afspelen! Geef het gewoon door aan \`&music play\` zoals dit:"
				+"%info\n\n\n\nAls je nog steeds een afspeellijst wilt importeren in Amanda, moet je het eerst een vriendelijke naam geven, zoals `bobs_songs`.",
				playlistNameLimit: "%username, de naam van de afspeellijst moet 24 tekens of minder zijn.",
				playlistNotExist: "%username, die afspeellijst bestaat niet. Gebruik \`&music playlist %playlist create\` om het aan te maken.",
				databaseFixed: "%username, de database-items voor die afspeellijst zijn inconsistent. De inconsistenties zijn opgelost door de volgorde van de nummers in die afspeellijst te resetten. Afgezien van de volgorde van de nummers zijn er geen gegevens verloren gegaan. Andere afspeellijsten werden niet beÃ¯nvloed.",
				usePlaylistAdd: "Gebruik het importeren van afspeellijsten niet met `playlist add`. Gebruik in plaats daarvan `playlist import`",
				youtubeLinkInvalid: "%username, dat is geen geldige YouTube-link",
				indexRequired: "%username, geef alstublieft de index van het item dat je wilt verwijderen",
				indexMoveRequired: "Geef alstublieft een index om van te verplaatsen en een index om naar te verplaatsen.",
				playlistNotOwned: "%username, je bent niet de eigenaar van die afspeellijst en kan deze dus ook niet wijzigen.",
				playlistDuplicateSong: "%username, dat nummer staat al in de afspeellijst.",
				indexesEqual: "%username, die twee indexen zijn gelijk.",
				playlistEmpty: "Die afspeellijst is leeg. Voeg enkele nummers toe met `&music playlist %playlist add <nummer>`!",
				playlistImporting: "Afspeellijst aan het importeren. Dit kan even duren...\n(Nummerinformatie aan het ophalen)",
				playlistImportAllExisting: "%username, alle video's in die afspeellijst zijn al geÃ¯mporteerd.",
				playlistImportingDatabase: "Afspeellijst aan het importeren. Dit kan even duren...\n(Database aan het bijwerken)",
				playlistDeleteConfirm: "Deze actie zal de playlist `%playlist` permanent verwijderen."
				+ "\nJe kunt deze actie niet ongedaan maken, en iedereen zal in staat zijn om een nieuwe afspeellijst met dezelfde aan te maken."
				+ "\nDruk op <:bn_del:331164186790854656> om `%playlist` voor altijd te verwijderen.",
				bulkListening: "OkÃ©, ik luister",
				bulkDescription: "Â» Typ iets om het toe te voegen aan de afspeellijst."
				+ `\nÂ» Commando's die beginnen met \`%prefix\` zullen alleen het commando uitvoeren.`
				+ "\nÂ» Typ `undo` om het laatste item in de afspeellijst te verwijderen.\u2002ðŸ§¹"
				+ "\nÂ» Typ `stop` als je klaar bent. Je kunt dingen blijven toevoegen totdat je `stop` typt.\u2002ðŸ›‘",
				outOfRange: "Buiten bereik.",
				playlistSection: "Afspeellijst sectie",
				bulkMenuOpen: "Je hebt hier al een menu openstaan. Typ `stop` om het te stoppen.",
				playlistPages: "Pagina %number van %total"
			},
			returns: {
				playlistAdded: "%username, ik heb **%song** toegevoegd aan afspeellijst **%playlist**",
				playlistRemoved: "%username, ik heb **%song** verwijderd uit afspeellijst **%playlist**",
				playlistCreated: "%username, ik heb afspeellijst **%playlist** aangemaakt",
				playlistImportDone: "Alles klaar! Bekijk je afspeellijst met **&music playlist %playlist**.",
				playlistDeleted: "Afspeellijst verwijderd.",
				playlistDeleteCancelled: "Verwijderen van afspeellijst geannuleerd",
				playlistMoved: "%username, ik heb **%song** verplaatst naar positie **%index**",
				bulkDone: "Alles klaar! Ik zal niets anders aan de afspeellijst toevoegen.",
				bulkMenuGone: "(Vroeger was er hier een menu, maar dat is nu weg.)"
			}
		},
		debug: {
			help: {
				usage: "[Kanaal]",
				description: "Biedt foutopsporingsinformatie voor als audio-commando's niet werken zoals bedoeld"
			},
			prompts: {
				guildOnly: "Je kunt geen muziek debuggen in een privÃ©bericht",
				invalidChannel: "Kanaal niet gevonden"
			},
			returns: {
				tip: "Tip:",
				tipValue: "Naast de rechten Tekstkanalen lezen en Reacties toevoegen, moeten bots ook het recht Berichtgeschiedenis lezen hebben om reacties op berichten toe te voegen",
				unnamedNode: "een naamloos knooppunt",
				queueUsing: "De huidige wachtrij gebruikt echter %name",
				infoFor: "Foutopsporingsinformatie voor %channel",
				permissions: "Rechten:",
				method: "Methode:"
			}
		}
	},

	configuration: {
		settings: {
			help: {
				usage: "<self|server> <view|setting name> [value]",
				description: "Wijzig instellingen die Amanda voor jezelf of voor de hele server zal gebruiken"
			},
			prompts: {
				cantModifyInDM: "Je kunt de instellingen van een server niet wijzigen als je het commando niet in een server gebruikt",
				backgroundRecommended: "Aanbevolen als een png/jpeg-bestand van 800x500px",
				invalidSyntaxScope: "De commando-syntaxis is `&settings <scope> <naam> <waarde>`. Je waarde voor `scope` was onjuist, het moet `self` of `server` zijn.",
				noSettings: "Er zijn geen instellingen ingesteld voor scope %scope",
				manageServer: "Je moet de rechten Server beheren of Beheerder hebben om de instellingen van Amanda op deze server te wijzigen.",
				invalidSyntaxName: "De commando-syntaxis is `&settings %usage`. Je waarde voor `naam` was onjuist, het moet een van deze zijn: %settings",
				invalidSettingScope: "De instelling `%setting` geldt niet voor de scope `%scope`.",
				currentValueServer: "De huidige waarde van `%setting` is `%value`. Deze waarde is ingesteld voor de server.",
				currentValueInherited: "De huidige waarde van `%setting` is niet ingesteld op deze server, dus het neemt de standaardwaarde over, namelijk `%value`.",
				noBackground: "Je had geen profielachtergrondafbeelding. Er is geen actie ondernomen.",
				donorRequired: "Je moet een donor zijn om deze instelling aan te passen.",
				invalidLink: "Er is een fout opgetreden bij het ophalen van de gegevens uit de verstrekte link. Zorg ervoor dat de link geldig is.",
				invalidLangCode: "%username, dat is geen geldige of ondersteunde taalcode. Ondersteunde taalcodes zijn %codes",
				invalidSyntaxBoolean: "De commando-syntaxis is `&settings <scope> <naam> <waarde>`. De instelling `%setting` is een boolean waarde, en dus moet je `%value` `true` of `false` zijn.",
				tooLong: "Die instelwaarde is te lang. Het mag niet meer dan 50 karakters zijn."
			},
			returns: {
				updated: "Instelling bijgewerkt.",
				deleted: "Instelling verwijderd."
			}
		},
		language: {
			help: {
				usage: "<code>",
				description: "Stel de taal in die Amanda zal gebruiken om met je te praten"
			},
			prompts: {},
			returns: {}
		},
		serverlanguage: {
			help: {
				usage: "<code>",
				description: "Stel de taal in die Amanda zal gebruiken in je server"
			},
			prompts: {},
			returns: {}
		},
		background: {
			help: {
				usage: "<url>",
				description: "Stel de achtergrond in die wordt weergegeven op &profile"
			},
			prompts: {},
			returns: {}
		}
	}
};
