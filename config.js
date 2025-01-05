import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
global.botNumberCode = '' //Ejemplo: +573218138672
global.confirmCode = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
   ['51939249284', '✅ 𝐒𝐎𝐏𝐎𝐑𝐓𝐄 𝐗 𝐕𝐄𝐍𝐓𝐀𝐒', true],
   ['51939249284'],
   ['51939249284'],
   ['51939249284']
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//cambiar a true si el bot detecta sus propios comandos.
global.isBaileysFail = false
global.libreria = 'Baileys'
global.baileys = 'V 6.7.5'
global.vs = '2.0.7'
global.vsJB = '5.0'
global.nameqr = '🌺 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 🌺'
global.namebot = '🌺 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 🌺'
global.sessions = 'GenesisSession'
global.jadi = 'GenesisJadiBot'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '🌺 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 🌺'
global.botname = '🌺 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 🌺'
global.wm = '🌺 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 🌺'
global.author = '🌺 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 🌺'
global.dev = '🌺 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 🌺'
global.textbot = '🌺 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 🌺'
global.namebot = '🌺 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 🌺'
global.stickpack = `🌺 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 🌺`
global.titulowm = '-❀ᩙ̈͟༚̮ ⡞᪲=͟͟͞🄶𝚎᪶۫۫𝚗᪶۫۫𝚎᪶۫۫𝚜᪶۫۫𝚒᪶۫۫𝚜᪶۫ 𝚊᪶۫𝚒᪶۫͜ ≼᳞ׄ ᵎ ˚꙳꤬ꨪ'
global.titulowm2 = '🌺 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 🌺'
global.igfg = '🌺 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 🌺'
global.titu = '🌺 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 🌺'
global.listo = '*Aqui tiene ฅ^•ﻌ•^ฅ*'
global.vs = '2.0.0'
global.namechannel = '🌺 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 | 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 🌺'
global.stickauth = `🌺 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 🌺`
global.dis = ':⁖֟⊱┈֟፝❥'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.png')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.group2 = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.canal = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.github = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u' 
global.instagram = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u' 
global.whatsApp = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'ᴍɪᴢᴜᴋɪ ᴀɪ ᴏꜰɪᴄɪᴀʟ ᴡʜᴀᴛꜱᴀᴘᴘ', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}};

global.fakegif2 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'Mizuki-Ai', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: 'ᴍɪᴢᴜᴋɪ ᴀɪ ᴡʜᴀᴛꜱᴀᴘᴘ', jpegThumbnail: catalogo }}};

global.fakegif3 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'Mizuki-Ai', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: 'ᴍɪᴢᴜᴋɪ ᴀɪ ᴏꜰɪᴄɪᴀʟ', jpegThumbnail: catalogo }}};

global.fakegif4 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'Mizuki-Ai', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: 'ᴍɪᴢᴜᴋɪ ᴀɪ ᴏꜰᴄ', jpegThumbnail: catalogo }}};

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.ch = {
ch1: '120363316264159575@newsletter',
ch2: '120363316264159575@newsletter',
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69
global.maxwarn = '3'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
