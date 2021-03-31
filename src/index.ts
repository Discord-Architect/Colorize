import Dispatcher from './Dispatcher'
import { Logger } from '@discord-architect/core'

const [, , commandName, props] = process.argv

if (!commandName) {
	Logger.send('error', `node arch make:event|command|middleware|prerequisite <filename>`)
}

if (!props) {
	Logger.send('error', `You should to define filename.\n→ node arch ${commandName} <filename>`)
}
const dispatcher: Dispatcher = new Dispatcher(commandName, props.split(','))

dispatcher.dispatch()
