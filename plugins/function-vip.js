import { youtubedl, youtubeSearch, youtubedlv2, tiktokdl } from '@bochilteam/scraper'  
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
import { facebook } from "@xct007/frieren-scraper"
import { googleImage, mediafiredl } from '@bochilteam/scraper'
import fetch from "node-fetch"
import yts from "yt-search"
import ytdl from 'ytdl-core'
import { pipeline } from 'stream'
import { promisify } from 'util'
import os from 'os'
import axios from 'axios'
import Spotify from "spotifydl-x"

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality
const isCommand1 = /^(naufraimagen|naufrazappgg?)$/i.test(command)
const isCommand2 = /^(playvip|playvip2)$/i.test(command)
//const isCommand3 = /^(play2)$/i.test(command)
const isCommand4 = /^(ytvip(a|mp3)?)$/i.test(command)
const isCommand5 = /^(ytmp3docvip|ytadocvip)$/i.test(command)
const isCommand6 = /^(ytvip(v|mp4)?)$/i.test(command)
const isCommand7 = /^(|playvip4|playvip3)$/i.test(command)
const isCommand8 = /^(facebookvip|fbvip)$/i.test(command)
const isCommand9 = /^(mediafivip|mediafirevip)$/i.test(command)
const isCommand10 = /^(ytmaxvip)$/i.test(command)
const isCommand11 = /^(tiktokvip)$/i.test(command)
const isCommand12 = /^(ytmaxdocvip)$/i.test(command)
const isCommand13 = /^(creafoto|vipdalle)$/i.test(command)
const isCommand14 = /^(opennaufra|fotovip|fotovip2)$/i.test(command)
const isCommand15 = /^(spotifyvip|musicvip)$/i.test(command)
const isCommand16 = /^(spot(ify)?searchvip)$/i.test(command)
const isCommand17 = /^(i(nstavip)?gvip(ramvip)|igimagevip)$/i.test(command)
const isCommand18 = /^(twittervip)$/i.test(command)
const isCommand19 = /^(gitclonevip|clonarepovip)$/i.test(command)

async function reportError(e) {
let errb = await m.reply('> ⚠️ Error, reporte este comando con: \`#reporte\`')
await console.log(`> ⚠️ Error, reporte este comando con: \`#reporte\``)
await console.log(e)
let faultkey = await conn.sendMessage(m.chat, { react: { text: fault, key: errb.key }})
await m.react(notsent)
//setTimeout(() => { faultkey, m.react(notsent) }, 1000)
}

switch (true) {     
case isCommand1:
if (!text) return m.reply(`> \`ⓘ Ingrese un texto para buscarlo, por ejemplo:\`\n> *${usedPrefix + command} Naturaleza*`)
const prohibited = ['caca', 'polla', 'porno', 'porn', 'gore', 'cum', 'semen', 'puta', 'puto', 'culo', 'putita', 'putito','pussy', 'hentai', 'pene', 'coño', 'asesinato', 'zoofilia', 'mia khalifa', 'desnudo', 'desnuda', 'cuca', 'chocha', 'muertos', 'pornhub', 'xnxx', 'xvideos', 'teta', 'vagina', 'marsha may', 'misha cross', 'sexmex', 'furry', 'furro', 'furra', 'xxx', 'rule34', 'panocha', 'pedofilia', 'necrofilia', 'pinga', 'horny', 'ass', 'nude', 'popo', 'nsfw', 'femdom', 'futanari', 'erofeet', 'sexo', 'sex', 'yuri', 'ero', 'ecchi', 'blowjob', 'anal', 'ahegao', 'pija', 'verga', 'trasero', 'violation', 'violacion', 'bdsm', 'cachonda', '+18', 'cp', 'mia marin', 'lana rhoades', 'cepesito', 'hot']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return m.reply('> ⚠️ Esas cosas no se admiten en este comando.')      
try{
    
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `> Aqui tienes tu imagen:\n> ${text}`, m)
} catch (e) {
reportError(e)
} 
break
    
case isCommand2:
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality   
if (!text) return m.reply(`> ✦ Ingrese un texto para descargarlo, por ejemplo:\n> *${usedPrefix + command} Rei do brazil*`)
try {
const yt_play = await search(args.join(" "))
let additionalText = ''
if (command === 'playvip') { 
additionalText = '🎧 𝐀𝐔𝐃𝐈𝐎 𝐕𝐈𝐏 🎧'
} else if (command === 'playvip2') {
additionalText = '🎬 𝐕𝐈𝐃𝐄𝐎 𝐕𝐈𝐏 🎬'}
let caption = `*◜⋯ ⋯ ⋯ Y O U T U B E ⋯ ⋯ ⋯◞*
╭◊══════════════════◊
╏ 🎬 \`𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗩𝗜𝗣\` 🎧
╰◊══════════════════◊

> ✦ 𝗧𝗜𝗧𝗨𝗟𝗢/𝗡𝗢𝗠𝗕𝗥𝗘 ✦
> • ${yt_play[0].title}

> ✦ 𝗧𝗜𝗘𝗠𝗣𝗢 𝗗𝗘 𝗗𝗨𝗥𝗔𝗖𝗜𝗢𝗡 ✦
> • ${secondString(yt_play[0].duration.seconds)}

> ✦ 𝗩𝗜𝗦𝗧𝗔𝗦 𝗧𝗢𝗧𝗔𝗟𝗘𝗦 ✦
> • ${MilesNumber(yt_play[0].views)}

> ✦ 𝗘𝗡𝗟𝗔𝗖𝗘/𝗟𝗜𝗡𝗞 ✦
${yt_play[0].url}

> ✦ 𝗙𝗢𝗥𝗠𝗔𝗧𝗢 ✦
${additionalText}`  
let message = await conn.sendMessage(m.chat, { text: caption, contextInfo: { externalAdReply: { title: wm, body: wait2.replace(/\*/g, ''), thumbnailUrl: yt_play[0].thumbnail, sourceUrl: md, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}})
await m.react(sending)
await message.react(waitemot)
setTimeout(() => { message.react(waitemot2) }, 1000)
//if (apiResponse.status !== 200) { 
//setTimeout(() => { message.react(alert) }, 2000)}
if (command == 'play') {	
try {
let q = '128kbps'
let v = yt_play[0].url
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: ttl,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
await m.react(sent)    
await message.react(correct)
} catch {
try {
const dataRE = await fetch(`https://api.akuari.my.id/downloader/youtube?link=${yt_play[0].url}`)
const dataRET = await dataRE.json()
await conn.sendMessage(m.chat, { audio: { url: dataRET.mp3[1].url }, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: yt_play[0].title,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
await m.react(sent)    
await message.react(correct)
} catch {
try {
let humanLol = await fetch(`https://api.lolhuman.xyz/api/ytplay?apikey=${lolkeysapi}&query=${yt_play[0].title}`)
let humanRET = await humanLol.json()
await conn.sendMessage(m.chat, { audio: { url: humanRET.result.audio.link }, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: yt_play[0].title,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })       
await m.react(sent)    
await message.react(correct)
} catch {     
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link}, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: n,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
await m.react(sent)    
await message.react(correct)
} catch {   
try {
let searchh = await yts(yt_play[0].url)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
await conn.sendMessage(m.chat, { audio: { url: ress.url }, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: __res[0].title,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
await m.react(sent)    
await message.react(correct)
//conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })  
} catch {
reportError(e)
}}}}}
}  
if (command == 'playvip2') {
try {
let videoURL = await conn.getFile(`https://api.cafirexos.com/api/v1/ytmp4?url=${yt_play[0].url}`)
await conn.sendMessage(m.chat, { video: videoURL.data, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `${wm}`, thumbnailUrl: yt_play[0].thumbnail }, { quoted: m })
await m.react(sent)
await message.react(correct)  
} catch (e) {
reportError(e)
}    
}} catch (e) {
reportError(e)
}
break
            
case isCommand4:
if (!args[0]) return m.reply(`> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> *${usedPrefix + command} https://youtu.be/ejemplo*`)
await conn.reply(m.chat, '> ✅ 𝙎𝙚 𝙚𝙨𝙩𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙚𝙡 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙞𝙣𝙪𝙩𝙤.', m)
try {
let q = '128kbps'
let v = text
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const ttl = await yt.title    
let audioBuffer = await getBuffer(`https://api.cafirexos.com/api/v1/ytmp3?url=${text.trim()}`)
await conn.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mpeg', fileName: ttl + `.mp3`}, {quoted: m})
} catch (e) {
reportError(e)
}       
break
        
case isCommand5:
if (!args[0]) return m.reply(`> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙮𝙤𝙪𝙩𝙪𝙗𝙚 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: *${usedPrefix + command} https://youtu.be/ejemplo*`)
await conn.reply(m.chat, '> ✅ 𝙎𝙚 𝙚𝙨𝙩𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙚𝙡 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤...', m)
try {
let streamPipeline = promisify(pipeline)
let videoUrl = text
let videoInfo = await ytdl.getInfo(videoUrl)
let { videoDetails } = videoInfo
let { title, thumbnails, lengthSeconds, viewCount, uploadDate } = videoDetails
let thumbnail = thumbnails[0].url
let audioStream = ytdl(videoUrl, { filter: 'audioonly', quality: 'highestaudio', })
let tmpDir = os.tmpdir()
let writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`)
await streamPipeline(audioStream, writableStream)
let audioD = `${tmpDir}/${title}.mp3`
let info = `╭•────────────────•─• • • ◊\n│👑 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿 / 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 👑\n╰•────────────────•─• • • ◊\n\n> ❒ 𝙉𝙊𝙈𝘽𝙍𝙀:\n${title}\n•────────────────────•\n> ❒ 𝘿𝙐𝙍𝘼𝘾𝙄𝙊𝙉:\n${lengthSeconds}s\n•────────────────────•\n> ❒ 𝙑𝙄𝙎𝙏𝘼𝙎 𝙏𝙊𝙏𝘼𝙇𝙀𝙎:\n${viewCount}\n•────────────────────•\n> ❒ 𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘿𝙊 𝙀𝙉:\n${uploadDate}`
await conn.sendMessage(m.chat, { document: { url: audioD }, mimetype: 'audio/mpeg', fileName: title, caption: null }, { quoted: m })
} catch (e) {
reportError(e)
}         
break
        
case isCommand6:
if (!args[0]) return m.reply(`> • 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> *${usedPrefix + command} https://youtu.be/ejemplo*`)
await conn.reply('> • 𝙎𝙚 𝙚𝙨𝙩𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙚𝙡 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤.', m)
try {
const yt_play = await search(args.join(" "))
let q = '128kbps'
let v = text.trim()
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const ttl = await yt.title    
let videoURL = await conn.getFile(`https://api.cafirexos.com/api/v1/ytmp4?url=${v}`)
await conn.sendMessage(m.chat, { video: videoURL.data, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `${wm}`, thumbnailUrl: yt_play[0].thumbnail }, { quoted: m })
} catch (e) {
reportError(e)}     
break

case isCommand7:
if (!args[0]) return m.reply(`> • 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> *${usedPrefix + command} https://youtu.be/ejemplo*`)
await conn.reply(m.chat, '> • 𝙎𝙚 𝙚𝙨𝙩𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙚𝙡 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤.', m)
try { 
const streamPipeline = promisify(pipeline)
const videoUrl = text
const videoInfo = await ytdl.getInfo(videoUrl)
const { videoDetails } = videoInfo
const { title, thumbnails, lengthSeconds, viewCount, uploadDate } = videoDetails
const thumbnail = thumbnails[0].url
const videoStream = ytdl(videoUrl, { filter: 'audioandvideo', quality: 'lowest', })
//const writableStream = fs.createWriteStream(`tmp/${title}.mp4`)
//await streamPipeline(videoStream, writableStream)  
//await conn.sendMessage(m.chat, { document: { url: `tmp/${title}.mp4` }, mimetype: 'video/mp4', fileName: title, caption: null }, { quoted: m })
async function crearWritableStreamAsync() {
const filePath = `tmp/${title}.mp4`
const writableStream = fs.createWriteStream(filePath)
return writableStream
}
async function transferirDatos(videoStream, writableStream) {
await streamPipeline(videoStream, writableStream)
}
async function fileVideo() {
const writableStream = await crearWritableStreamAsync(title)
await transferirDatos(videoStream, writableStream)
}
let message
async function enviarMensaje() {
message = await conn.sendMessage(m.chat, { document: { url: `tmp/${title}.mp4` }, mimetype: 'video/mp4', fileName: title, caption: null }, { quoted: m })
}
async function videoResult(m) {
await fileVideo()
await enviarMensaje()
await m.react(sent)
await message.react(correct)
}
videoResult(m)
} catch (e) {
reportError(e)
}
break
        
case isCommand8:
if (!text) return m.reply(`> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> *${usedPrefix}${command}* https://fb.watch/kAOXy3wf2L/?mibextid=Nif5oz`)
if (!args[0].match(/www.facebook.com|fb.watch|web.facebook.com|business.facebook.com|video.fb.com/g)) throw '> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙫𝙖𝙡𝙞𝙙𝙤.';
await m.reply('♻️ 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠...)
let messageType = checkMessageType(args[0])
let message = ''
switch (messageType) {
case "groups":
message = '> ✅ 𝙑𝙞𝙙𝙚𝙤 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤𝙨 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤.'
break
case "reel":
message = '> ✅ 𝙑𝙞𝙙𝙚𝙤 𝙙𝙚 𝙧𝙚𝙚𝙡𝙨 𝙙𝙚 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤.'
break
case "stories":
message = '> ✅ 𝙑𝙞𝙙𝙚𝙤 𝙨𝙚 𝙨𝙩𝙤𝙧𝙞𝙚𝙨 𝙙𝙚 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤.'
break
case "posts":
message = '> ✅ 𝙑𝙞𝙙𝙚𝙤 𝙙𝙚 𝙥𝙤𝙨𝙩𝙨 𝙙𝙚 𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤.'
break
default:
message = ''
break
}  
try {
let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`)
let _json = await res.json()
vid = _json.result[0]
if (vid == '' || !vid || vid == null) vid = _json.result[1]
await conn.sendFile(m.chat, vid, 'error.mp4', `*${message}*`, m)
} catch (error1) {
try {
const d2ata = await facebook.v1(args[0])
let r2es = ''
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`
}
await conn.sendFile(m.chat, r2es, 'error.mp4', `*${message}*`, m)
} catch (error2) {
try {
var get = await fetch(`https://api.botcahx.live/api/dowloader/fbdown?url=${args[0]}&apikey=QaepQXxR`)
var js = await get.json()
await conn.sendFile(m.chat, js.result.HD, 'error.mp4', `*${message}*`, m)
} catch (e) {
reportError(e)} 
}}    
break
        
case isCommand9:
if (!args[0]) return m.reply(`> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙈𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> *${usedPrefix + command} https://www.mediafire.com/file/04kaaqx9oe3tb8b/DOOM_v13_CLONE%255BCOM.FM%255D.apk/file*`)
try {  
let res = await mediafiredl(args[0])  
let res2 = await mediafireDl(args[0])  
let { filename:name, ext:mime, url, filesizeH:peso } = res
let { date } = res2   
let caption = `
> ❒ 𝙉𝙊𝙈𝘽𝙍𝙀 / 𝙏𝙄𝙏𝙐𝙇𝙊:
${name}

> ❒ 𝙐𝙇𝙏𝙄𝙈𝘼 𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝘾𝙄𝙊𝙉:
${date}

> ❒ 𝙋𝙀𝙎𝙊 𝙏𝙊𝙏𝘼𝙇:
${peso}

> ❒ 𝙈𝙄𝙈𝙀:
${mime}

> ⓘ 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙚𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.`.trim()
await m.reply(caption)
//await conn.sendFile(m.chat, link, name, '', m, null, { mimetype: mime, asDocument: true })  
await conn.sendFile(m.chat, url, name, '', m, null, { mimetype: mime, asDocument: true })
} catch (e) {
await m.reply('> ❒ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙧𝙚𝙥𝙤𝙧𝙩𝙚 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙘𝙤𝙣: \`#reporte\`')
console.log(`> • Ingrese un enlace valido de mediafire.`)
console.log(e)}    
async function mediafireDl(url) {
const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/','')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`)
const $ = cheerio.load(res.data)
const link = $('#downloadButton').attr('href')
const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','')
const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text()
const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','')
let mime = ''
let rese = await axios.head(link)
mime = rese.headers['content-type']
return { name, size, date, mime, link }
}
break 
        
case isCommand10:
if (!args[0]) return m.reply(`> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> *${usedPrefix + command} https://youtu.be/ejemplo*`)
await conn.reply(m.chat, '> ✅ 𝙎𝙚 𝙚𝙨𝙩𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙚𝙡 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤.', m)
try { 
const streamPipeline = promisify(pipeline)
const videoUrl = text
const videoInfo = await ytdl.getInfo(videoUrl)
const { videoDetails } = videoInfo
const { title, thumbnails, lengthSeconds, viewCount, uploadDate } = videoDetails
const thumbnail = thumbnails[0].url
const videoStream = ytdl(videoUrl, { filter: 'audioandvideo', quality: 'highest', })
async function crearWritableStreamAsync() {
const filePath = `tmp/${title}.mp4`
const writableStream = fs.createWriteStream(filePath)
return writableStream
}
async function transferirDatos(videoStream, writableStream) {
await streamPipeline(videoStream, writableStream)
}
async function fileVideo() {
const writableStream = await crearWritableStreamAsync(title)
await transferirDatos(videoStream, writableStream)
}
let message
async function enviarMensaje() {
message = await conn.sendMessage(m.chat, { video: { url: `tmp/${title}.mp4` }, mimetype: 'video/mp4', fileName: title, caption: null }, { quoted: m })
}
async function videoResult(m) {
await fileVideo()
await enviarMensaje()
await m.react(sent)
await message.react(correct)
}
try {
videoResult(m)
} catch (e) {
reportError(e)
}} catch (e) {
reportError(e)
}
break

//codigo adaptado por https://github.com/elrebelde21
case isCommand11:
if (!text) return conn.reply(m.chat, `> ⓘ Ingrese un enlace de TikTok valido por favor, por ejemplo:\n> *${usedPrefix + command} https://vm.tiktok.com/ZM2e66NBM/?t=1*`, m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `> ⓘ *Ocurrio un error inesperado, por favor intente de nuevo.*`, m)  
try {
const { author: { nickname }, video, description, audio } = await tiktokdl(args[0])
.catch(async _ => await tiktokdlv2(args[0]))
.catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
await conn.reply(m.chat, `> ✅ *Descargando el vídeo de tiktok.*`, m)    
await conn.sendFile(m.chat, url, 'tiktok.mp4', `
*${nickname}*`.trim(), m)
await conn.sendMessage(m.chat, { audio: { url: url }, fileName: 'tiktok.mp3', mimetype: 'audio/mp4', ptt: false }, { quoted: m })     
} catch (e) {
reportError(e)
}         
break
   
case isCommand12:
if (!args[0]) return m.reply(`> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> *${usedPrefix + command} https://youtu.be/ejemplo*`)
await conn.reply(m.chat, '> ✅ *Se esta descargando el video, espere un momento.*', m)
try { 
const streamPipeline = promisify(pipeline)
const videoUrl = text
const videoInfo = await ytdl.getInfo(videoUrl)
const { videoDetails } = videoInfo
const { title, thumbnails, lengthSeconds, viewCount, uploadDate } = videoDetails
const thumbnail = thumbnails[0].url
const videoStream = ytdl(videoUrl, { filter: 'audioandvideo', quality: 'highest', })
async function crearWritableStreamAsync() {
const filePath = `tmp/${title}.mp4`
const writableStream = fs.createWriteStream(filePath)
return writableStream
}
async function transferirDatos(videoStream, writableStream) {
await streamPipeline(videoStream, writableStream)
}
async function fileVideo() {
const writableStream = await crearWritableStreamAsync(title)
await transferirDatos(videoStream, writableStream)
}
let message
async function enviarMensaje() {
message = await conn.sendMessage(m.chat, { document: { url: `tmp/${title}.mp4` }, mimetype: 'video/mp4', fileName: title, caption: null }, { quoted: m })
}
async function videoResult(m) {
await fileVideo()
await enviarMensaje()
await m.react(sent)
await message.react(correct)
}
videoResult(m)
} catch (e) {
reportError(e)
}
break
        
case isCommand13:
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return conn.reply(m.chat, `> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧𝙡𝙤 𝙚𝙣 𝙞𝙢𝙖𝙜𝙚𝙣, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> *${usedPrefix + command} Galaxia con estrellas.*`, m)
await m.reply(wait) 
try {
let urlDALLE = `https://aemt.me/dalle?text=${text}`
await conn.sendFile(m.chat, await (await fetch(urlDALLE)).buffer(), 'image.jpg', `> ✨ 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙡𝙖 𝙞𝙢𝙖𝙜𝙚𝙣 𝙘𝙧𝙚𝙖𝙙𝙖 𝙘𝙤𝙣 𝘿𝙖𝙡𝙡-𝙀. ✨\n\n\`𝙏𝙀𝙓𝙏𝙊:\` ${text}`, m)
} catch {
try{   
let response = await fetch(`https://api.lolhuman.xyz/api/diffusion-prompt?apikey=${lolkeysapi}&prompt=${text}`)
let image = await response.buffer()
await conn.sendFile(m.chat, image, 'image.jpg', `> ✨ 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙡𝙖 𝙞𝙢𝙖𝙜𝙚𝙣 𝙘𝙧𝙚𝙖𝙙𝙖 𝙘𝙤𝙣 𝘿𝙖𝙡𝙡-𝙀. ✨\n\n\`𝙏𝙀𝙓𝙏𝙊:\` ${text}`, m)
} catch {
try{
let res = `https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`  
await conn.sendFile(m.chat, res, 'image.jpg', `> ✨ 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙡𝙖 𝙞𝙢𝙖𝙜𝙚𝙣 𝙘𝙧𝙚𝙖𝙙𝙖 𝙘𝙤𝙣 𝘿𝙖𝙡𝙡-𝙀. ✨\n\n\`𝙏𝙀𝙓𝙏𝙊:\` ${text}`, m)
} catch (e) {
reportError(e)} 
}}      
break
        
case isCommand14:
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return conn.reply(m.chat, `> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧𝙡𝙤 𝙚𝙣 𝙞𝙢𝙖𝙜𝙚𝙣, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> *${usedPrefix + command} Perritos durmiendo*`, m)
m.reply(wait)
try {
await Draw(text).then((img) => {
conn.sendFile(m.chat, img, 'image.jpg', `> ✅ 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙩𝙪 𝙞𝙢𝙖𝙜𝙚𝙣 𝙘𝙧𝙚𝙖𝙙𝙖 𝙘𝙤𝙣 𝙞𝙣𝙩𝙚𝙡𝙞𝙜𝙚𝙣𝙘𝙞𝙖 𝙖𝙧𝙩𝙞𝙛𝙞𝙘𝙞𝙖𝙡.\n\n\`𝙏𝙀𝙓𝙏𝙊:\` _${text}_`, m)
})
} catch (e) {
reportError(e)}        
break
        
case isCommand15:
if (!text) return m.reply(`> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙤 𝙥𝙤𝙣𝙜𝙖 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙎𝙥𝙤𝙩𝙞𝙛𝙮, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n\n> *${usedPrefix + command} What is love*\n\n> *${usedPrefix + command} https://open.spotify.com/track/23rdcrD0Eky4vYn2TZidxJ*`)
try {
let resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let jsonDL = await resDL.json()
let linkDL = jsonDL.result[0].link
let spty = await spotifydl(linkDL)
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}
let randomName = getRandom(".mp3")
const filePath = `./tmp/${randomName}`
fs.writeFileSync(filePath, spty.audio)
let spotifyi = `\`𝐍𝐎𝐌𝐁𝐑𝐄/𝐓𝐈𝐓𝐔𝐋𝐎\`
> _${spty.data.name}_

\`𝐀𝐔𝐓𝐎𝐑/𝐀𝐑𝐓𝐈𝐒𝐓𝐀:\`
> _${spty.data.artists}_

\`𝐋𝐈𝐍𝐊/𝐄𝐍𝐋𝐀𝐂𝐄:\`
> _${linkDL}_

> 𝙎𝙚 𝙚𝙨𝙩𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙚𝙡 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤...`
await m.reply(wait)
await conn.sendFile(m.chat, spty.data.cover_url, 'image.jpg', '🍃 𝐌𝐙 / 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 🍃\n\n' + spotifyi, m)
await conn.sendMessage(m.chat, { audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: "audio/mp4", }, { quoted: m })    
//let aa = await conn.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
//if (!aa) return conn.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch (e) {
reportError(e)}              
break
        
case isCommand16:
if (!text) return m.reply(`> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧 𝙚𝙣 𝙎𝙥𝙤𝙩𝙞𝙛𝙮, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} Bellyache*`)
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${encodeURIComponent(text)}`)
let json = await res.json()
if (json.status != '200') return m.reply('𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝗻𝗱𝗼...')
try{
let get_result = json.result
let ini_txt = `\`${text}\``
for (var sh of get_result) {
const duration = sh.duration
const formatted = formatVideoDuration(duration)
ini_txt += `\n\n𝗧𝗜𝗧𝗨𝗟𝗢: ${sh.title} • ${formatted}\n`
ini_txt += `𝗔𝗥𝗧𝗜𝗦𝗧𝗔: ${sh.artists}\n`
ini_txt += `𝗘𝗡𝗟𝗔𝗖𝗘: ${sh.link}\n`
ini_txt += `•⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯•`
}
await m.reply(wait)
await m.reply(ini_txt)  
} catch (e) {
reportError(e)} 
break
        
case isCommand17:
if (!args[0]) return m.reply(`> ⓘ 𝗜𝗻𝗴𝗿𝗲𝘀𝗲 𝘂𝗻 𝗲𝗻𝗹𝗮𝗰𝗲 𝘃𝗮𝗹𝗶𝗱𝗼 𝗱𝗲 𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺, 𝗽𝗼𝗿 𝗲𝗷𝗲𝗺𝗽𝗹𝗼:*${usedPrefix + command}* https://www.instagram.com/reel/CrWooCiKGKP/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`)
try{
let human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`)
let json3 = await human.json()
let ig_ = json3.result
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt1 = `> 𝗘𝗡𝗟𝗔𝗖𝗘: ${shortUrl1}`.trim()
await m.reply(wait)
try{
await conn.sendFile(m.chat, ig_, 'error.mp4', txt1, m)  
} catch (e) {
await conn.sendMessage(m.chat, { image: { url: ig_ }, caption: txt1 }, { quoted: m })    
}} catch (e) {
reportError(e)} 
break

case isCommand18:
const twitterUrlRegex = /^https?:\/\/(www\.)?twitter\.com\/(\w+)\/status\/(\d+)$/i
if (!text) return m.reply('> Ingrese un enlace valido, por ejemplo: https://twitter.com/gofoodindonesia/status/1229369819511709697')
try{ 
const apiUrl = `https://api.lolhuman.xyz/api/twitter?apikey=${lolkeysapi}&url=${encodeURIComponent(text)}`
const response = await fetch(apiUrl)
const jsonData = await response.json()
const tweetData = jsonData.result
const tweetTitle = tweetData.title
const tweetVideoUrl = tweetData.media[0].url
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${text}`)).text()
const tweetTitleWithoutUrl = tweetTitle.replace(/https?:\/\/t\.co\/\w+/i, '').trim()
const txt1 = `𝗧𝗜𝗧𝗨𝗟𝗢: ${tweetTitleWithoutUrl}\n\n𝗨𝗥𝗟/𝗘𝗡𝗟𝗔𝗖𝗘\n_${shortUrl1}_`.trim()
await conn.sendFile(m.chat, tweetVideoUrl, 'error.mp4', txt1, m)
} catch (e) {
reportError(e)} 
break

case isCommand19:
if (!text) return m.reply(`> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙜𝙞𝙩𝙝𝙪𝙗, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n> *${usedPrefix + command}* ${md}`)
//ignoren jsjsjsj
conn.reply(m.chat, `> ✅ 𝙎𝙚 𝙚𝙨𝙩𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙚𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤.`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: igfg, 
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/Bots-WhatsApp-OFC/NaufraZapp-MD`}}})
if (!regex.test(args[0])) throw '> ⓘ 𝙀𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙣𝙤 𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙫𝙚𝙧𝙞𝙛𝙞𝙦𝙪𝙚 𝙦𝙪𝙚 𝙨𝙚𝙖 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙜𝙞𝙩𝙝𝙪𝙗.';
let [_, user, repo] = args[0].match(regex) || [];
repo = repo.replace(/.git$/, '');
let urlrepo = `https://api.github.com/repos/${user}/${repo}/zipball`;
const filename = (await fetch(urlrepo, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
conn.sendFile(m.chat, urlrepo, filename, null, m);
break
}}
handler.command = /^(naufraimagen|naufrazappgg|playvip|playvip2||ytvip(a|mp3)?|ytvip(v|mp4)?|playvip3|playvip4|facebookvip|fbvip|mediafivip|mediafirevip|mediafivip|mediafirevip|ytmaxvip|ytmaxdocvip|tiktokvip|tkdl|dalle|openiamagecreafoto|vipdalle|spotify|music|spot(ify)?search|i(nsta)?g(ram)?(dl)?|igimage|igdownload|(dl)?tw(it(ter(dl|x)?)?)?|x|t?tx|gitclone|clonarepo|clonarrepo|repoclonar)$/i
handler.register = true
export default handler

async function cut(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://api.botcahx.live/api/linkshort/bitly?link=${url}&apikey=${btc}`)
  if (!res.ok) throw false
  return await res.text()
}

async function Draw(propmt) {
const Blobs = await fetch(
"https://api-inference.huggingface.co/models/prompthero/openjourney-v2",
{
method: "POST",
headers: {
"content-type": "application/json",
Authorization: "Bearer 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",
},
body: JSON.stringify({ inputs: propmt }),
})
.then((res) => res.blob())
const arrayBuffer = await Blobs.arrayBuffer();
const buffer = Buffer.from(arrayBuffer);
return buffer
}

function checkMessageType(url) {
if (url.includes("www.facebook.com")) {
if (url.includes("/groups/")) {
return "groups"
} else if (url.includes("/reel/")) {
return "reel"
} else if (url.includes("/stories/")) {
return "stories"
} else if (url.includes("/posts/")) {
return "posts"
}}
return "default"
}

function formatVideoDuration(duration) {
const durationString = String(duration)
const length = durationString.length

if (length === 2) {
const seconds = durationString
return `${seconds} seg`
} else if (length === 3) {
const minutes = durationString.substring(0, 1)
const seconds = durationString.substring(1)
return `${minutes}:${seconds} min`
} else if (length === 4) {
const minutes = durationString.substring(0, 2)
const seconds = durationString.substring(2)
return `${minutes}:${seconds} min`
} else {
return "--"
}}

async function search(query, options = {}) {
const search = await yts.search({ query, hl: "es", gl: "ES", ...options });
return search.videos};

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = "$1.";
let arr = number.toString().split(".");
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join(".") : arr[0]};

function secondString(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay};

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)})};

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { audio: item.url, size: bytes }}};
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})};

async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}};
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getAudio = await ytMp3(random);
resolve(getAudio)}).catch(reject)})};

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getVideo = await ytMp4(random);
resolve(getVideo)}).catch(reject)})};

async function spotifydl(url) {
const credentials = { clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009' }
const spotify = new Spotify.default(credentials)
const res = await spotify.getTrack(url).catch(() => {
return { error: 'Fallo la descarga' }})
return { data: res, audio: await spotify.downloadTrack(url) }}

const getBuffer = async (url, options) => {
options ? options : {}
const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1,}, ...options, responseType: 'arraybuffer'})
return res.data
}
