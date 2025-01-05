import yts from 'yt-search';
import axios from 'axios';

const formatAudio = ['mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav'];
const formatVideo = ['360', '480', '720', '1080', '1440', '4k'];

const ddownr = {
  download: async (url, format) => {
    if (!formatAudio.includes(format) && !formatVideo.includes(format)) {
      throw new Error('Formato no soportado, revisa los formatos disponibles.');
    }

    const config = {
      method: 'GET',
      url: `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    };

    try {
      const response = await axios.request(config);

      if (response.data && response.data.success) {
        const { id, title, info } = response.data;
        const { image } = info;
        const downloadUrl = await ddownr.cekProgress(id);

        return {
          id: id,
          image: image,
          title: title,
          downloadUrl: downloadUrl,
        };
      } else {
        throw new Error('No se pudieron obtener los detalles del video.');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },
  cekProgress: async (id) => {
    const config = {
      method: 'GET',
      url: `https://p.oceansaver.in/ajax/progress.php?id=${id}`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    };

    try {
      while (true) {
        const response = await axios.request(config);

        if (response.data && response.data.success && response.data.progress === 1000) {
          return response.data.download_url;
        }
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },
};

const handler = async (m, { conn, text, usedPrefix, command }) => {
  const fkontak = {
    key: { participants: '0@s.whatsapp.net', remoteJid: 'status@broadcast', fromMe: false, id: 'Halo' },
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    participant: '0@s.whatsapp.net',
  };

  if (!text) throw `\`\`\`[ 🌴 ] Por favor ingresa un texto. Ejemplo:\n${usedPrefix + command} Did i tell u that i miss you\`\`\``;

  const isVideo = /vid|2|mp4|v$/.test(command);
  const search = await yts(text);

  // Verificar que `search` sea un objeto válido y que `search.all` sea un array
  if (!search || !Array.isArray(search.all) || search.all.length === 0) {
    throw "No se encontraron resultados para tu búsqueda.";
  }

  const videoInfo = search.all[0];

  // Verificación adicional para asegurarse de que `videoInfo` esté bien definido
  if (!videoInfo || !videoInfo.title || !videoInfo.url) {
    throw "Información del video no encontrada o incompleta.";
  }

  const body = `Info del video

título: ${videoInfo.title}
views: ${videoInfo.views}
duration: ${videoInfo.timestamp}
uploaded: ${videoInfo.ago}
url: ${videoInfo.url}

El video se está enviando, espérate un rato.`;

  let result;

  try {
    if (command === 'play' || command === 'play2' || command === 'playvid') {
      await conn.sendMessage(m.chat, {
        image: { url: videoInfo.thumbnail },
        caption: body,
        footer: `No pidas mamadas.`,
        buttons: [
          {
            buttonId: `.ytmp3 ${videoInfo.url}`,
            buttonText: { displayText: 'Audio' },
          },
          {
            buttonId: `.ytmp4 ${videoInfo.url}`,
            buttonText: { displayText: 'Video' },
          },
        ],
        viewOnce: true,
        headerType: 4,
      }, { quoted: fkontak });
      m.react('🍆');
    } else if (command === 'yta' || command === 'ytmp3') {
      m.react('🍆');
      let audio = await ddownr.download(videoInfo.url, 'mp3');
      if (!audio || !audio.downloadUrl) {
        throw "Error al obtener la URL de descarga de audio.";
      }
      let result = audio.downloadUrl;
      conn.sendMessage(m.chat, {
        audio: { url: result },
        mimetype: "audio/mpeg",
        caption: '',
      }, { quoted: fkontak });
    } else if (command === 'ytv' || command === 'ytmp4') {
      m.react('🍆');
      let api = await fetch(`https://api.giftedtech.my.id/api/download/dlmp4?apikey=gifted&url=${videoInfo.url}`);
      let video = await api.json();
      if (!video.result || !video.result.download_url) {
        throw "Error al obtener la URL de descarga de video.";
      }
      result = video.result.download_url;
      await conn.sendMessage(m.chat, {
        video: { url: result },
        mimetype: "video/mp4",
        caption: `Título: ${videoInfo.title}\nURL: ${videoInfo.url}`,
      }, { quoted: fkontak });
    } else {
      throw "Comando no reconocido.";
    }

  } catch (error) {
    throw "Ocurrió un error al procesar tu solicitud.";
  }
};

handler.command = handler.help = ['play', 'playvid', 'ytv', 'ytmp4', 'yta', 'play2', 'ytmp3'];
handler.tags = ['descargas'];
handler.diamond = 4;

export default handler;

const getVideoId = (url) => {
  const regex = /(?:v=|\/)([0-9A-Za-z_-]{11}).*/;
  const match = url.match(regex);
  if (match) {
    return match[1];
  }
  throw new Error("URL de YouTube no válida");
};
