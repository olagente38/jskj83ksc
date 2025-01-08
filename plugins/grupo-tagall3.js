/* 
- tagall By Angel-OFC  
- etiqueta en un grupo a todos
- https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y
*/
const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const customEmoji = global.db.data.chats[m.chat]?.customEmoji || '🤍';
  m.react(customEmoji);

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }

  const pesan = args.join` `;
  const oi = `*» INFO :* ${pesan}`;
  let teks = `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄\n𝐋𝐀 𝐂𝐎𝐌𝐔𝐍𝐈𝐃𝐀𝐃\n𝐃𝐄𝐌𝐎𝐍𝐒\n\n*╭ ┄ ┄* *꒰* \`𝐂𝐎𝐌𝐔𝐍𝐈𝐃𝐀𝐃 𝐃𝐄𝐌𝐎𝐍𝐒\` *꒱* *┄ ┄*\n`;
  for (const mem of participants) {
    teks += `*┊*👑 @${mem.id.split('@')[0]}\n`;
  }
  teks += `*╰⸼ ┄ ┄*  *꒰* *ᴄᴏᴍᴜɴɪᴅᴀᴅ ᴅᴇᴍᴏɴꜱ* *꒱*  *┄  ┄*`;

  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};

handler.help = ['demonsinvocar *<mensaje opcional>*'];
handler.tags = ['groupdemons'];
handler.command = /^(comunidaddemons|INVOCARCOMUNIDAD|COMUNIDADDEMONS|invocarcomunidad|demons)$/i;
handler.admin = true;
handler.group = true;

export default handler;
