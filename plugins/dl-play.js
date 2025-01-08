/* 
- Play Botones By Angel-OFC 
- https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y
*/
import fetch from 'node-fetch';
import yts from 'yt-search';

let handler = async (m, { conn, args }) => {
  if (!args[0]) return conn.reply(m.chat, '*[🎧]* *»* *𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫, 𝐢𝐧𝐭𝐞𝐧𝐭𝐚 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐢𝐧𝐜𝐥𝐮𝐲𝐞𝐧𝐝𝐨 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐥𝐚 𝐜𝐚𝐧𝐜𝐢ó𝐧 𝐨 𝐯𝐢𝐝𝐞𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐛𝐮𝐬𝐜𝐚𝐫.*', m);

  await m.react('🕓');
  try {
    let res = await search(args.join(" "));
    let video = res[0];

    // Verificar que el video esté definido y tenga un videoId
    if (!video || !video.videoId) {
      return conn.reply(m.chat, '*[🎧]* *»* *No se pudo encontrar el video.*', m);
    }

    // Obtener la imagen con manejo de errores
    let img;
    try {
      img = await (await fetch(video.image)).buffer();
    } catch (e) {
      console.error("Error al obtener la imagen:", e);
      img = 'default_image_url'; // Usa una URL por defecto o alguna imagen de respaldo
    }

    let txt = `ㅤㅤㅤ *\`ＤＥＳＣＡＲＧＡＳ\`*\nㅤㅤㅤㅤ *🎧 \`ＰＬＡＹ\` 🎧*\n\n`;
    txt += `• *[🍿]* *𝐓Í𝐓𝐔𝐋𝐎* *»* ${video.title}\n\n`;
    txt += `• *[⌛]* *𝐃𝐔𝐑𝐀𝐂𝐈Ó𝐍* *»* ${secondString(video.duration.seconds)}\n\n`;
    txt += `• *[📆]* *𝐏𝐔𝐁𝐋𝐈𝐂𝐀𝐃𝐎* *»* ${eYear(video.ago)}\n\n`;
    txt += `• *[🚨]* *𝐂𝐀𝐍𝐀𝐋* *»* ${video.author.name || 'Desconocido'}\n\n`;
    txt += `• *[🔗]* *𝐔𝐑𝐋* *»* _https://youtu.be/${video.videoId}_\n\n`;

    await conn.sendMessage(m.chat, {
      image: img,
      caption: txt,
      footer: 'Selecciona una opción',
      buttons: [
        {
          buttonId: `.playtest https://youtu.be/${name}`,
          buttonText: {
            displayText: '🎵 ＡＵＤＩＯ',
          },
        },
        {
          buttonId: `.ytmp4 https://youtu.be/${video.videoId}`,
          buttonText: {
            displayText: '🎥 ＶＩＤＥＯ',
          },
        },
      ],
      viewOnce: true,
      headerType: 4,
    }, { quoted: m });

    await m.react('✅');
  } catch (e) {
    console.error(e);
    await m.react('✖️');
    conn.reply(m.chat, '*\`Error al buscar el video.\`*', m);
  }
};

handler.help = ['play *<texto>*'];
handler.tags = ['dl'];
handler.command = ['play'];

export default handler;

async function search(query, options = {}) {
  let search = await yts.search({ query, hl: "es", gl: "ES", ...options });
  return search.videos;
}

function secondString(seconds) {
  seconds = Number(seconds);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h > 0 ? h + 'h ' : ''}${m}m ${s}s`;
}

function eYear(txt) {
  if (txt.includes('year')) return txt.replace('year', 'año').replace('years', 'años');
  if (txt.includes('month')) return txt.replace('month', 'mes').replace('months', 'meses');
  if (txt.includes('day')) return txt.replace('day', 'día').replace('days', 'días');
  if (txt.includes('hour')) return txt.replace('hour', 'hora').replace('hours', 'horas');
  if (txt.includes('minute')) return txt.replace('minute', 'minuto').replace('minutes', 'minutos');
  return txt;
}
