var handler = async (m) => {

let tqto = `https://youtu.be/LW2Z8vVsGUg?si=0_cxVxCujjKCOfSd`

conn.reply(m.chat, tqto, m, fake, )

handler.before = async m => {

if (/^installsakura|instalarsakura$/i.test(m.text) ) {
let texto = `https://youtu.be/9-v4XwMTJYE?si=pUye1HemBkB809-A`

conn.reply(m.chat, texto,)
}

if (/^instalargata$/i.test(m.text) ) {
let contacto = `no hay`

m.reply(contacto, m.chat, { mentions: conn.parseMention(contacto)})}
}

}
handler.help = ['instalarbotd']
handler.tags = ['info']
handler.command = /^(installnaufra|instalarnaufra)$/i

handler.register = true

export default handler