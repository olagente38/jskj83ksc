let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false

  switch (type) {
    // Otras opciones...
    case 'antitrabas': 
    case 'antitraba': 
    case 'antilag':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiTraba = isEnable
      break

    case 'welcome':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break

    case 'antiPrivate':
    case 'antiprivado':
    case 'antipriv':
      isAll = true
      if (!isOwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      bot.antiPrivate = isEnable
      break

    case 'restrict':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break

    case 'autolevelup':
    case 'autonivel':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autolevelup = isEnable
      break

    case 'antibot':
    case 'antibots':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiBot = isEnable
      break

    case 'autoaceptar':
    case 'aceptarauto':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autoAceptar = isEnable
      break

    case 'autorechazar':
    case 'rechazarauto':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autoRechazar = isEnable
      break

    // Nuevas opciones añadidas:

    case 'pconly': 
    case 'privateonly': 
    case 'soloprivados':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    
    case 'gconly': 
    case 'grouponly': 
    case 'sologrupos':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break

    // Nuevo caso agregado:

    case 'anticommand': 
    case 'antiarabe': 
    case 'antiarabe2': 
    case 'AntiCommand':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      bot.anticommand = isEnable
      break

    // Otras opciones de configuración...

    default:
      if (!/[01]/.test(command)) return conn.reply(m.chat, `
 ︿︿︿︿︿︿︿︿︿︿︿︿
┊  「 \`𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐄𝐒 | 𝐎𝐖𝐍𝐄𝐑\` 」 
 ︶︶︶︶︶︶︶︶︶︶︶︶
*┊»* ${usedPrefix + command} antispam
*┊»* ${usedPrefix + command} antiprivado
*┊»* ${usedPrefix + command} status
*┊»* ${usedPrefix + command} autoread
*┊»* ${usedPrefix + command} restrict
 ︶︶︶︶︶︶︶︶︶︶︶︶

 ︿︿︿︿︿︿︿︿︿︿︿︿
┊  「 \`𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐄𝐒 | 𝐆𝐑𝐔𝐏𝐎𝐒\` 」 
 ︶︶︶︶︶︶︶︶︶︶︶︶
*┊»* ${usedPrefix + command} welcome 
*┊»* ${usedPrefix + command} autoaceptar
*┊»* ${usedPrefix + command} autorechazar
*┊»* ${usedPrefix + command} autoresponder
*┊»* ${usedPrefix + command} autolevelup
*┊»* ${usedPrefix + command} antibot
*┊»* ${usedPrefix + command} subbots
*┊»* ${usedPrefix + command} reaccion
*┊»* ${usedPrefix + command} simi
*┊»* ${usedPrefix + command} audios
*┊»* ${usedPrefix + command} antiver
*┊»* ${usedPrefix + command} detect 
*┊»* ${usedPrefix + command} delete
*┊»* ${usedPrefix + command} nsfw 
*┊»* ${usedPrefix + command} modoadmin 
*┊»* ${usedPrefix + command} antifake
*┊»* ${usedPrefix + command} antilink
 ︶︶︶︶︶︶︶︶︶︶︶︶`, m, rcanal)
      throw false
  }

  await conn.sendMessage(m.chat, { 
    text: `` +
          `*» 𝗢𝗣𝗖𝗜𝗢𝗡 |* ${type.toUpperCase()}\n` +
          `*» 𝗘𝗦𝗧𝗔𝗗𝗢 |* ${isEnable ? 'ON' : 'OFF'}\n` +
          `*» 𝗣𝗔𝗥𝗔 |* ${isAll ? 'ESTE BOT' : isUser ? '' : 'ESTE CHAT'}`, 
    footer: dev, 
    buttons: [
      { 
        buttonId: isEnable ? `.off ${type}` : `.on ${type}`, 
        buttonText: { displayText: isEnable ? 'OFF ☁️' : 'ON ☁️' } 
      },
      { 
        buttonId: ".menu", 
        buttonText: { displayText: 'MENU ☁️' } 
      }
    ],
    viewOnce: true,
    headerType: 1
  }, { quoted: estilo });
}

handler.help = ['enable *<opción>*', 'disable *<opción>*', 'on *<opción>*', 'off *<opción>*', '1', '0']
handler.tags = ['nable']
handler.command = ['enable', 'disable', 'on', 'off', '1', '0']

export default handler
                        
