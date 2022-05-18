import { Client } from '@core/infra/Client';

export const client = new Client({
  token: process.env.TOKEN,
  intents: ['GUILDS', 'GUILD_MEMBERS'],
  presence: {
    status: process.env.NODE_ENV === 'development' ? 'dnd' : 'online',
    activities: [
      { name: '/help', type: 'WATCHING' },
    ],
  },
});
