import Dispatcher from './Dispatcher'

const [, , commandName, props] = process.argv
const dispatcher: Dispatcher = new Dispatcher(commandName, props.split(','))

dispatcher.dispatch()
