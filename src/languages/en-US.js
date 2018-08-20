const { Language, util } = require('klasa');

// A language file that almost every command uses

module.exports = class extends Language {

	constructor(...args) {
		super(...args);
		this.language = {
			DEFAULT: (key) => `${key} has not been localized for en-US yet.`,
			DEFAULT_LANGUAGE: 'Default Language',
			SETTING_GATEWAY_EXPECTS_GUILD: 'The parameter <Guild> expects either a Guild or a Guild Object.',
			SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `The value ${data} for the key ${key} does not exist.`,
			SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `The value ${data} for the key ${key} already exists.`,
			SETTING_GATEWAY_SPECIFY_VALUE: 'You must specify the value to add or filter.',
			SETTING_GATEWAY_KEY_NOT_ARRAY: (key) => `The key ${key} is not an Array.`,
			SETTING_GATEWAY_KEY_NOEXT: (key) => `The key ${key} does not exist in the current data schema.`,
			SETTING_GATEWAY_INVALID_TYPE: 'The type parameter must be either add or remove.',
			RESOLVER_INVALID_PIECE: (name, piece) => `${name} must be a valid ${piece} name.`,
			RESOLVER_INVALID_MSG: (name) => `${name} must be a valid message id.`,
			RESOLVER_INVALID_USER: (name) => `${name} must be a mention or valid user id.`,
			RESOLVER_INVALID_MEMBER: (name) => `${name} must be a mention or valid user id.`,
			RESOLVER_INVALID_CHANNEL: (name) => `${name} must be a channel tag or valid channel id.`,
			RESOLVER_INVALID_GUILD: (name) => `${name} must be a valid guild id.`,
			RESOLVER_INVALID_ROLE: (name) => `${name} must be a role mention or role id.`,
			RESOLVER_INVALID_LITERAL: (name) => `Your option did not match the only possibility: ${name}`,
			RESOLVER_INVALID_BOOL: (name) => `${name} must be true or false.`,
			RESOLVER_INVALID_INT: (name) => `${name} must be an integer.`,
			RESOLVER_INVALID_FLOAT: (name) => `${name} must be a valid number.`,
			RESOLVER_INVALID_REGEX_MATCH: (name, pattern) => `${name} must follow this regex pattern \`${pattern}\`.`,
			RESOLVER_INVALID_URL: (name) => `${name} must be a valid url.`,
			RESOLVER_STRING_SUFFIX: ' characters',
			RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} must be exactly ${min}${suffix}.`,
			RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name} must be between ${min} and ${max}${suffix}.`,
			RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name} must be greater than ${min}${suffix}.`,
			RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name} must be less than ${max}${suffix}.`,
			REACTIONHANDLER_PROMPT: 'Which page would you like to jump to?',
			COMMANDMESSAGE_MISSING: 'Missing one or more required arguments after end of input.',
			COMMANDMESSAGE_MISSING_REQUIRED: (name) => `${name} is a required argument.`,
			COMMANDMESSAGE_MISSING_OPTIONALS: (possibles) => `Missing a required option: (${possibles})`,
			COMMANDMESSAGE_NOMATCH: (possibles) => `Your option didn't match any of the possibilities: (${possibles})`,
			MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time) => `${tag} | **${error}** | You have **${time}** seconds to respond to this prompt with a valid argument. Type **"ABORT"** to abort this prompt.`, // eslint-disable-line max-len
			MONITOR_COMMAND_HANDLER_ABORTED: 'Aborted',
			INHIBITOR_COOLDOWN: (remaining) => `You have just used this command. You can use this command again in ${remaining} seconds.`,
			INHIBITOR_DISABLED: 'This command is currently disabled',
			INHIBITOR_MISSING_BOT_PERMS: (missing) => `Insufficient permissions, missing: **${missing}**`,
			INHIBITOR_NSFW: 'You may not use NSFW commands in this channel.',
			INHIBITOR_PERMISSIONS: 'You do not have permission to use this command',
			INHIBITOR_REQUIRED_SETTINGS: (settings) => `The guild is missing the **${settings.join(', ')}** guild setting${settings.length !== 1 ? 's' : ''} and thus the command cannot run.`,
			INHIBITOR_RUNIN: (types) => `This command is only available in ${types} channels`,
			INHIBITOR_RUNIN_NONE: (name) => `The ${name} command is not configured to run in any channel.`,
			// Commands
			COMMAND_EVAL_DESCRIPTION: 'Evaluates arbitrary Javascript. Reserved for bot owner.',
			COMMAND_UNLOAD: (type, name) => `✅ Unloaded ${type}: ${name}`,
			COMMAND_UNLOAD_DESCRIPTION: 'Unloads the klasa piece.',
			COMMAND_TRANSFER_ERROR: '❌ That file has been transfered already or never existed.',
			COMMAND_TRANSFER_SUCCESS: (type, name) => `✅ Successfully transferred ${type}: ${name}`,
			COMMAND_TRANSFER_FAILED: (type, name) => `Transfer of ${type}: ${name} to Client has failed. Please check your Console.`,
			COMMAND_TRANSFER_DESCRIPTION: 'Transfers a core piece to its respective folder',
			COMMAND_RELOAD: (type, name) => `✅ Reloaded ${type}: ${name}`,
			COMMAND_RELOAD_ALL: (type) => `✅ Reloaded all ${type}.`,
			COMMAND_RELOAD_DESCRIPTION: 'Reloads a klasa piece, or all pieces of a klasa store.',
			COMMAND_REBOOT: 'Rebooting...',
			COMMAND_REBOOT_DESCRIPTION: 'Reboots the bot.',
			COMMAND_PING: 'Ping?',
			COMMAND_PING_DESCRIPTION: 'Runs a connection test to Discord.',
			COMMAND_PINGPONG: (diff, ping) => `Pong! (Roundtrip took: ${diff}ms. Heartbeat: ${ping}ms.)`,
			COMMAND_INVITE: (client) => [
				`To add ${client.user.username} to your discord guild:`,
				client.invite,
				util.codeBlock('', [
					'The above link is generated requesting the minimum permissions required to use every command currently.',
					'I know not all permissions are right for every server, so don\'t be afraid to uncheck any of the boxes.',
					'If you try to use a command that requires more permissions than the bot is granted, it will let you know.'
				].join(' ')),
				'Please file an issue at <https://github.com/dirigeants/klasa> if you find any bugs.'
			],
			COMMAND_INVITE_DESCRIPTION: 'Displays the join server link of the bot.',
			COMMAND_INFO: [
				"Klasa is a 'plug-and-play' framework built on top of the Discord.js library.",
				'Most of the code is modularized, which allows developers to edit Klasa to suit their needs.',
				'',
				'Some features of Klasa include:',
				'• Fast Loading times with ES7 Support (Async/Await)',
				'• Per-server configuration, that can be extended with your own code',
				'• Customizable Command system with automated usage parsing and easy to use reloading and downloading modules',
				'• "Monitors" which can watch messages and act on them, like a normal message event (Swear Filters, Spam Protection, etc)',
				'• "Inhibitors" which can prevent commands from running based on a set of parameters (Permissions, Blacklists, etc)',
				'• "Providers" which allow you to connect with an outside database of your choosing.',
				'• "Finalizers" which run on messages after a successful command.',
				'• "Extendables", code that acts passively. They add properties or methods to existing Discord.js classes.',
				'• "Languages", which allow you to localize your bot.',
				'',
				'We hope to be a 100% customizable framework that can cater to all audiences. We do frequent updates and bugfixes when available.',
				"If you're interested in us, check us out at https://klasa.js.org"
			],
			COMMAND_INFO_DESCRIPTION: 'Provides some information about this bot.',
			COMMAND_HELP_DESCRIPTION: 'Display help for a command.',
			COMMAND_HELP_NO_EXTENDED: 'No extended help available.',
			COMMAND_HELP_DM: '📥 | The list of commands you have access to has been sent to your DMs.',
			COMMAND_HELP_NODM: '❌ | You have DMs disabled, I couldn\'t send you the commands in DMs.',
			COMMAND_HELP_USAGE: (usage) => `usage :: ${usage}`,
			COMMAND_HELP_EXTENDED: 'Extended Help ::',
			COMMAND_ENABLE: (type, name) => `+ Successfully enabled ${type}: ${name}`,
			COMMAND_ENABLE_DESCRIPTION: 'Re-enables or temporarily enables a command/inhibitor/monitor/finalizer. Default state restored on reboot.',
			COMMAND_DISABLE: (type, name) => `+ Successfully disabled ${type}: ${name}`,
			COMMAND_DISABLE_DESCRIPTION: 'Re-disables or temporarily disables a command/inhibitor/monitor/finalizer/event. Default state restored on reboot.',
			COMMAND_DISABLE_WARN: 'You probably don\'t want to disable that, since you wouldn\'t be able to run any command to enable it again',
			COMMAND_CONF_NOKEY: 'You must provide a key',
			COMMAND_CONF_NOVALUE: 'You must provide a value',
			COMMAND_CONF_GUARDED: (name) => `${util.toTitleCase(name)} may not be disabled.`,
			COMMAND_CONF_UPDATED: (key, response) => `Successfully updated the key **${key}**: \`${response}\``,
			COMMAND_CONF_KEY_NOT_ARRAY: 'This key is not array type. Use the action \'reset\' instead.',
			COMMAND_CONF_GET_NOEXT: (key) => `The key **${key}** does not seem to exist.`,
			COMMAND_CONF_GET: (key, value) => `The value for the key **${key}** is: \`${value}\``,
			COMMAND_CONF_RESET: (key, response) => `The key **${key}** has been reset to: \`${response}\``,
			COMMAND_CONF_SERVER_DESCRIPTION: 'Define per-server configuration.',
			COMMAND_CONF_SERVER: (key, list) => `**Server Configuration${key}**\n${list}`,
			COMMAND_CONF_USER_DESCRIPTION: 'Define per-user configuration.',
			COMMAND_CONF_USER: (key, list) => `**User Configuration${key}**\n${list}`,
			COMMAND_STATS: (memUsage, uptime, users, servers, channels, klasaVersion, discordVersion, processVersion) => [
				'= STATISTICS =',
				'',
				`• Mem Usage  :: ${memUsage} MB`,
				`• Uptime     :: ${uptime}`,
				`• Users      :: ${users}`,
				`• Servers    :: ${servers}`,
				`• Channels   :: ${channels}`,
				`• Klasa      :: v${klasaVersion}`,
				`• Discord.js :: v${discordVersion}`,
				`• Node.js    :: ${processVersion}`
			],
			COMMAND_STATS_DESCRIPTION: 'Provides some details about the bot and stats.',
			COMMAND_SUBSCRIBE_NO_ROLE: 'This server does not have a configured announcement role.',
			COMMAND_SUBSCRIBE_SUCCESS: (role) => `Successfully granted the role: **${role}**`,
			COMMAND_UNSUBSCRIBE_SUCCESS: (role) => `Successfully removed the role: **${role}**`,
			COMMAND_SUBSCRIBE_NO_CHANNEL: 'This server does not have a configured announcement channel.',
			COMMAND_ANNOUNCEMENT: (role) => `**New announcement for** ${role}:`,
			SYSTEM_HIGHEST_ROLE: 'This role\'s hierarchy position is higher or equal than me, I am not able to grant it to anyone.',
			SYSTEM_CHANNEL_NOT_POSTABLE: 'I am not allowed to send messages to this channel.',
			COMMAND_SUCCESS: 'Successfully executed the command.',
			DEAR: 'Commander',
			// Music Commands
			COMMAND_MUSIC_ADD_DESCRIPTION: `Adds a song the the queue.`,
			COMMAND_MUSIC_ADD_SUCCESS: (title) => `🎵 Added **${title}** to the queue 🎶`,
			COMMAND_MUSIC_ADD_FAILURE: 'Not found.',

			COMMAND_MUSIC_AUTOPLAY_DESCRIPTION: 'Toggle the autoplayer.',
			COMMAND_MUSIC_AUTOPLAY_EXTENDEDHELP: [
				'NOTE! This command does not make Ranger play a song from the nowhere, it tells her whether to play the first',
				'non-duplicated (in a range of 10 songs) song from the related videos she has fetched in the latest added song.',
				'That is to say, Ranger receives a list of 10-15 related songs, she also saves the 10 previous played songs. If',
				'the song has already been played, it will be skipped and check the next, until finding a song that has not been',
				'played recently. This allows two things:\n- 1: Play music unlimitedly without playing the same song twice.\n- 2:',
				'Find new songs from YouTube.'
			].join(' '),
			COMMAND_MUSIC_AUTOPLAY_STATUS: (enabled) => enabled
				? `Sure thing! I'll keep playing decks until you get bored!`
				: `I stopped auto-playing songs, just make sure to give me some songs later!`,

			COMMAND_MUSIC_JOIN_DESCRIPTION: 'Joins the message author\'s voice channel.',
			COMMAND_MUSIC_JOIN_SUCCESS: (vChannel) => `Successfully joined the voice channel ${vChannel}`,
			COMMAND_MUSIC_JOIN_FAILURE_NOINFO: 'I am sorry, but Discord did not tell me the information I need, so I do not know what voice channel are you connected to...',
			COMMAND_MUSIC_JOIN_FAILURE_NOVOICE: 'You are not connected in a voice channel.',
			COMMAND_MUSIC_JOIN_FAILURE_SAMECHANNEL: 'Turn on your volume! I am playing music there!',
			COMMAND_MUSIC_JOIN_FAILURE_ALREADYPLAYING: 'I am sorry, but I am playing music in another channel, perhaps try later or ask nicely to the people who came first to join them!',
			COMMAND_MUSIC_JOIN_FAILURE_FULL: 'I cannot join your voice channel, it\'s full... kick somebody with the boot or make room for me!',
			COMMAND_MUSIC_JOIN_FAILURE_CONNECT: 'I do not have enough permissions to connect to your voice channel. I am missing the CONNECT permission.',
			COMMAND_MUSIC_JOIN_FAILURE_SPEAK: 'I can connect... but not speak. Please turn on this permission so I can emit music.',

			COMMAND_MUSIC_LEAVE_DESCRIPTION: 'Leaves the voice channel.',
			COMMAND_MUSIC_LEAVE: (vChannel) => `Successfully left the voice channel ${vChannel}`,

			COMMAND_MUSIC_PAUSE_DESCRIPTION: 'Pauses the current song.',
			COMMAND_MUSIC_PAUSE_SUCCESS: '⏸ Paused',
			COMMAND_MUSIC_PAUSE_FAILURE: 'I am not playing anything...',

			COMMAND_MUSIC_PLAY_DESCRIPTION: 'Let\'s start the queue!',
			COMMAND_MUSIC_PLAY_SUCCESS: (title, requester) => `🎧 Playing: **${title}** as requested by: **${requester}**`,
			COMMAND_MUSIC_PLAY_EMPTY: (prefix) => `Deck's empty my friend, add some songs to the queue with the \`${prefix}add\` command so I can play them.`,
			COMMAND_MUSIC_PLAY_ALREADYPLAYING: 'Hey! The disk is already spinning!',
			COMMAND_MUSIC_PLAY_RESUME: (title) => `There was a track going on! Playing it back! Now playing: ${title}!`,
			COMMAND_MUSIC_PLAY_FAILURE_BROKEN: 'Whoops! This disk broke!',
			COMMAND_MUSIC_PLAY_RATE_AUDIO: '⏹ From 1 to 10, being 1 the worst score and 10 the best, how would you rate the session? It just ended!',
			COMMAND_MUSIC_PLAY_AUTO: 'YouTube AutoPlay',

			COMMAND_MUSIC_PLAYING_DESCRIPTION: 'Get information from the current song.',
			COMMAND_MUSIC_PLAYING_FAILURE: 'Are you speaking to me? Because my deck is empty...',
			COMMAND_MUSIC_PLAYING_UNKNOWN: 'Unknown',
			COMMAND_MUSIC_PLAYING_DURATION: (duration, remaining) => `**Duration**: ${duration} [Time remaining: ${remaining}]`,
			COMMAND_MUSIC_PLAYING_DESC: (description) => `**Description**: ${description}`,

			COMMAND_MUSIC_PRUNE_DESCRIPTION: 'Prune the queue list.',
			COMMAND_MUSIC_PRUNE_FAILURE: 'You can\'t execute this command when there are over 4 members. You must be at least a Dj Member.',
			COMMAND_MUSIC_PRUNE_SUCCESS: (tracks) => `🗑 Pruned ${tracks}`,

			COMMAND_MUSIC_QUEUE: '',

			COMMAND_MUSIC_REMOVE: '',

			COMMAND_MUSIC_RESTART: '',

			COMMAND_MUSIC_RESUME: '',

			COMMAND_MUSIC_SKIP: '',

			COMMAND_MUSIC_TIME_DESCRIPTION: 'Check how much time is left for the song to end.',
			COMMAND_MUSIC_TIME_SUCCESS: (remaining) => `🕰 Time remaining: ${remaining}`,
			COMMAND_MUSIC_TIME_FAILURE: 'Are you speaking to me? Because my deck is empty...',

			COMMAND_MUSIC_VOLUME: ''
		};
	}

};
