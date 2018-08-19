const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['talk'],
			description: 'Make Ranger talk in another channel.',
			permissionLevel: 10,
			usage: '[channel:channel] [message:string] [...]',
			usageDelim: ' '
		});
	}

	async run(message, [channel = message.channel, ...content]) {
		if (message.deletable) message.delete().catch(() => null);

		const attachment = message.attachments.size > 0 ? message.attachments.first().url : null;
		content = content.length ? content.join(' ') : '';

		if (content.length === 0 && !attachment) throw 'I have no content nor attachment to send, please write something.';

		const options = {};
		if (attachment) options.files = [{ attachment }];

		return channel.send(content, options);
	}

};
