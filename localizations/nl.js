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
	image: {
		dm: "Why would you want to %action someone in DMs?",
		noUser: "You have to tell me who you wanna %action"
	},
	emoji: {
		discoin: '<a:Discoin:422523472128901140>'
	}
}

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
				channel: '%mention1 heeft %number amandollars gegeven aan %mention2',
				dm: `%mention heeft je %number ${generic.emoji.discoin} gegeven`
			}
		}
	},

	gambling: {
		slot: {
			help: {
				usage: '[hoeveelheid: nummer|all|half]',
				description:
					'Runt een willekeurige gokautomaat en maakt kans op amandollars'
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} voeg bestanden toe. ${generic.command.permPost}`,
				invalidBet: `%username, ${generic.command.input.invalid} heeft gegokt.`,
				betSmall: `%username, je moet tenminste 2 ${generic.emoji.discoin} gokken`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`
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
			returns: {
				flip: "You flipped %flip"
			}
		},
		betflip: {
			help: {
				usage: '<hoeveelheid: nummer|all|half> [h|t]',
				description:
					'Plaats een gok op een willekeurige gooi voor een kans op amandollars'
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidBetandSide:
					'%username, je moet een gok geven en een kant om op te gokken.',
				invalidBet: `%username, ${generic.command.input.invalid} heeft gegokt.`,
				betSmall: `%username, je moet tenminste 1 ${generic.emoji.discoin} gokken`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
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
					'Retourneerd de hoeveelheid amandollars die jij of een andere gebruiker heeft'
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
					'Een dagelijks commando dat een willekeurige hoeveelheid amandollars geeft'
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
				description: 'Geeft amandollars aan een gebruiker vanaf jouw account'
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidAmountandUser:
					'%username, je moet een hoeveelheid geven en dan een gebruiker.',
				invalidUser: `%username, ${generic.command.input.invalid} gebruiker.`,
				cannotGiveSelf: 'Je kan jezelf geen amandollars geven, onnozele.',
				invalidGift: `%username, ${generic.command.input.invalid} cadeau.`,
				giftSmall: `%username, je moet tenminste 1 ${generic.emoji.discoin} geven`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				dmFailed: generic.dm.blocked
			},
			returns: {
				channel: '%mention1 heeft %number amandollars gegeven aan %mention2',
				dm: `%mention heeft je %number ${generic.emoji.discoin} gegeven`
			}
		},
		wheel: {
			help: {
				usage: '[hoeveelheid: nummer|all|half]',
				description:
					'Een Rad van Fortuin voor een kans om meer amandollars te krijgen'
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} voeg bestanden toe. ${generic.command.permPost}`,
				invalidAmountWheel:
					'%username, je moet een hoeveelheid geven om het rad mee te draaien',
				betSmall: `%username, je moet tenminste 1 ${generic.emoji.discoin} gokken`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				invalidAmount: `%username, ${generic.command.input.invalid} hoeveelheid.`
			},
			returns: {
				winnings: `%tag heeft %number1 amandollars gegokt en heeft %number2 ${generic.emoji.discoin} teruggekregen`
			}
		}
	},

	games: {
		trivia: {
			help: {
				usage: '[categorie]',
				description:
					'Speelt een spel van trivia met andere leden en win amandollars'
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
				info: `%difficulty -- %number1 bommen, %number2 x %number3 bord`,
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
				description: 'Claimt iemand als een waifu. Vereist amandollars'
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				badFormat:
					'%username, de juiste indeling is `&claim <hoeveelheid> <gebruiker>`. Hoeveelheid komt eerst, gebruiker komt laatst.',
				invalidUser: `%username, ${generic.command.input.invalid} gebruiker.`,
				selfClaim: '%username, je kan niet jezelf claimen, onnozele',
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				claimSmall: `%username, je moet iemand claimen met tenminste 1 ${generic.emoji.discoin}`,
				claimedByOther: `%username, dit persoon is al door iemand anders geclaimd, voor een hogere prijs. Je zou tenminste %number amandollars moeten spenderen om degene te stelen.`,
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
					"Schenkt een hoeveelheid van amandollars naar je waifu's prijs"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				noWaifu:
					'%username, je hebt geen waifu om amandollars te schenken, onnozele',
				noGift: '%username, je hebt geen hoeveelheid voor een geschenk gegeven',
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				invalidGift: `%username, ${generic.command.input.invalid} cadeau.`,
				giftSmall: `%username, je moet iemand tenminste 1 ${generic.emoji.discoin} schenken`
			},
			returns: {
				gifted: "%tag1 heeft %number amandollars geschonken naar %tag2's prijs"
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
				creators: 'Makers',
				links:
					"Bezoek Amanda's [website](%website) of haar [ondersteuningsserver](%server)\nWil je doneren? Bekijk haar [Patreon](%patreon) of maak een eenmalige donatie door [PayPal](%paypal).\nWanna see Amanda's growth over time? You can [here](%stats)"
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
					'\n\nAls je bent geïnteresseerd in het maken van maandelijkse donaties, kan je dat doen op [Patreon](%patreon),' +
					' of als je een eenmalige donatie wilt maken, kan je doneren door [PayPal](%paypal).' +
					'\n\nAl het gedoneerde geld gaat terug naar de ontwikkeling.' +
					"\nToegang tot Amanda's kenmerken zullen niet veranderen, wat je keuze ook is," +
					' maar je zult wel een donor rol krijgen in onze [Ondersteuningsserver](%server)' +
					' en een onderscheidende donor badge krijgen op &profile.'
			}
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
				+"\nType `&help [command]` to see more information about a command."
			}
		}
	},

	audio: {
		musictoken: {
			help: {
				usage: "[new|delete]",
				description: "Obtain a web dashboard login token"
			},
			prompts: {
				dmSuccess: generic.dm.success,
				dmFailed: generic.dm.fail,
				none: "You do not currently have any tokens. Use `&musictoken new` to generate a new one."
			},
			returns: {
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
				voiceChannelRequired: "%username, you need to join a voice channel to do that.",
				voiceCantJoin: "%username, I don't have permission to join your voice channel.",
				voiceCantSpeak: "%username, I don't have permission to speak in your voice channel.",
				playableRequired: "%username, please provide either a YouTube video link or some words for me to search for.",
				youtubeRequired: "%username, please provide a YouTube link or video ID.",
				queueCannotDo: "The current queue cannot be %action at this time.",
				voiceChannelWaiting: "%username, you need to join a voice channel to do that. Waiting for you to connect..."
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
				+"After deletion, you will not be able to play, display, or modify the playlist, and anyone will be able to create a new playlist with the same name."
				+"\nYou will not be able to undo this action.\n\n"
				+"<:bn_del:331164186790854656> - confirm deletion\n"
				+"<:bn_ti:327986149203116032> - ignore"
			},
			returns: {
				playlistAdded: "%username, Added **%song** to playlist **%playlist**",
				playlistRemoved: "%username, Removed **%song** from playlist **%playlist**",
				playlistCreated: "%username, Created playlist **%playlist**",
				playlistImportDone: "All done! Check out your playlist with **&music playlist %playlist**.",
				playlistDeleted: "Playlist deleted.",
				playlistMoved: "%username, Moved **%song** to position **%index**"
			}
		}
	}
};
