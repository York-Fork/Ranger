const { MusicCommand } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, {
			permissionLevel: 6,
			description: 'Clears the music handler.'
		});
	}

	async run(message) {
		message.guild.music.clear();
		if (message.guild.me.voice.channel) await message.guild.me.voice.channel.leave();
		return message.sendMessage('Successfully restarted the music module.');
	}

};
