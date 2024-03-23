import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
        const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '𝐏𝐫𝐨𝐧𝐭𝐨 𝐒𝐞 𝐑𝐞𝐦𝐢𝐭𝐢𝐫𝐚́ 𝐄𝐥 𝐌𝐞𝐧𝐮!!',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋 ¡ᕼOᒪᗩ!', body: '⏳ 𝙴𝙽𝚅𝙸𝙰𝙽𝙳𝙾 𝙴𝙻 𝙼𝙴𝙽𝚄.', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐺');
    await conn.sendMessage(m.chat, { react: { text: '🌍', key: m.key } })
  let txt =`╔◊ •═════════════════• ◊╗
║🌎 \`𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑-𝑴𝑫\` 🌎
║•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
║𝘏𝘰𝘭𝘢 ${taguser}
║ ${date}
╚◊ •═════════════════• ◊╝

╔◊ •═════════════════• ◊╗
║✨ \`𝗧𝗨𝗦 𝗥𝗘𝗖𝗨𝗥𝗦𝗢𝗦\` ✨
║•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
║🚻 \`Nivel\` ➝ ${level}
║•┄┄┄┄┄┄┄┄┄┄┄•
║💎 \`Diamantes\` ➝ ${limit}
║•┄┄┄┄┄┄┄┄┄┄┄•
║💰 \`NZCoins\` ➝ ${money}
║•┄┄┄┄┄┄┄┄┄┄┄•
║🪙 \`Monedas\` ➝ ${joincount}
║•┄┄┄┄┄┄┄┄┄┄┄•
║⚔️ \`Rango\` ➝ ${role}
║•┄┄┄┄┄┄┄┄┄┄┄•
║⭐ \`Experiencia\` ➝ ${exp}
╚◊ •═════════════════• ◊╝

╔◊ •═════════════════• ◊╗
║        🗂️ \`INFORMACION\` 🗂️
╠◊ •═════════════════• ◊╝
> _#contactos_
> _#cuentasnz_
> _#creador_
> _#donar_
> _#tipobot_
> _#mirecurso_
> _#estado_
> _#infobot_
> _#gruponz_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║            🟢 \`ON Y OFF\` 🔴
╠◊ •═════════════════• ◊╝
> _#on *antiprivado*_ 
> _#on *restrict*_
> _#on *autoread*_
> _#on *antispam*_
> _#on *anticall*_
> _#on *welcome*_
> _#on *antilink2*_
> _#on *antilink*_
> _#on *detect*_
> _#on *autosticker*_
> _#on *antiviewonce*_
> _#on *antitoxic*_
> _#on *antiarabes*_
> _#on *modoadmin*_
> _#on *antidelete*_
> _#on *public*_
> _#on *pconly*_
> _#on *gconly*_
> •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> _#off *antiprivado*_ 
> _#off *restrict*_
> _#off *autoread*_
> _#off *antispam*_
> _#off *anticall*_
> _#off *welcome*_
> _#off *antilink2*_
> _#off *antilink*_
> _#off *detect*_
> _#off *autosticker*_
> _#off *antiviewonce*_
> _#off *antitoxic*_
> _#off *antiarabes*_
> _#off *modoadmin*_
> _#off *antidelete*_
> _#off *public*_
> _#off *pconly*_
> _#off *gconly*_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║        ⬇️ \`DESCARGADOR\` ⬇️
╠◊ •═════════════════• ◊╝
> _#instagram *url*_
> _#mediafire *url*_
> _#gitclone *url*_
> _#tiktok *url*_
> _#twitter *url*_
> _#fb *url*_
> _#ytshort *url*_
> _#apk *texto*_
> _#modapk *texto*_
> _#google *texto*_
> _#ytsearch *texto*_
> _#playstore *texto*_
> _#play *texto*_
> _#youtube *texto*_
> _#playlist *texto*_
> _#imagen *texto*_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║          ✨ \`NO COMMAND\` ✨
╠◊ •═════════════════• ◊╝
> _bot_
> _admins_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║       👥 \`CONFIG GROUP\` 👥
╠◊ •═════════════════• ◊╝
> _#add *numero*_
> _#kick *responder*_
> _#kick2 *responder*_
> _#grupo *abrir*_
> _#grupo *cerrar*_
> _#promote *@tag*_
> _#demote *@tag*_
> _#link_
> _#setname *texto*_
> _#setdesc *texto*_
> _#invocar *texto*_
> _#setwelcome *texto*_
> _#setbye *texto*_
> _#hidetag *texto*_
> _#hidetag *audio*_
> _#hidetag *video*_
> _#hidetag *imagen*_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║     ♻️ \`MENU ALEATORIO\` ♻️
╠◊ •═════════════════• ◊╝
> _#inspect *url grupal*_
> _#chatgpt *texto*_
> _#delchatgpt_
> _#dsowner_
> _#join *url grupal*_
> _#consejo_
> _#piropo_
> _#yoayudo *texto*_
> _#reporte *texto*_
> _#s *img*_
> _#sticker *img*_
> _#ocr *img*_
> _#hd *img*_
> _#acortar *url*_
> _#calc_
> _#del_
> _#whatmusic *audio*_
> _#traducir *texto*_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║   👑 \`MENU PARA OWNERS\` 👑
╠◊ •═════════════════• ◊╝
> _#setprefix *prefix*_
> _#resetprefix_
> _#autoadmin_
> _#addowner *@tag*_
> _#delownr *@tag*_
> _#block *@tag*_
> _#unblock *@tag*_
> _#banchat_
> _#unbanchat_
> _#resetuser *@tag*_
> _#banuser *@tag*_
> _#unbanuser *@tag*_
> _#dardiamantes *@tag*_
> _#añadirxp *@tag*_
> _#banuser *@tag*_
> _#restart_
> _#update_
╰•─────────────────•╯

╔◊ •═════════════════• ◊╗
║     🪙 \`RPG / ECONOMÍA\` 🪙
╠◊ •═════════════════• ◊╝
> _#cofre_
> _#balance_
> _#levelup_
> _#myns_
> _#perfil_
> _#work_
> _#minar_
> _#buy_
> _#buyall_
> _#verificar_
> _#robar *@tag*_
> _#transfer *@tag*_
> _#unreg_
╰•─────────────────•╯`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🌹 𝗡𝗔𝗨𝗙𝗥𝗔𝗭𝗔𝗣𝗣 - 𝗕𝗢𝗧 - 𝗠𝗗 💖', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🌏');
  } catch {
    conn.reply(m.chat, '💚 𝗙𝗮𝗹𝗹𝗼, 𝗘𝗹 𝗺𝗲𝗻𝘂 𝘁𝗶𝗲𝗻𝗲 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗽𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁𝗮𝗹𝗼 𝗮𝗹 𝘀𝘁𝗮𝗳𝗳.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|menú|COMANDOS|comandos)$/i;
handler.register = true
export default handler;
