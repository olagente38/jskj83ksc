import fetch from "node-fetch";
import yts from "yt-search";

const handler = async (m, {conn, command, args, text, usedPrefix}) => {

const isCommand1 = /^(play|play2)$/i.test(command)  
const isCommand2 = /^(vidio)$/i.test(command)  
const isCommand2 = /^(music)$/i.test(command)  

async function reportError(e) {
await m.reply(`🌻 Ocurrió un error.`)
console.log(e)
}

switch (true) {
case isCommand1:
if (!text) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, !${command} Distancia - Kimberly Contreraxx`,  m, rcanal, )

conn.reply(m.chat, global.wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})

try { 
await m.react(rwait)
const yt_play = await search(args.join(' '))
let txt = `*乂  Y O U T U B E  -  P L A Y  乂*\n\n`
    txt += `🚩 *Titulo:*\n${yt_play[0].title}\n\n`
    txt += `📅 *Publicado:*\n${yt_play[0].ago}\n\n`
    txt += `🕜 *Duración:*\n${secondString(yt_play[0].duration.seconds)}\n\n`
    txt += `📎 *Url:*\n${yt_play[0].url}`

let listSections = []
listSections.push({
title: `✎ SELECCIÓNA LO QUE NECESITES`, highlight_label: ``,
rows: [
{
header: "𓆩࿔ྀુ⃟🌹⃟𝘼𝙐𝘿𝙄𝙊 ╎ 🎵",
title: "",
description: `🎵 Audio.`,
id: `#supermusic ${text}`,
},
{
header: "𓆩࿔ྀુ⃟🌹⃟𝙑𝙄𝘿𝙀𝙊 ╎ 📽",
title: "",
description: `📽 Video.`,
id: `#supervideo ${text}`,
},
],
})
let menu = ''
await conn.sendListB(m.chat, menu, txt, ` 𓏲᭨ ̤̤֟✧⏤͟͞ू⃪٭ۣۜ ፝͜⁞Oᴘᴄɪᴏɴᴇs ᭄፝🍟𑜟꙲𒁑⁩`, yt_play[0].thumbnail, listSections, m)
await m.react(done)
} catch {
await m.react(error)
await conn.reply(m.chat, `✘ *Ocurrío un error*`, m, rcanal)}
break

case isCommand2:
if (!text) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, !${command} Distancia - Kimberly Contreraxx`,  m, rcanal);

try {
await m.react(rwait)
const randomReduction = Math.floor(Math.random() * 5) + 1;
let search = await yts(text);

let urls = search.all[0].url;

let res = await dl_vid(urls)
let video = res.data.mp4;
await conn.sendMessage(m.chat, { [type]: { url: video }, gifPlayback: false, mimetype: "video/mp4" }, { quoted: fkontak });
await m.react(done)

} catch {
await conn.reply(m.chat, `✘ *Ocurrío un error*`, m, rcanal)
await m.react(error)}
break

case isCommand3:
if (!text) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, !${command} Distancia - Kimberly Contreraxx`,  m, rcanal);

try {
await m.react(rwait)
const randomReduction = Math.floor(Math.random() * 5) + 1;
let search = await yts(text);

let urls = search.all[0].url;

let res = await dl_vid(urls)
let audio = res.data.mp3;
await conn.sendMessage(m.chat, { [type]: { url: audio }, gifPlayback: false, mimetype: "audio/mpeg" }, { quoted: fkontak });
await m.react(done)

} catch {
await conn.reply(m.chat, `✘ *Ocurrío un error*`, m, rcanal)
await m.react(error)
break
}}}

handler.help = ['play', 'play2', 'music', 'vidio'];
handler.tags = ['descargas'];
handler.command = ['play', 'play2', 'music', 'vidio']
handler.register = true;
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}

async function dl_vid(url) {
const response = await fetch('https://shinoa.us.kg/api/download/ytdl', {
method: 'POST',
headers: {
'accept': '*/*',
'api_key': 'free',
'Content-Type': 'application/json'
},
body: JSON.stringify({
text: url,
})});

if (!response.ok) {
throw new Error(`HTTP error! status: ${response.status}`);
}
const data = await response.json();
return data;
}