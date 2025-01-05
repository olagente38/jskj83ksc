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
    let api = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${text}`)
    let json = await api.json()
    
    // Verifica si el resultado es válido antes de continuar
    if (!json.result || !json.result.download_url) {
      return m.reply("❀ No se pudo obtener el archivo de audio. Intenta con otra URL.")
    }

    let { quality, title, download_url } = json.result

    await m.react('✅')

    // Verifica que la URL de descarga no esté vacía antes de enviar el mensaje
    if (download_url) {
      await conn.sendMessage(m.chat, { 
        audio: { url: download_url }, 
        fileName: `${title}.mp3`, 
        mimetype: 'audio/mp4' 
      }, { quoted: m })
    } else {
      m.reply("❀ La URL de descarga es inválida o no se pudo procesar.")
    }
  } catch (error) {
    console.error(error)
    m.reply("❀ Hubo un error al procesar la URL. Inténtalo nuevamente.")
  }
}

handler.help = ['ytmp3 *<link yt>*']
handler.tags = ['dl']
handler.command = ['ytmp3', 'yta', 'fgmp3']

export default handler
