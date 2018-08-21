const { MusicCommand } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, {
			usage: '<number:integer>',
			description: language => language.get('COMMAND_MUSIC_REMOVE_DESCRIPTION'),
			requireMusic: true
		});
	}

	async run(message, [number]) {
		if (number <= 0) throw message.language.get('COMMAND_MUSIC_REMOVE_BAD_MATH');
		number--;

		const { music } = message.guild;
		if (music.queue.length < number) throw message.language.get('COMMAND_MUSIC_REMOVE_NOT_ENOUGH', music.queue.length);

		const song = music.queue[number];
		if (song.requester.id !== message.author.id)
			if (!await message.hasAtLeastPermissionLevel(5)) throw message.language.get('COMMAND_MUSIC_REMOVE_GET_DJ');

		music.queue.splice(number, 1);
		return message.sendLocale('COMMAND_MUSIC_REMOVE_SUCCESS', song.title, song.requester);
	}

};
