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
  let teks = `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄\n𝐈𝐍𝐓𝐄𝐆𝐑𝐀𝐍𝐓𝐄𝐒 𝐃𝐄𝐋 𝐂𝐋𝐀𝐍\n\n*╭ ┄ ┄* *꒰* \`𝐂𝐈𝐁𝐄𝐑 𝐁𝐀𝐍𝐃𝐎 𝟐𝐘𝐊\` *꒱* *┄ ┄*\n`;
  for (const mem of participants) {
    teks += `*┊*👑 @${mem.id.split('@')[0]}\n`;
  }
  teks += `*╰⸼ ┄ ┄ ┄*  *꒰* *ᴄɪʙᴇʀ ʙᴀɴᴅᴏ 2ʏᴋ* *꒱*  *┄  ┄*`;

  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};

handler.help = ['invocary2k *<mensaje opcional>*'];
handler.tags = ['groupy2k'];
handler.command = /^(tagall2yk|invocar2yk|clan2YK|clan2Yk|invocar2YK)$/i;
handler.admin = true;
handler.group = true;

export default handler;
