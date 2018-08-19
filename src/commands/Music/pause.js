const { MusicCommand } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, {
			description: 'Pauses the current song.',
			requireMusic: true
		});
	}

	async run(message) {
		const { music } = message.guild;
		if (!music.playing) throw 'I am not playing anything...';

		music.pause();
		return message.sendMessage('⏸ Paused');
	}

};
