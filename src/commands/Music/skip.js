const { MusicCommand } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, {
			usage: '[force]',
			description: language => language.get('COMMAND_MUSIC_SKIP_DESCRIPTION'),
			requireMusic: true
		});
	}

	async run(message, [force]) {
		const { music } = message.guild;

		if (music.voiceChannel.members.size > 4) {
			if (force) {
				if (!await message.hasAtLeastPermissionLevel(5)) throw message.language.get('COMMAND_MUSIC_SKIP_FAILURE');
			} else {
				const response = this.handleSkips(music, message.author.id, message.language);
				if (response) return message.sendMessage(response);
			}
		}

		await message.sendLocale('COMMAND_MUSIC_SKIP_SUCCESS', [music.queue[0].title]);
		music.skip(true);
		return null;
	}

	handleSkips(musicInterface, user, language) {
		if (!musicInterface.queue[0].skips) musicInterface.queue[0].skips = new Set();
		if (musicInterface.queue[0].skips.has(user)) return language.get('COMMAND_MUSIC_SKIP_VOTED');
		musicInterface.queue[0].skips.add(user);
		const members = musicInterface.voiceChannel.members.size - 1;
		return this.shouldInhibit(members, musicInterface.queue[0].skips.size, language);
	}

	shouldInhibit(total, size, language) {
		if (total <= 3) return true;
		return size >= total * 0.4 ? false : language.get('COMMAND_MUSIC_SKIP_VOTES', size, total);
	}

};
