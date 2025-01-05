import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;

  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://qu.ax/QGAVS.jpg');
  let img = await (await fetch(`${pp}`)).buffer();
  let chat = global.db.data.chats[m.chat];
  
  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let user = global.db.data.users[who];

  let userName = user ? user.name : await conn.getName(who);

  if (chat.welcome && m.messageStubType == 27) {
    let bienvenida = ` ︿︿︿︿︿︿︿︿︿︿︿︿\n┊  👋🏻「 \`𝐖𝐄𝐋𝐂𝐎𝐌𝐄\` 」👋🏻 \n ︶︶︶︶︶︶︶︶︶︶︶︶\n*┊ 👤* 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 *»* @${m.messageStubParameters[0].split`@`[0]} \n*┊ 📝* 𝐆𝐑𝐔𝐏𝐎 *»* ${groupMetadata.subject}\n ︶︶︶︶︶︶︶︶︶︶︶︶`;

    // Si 'channel' no es necesario, simplemente elimina esta parte
    await conn.sendMini(m.chat, packname, dev, bienvenida, img, img, '', estilo);
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = ` ︿︿︿︿︿︿︿︿︿︿︿︿\n┊  👋🏻「 \`𝐁𝐘𝐄\` 」👋🏻 \n ︶︶︶︶︶︶︶︶︶︶︶︶\n*┊ 👤* 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 *»* @${m.messageStubParameters[0].split`@`[0]} \n*┊ 📝* 𝐆𝐑𝐔𝐏𝐎 *»* ${groupMetadata.subject}\n ︶︶︶︶︶︶︶︶︶︶︶︶`;
    
    // Si 'channel' no es necesario, simplemente elimina esta parte
    await conn.sendMini(m.chat, packname, dev, bye, img, img, '', estilo);
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = ` ︿︿︿︿︿︿︿︿︿︿︿︿\n┊  👋🏻「 \`𝐁𝐘𝐄\` 」👋🏻 \n ︶︶︶︶︶︶︶︶︶︶︶︶\n*┊ 👤* 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 *»* @${m.messageStubParameters[0].split`@`[0]} \n*┊ 📝* 𝐆𝐑𝐔𝐏𝐎 *»* ${groupMetadata.subject}\n ︶︶︶︶︶︶︶︶︶︶︶︶`;

    // Si 'channel' no es necesario, simplemente elimina esta parte
    await conn.sendMini(m.chat, packname, dev, kick, img, img, '', estilo);
  }
}
