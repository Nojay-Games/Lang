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
	error: "API nie zwróciło żadnych danych.",
	dm: {
		success: "Wysłałam Ci PW.",
		fail: "Musisz pozwolić mi na wysyłanie PW żeby ta komenda działała. Albo mnie zablokowałeś/aś, lub musisz włączyć PW na tym serwerze.",
		blocked: "Nie mogłam wysłać tej osobie PW. Może mnie zablokowali, a może muszą włączyć PW na dzielonych serwerach."
	},
	command: {
		dmOnly: "Ta komenda może być użyta tylko w PW.",
		guildOnly: "Ta komenda nie działa w PW.",
		permPre: "Nie mam zezwoleń na",
		permPost: "Działam najlepiej ze wszystkimi pozwoleniami, o które prosiłam przy zaproszeniu na serwer. Proszę zmodyfikować moje pozwolenia.",
		input: {
			invalid: "Nie jest to poprawny",
			insufficient: "Nie masz tyle"
		}
	},
	image: {
		dm: "Dlaczego chcesz %action kogoś w PW?",
		noUser: "Musisz mi powiedzieć co chcesz %action"
	},
	emoji: {
		discoin: "<a:Discoin:422523472128901140>"
	}
}

module.exports = {
	admin: {
		evaluate: {
			help: {
				usage: "<kod>",
				description: "Uruchamia arbitralny kod JavaScript w procesie"
			},
			prompts: {
				noInput: "Nie podałeś/aś nic do przeliczenia, głupiutki/a."
			},
			returns: {}
		},
		execute: {
			help: {
				usage: "<kod>",
				description: "Wykonuje operację shell'ową"
			},
			prompts: {
				noInput: "Nie podałeś/aś nic do wykonania, głupiutki/a."
			},
			returns: {}
		},
		award: {
			help: {
				usage: "<ilość> <użytkownik>",
				description: "Nagradza użytkownika"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidAmount: `%username, ${generic.command.input.invalid} ilości by nagrodzić.`,
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`,
				dmFailed: generic.dm.blocked
			},
			returns: {
				channel: "%mention1 nagrodził %number amandollars dla %mention2",
				dm: `%mention nagrodził Cię %number ${generic.emoji.discoin}`
			}
		},
		forcestatusupdate: {
			help: {
				usage: "Nic",
				description: "Zmusza obecny shard do wysłania danych statystycznych do bazy danych"
			},
			prompts: {},
			returns: {}
		},
		restartnotify: {
			help: {
				usage: "Nic",
				description: "Powiadamia Cię kiedy Amanda będzie znowu online"
			},
			prompts: {},
			returns: {
				confirmation: "Jasne. Powiadomię Cię kiedy będzie mój restart"
			}
		}
	},

	gambling: {
		slot: {
			help: {
				usage: "[ilość: liczba|all(wszystko)|half(pół)]",
				description: "Uruchamia maszynę losującą, która może nagrodzić amandollary"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} załączać plików. ${generic.command.permPost}`,
				invalidBet: `%username, ${generic.command.input.invalid} bet.`,
				betSmall: `%username, musisz postawić minimum 2 ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollary.`
			},
			returns: {
				lost: `Wybacz. Nie trafiłeś/ał nic. Tracisz %number ${generic.emoji.discoin}`,
				triple: `Trójka. Wygrywasz %number ${generic.emoji.discoin}`,
				heart1: `Jedno :heart: Wygrywasz %number ${generic.emoji.discoin}`,
				heart2: `Wow! Podwójne :heart: Wygrywasz %number ${generic.emoji.discoin}`,
				heart3: `WOAH! Potrójne :heart: Wygrywasz %number ${generic.emoji.discoin}`
			}
		},
		flip: {
			help: {
				usage: "Nic",
				description: "Rzuca monetą"
			},
			prompts: {},
			returns: {
				flip: "Wyrzuciłeś/aś %flip"
			}
		},
		betflip: {
			help: {
				usage: "<ilość: liczba|all(wszystko)|half(pół)> [h(orzeł),t(reszka)]",
				description: "Postaw na losowy rzut monetą by mieć szansę wygrać amandollary"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidBetandSide: "%username, musisz podać ilość betu oraz stronę na którą stawiasz.",
				invalidBet: `%username, ${generic.command.input.invalid} bet.`,
				betSmall: `%username, musisz postawić minimum 1 ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollary.`,
				invalidSide: "%username, to nie jest właściwa strona monety."
			},
			returns: {
				autoChoose: "Nie podałeś/aś strony, więc wybiorę ją za Ciebie",
				guess: "Wybrałeś/aś %string1 Ja wyrzuciłam %string2",
				win: `Zgadłeś! Otrzymujesz %number ${generic.emoji.discoin} %explanation`,
				lost: `Wybacz, ale nie zgadłeś/aś poprawnie. Tracisz %number ${generic.emoji.discoin}`
			}
		},
		coins: {
			help: {
				usage: "[użytkownik]",
				description: "Zwraca ilość amandollarów należącą do Ciebie, lub innego użytkownika"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`,
			},
			returns: {
				coins: `amandollary dla %display`
			}
		},
		daily: {
			help: {
				usage: "Nic",
				description: "Dzienna komenda, która nagradza Cię losową ilością amandollarów",
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				cooldown: "%username, Twoje dzienne amandollary odnowią się za %number.",
			},
			returns: {
				claimed: `%username odbiera swoją dzienną nagrodę i dostaje %number ${generic.emoji.discoin}`
			}
		},
		leaderboard: {
			help: {
				usage: "[local] [strona: numer]",
				description: "Wyświetla tabelę osób z najwiekszą ilością amandollarów"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				pageLimit: "%username, możesz wyświetlać do strony %maxPages.",
				pageCurrent: "Strona %current z %total"
			},
			returns: {
				emptyPage: "Jest tylko %lastPage stron do przeglądania."
			}
		},
		give: {
			help: {
				usage: "<ilość: liczba|all(wszystko)|half(pół)> <użytkownik>",
				description: "Daje amandollary użytkownikowi z Twojego konta"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidAmountandUser: "%username, musisz podac ilość, a potem użytkownika.",
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`,
				cannotGiveSelf: "Nie możesz dawać amandollarów sobie, głupiuki/a.",
				invalidGift: `%username, ${generic.command.input.invalid} prezent.`,
				giftSmall: `%username, musisz dać przynajmniej 1 ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollarów.`,
				dmFailed: generic.dm.blocked
			},
			returns: {
				channel: "%mention1 dał/a %number amandollarów do %mention2",
				dm: `%mention dał/a Ci %number ${generic.emoji.discoin}`
			}
		},
		wheel: {
			help: {
				usage: "[ilość: liczba|all(wszystko)|half(pół)]",
				description: "Zakręć Kołem Fortuny by mieć szansę wygrać więcej amandollarów"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} załączać plików. ${generic.command.permPost}`,
				invalidAmountWheel: "%username, musisz podać wielkość betu by zakręcić kołem",
				betSmall: `%username, musisz postawić co najmniej 1 ${generic.emoji.discoin}`,
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollarów.`,
				invalidAmount: `%username, ${generic.command.input.invalid} ilość.`,
			},
			returns: {
				winnings: `%tag postawił/a %number1 amandollarów i dostał/a %number2 z powrotem ${generic.emoji.discoin}`
			}
		}
	},

	games: {
		trivia: {
			help: {
				usage: "[kategoria]",
				description: "Zagraj w grę o ciekawostkach z innymi użytkownikami i wygraj amandollary"
			},
			prompts: {
				categorySelect: "By wybrać kategorię, wpisz `&trivia <nazwa kategorii>`.",
				dm: "%username, wysłałam Ci listę kategorii w PW.",
				noCategory: "%username, Nie znalazłam żadnych kategorii z tą nazwą. Użyj `&trivia categories`by otrzymać pełną listę.",
				multipleCategories: "%username, jest wiele kategorii z podaną nazwą: %string",
				gameInProgress: "%username, gra już trwa dla tego kanału.",
				APIError: "Wystąpił błąd dla API",
				parsingError: "Wystąpił błąd w przetwarzaniu danych zwróconych przez API",
				permissionDenied: `${generic.command.permPre} dodawanie reakcji`,
				provideAnswer: "By odpowiedzieć, wpisz literę do czatu. Masz 20 sekund.",
				reactionRound: "Naciśnij reakcję by zacząć kolejną rundę.",
				permissionRound: "Możesz wpisać \&trivia\` lub \&t\" by zacząć następną rundę.",
				winners: "Zwycięzcy",
				noWinners: "Brak zwycięzców",
				nextRound: "Następna runda",
				categories: "Kategorie",
				dmError: generic.dm.fail
			},
			returns: {}
		},
		minesweeper: {
			help: {
				usage: "[easy|medium|hard] [--raw] [--size:liczba]",
				description: "Zaczyna grę w sapera używając systemu spoilerów na Discordzie"
			},
			prompts: {},
			returns: {
				info: `%difficulty -- %number1 bomb, plansza %number2 na %number3`,
				error: "Minimalny rozmiar to 4, a maksymalny to 14. Rozmiary zostały dostosowane do norm",
				rawTooLarge: "Rozmar przekracza 2000 znaków. Użyj mniejszej planszy"
			}
		}
	},

	images: {
		cat: {
			help: {
				usage: "Nic",
				description: "Wysyła zdjęcie kota"
			},
			prompts: {},
			returns: {}
		},
		dog: {
			help: {
				usage: "Nic",
				description: "Wysyła zdjęcie psa"
			},
			prompts: {},
			returns: {}
		},
		space: {
			help: {
				usage: "Nic",
				description: "Wysyła zdjęcie kosmosu"
			},
			prompts: {},
			returns: {}
		},
		snek: {
			help: {
				usage: "Nic",
				description: "Wysyła zdjęcie wonsza"
			},
			prompts: {},
			returns: {}
		},
		birb: {
			help: {
				usage: "Nic",
				description: "Wysyła zdjęcie ptoszka"
			},
			prompts: {},
			returns: {}
		},
		catgirl: {
			help: {
				usage: "Nic",
				description: "Wysyła zdjęcie dziewczyny kota"
			},
			prompts: {},
			returns: {
				error: "O nie.",
				offline: "Wygląda na to, że API nekos.life jest offline."
				+ "\nNie jesteśmy w stanie pobrać nowych obrazków w tym momencie."
				+ "\nMacie tu śpiącą dziewczynę kota, podczas gdy my czekamy aż API będzie online."
			}
		}
	},

	interaction: {
		ship: {
			help: {
				usage: "<użytkownik 1> <użytkownik 2>",
				description: "Ship'uje dwie osoby"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				permissionDenied: `${generic.command.permPre} załączać plików. ${generic.command.permPost}`,
				invalidUsers: `%username, musisz podać dwóch użytkowników jako argumenty`,
				invalidUser1: `%username: pierwszy podany użytkownik nie został znaleziony`,
				invalidUser2: `%username, drugi podany użytkownik nie został znaleziony`,
				selfShip: "%username, nie możesz ship'ować kogoś z samym sobą, głupiutki/a",
			},
			returns: {
				rating: "Aww. Oceniam związek między %display1 i &display2 na %percentage%"
			}
		},
		waifu: {
			help: {
				usage: "[użytkownik]",
				description: "Otrzymujesz info na temat waifu Twojego, lub innego użytkownika"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`
			},
			returns: {
				price: "Cena:",
				claimedBy: "Zajęty/ta przez:",
				waifu: "Waifu:",
				gifts: "Prezenty:",
				nobody: "(nikt)",
				none: "(brak)"
			}
		},
		waifuleaderboard: {
			help: {
				usage: "[local] [page: numer]",
				description: "Wyświetla tabelę top waifu"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				pageLimit: "%username, możesz przeglądać tylko do strony %maxPages."
			},
			returns: {
				emptyPage: "Są tylko %lastPage strony do przeglądania.",
				claimEntry: `%user1 zajął %user2 za %price ${generic.emoji.discoin}`,
				pageCurrent: "Strona %current z %total"
			}
		},
		claim: {
			help: {
				usage: "<ilość: numer|all(wszystko)|half(pół)> <użytkownik>",
				description: "Zajmuje kogoś jako waifu. Wymaga amandollarów"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				badFormat: "%username, właściwy format to `&claim <ilość> <użytkownik>`. Najpierw ilość, a potem użytkownik.",
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`,
				selfClaim: "%username, nie możesz zająć siebie, głupiutki/a",
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollarów.`,
				claimSmall: `%username, musisz zająć kogoś używająć minimum 1 ${generic.emoji.discoin}`,
				claimedByOther: `%username, ta osoba jest już zajęta przez kogoś innego, za wyższą cenę. Musisz wydać co najmniej %number amandollarów by ich ukraść`,
				doubleClaim: "%username, ta osoba jest już zajęta jako waifu przez Ciebie. Jeśli chcesz zwiększyć ich wartość, użyj `&gift <ilość>`",
				dmFailed: generic.dm.blocked
			},
			returns: {
				claimed: `%mention1 zajmuje %mention2 za %number ${generic.emoji.discoin}`,
				dm: `%mention zajmuje Ciebie za %number ${generic.emoji.discoin}`
			}
		},
		divorce: {
			help: {
				usage: "[powód]",
				description: "Rozwód z użytkownikiem"
			},
			prompts: {
				noWaifu: "%username, nie masz nawet waifu by wziąć rozwód, głupiutki/a",
				dmFailed: generic.dm.blocked
			},
			returns: {
				divorced: "%tag1 wnosi pozew o rozwód od %tag2 za %reason",
				dm: "%tag wnosi pozew o rozwód z Tobą za %reason"
			}
		},
		gift: {
			help: {
				usage: "<ilość: numer|all(wszystko)|half(pół)>",
				description: "Przekazuje sumę amandollarów by podnieść wartość Twojego waifu"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`,
				noWaifu: "%username, nie masz nawet waifu by przekazać amandollary, głupiutki/a",
				noGift: "%username, nie podałeś/aś ilości",
				moneyInsufficient: `%username, ${generic.command.input.insufficient} amandollarów.`,
				invalidGift: `%username, ${generic.command.input.invalid} prezent.`,
				giftSmall: `%username, musisz przekazać co najmniej 1 ${generic.emoji.discoin}`
			},
			returns: {
				gifted: "%tag1 dodał/a %number amandollarów do wartości %tag2"
			}
		},
		bean: {
			help: {
				usage: "<użytkownik>",
				description: "'Banuje' użytkownika"
			},
			prompts: {
				guildOnly: "%username, nie możesz 'banować' kogoś w PW, głupiutki/a",
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`,
				selfBean: "%username, nie możesz 'banować' siebie, głupiutki/a"
			},
			returns: {
				beaned: "%tag został/a zbanowany/na!"
			}
		},
		hug: {
			help: {
				usage: "<użytkownik>",
				description: "Przytula kogoś"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`
			},
			returns: {
				amanda: "**Tuli %username z powrotem** :heart:",
				action: "%username tuli %mention"
			}
		},
		nom: {
			help: {
				usage: "<użytkownik>",
				description: "Podgryza kogoś"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`
			},
			returns: {
				amanda: "ałł",
				action: "%username dziabnął/ęła %mention"
			}
		},
		kiss: {
			help: {
				usage: "<użytkownik>",
				description: "Całuje kogoś"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`
			},
			returns: {
				amanda: "**Całuje %username z powrotem** :heart:",
				action: "%username całuje %mention"
			}
		},
		cuddle: {
			help: {
				usage: "<użytkownik>",
				description: "Przytula kogoś"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`
			},
			returns: {
				amanda: "**Przytula %username z powrotem** :heart:",
				action: "%username przytula %mention"
			}
		},
		poke: {
			help: {
				usage: "<użytkownik>",
				description: "Szturcha kogoś"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`
			},
			returns: {
				amanda: "Ni szturchaj mnie ; ^ ;",
				action: "%username szturcha %mention"
			}
		},
		slap: {
			help: {
				usage: "<użytkownik>",
				description: "Policzkuje kogoś"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`
			},
			returns: {
				amanda: "**Policzkuje %username z powrotem** To boli ; ^ ;",
				action: "%username policzkuje %mention"
			}
		},
		boop: {
			help: {
				usage: "<użytkownik>",
				description: "Dotyka czyjegoś noska"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`
			},
			returns: {
				amanda: "Nie dostykaj mojego noska ; ^ ;",
				action: "%username dotyka %mention noska"
			}
		},
		pat: {
			help: {
				usage: "<użytkownik>",
				description: "Głaszcze kogoś po głowie"
			},
			prompts: {
				dm: generic.image.dm,
				noUser: generic.image.noUser,
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`
			},
			returns: {
				amanda: "≥ w ≤",
				action: "%username głaszcze %mention po głowie"
			}
		}
	},

	meta: {
		statistics: {
			help: {
				usage: "[music|games]",
				description: "Wyświetla statystyki dla nerdów"
			},
			prompts: {
				slow: "Ugh. Też nie lubię kiedy jestem wolna"
			},
			returns: {
				songsToday: "**❯ Piosenki zagrane dzisiaj:**\n%number",
				songsQueued: "**❯ Piosenki w kolejce:**\n%number",
				voiceConnections: "**❯ Połączeń z czatem głosowym:**\n%number",
				usersListening: "**❯ Użytkowników słuchających:**\n%number",
				gamesToday: "**❯ Gry rozegrane dzisiaj:**\n%number",
				gamesInProgress: "**❯ Trwające gry:**\n%number",
				usersPlaying: "**❯ Graczy grających:**\n%number",
				heartbeat: "Puls",
				latency: "Opóźnienie",
				uptime: "Czas działania",
				ramUsage: "Zużycie RAMu",
				userCount: "**❯ Liczba użytkowników:**\n%number",
				guildCount: "**❯ Liczba serwerów:**\n%number",
				channelCount: "**❯ Liczba kanałów:**\n%number",
			}
		},
		ping: {
			help: {
				usage: "Nic",
				description: "Jak myślisz co robi?"
			},
			prompts: {},
			returns: {
				pong: "Pong!",
				heartbeat: "❯ Puls",
				latency: "❯ Opóźnienie",
				footer: "Cz-Czekaj... To się nazywa tenis stołowy"
			}
		},
		invite: {
			help: {
				usage: "Nic",
				description: "Dodaje Amandę na serwer"
			},
			prompts: {},
			returns: {
				invited: "Zostałam zaproszona?",
				link: "Link z zaproszeniem: %link",
				notice: "Pamiętaj, potrzebujesz zezwolenia **zarządzaj serwerem** by dodawać boty do serwera."
			}
		},
		info: {
			help: {
				usage: "Nic",
				description: "Wyświetla info o Amandzie"
			},
			prompts: {},
			returns: {
				thanks: "Dziękuję Ci, że wybrałeś mnie na Swojego towarzysza! :heart:\nTu jest trochę więcej info na mój temat...",
				creators: "Twórcy",
				links: "Odwiedź [stronę](%website) Amandy lub jej [serwer wsparcia](%server)\nChcesz ją wesprzeć? Sprawdź jej [Patreon](%patreon) lub wykonaj jednorazową dotację przez [PayPal](%paypal).\nChcesz zobaczyć rozwój Amandy? Możesz to zrobić [tutaj](%stats)"
			}
		},
		donate: {
			help: {
				usage: "Nic",
				description: "Otrzymaj informacje jak wysłać dotację"
			},
			prompts: {},
			returns: {
				intro: "Myślisz nad dotacją? ❤",
				description: "Cieszę się, że chcesz wesprzeć moich twórców!"
				+"\n\nJeśli interesują Cię miesięczne dotacje, możesz to zrobić na [Patreonie](%patreon),"
				+" lub jeśli chcesz wykonać jednorazową wpłatę, możesz to zrobić przez [PayPal](%paypal)."
				+"\n\nSuma zostanie przeznaczona na dalszy rozwój."
				+"\nDostęp do funkcji Amandy nie zostanie zmieniony bez względu na Twój wybór,"
				+" ale otrzymasz rolę donatora na naszym [Serwerze Wsparcia](%server)"
				+" oraz wyróżniającą odznakę wsparcia na &profile."
			}
		},
		commits: {
			help: {
				usage: "Nic",
				description: "Wyświetla ostatnią listę zmian na githubie Amandy"
			},
			prompts: {},
			returns: {}
		},
		privacy: {
			help: {
				usage: "Nic",
				description: "Szczegóły polityki prywatności Amandy"
			},
			prompts: {
				dmSuccess: generic.dm.success
			},
			returns: {} // intentionally empty as Privacy policies might not translate properly and may have different implications
		},
		user: {
			help: {
				usage: "[użytkownik]",
				description: "Wyświetla informacje na temat użytkownika"
			},
			prompts: {
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`
			},
			returns: {}
		},
		avatar: {
			help: {
				usage: "[użytkownik]",
				description: "Pokazuje awatar użytkownika"
			},
			prompts: {
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`
			},
			returns: {}
		},
		icon: {
			help: {
				usage: "Nic",
				description: "Pokazuje ikonę serwera"
			},
			prompts: {
				guildOnly: `%username, ${generic.command.guildOnly}`
			},
			returns: {}
		},
		wumbo: {
			help: {
				usage: "<emoji>",
				description: "Robi emoji większe"
			},
			prompts: {
				invalidEmoji: `%username, ${generic.command.input.invalid} emoji.`
			},
			returns: {}
		},
		profile: {
			help: {
				usage: "[użytkownik]",
				description: "Pokazuje informacje o profilu użytkownika"
			},
			prompts: {
				invalidUser: `%username, ${generic.command.input.invalid} użytkownik.`,
				permissionDenied: `${generic.command.permPre} załączać plików. ${generic.command.permPost}`
			},
			returns: {}
		},
		help: {
			help: {
				usage: "[Komenda|Kategoria]",
				description: "Twoja typowa komenda wsparcia"
			},
			prompts: {
				invalidCommand: "**%tag**, Nie mogłam znaleść panelu pomocy dla tej komendy"
			},
			returns: {
				footer: "Wpisz `&help [komenda]` by zobaczyć więcej informacji na temat komendy",
				mobile: "Naciśnij na reakcję dla widoku dla urządzeń moblinych",
				main: "Wpisz `&help [kategoria]` by zobaczyć wszystkie komendy dla tej kategorii."
				+ "\nWpisz `&help [komenda]` by zobaczyć więcej informacji na temat komendy",
				info: "Wpisz `&info` by zobaczyć informacje ogólne na temat Amandy.\nPo wiecej, dołącz do naszego serwera wsparcia: %link"
			}
		}
	},

	audio: {
		token: {
			help: {
				usage: "[new(nowy)|delete(usuń)]",
				description: "Otrzymaj token do logowania do panelu na stronie"
			},
			prompts: {
				dmFailed: generic.dm.fail,
				none: "Nie masz obecnie żadnych tokenów. Użyj `&musictoken new` by wygenerowac nowy"
			},
			returns: {
				dmSuccess: generic.dm.success,
				deleted: "Usunięto wszystkie Twoje tokeny. Użyj `&musictoken new` by wygenerować nowy.",
				new: "Twoje istniejące tokeny zostały usunięte, i nowy został wygenerowany."
				+"\nNie dziel się tym tokenem z nikim. Jeśli przez przypadek go udostępnisz, możesz użyć `&musictoken delete` by go usunąc i być bezpiecznym."
				+"\nMożesz się teraz zalogować! %website",
				generated: "Tu jest token, który został wcześniej wygenerowany:"
				+"\nMożesz użyć `&musictoken delete` by go usunąć, i `&musictoken new` by go zregenerować."
			}
		},
		frisky: {
			help: {
				usage: "[original|deep|chill|classics]",
				description: "Odtwórz Frisky Radio: https://friskyradio.com"
			},
			prompts: {},
			returns: {
				schedule: "Frisky Radio ­— Rozkład",
				footer: "Użyj &frisky [stacja] by odtworzyć stację"
			}
		},
		music: {
			help: {
				usage: "Nic. Nie masz tego widzieć.",
				description: "Nic. Nie masz tego widzieć."
			},
			prompts: {
				guildOnly: generic.command.guildOnly,
				invalidSkips: "To nie jest właściwa ilość piosenek do pominięcia",
				invalidSkipsAmount: "Musisz pominąć 1 lub więcej piosenek",
				tooManySkips: "Nie możesz pominąć więcej piosenek niż jest ich w kolejce!",
				invalidAction: "%username, to nie jest właściwa czynność. Jeśli chcesz coś zagrać, wpisz `&music play <piosenka>`.\nSprawdź `&help music` i `&help playlists` by uzyskać więcej informacji!",
				nothingPlaying: "%username, nic nie jest odtwarzane.",
				noResults: "Brak wyników.",
				voiceChannelRequired: "%username, musisz dołączyć do czatu głosowego by to zrobić.",
				voiceCantJoin: "%username, Nie mam permisji by dołączyć na Twój kanał.",
				voiceCantSpeak: "%username, Nie mam permisji by mówić na Twoim kanale.",
				playableRequired: "%username, proszę podać link do filmu na Youtube, lub jakieś słowa do wyszukania przeze mnie.",
				youtubeRequired: "%username, proszę podać link do Youtube lub ID filmu.",
				queueCannotDo: "Obecna kolejka nie może %action w tym momencie.",
				voiceChannelWaiting: "%username, musisz dołączyć do czatu głosowego by to zrobić. Czekam aż dołączysz...",
				songSelection: "Wybór piosenki",
				songSelectionCanceled: "Wybór piosenki anulowany",
				totalLength: "Całkowita długość: %number",
				queueFor: "Kolejka dla %server",
				everyoneLeft: "Wszyscy wyszli, to ja też.",
				songNotPlayingDiscord: "Hmm. Wygląda na to, że piosenka nie jest odtwarzana."
				+ "\n\n**To pewnie problem z Discordem.**"
				+ "\nSpróbuj zmienić region serwera."
				+ "\n\nBy zgłosić problem, dołącz na nasz serwer: https://discord.gg/YMkZDsK",
				songErrorExclaimation: "`song.track` to ! placeholder. To jest błąd.",
				songErrorNull: "`song.track` jest pusta lub niezdefiniowana. To jest błąd.",
				songNotPlayable: "Nie mogliśmy odtworzyć tej piosenki",
				errorOccured: "Wpadliśmy na błąd",
				songErrorNotObject: "Piosenka to nie obiekt %song",
				tooManyErrors: "Za dużo błędów!",
				errorsSuppressed: "Późniejsze błędy z tej kolejki będą wyciszone."
				+ "\nJeśli więcej piosenek nie będzie działać, będą pominięte bez wiadomości."
				+ "\nBy zgłosić problem, dołącz na nasz serwer: https://discord.gg/YMkZDsK",
				autoRanOut: "Tryb auto jest włączony, ale skończyły się piosenki i musieliśmy zatrzymać odtwarzanie.",
				queueAlreadyPaused: "Pauza jest już aktywna. Użyj `&music resume` by ją wyłączyć.",
				queueNowPlaying: "Teraz gramy: %song",
				noUsersLeft: "Brak użytkowników na moim kanale głosowym. Przestanę grać za %time sekund jeśli nikt nie dołączy.",
				autoOn: "Tryb auto został włączony.",
				autoOff: "Tryb auto został wyłączony.",
				loopOn: "Zapętlanie zostało włączone.",
				loopOff: "Zapętlanie zostało wyłączone.",
				musicPlaying: "Muzyka jest odtwarzana. Jeśli chcesz ją zapauzować, użyj `&music pause`.",
				songRemoveRequired: "Musisz mi powiedzieć, którą piosenkę usunąć. `&music queue remove <numer>`"
				+ "\nBy wyczyścić całą kolejkę, użyj `&music queue clear` lub `&music queue remove all`.",
				songRemove1: "Przedmiot 1 jest obecnie odtwarzaną piosenką. Użyj `&music skip` by ją pominąć, "
				+ "lub `&music queue remove 2` jeśli chciałeś/aś usunąć piosenkę, która jest następna w kolejce.",
				queueSongTotal: "Są %number1 przedmioty w kolejce. Możesz tylko usunąć przedmioty 2-%number2.",
				numberNotInRelated: "Podany numer nie jest przedmiotem listy związanej. Spróbuj `&music related`."
			},
			returns: {
				queueClear: "Wyczyszczono kolejkę, usuwam %number",
				queueIn: "Sesja muzyczna została zakończona w %channel. Idź tam by zobaczyć co jest grane!"
			}
		},
		playlist: {
			help: {
				usage: "Nic. Nie powinieneś/aś tego widzieć.",
				description: "Nic. Nie powinieneś/aś tego widzieć."
			},
			prompts: {
				playFromStart: "Zagraj całą playlistę od początku",
				playFromLinked: "Zagraj playlistę, zaczynając od podlinkowanej piosenki",
				playOnlyLinked: "Odtwarzaj tylko podlinkowaną piosenkę",
				userLinked: "Wybrałeś/aś tą piosenkę z playlisty: %title",
				query: "Co chcesz zrobić?",
				selectionInfo: "By odtworzyć konkretną część playlisty, użyj `&music play <link> <start> <koniec>`. Zobacz `&help playlist` by uzyskać więcej informacji.",
				playlistNameRequired: "%username, musisz podać nazwę playlistę. Użyj `&music playlists show` by pokazać wszystkie playlisty.",
				directPlaylist: "%username, możesz odtworzyć playlistę bezpośrednio. Podaj ją do \`&music play\` o tak:"
				+"%info\n\n\n\nJeśli nadal chcesz zaimportować playlistę do Amandy, musisz podać jej jakąś przyjazną nazwę, np. `piosenki_boba`.",
				playlistNameLimit: "%username, nazwa playlisty musi mieć 24 znaki lub mniej.",
				playlistNotExist: "%username, ta playlista nie istnieje. Użyj \`&music playlist %playlist create\` by ją stworzyć.",
				databaseFixed: "%username, Wpisy bazy danych dla tej playlisty są niedokładne. Niedokładności mogą być rozwiązane poprzez reset kolejności piosenek w playliście. Poza kolejnością piosenek, dane nie zostały stracone. Inne playlisty nie były naruszone.",
				usePlaylistAdd: "Nie używaj importowania playlisty przez `playlist add`. Użyj `playlist import`",
				youtubeLinkInvalid: "%username, To nie jest właściwy link Youtube",
				indexRequired: "%username, Proszę podać index przedmiotu do usunięcia",
				indexMoveRequired: "Proszę podać index wejścia oraz index wyjścia.",
				playlistNotOwned: "%username, nie jesteś właścicielem tej playlisty, więc nie możesz jej modyfikować.",
				playlistDuplicateSong: "%username, ta piosenka jest już w playliście.",
				indexesEqual: "%username, Dwa indexy są takie same.",
				playlistEmpty: "Ta playlista jest pusta. Dodaj jakieś piosenki przez `&music playlist %playlist add <piosenka> !",
				playlistImporting: "Importowanie playlisty. Może to chwilę zająć...\n(Pobieranie danych o piosence)",
				playlistImportAllExisting: "%username, wszystkie filmy w tej playliście zostały zaimportowane.",
				playlistImportingDatabase: "IImportowanie playlisty. Może to chwilę zająć...\n(Aktualizowanie bazy danych)",
				playlistDeleteConfirm: "Ta akcja permanentnie usunie playlistę `%playlist`. "
				+ "Po usunięciu, nie będziesz mógł/mogła odtwarzać, wyświetlać, lub modyfikować tej playlisty, oraz każdy będzie mógł stworzyć nową playlistę o tej samej nazwie."
				+ "\nNie możesz cofnąć tej akcji.\n\n"
				+ "<:bn_del:331164186790854656> - potwierdź usunięcie\n"
				+ "<:bn_ti:327986149203116032> - ignoruj",
				bulkListening: "Ok, słucham.",
				bulkDescription: "» Wpisz cokolwiek by dodać to do playlisty."
				+ `\n» Komendy zaczynające się od \`%prefix\` będą tylko uruchamiały komendę.`
				+ "\n» Wpisz `undo` by usunąć ostatni przedmiot z playlisty.\u2002🧹"
				+ "\n» Wpisz `stop` kiedy skończysz. Możesz dodawać rzeczy dopóki nie wpiszesz `stop`.\u2002🛑",
				outOfRange: "Poza zasięgiem.",
				playlistSection: "Wybór playlisty",
				bulkMenuOpen: "Masz już menu otwarte. Wpisz `stop` by je zamknąć.",
				playlistPages: "Strona %number z %total"
			},
			returns: {
				playlistAdded: "%username, Dodano **%song** do playlisty **%playlist**",
				playlistRemoved: "%username, Usunięto **%song** z playlisty **%playlist**",
				playlistCreated: "%username, Stworzone playlistę **%playlist**",
				playlistImportDone: "Gotowe! Sprawdź swoją playlistę przez **&music playlist %playlist**.",
				playlistDeleted: "Playlista usnięta.",
				playlistDeleteCancelled: "Wybór playlisty anulowany",
				playlistMoved: "%username, Przesunięto **%song** do pozycji **%index**",
				bulkDone: "Gotowe! Nie dodam nic więcej do playlisty.",
				bulkMenuGone: "(Było tu kiedyś menu, ale już go nie ma.)"
			}
		},
		debug: {
			help: {
				usage: "[Kanał]",
				description: "Wyświetla info debug jeśli komendy audio nie działają jak należy"
			},
			prompts: {
				guildOnly: "Nie możesz debugować muzyki w PW",
				invalidChannel: "Kanał nie został znaleziony"
			},
			returns: {
				tip: "Rada:",
				tipValue: "Od góry od permisji Czytaj Wiadomości i Dodaj Reakcję, boty muszą mieć zezwolenie na Czytaj Historię Wiadomości by dodawać reakcje do wiadomości",
				unnamedNode: "węzeł bez nazwy",
				queueUsing: "Jednakże, obecna kolejka używa %name",
				infoFor: "Info do degubu dla %channel",
				permissions: "Zezwolenia:",
				method: "Metoda:"
			}
		}
	},

	configuration: {
		settings: {
			help: {
				usage: "<self(własna)|server> <view(wyświetl)|setting name(nazwa ustawienia)> [wartość]",
				description: "Modyfikuje ustawienia Amandy dla Ciebie lub serwera"
			},
			prompts: {
				cantModifyInDM: "Nie możesz modyfikować ustawień serwera, jeśli nie używasz tej komendy na serwerze",
				backgroundRecommended: "Zalecany rozmiar 800x500px w formacie png/jpeg",
				invalidSyntaxScope: "Składnia komendy to `&settings <obszar> <nazwa> <wartość>`. Twoja wartość dla `obszar` jest niewłaściwa. Musi to być albo `self` lub `server`.",
				noSettings: "Nie ma ustawień dla obszaru %scope",
				manageServer: "Musisz mieć zezwolenie na Zarządzanie Serwerem lub być Administratorem by modyfikować ustawienia Amandy na tym serwerze.",
				invalidSyntaxName: "Składnia komendy to `&settings %usage`. Twoja wartość dla `nazwa` jest niewłaściwa. Musi to być jedna z: %settings",
				invalidSettingScope: "Ustawienie `%setting` nie jest właściwe dla obszaru `%scope`.",
				currentValueServer: "Obecna wartość dla `%setting` nie jest ustawiona na tym serwerze, więc jest dziedziczona wartość domyślna, którą jest `%value`.",
				currentValueInherited: "Current value of `%setting` is not set in this server, so it inherits the default value, which is `%value`.",
				noBackground: "Nie miałeś/aś obrazu tła na profilu. Nie wykonano żadnej akcji.",
				donorRequired: "Musisz być donatorem, by modyfikować tą wartość.",
				invalidLink: "Wystąpił błąd podczas pobierania danych z podanego adresu. Proszę upewnić się, że adres jest właściwy.",
				invalidLangCode: "%username, to nie jest właściwy, lub wspierany język kodu. Wspierane języki to %codes",
				invalidSyntaxBoolean: "Składnia komendy to `&settings <obszar> <nazwa> <wartość>`. Ustawienie `%setting`to typ logiczny, więc twoja `%value` musi wynosić `true` lub `false`.",
				tooLong: "Ta wartość ustawienia jest za długa. Nie może być dłuższa niż 50 znaków."
			},
			returns: {
				updated: "Ustawienie zaktualizowane.",
				deleted: "Ustawienie usunięte."
			}
		},
		background: {
			help: {
				usage: "<url>",
				description: "ustaw tło wyświetlane na &profile"
			},
			prompts: {},
			returns: {}
		}
	}
};
