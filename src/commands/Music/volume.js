const { MusicCommand, klasaUtil: { codeBlock } } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, {
			// Disabled until Krypton lands stable
			enabled: false,
			aliases: ['vol'],
			usage: '[control:string]',
			description: 'Manage the volume for current song.',
			extendedHelp: [
				"Let's break it down!",
				'',
				"Listen carefully, you use this command by doing either 'volume ++++' or 'volume ----'.",
				"The more '+' you write, the more the volume will increment.",
				"The more '-' you write, the more the volume will decrease.",
				'',
				'👌'
			].join('\n'),
			requireMusic: true
		});
	}

	async run(message, [vol]) {
		const { dispatcher, playing } = message.guild.music;
		if (!playing) throw `The party isn't going on! One shouldn't touch the volume wheel without a song first!`;

		if (!vol) return message.sendMessage(`📢 Volume: ${Math.round(dispatcher.volume * 50)}%`);
		if (/^[+]+$/.test(vol)) {
			if (Math.round(dispatcher.volume * 50) >= 100) return message.sendMessage(`📢 Volume: ${Math.round(dispatcher.volume * 50)}%`);
			dispatcher.setVolume(Math.min(((dispatcher.volume * 50) + (2 * (vol.split('+').length - 1))) / 50, 2));
			return message.sendMessage(`${dispatcher.volume === 2 ? '📢' : '🔊'} Volume: ${Math.round(dispatcher.volume * 50)}%`);
		}

		if (/^[-]+$/.test(vol)) {
			if (Math.round(dispatcher.volume * 50) <= 0) return message.sendMessage(`🔇 Volume: ${Math.round(dispatcher.volume * 50)}%`);
			dispatcher.setVolume(Math.max(((dispatcher.volume * 50) - (2 * (vol.split('-').length - 1))) / 50, 0));
			return message.sendMessage(`${dispatcher.volume === 0 ? '🔇' : '🔉'} Volume: ${Math.round(dispatcher.volume * 50)}%`);
		}

		throw `This command is quite analogic, but let me show you how you use this command:${codeBlock('', this.extendedHelp)}`;
	}

};
