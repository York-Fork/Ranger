const { MusicCommand } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, {
			description: language => language.get('COMMAND_MUSIC_RESUME_DESCRIPTION'),
			requireMusic: true
		});
	}

	async run(message) {
		if (message.guild.music.idling) throw message.language.get('COMMAND_MUSIC_RESUME_IDLE');
		if (message.guild.music.playing) throw message.language.get('COMMAND_MUSIC_RESUME_PLAYING');

		message.guild.music.resume();
		return message.sendLocale('COMMAND_MUSIC_RESUME_SUCCESS');
	}

};
