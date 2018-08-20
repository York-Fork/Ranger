const { MusicCommand } = require('../../index');
const { Permissions: { FLAGS } } = require('discord.js');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, {
			aliases: ['connect'],
			description: language => language.get('COMMAND_MUSIC_JOIN_DESCRIPTION')
		});
	}

	async run(message) {
		if (!message.member) {
			await message.guild.members.fetch(message.author.id).catch(() => {
				throw message.language.get('COMMAND_MUSIC_JOIN_FAILURE_NOINFO');
			});
		}

		const voiceChannel = message.member.voice.channel;
		if (!voiceChannel) throw message.language.get('COMMAND_MUSIC_JOIN_FAILURE_NOVOICE');
		if (message.guild.music.playing) {
			const rangerVoiceChannel = message.guild.music.voice.channel;
			if (voiceChannel.id === rangerVoiceChannel.id) throw message.language.get('COMMAND_MUSIC_JOIN_FAILURE_SAMECHANNEL');
			throw message.language.get('COMMAND_MUSIC_JOIN_FAILURE_ALREADYPLAYING');
		}
		this.resolvePermissions(message, voiceChannel);

		await message.guild.music.join(voiceChannel);
		return message.sendLocale('COMMAND_MUSIC_JOIN_SUCCESS', [voiceChannel]);
	}

	resolvePermissions(message, voiceChannel) {
		if (voiceChannel.full) throw message.language.get('COMMAND_MUSIC_JOIN_FAILURE_FULL');

		const permissions = voiceChannel.permissionsFor(message.guild.me);
		if (!permissions.has(FLAGS.CONNECT)) throw message.language.get('COMMAND_MUSIC_JOIN_FAILURE_CONNECT');
		if (!permissions.has(FLAGS.SPEAK)) throw message.language.get('COMMAND_MUSIC_JOIN_FAILURE_SPEAK');
	}

};
