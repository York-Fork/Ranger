const { MusicCommand } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, {
			description: 'Leaves the voice channel.',
			requireMusic: true
		});
	}

	async run(message) {
		await message.guild.music.leave();
		return message.sendMessage(`Successfully left the voice channel ${message.guild.me.voice.channel}`);
	}

};
