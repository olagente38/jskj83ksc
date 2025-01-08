var handler = async m => 

conn.reply(m.chat, ` 
\`📢 𝐂𝐎𝐌𝐔𝐍𝐈𝐂𝐀𝐃𝐎 📢\`

*[🚨]* *»* El comando *".serbot"* está activo, pero se ha cambiado el nombre del comando.\n\n*[📝]* *»* Para saber cual es el comando correcto y convertirte en un sub bot, primero debes pedir permiso a mi creador.\n\n*[✅]* *»* Para obtener su contacto, escribe el comando ".owner"
 `, m, rcanal, )

handler.help = ['serbot']
handler.tags = ['serbot']
handler.command = ['serbot']

handler.cookies = 1
handler.register = true

export default handler
