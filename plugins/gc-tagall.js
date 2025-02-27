

const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/es.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝙼𝙴𝙽𝚂𝙰𝙹𝙴:  ${pesan}`;
  let teks = `*${global.etiqueta}*\n${oi}\n\n❄𝙱𝙾𝚃𝚂:❄\n`;
  for (const mem of participants) {
    teks += `${global.emojietiqueta} @${mem.id.split('@')[0]}\n`;
  }
  teks += `${global.packname}`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
