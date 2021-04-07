# Colorize
The `@discord-architect/Colorize` module provides you with a whole [palette](https://tailwindcss.com/docs/customizing-colors) of ready-to-use colours to enhance your embeds.
Install the module from your terminal from npm registry:
```
npm install @discord-achitect/colorize
```
Or
```
yarn add @discord-architect/colorize
```

Import the module from `@discord-architect/colorize` as follows :
```typescript
import { LightBlue } from '@discord-architect/colorize'
import { MessageEmbed } from 'discord.js'

const embed = new MessageEmbed({
  title: 'Hello world',
  color: LightBlue.LIGHT_BLUE_400
})
```