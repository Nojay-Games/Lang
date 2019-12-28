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
	error: "API no regreso ningun dato.",
	dm: {
		success: "Te mande un mensaje privado.",
		fail: "nesesitas que darme permiso para mandarte un mensaje privado. A lo mejor me bloqueaste o nesesitas que activar mensajes directos a miembros del servidor. (ajustes de servidor → privacidad → permitir mensajes directos).",
		blocked: "No pude mandar un mensaje a este usuario. A lo mejor me bloquearon o nesesita que activar mensajes directos a miembros del servidor."
	},
	command: {
		dmOnly: "este comando solo funciona en mensajes privados.",
		guildOnly: "este comando no funciona en mensajes privados.",
		permPre: "No tengo permiso para",
		permPost: "Trabajo al 100 si tengo todos los permisos que pedi cuando me añadiste. Por favor modifica mis permisos.",
		input: {
			invalid: "eso no es valido",
			insufficient: "Tu no tienes suficiente"
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
				usage: "<codigo>",
				description: "Ejecuta arbitrary JavaScript en el processo"
			},
			prompts: {
				noInput: "No has escrito nada para ejecutar, menso."
			},
			returns: {}
		},
		execute: {
			help: {
				usage: "<codigo>",
				description: "Ejecuta un shell operation"
			},
			prompts: {
				noInput: "No has escrito nada para ejecutar, menso."
			},
			returns: {}
		},
		award: {
			help: {
				usage: "<cantidad> <usario>",
				description: "Premia a un usuario especifico"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidAmount: `%username, ${generic.command.input.invalid} cantidad para premiar.`,
				invalidUser: `%username, ${generic.command.input.invalid}`,
				dmFailed: generic.dm.blocked
			},
			returns: {
				channel: "%mention1 a regalado %number amandollars a %mention2",
				dm: `%mention te regalo %number ${generic.emoji.discoin}`
			}
		}
	},

	gambling: {
		slot: {
			help: {
				usage: "[cantidad: numero|all|half]",
				description: "Gira una maquina para la oportunidad de ganar amandollars"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} attach files. ${generic.command.permPost}`,
				invalidBet: `%username, ${generic.command.input.invalid}`,
				betSmall: `%username, nesesitar que apostar por lo menos 2 ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`
			},
			returns: {
				lost: `Lo siento. You didn't get a match. Has perdido %number ${generic.emoji.discoin}`,
				triple: `Un triple. Ganaste %number ${generic.emoji.discoin}`,
				heart1: `Un :heart: Ganaste %number ${generic.emoji.discoin}`,
				heart2: `Wow! Doble :heart: Ganaste %number ${generic.emoji.discoin}`,
				heart3: `WOW! Triple :heart: Ganaste %number ${generic.emoji.discoin}`
			}
		},
		flip: {
			help: {
				usage: "Ninguno",
				description: "Voltea una moneda"
			},
			prompts: {},
			returns: {
				flip: "You flipped %flip"
			}
		},
		betflip: {
			help: {
				usage: "<cantidad: numero|all|half> [h|t]",
				description: "Apuesta con una moneda para la opportunidad de ganar amandollars"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidBetandSide: "%username, nesesitas que apostar una cantidad de amandollars y elegir un lado para apostar.",
				invalidBet: `%username, ${generic.command.input.invalid}.`,
				betSmall: `%username, nesesitas que apostar por lo menos 1 amandollar ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				invalidSide: "%username, ese no es un lado disponible para apostar."
			},
			returns: {
				autoChoose: "No eligiste ningun lado, elegi uno para ti:",
				guess: "Tu elegiste %string1 Voltie %string2",
				win: `Bien hecho! Ganaste %number ${generic.emoji.discoin}`,
				lost: `Lo siento pero no elegiste correctamente. Para la proxima.`
			}
		},
		coins: {
			help: {
				usage: "[usuario]",
				description: "Regresa la cantidad de amandollars que tienes tu o el usuario"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidUser: `%username, ${generic.command.input.invalid} usuario.`,
			},
			returns: {
				coins: `amandollars para %display`
			}
		},
		daily: {
			help: {
				usage: "Ninguno",
				description: "un comando que te regala amandollars diariamente",
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				cooldown: "%username, tus monedas diarias se recuperan en %number.",
			},
			returns: {
				claimed: `%username reclamo sus monedas diarias y recibio %number ${generic.emoji.discoin}`
			}
		},
		leaderboard: {
			help: {
				usage: "[pagina]",
				description: "Enseña una tabla de clasificaciones de usuarios con mas monedas"
			},
			prompts: {},
			returns: {}
		},
		give: {
			help: {
				usage: "<cantidad: numero|all|half> <usuario>",
				description: "regala tus monedas a un usuario"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidAmountandUser: "%username, nesesitas que escribir una cantidad de amandollars y el nombre del usuario.",
				invalidUser: `%username, ${generic.command.input.invalid}`,
				cannotGiveSelf: "No puedes dar monedas a ti menso.",
				invalidGift: `%username, ${generic.command.input.invalid}`,
				giftSmall: `%username, nesesitas que regalar por lo menos 1 amandollar ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollar.`,
				dmFailed: generic.dm.blocked
			},
			returns: {
				channel: "%mention1 regalo %number amandollar a %mention2",
				dm: `%mention te regalo %number ${generic.emoji.discoin}`
			}
		},
		wheel: {
			help: {
				usage: "[cantidad: numero|all|half]",
				description: "Gira una rueda para la oportunidad de ganar amandollar"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} attach files. ${generic.command.permPost}`,
				invalidAmountWheel: "%username, nesesitas que escribir una cantidad para girar la rueda",
				betSmall: `%username, nesesitas que apostar por lo menos 1 moneda ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollar.`,
				invalidAmount: `%username, ${generic.command.input.invalid}`,
			},
			returns: {
				winnings: `%tag aposto %number1 amandollar y recibio %number2 de regreso ${generic.emoji.discoin}`
			}
		}
	},

	games: {
		trivia: {
			help: {
				usage: "[categoria]",
				description: "Juega un juego de trivia con otros usuarios para ganar amandollar"
			},
			prompts: {
				categorySelect: "para seleccionar una categoria usa `&trivia <nombre de la categoria>`.",
				dm: "%username, Te mande un mensaje privado con la lista de categorias.",
				noCategory: "%username, No encontre ninguna categoria con ese nombre. Usa `&trivia categories` para ver una lista de categorias.",
				multipleCategories: "%username, hay multiples categorias con ese nombre: %string",
				gameInProgress: "%username, ya hay un juego en seccion.",
				APIError: "Ha ocurrido un error en el api",
				parsingError: "Ha ocurrido un error analizando los datos regresado por el api",
				permissionDenied: `${generic.command.permPre} añadir reacciones`
			},
			returns: {}
		},
		minesweeper: {
			help: {
				usage: "[easy|medium|hard] [--raw] [--size:numero]",
				description: "Empienza un juego de minesweeper con el sistema de revelaciones de discord"
			},
			prompts: {},
			returns: {
				info: `%difficulty -- %number1 minas, tabla %number2 x %number3`,
				error: "El tamaño minimo es 4 y el maximo es 14.",
				rawTooLarge: "El contenido excede mas de 2000 palabras, por favor usa una tabla mas pequeña."
			}
		}
	},

	interaction: {
		ship: {
			help: {
				usage: "<usuario 1> <usuario 2>",
				description: "Ships a dos usuarios"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} attach files. ${generic.command.permPost}`,
				invalidUsers: `%username, nesesitas que escribir los usuarios`,
				invalidUser1: `%username:el primer miembro no es valido`,
				invalidUser2: `%username, the segundo miembro no es valido`,
				selfShip: "%username, no puedes hacer el ship a ti solo menso :v",
			},
			returns: {
				rating: "Que Bonito. Le doy %display1 y %display2 %percentage% de estar juntos."
			}
		},
		waifu: {
			help: {
				usage: "[usuario]",
				description: "Obtenga informacion waifu de usted mismo o de un usuario"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidUser: `%username, ${generic.command.input.invalid}`
			},
			returns: {
				price: "Precio:",
				claimedBy: "Reclamado por:",
				gifts: "Regalos:"
			}
		},
		claim: {
			help: {
				usage: "<cantidad: numero|all|half> <usuario>",
				description: "Reclama a un usuario como tu waifu. Requiere amandollars"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				badFormat: "%username, se escribe `&claim <cantidad> <usuario>`. Amount comes first, usuario comes last.",
				invalidUser: `%username, ${generic.command.input.invalid} usuario.`,
				selfClaim: "%username, no puedes reclamar a ti mismo menso :v",
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				claimSmall: `%username, nesesitas que reclamar a aguien por lo menos 1 ${generic.emoji.discoin}`,
				claimedByOther: `%username, este usuario ya fue reclamado por alguien mas, y por un precio mas alto. nesesitas que gastar mas de %number amandollars para reclamar a este usuario.`,
				doubleClaim: "%username, ya reclamaste a ese usuario como tu waifu. Si quieres subir su precio, usa `&gift <cantidad>`",
				dmFailed: generic.dm.blocked
			},
			returns: {
				claimed: `%mention1 reclamo a %mention2 por %number ${generic.emoji.discoin}`,
				dm: `%mention te reclamo por %number ${generic.emoji.discoin}`
			}
		},
		divorce: {
			help: {
				usage: "[razon]",
				description: "Divorcia a tu waifu"
			},
			prompts: {
				noWaifu: "%username, no tienes waifu menso :v",
				dmFailed: generic.dm.blocked
			},
			returns: {
				divorced: "%tag1 divorcio a %tag2 con %reason",
				dm: "%tag te divorcio con %reason"
			}
		},
		gift: {
			help: {
				usage: "<cantidad: numbero|all|half>",
				description: "Regala una cantidad de amandollars para subir el costo de tu waifu"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				noWaifu: "%username, tu no tienes a un waifu para regalar amandollars menso",
				noGift: "%username, no escribiste una cantidad para regalar",
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				invalidGift: `%username, ${generic.command.input.invalid}`,
				giftSmall: `%username, nesesitas que regalar por lo menos 1 ${generic.emoji.discoin}`
			},
			returns: {
				gifted: "%tag1 regalo %number amandollars para el precio de %tag2"
			}
		},
		bean: {
			help: {
				usage: "<usuario>",
				description: "Banea a un usuario"
			},
			prompts: {
				guildOnly: "%username, no puedes darle ban a alguien en mensajes privados menso",
				invalidUser: `%username, ${generic.command.input.invalid}`,
				selfBean: "%username, no puedes darle ban a ti mismo menso"
			},
			returns: {
				beaned: "%tag fue baneado!"
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
				usage: "Ninguno",
				description: "Añada a Amanda a tu servidor"
			},
			prompts: {},
			returns: {
				invited: "Fui invitada?",
				notice: "Recuerda, nesesitas permisos de **Gestionar servidor** para añadir bots a tu servidor ."
			}
		},
		info: {
			help: {
				usage: "Ninguno",
				description: "Enseña informacion de Amanda"
			},
			prompts: {},
			returns: {
				thanks: "Gracias por ser mi amigo(a)! :heart:\nAqui esta mi informacion...",
				creators: "Creador",
				links: "Visita el sitio web de amanda [sitio web](%website) o su servidor de soporte [servidor de soporte](https://discord.gg/zhthQjH)\nQuieres donar? Visita mi pagina de patreon [Patreon](https://www.patreon.com/papiophidian) o puedes dar una donacion de 1 vez aqui [PayPal](https://paypal.me/papiophidian).\nWanna see Amanda's growth over time? You can [here](https://cheweyz.github.io/discord-bot-analytics-dash/index.html?id=320067006521147393)"
			}
		},
		donate: {
			help: {
				usage: "Ninguno",
				description: "Obten informacion de como hacer una donacion"
			},
			prompts: {},
			returns: {
				intro: "Piensas en dar una donacion? ❤",
				description: "Estoy muy feliz que quieres dar una donacion a mis creadores!"
				+"\n\nSi te interesa hacer donaciones cada mes, visita [Patreon](https://www.patreon.com/papiophidian),"
				+" o si quieres dar una donacion de 1 vez, visita [PayPal](https://paypal.me/papiophidian)."
				+"\n\nTodas las donaciones van por mi desarrollo."
				+"\nAcesso a mis funciones no cambiaran por tu elecciones,"
				+" pero recibiras un rol de donacion en nuestro servidor de soporter [Servidor de soporte](https://discord.gg/zhthQjH)"
				+" y recibes una medalla de donador en &profile."
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
				dmFailed: generic.dm.blocked,
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
				playlistRemoved: "%username, Removed **%song** from playlist **%playlist**",
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
				playlistCreated: "%username, Created playlist **%playlist**",
				playlistImportDone: "All done! Check out your playlist with **&music playlist %playlist**.",
				playlistDeleted: "Playlist deleted.",
				playlistMoved: "%username, Moved **%song** to position **%index**"
			}
		}
	}
};
