import { execSync } from 'child_process'

var handler = async (m, { conn, text }) => {
await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('Already up to date.')) messager = '> ⓘ *No hay actualizaciones aun...*'
if (messager.includes('Updating')) messager = '> ✅️ *ACTUALIZACION EXITOSA* ✅\n\n' + stdout.toString()
conn.reply(m.chat, messager,)
} catch { 
try {
const status = execSync('git status --porcelain')
if (status.length > 0) {
const conflictedFiles = status.toString().split('\n').filter(line => line.trim() !== '').map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('sessions/') || line.includes('npm-debug.log')) {
return null
}
return '*→ ' + line.slice(3) + '*'}).filter(Boolean)
if (conflictedFiles.length > 0) {
const errorMessage = `> ✅ *Se han encontrado archivos en conflicto, para esto hay que volver a instalar el bot.*\n\n> \`ARCHIVOS EN CONFLICTO:\`\n\n${conflictedFiles.join('\n')}`
await conn.reply(m.chat, errorMessage,)
}
}
} catch (error) {
console.error(error)
let errorMessage2 = '> ⓘ *Ocurrio un error inesperado, vuelva a intentarlo.*'
if (error.message) {
errorMessage2 += '\n*- Mensaje de error:* ' + error.message;
}
await conn.reply(m.chat, errorMessage2,)
}
}

}
handler.help = ['update', 'actualizar']
handler.tags = ['own']
handler.command = /^(update|actualizar|gitpull)$/i
handler.rowner = true

export default handler

/*import {execSync} from "child_process"
let handler = async (m, {conn, text}) => {
    await conn.sendMessage(m.chat, { react: { text: '🏷', key: m.key } })
  await m.reply(`🐱 𝐄 𝐒 𝐏 𝐄 𝐑 𝐀 🚀`)
  try {
    if (global.conn.user.jid == conn.user.jid) {
      let stdout = execSync("git pull" + (m.fromMe && text ? " " + text : ""))
      await await await conn.reply(m.chat, stdout.toString(), m)
    }
  } catch {
    var update = execSync("git remote set-url origin https://github.com/diegojadibot/SakuraBotLite-MD.git && git pull")
    await await await m.reply(update.toString())
  }
};
handler.help = ["update"]
handler.tags = ["owner"]
handler.command = /^update|actualizar$/i
handler.rowner = true
export default handler*/
