import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
  if (!text) {
    return m.reply("❀ Por favor, ingresa una URL válida de YouTube.")
  }
  await m.react('🕓')

  let ytUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
  if (!ytUrlRegex.test(text)) {
    return m.reply("❀ La URL ingresada no es válida. Asegúrate de que sea un enlace de YouTube.")
  }

  try {
    let api = await fetch(`https://api.giftedtech.my.id/api/download/dlmp3?apikey=gifted&url=${text}`)
    const contentType = api.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const textResponse = await api.text(); // Obtener el cuerpo como texto
      throw new Error(`La respuesta de la API no es un JSON válido. Contenido recibido: ${textResponse}`);
    }

    let json = await api.json();
    if (!json.result) {
      throw new Error('La API no devolvió un resultado válido.');
    }

    let { quality, title, download_url } = json.result;

    await m.react('✅')
    await conn.sendMessage(m.chat, { 
      audio: { url: download_url }, 
      fileName: `${title}.mp3`, 
      mimetype: 'audio/mp4' 
    }, { quoted: m })
  } catch (error) {
    console.error(error)
    m.reply("❀ Error al procesar la URL. La API está fuera de servicio o no válida. Inténtalo más tarde.");
  }
}

handler.help = ['ytmp3 *<link yt>*']
handler.tags = ['dl']
handler.command = ['ytmp3', 'yta', 'fgmp3']

export default handler;
