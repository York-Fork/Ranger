const { MusicCommand } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, {
			description: 'Resumes the current song.',
			requireMusic: true
		});
	}

	async run(message) {
		if (message.guild.music.idling) throw 'My deck is empty! Give me a disk first so I can lift the spirits in this room!';
		if (message.guild.music.playing) throw 'Is this song too silent, my friend? Because it is indeed... playing.';

		message.guild.music.resume();
		return message.sendMessage('▶ Resumed');
	}

};
