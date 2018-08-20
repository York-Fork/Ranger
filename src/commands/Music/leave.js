const { MusicCommand } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, {
			description: language => language.get('COMMAND_MUSIC_LEAVE_DESCRIPTION'),
			requireMusic: true
		});
	}

	async run(message) {
		await message.guild.music.leave();
		return message.sendLocale('COMMAND_MUSIC_LEAVE', [message.guild.me.voice.channel]);
	}

};
