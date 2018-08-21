const { Client } = require('klasa');
const config = require('../config.js');

// Load custom structures
require('./lib/extensions/RangerGuild');

// Modify the permission levels
Client.defaultPermissionLevels
	.add(5, (client, message) => message.member && message.guild.settings.dj && message.member.roles.has(message.guild.settings.dj), { fetch: true })
	.add(6, (client, message) => message.member
		&& ((message.guild.settings.administrator && message.member.roles.has(message.guild.settings.administrator))
            || message.member.permissions.has('MANAGE_GUILD')), { fetch: true });

// Add new guild schemas
Client.defaultGuildSchema
	.add('dj', 'Role', { configurable: true, default: null })
	.add('administrator', 'Role', { configurable: true, default: null });

new Client({
	disabledEvents: [
		'GUILD_BAN_ADD',
		'GUILD_BAN_REMOVE',
		'TYPING_START',
		'CHANNEL_PINS_UPDATE',
		'PRESENCE_UPDATE',
		'USER_UPDATE'
	],
	commandEditing: true,
	console: { useColor: true, utc: true },
	pieceDefaults: { commands: { deletable: true, promptLimit: 5, quotedStringSupport: true } },
	prefix: 'r.',
	presence: { activity: { name: 'Ranger, help', type: 'LISTENING' } },
	regexPrefix: /^(hey )?ranger(,|!)/i
}).login(config.token);
