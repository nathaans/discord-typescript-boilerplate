import { Client as DiscordClient, ClientOptions } from 'discord.js';

type CustomClientOptions = ClientOptions & {
  token: string;
}

export class Client extends DiscordClient {

  constructor (options: CustomClientOptions) {
    super(options);

    this.token = options.token;
  }

  connect () {
    return this.login(this.token);
  }
}
