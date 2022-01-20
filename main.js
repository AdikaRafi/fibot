const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
require('./index.js')
nocache('./index.js', module => console.log(`${module} Telah TerUpdate`))
const starts = async (Fi = new WAConnection()) => {
Fi.logger.level = 'warn'
Fi.version = [2, 2143, 8]
Fi.browserDescription = ["Fi Official", "safari", "windows 10"];
console.log(banner.string)
//-----------------< ANTI DELETE >---------------------\\
antidel = true
  Fi.on("message-delete", async (m) => {
    if (m.key.remoteJid == "status@broadcast") return;
    if (!m.key.fromMe && m.key.fromMe) return;
    if (antidel === false) return m.message =
      Object.keys(m.message)[0] === "ephemeralMessage"
        ? m.message.ephemeralMessage.message
        : m.message;  
    const type = Object.keys(m.message)[0];
    Fi.sendMessage(
      m.key.remoteJid,
`┏◪ 「 Anti Delete 」
┃ •Nama : @${m.participant.split("@")[0]}
┃ •Type : ${type}
┗◪`,
      MessageType.text,
      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }
    );

    Fi.copyNForward(m.key.remoteJid, m.message);
  });
Fi.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))})
fs.existsSync('./session.json') && Fi.loadAuthInfo('./session.json')
Fi.on('connecting', () => {
start('2', 'Connecting...')})
Fi.on('open', () => {
success('2', 'Connected')})
await Fi.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session.json', JSON.stringify(Fi.base64EncodedAuthInfo(), null, '\t'))
Fi.on('chat-update', async (message) => {
require('./index.js')(Fi, message)})}
function nocache(module, cb = () => { }) {
console.log('[ ! ]', `'${module}'`, 'DI Pantau Oleh EyYoMan')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)})}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)}})}
starts()