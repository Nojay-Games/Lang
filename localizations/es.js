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
		fail: "necesitas que darme permiso para mandarte un mensaje privado. A lo mejor me bloqueaste o necesitas que activar mensajes directos a miembros del servidor. (ajustes de servidor → privacidad → permitir mensajes directos).",
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
		dm: "porque quieres darle %action a alguien en mensajes privados?",
		noUser: "Tienes que decirme a quien quieres a %action"
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
				invalidUser: "%username, eso no es usario valido",
				dmFailed: generic.dm.blocked
			},
			returns: {
				channel: "%mention1 a regalado %number amandollars a %mention2",
				dm: `%mention te regalo %number ${generic.emoji.discoin}`
			}
		},
		forcestatusupdate: {
			help: {
				usage: "Ninguno",
				description: "Obliga al fragmento a enviar datos estadísticos a la base de datos"
			},
			prompts: {},
			returns: {}
		},
		restartnotify: {
			help: {
				usage: "Ninguno",
				description: "Te notifica cuando Amanda regresa en linea"
			},
			prompts: {},
			returns: {
				confirmation: "Ok. Te notificare la proxima vez que reinicio"
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
				permissionDenied: `${generic.command.permPre} adjuntar archivos. ${generic.command.permPost}`,
				invalidBet: `%username, ${generic.command.input.invalid}`,
				betSmall: `%username, nesesitar que apostar por lo menos 2 ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`
			},
			returns: {
				lost: `Lo siento. No salio ningun par. Has perdido %number ${generic.emoji.discoin}`,
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
				flip: "Volteaste %flip"
			}
		},
		betflip: {
			help: {
				usage: "<cantidad: numero|all|half> [h|t]",
				description: "Apuesta con una moneda para la opportunidad de ganar amandollars"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidBetandSide: "%username, necesitas que apostar una cantidad de amandollars y elegir un lado de la moneda para apostar.",
				invalidBet: `%username, ${generic.command.input.invalid}.`,
				betSmall: `%username, necesitas que apostar por lo menos 1 amandollar ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				invalidSide: "%username, ese no es un lado disponible para apostar."
			},
			returns: {
				autoChoose: "No eligiste ningun lado, elegi uno para ti:",
				guess: "Tu elegiste %string1 Voltie %string2",
				win: `Bien hecho! Ganaste %number ${generic.emoji.discoin} %explanation`,
				lost: `Lo siento pero no elegiste correctamente. Has perdido %number ${generic.emoji.discoin}`
			}
		},
		coins: {
			help: {
				usage: "[usuario]",
				description: "Regresa la cantidad de amandollars que tienes tu o el usuario"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidUser: "%username, eso no es usario valido",
			},
			returns: {
				coins: `amandollars de %display`
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
				usage: "[local] [pagina: numero]",
				description: "Enseña una tabla de clasificaciones de usuarios con mas monedas"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				pageLimit: "%username, solo puedes navegar asta la pagina %maxPages.",
				pageCurrent: "Pagina %current de %total"
			},
			returns: {
				emptyPage: "Solo hay %lastPage paginas para navegar."
			}
		},
		give: {
			help: {
				usage: "<cantidad: numero|all|half> <usuario>",
				description: "regala tus monedas a un usuario"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidAmountandUser: "%username, necesitas que escribir una cantidad de amandollars y el nombre del usuario.",
				invalidUser: "%username, eso no es usario valido",
				cannotGiveSelf: "No puedes regalarte amandollars a ti mismo, menso.",
				invalidGift: `%username, ${generic.command.input.invalid}`,
				giftSmall: `%username, necesitas que regalar por lo menos 1 amandollar ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				dmFailed: generic.dm.blocked
			},
			returns: {
				channel: "%mention1 regalo %number amandollars a %mention2",
				dm: `%mention te regalo %number ${generic.emoji.discoin}`
			}
		},
		wheel: {
			help: {
				usage: "[cantidad: numero|all|half]",
				description: "Gira una rueda para la oportunidad de ganar amandollars"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} adjuntar archivos. ${generic.command.permPost}`,
				invalidAmountWheel: "%username, necesitas que escribir una cantidad para girar la rueda",
				betSmall: `%username, necesitas que apostar por lo menos 1 amandollar ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollars.`,
				invalidAmount: `%username, ${generic.command.input.invalid}`,
			},
			returns: {
				winnings: `%tag aposto %number1 amandollars y recibio %number2 de regreso ${generic.emoji.discoin}`
			}
		}
	},

	games: {
		trivia: {
			help: {
				usage: "[categoria]",
				description: "Juega un juego de trivia con otros usuarios para ganar amandollars"
			},
			prompts: {
				categorySelect: "para seleccionar una categoria usa `&trivia <nombre de la categoria>`.",
				dm: "%username, Te mande un mensaje privado con la lista de categorias.",
				noCategory: "%username, No encontre ninguna categoria con ese nombre. Usa `&trivia categories` para ver una lista de categorias.",
				multipleCategories: "%username, hay multiples categorias con ese nombre: %string",
				gameInProgress: "%username, ya hay un juego en seccion.",
				APIError: "Ha ocurrido un error en el api",
				parsingError: "Ha ocurrido un error analizando los datos regresado por el api",
				permissionDenied: `${generic.command.permPre} añadir reacciones`,
				provideAnswer: "Para responder, escribe una letra en el chat. Tienes 20 segundos.",
				reactionRound: "Haga clic en la reaccion para otra ronda..",
				permissionRound: "Puedes escribir \`&trivia\` o \`&t\` para otra ronda.",
				winners: "Ganadores",
				noWinners: "No hay ganadores",
				nextRound: "Siguiente ronda",
				categories: "Categorias",
				dmError: generic.dm.fail
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

	images: {
		cat: {
			help: {
				usage: "Ninguno",
				description: "Envia un imagen de un gato"
			},
			prompts: {},
			returns: {}
		},
		dog: {
			help: {
				usage: "Ninguno",
				description: "Envia un imagen de un perro"
			},
			prompts: {},
			returns: {}
		},
		space: {
			help: {
				usage: "Ninguno",
				description: "Envia un imagen del espacio"
			},
			prompts: {},
			returns: {}
		},
		snek: {
			help: {
				usage: "Ninguno",
				description: "Envia un imagen de una serpiente"
			},
			prompts: {},
			returns: {}
		},
		birb: {
			help: {
				usage: "Ninguna",
				description: "Envia un imagen de un pajaro"
			},
			prompts: {},
			returns: {}
		},
		catgirl: {
			help: {
				usage: "Ninguna",
				description: "Envia un imagen de un catgirl"
			},
			prompts: {},
			returns: {
				error: "Uh oh.",
				offline: "Parece que el API de nekos.life no esta en linea."
				+ "\nNo pude obtener nuevas imagenes por el momento."
				+ "\nAqui hay una catgirl dormida mientras esperamos que vuelva a estar en linea."
			}
		}
	},

	couples: {
		couple: {
			help: {
				usage: "[User]",
				description: "Get couple information about a user"
			},
			prompts: {
				invalidUser: "%username, that is not a valid user.",
				noInfo: "No couple info."
			},
			returns: {
				infoFor: "Couple info for %tag1 and %tag2",
				users: "Users",
				balance: "Balance"
			}
		},
		marry: {
			help: {
				usage: "<User>",
				description: "Propose to a user"
			},
			prompts: {
				noUser: "%username, you need to provide someone to propose to.",
				invalidUser: "%username, that is not a valid user.",
				selfMarried: "%username, you are already married.",
				userMarried: "%username, %user is already married.",
				selfProposed: "%username, you are already proposed to %tag",
				dmFailed: generic.dm.blocked
			},
			returns: {
				proposed: "%username has successfully proposed to %tag. They can use %accept or %decline to marry or decline.",
				dmProposed: "%tag has proposed to you. You can use %accept or %decline to marry or decline."
			}
		},
		accept: {
			help: {
				usage: "<User>",
				description: "Accepts a proposal from a user."
			},
			prompts: {
				noUser: "%username, you need to provide someone to accept their proposal.",
				invalidUser: "%username, that is not a valid user.",
				noProposal: "%username, %tag has not proposed to you yet.",
				selfProposed: "%username, you cannot accept your own proposal.",
				selfMarried: "%username, you are already married.",
				userMarried: "%username, %user is already married.",
			},
			returns: {
				married: "%tag1 is now married to %tag2"
			}
		},
		decline: {
			help: {
				usage: "<User>",
				description: "Declines a proposal from a user."
			},
			prompts: {
				noUser: "%username, you need to provide someone to accept their proposal.",
				invalidUser: "%username, that is not a valid user.",
				noProposal: "%username, %tag has not proposed to you yet.",
				selfProposed: "%username, you cannot decline your own proposal.",
				selfMarried: "%username, you are already married.",
				userMarried: "%username, %user is already married.",
			},
			returns: {
				declines: "%tag1 has declined %tag2's marriage proposal."
			}
		},
		divorce: {
			help: {
				usage: "[reason]",
				description: "Divorces a user"
			},
			prompts: {
				notMarried: "%username, you are not married to anyone.",
				dmFailed: generic.dm.blocked
			},
			returns: {
				divorced: "%tag1 has filed for a divorce from %tag2: %reason",
				dm: "%tag has filed for a divorce from you: %reason"
			}
		},
		bank: {
			help: {
				usage: "[User]",
				description: "View the balance of a couple"
			},
			prompts: {
				selfNotMarried: "%username, you are not married to anyone.",
				userNotMarried: "%username, %tag is not married to anyone.",
				dmFailed: generic.dm.blocked
			},
			returns: {
				balance: "Couple balance for %tag1 and %tag2"
			}
		},
		withdraw: {
			help: {
				usage: "[amount: number|all|half]",
				description: "Withdraw money from your couple balance"
			},
			prompts: {
				notMarried: "%username, you are not married to anyone.",
				noMoney: "%username, there is no amandollars to withdraw.",
				invalidAmount: "%username, that is not a valid amount.",
				amountSmall: "%username, you must provide a number greater than 0.",
				amountLarge: "%username, you cannot withdraw more than what is in the couple balance."
			},
			returns: {
				success: "%username, successfully transacted %amount to your balance"
			}
		},
		deposit: {
			help: {
				usage: "[amount: number|all|half]",
				description: "Deposit money to your couple balance"
			},
			prompts: {
				notMarried: "%username, you are not married to anyone.",
				noMoney: "%username, you do not have any amandollars to deposit.",
				invalidAmount: "%username, that is not a valid amount.",
				amountSmall: "%username, you must provide a number greater than 0.",
				amountLarge: "%username, you do not have that many amandollars."
			},
			returns: {
				success: "%username, successfully transacted %amount from your balance"
			}
		},
		coupleleaderboard: {
			help: {
				usage: "[local] [page: number]",
				description: "Displays the leaderboard of the richest couples"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				pageLimit: "%username, you may only browse up to page %maxPages."
			},
			returns: {
				emptyPage: "There are only %lastPage pages to browse through.",
				pageCurrent: "Page %current of %total"
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
				permissionDenied: `${generic.command.permPre} adjuntar archivos. ${generic.command.permPost}`,
				invalidUsers: `%username, necesitas que escribir los usuarios`,
				invalidUser1: `%username:el primer miembro no es valido`,
				invalidUser2: `%username, el segundo miembro no es valido`,
				selfShip: "%username, no puedes hacer el ship a ti solo menso :v",
			},
			returns: {
				rating: "Que Bonito. Le doy %display1 y %display2 %percentage% de estar juntos."
			}
		},
		bean: {
			help: {
				usage: "<usuario>",
				description: "Banea a un usuario"
			},
			prompts: {
				guildOnly: "%username, no puedes darle ban a alguien en mensajes privados menso",
				invalidUser: "%username, eso no es usario valido",
				selfBean: "%username, no puedes darle ban a ti mismo menso"
			},
			returns: {
				beaned: "%tag fue baneado!"
			}
		},
		hug: {
			help: {
				usage: "<user>",
				description: "Abraza a alguien"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: "%username, eso no es usario valido"
			},
			returns: {
				amanda: "**Abraza a %username de regreso** :heart:",
				action: "%username abrazo a %mention"
			}
		},
		nom: {
			help: {
				usage: "<usuario>",
				description: "Muerde a alguien"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: "%username, eso no es usario valido"
			},
			returns: {
				amanda: "owie",
				action: "%username mordio a %mention"
			}
		},
		kiss: {
			help: {
				usage: "<usuario>",
				description: "Besa a alguien"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: "%username, eso no es usario valido"
			},
			returns: {
				amanda: "**Besa a %username de regreso** :heart:",
				action: "%username beso a %mention"
			}
		},
		cuddle: {
			help: {
				usage: "<usuario>",
				description: "Abraza a alguien"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: "%username, eso no es usario valido"
			},
			returns: {
				amanda: "**Abraza a %username de regreso** :heart:",
				action: "%username abrazo a %mention"
			}
		},
		poke: {
			help: {
				usage: "<usuario>",
				description: "Toqua a alguien"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: "%username, eso no es usario valido"
			},
			returns: {
				amanda: "No me toques ; ^ ;",
				action: "%username le dio toque a %mention"
			}
		},
		slap: {
			help: {
				usage: "<usuario>",
				description: "Abofetea a alguien"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: "%username, eso no es usario valido"
			},
			returns: {
				amanda: "**Abofetea a %username de regreso** Eso me dolio ; ^ ;",
				action: "%username abofeteo a %mention"
			}
		},
		boop: {
			help: {
				usage: "<usuario>",
				description: "Toqua a alguien"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: "%username, eso no es usario valido"
			},
			returns: {
				amanda: "No me toques ; ^ ;",
				action: "%username le dio toque a %mention"
			}
		},
		pat: {
			help: {
				usage: "<usuario>",
				description: "Dale palmaditas a alguien en la cabeza"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: "%username, eso no es usario valido"
			},
			returns: {
				amanda: "≥ w ≤",
				action: "%username le dio palmaditas en la cabeza a %mention"
			}
		}
	},

	meta: {
		statistics: {
			help: {
				usage: "[music|games]",
				description: "Enseña estadisticas para nerds"
			},
			prompts: {
				slow: "Uff. Odio cuando soy muy lenta"
			},
			returns: {
				songsToday: "**❯ Numero de canciones tocadas hoy:**\n%number",
				songsQueued: "**❯ Numero de canciones en cola:**\n%number",
				voiceConnections: "**❯ Numero de conexiones de voz:**\n%number",
				usersListening: "**❯ Numero de usuarios escuchando:**\n%number",
				gamesToday: "**❯ Numero de juegos jugados hoy:**\n%number",
				gamesInProgress: "**❯ Numero de juegos en proceso:**\n%number",
				usersPlaying: "**❯ Numero de usuarios jugando:**\n%number",
				heartbeat: "Latido de corazon",
				latency: "Latencia",
				uptime: "Tiempo de actividad",
				ramUsage: "Uso de RAM",
				userCount: "**❯ Cantidad de usuarios:**\n%number",
				guildCount: "**❯ Cantidad de servidores:**\n%number",
				channelCount: "**❯ Cantidad de canales:**\n%number",
			}
		},
		ping: {
			help: {
				usage: "Ninguno",
				description: "Pos que crees que hace?"
			},
			prompts: {},
			returns: {
				pong: "Pong!",
				heartbeat: "❯ Latido de corazon",
				latency: "❯ Latencia",
				footer: "E-Espera... Se llama tenis de mesa"
			}
		},
		invite: {
			help: {
				usage: "Ninguno",
				description: "Añada a Amanda a tu servidor"
			},
			prompts: {},
			returns: {
				invited: "Fui invitada?",
				link: "Enlance de invitacion: %link",
				notice: "Recuerda, necesitas permisos de **Gestionar servidor** para añadir bots a tu servidor ."
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
				links: "Visita el sitio web de amanda [sitio web](%website) o su servidor de soporte [servidor de soporte](%server)\nQuieres donar? Visita mi pagina de patreon [Patreon](%patreon) o puedes dar una donacion de 1 vez aqui [PayPal](%paypal).\nWanna see Amanda's growth over time? You can [here](%stats)"
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
				+"\n\nSi te interesa hacer donaciones cada mes, visita [Patreon](%patreon),"
				+" o si quieres dar una donacion de 1 vez, visita [PayPal](%paypal)."
				+"\n\nTodas las donaciones van por mi desarrollo."
				+"\nAcesso a mis funciones no cambiaran por tu elecciones,"
				+" pero recibiras un rol de donacion en nuestro servidor de soporter [Servidor de soporte](%server)"
				+" y recibes una medalla de donador en &profile."
			}
		},
		commits: {
			help: {
				usage: "Ninguno",
				description: "Obtenga las git commits recientes para Amanda"
			},
			prompts: {},
			returns: {}
		},
		privacy: {
			help: {
				usage: "Ninguno",
				description: "Detalles de la declaracion de privacidad de Amanda"
			},
			prompts: {
				dmSuccess: generic.dm.success
			},
			returns: {} // intentionally empty as Privacy policies might not translate properly and may have different implications
		},
		user: {
			help: {
				usage: "[usuario]",
				description: "Proporciona informacion sobre un usuario."
			},
			prompts: {
				invalidUser: "%username, eso no es usario valido"
			},
			returns: {}
		},
		avatar: {
			help: {
				usage: "[usuario]",
				description: "Obtenga el perfil de un usuario"
			},
			prompts: {
				invalidUser: "%username, eso no es usario valido"
			},
			returns: {}
		},
		icon: {
			help: {
				usage: "Ninguno",
				description: "Obten el icono de un servidor"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`
			},
			returns: {}
		},
		wumbo: {
			help: {
				usage: "<emoji>",
				description: "Hace un emoji mas grande"
			},
			prompts: {
				invalidEmoji: `%username, ${generic.command.input.invalid} emoji.`
			},
			returns: {}
		},
		profile: {
			help: {
				usage: "[usuario]",
				description: "Obter informacion de un usuario"
			},
			prompts: {
				invalidUser: "%username, eso no es usario valido",
				permissionDenied: `${generic.command.permPre} adjuntar archivos. ${generic.command.permPost}`
			},
			returns: {}
		},
		help: {
			help: {
				usage: "[Command|Category]",
				description: "Su comando de ayuda ordinario"
			},
			prompts: {
				invalidCommand: "**%tag**, No pude encontrar informacion de ayuda para ese comando"
			},
			returns: {
				footer: "Escribe `&help [command]` para ver mas informacion sobre ese comando",
				mobile: "Haga clic en la reaccion para obtener una vista compatible para dispositivos moviles",
				main: "Escribe `&help [category]` para ver todos los comandos en esa categoria."
				+ "\nEscribe `&help [command]` para ver mas informacion sobre ese comando.",
				info: "Escribe `&info` Informacion general de Amanda.\nPara mas, unete a nuestro servidor de soporte: %link"
			}
		}
	},

	audio: {
		token: {
			help: {
				usage: "[new|delete]",
				description: "Obtenga un token de inicio de sesion de panel web"
			},
			prompts: {
				dmFailed: generic.dm.fail,
				none: " no tienes ningun token actualmente. Usa `&musictoken new` para generar uno."
			},
			returns: {
				dmSuccess: generic.dm.success,
				deleted: "Borre todos tus tokens. Usa `&musictoken new` para generar uno nuevo.",
				new: "Tus tokens existentes fuero borrados y uno nuevo fue creado."
				+"\nNo compartes este token a nadie. Si lo compartiste por error, puedes usar `&musictoken delete` para borrarlo y te mantenga a salvo."
				+"\nAhora puedes ingresar! %website",
				generated: "Aqui esta tu token que fue generado previamente:"
				+"\nPuedes usar `&musictoken delete` para borrarlo, y `&musictoken new` para regenerarlo."
			}
		},
		frisky: {
			help: {
				usage: "[original|deep|chill|classics]",
				description: "Toca Frisky Radio: https://friskyradio.com"
			},
			prompts: {},
			returns: {
				schedule: "Frisky Radio ­— Schedule",
				footer: "Usa &frisky [station] para tocar una estacion"
			}
		},
		music: {
			help: {
				usage: "Ninguno. No debes de usar esto.",
				description: "Ninguno. No debes de ver esto."
			},
			prompts: {
				guildOnly: generic.command.guildOnly,
				invalidSkips: "Esto no es una cantidad valida para omitir canciones",
				invalidSkipsAmount: "Necesitas que omitr 1 o mas canciones",
				tooManySkips: "No puedes omitir mas canciones que estan en la cola!",
				invalidAction: "%username, esa accion valida. Si quieres tocar una cancion, usa `&music play <song>`.\nUsa `&help music` y `&help playlists` para ver mas cosas que puedes hacer!",
				nothingPlaying: "%username, nada esta tocando actualmente.",
				noResults: "No hay resultados.",
				voiceChannelRequired: "%username, necesitas que unirte a un canal de voz para hacer eso.",
				voiceCantJoin: "%username, No tengo permiso para unirme en tu canal de voz.",
				voiceCantSpeak: "%username, No tengo permiso para hablar en to canal de voz.",
				playableRequired: "%username, por favor proporcione un enlance de Youtube o escribe unas palabras para que yo busque.",
				youtubeRequired: "%username, pro favor proporcione un enlance de Youtube o ID de video.",
				queueCannotDo: "La cola actualmente no puede %action en este momento.",
				voiceChannelWaiting: "%username, necesitas que unirte a un canal de voz para hacer eso. Esperando que te conectas...",
				songSelection: "Seleccion de canciones",
				songSelectionCanceled: "Seleccion de canciones cancelada",
				totalLength: "Duracion: %number",
				queueFor: "Cola de musica para %server",
				everyoneLeft: "Todos se fueron, y yo tambien.",
				songNotPlayingDiscord: "Hmm. Parece que esta cancion no esta tocando."
				+ "\n\n**Esto probablemente es un problema con Discord.**"
				+ "\nTrata de cambiar la region del servidor."
				+ "\n\nPara reportar un problema, unete a nuestro servidor de soporte: https://discord.gg/YMkZDsK",
				songErrorExclaimation: "`song.track` es ! marcador de posicion. Esto es un error.",
				songErrorNull: "`song.track` Es nula o indefinida. Esto es un error.",
				songNotPlayable: "No pude tocar esa cancion",
				errorOccured: "Corri con un error",
				songErrorNotObject: "Cancion no es un objectivo %song",
				tooManyErrors: "Demasiados errores!",
				errorsSuppressed: "Los errores futuros de esta cola se silenciaran."
				+ "\nSi fallan mas canciones, se omitiran sin mensaje de error."
				+ "\nPara reportar un error, unete a nuestro servidor de soporte: https://discord.gg/YMkZDsK",
				autoRanOut: "Modo auto esta activado, pero ya se me agoto la lista de canciones relacionadas y nesesitaba que parar.",
				queueAlreadyPaused: "Musica ya esta en pausa. Usa `&music resume` para resumir.",
				queueNowPlaying: "Tocando: %song",
				noUsersLeft: "No hay usuarios en el canal de voz. Dejare de jugar en %time segundos si nadie se une.",
				autoOn: "El modo auto ahora esta activado.",
				autoOff: "El modo auto ahora fue desactivado.",
				loopOn: "El modo de bucle ahora esta activado.",
				loopOff: "El modo de bucle ahora esta desactivado.",
				musicPlaying: "La musica ya esta tocando. Si quieres pausar, usa `&music pause`.",
				songRemoveRequired: "Necesitas que decirme cual cancion quieres que elimine. `&music queue remove <number>`"
				+ "\nPara borrar toda la cola, usa `&music queue clear` o `&music queue remove all`.",
				songRemove1: "El elemento 1 es la cancion que esta tocando actualmente. Usa `&music skip` para omitirlo, "
				+ "o `&music queue remove 2` si quisieras eliminar la cancion que sigue.",
				queueSongTotal: "Hay %number1 canciones en la cola. Solo puedes eliminar canciones 2-%number2.",
				numberNotInRelated: "El numero que escribio no es un elemento en la lista relacionada. Usa `&music related`."
			},
			returns: {
				queueClear: "Limpiando la cola, quitando %number",
				queueIn: "La sesion de musica actual esta tocando en %channel. Ve alli para ver que esta jugando!"
			}
		},
		playlist: {
			help: {
				usage: "Ninguno. No debes de ver esto.",
				description: "Ninguno. No debes de ver esto."
			},
			prompts: {
				playFromStart: "Reproduce toda la lista de reproduccion desde el principio",
				playFromLinked: "Reproduzca la lista de reproduccion, comenzando en la cancion vinculada.",
				playOnlyLinked: "Solo reproduce la cancion vinculada",
				userLinked: "Has vinculado a esta cancion en la lista de reproduccion: %title",
				query: "Que deseas hacer?",
				selectionInfo: "Para reproducir un rango mas especifico de la lista de reproduccion, usa `&music play <link> <start> <end>`. Escribe `&help playlist` para mas informacion.",
				playlistNameRequired: "%username, debes nombrar una lista de reproduccion. Usa `&music playlists show` para mostrar todas las listas de reproduccion.",
				directPlaylist: "%username, puedes reproducir una lista de reproduccion directamente! Solo pasalo a \`&music play\`"
				+"%info\n\n\n\nSi aun deseas importar una lista de reproduccion a Amanda, primero debe darle un nombre descriptivo, como `bobs_songs`.",
				playlistNameLimit: "%username, el nombre de la lista de reproduccion debe tener 24 caracteres o menos.",
				playlistNotExist: "%username, Esa lista de reproduccion no existe. Usa \`&music playlist %playlist create\` para crearlo.",
				databaseFixed: "%username, Las entradas del base de datos para esa lista de reproducción son inconsistentes. Las inconsistencias se han resuelto restableciendo el orden de las canciones en esa lista de reproduccion. Aparte del orden de las canciones, no se perdieron datos. Las otras listas de reproduccion no fueron afectadas.",
				usePlaylistAdd: "No uses la lista de reproduccion importando con `playlist add`. En vez usa `playlist import`",
				youtubeLinkInvalid: "%username, Ese no es un enlace valido de YouTube",
				indexRequired: "%username, Proporcione el indice del articulo para eliminar",
				indexMoveRequired: "Proporcione un indice para moverse y un indice para moverlo alli.",
				playlistNotOwned: "%username, usted no es el dueñ@ de esa lista de reproduccion y, por lo tanto, no puedes modificarla.",
				playlistDuplicateSong: "%username, esa canción ya está en tu lista de reproduccion.",
				indexesEqual: "%username, Esos dos indices son iguales.",
				playlistEmpty: "Esa lista de reproduccion esta vacia. Agrega algunas canciones con `&music playlist %playlist add <song>`!",
				playlistImporting: "Importando lista de reproduccion. Esto podra tomar un tiempo...\n(Obteniendo informacion de la cancion)",
				playlistImportAllExisting: "%username, todos los videos en esa lista de reproduccion ya se han importado.",
				playlistImportingDatabase: "Importando lista de reproduccion. Esto podra tomar un tiempo...\n(Actualizando la base de datos)",
				playlistDeleteConfirm: "Esta accion eliminara permanentemente la lista de reproduccion. `%playlist`. "
				+ "Despues de la eliminacion, no podra reproducir, mostrar o modificar la lista de reproduccion, y cualquiera podra crear una nueva lista de reproduccion con el mismo nombre."
				+ "\nNo podras deshacer esta accion.\n\n"
				+ "<:bn_del:331164186790854656> - confirmar la eliminacion\n"
				+ "<:bn_ti:327986149203116032> - ignorar",
				bulkListening: "Ok, estoy escuchando",
				bulkDescription: "» Escribe cualquier cosa para agregarla a la lista de reproduccion."
				+ `\n» comandos empezando con \`%prefix\` solo ejecutara el comando.`
				+ "\n» Escribe `undo` para eliminar el ultimo elemento de la lista de reproduccion.\u2002🧹"
				+ "\n» Escribe `stop` cuando tu terminas. Puedes seguir agregando cosas hasta que escribas `stop`.\u2002🛑",
				outOfRange: "Fuera de rango.",
				playlistSection: "Seccion de la lista de reproduccion",
				bulkMenuOpen: "Ya tienes un menu abierto en este canal. escribe `stop` para detenerlo.",
				playlistPages: "Pagina %number de %total"
			},
			returns: {
				playlistAdded: "%username, **%song** fue añadido a tu lista de reproduccion **%playlist**",
				playlistRemoved: "%username, **%song** fue eliminado de tu lista de reproduccion **%playlist**",
				playlistCreated: "%username, Lista de reproduccion creada **%playlist**",
				playlistImportDone: "Todo Listo! Mira tu lista de reproduccion con **&music playlist %playlist**.",
				playlistDeleted: "Lista de reproduccion eliminada.",
				playlistDeleteCancelled: "Eliminacion de lista de reproducción cancelada",
				playlistMoved: "%username, **%song** fue movido a la posicion numero **%index**",
				bulkDone: "Todo Listo! Ya no voy a añadir nada mas a esa lista de reproduccion.",
				bulkMenuGone: "(​​habia un menú aquí, pero ya no está.)"
			}
		},
		debug: {
			help: {
				usage: "[Canal]",
				description: "Proporciona información de depuracion por si los comandos de audio no funcionan segun lo previsto"
			},
			prompts: {
				guildOnly: "No puedes depurar musica en un canal de mensajes directos",
				invalidChannel: "Canal no encontrado"
			},
			returns: {
				tip: "Propina:",
				tipValue: "Ademas de los permisos leer mensajes y agregar reacciones, los bots tambien deben tener permisos para leer historial de mensajes para agregar reacciones a los mensajes",
				unnamedNode: "un nodo sin nombre",
				queueUsing: "Sin embargo, la cola actual esta usando %name",
				infoFor: "Informacion de depuracion para %channel",
				permissions: "Permisos:",
				method: "Metodo:"
			}
		}
	},

	configuration: {
		settings: {
			help: {
				usage: "<self|server> <view|setting name> [value]",
				description: "Modifique la configuracion que Amanda usara para usted o para todo el servidor"
			},
			prompts: {
				cantModifyInDM: "No puede modificar la configuración de un servidor si no utilizas el comando en el servidor",
				backgroundRecommended: "Recommended to be a 800x500px png/jpeg",
				invalidSyntaxScope: "Command syntax is `&settings <scope> <name> <value>`. Your value for `scope` was incorrect, it must be either `self` or `server`.",
				noSettings: "No hay configuraciones establecidas para el alcance %scope",
				manageServer: "Debes tener el permiso Administrar servidor o Administrador para modificar la configuracion de Amanda en este servidor.",
				invalidSyntaxName: "Command syntax is `&settings %usage`. Your value for `name` was incorrect, it must be one of: %settings",
				invalidSettingScope: "La configuracion `%setting` no es valida para el alcance `%scope`.",
				currentValueServer: "Valor actual de `%setting` es `%value`. Este valor se establecio para el servidor.",
				currentValueInherited: "Valor actual de `%setting` no esta configurado en este servidor, por lo que hereda el valor predeterminado que es `%value`.",
				noBackground: "No tienes ningun imagen de fondo de perfil. No se tomo ninguna medida..",
				donorRequired: "Debes de ser un donante para modificar esta configuracion.",
				invalidLink: "Se produjo un error al intentar obtener los datos del enlace que proporcionaste. Asegurate de que el enlace sea valido.",
				invalidLangCode: "%username, ese no es un codigo de idioma valido o compatible. Los codigos de idioma admitidos son %codes",
				invalidSyntaxBoolean: "La sintaxis del comando es `&settings <scope> <name> <value>`. El ajuste `%setting` es un booleano, y entonces tu `%value` nesesita que ser `true` o `false`.",
				tooLong: "Ese valor de configuracion es demasiado grande. No debe de ser mas de 50 caracteres."
			},
			returns: {
				updated: "Configuracion actualizada.",
				deleted: "Configuracion eliminada."
			}
		},
		language: {
			help: {
				usage: "<code>",
				description: "Sets the language that Amanda will use to talk to you"
			},
			prompts: {},
			returns: {}
		},
		serverlanguage: {
			help: {
				usage: "<code>",
				description: "Sets the language that Amanda will use in your server"
			},
			prompts: {},
			returns: {}
		},
		background: {
			help: {
				usage: "<url>",
				description: "Establece el fondo que se muestra en &profile"
			},
			prompts: {},
			returns: {}
		}
	}
};
