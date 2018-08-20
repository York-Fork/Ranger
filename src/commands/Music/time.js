const { MusicCommand, util: { showSeconds } } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, { description: language => language.get('COMMAND_MUSIC_TIME_DESCRIPTION') });
	}

	async run(message) {
		const { playing, remaining } = message.guild.music;
		if (!playing) throw message.language.get('COMMAND_MUSIC_TIME_FAILURE');
		return message.sendLocale('COMMAND_MUSIC_TIME_SUCCESS', [showSeconds(remaining)]);
	}

};
