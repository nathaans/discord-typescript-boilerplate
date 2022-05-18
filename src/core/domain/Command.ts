import { ApplicationCommandOptionData } from 'discord.js';
import { Client } from '@core/infra/Client';

export abstract class Command <CommandClient = Client> {
  client: CommandClient;

  name: string;
  description: string;
  devOnly: string;
  options?: ApplicationCommandOptionData[];

  constructor (client: CommandClient, options: Omit<Command, 'client'>) {
    this.client = client;
    Object.assign(this, options);
  }

  execute (context: any): unknown {
    return { context };
  }
}
