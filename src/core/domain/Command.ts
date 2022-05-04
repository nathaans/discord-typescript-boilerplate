/* eslint-disable no-unused-vars */
import { ApplicationCommandOptionData } from 'discord.js';

export abstract class Command <Client = any> {
  client: Client;

  name: string;
  description: string;
  devOnly: string;
  options?: ApplicationCommandOptionData[];

  constructor (client: Client, options: Omit<Command, 'client'>) {
    this.client = client;
    Object.assign(this, options);
  }

  async execute (context: any): Promise<any> {}
}
