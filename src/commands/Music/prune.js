const { MusicCommand } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, {
			description: 'Prune the queue list.',
			requireMusic: true
		});
	}

	async run(message) {
		const { music } = message.guild;

		if (music.voiceChannel.members.size > 4)
			if (!await message.hasAtLeastPermissionLevel(5)) throw 'You can\'t execute this command when there are over 4 members. You must be at least a Dj Member.';

		music.prune();
		return message.sendMessage(`🗑 Pruned ${music.queue.length}`);
	}

};
