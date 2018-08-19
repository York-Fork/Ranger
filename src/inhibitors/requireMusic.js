const { Inhibitor } = require('klasa');

module.exports = class extends Inhibitor {

	constructor(...args) {
		super(...args, { spamProtection: true });
	}

	async run(message, cmd) {
		if (cmd.requireMusic !== true) return;

		if (message.channel.type !== 'text') throw 'This command may be only executed in a server.';

		if (!message.member.voice.channel) throw 'You are not connected in a voice channel.';
		if (!message.guild.me.voice.channel) throw 'I am not connected in a voice channel.';
		if (message.member.voice.channel !== message.guild.me.voice.channel) throw 'You must be in the same voice channel as me.';
	}

};
