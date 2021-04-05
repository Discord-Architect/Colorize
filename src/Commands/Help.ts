import Command from "../Command";
import { Logger } from "@discord-architect/core";

export default class Help extends Command {
  constructor () {
    super('help');
  }
  public async run (): Promise<void> {
    Logger.send('info', `Make choosing file : arch make:file\nMake new project : arch create-project`)
  }

}