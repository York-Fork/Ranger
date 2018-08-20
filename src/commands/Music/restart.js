const { MusicCommand } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, {
			permissionLevel: 6,
			description: language => language.get('COMMAND_MUSIC_RESTART_DESCRIPTION')
		});
	}

	async run(message) {
		message.guild.music.clear();
		if (message.guild.me.voice.channel) await message.guild.me.voice.channel.leave();
		return message.sendLocale('COMMAND_MUSIC_RESTART_SUCCESS');
	}

};
