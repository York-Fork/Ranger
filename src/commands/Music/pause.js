const { MusicCommand } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, {
			description: language => language.get('COMMAND_MUSIC_PAUSE_DESCRIPTION'),
			requireMusic: true
		});
	}

	async run(message) {
		const { music } = message.guild;
		if (!music.playing) throw message.language.get('COMMAND_MUSIC_PAUSE_FAILURE');

		music.pause();
		return message.sendLocale('COMMAND_MUSIC_PAUSE_SUCCESS');
	}

};
