export const en_us: Lang;

export type Lang = {
	"GLOBAL": {
		"MUSIC_DISABLED": "Music is currently disabled due to issues. A fix is currently being worked on.",
		"GUILD_ONLY": "You can only use this command in a server.",
		"MUSIC_INVALID_ACTION": "%username, that's not a valid action. If you want to play something, try `%prefixmusic play:<song>`.\nCheck out `%prefixhelp command:music` and `%prefixhelp command:playlists` for more things you can do!",
		"ONE_ACTION": "You can only do 1 action at a time.",
		"NOTHING_PLAYING": "%username, nothing is currently playing.",
		"MUSIC_SEE_OTHER": "The current music session is over in %channel. Go there to see what's playing!",
		"VC_REQUIRED": "%username, you need to join a voice channel to do that.",
		"NOW_PLAYING": "Now Playing: %song",
		"VC_NOT_JOINABLE": "%username, I don't have permission to join your voice channel.",
		"NO_RESULTS": "No results.",
		"QUEUE_STOPPED": "Queue stopped by %username.",
		"AUTO_ON": "Auto-play has been enabled.",
		"AUTO_OFF": "Auto-play has been disabled.",
		"LOOP_ON": "Loop has been enabled.",
		"LOOP_OFF": "Loop has been disabled.",
		"NO_LYRICS": "Either there was an error fetching the lyrics, or there are none.",
		"QUEUE_PAUSED": "The queue has been paused.",
		"QUEUE_UNPAUSED": "The queue has been un-paused.",
		"MUSIC_PITCH_SET": "Pitch has been set to %pitch.",
		"TOTAL_LENGTH": "Total length: %length",
		"QUEUE_FOR": "Queue for %server",
		"TOO_MANY_SKIPS": "You cannot skip more songs than are in the queue!",
		"SKIPPED_ALL": "All of the songs in the queue has been skipped and the queue has been destroyed.",
		"SKIPPED_AMOUNT": "Skipped %amount songs.",
		"QUEUE_SPEED_SET": "Queue speed has been set to %speed%",
		"SHUFFLED": "The queue has been shuffled.",
		"TOKENS_DELETED": "Deleted all your tokens. Use `%prefixmusictoken action:new` to generate a new one.",
		"TOKENS_NEW": "Your existing tokens were deleted, and a new one was created.\nDo not share this token with anyone. If you do accidentally share it, you can use `%prefixmusictoken action:delete` to delete it and keep you safe.\nYou can now log in at %website",
		"TOKENS_PREVIOUS": "Here is the token you generated previously:\nYou can use `%prefixmusictoken action:delete` to delete it, and `%prefixmusictoken action:new` to regenerate it.",
		"TOKENS_NONE": "You do not currently have any tokens. Use `%prefixmusictoken action:new` to generate a new one.",
		"HEADER_UNKNOWN": "Unknown",
		"HEADER_PLAYLIST": "Playlist",
		"HEADER_SONGS": "Songs",
		"HEADER_LENGTH": "Length",
		"HEADER_PLAY_COUNT": "Plays",
		"HEADER_AUTHOR": "Author",
		"EVERYONE_LEFT": "Everyone left, so I have as well.",
		"NEWER_NOW_PLAYING": "There's a newer now playing message.",
		"SONG_ERROR_EXCLAIMATION": "The internal identifier for the song was the placeholder value `!`\nThis is a bug.",
		"SONG_ERROR_NULL": "The internal identifier for the song was `null` or `undefined`\nThis is a bug.",
		"QUEUE_ENDED": "It looks like this queue has ended.",
		"AUTO_NONE_LEFT": "Auto mode was on, but we ran out of related songs and had to stop.",
		"SONG_STUCK": "The song got stuck loading.",
		"UNKNOWN_TRACK_EXCEPTION": "There was an exception when trying to play that track. That's all I know.",
		"NO_USERS_IN_VC": "Nobody else is in my voice channel. I will stop playing in %time seconds if nobody rejoins.",
		"SONG_NOT_PLAYABLE": "We couldn't play that song",
		"SONG_NOT_OBJECT": "Song is not an object %song",
		"ERROR_OCCURRED": "We ran into an error",
		"TOO_MANY_ERRORS": "Too many errors!",
		"ERRORS_SUPPRESSED": "Future errors from this queue will be silenced\nIf any more songs fail, they will be skipped with no message.\nTo report a bug, join our server: https://discord.gg/YMkZDsK",
		"HEADER_PAUSED": "PAUSED",
		"MISSING_TRACK": "Missing track for %id",
		"INVIDIOUS_NO_DATA": "Invidious didn't return valid data\n%api\n%link\n%yt",
		"NO_RELATED_CONTENT": "No related content available for the current song.",
		"HEADER_LIVE": "LIVE",
		"CANNOT_PAUSE_LIVE": "You cannot pause a live stream.",
		"FRISKY_RELATED": "Try the other stations on Frisky Radio! `%prefixmusic frisky:original` `%prefixmusic frisky:deep` `%prefixmusic frisky:chill`",
		"SONG_INFO_FETCH_FAIL": "Unfortunately, we failed to retrieve information about the current song.",
		"HEADER_DETAILS": "Details",
		"HEADER_EPISODE": "Episode",
		"HEADER_SHOW": "Show",
		"HEADER_GENRE": "Genre",
		"HEADER_STATION": "Station",
		"HEADER_SCHEDULE": "Schedule",
		"HEADER_TRACK_LIST": "Track list",
		"SOUNDCLOUD_RELATED": "Try finding related songs on SoundCloud.",
		"UNKNOWN_TRACK": "Unknown track",
		"EXTERNAL_RELATED": "Try finding related songs on other websites.",
		"LISTEN_MOE_RELATED": "Try the other radio stations on listen.moe",
		"NEWGROUNDS_RELATED": "Try finding related songs on Newgrounds.",
		"HEADER_LOADING": "LOADING",
		"TWITTER_RELATED": "Try finding related tweets on Twitter.",
		"ITUNES_RELATED": "Try finding related songs on iTunes.",
		"CANNOT_EXTRACT_NEWGROUNDS": "We couldn't extract the song data from Newgrounds.",
		"TWITTER_NO_VIDEO": "That twitter URL doesn't have a video.",
		"TWITTER_NO_MP4": "That twitter URL doesn't have an mp4 video.",
		"ITUNES_NOT_ALBUM": "That iTunes URL doesn't belong to an album.",
		"CANNOT_EXTRACT_ITUNES": "We couldn't extract the song data from iTunes.",
		"HEADER_SONG_SELECTION": "Song selection",
		"SONG_SELECTION_FOOTER": "Choose one of the options below in the select menu to play. Expires after %timeout.",
		"IMAGE_FETCH_FAILED": "There was an error fetching the image.",
		"HEADER_IMAGE_ERROR": "Uh oh.",
		"NEKOS_LIFE_OFFLINE": "Looks like the nekos.life API is currently offline.\nWe aren't able to fetch new pictures at the moment.\nHere's a sleepy catgirl while we wait for it to come back online.",
		"INTERACTION_RESPONSE_1": "That's not strange at all...",
		"INTERACTION_RESPONSE_2": "W-What? Why?",
		"INTERACTION_RESPONSE_3": "I find it strange that you tried to do that...",
		"INTERACTION_RESPONSE_4": "Ok then...",
		"INTERACTION_RESPONSE_5": "I'm not sure I understand...",
		"INTERACTION_RESPONSE_6": "Come on... Don't make yourself look like an idiot...",
		"INTERACTION_RESPONSE_7": "Why even try?",
		"INTERACTION_RESPONSE_8": "I'm not sure I understand you...",
		"INTERACTION_RESPONSE_9": "You are so weird...",
		"CANNOT_SELF_SHIP": "%username, you can't ship someone with themselves, silly",
		"SHIP_ALREADY_COUPLE_SELF": "I don't think I have to rate you and %other if you two are already married. You're a cute couple %emoji",
		"SHIP_ALREADY_COUPLE_OTHER": "I don't think I have to rate %user1 and %other if they're already married. They're a cute couple %emoji",
		"AVATAR_FETCH_FAILED": "There was an error getting either user's avatar",
		"SHIP_RATING": "I'd rate %display1 and %display2 being together a %percentage%",
		"NO_U": "No u",
		"CANNOT_SELF_BEAN": "%username, you can't bean yourself, silly",
		"BEANED": "%tag has been banned!",
		"HUG_AMANDA": "**Hugs %username back** :heart:",
		"NOM_AMANDA": "owie",
		"KISS_AMANDA": "**Kisses %username back** :heart:",
		"CUDDLE_AMANDA": "**Cuddles %username back** :heart:",
		"POKE_AMANDA": "Don't poke me ; ^ ;",
		"SLAP_AMANDA": "**Slaps %username back** That hurt me ; ^ ;",
		"BOOP_AMANDA": "Don't boop me ; ^ ;",
		"PAT_AMANDA": "≥ w ≤",
		"HUG_OTHER": "%user hugged %mention",
		"NOM_OTHER": "%user nommed %mention",
		"KISS_OTHER": "%user kissed %mention",
		"CUDDLE_OTHER": "%user cuddled %mention",
		"POKE_OTHER": "%user poked %mention",
		"SLAP_OTHER": "%user slapped %mention",
		"BOOP_OTHER": "%user booped %mention",
		"PAT_OTHER": "%user patted %mention",
		"HEADER_HEARTBEAT": "Heartbeat",
		"HEADER_LATENCY": "Latency",
		"HEADER_UPTIME": "Uptime",
		"HEADER_MEMORY": "Memory",
		"HEADER_SHARDS": "Shards",
		"HEADER_SONGS_QUEUED": "Songs queued",
		"HEADER_USERS_LISTENING": "Users listening",
		"HEADER_NODE_USAGE": "Node usage",
		"NO_NODES": "No nodes",
		"SHARD_NUMBER": "Shard %shard",
		"HEADER_USER_COUNT": "User count",
		"HEADER_GUILD_COUNT": "Guild count",
		"HEADER_CHANNEL_COUNT": "Channel count",
		"HEADER_VOICE_CONNECTIONS": "Voice connections",
		"HEADER_CREATORS": "Creators",
		"HEADER_CODE": "Code",
		"HEADER_LINKS": "Links",
		"INFO_THANKS": "Thank you for choosing me as your companion! :heart:\nHere's a little bit of info about me...",
		"INFO_LINKS": "Visit Amanda's [website](%website) or her [support server](%server)\nWanna donate? Check out her [Patreon](%patreon) or make a 1 time donation through [PayPal](%paypal).\nWanna see Amanda's growth over time? You can [here](%stats)\nPrivacy Policy: %privacy\nTodo board: %todo",
		"GIT_FILES_CHANGED": "%amount files changed",
		"GIT_FILE_CHANGED": "1 file changed",
		"GIT_INSERTIONS": "%amount insertions",
		"GIT_INSERTION": "1 insertion",
		"GIT_DELETIONS": "%amount deletions",
		"GIT_DELETION": "1 deletion",
		"HEADER_STATUS": "Status",
		"HEADER_GIT_INFO": "Git info",
		"GIT_STATUS": "On branch %branch, latest commit %hash",
		"GIT_COMMITS": "Commits (latest %amount entries)",
		"FOOTER_HELP": "<> = required, [] = optional, | = or. Do not include <>, [] or | in your input.",
		"HELP_PLAYLIST_DESCRIPTION": "See `%prefixhelp command:playlists`",
		"HELP_COMMAND_BODY_LIST": "%description\n*Arguments*: %args",
		"HELP_COMMAND_BODY": "%description\nArguments: %args\nCategory: %category",
		"HEADER_COMMAND_CATEGORY": "Command Category: %category",
		"FOOTER_HELP_MAIN": "Type `%prefixhelp [command:command]` to see more information about a command",
		"HELP_INVALID_COMMAND": "**%tag**, I couldn't find the help panel for that command",
		"HEADER_COMMAND_CATEGORIES": "Command Categories",
		"HELP_SEE_ALL": "Type `%prefixhelp [category:category]` to see all commands in that category.\nType `%prefixhelp [command:command]` to see more information about a command.",
		"HELP_INFO": "Type `%prefixinfo` to see general information about Amanda.\nFor more, join our support server: %link"
	},
	"sit": {
		"name": "sit",
		"description": "mood"
	},
	"image": {
		"name": "image",
		"description": "Send an image of something",
		"options": [
			{
				"name": "type",
				"description": "The type of image"
			}
		]
	},
	"ship": {
		"name": "ship",
		"description": "Ships two people",
		"options": [
			{
				"name": "user2",
				"description": "The second user to ship"
			},
			{
				"name": "user1",
				"description": "The user to ship user2 with other than yourself"
			}
		]
	},
	"bean": {
		"name": "bean",
		"description": "Beans a user",
		"options": [
			{
				"name": "user",
				"description": "The user to bean"
			}
		]
	},
	"hug": {
		"name": "hug",
		"description": "Hugs someone",
		"options": [
			{
				"name": "user",
				"description": "The user to hug"
			}
		]
	},
	"nom": {
		"name": "nom",
		"description": "Noms someone",
		"options": [
			{
				"name": "user",
				"description": "The user to nom"
			}
		]
	},
	"kiss": {
		"name": "kiss",
		"description": "Kisses someone",
		"options": [
			{
				"name": "user",
				"description": "The user to kiss"
			}
		]
	},
	"cuddle": {
		"name": "cuddle",
		"description": "Cuddles someone",
		"options": [
			{
				"name": "user",
				"description": "The user to cuddle"
			}
		]
	},
	"poke": {
		"name": "poke",
		"description": "Pokes someone",
		"options": [
			{
				"name": "user",
				"description": "The user to poke"
			}
		]
	},
	"slap": {
		"name": "slap",
		"description": "Slaps someone",
		"options": [
			{
				"name": "user",
				"description": "The user to slap"
			}
		]
	},
	"boop": {
		"name": "boop",
		"description": "Boops someone",
		"options": [
			{
				"name": "user",
				"description": "The user to boop"
			}
		]
	},
	"pat": {
		"name": "pat",
		"description": "Pats someone",
		"options": [
			{
				"name": "user",
				"description": "The user to pat"
			}
		]
	},
	"play": {
		"name": "play",
		"description": "Play music from multiple sources",
		"options": [
			{
				"name": "track",
				"description": "The track you'd like to play"
			},
			{
				"name": "position",
				"description": "1 based index to start adding tracks from"
			}
		]
	},
	"radio": {
		"name": "radio",
		"description": "Play from radio stations",
		"options": [
			{
				"name": "station",
				"description": "The station to play from"
			},
			{
				"name": "position",
				"description": "1 based index to start adding tracks from"
			}
		]
	},
	"skip": {
		"name": "skip",
		"description": "Skip tracks in the queue",
		"options": [
			{
				"name": "start",
				"description": "1 based index to start skipping tracks from"
			},
			{
				"name": "amount",
				"description": "The amount of tracks to skip in the queue"
			}
		]
	},
	"stop": {
		"name": "stop",
		"description": "Stops the queue"
	},
	"queue": {
		"name": "queue",
		"description": "Show the queue and do actions",
		"options": [
			{
				"name": "page",
				"description": "Choose what page in the queue to show"
			},
			{
				"name": "volume",
				"description": "Set the volume % of the queue"
			},
			{
				"name": "loop",
				"description": "Set the state of loop mode for the queue"
			},
			{
				"name": "pause",
				"description": "Sets the paused state of the queue"
			}
		]
	},
	"nowplaying": {
		"name": "nowplaying",
		"description": "Show the queue now playing message"
	},
	"trackinfo": {
		"name": "trackinfo",
		"description": "Shows info about the currently playing track"
	},
	"lyrics": {
		"name": "lyrics",
		"description": "Shows the lyrics of the currently playing track"
	},
	"seek": {
		"name": "seek",
		"description": "Seek to a time in the currently playing track",
		"options": [
			{
				"name": "time",
				"description": "The time in seconds to seek in the track"
			}
		]
	},
	"filters": {
		"name": "filters",
		"description": "Apply filters to the queue",
		"options": [
			{
				"name": "pitch",
				"description": "Sets the pitch of the queue in decibals"
			},
			{
				"name": "speed",
				"description": "Sets the speed % of the queue"
			}
		]
	},
	"shuffle": {
		"name": "shuffle",
		"description": "Shuffle the queue"
	},
	"musictoken": {
		"name": "musictoken",
		"description": "Obtain a web dashboard login token",
		"options": [
			{
				"name": "action",
				"description": "What to do"
			}
		]
	},
	"playlists": {
		"name": "playlists",
		"description": "Manage and play Amanda playlists",
		"options": [
			{
				"name": "meta",
				"description": "Metadata commands"
			},
			{
				"name": "add",
				"description": "Adds a track to a playlist"
			},
			{
				"name": "remove",
				"description": "Removes a track from a playlist"
			},
			{
				"name": "move",
				"description": "Moves a track in a playlist from one index to another"
			},
			{
				"name": "search",
				"description": "Filters tracks in a playlist"
			},
			{
				"name": "play",
				"description": "Plays a playlist"
			}
		]
	},
	"stats": {
		"name": "stats",
		"description": "Show detailed statistics",
		"options": [
			{
				"name": "window",
				"description": "The type of stats to show"
			}
		]
	},
	"info": {
		"name": "info",
		"description": "Gets info about Amanda"
	},
	"git": {
		"name": "git",
		"description": "Gets the latest git commits to Amanda"
	},
	"help": {
		"name": "help",
		"description": "Your average help command",
		"options": [
			{
				"name": "category",
				"description": "The category to get help with"
			},
			{
				"name": "command",
				"description": "The command to get help with"
			}
		]
	}
}
