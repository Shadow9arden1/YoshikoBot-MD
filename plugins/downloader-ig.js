import Scraper from '@SumiFX/Scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('💥 Ingresa un enlace de Instagram.')
try {
let { dl_url } = await Scraper.igdl(args[0])
await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: `✅️ *Su Video De Instagram*\n${botname}` }, { quoted: fkontak})
} catch (e) {
  console.log(e)
  m.reply('☘️ Ocurrió un error inesperado.')
}}

handler.help = ['ig <enlace>']
handler.tags = ['downloader']
handler.command = ['ig', 'instagram']
handler.register = true
handler.limit = 1

export default handler