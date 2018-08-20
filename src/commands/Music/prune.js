const { MusicCommand } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, {
			description: language => language.get('COMMAND_MUSIC_PRUNE_DESCRIPTION'),
			requireMusic: true
		});
	}

	async run(message) {
		const { music } = message.guild;

		if (music.voiceChannel.members.size > 4)
			if (!await message.hasAtLeastPermissionLevel(5)) throw message.language.get('COMMAND_MUSIC_PRUNE_FAILURE');

		music.prune();
		return message.sendLocale('COMMAND_MUSIC_PRUNE_SUCCESS', [music.queue.length]);
	}

};
