const { MusicCommand } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, {
			description: 'Toggle the autoplayer.',
			extendedHelp: language => language.get('COMMAND_MUSIC_AUTOPLAY_EXTENDEDHELP'),
			requireMusic: true
		});
	}

	async run(message) {
		const { music } = message.guild;
		const enabled = !music.autoplay;
		music.autoplay = enabled;
		return message.sendLocale(enabled ? 'COMMAND_MUSIC_AUTOPLAY_ENABLED' : 'COMMAND_MUSIC_AUTOPLAY_DISABLED');
	}

};
