export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('bots')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
if (m.chat === '120363310433406751@newsletter') return !0
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`《✧》Hola @${m.sender.split`@`[0]}, BUENAS TARDES. DESACTIVARE EL BOT EN ESTE NÚMERO +51 964 661 950 YA QUE ACTIVARE LA NUEVA VERSIÓN PARA TESTEO Y PARA EVITAR SPAM, LE PONDRE EL ANTIPRIVADO, ASI QUE EVITEN ESCRIBIRLE Y QUE SEAN BLOQUEADOS. (TESTEANDO BOTONES)\n\nhttps://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
