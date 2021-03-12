import path from 'path'
import Env from '@discord-architect/env'
import fs from 'fs'
import { Logger } from '@discord-architect/core'

const env = {
	SRC_DIR: Env.get('SRC_DIR') || ''
}
export default class Dispatcher {
	constructor(private commandName: string, private args: Array<string>) {}

	public dispatch(): void {
		const command: any = {
			'make:command': () => this.preload('Command'),
			'make:event': () => this.preload('Event'),
			'make:middleware': () => this.preload('Middleware'),
			'make:prerequisite': () => this.preload('Prerequisite')
		}

		;(command[this.commandName] || (() => Logger.sendCustom('error', "This command doesn't exist.")))()
	}

	private preload(templateFile: string): void {
		if (this.args[0] == undefined) return

		const templateDir: string = path.join(__dirname, '..', 'Template', templateFile)
		const targetDir: string = path.join(process.cwd(), env.SRC_DIR || 'src')

		this.makeFile(templateDir, targetDir, this.args)
	}

	private makeFile(templateDir: string, folderDir: string, path: Array<string>) {
		fs.readFile(templateDir, 'utf8', (err, data) => {
			const filename = path[path.length - 1]
			const filenameUpper = filename.charAt(0).toUpperCase() + filename.slice(1)
			const newFile = data.replace(/\$className/g, filenameUpper).replace('$tag', filename.toLowerCase())

			fs.access(`${folderDir}/${filenameUpper}.ts`, fs.constants.F_OK, async (err) => {
				if (err?.code == 'ENOENT') {
					fs.writeFile(`${folderDir}/${filenameUpper}.ts`, newFile, (error) => {
						if (!error) Logger.sendCustom('success', `\n✔ The file ${filenameUpper}.ts was create.\n${folderDir}/${filenameUpper}.ts\n`)
					})
				} else {
					return Logger.send('error', `File already exist in "${folderDir.replace(/\\/g, '/')}"`)
				}
			})
		})
	}
}
