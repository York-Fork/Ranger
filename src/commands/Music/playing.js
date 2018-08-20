const { MusicCommand, util: { splitText, showSeconds } } = require('../../index');
const { MessageEmbed } = require('discord.js');
const getInfo = require('util').promisify(require('ytdl-core').getInfo);

module.exports = class extends MusicCommand {

	constructor(...args) {
		super(...args, { description: language => language.get('COMMAND_MUSIC_PLAYING_DESCRIPTION') });
	}

	async run(message) {
		const { remaining, queue, playing } = message.guild.music;
		if (!playing) message.language.get('COMMAND_MUSIC_PLAYING_FAILURE');

		const [song] = queue;
		const info = await getInfo(song.url);
		if (!info.author) info.author = {};

		return message.sendMessage(new MessageEmbed()
			.setColor(12916736)
			.setTitle(info.title)
			.setURL(`https://youtu.be/${info.vid}`)
			.setAuthor(info.author.name || message.language.get('COMMAND_MUSIC_PLAYING_UNKNOWN'), info.author.avatar || null, info.author.channel_url || null)
			.setDescription([
				message.language.get('COMMAND_MUSIC_PLAYING_DURATION', showSeconds(parseInt(info.length_seconds) * 1000), showSeconds(remaining)),
				message.language.get('COMMAND_MUSIC_PLAYING_DURATION', splitText(info.description, 500))
			].join('\n\n'))
			.setThumbnail(info.thumbnail_url)
			.setTimestamp());
	}

};
