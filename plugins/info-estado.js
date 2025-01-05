import ws from 'ws'
let handler = async (m, { conn, usedPrefix, isRowner}) => {
let _muptime
let totalreg = Object.keys(global.db.data.users).length
let totalchats = Object.keys(global.db.data.chats).length
let pp = 'https://qu.ax/xzBMl.jpg'
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) 
const totalUsers = users.length;
let old = performance.now()
let neww = performance.now()
let speed = neww - old
const used = process.memoryUsage()
let yaemori = `ㅤㅤㅤ *\`ＭＩＺＵＫＩ | ＡＩ\`*\nㅤㅤㅤ✅ *\`ＥＳＴＡＤＯ\`* ✅\n\n`
yaemori += `*[👤]* *𝐂𝐑𝐄𝐀𝐃𝐎𝐑* *»* SpectrumOfc\n`
yaemori += `*[❄️]* *𝐏𝐑𝐄𝐅𝐈𝐉𝐎* *» [ ${usedPrefix} ]\n`
yaemori += `*[⚙️]* *𝐕𝐄𝐑𝐒𝐈Ó𝐍* *»* ${vs}\n`
yaemori += `*[🔐]* *𝐂𝐇𝐀𝐓𝐒 𝐏𝐑𝐈𝐕𝐀𝐃𝐎𝐒* *»* ${chats.length - groupsIn.length}\n`
yaemori += `*[📝]* *𝐓𝐎𝐓𝐀𝐋 𝐃𝐄 𝐂𝐇𝐀𝐓𝐒* *»* ${chats.length}\n`
yaemori += `*[👥]* *𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒* *»* ${totalreg}\n`
yaemori += `*[📩]* *𝐆𝐑𝐔𝐏𝐎𝐒* *»* ${groupsIn.length}\n`
yaemori += `*[💨]* *𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃* *»* ${(speed * 1000).toFixed(0) / 1000}\n`
yaemori += `*[📌]* *𝐒𝐔𝐁𝐁𝐎𝐓𝐒 𝐀𝐂𝐓𝐈𝐕𝐎𝐒* *»* ${totalUsers || '0'}`
await conn.sendFile(m.chat, pp, 'yaemori.jpg', yaemori, fkontak, null, rcanal)
}
handler.help = ['status']
handler.tags = ['info']
handler.command = ['estado', 'status', 'estate', 'state', 'stado', 'stats']
handler.register = true
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
