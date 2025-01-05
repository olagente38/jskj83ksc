import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
   await m.react('🎉');

    let fkontak = { 
        "key": { 
            "participants": "0@s.whatsapp.net", 
            "remoteJid": "status@broadcast", 
            "fromMe": false, 
            "id": "Halo" 
        }, 
        "message": { 
            "contactMessage": { 
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
            }
        }, 
        "participant": "0@s.whatsapp.net" 
    };

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let edtr = `@${m.sender.split`@`[0]}`;
    let username = conn.getName(m.sender);

    // VCARD
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;  ૈANGELITO 🍃\nNICKNAME:👤 💗 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 | 𝟐 💗\nORG: 💗 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 | 𝟐 💗\nTITLE:soft\nitem1.TEL;waid=51970198114:+51 970 198 114\nitem1.X-ABLabel:📞 WhatsApp Owner\nitem2.URL:https://github.com/Angelito-OFC\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: agasistencia2@gmail.com\nitem3.X-ABLabel:💌 Correo soporte\nitem4.ADR:;;🇦🇷 Argentina;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel: Localización 🫧\nBDAY;value=date:🤍 09-12-2007\nEND:VCARD`;
    let vcard2 = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;  ૈANGELITO 🍃\nNICKNAME:👤 💗 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 | 𝟐 💗\nORG: 💗 𝐌𝐈𝐙𝐔𝐊𝐈 𝐀𝐈 | 𝟐 💗\nTITLE:soft\nitem1.TEL;waid=595982907261:+595 982 907261\nitem1.X-ABLabel:📞 WhatsApp Owner\nitem2.URL:https://github.com/Angelito-OFC\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: agasistencia2@gmail.com\nitem3.X-ABLabel:💌 Correo soporte\nitem4.ADR:;;🇦🇷 Argentina;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel: Localización 🫧\nBDAY;value=date:🤍 09-12-2007\nEND:VCARD`;

    const tag_own = await conn.sendMessage(m.chat, { 
        contacts: { 
            displayName: "Creador",
            contacts: [{ vcard }] 
        }
    }, { quoted: estilo });

    let txt = `*[👋]* *𝐇𝐨𝐥𝐚, 𝐭𝐞 𝐜𝐨𝐦𝐩𝐚𝐫𝐭𝐨 𝐥𝐨𝐬 𝐧ú𝐦𝐞𝐫𝐨𝐬 𝐨𝐟𝐢𝐜𝐢𝐚𝐥𝐞𝐬 𝐝𝐨𝐧𝐝𝐞 𝐞𝐬𝐭á 𝐚𝐜𝐭𝐢𝐯𝐨 𝐌𝐢𝐳𝐮𝐤𝐢 𝐀𝐢.*`;

    await conn.sendMessage(m.chat, {
        text: txt,
        footer: 'ᴍɪᴢᴜᴋɪ ᴀɪ',
        buttons: [
            {
                buttonId: ".menu",
                buttonText: {
                    displayText: '📚 𝐌𝐄𝐍Ú 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎 📚'
                },
                type: 1
            }
        ],
        viewOnce: true,
        headerType: 1
    }, { quoted: m });
};

handler.help = ['owner', 'creator'];
handler.tags = ['main'];
handler.command = /^(botsofc|BOTSOFC|BOTOFC|botofc)$/i;

export default handler;
