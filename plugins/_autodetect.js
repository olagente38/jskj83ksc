let WAMessageStubType = (await import('@whiskeysockets/baileys')).default

export async function before(m, { conn, participants, groupMetadata }) {
if (!m.messageStubType || !m.isGroup) return
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}  
let chat = global.db.data.chats[m.chat]
let usuario = `@${m.sender.split`@`[0]}`
let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || 'https://qu.ax/QGAVS.jpg'  

let nombre, foto, edit, newlink, status, admingp, noadmingp
nombre = ` ︿︿︿︿︿︿︿︿︿︿︿︿\n┊  ⚒️「 \`𝐀𝐔𝐓𝐎 | 𝐃𝐄𝐓𝐄𝐂𝐓\` 」⚒️ \n ︶︶︶︶︶︶︶︶︶︶︶︶\n*┊ 👤* 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 *»* ${usuario} \n*┊ 🔖* 𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃 *»* Ha cambiado el nombre del grupo\n*┊ 📝* 𝐍𝐎𝐌𝐁𝐑𝐄 𝐀𝐂𝐓𝐔𝐀𝐋 *»* ${m.messageStubParameters[0]}\n ︶︶︶︶︶︶︶︶︶︶︶︶`
foto = ` ︿︿︿︿︿︿︿︿︿︿︿︿\n┊  ⚒️「 \`𝐀𝐔𝐓𝐎 | 𝐃𝐄𝐓𝐄𝐂𝐓\` 」⚒️ \n ︶︶︶︶︶︶︶︶︶︶︶︶\n*┊ 👤* 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 *»* ${usuario} \n*┊ 🔖* 𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃 *»* Ha cambiado la imagen del grupo\n ︶︶︶︶︶︶︶︶︶︶︶︶`
edit = ` ︿︿︿︿︿︿︿︿︿︿︿︿\n┊  ⚒️「 \`𝐀𝐔𝐓𝐎 | 𝐃𝐄𝐓𝐄𝐂𝐓\` 」⚒️ \n ︶︶︶︶︶︶︶︶︶︶︶︶\n*┊ 👤* 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 *»* ${usuario} \n*┊ 🔖* 𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃 *»* Ha permitido que ${m.messageStubParameters[0] == 'on' ? 'solo admins' : 'todos'} puedan configurar el grupo\n ︶︶︶︶︶︶︶︶︶︶︶︶`
newlink = ` ︿︿︿︿︿︿︿︿︿︿︿︿\n┊  ⚒️「 \`𝐀𝐔𝐓𝐎 | 𝐃𝐄𝐓𝐄𝐂𝐓\` 」⚒️ \n ︶︶︶︶︶︶︶︶︶︶︶︶\n*┊ 👤* 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 *»* ${usuario} \n*┊ 🔖* 𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃 *»* El enlace del grupo ha sido restablecido\n ︶︶︶︶︶︶︶︶︶︶︶︶`
status = ` ︿︿︿︿︿︿︿︿︿︿︿︿\n┊  ⚒️「 \`𝐀𝐔𝐓𝐎 | 𝐃𝐄𝐓𝐄𝐂𝐓\` 」⚒️ \n ︶︶︶︶︶︶︶︶︶︶︶︶\n*┊ 👤* 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 *»* ${usuario} \n*┊ 🔖* 𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃 *»* El grupo ha sido ${m.messageStubParameters[0] == 'on' ? '*cerrado 🔒*' : '*abierto 🔓*'}\n*┊ 💬* Ahora ${m.messageStubParameters[0] == 'on' ? '*solo admins*' : '*todos*'} pueden enviar mensaje\n ︶︶︶︶︶︶︶︶︶︶︶︶`
admingp = ` ︿︿︿︿︿︿︿︿︿︿︿︿\n┊  ⚒️「 \`𝐀𝐔𝐓𝐎 | 𝐃𝐄𝐓𝐄𝐂𝐓\` 」⚒️ \n ︶︶︶︶︶︶︶︶︶︶︶︶\n*┊ 👤* 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 *»* @${m.messageStubParameters[0].split`@`[0]} \n*┊ 🔖* 𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃 *»* Se convrtió en administrador de este grupo\n ︶︶︶︶︶︶︶︶︶︶︶︶`
noadmingp =  ` ︿︿︿︿︿︿︿︿︿︿︿︿\n┊  ⚒️「 \`𝐀𝐔𝐓𝐎 | 𝐃𝐄𝐓𝐄𝐂𝐓\` 」⚒️ \n ︶︶︶︶︶︶︶︶︶︶︶︶\n*┊ 👤* 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 *»* @${m.messageStubParameters[0].split`@`[0]} \n*┊ 🔖* 𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃 *»* Dejó de ser administrador de este grupo\n ︶︶︶︶︶︶︶︶︶︶︶︶`

if (chat.detect && m.messageStubType == 21) {
await conn.sendMessage(m.chat, { text: nombre, mentions: [m.sender] }, { quoted: fkontak })   

} else if (chat.detect && m.messageStubType == 22) {
await conn.sendMessage(m.chat, { image: { url: pp }, caption: foto, mentions: [m.sender] }, { quoted: fkontak })

} else if (chat.detect && m.messageStubType == 23) {
await conn.sendMessage(m.chat, { text: newlink, mentions: [m.sender] }, { quoted: fkontak })    

} else if (chat.detect && m.messageStubType == 25) {
await conn.sendMessage(m.chat, { text: edit, mentions: [m.sender] }, { quoted: fkontak })  

} else if (chat.detect && m.messageStubType == 26) {
await conn.sendMessage(m.chat, { text: status, mentions: [m.sender] }, { quoted: fkontak })  

} else if (chat.detect && m.messageStubType == 29) {
await conn.sendMessage(m.chat, { text: admingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })  

return;
} if (chat.detect && m.messageStubType == 30) {
await conn.sendMessage(m.chat, { text: noadmingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })  

} else {
//console.log({ messageStubType: m.messageStubType,
//messageStubParameters: m.messageStubParameters,
//type: WAMessageStubType[m.messageStubType], 
//})
}}
