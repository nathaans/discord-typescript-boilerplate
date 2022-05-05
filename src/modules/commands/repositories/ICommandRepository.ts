/* eslint-disable no-unused-vars */
import { Command } from '@core/domain/Command';

export interface ICommandRepository {
  getCommand (name: string): Command;
  registerCommand (command: Command): null;
}
