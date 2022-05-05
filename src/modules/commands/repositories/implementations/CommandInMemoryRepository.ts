import { Command } from '@core/domain/Command';
import { ICommandRepository } from '../ICommandRepository';

export class CommandInMemoryRepositoryRepository implements ICommandRepository {
  commands: Command[];

  constructor () {
    this.commands = [];
  }

  getCommand (name: string): Command<any> {
    return this.commands.find((command) => command.name === name);
  }

  registerCommand (command: Command): null {
    if (!this.commands.find((cmd) => cmd.name === command.name))
      this.commands.push(command);

    return null;
  }
}
