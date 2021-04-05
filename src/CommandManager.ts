import Command from "./Command";
import { Logger } from "@discord-architect/core";

export default class CommandManager {
  private commandList: Map<string, Command> = new Map()

  public register (command: Command) {
    const item = this.commandList.get(command.identifier)

    if (item) {
      Logger.send('error', `The ${item.identifier} was already registered`)
    }

    this.commandList.set(command.identifier, command)
  }

  public getCommand(identifier: string): Command | undefined {
    return this.commandList.get(identifier)
  }
}