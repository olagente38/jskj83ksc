// @Kenisawa

import axios from 'axios';
import yts from 'yt-search';
import _ from 'lodash';

let handler = async (m, { conn, text, usedPrefix, command }) => {

   if (!text) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, ${usedPrefix + command} Distancia - Kimberly Contreraxx`, m, rcanal)
  
    let results = await yts(text);
    let tes = results.all[0]
    
const baseUrl = 'https://cuka.rfivecode.com';
const cukaDownloader = {
  youtube: async (url, exct) => {
    const format = [ 'mp3', 'mp4' ];
    try {
      await m.react(rwait)
      conn.reply(m.chat, '🚀 Enviando el audio....', m, {
      contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
      title: packname,
      body: dev,
      previewType: 0, thumbnail: icons,
     sourceUrl: channel }}})
      const response = await fetch(`${baseUrl}/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({ url, format: exct })
      });

      const data = await response.json();
      return data;
      console.log('Data:' + data);
    } catch (error) {
      return { success: false, message: error.message };
      console.error('Error:', error);
    }
  },
  tiktok: async (url) => {
    try {
      await m.react(rwait)
      const response = await fetch(`${baseUrl}/tiktok/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({ url })
      });

      const data = await response.json();
      return data;
      console.log('Data:' + data);
    } catch (error) {
      return { success: false, message: error.message };
      console.error('Error:', error);
    }
  },
  spotify: async (url) => {
    try {
      await m.react(rwait)
      const response = await fetch(`${baseUrl}/spotify/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({ url })
      });

      const data = await response.json();
      return data;
      console.log('Data:' + data);
    } catch (error) {
      return { success: false, message: error.message };
      console.error('Error:', error);
    }
  }
}

let dataos = await cukaDownloader.youtube(tes.url, "mp3")
console.log(dataos)
let { title, thumbnail, quality, downloadUrl } = dataos

await conn.sendMessage(m.chat, { document: { url: dl.url }, fileName: title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })
await m.react(done)

}
handler.help = ['play', 'play2'];
handler.tags = ['descargas'];
handler.command = ['play', 'play2'];
handler.register = true;

export default handler;