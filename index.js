const {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
id,
} = require('@adiwajshing/baileys')
const fs = require('fs')
const hx = require('hxz-api')
const axios = require("axios")
const yts = require('yt-search')
const crypto = require('crypto')  
const request = require('request')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const moment = require('moment-timezone')
var translate = require('translation-google');
const Math_js = require('mathjs')
const { lirikLagu } = require('./lib/lirik.js')
const { color, bgcolor } = require('./lib/color')
const { mediafireDl } = require('./lib/mediafire.js')
const { qrcode } = require('./lib/qr.js') 
const { dewabatch } = require('./lib/anime.js') 
const { fetchJson, fetchText } = require('./lib/fetcher')
const fetch = require('node-fetch')
const { rugaapi } = require('./lib/rugaApi.js')
const { images } = require('./lib/images.js')
const { resep } = require('./lib/resep.js')
const { exec, spawn, execSync } = require('child_process')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const zekskey = 'GunturPrst' //ini apikey dari zeks
const lolkey = 'ciko' //ini apikey dari lolhuman
const { 
    processTime, 
} = require('./utils')
//LIBWEBP
const { ind } = require('./recode')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
//DATABASE
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const pendaftar = JSON.parse(fs.readFileSync('./database/pendaftar.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))

//GAMBAR
img1 = fs.readFileSync('./gambar/thumb.jpg')
img2 = fs.readFileSync('./gambar/fake.jpg')

//MODE
isSelf = false
isPublic = true

//JANGAN DI GANTI
fakeyoi = ["EyYoMan Official"]
api = ["https://myselfff.herokuapp.com/docs"]
simbol = ["•"]
const botName = setting.BotName
const owner = setting.OwnerNumber
const ownerName = setting.OwnerName
const autoread = false;
const autocomposing = false;
const autorecording = false;
let autoRead = autoread
let autoComposing = autocomposing
let autoRecording = autorecording
//APIKEY
zeksApi = [""]

//=================( PEMBATASAN )=================//

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)}JAM ${pad(minutes)}MENIT ${pad(seconds)}DETIK`

}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
  
//=================( PEMBATAS )=================//

module.exports = Fi = async (Fi, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
global.prefix
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const {t} = mek.message
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '-'   
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const ownerNumber = [`${owner}@s.whatsapp.net`]
const q = args.join(' ')
const c = args.join(' ')
const dfrply = fs.readFileSync('./gambar/fake.jpg')
var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();

switch(hari) {
    case 0: hari = "Minggu"; break;
    case 1: hari = "Senin"; break;
    case 2: hari = "Selasa"; break;
    case 3: hari = "Rabu"; break;
    case 4: hari = "Kamis"; break;
    case 5: hari = "Jum`at"; break;
    case 6: hari = "Sabtu"; break;
}
switch(bulan) {
    case 0: bulan = "Januari"; break;
    case 1: bulan = "Februari"; break;
    case 2: bulan = "Maret"; break;
    case 3: bulan = "April"; break;
    case 4: bulan = "Mei"; break;
    case 5: bulan = "Juni"; break;
    case 6: bulan = "Juli"; break;
    case 7: bulan = "Agustus"; break;
    case 8: bulan = "September"; break;
    case 9: bulan = "Oktober"; break;
    case 10: bulan = "November"; break;
    case 11: bulan = "Desember"; break;
}
    const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
    const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
    const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
     const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
       const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')

             var ase = new Date();
                var waktoonyabro = ase.getHours();
                switch(waktoonyabro){
        case 0: waktoonyabro = `Selamat Malam`; break;
        case 1: waktoonyabro = `Selamat Malam`; break;
        case 2: waktoonyabro = `Selamat Malam`; break;
        case 3: waktoonyabro = `Selamat Pagi`; break;
        case 4: waktoonyabro = `Selamat Pagi`; break;
        case 5: waktoonyabro = `Selamat Pagi`; break;
        case 6: waktoonyabro = `Selamat Pagi`; break;
        case 7: waktoonyabro = `Selamat Pagi`; break;
        case 8: waktoonyabro = `Selamat Pagi`; break;
        case 9: waktoonyabro = `Selamat Pagi`; break;
        case 10: waktoonyabro = `Selamat Pagi`; break;
        case 11: waktoonyabro = `Selamat Siang`; break;
        case 12: waktoonyabro = `Selamat Siang`; break;
        case 13: waktoonyabro = `Selamat Siang`; break;
        case 14: waktoonyabro = `Selamat Siang`; break;
        case 15: waktoonyabro = `Selamat Sore`; break;
        case 16: waktoonyabro = `Selamat Sore`; break;
        case 17: waktoonyabro = `Selamat Sore`; break;
        case 18: waktoonyabro = `Selamat Malam`; break;
        case 19: waktoonyabro = `Selamat Malam`; break;
        case 20: waktoonyabro = `Selamat Malam`; break;
        case 21: waktoonyabro = `Selamat Malam`; break;
        case 22: waktoonyabro = `Selamat Malam`; break;
        case 23: waktoonyabro = `Selamat Malam`; break;
    }
    var ucapanFakereply = "" + waktoonyabro;
    	//WAKTU
			var ase = new Date();
            var jamss = ase.getHours();
             switch(jamss){
    case 0: jamss = "Midnight 🌚"; break;
    case 1: jamss = "Midnight 🌚"; break;
    case 2: jamss = "Midnight 🌚"; break;
    case 3: jamss = "Midnight 🌔"; break;
    case 4: jamss = "Midnight 🌔"; break;
    case 5: jamss = "Dawn 🌄"; break;
    case 6: jamss = "Morning 🌄"; break;
    case 7: jamss = "Morning 🌄"; break;
    case 8: jamss = "Morning ☀️"; break;
    case 9: jamss = "Morning ☀️"; break;
    case 10: jamss = "Morning ☀️"; break;
    case 11: jamss = "Afternoon 🌞"; break;
    case 12: jamss = "Zuhur 🌞"; break;
    case 13: jamss = "Afternoon 🌞"; break;
    case 14: jamss = "Afternoon 🌞"; break;
    case 15: jamss = "Asr 🌞"; break;
    case 16: jamss = "Afternoon ☀️"; break;
    case 17: jamss = "Evening 🌄"; break;
    case 18: jamss = "Maghrib 🌄"; break;
    case 19: jamss = "Isha 🌙"; break;
    case 20: jamss = "Night 🌙"; break;
    case 21: jamss = "Night 🌙"; break;
    case 22: jamss = "Midnight 🌙"; break;
    case 23: jamss = "Midnight 🌚"; break;
}
var tampilUcapan = "" + jamss;
const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
    const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    const week = d.toLocaleDateString(locale, { weekday: 'long' })
    const calender = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
   })
const botNumber = Fi.user.jid
const query = body.trim().substring(body.indexOf(' ') + 1);
const botNumberss = Fi.user.jid + '@c.us'
const isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
const isOwner = ownerNumber.includes(sender)
const totalchat = await Fi.chats.all()
const groupMetadata = isGroup ? await Fi.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isAntilink = isGroup ? antilink.includes(from) : false
const isWelkom = isGroup ? welkom.includes(from) : false
const conts = mek.key.fromMe ? Fi.user.jid : Fi.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? Fi.user.name : conts.notify || conts.vname || conts.name || '-'
const isUser = pendaftar.includes(sender)
const isBanned = ban.includes(sender)
const isPremier = prem.includes(sender)
const totalChat = await Fi.chats.all()
const groups = Fi.chats.array.filter(v => v.jid.endsWith('g.us'))
const privat = Fi.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const cekcek = randomNomor(100)  
//=================( MESS ONLY )=================//

mess = {
premier: `Fitur ini Khusus User Premium!!\nKalo Mau Jadi User Premium\nSilahkan Chat Owner Ku\nWa.me/${owner}`,
wait: 'Wait a minute',
wrongFormat: 'Format salah, coba liat lagi di menu',
success: 'Success',
error: {
stick: 'Cannot access videos!',
lv: 'Invalid link!',
api: 'Error'
},
only: {
group: 'Khusus Grup ngab',
owner: 'Khusus Owner Ngab'
}
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
//=================( REPLY MESSAGE )=================//
if (autoRead) {
Fi.chatRead(from)
}
if (autoComposing) {
Fi.updatePresence(from, Presence.composing)
}
if (autoRecording) {
Fi.updatePresence(from, Presence.recording)
}               
const sendBug = async (target) => {
  await Fi.relayWAMessage(
    Fi.prepareMessageFromContent(
      target,
      Fi.prepareDisappearingMessageSettingContent(0),
      {}
    ),{ waitForAck: true }) 
}
const sleep = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const fakeText = (teks) => {
Fi.sendMessage(from, teks, text, {quoted: ftex })
}
const reply = (teks) => {
Fi.sendMessage(from, teks, text, {quoted: mek})
}
const fakethumb = (teks, yes) => {
Fi.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./gambar/fake.jpg'),quoted:mek,caption:yes})
} 
const sendMess = (hehe, teks) => {
Fi.sendMessage(hehe, teks, text)
}
const reply2 = (teks) => {
Fi.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
 
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Fi.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Fi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
} 
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntilink) return
if (isGroupAdmins) return reply("admin bebas aowkwkww")
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Fi.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}   
//=================( FAKE )=================//
const ftex = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
"text": `${fakeyoi}`,
"title": ``,
'jpegThumbnail': img2
}
} 
}
//FAKE VN
const fvn = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
//FAKE TEXT
const ftt = {
key: {fromMe: false ,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fakeyoi}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE VIDEO
const flexx = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fakeyoi}`,'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE GRUP
const fgc = {
key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fakeyoi}`, 'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}

//=================( SEND KONTAK )=================//

const sendKontak = (from, nomor, nama, org = "") => {
const vcard =
"BEGIN:VCARD\n" +
"VERSION:3.0\n" +
"FN:" +
nama +
"\n" +
"ORG:" +
org +
"\n" +
"TEL;type=CELL;type=VOICE;waid=" +
nomor +
":+" +
nomor +
"\n" +
"END:VCARD";
Fi.sendMessage(
from,
{ displayname: nama, vcard: vcard },
MessageType.contact,
{ quoted: mek }
);
}; 
    
//=================( BUTTON )=================//
const sendButMess = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Fi.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Fi.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: mek
})
}
const sendButImg = async (from, context, fortext, img, but, mek) => {
jadinya = await Fi.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
Fi.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: mek,
})
}
async function sendButLoc(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return Fi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} 

//=================( STICKER )=================//

const sticOwner = (hehe) => {
ano = fs.readFileSync('./lib/sticker/owner.webp')
Fi.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticWait = (hehe) => {
ano = fs.readFileSync('./lib/sticker/wait.webp')
Fi.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticLoad = (hehe) => {
ano = fs.readFileSync('./lib/sticker/loading.webp')
Fi.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticGroup = (hehe) => {
ano = fs.readFileSync('./lib/sticker/group.webp')
Fi.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBotAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/botadmin.webp')
Fi.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBanned = (hehe) => {
ano = fs.readFileSync('./lib/sticker/banned.webp')
Fi.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/admin.webp')
Fi.sendMessage(hehe, ano, sticker, { quoted: mek})
}

//=================( MEDIA URL )=================//
function _0x1f8a(){var _0x3b0963=['Mau\x20Beli\x20Sc\x20Bot\x20?\x0aWa.me/6285789004732\x0aWa.me/6282279915237\x0a\x0aHarga:\x2015k-30k\x0aFull\x20Pengajaran\x20✓\x0aBebas\x20Recode\x20✓\x0aNo\x20Enc\x20100%\x20✓\x0aBisa\x20Request\x20Fitur\x20✓','5783876aPdIUc','450194LtiikH','2400255WCaikZ','1040GouifO','1690328vFoDVX','12116hJnXyP','29910SlhvcX','860340rvKgqZ'];_0x1f8a=function(){return _0x3b0963;};return _0x1f8a();}var _0x35a8ef=_0x5f17;function _0x5f17(_0xd5618f,_0x5064d8){var _0x1f8a64=_0x1f8a();return _0x5f17=function(_0x5f17cb,_0x4941ea){_0x5f17cb=_0x5f17cb-0x91;var _0x2fbc52=_0x1f8a64[_0x5f17cb];return _0x2fbc52;},_0x5f17(_0xd5618f,_0x5064d8);}(function(_0x1710c1,_0x5ba38f){var _0x3a070d=_0x5f17,_0x3a537f=_0x1710c1();while(!![]){try{var _0x2a229c=-parseInt(_0x3a070d(0x91))/0x1+-parseInt(_0x3a070d(0x96))/0x2+parseInt(_0x3a070d(0x92))/0x3+parseInt(_0x3a070d(0x95))/0x4*(-parseInt(_0x3a070d(0x93))/0x5)+parseInt(_0x3a070d(0x97))/0x6+parseInt(_0x3a070d(0x99))/0x7+-parseInt(_0x3a070d(0x94))/0x8;if(_0x2a229c===_0x5ba38f)break;else _0x3a537f['push'](_0x3a537f['shift']());}catch(_0x2c922c){_0x3a537f['push'](_0x3a537f['shift']());}}}(_0x1f8a,0x711a7),scb=[_0x35a8ef(0x98)]);
var _0x20e665=_0x314c;function _0x314c(_0x37cd58,_0x3a521e){var _0x4b8e56=_0x4b8e();return _0x314c=function(_0x314c41,_0x4eaac2){_0x314c41=_0x314c41-0xaa;var _0x55af95=_0x4b8e56[_0x314c41];return _0x55af95;},_0x314c(_0x37cd58,_0x3a521e);}function _0x4b8e(){var _0x27123e=['243376EBlSHk','258900wIOfcY','114TWcRlj','10096209DvrdPy','753669vUkCXH','8VkgSua','https://youtube.com/c/LEX4YOUU','2002557RpuVza','8153257ApajrE','98158NObccs'];_0x4b8e=function(){return _0x27123e;};return _0x4b8e();}(function(_0x594d1e,_0x15ed1c){var _0x4e0b23=_0x314c,_0x878f3d=_0x594d1e();while(!![]){try{var _0x149281=-parseInt(_0x4e0b23(0xb1))/0x1+-parseInt(_0x4e0b23(0xac))/0x2+parseInt(_0x4e0b23(0xaa))/0x3+-parseInt(_0x4e0b23(0xad))/0x4+-parseInt(_0x4e0b23(0xae))/0x5*(-parseInt(_0x4e0b23(0xaf))/0x6)+-parseInt(_0x4e0b23(0xab))/0x7+-parseInt(_0x4e0b23(0xb2))/0x8*(-parseInt(_0x4e0b23(0xb0))/0x9);if(_0x149281===_0x15ed1c)break;else _0x878f3d['push'](_0x878f3d['shift']());}catch(_0x594fb9){_0x878f3d['push'](_0x878f3d['shift']());}}}(_0x4b8e,0xb5d5d),linkyt=[_0x20e665(0xb3)]);
function _0x7d02(_0x172c43,_0x2efc01){var _0x475ee4=_0x475e();return _0x7d02=function(_0x7d026d,_0x238c6d){_0x7d026d=_0x7d026d-0xf8;var _0xdba5d2=_0x475ee4[_0x7d026d];return _0xdba5d2;},_0x7d02(_0x172c43,_0x2efc01);}function _0x475e(){var _0x38e6d2=['7KFrBYl','566vbLPoG','2185605jwxDBW','4833jNGgmR','656YKzcRx','24472360alBtlI','10272344ajtBCv','2672eOHLSC','━➤\x20「\x20𝙄𝙉𝙁𝙊\x20𝘿𝙀𝙑\x20」\x0a✍️\x20𝙎𝙘𝙧𝙞𝙥𝙩\x20𝙈𝙖𝙙𝙚\x20𝙞𝙣\x20𝘽𝙮\x20𝙇𝙚𝙭𝙭𝙮\x20𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡\x0a🌟\x20𝙑𝙚𝙧𝙨𝙞𝙤𝙣\x20:\x2010.0\x0a📈\x20𝙇𝙖𝙨𝙩\x20𝙐𝙥𝙙𝙖𝙩𝙚\x20:\x201.0\x0a📃\x20𝙇𝙞𝙣𝙠\x20𝙎𝙘\x20:\x20https://youtu.be/DN42naRJ6FE\x0a\x0a📦\x20𝙂𝙧𝙤𝙪𝙥\x201\x20:\x0ahttps://chat.whatsapp.com/IQdenO0L2R0AgXWoWzssit\x0a📦\x20𝙂𝙧𝙤𝙪𝙥\x202\x20:\x0ahttps://chat.whatsapp.com/CNwZkO2NhV76sP6NCX6i8A\x0a\x0a🌐\x20𝙔𝙤𝙪𝙩𝙪𝙗𝙚\x20:\x0ahttps://youtube.com/c/LEX4YOUU\x0a\x0a𝑺𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒆\x20𝑭𝒐𝒓\x20𝑵𝒆𝒘\x20𝑼𝒑𝒅𝒂𝒕𝒆!','72UjGwJy','6435354Inhdaf','1724280XwCNVZ'];_0x475e=function(){return _0x38e6d2;};return _0x475e();}var _0x488feb=_0x7d02;(function(_0x40179c,_0x1edf3f){var _0x2eab61=_0x7d02,_0x1a3f75=_0x40179c();while(!![]){try{var _0xb5ec52=-parseInt(_0x2eab61(0x101))/0x1*(-parseInt(_0x2eab61(0xfb))/0x2)+-parseInt(_0x2eab61(0x103))/0x3*(-parseInt(_0x2eab61(0xf8))/0x4)+parseInt(_0x2eab61(0x102))/0x5+-parseInt(_0x2eab61(0xfe))/0x6+parseInt(_0x2eab61(0x100))/0x7*(parseInt(_0x2eab61(0xfa))/0x8)+-parseInt(_0x2eab61(0xfd))/0x9*(-parseInt(_0x2eab61(0xff))/0xa)+-parseInt(_0x2eab61(0xf9))/0xb;if(_0xb5ec52===_0x1edf3f)break;else _0x1a3f75['push'](_0x1a3f75['shift']());}catch(_0x1c4cb1){_0x1a3f75['push'](_0x1a3f75['shift']());}}}(_0x475e,0xc9161),dev=[_0x488feb(0xfc)]);

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
Fi.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
Fi.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
Fi.sendMessage(from, hasil, type, options).catch(e => {
Fi.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
} 
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Fi.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}

//=================( USER )=================//
   
if (isCmd && !isUser){
pendaftar.push(sender)
fs.writeFileSync('./database/pendaftar.json', JSON.stringify(pendaftar, null, 2))
}
 
//=================( CONECTION )=================//

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))  
if (!mek.key.fromMe && isSelf === true) return
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilUcapan} ${pushname}`, //Kasih namalu
                            orderTitle: `${tampilUcapan} ${pushname}`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
Fi.chatRead(from, "read")

//=================( CASE & MENU )=================//
switch (command) {
case 'soundmenu':
reply2(`❏ 𝙎𝙤𝙪𝙣𝙙
${simbol} ${prefix}sound1
${simbol} ${prefix}sound2
${simbol} ${prefix}sound3
${simbol} ${prefix}sound4
${simbol} ${prefix}sound5
${simbol} ${prefix}sound6
${simbol} ${prefix}sound7
${simbol} ${prefix}sound8
${simbol} ${prefix}sound9
${simbol} ${prefix}sound10
${simbol} ${prefix}sound11
${simbol} ${prefix}sound12
${simbol} ${prefix}sound13
${simbol} ${prefix}sound14
${simbol} ${prefix}sound15
${simbol} ${prefix}sound16
${simbol} ${prefix}sound17
${simbol} ${prefix}sound18
${simbol} ${prefix}sound19
${simbol} ${prefix}sound20
${simbol} ${prefix}sound21
${simbol} ${prefix}sound22
${simbol} ${prefix}sound23
${simbol} ${prefix}sound24
${simbol} ${prefix}sound25`)
break
case 'othersmenu':
reply2(`❏ 𝙊𝙩𝙝𝙚𝙧𝙨
${simbol} ${prefix}store
${simbol} ${prefix}infobot
${simbol} ${prefix}cekprem
${simbol} ${prefix}github
${simbol} ${prefix}owner
${simbol} ${prefix}donasi
${simbol} ${prefix}request <fitur>
${simbol} ${prefix}report <fitur>`)
break
case 'ownermenu':
reply2(`❏ 𝙊𝙬𝙣𝙚𝙧
${simbol} ${prefix}self
${simbol} ${prefix}public
${simbol} ${prefix}readall
${simbol} ${prefix}broadcast <text>
${simbol} ${prefix}setsimbol
${simbol} ${prefix}setfake <reply image>
${simbol} ${prefix}setreply <nama>
${simbol} ${prefix}setthumb <reply image>
${simbol} ${prefix}ban 628xxx
${simbol} ${prefix}unban 628xxx
${simbol} ${prefix}addprem 628xxx
${simbol} ${prefix}delprem 628xxx`)
break
case 'groupmenu':
reply2(`❏ 𝙂𝙧𝙤𝙪𝙥
${simbol} ${prefix}antilink
${simbol} ${prefix}welcome
${simbol} ${prefix}rate
${simbol} ${prefix}apakah
${simbol} ${prefix}bisakah
${simbol} ${prefix}kapankah
${simbol} ${prefix}leave
${simbol} ${prefix}closegc
${simbol} ${prefix}opengc
${simbol} ${prefix}linkgrup
${simbol} ${prefix}listadmin
${simbol} ${prefix}setpp
${simbol} ${prefix}setppgrup
${simbol} ${prefix}kick @tag
${simbol} ${prefix}add +628
${simbol} ${prefix}tagall
${simbol} ${prefix}hidetag
${simbol} ${prefix}demote
${simbol} ${prefix}promote
${simbol} ${prefix}delete
${simbol} ${prefix}setdesk
${simbol} ${prefix}setname
${simbol} ${prefix}spam`)
break
case 'convertmenu':
reply2(`❏ 𝘾𝙤𝙣𝙫𝙚𝙧𝙩
${simbol} ${prefix}ttp
${simbol} ${prefix}attp
${simbol} ${prefix}dare
${simbol} ${prefix}truth
${simbol} ${prefix}sticker <reply>
${simbol} ${prefix}toimg <reply>
${simbol} ${prefix}cerpen
${simbol} ${prefix}tongue
${simbol} ${prefix}pantun
${simbol} ${prefix}nuliskiri
${simbol} ${prefix}nuliskanan
${simbol} ${prefix}foliokiri
${simbol} ${prefix}foliokanan`)
break
case 'downloadmenu':
reply2(`❏ 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙
${simbol} ${prefix}igdl <link>
${simbol} ${prefix}tiktok <link>
${simbol} ${prefix}ytmp3 <link>
${simbol} ${prefix}ytmp4 <link>
${simbol} ${prefix}ytplay <judul>
${simbol} ${prefix}playmp4 <judul>
${simbol} ${prefix}playmp3 <judul>
${simbol} ${prefix}mediafire <link>
${simbol} ${prefix}instagram <link>`)
break
case 'searchmenu':
reply2(`❏ 𝙎𝙚𝙖𝙧𝙘𝙝
${simbol} ${prefix}waifu
${simbol} ${prefix}husbu
${simbol} ${prefix}herolist
${simbol} ${prefix}herodetail
${simbol} ${prefix}ytsearch
${simbol} ${prefix}pinterest
${simbol} ${prefix}playstore
${simbol} ${prefix}nekonime
${simbol} ${prefix}namaninja
${simbol} ${prefix}imgsearch
${simbol} ${prefix}searchgrup`)
break
case 'canvasmenu':
reply2(`❏ 𝘾𝙖𝙣𝙫𝙖𝙨
${simbol} ${prefix}rem
${simbol} ${prefix}gura
${simbol} ${prefix}serti1
${simbol} ${prefix}serti2
${simbol} ${prefix}serti3
${simbol} ${prefix}kaneki
${simbol} ${prefix}sadboy
${simbol} ${prefix}girlneko
${simbol} ${prefix}lolimaker`)
break
case 'randommenu':
reply2(`❏ 𝙍𝙖𝙣𝙙𝙤𝙢
${simbol} ${prefix}fox
${simbol} ${prefix}cat
${simbol} ${prefix}dog
${simbol} ${prefix}birb
${simbol} ${prefix}koala
${simbol} ${prefix}panda
${simbol} ${prefix}meme
${simbol} ${prefix}nickepep
${simbol} ${prefix}katailham
${simbol} ${prefix}red_panda
${simbol} ${prefix}estetikpic
${simbol} ${prefix}darkjokes
${simbol} ${prefix}memeindo
${simbol} ${prefix}katasindiran
${simbol} ${prefix}randombokep`)
break
case 'nsfwmenu':
reply2(`❏ 𝙉𝙨𝙛𝙬
${simbol} ${prefix}trap
${simbol} ${prefix}neko
${simbol} ${prefix}awoo
${simbol} ${prefix}waifu
${simbol} ${prefix}blowjob
${simbol} ${prefix}megumin
${simbol} ${prefix}shinobu`)
break
case 'makermenu':
reply2(`❏ 𝙈𝙖𝙠𝙚𝙧
${simbol} ${prefix}bneon
${simbol} ${prefix}matrix
${simbol} ${prefix}breakwall
${simbol} ${prefix}dropwater
${simbol} ${prefix}lithgtext
${simbol} ${prefix}crismes
${simbol} ${prefix}tfire
${simbol} ${prefix}sandw
${simbol} ${prefix}text3dbox
${simbol} ${prefix}leavest
${simbol} ${prefix}tlight
${simbol} ${prefix}nulis
${simbol} ${prefix}blackpink
${simbol} ${prefix}neon_light
${simbol} ${prefix}gaming
${simbol} ${prefix}watercolor`)
break
case 'animemenu':
reply2(`❏ 𝘼𝙣𝙞𝙢𝙚
${simbol} ${prefix}ass
${simbol} ${prefix}ahegao
${simbol} ${prefix}bdsm
${simbol} ${prefix}blowjob
${simbol} ${prefix}cuckold
${simbol} ${prefix}cum
${simbol} ${prefix}ero
${simbol} ${prefix}femdom
${simbol} ${prefix}foot
${simbol} ${prefix}glasses
${simbol} ${prefix}gangbang
${simbol} ${prefix}hentai
${simbol} ${prefix}jahy
${simbol} ${prefix}orgy
${simbol} ${prefix}pussy
${simbol} ${prefix}panties
${simbol} ${prefix}thighs
${simbol} ${prefix}yuri
${simbol} ${prefix}neko`)
break
case 'asupanmenu':
reply2(`❏ 𝘼𝙨𝙪𝙥𝙖𝙣
${simbol} ${prefix}santuy
${simbol} ${prefix}ukhty
${simbol} ${prefix}gheayubi
${simbol} ${prefix}rikagusriani
${simbol} ${prefix}bocil`)
break
case 'gfxmenu':
reply2(`❏ 𝙂𝙛𝙭𝙏𝙚𝙭𝙩
${simbol} ${prefix}gfx1
${simbol} ${prefix}gfx2
${simbol} ${prefix}gfx3
${simbol} ${prefix}gfx4
${simbol} ${prefix}gfx5
${simbol} ${prefix}gfx6`)
break
case 'cecanmenu':
reply2(`❏ 𝘾𝙚𝙘𝙖𝙣
${simbol} ${prefix}china
${simbol} ${prefix}vietnam
${simbol} ${prefix}thailand
${simbol} ${prefix}indonesia
${simbol} ${prefix}korea
${simbol} ${prefix}japan
${simbol} ${prefix}malaysia`)
break
case 'wallmenu':
reply2(`❏ 𝙒𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧
${simbol} ${prefix}wallneon
${simbol} ${prefix}wallrandom
${simbol} ${prefix}wallcode
${simbol} ${prefix}wallhacker
${simbol} ${prefix}wallpubg
${simbol} ${prefix}wallml`)
break
case 'textpromenu':
reply2(`❏ 𝙏𝙚𝙭𝙩𝙥𝙧𝙤
${simbol} ${prefix}rainbow
${simbol} ${prefix}scfi
${simbol} ${prefix}blue
${simbol} ${prefix}juice
${simbol} ${prefix}purple
${simbol} ${prefix}toxic
${simbol} ${prefix}peridot
${simbol} ${prefix}metal 
${simbol} ${prefix}realistic
${simbol} ${prefix}impressive
${simbol} ${prefix}cracked
${simbol} ${prefix}magma
${simbol} ${prefix}thunder
${simbol} ${prefix}berry
${simbol} ${prefix}transformer 
${simbol} ${prefix}horror
${simbol} ${prefix}metallic
${simbol} ${prefix}circuit
${simbol} ${prefix}sketch
${simbol} ${prefix}halloween`)
break
case 'china':
case 'vietnam':
case 'thailand':
case 'indonesia':
case 'korea':
case 'japan':
ccn = await getBuffer(`https://lexxy-api.herokuapp.com/docs/cecan/${command}?apikey=Alphabot`)
Fi.sendMessage(from, gfx, image, { quoted: mek, caption: `Random Cecan ${command}`})
break
case 'malaysia':
yh = await fetchJson(`https://lexxy-api.herokuapp.com/docs/cecan/malaysia?apikey=Alphabot`)
ccn = await getBuffer(yh.buff)
Fi.sendMessage(from, ccn, image, { quoted: mek, caption: `Random Cecan ${command}`})
break
case 'autotyping':
case 'autoketik':
	if (!isOwner && !mek.key.fromMe) return reply(only.OwnerBot)
	if (args.length < 1) return reply(`Pengguan: ${prefix + command} false/true`);
	if (query === 'true') {
		autoComposing = true;
		reply(`Berhasil mengubah autocomposing ke ${query}`);
	} else if (query === 'false') {
		autoComposing = false;
		reply(`Berhasil mengubah autocomposing ke ${query}`);
	}
break
//IMAGE MAKER//by Guntur P
case 'flame':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/flametext?apikey=${zekskey}&text=${query}`)
Fi.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'silktext':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/silktext?apikey=${zekskey}&text=${query}`)
Fi.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'glow':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} GunturP`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/glowtext?apikey=${zekskey}&text=${query}`)
Fi.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'gfx1':
case 'gfx2':
case 'gfx5':
if (args.length ==0) return reply(`Text Nya Mana? Contohnya\n${prefix+command} Lexxy`)
sticWait(from)
ini_txt = args.join(" ")
gfx = await getBuffer(`https://hardianto.xyz/api/bot/${command}?apikey=hardianto&nama=${ini_txt}`)
Fi.sendMessage(from, gfx, image, { quoted: mek, caption: '*Logo By EyYoMan*'})
break
case 'gfx3':
case 'gfx4':
if (args.length ==0) return reply(`Text Nya Mana? Contohnya\n${prefix+command} EyYoMan`)
sticWait(from)
ini_txt1 = args[0]
ini_txt1 = args[1]
gfx = await getBuffer(`https://hardianto.xyz/api/bot/${command}?apikey=hardianto&text1=${ini_txt1}&text2=${ini_txt2}`)
Fi.sendMessage(from, gfx, image, { quoted: mek, caption: '*Logo By EyYoMan*'})
break
case 'gfx6':
if (args.length ==0) return reply(`Text Nya Mana? Contohnya\n${prefix+command} Lexxy`)
sticWait(from)
ini_txt = args.join(" ")
gfx = await getBuffer(`https://hardianto.xyz/api/bot/gura?apikey=hardianto&nama=${ini_txt}`)
Fi.sendMessage(from, gfx, image, { quoted: mek, caption: '*Logo By EyYoMan*'})
break
case 'help':
case 'menu':
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Fi.user.phone
ros = await Fi.prepareMessageFromContent(from,{
"listMessage": {
"title": '◩ 𝘽𝙤𝙩 𝙄𝙣𝙛𝙤',
"description": `□» 𝐍𝐚𝐦𝐞 : *${botName}*
□» 𝐎𝐰𝐧𝐞𝐫 : *${ownerName}*
□» 𝐀𝐮𝐭𝐡𝐨𝐫 : *EyYoMan Official*
□» 𝐏𝐫𝐞𝐟𝐢𝐱 : *Multi Prefix*
□» 𝐋𝐢𝐛 : *Baileys*
□» 𝐓𝐲𝐩𝐞 : *NodeJS*
□» 𝐌𝐨𝐝𝐞 : *${isPublic? "Public":"Self"}*
□» 𝐑𝐚𝐦 : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
□» 𝐕𝐞𝐫𝐬𝐢 𝐎𝐒 : *${os_version}*
□» 𝐕𝐞𝐫𝐬𝐢 𝐇𝐏 : *${device_model}*
□» 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : *${wa_version}*
□» 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 : *( ${pendaftar.length} )*

◧ 𝙐𝙨𝙚𝙧 𝙄𝙣𝙛𝙤
□» 𝐍𝐚𝐦𝐞 : *${pushname}*
□» 𝐓𝐚𝐠 : *@${sender.split("@")[0]}*
□» 𝐒𝐭𝐚𝐭𝐮𝐬 : *${isOwner? "Owner 👑️":"User ⚔️"}*
□» 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 : *${isPremier? "Aktif ✔":"Tidak ✘"}*

◪ 𝘾𝙝𝙖𝙩 𝙄𝙣𝙛𝙤
□» 𝐆𝐫𝐨𝐮𝐩 : *( ${groups.length} )*
□» 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 : *( ${privat.length} )*
□» 𝐓𝐨𝐭𝐚𝐥 : *( ${totalChat.length} )*`,
"buttonText": "𝙋𝙄𝙇𝙄𝙃 𝘿𝙄𝙎𝙄𝙉𝙄",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `${ucapanWaktu} - ${time}`,
"rows": [
{
{
"title": "Random Menu ⚡️",
"rowId": `${prefix}randommenu`
},
{
"title": "Group Menu 👥️",
"rowId": `${prefix}groupmenu`
},
{
"title": "Textpro Menu 🎟️",
"rowId": `${prefix}textpromenu`
},
{
"title": "GfxText Menu ✏️️",
"rowId": `${prefix}gfxmenu`
},
{
"title": "Sound Menu 🎧️️",
"rowId": `${prefix}soundmenu`
},
{
"title": "Wallpaper Menu 🕊️️️",
"rowId": `${prefix}wallmenu`
},
{
"title": "Canvas Menu 🌟️️",
"rowId": `${prefix}canvasmenu`
},
{
"title": "Gacha Cecan ❤️",
"rowId": `${prefix}cecanmenu`
},
{
"title": "Anime Menu 🔥️️",
"rowId": `${prefix}animemenu`
},
{
"title": "Search Menu 🔎️",
"rowId": `${prefix}searchmenu`
},
{
"title": "Others Menu 🏷️",
"rowId": `${prefix}othersmenu`
},
{
"title": "Owner Menu 👑",
"rowId": `${prefix}ownermenu`
},
{
"title": "Convert Menu 🚨️",
"rowId": `${prefix}convertmenu`
},
{
"title": "Maker Menu 🗳️️",
"rowId": `${prefix}makermenu`
},
{
"title": "Download Menu 📥️",
"rowId": `${prefix}downloadmenu`
},
/*{
"title": "Store Menu 🛒",
"rowId": `${prefix}store`
},*/
{
 "title": "Owner Bot 👤",
"rowId": `${prefix}owner`
},
{
"title": "Github Bot 💌",
"rowId": `${prefix}github`
},
{
"title": "Info Bot ⚙️",
"rowId": `${prefix}infobot`
},
]
}
]
}
}, {quoted: mek })
Fi.relayWAMessage(ros)
break
case 'wallneon': case 'wallrandom': case 'wallcode': case 'wallhacker': case 'wallpubg': case 'wallml':
if (isBanned)return sticBanned(from)
sticWait(from)
try{
nyz2 = await fetchJson(`${api}/wallpaper/${command}`) 
nyz3 = await getBuffer(nyz2.list.gambar)
Fi.sendMessage(from, nyz3, image, {thumbnail:Buffer.alloc(0), caption:`NIH KAK`,quoted: mek}) 
} catch (e) { reply("ERR SILAHKAN COBALAGI")}
break	
case 'rainbow': case 'scfi': case 'blue': case 'juice': case 'purple': case 'toxic': case 'peridot': case 'metal': 
case 'realistic': case 'impressive': case 'cracked': case 'magma': case 'thunder': case 'berry': case 'transformer': 
case 'horror': case 'metallic': case 'circuit': case 'sketch': case 'halloween':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Text Nya om')
sticWait(from)
nyz5 = await fetchJson(`${api}/textpro/${command}?text=${aq}`) 
nyz4 = await getBuffer(nyz5.result)
Fi.sendMessage(from, nyz4, image, {thumbnail:Buffer.alloc(0), caption:`NIH KAK`,quoted: mek}) 		
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound70':
omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
Fi.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
break
case 'sound71':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
omkeh = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
Fi.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
    break
case 'store':
res = await Fi.prepareMessageFromContent(from,{
"listMessage": {
"title": '「 STORE MENU 」',
"description": `*Store Fi Botz*`,
"buttonText": "𝙋𝙄𝙇𝙄𝙃 𝘿𝙄𝙎𝙄𝙉𝙄",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `${time2}`,
"rows": [
{
"title": "𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘍𝘳𝘦𝘦 𝘍𝘪𝘳𝘦 💎",
"rowId": `${prefix}ff`
},
{
"title": "𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘔𝘰𝘣𝘪𝘭𝘦 𝘓𝘦𝘨𝘦𝘯𝘥𝘴 💎",
"rowId": `${prefix}ml`
},
{
 "title": "𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘏𝘢𝘨𝘰 💎",
"rowId": `${prefix}hago`
},
{
"title": "𝘜𝘊 𝘗𝘶𝘣𝘨 𝘔𝘰𝘣𝘪𝘭𝘦 💸",
"rowId": `${prefix}pubg`
},
{
"title": "𝘗𝘰𝘪𝘯𝘵 𝘉𝘭𝘢𝘯𝘬 𝘗𝘉 𝘊𝘢𝘴𝘩 💸",
"rowId": `${prefix}point`
},
{
"title": "𝘊𝘢𝘭𝘭 𝘖𝘧 𝘋𝘶𝘵𝘺 𝘔𝘰𝘣𝘪𝘭𝘦 💸",
"rowId": `${prefix}codm`
},
{
"title": "𝘏𝘪𝘨𝘨𝘴 𝘋𝘰𝘮𝘪𝘯𝘰 𝘐𝘴𝘭𝘢𝘯𝘥 💰",
"rowId": `${prefix}chip`
},
{
"title": "𝘎𝘢𝘳𝘦𝘯𝘢 𝘚𝘩𝘦𝘭𝘭 𝘐𝘯𝘥𝘰 💰",
"rowId": `${prefix}garena`
},
{
"title": "𝘗𝘢𝘺𝘮𝘦𝘯𝘵 𝘚𝘵𝘰𝘳𝘦 🤑",
"rowId": `${prefix}pyment`
},
{
 "title": "𝘖𝘸𝘯𝘦𝘳 𝘉𝘰𝘵 👤",
"rowId": `${prefix}owner`
},
{
"title": "𝘚𝘤𝘳𝘪𝘱𝘵 𝘉𝘰𝘵 ⚙️",
"rowId": `${prefix}github`
}
]
}
]
}
}, {quoted: flexx })
Fi.relayWAMessage(res)
break
/*case 'ass':
case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'glasses':
case 'gangbang':
case 'hentai':
case 'jahy':
case 'orgy':
case 'pussy':
case 'panties':
case 'thighs':
case 'yuri':
case 'neko':
get = await fetchJson(`https://lexxy-api.herokuapp.com/docs/nsfw/${command}?apikey=Alphabot`)
ini = await getBuffer(get.result)
Fi.sendMessage(from, ini, image, { quoted: ftex, caption: `${command}` })
break
case 'santuy':
case 'ukhty':
case 'gheayubi':
case 'rikagusriani':
case 'bocil':*
bcl = await fetchJson(`https://lexxy-api.herokuapp.com/docs/asupan/${command}?apikey=Alphabot`)
Fi.sendMessage(from, bcl, video)
break*/
case 'serti1':
case 'serti2':
case 'serti3':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0) return reply(`Text Nya Mana kak? Contoh\n${prefix+command} Lexxy`)
txtt = args.join (" ")
sticWait(from)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
Fi.sendMessage(from, buff, image, { quoted: flexx, caption: 'Nih Bro Hasil nya' })
break
case 'ttvideo':
case 'tiktok':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0) return reply(`Link Nya Mana kak?`)
tk = args.join(" ")
ini = await fetchJson(`https://lexxy-api.herokuapp.com/docs/download/tiktok?url=${tk}&apikey=Alphabot`)
sticLoad(from)
ttv = await getBuffer(ini.result.nowm)
Fi.sendMessage(from, ttv, video)
break
case 'ttp':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0) return reply(`Text Nya Mana kak? Contoh\n${prefix+command} Lexxy`)
tp = args.join (" ")
sticWait(from)
ttp = await getBuffer(`https://hardianto.xyz/api/ttpcustom?text=${tp}&color=black&apikey=hardianto`)
Fi.sendMessage(from, ttp, sticker)
break
case 'instagram':
case 'igdl':
if (!c) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
break
case 'nuliskiri':
case 'nuliskanan':
case 'foliokiri':
case 'foliokanan':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0) return reply(`Text Nya Mana kak? Contoh\n${prefix+command} Lexxy`)
mgr = args.join (" ")
sticWait(from)
buff = await getBuffer(`https://hardianto.xyz/api/${command}?text=${mgr}&apikey=hardianto`)
Fi.sendMessage(from, buff, image, { quoted: flexx, caption: 'Nih Bro Hasil nya' })
break
case 'readall':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
var chats = await Fi.chats.all()
chats.map( async ({ jid }) => {
await Fi.chatRead(jid)
})
var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
await Fi.sendMessage(from, teks, text, {quoted: mek})
console.log(chats.length)
break
case 'gura':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Lexxy`)
bo = args.join(" ")
sticWait(from)
bf = await getBuffer(`https://ziy.herokuapp.com/api/Gura?nama=${bo}&apikey=xZiyy`)
Fi.sendMessage(from, bf, image, { quoted: flexx, caption: 'Logo By EyYoMan Official' })
break
case 'kaneki':
case 'rem':
case 'lolimaker':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Lexxy`)
bo = args.join(" ")
sticWait(from)
bf = await getBuffer(`https://ziy.herokuapp.com/api/${command}?nama=${bo}&apikey=xZiyy`)
Fi.sendMessage(from, bf, image, { quoted: flexx, caption: 'Logo By EyYoMan Official' })
break
case 'girlneko':
case 'sadboy':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} EyYoMan`)
txt1 = args[0]
txt2 = args[1]
sticWait(from)
bf = await getBuffer(`https://ziy.herokuapp.com/api/${command}?text1=${txt1}&text2=${txt2}&apikey=xZiyy`)
Fi.sendMessage(from, bf, image, { quoted: flexx, caption: 'Logo By EyYoMan Official' })
break
case 'menew':
reply2('Beban Baru ini Kita Bully Bareng Yok')
break
case 'benew':
reply2('Kasian Dia Baperan Kan Jadi Keluar 🗿\nDalem Hati Be Like:\nMasih Banyak Beban Baru')
break
case 'donasi':
dno = fs.readFileSync('./gambar/qris.jpg')
dns =`${(ind.donasi())}`
Fi.sendMessage(from, dno, image, { quoted: flexx, caption: dns })
break
case 'logopornhub':
    if (args.length === 1) return reply( `Kirim perintah *${prefix}logopornhub [ |Teks1|Teks2 ]*,\n\n contoh : *${prefix}logopornhub |Dimas| HUB*`, id)
    argz = body.trim().split('|')
    if (argz.length >= 2) {
        reply( `sabar brok eug proses dolo....`, id)
        const lpornhub = argz[1]
        const lpornhub2 = argz[2]   
        if (lpornhub > 10) return reply( '*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
        if (lpornhub2 > 10) return reply( '*Teks2 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
        sendFileFromUrl(`https://docs-jojo.herokuapp.com/api/phblogo?text1=${lpornhub}&text2=${lpornhub2}`)
    } else {
        await reply( `Wrong Format!\n[❗] Kirim perintah *${prefix}logopornhub [ |Teks1| Teks2 ]*,\n\n contoh : *${prefix}logopornhub |Dimas| HUB*`, id)
    }
    break
case 'coolteks':
case 'cooltext':
    if (args.length == 0) return reply(`Untuk membuat teks keren CoolText pada gambar, gunakan ${prefix}cooltext teks\n\nContoh: ${prefix}cooltext arugaz`, id)
    rugaapi.cooltext(args[0])
.then(async(res) => {
await sendFileFromUrl( `${res.link}`, '', `${res.text}`, id)
})
break
case 'qrcode':
    if (args.length !== 2) return reply(`Untuk menggunakan fitur qrcode, ketik :\n${prefix}qrcode [kata/url] [size]\n\nContoh: ${prefix}qrcode https://google.com 300\n\n*Size minimal 100 & maksimal 500*`, id)
    reply(`wait...`, id);
    qrcode(args[0], args[1]).then(async (res) => {
    await Fi.sendMessage(from, res, id)
    })
  break	
case 'infosurah':
            if (args.length == 0) return reply(`*_${prefix}infosurah <nama surah>_*\nMenampilkan informasi lengkap mengenai surah tertentu. Contoh penggunan: ${prefix}infosurah al-baqarah`, mek.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                var pesan = ""
                pesan = pesan + "Nama : "+ data[idx].name.transliteration.id + "\n" + "Asma : " +data[idx].name.short+"\n"+"Arti : "+data[idx].name.translation.id+"\n"+"Jumlah ayat : "+data[idx].NumberOfVerses+"\n"+"Nomor surah : "+data[idx].Number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"Keterangan : "+data[idx].tafsir.id
                reply(pesan, mek.id)
              break
        case 'surah':
            if (args.length == 0) return reply(`*_${prefix}surah <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1\n\n*_${prefix}surah <nama surah> <ayat> en/id_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Inggris / Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1 id`, id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = data[idx].Number
                if(!isNaN(nmr)) {
                  var responseh2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
                  var {data} = responseh2.data
                  var last = function last(array, n) {
                    if (array == null) return void 0;
                    if (n == null) return array[array.length - 1];
                    return array.slice(Math.max(array.length - n, 0));
                  };
                  bhs = last(args)
                  pesan = ""
                  pesan = pesan + data.text.arab + "\n\n"
                  if(bhs == "en") {
                    pesan = pesan + data.translation.en
                  } else {
                    pesan = pesan + data.translation.id
                  }
                  pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+args[1]+")"
                  reply(pesan, mek.id)
                }
              break
case 'listsurah':
    try {
        axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
        .then((response) => {
            let hehex = '╔══✪〘 List Surah 〙✪══\n'
            for (let i = 0; i < response.data.data.length; i++) {
                hehex += '╠➥ '
                hehex += response.data.data[i].name.transliteration.id.toLowerCase() + '\n'
                    }
                hehex += '╚═〘 *A R U G A  B O T* 〙'
            reply(hehex, id)
        })
    } catch(err) {
    reply( err, id)
    }
    break
    case 'surah':
        if (args.length == 0) return reply( `*_${prefix}surah <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1\n\n*_${prefix}surah <nama surah> <ayat> en/id_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Inggris / Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1 id`, message.id)
            var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
            var { data } = responseh.data
            var idx = data.findIndex(function(post, index) {
              if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                return true;
            });
            nmr = data[idx].Number
            if(!isNaN(nmr)) {
              var responseh2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
              var {data} = responseh2.data
              var last = function last(array, n) {
                if (array == null) return void 0;
                if (n == null) return array[array.length - 1];
                return array.slice(Math.max(array.length - n, 0));
              };
              bhs = last(args)
              pesan = ""
              pesan = pesan + data.text.arab + "\n\n"
              if(bhs == "en") {
                pesan = pesan + data.translation.en
              } else {
                pesan = pesan + data.translation.id
              }
              pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+args[1]+")"
              reply( pesan, message.id)
            }
          break
    case 'tafsir':
        if (args.length == 0) return reply( `*_${prefix}tafsir <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahan dan tafsirnya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}tafsir al-baqarah 1`, message.id)
            var responsh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
            var {data} = responsh.data
            var idx = data.findIndex(function(post, index) {
              if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                return true;
            });
            nmr = data[idx].Number
            if(!isNaN(nmr)) {
              var responsih = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
              var {data} = responsih.data
              pesan = ""
              pesan = pesan + "Tafsir Q.S. "+data.surah.name.transliteration.id+":"+args[1]+"\n\n"
              pesan = pesan + data.text.arab + "\n\n"
              pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
              reply( pesan, message.id)
          }
          break
    case 'alaudio':
        if (args.length == 0) return reply( `*_${prefix}ALaudio <nama surah>_*\nMenampilkan tautan dari audio surah tertentu. Contoh penggunaan : ${prefix}ALaudio al-fatihah\n\n*_${prefix}ALaudio <nama surah> <ayat>_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1\n\n*_${prefix}ALaudio <nama surah> <ayat> en_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Inggris. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1 en`, message.id)
          ayat = "ayat"
          bhs = ""
            var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
            var surah = responseh.data
            var idx = surah.data.findIndex(function(post, index) {
              if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                return true;
            });
            nmr = surah.data[idx].Number
            if(!isNaN(nmr)) {
              if(args.length > 2) {
                ayat = args[1]
              }
              if (args.length == 2) {
                var last = function last(array, n) {
                  if (array == null) return void 0;
                  if (n == null) return array[array.length - 1];
                  return array.slice(Math.max(array.length - n, 0));
                };
                ayat = last(args)
              } 
              pesan = ""
              if(isNaN(ayat)) {
                var responsih2 = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/'+nmr+'.json')
                var {name, name_translations, number_of_ayah, number_of_surah,  recitations} = responsih2.data
                pesan = pesan + "Audio Quran Surah ke-"+number_of_surah+" "+name+" ("+name_translations.ar+") "+ "dengan jumlah "+ number_of_ayah+" ayat\n"
                pesan = pesan + "Dilantunkan oleh "+recitations[0].name+" : "+recitations[0].audio_url+"\n"
                pesan = pesan + "Dilantunkan oleh "+recitations[1].name+" : "+recitations[1].audio_url+"\n"
                pesan = pesan + "Dilantunkan oleh "+recitations[2].name+" : "+recitations[2].audio_url+"\n"
                reply( pesan, message.id)
              } else {
                var responsih2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+ayat)
                var {data} = responsih2.data
                var last = function last(array, n) {
                  if (array == null) return void 0;
                  if (n == null) return array[array.length - 1];
                  return array.slice(Math.max(array.length - n, 0));
                };
                bhs = last(args)
                pesan = ""
                pesan = pesan + data.text.arab + "\n\n"
                if(bhs == "en") {
                  pesan = pesan + data.translation.en
                } else {
                  pesan = pesan + data.translation.id
                }
                pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+args[1]+")"
                await aruga.sendFileFromUrl(from, data.audio.secondary[0])
                await reply( pesan, message.id)
              }
          }
          break
    case 'jsolat':
        if (args.length == 0) return reply( `Untuk melihat jadwal solat dari setiap daerah yang ada\nketik: ${prefix}jsolat [daerah]\n\nuntuk list daerah yang ada\nketik: ${prefix}daerah`, id)
        const solatx = body.slice(8)
        const solatj = await rugaapi.jadwaldaerah(solatx)
        await reply( solatj, id)
        .catch(() => {
            reply( 'Pastikan daerah kamu ada di list ya!', id)
        })
        break
    case 'daerah':
        const daerahq = await rugaapi.daerah()
        await reply( daerahq, id)
        .catch(() => {
          reply( 'Ada yang Error!', id)
        })
        break
case 'speed':
case 'ping':
    	const timestampi = speed();
			const latensyi = speed() - timestampi
			reply(`Speed: ${latensyi.toFixed(4)} Second`)
			break
			case 'return':
        if (!isOwner) return sticOwner(from)
			  return Fi.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
        if (err) return Fi.sendMessage(from, `root @dcode-denpa:~ ${err}`, text, { quoted: mek })
        break
    case 'lirik':
      if (args.length < 1) return reply('Judulnya?')
      sticWait(from)
      teks = body.slice(7)
      lirikLagu(teks).then((res) => {
      let lirik = `${res[0].result}`
      reply(lirik)
      })
      break
        case 'kalkulator':
                if (args.length == 0) return reply( `Contoh Penggunaan : .kalkulator 2 + 2\nGunakan Operasi Matematika Seperti +=/*`, id)
                 var mtk = body.slice(12)
                 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
                 reply(teks)
                 break
                 case 'translate':
                  var ini = body.slice(11)
                  if (!q.includes('|')) return reply('cara translate !translate kodebahasa|kata" contoh : !translate id|good morning jika kalian tidak tau kode bahasa nya tinggal ketik !kodebahasa') 
                    var bahasa = ini.split("|")[0];
                    var ke = ini.split("|")[1];
                  translate(ke, {to: bahasa}).then(res => {
              const ininy = `teks = bahasa \nterjemahkan = ${res.text} \nkodebahasa teks = ${res.from.language.iso} `
              reply(ininy) 
              //=> 这是Google翻译
              //=> en
          }).catch(err => {
              console.error(err);
          });
          break                 
      
case 'hidetag':   
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
var value = body.slice(9)
var group = await Fi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
Fi.sendMessage(from, options, text)
break
case 'demote':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `*jabatan kamu di copot*🏃 :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
Fi.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
Fi.groupDemoteAdmin(from, mentioned)
}
break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
if (args.length ==0)return reply(`Nama hero nya apa? contoh\n${prefix+command} nana`)
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'promote':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴??𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
Fi.groupMakeAdmin(from, mentioned)
} else {
mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
Fi.groupMakeAdmin(from, mentioned)
}
break
case 'bisakah':
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
Fi.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: flexx })
break
case 'kapankah':
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
Fi.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: flexx })
break
case 'apakah':
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
const kah = apa[Math.floor(Math.random() * apa.length)]
Fi.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: flexx })
break
case 'rate':
rate = body.slice(1)
const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
Fi.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: flexx })
break
case 'randombokep':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
data = fs.readFileSync('./lib/18.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randBokep = await getBuffer(randKey.image)
reply(mess.wait)
randTeks = randKey.teks
Fi.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
break
case 'tiktoknowm':
if (!q) return reply('Linknya?')
if (!q.includes('tiktok.com')) return reply('Error')
reply(mess.wait)
anu = await TiktokDownloader(`${q}`)
.then((data) => { sendMediaURL(from, data.result.nowatermark) })
.catch((err) => { reply(String(err)) })
break
case 'delete':
case 'del':
case 'd':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
Fi.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'tagall':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'add':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Fi.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'ff':
case 'diamondff':
ffg = fs.readFileSync('./gambar/logo/FF.png')
ff =`${(ind.diamondFF())}`
ff2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, ff, ff2, ffg, but)
break
case 'pyment':
pyg = fs.readFileSync('./gambar/qris.jpg')
py =`${(ind.paymentstore())}`
Fi.sendMessage(from, pyg, image, { quoted: mek, caption: py })
break
case 'hago':
case 'diamondhago':
hgg = fs.readFileSync('./gambar/logo/HAGO.png')
hg =`${(ind.hagostore())}`
hg2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, hg, hg2, hgg, but)
break
case 'pubg':
case 'ucpubg':
pbg = fs.readFileSync('./gambar/logo/PUBG.png')
pb =`${(ind.pubgstore())}`
pb2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, pb, pb2, pbg, but)
break
case 'codm':
case 'cpcodm':
cog = fs.readFileSync('./gambar/logo/COD.png')
co =`${(ind.codmstore())}`
co2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, co, co2, cog, but)
break
case 'point':
case 'pointblank':
pog = fs.readFileSync('./gambar/logo/POINT.png')
po =`${(ind.cbcashstore())}`
po2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, po, po2, pog, but)
break
case 'garena':
case 'garenashell':
gmg = fs.readFileSync('./gambar/logo/GARENA.png')
gm =`${(ind.garenashell())}`
gm2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, gm, gm2, gmg, but)
break
case 'ml':
case 'diamondml':
mlg = fs.readFileSync('./gambar/logo/ML.png')
ml =`${(ind.diamondML())}`
ml2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, ml, ml2, mlg, but)
break
case 'chip':
case 'higgsdomino':
chg = fs.readFileSync('./gambar/logo/CHIP.png')
ch =`${(ind.chipstore())}`
ch2 =`Silahkan Cek Payment Di Bawah`
but = [
{ buttonId: `${prefix}pyment`, buttonText: { displayText: '𝙋𝘼𝙔𝙈𝙀𝙉𝙏' }, type: 1 }
]
sendButLoc(from, ch, ch2, chg, but)
break
case 'kick':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${mentioned[0].split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Fi.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
Fi.groupRemove(from, mentioned)
}
break
case 'leave':
if (!isGroup) return sticGroup(from)
if (isGroupAdmins || isOwner) {
Fi.groupLeave(from)
} else {
sticAdmin(from)
}
break
case 'truth':
td = fs.readFileSync('./gambar/tedy.jpg')
bt = await fetchJson(`https://api-yogipw.herokuapp.com/api/fun/truth`)
bt1 =`*${bt.truth}*`
bt2 =`Klik Di Next Untuk Melanjutkan`
but = [
{ buttonId: `${prefix + command}`, buttonText: { displayText: '️next' }, type: 1 }
]
sendButLoc(from, bt1, bt2, td, but)
break
case 'dare':
td = fs.readFileSync('./gambar/tedy.jpg')
bt = await fetchJson(`https://api-yogipw.herokuapp.com/api/fun/dare`)
dr1 =`*${bt.dare}*`
dr2 =`Klik Di Next Untuk Melanjutkan`
but = [
{ buttonId: `${prefix + command}`, buttonText: { displayText: '️next' }, type: 1 }
]
sendButLoc(from, dr1, dr2, td, but)
break
case 'attp':
if (args.length ==0)return (`Text nya mana cuy Contoh\n${prefix + command} Lexxy`)
attp = args.join(" ")
sticLoad(from)
atp = await getBuffer(`https://hardianto.xyz/api/maker/attp?text=${attp}&apikey=hardianto`)
Fi.sendMessage(from, atp, sticker)
break
case 'setname':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					Fi.groupUpdateSubject(from, `${body.slice(9)}`)
					Fi.sendMessage(from, '「  SUKSES  」Mengubah Nama Grup', text, { quoted: fdoc })
					break 
case 'setdesc':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					Fi.groupUpdateDescription(from, `${body.slice(9)}`)
					Fi.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fdoc })
					break   
case 'spam':
if (!isGroup) return reply(lang.onlygc())
				if (!isGroupAdmins) return reply(lang.onlygcAdmin())
				if (args.length < 1) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
                argzi = body.trim().split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					Fi.sendMessage(from, argzi[0], MessageType.text)
				}
					break   
case 'setppgrup': 
case 'setpp':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
media = await Fi.downloadAndSaveMediaMessage(mek)
await Fi.updateProfilePicture(from, media)
reply('*Sukses mengganti icon group*')
break
case 'linkgc':
case 'linkgrup':
case 'linkgroup':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) sticAdmin(from)
if (!isBotGroupAdmins) sticBotAdmin(from)
linkgc = await Fi.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break
case 'listadmin':
if (!isGroup) return sticGroup(from)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'antilink':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (Number(args[0]) === 1) {
if (isAntilink) return reply('Udah aktif')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukses mengaktifkan anti link group di group ini ✔️')
Fi.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
} else if (Number(args[0]) === 0) {
if (!isAntilink) return reply('Mode anti link group sudah disable')
antilinkgrup.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukes menonaktifkan anti link group di group ini ✔️')
} else {
sendButton(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antilink 1`,buttonText: {displayText: `ON`,},type: 1,},
{buttonId: `${prefix}antilink 0`,buttonText: {displayText: `OFF`,},type: 1,},
]
);
}
break;
case 'welcome':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Udah aktif')
welkom.push(from)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
} else if (Number(args[0]) === 0) {
welkom.splice(from, 1)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
} else {
sendButton(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}welcome 1`,buttonText: {displayText: `ON`,},type: 1,},
{buttonId: `${prefix}welcome 0`,buttonText: {displayText: `OFF`,},type: 1,},
]
);
}
break;
case 'toimg':
if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
sticWait(from)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Fi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Yah gagal, coba ulangi ^_^')
buffer = fs.readFileSync(ran)
fakethumb(buffer,'By EyYoMan Official')
fs.unlinkSync(ran)
})
break
case 'searchgrup':
if (!isPremier)return reply(mess.premier)
if (args.length < 1) return reply(`Nama Group? Contohnya\n${prefix + command} jb`)
hx.linkwa(q)
sticWait(from)
.then(result => {
let res = '*「 _LINK WA_ 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
case 'imgsearch':
if (!isPremier)return reply(mess.premier)
if (args.length < 1) return reply('Tolong masukan query!')
let im = await hx.chara(q)
sticWait(from)
let acak = im[Math.floor(Math.random() * im.length)]
let li = await getBuffer(acak)
await Fi.sendMessage(from,li,image,{quoted: mek})
break
case 'ytsearch':
if (!isPremier)return reply(mess.premier)
if (args.length < 1) return reply('Tolong masukan query!')
var srch = args.join('');
sticWait(from)
try {
var aramas = await yts(srch);
} catch {
return await Fi.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Title: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n'
ytresult += '❏ Durasi: ' + video.timestamp + '\n'
ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
});
ytresult += '◩ *SELF-BOT*'
await fakethumb(tbuff,ytresult)
break
case 'nickepep':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=IkyOgiwara`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'katailham':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=IkyOgiwara`)
reply(`*Random Kata Ilham*\n${anu.result}`)
break
case 'katasindiran':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/skak?apikey=IkyOgiwara`)
reply(`*Random Kata Sindiran*\n${anu.result}`)
break
case 'pinterest':
if(!q) return reply(`Namanya? Contohnya\n${prefix + command} naruto`)
let pin = await hx.pinterest(q)
let ac = pin[Math.floor(Math.random() * pin.length)]
let di = await getBuffer(ac)
sticWait(from)
await Fi.sendMessage(from, di, image, { quoted: mek })
break
case 'setreply':
if (!isOwner) return sticOwner(from)
if (args.length ==0)return (`Text Nya Mana? Contoh\n${prefix+command} EyYoMan Official`)
gg = args.join(" ")
fakeyoi = gg
reply(`Succes Mengganti Reply Fake : ${q}`)
break
case 'setsimbol':
if (!isOwner) return sticOwner(from)
if (args.length ==0)return (`Simbol Nya Mana? Contoh\n${prefix+command} •`)
yo = args.join(" ")
simbol = yo
reply(`Succes Mengganti Simbol Fake : ${q}`)
break
case 'setfake':
if (!isOwner) return sticOwner(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await Fi.downloadMediaMessage(boij)
fs.writeFileSync(`./gambar/fake.jpg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}setfake`)
}
break
case 'setthumb':
if (!isOwner) return sticOwner(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await Fi.downloadMediaMessage(boij)
fs.writeFileSync(`./gambar/thumb.jpg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}setthumb`)
}
break
case 'upswteks':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    Fi.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
 case 'getbio':             
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await Fi.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
case 'hacked':
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return sticAdmin(from)
  if (!isBotGroupAdmins) return sticNotAdmin(from)
  if (args.length < 1) return reply('Teksnya?')
  reply('Otw Hack')
    tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
       Fi.updateProfilePicture (from, tessgc)
       await sleep(1000)
    Fi.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
    await sleep(1000)
    Fi.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
    await sleep(1000)
    Fi.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
break

case 'hack':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return sticAdmin(from)
  if (!isBotGroupAdmins) return sticNotAdmin(from)
  sendBug(from)
  Fi.groupUpdateSubject(from, `HACKED BY Fi Bot Assistan`)
    Fi.groupUpdateDescription(from, `_${mek.jid}_`)
 Fi.updateProfilePicture(from, fs.readFileSync('./media/image/thumb.jpg'))
    Fi.sendMessage(from, 'Succes!', text, {quoted: mek})
    await sleep(3000)
    Fi.groupLeave(from)
break
break
                    case 'getname':             
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = Fi.contacts[ambl] != undefined ? Fi.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : Fi.contacts[ambl].notify || Fi.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
				case 'getpict':
				case 'getpic':             
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await Fi.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            Fi.sendMessage(from, pict, image, {quoted: mek})
            break                   
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
    var konti = body.slice(11)
    sticWait(from)
    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	var mediap = await Fi.downloadAndSaveMediaMessage(enmediap)
    const buffer3 = fs.readFileSync(mediap)
    Fi.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
    reply(`Sukses upload video:\n${konti}`)
    break
case 'antidelete':
    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
         if (c === 'on'){
           antidelete = false
                  reply(`Berhasil mengaktifkan antidelete`)
              } else if (c === 'off'){
                  antidelete = true
                  reply(`Berhasil menonaktifkan antidelete`)
              } else if (!c) {
                  anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'antideletee on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'antideletee off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
const buttonMessage = {
  contentText: `${anu}`,
  footerText: '*_guweh_*',
  buttons: buttons,
  headerType: 1
}
await Fi.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: ftrol})
              }
              break
              case 'setprefix':
    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
    if (args.length < 1) return reply(`Contoh ${prefix + command} multi/nopref`)
         if (c === 'multi'){
            multi = true
                  reply(`Berhasil mengubah prefix ke ${c}`)
              } else if (c === 'nopref'){
                  multi = false
                  nopref = true
                  reply(`Berhasil mengubah prefix ke ${c}`)
              } else {
                  multi = false
                  nopref = false
                  prefa = `${c}`
                  reply(`Berhasil mengubah prefix ke ${c}`)
                  }
                  break
case 'caripesan':
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await Fi.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
Fi.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
case 'resep':
    if (args.length == 0) return reply(`Untuk mencari resep makanan\nCaranya ketik: ${prefix}resep [search]\n\ncontoh: ${prefix}resep tahu`, id)
    const cariresep = body.slice(7)
    const hasilresep = await resep(cariresep)
    await reply(hasilresep + '\n\nIni kak resep makanannya..', id)
    .catch(() => {
        reply('Ada yang Error!', id)
    })
    break
case 'memeindo':
case 'darkjokes':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
sticWait(from)
zks = await fetchJson(`https://api.zeks.me/api/${command}?apikey=apivinz`)
anu = zks.result
Fi.sendMessage(from, anu, image, { quoted: mek, caption: `*©Random ${comnand}*` })
break
case 'bneon':
case 'matrix':
case 'breakwall':
case 'dropwater':
case 'lithgtext':
case 'crismes':
case 'tfire':
case 'sandw':
case 'text3dbox':
case 'leavest':
case 'tlight':
case 'nulis':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Text nya mana?')
bp = args.join(" ")
sticWait(from)
zks = await getBuffer(`https://api.zeks.me/api/${command}?apikey=apivinz&text=${bp}`)
Fi.sendMessage(from, zks, image, { quoted: flexx, thumbnail: fs.readFileSync('./gambar/fake.jpg')})
break
case 'blackpink':
case 'neon_light':
case 'gaming':
case 'watercolor':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Text Nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
jojo = await getBuffer(`https://docs-jojo.herokuapp.com/api/${command}?text=${bo}`)
Fi.sendMessage(from, jojo, image, { quoted: flexx, thumbnail: fs.readFileSync('./gambar/fake.jpg')})
break
case 'tes':
if (isBanned)return sticBanned(from)
reply('*STATUS BOT : ONLINE*')
break
case 'cerpen':  
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
reply(anu1)
break 
case 'tongue':  
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `➻ *NIHH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'namaninja':  
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `➻ *NAMA* : ${anu.your_name}\n`
anu1 += `➻ *NINJA* : ${anu.result}\n`
reply(anu1)
break 
case 'fox':
case 'dog':
case 'cat':
case 'panda':
case 'red_panda':
case 'birb':
case 'koala':
case 'meme':
if (isBanned)return sticBanned(from)
sticWait(from)
anu = await fetchJson(`https://some-random-api.ml/img/${command}`)
res = await getBuffer(anu.link)
Fi.sendMessage(from, res, image, {caption: `*©Random ${command}*`, quoted: flexx })
break
case 'estetikpic':
if (isBanned)return sticBanned(from)
sticWait(from)
este = await getBuffer(`https://api.zeks.me/api/estetikpic?apikey=apivinz`)
Fi.sendMessage(from, este, image, { quoted: flexx, caption: `*©Random ${command}*` })
break
case 'playstore':
if (isBanned)return sticBanned(from)
if(!c) return reply('*Mau Cari Aplikasi Apa?*')
let play = await hx.playstore(c)
let store = '\n❉─────────────────────❉\n'
for (let i of play){
store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉\n\n`
}
reply(store)
break
case 'otaku':
    if(!c) return reply('judul animenya?')
     let anime = await hx.otakudesu(c)
     rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
     ram = await getBuffer(anime.img)
     Fi.sendMessage(from,ram,image,{quoted:mek,caption:rem})
     break
case 'komiku':
    //if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)           
			break    
case 'ban':
if (!isOwner) return sticOwner(from)
bnnd = body.slice(5)
ban.push(`${bnnd}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Berhasil Dibanned ✓_`)
break
case 'unban':
if (!isOwner) return sticOwner(from)
bnnd = body.slice(7)
ban.splice(`${bnnd}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Sukses Diunbanned ✓_`)
break
case 'addprem':
if (!isOwner) return sticOwner(from)
prmm = body.slice(9)
prem.push(`${prmm}@s.whatsapp.net`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Add User Premium ✓_`)
break
case 'delprem':
if (!isOwner) return sticOwner(from)
prmm = body.slice(9)
prem.splice(`${prmm}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Delete User Premium ✓_`)
break
case 'mediafire':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
md = fs.readFileSync('./gambar/logo/mdfire.jpg')
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error :v')
sticWait(from)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Data Berhasil Didapatkan!*
▢ Nama : ${res[0].nama}
▢ Ukuran : ${res[0].size}
▢ Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
Fi.sendMessage(from, md, image, {quoted: flexx, caption: result })
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
case 'nekonime':
if (isBanned)return sticBanned(from)
sticWait(from)
ini_res = await fetchJson(`https://docs-jojo.herokuapp.com/api/nekonime`)
get_res = await getBuffer(ini_res.result)
Fi.sendMessage(from, get_res, image, { quoted: flexx, caption: `*©Random ${command}*` })
break
case 'waifu':
if (isBanned)return sticBanned(from)
sticWait(from)
ini_res = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu2`)
get_res = await getBuffer(ini_res.img)
Fi.sendMessage(from, get_res, image, { quoted: flexx, caption: `*©Random ${command}*` })
break
case 'husbu':
if (isBanned)return sticBanned(from)
sticWait(from)
ini_res = await fetchJson(`https://docs-jojo.herokuapp.com/api/husbuando`)
get_res = await getBuffer(ini_res.image)
Fi.sendMessage(from, get_res, image, { quoted: flexx, caption: `*©Random ${command}*` })
break
case 'request':
case 'rq':
if (isBanned)return sticBanned(from)
if (args.length <1 )return reply(`Mau Request Fitur Apa?\nContohnya :\n${prefix + command} antilink`)
const cfrr = body.slice(8)
if (cfrr.length > 300) return Fi.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
var nomor = mek.participant
const ress = `*[ REQUEST FITUR ]*\nNomor : @${sender.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
var options = {
text: ress,
contextInfo: {mentionedJid: [nomor]},
}
Fi.sendMessage('6282279915237@s.whatsapp.net', options, text, {quoted: flexx})
Fi.sendMessage('62857890047322@s.whatsapp.net', options, text, {quoted: flexx})
reply('REQUEST ANDA TELAH SAMPAI KE PENGEMBANG SC, Requests palsu atau main² tidak akan ditanggapi.')
break
case 'report':
if (isBanned)return sticBanned(from)
if (args.length <1 )return reply(`Mau Report Fitur Yg mana?\nContohnya :\n${prefix + command} maker error`)
const cfgg = body.slice(8)
if (cfgg.length > 300) return Fi.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
var nomer = mek.participant
const ross = `*[ REPORT FITUR ]*\nNomor : @${sender.split("@s.whatsapp.net")[0]}\nPesan : ${cfgg}`
var options = {
text: ross,
contextInfo: {mentionedJid: [nomer]},
}
Fi.sendMessage('6282279915237@s.whatsapp.net', options, text, {quoted: flexx})
Fi.sendMessage('62857890047322@s.whatsapp.net', options, text, {quoted: flexx})
reply('REPORT ANDA TELAH SAMPAI KE PENGEMBANG SC, Report palsu atau main² tidak akan ditanggapi.')
break
case 'broadcast':
case 'bc':
if (!isOwner) return sticOwner(from)
if (args.length < 1) return reply('teks?')
anu = await Fi.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await Fi.downloadMediaMessage(encmedia)
for (let _ of anu) {
Fi.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
reply('Sukses broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`)
}
reply('Sukses broadcast')
}
break
case 'waifu':
case 'neko':
case 'blowjob':
case 'trap':
case 'megumin':
case 'awoo':
case 'shinobu':
if (!isPremier)return reply(mess.premier)
sticWait(from)
anu = await fetchJson(`https://waifu.pics/api/nsfw/${command}`)
buffer = await getBuffer(anu.url)
Fi.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./gambar/fake.jpg')})
break
case 'public':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
publik = true
fakeText('*Sukses mengubah mode public*')
break
case 'self':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
publik = false
fakeText('*Sukses mengubah mode self*')
break
case 'sticker':
case 's':
if (isBanned)return sticBanned(from)
sticWait(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Fi.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
Fi.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Fi.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
sticWait(from)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
Fi.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: flexx})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
}
break
case 'ytplay':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Judul nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
gett = await fetchJson(`https://api-yogipw.herokuapp.com/api/yt/playmp3?query=${bo}`)
yt1 =`*Judul :* ${gett.title}\n\n*Author :* ${gett.channel}\n*Dipublikasikan :* ${gett.published}\n*Views :*\n${gett.views}`
yt2 =`Silahkan Pilih Type Media Di Bawah`
ytg = fs.readFileSync('./gambar/logo/ytplay.jpg')
but = [
{ buttonId: `${prefix}ply4 ${args.join(" ")}`, buttonText: { displayText: '𝘷𝘪𝘥𝘦𝘰' }, type: 1 },
{ buttonId: `${prefix}ply3 ${args.join(" ")}`, buttonText: { displayText: '️𝘮𝘶𝘴𝘪𝘬' }, type: 1 }
]
sendButLoc(from, yt1, yt2, ytg, but)
break
case 'ply4':
case 'playmp4':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
bo = args.join(" ")
sticLoad(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/yt/playmp4?query=${bo}`)
p4 = await getBuffer(get.url_video)
Fi.sendMessage(from, p4, video)
break
case 'ply3':
case 'playmp3':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
bo = args.join(" ")
sticLoad(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/yt/playmp3?query=${bo}`)
p3 = await getBuffer(ini.url)
Fi.sendMessage(from, p3, audio)
break
case 'owner':
sendKontak(from, `${owner}`, `${ownerName}`)
break
case 'ytmp4':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/download/ytmp4?url=${ini_link}`)
anu = ini.result
ini_txt =`*Judul* : ${anu.title}\n*Author* : ${anu.channel}\n*Publis* : ${anu.published}\n*Views* : ${anu.views}`
yt4 = fs.readFileSync('./gambar/logo/ytdown.jpg')
Fi.sendMessage(from, yt4, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(anu.url)
sticLoad(from)
Fi.sendMessage(from, res, video)
break
case 'ytmp3':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/download/ytmp3?url=${ini_link}`)
get = ini.result
ini_txt =`*Judul* : ${get.title}\n*Author* : ${get.channel}\n*Publis* : ${get.published}\n*Views* : ${get.views}`
yt3 = fs.readFileSync('./gambar/logo/ytdown.jpg')
Fi.sendMessage(from, yt3, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url)
sticLoad(from)
Fi.sendMessage(from, res, audio)
break
case 'kpop':
    if (args.length == 0) return reply( `Untuk menggunakan ${prefix}kpop\nSilahkan ketik: ${prefix}kpop [query]\nContoh: ${prefix}kpop bts\n\nquery yang tersedia:\nblackpink, exo, bts`, id)
    if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
        fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
        .then(res => res.text())
        .then(body => {
            let randomkpop = body.split('\n')
            let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
            aruga.sendFileFromUrl(from, randomkpopx, '', 'Nee..', id)
        })
        .catch(() => {
            reply( 'Ada yang Error!', id)
        })
    } else {
        reply( `Maaf query tidak tersedia. Silahkan ketik ${prefix}kpop untuk melihat list query`)
    }
    break
case 'bts':
reply(mek.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/bts?apikey=${lolkey}`)
sendButImg(from, 'nihh tod', 'Gk usah bnyk bacot', anu, [
{buttonId: `${prefix + command}`, buttonText: {displayText: `NEXT CUK`, }, type: 1, },
            ]); 
break
case 'exo':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/exo?apikey=${lolkey}`)
sendButImg(from, 'nihh tod', 'Gk usah bnyk bacot', anu, [
{buttonId: `${prefix + command}`, buttonText: {displayText: `NEXT CUK`, }, type: 1, },
            ]); 
break
case 'elf':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/elf?apikey=${lolkey}`)
sendButImg(from, 'nihh tod', 'Gk usah bnyk bacot', anu, [
{buttonId: `${prefix + command}`, buttonText: {displayText: `NEXT CUK`, }, type: 1, },
            ]); 
break
case 'infobot':
case 'info':
reply("Bot Nya Masih Beta Test Ya")
break
case 'github':
reply("https://github.com/AdikaRafi")
break
case "closegc": 
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
Fi.groupSettingChange(from, GroupSettingChange.messageSend, true);
break; 
case "opengc":
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
Fi.groupSettingChange(from, GroupSettingChange.messageSend, false);
break;

//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━\\
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return Fi.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
}
}




    
