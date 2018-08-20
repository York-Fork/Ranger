const { MusicCommand, klasaUtil: { sleep } } = require('../../index');

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, { description: language => language.get('COMMAND_MUSIC_PLAY_DESCRIPTION') });
	}

	async run(message) {
		const { music } = message.guild;

		if (!music.queue.length)
			return message.sendLocale('COMMAND_MUSIC_PLAY_EMPTY', [message.guild.settings.prefix]);

		if (!music.voiceChannel) await this.store.get('join').run(message);

		if (music.playing) {
			return message.sendLocale('COMMAND_MUSIC_PLAY_ALREADYPLAYING');
		} else if (music.paused) {
			music.resume();
			return message.sendLocale('COMMAND_MUSIC_PLAY_RESUME', [music.queue[0].title]);
		} else {
			music.channel = message.channel;
			return this.play(music);
		}
	}

	async play(music) {
		while (music.queue.length) {
			const [song] = music.queue;
			await music.channel.sendLocale('COMMAND_MUSIC_PLAY_SUCCESS', [song.title, song.requester]);
			await sleep(300);

			try {
				if (!await new Promise(async (resolve) => {
					(await music.play())
						.on('end', () => {
							music.skip();
							resolve(true);
						})
						.on('error', (err) => {
							music.channel.sendLocale('COMMAND_MUSIC_PLAY_FAILURE_BROKEN');
							music.client.emit('error', err);
							music.skip();
							resolve(true);
						})
						.once('disconnect', () => {
							resolve(false);
						});
				})) return;

				// Autofetch if the autoplayer is enabled
				if (!music.queue.length && music.autoplay) await this.autoPlayer(music);
			} catch (error) {
				this.client.emit('error', error);
				music.channel.send(error);
				music.leave();
				break;
			}
		}

		if (!music.queue.length) {
			music.channel.sendLocale('COMMAND_MUSIC_PLAY_RATE_AUDIO')
				.then(() => music.leave());
		}
	}

	autoPlayer(music, language) {
		return music.add(language.get('COMMAND_MUSIC_PLAY_AUTO'), music.next);
	}

};
