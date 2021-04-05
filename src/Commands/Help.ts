import Command from "../Command";
import { Logger } from "@discord-architect/core";

export default class Help extends Command {
  constructor () {
    super('help');
  }
  public async run (): Promise<void> {
    Logger.send('info', `Make choosing file : architect make:file\nMake new project : architect create-project`)
  }

}