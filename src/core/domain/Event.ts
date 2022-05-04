/* eslint-disable no-unused-vars */
export type Emitter = 'on' | 'once'

export abstract class Event <Client = any> {
  client: Client;

  name: string;
  emitter: Emitter;

  constructor (client: Client, options: Omit<Event, 'client'>) {
    this.client = client;
    Object.assign(this, options);
  }

  async override (...args: any): Promise<any> {}
}
