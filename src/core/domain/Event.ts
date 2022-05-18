import { Client } from '@core/infra/Client';

export type Emitter = 'on' | 'once'

export abstract class Event <EventClient = Client> {
  client: EventClient;

  name: string;
  emitter: Emitter;

  constructor (client: EventClient, options: Omit<Event, 'client'>) {
    this.client = client;
    Object.assign(this, options);
  }

  override (...args: any[]): unknown {
    return { args};
  }
}
