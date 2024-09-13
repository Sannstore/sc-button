/**
   * Create By Anantha 
   * Contact Me on wa.me/6285174667722
   * Follow Instagram me @
   * Address me Bali, Gianyar, Sukawati 
**/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')

const axios = require('axios')
const FileType = require('file-type')
const fetch = require('node-fetch')
const crypto = require('crypto')
const fs = require('fs')
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const os = require('os');
const { exec } = require("child_process");
const speed = require('performance-now');
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone');
const { clockString, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const jam = moment.tz('asia/makassar').format('HH:mm:ss')
const ms = toMs = require('ms');
const { color, bgcolor } = require('./lib/color')

const { jadibot, conns } = require('./jadibot')   
let antilink = JSON.parse(fs.readFileSync('./SETTING2/DB/antilink.json'))
let http = require('http')
            http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
            resp.on('data', function(ip) {
                (global.ipserver = ip);
            })
          })

module.exports = AnanthaGanz = async (AnanthaGanz, m, chatUpdate, store) => {
try {
        var body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);
        var budy = (typeof m.text == 'string' ? m.text : '')
        global.prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
                global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        var args = body.trim().split(/ +/).slice(1)
        args = args.concat(['','','','','',''])
        const pushname = m.pushName || "No Name"
        const botNumber = global.botNumber
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
         
        const dengan_nolv = sender.split('@')[0].replace('62', '0');
        const isOwner = [`${owner}@s.whatsapp.net`] == sender ? true : [`${owner}@s.whatsapp.net`].includes(sender) ? true : false
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ").trim()
        const fatkuns = (m.quoted || m)
       const quoted = (
       fatkuns.mtype == 'buttonsMessage'
      ) ? fatkuns[Object.keys(fatkuns)[1]] : (
    fatkuns.mtype == 'templateMessage' && fatkuns.hydratedTemplate && Object.keys(fatkuns.hydratedTemplate).length > 1
) ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (
    fatkuns.mtype == 'product'
) ? fatkuns[Object.keys(fatkuns)[0]] : (
    m.quoted ? m.quoted : m
);
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': "", thumbnail: "",sendEphemeral: true}}}
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)         
        const from = m.key.remoteJid    
        
        const groupMetadata = m.isGroup ? await AnanthaGanz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	    
   	    const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]   
        const isNumber = x => typeof x === 'number' && !isNaN(x)
        
       const reply = (teks) => {AnanthaGanz.sendMessage(from, { text: teks }, { quoted: m })}
       if (m.message) {
      AnanthaGanz.readMessages([m.key]);
      
      const waktuWITA = moment().tz('Asia/Makassar').format('YYYY-MM-DD HH:mm:ss');
      console.log(
        chalk.black(chalk.bgWhite('[ PESAN ]')),
        chalk.black(chalk.bgGreen(waktuWITA)),
        chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' +
        chalk.magenta('=> Dari'),
        chalk.green(pushname),
        chalk.yellow(dengan_nolv) + '\n' +
        chalk.blueBright('=> Di'),
        chalk.green(m.isGroup ? pushname : 'Private Chat', dengan_nolv)
       );
      }
        

const fs = require('fs');
const getDepoData = () => {
    return JSON.parse(fs.readFileSync(`./SETTING2/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`));
};
const checkUserData = (userId, property) => {
    const deppo = getDepoData();
    const userData = Object.values(deppo).find(data => data.id === userId);
    return userData ? userData[property] : null;
};
const checkIdDepo = (userId) => {
    return !!checkUserData(userId, 'id');
};
const checkRefDepo = (userId) => {
    return checkUserData(userId, 'ref');
};
const checkStsDepo = (userId) => {
    return checkUserData(userId, 'status');
};
const checkIdBuy = (userId) => {
    return !!checkUserData(userId, 'id');
};
const checkRefBuy = (userId) => {
    return checkUserData(userId, 'ref');
};
if (command) {
}
function formatmoney(amount, options = {}) {
  const {
    currency = "IDR",
    locale = "id",
    minimumFractionDigits = 0,
    maximumFractionDigits = 0,
    useSymbol = true
  } = options;

  const formattedAmount = amount.toLocaleString(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return useSymbol ? formattedAmount : formattedAmount.replace(/[^\d.,]/g, '');
}
async function loading() {
    const frames = ["Z", "ZA", "ZAN", "ZANN", "ZANNS", "ZANNST", "ZANNSTO", "ZANNSTOR", "ZANNSTORE"]; // Simbol untuk animasi loading
    const loadingFrames = ["□", "▢", "▣", "▤", "▥", "▦", "▧", "▨", "▩"]; // Simbol untuk loading frames

    let message = await AnanthaGanz.sendMessage(from, { text: `${frames[0]}. ${loadingFrames[0]}` }); // Menambahkan titik dan loading frame pada teks pertama
    let i = 1;
    let j = 1;

    const interval = setInterval(async () => {
        if (i === frames.length) {
            clearInterval(interval);
            await AnanthaGanz.sendMessage(from, { text: `ZANNSTORE`, edit: message.key });
        } else {
            await AnanthaGanz.sendMessage(from, { text: `${frames[i]}. ${loadingFrames[j]}`, edit: message.key }); // Menambahkan titik dan loading frame pada setiap frame
            i++;
            j = (j + 1) % loadingFrames.length; // Pilih frame berikutnya dari loading frames
        }
    }, 500); // Mengubah interval menjadi 500 ms
    // Simulasi proses loading (gantilah dengan proses nyata Anda)
    await new Promise(resolve => setTimeout(resolve, 5000)); // Menunggu teks "ZANNSTORE." terisi penuh
}
const sendContact = (jid, numbers, name, quoted, mn) => {
let number = numbers.replace(/[^0-9]/g, '')
const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:' + name + '\n'
+ 'ORG:;\n'
+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
+ 'END:VCARD'
return AnanthaGanz.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
}

function generateRandomString(length) {
  const chars = '1234567890';
  let result = '';
  const randomBytes = crypto.randomBytes(length);

  for (let i = 0; i < length; i++) {
    const byte = randomBytes[i] % chars.length;
    result += chars.charAt(byte);
  }

  return result.toLowerCase();
}

function generateRandomDateCode() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const randomCode = generateRandomString(4); // Ubah panjang kode acak sesuai kebutuhan
  return `${date}${month}${randomCode}`;
}
function generateRandomString1(length) {
  const chars = '11223344556677889911100';
  let result = '';
  const randomBytes = crypto.randomBytes(length);

  for (let i = 0; i < length; i++) {
    const byte = randomBytes[i] % chars.length;
    result += chars.charAt(byte);
  }

  return result.toLowerCase();
}
    const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? AnanthaGanz.sendMessage(from, {text: teks.trim(), jpegThumbnail: global.AnanthaGanzmenu}, text, { sendEphemeral: true, contextInfo: { mentions: memberr } }) : AnanthaGanz.sendMessage(from, {text: teks.trim(), jpegThumbnail: global.AnanthaGanzmenu}, text, { sendEphemeral: true, quoted: m, contextInfo: { mentions: memberr } })
}
    
const randomPay = generateRandomString(4);
const pascarandom = generateRandomString(4);
const angkaString = generateRandomString1(3);
const erg = generateRandomString(2);
function boolToString(value) {
  return value ? 'iyah' : 'tidak';
}

const formatp = sizeFormatter({
  std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})

const isUrl = (url) => {
  return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

const jsonformat = (string) => {
  return JSON.stringify(string, null, 2)
}

// Berfungsi Untuk Hit Api & Mengirim Data Headers
const fetchJson = async (url, options) => {
  try {
      options ? options : {}
      const res = await axios({
          method: 'GET',
          url: url,
          headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
          },
          ...options
      })
      return res.data
  } catch (err) {
      return err
  }
}
if(m.mtype === "interactiveResponseMessage"){
            console.log("interactiveResponseMessage Detected!")   
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return AnanthaGanz.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }

        
let ananthaa = `${owner}@s.whatsapp.net`
let dbAtl = JSON.parse(fs.readFileSync('./SETTING2/DB/all_prepaid.json'))
let aa = JSON.parse(fs.readFileSync('./SETTING2/DB/dataPelanggan.json'))
const daftar = () => {
m.reply(`You are not registered yet`)
}
let user = JSON.parse(fs.readFileSync('./SETTING2/DB/dataPelanggan.json'))
const cek = (satu, dua) => { 
let x1 = false
Object.keys(user).forEach((i) => {
if (user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return user[x1].id }
if (satu == "product_name"){ return user[x1].product_name }
if (satu == "price"){ return user[x1].price }
if (satu == "saldo"){ return user[x1].saldo }
if (satu == "tanggal_deposit"){ return user[x1].tanggal_deposit }    
if (satu == "deposit"){ return user[x1].deposit }
if (satu == "reff_deposit"){ return user[x1].reff_deposit }
if (satu == "tujuan"){ return user[x1].tujuan }   
if (satu == "reff"){ return user[x1].reff }   
if (satu == "desc"){ return user[x1].desc }
if (satu == "status"){ return user[x1].status }    
if (satu == "buyer_sku_code"){ return user[x1].buyer_sku_code }
if (satu == "email"){ return user[x1].email }
if (satu == "verfiyemail"){ return user[x1].verfiyemail }
if (satu == "level"){ return user[x1].level }
if (satu == "desc_prabayar"){ return user[x1].desc_prabayar }
if (satu == "syarat"){ return user[x1].syarat }
if (satu == "layanan"){ return user[x1].layanan }
if (satu == "verificationCode"){ return user[x1].verificationCode }
if (satu == "cekVerify"){ return user[x1].cekVerify }
if (satu == "wilayah"){ return user[x1].wilayah }
if (satu == "waktu"){ return user[x1].waktu }
if (satu == "AtlaticKey"){ return user[x1].AtlaticKey }
if (satu == "APInick"){ return user[x1].APInick }
if (satu == "profit"){ return user[x1].profit }
}
if (x1 == false) { return null } 
}
let sett = (satu, dua, tiga) => { 
Object.keys(user).forEach((i) => {
if (user[i].id == dua){
if (satu == "+saldo")
{ user[i].saldo += tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "-saldo"){
user[i].saldo -= tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "price"){ user[i].price = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "email"){ user[i].email = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "tanggal_trx"){ user[i].tanggal_trx = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}    
if (satu == "tanggal_deposit"){ user[i].tanggal_deposit = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))} 
 if (satu == "status"){ user[i].status = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "product_name"){ user[i].product_name = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "reff"){ user[i].reff = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "deposit"){ user[i].deposit = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "reff_deposit"){ user[i].reff_deposit = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "buyer_sku_code"){ user[i].buyer_sku_code = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "tujuan"){ user[i].tujuan = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "desc"){ user[i].desc = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "verfiyemail"){ user[i].verfiyemail = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "level"){ user[i].level = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "desc_prabayar"){ user[i].desc_prabayar = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "syarat"){ user[i].syarat = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "layanan"){ user[i].layanan = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "verificationCode"){ user[i].verificationCode = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "cekVerify"){ user[i].cekVerify = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "wilayah"){ user[i].wilayah = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "waktu"){ user[i].waktu = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "AtlaticKey"){ user[i].AtlaticKey = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "APInick"){ user[i].APInick = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "profit"){ user[i].profit = tiga
fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user))}
}})
}
if (cek("id", m.sender) == null) {
    if (m.sender == ananthaa) { // Ganti "id_pemilik" dengan ID pemilik yang valid
        user.push({
            id: m.sender,
            product_name: "",
            tujuan: "",
            price: 0,
            email: "Belum Verifikasi Email",
            saldo: 0,
            reff: "",
            buyer_sku_code: "",
            status: true,
            desc: "",
            deposit: "",
            syarat: true,
            reff_deposit: true,
            tanggal_deposit: "",
            desc_prabayar: "",
            verfiyemail: true,
            cekVerify: true,
            verificationCode: "",
            wilayah: "Makassar",
            waktu: true,
            level: "Reseller Z", // Jika pemilik, set level menjadi "Collector Z"
            layanan: "",
            AtlaticKey: "",
            profit: ""
        });
    } else {
        user.push({
            id: m.sender,
            product_name: "",
            tujuan: "",
            price: 0,
            email: "Belum Verifikasi Email",
            saldo: 0,
            reff: "",
            buyer_sku_code: "",
            status: true,
            desc: "",
            deposit: "",
            syarat: true,
            reff_deposit: true,
            tanggal_deposit: "",
            desc_prabayar: "",
            verfiyemail: true,
            cekVerify: true,
            verificationCode: "",
            wilayah: "Makassar",
            waktu: true,
            level: "", // Jika bukan pemilik, set level menjadi "Jagoan Z"
            layanan: ""
        });
    }

    // Simpan data ke file
    fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user));

    // Pesan untuk pengguna baru
    let te = `Yo, ${m.pushName}! Akun Kamu Udah Dibuatin, Tinggal Kamu Melakukan Verifikasi aja untuk lanjutin :)\n\n`;
let msg = generateWAMessageFromContent(from, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `${toko}`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: te,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        
                  
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"SYARAT & KETENTUAN KAMI","id":".syarat"}` 
                        },
                                               
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "HUBUNGI CS T-Pedia",
                                "url": "https://wa.me/${owner}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                })
            })
        }
    }
}, {});

await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
}, {quoted: m});
}

if (command) {
AnanthaGanz.readMessages([m.key]) 
}
let id = cek("id", m.sender);
const dengan_nol = id.replace('@s.whatsapp.net', '').replace('62', '0');

const waktuzone = cek("wilayah", m.sender); // Ganti dengan zona waktu yang diinginkan
const hariBahasa = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const bulanBahasa = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

const harijani = hariBahasa[moment.tz(waktuzone).format('d')];
const tanggaljani = moment.tz(waktuzone).format('D');
const bulanjani = bulanBahasa[moment.tz(waktuzone).format('M') - 1];
const tahunjani = moment.tz(waktuzone).format('YYYY');
const hasiltgl = `${harijani}, ${tanggaljani} ${bulanjani} ${tahunjani}`;

global.AnanthaCEK = cek("APInick", ananthaa);
global.AtlaticKey = cek("AtlaticKey", ananthaa);


const nodemailer = require('nodemailer');
function cancelPay() {
        var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'api_key': global.AtlaticKey,
  'id': `${cek("deposit", m.sender)}`
});
var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://atlantich2h.com/deposit/cancel',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
sett("reff_deposit", m.sender, true)
  console.log(JSON.stringify(response.data));
  
})
.catch(function (error) {
  console.log(error);
});

        }
function sendConfirmationEmail(email, code) {
    // Simpan kode konfirmasi bersama dengan alamat email pengguna
let dia = cek("id", m.sender)
    // Konfigurasi transporter untuk Gmail SMTP
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${global.emailNotif}`,
            pass: `${pwNotif}`
        }
    });

    // Siapkan email yang akan dikirim
    let mailOptions = {
        from: `${global.emailNotif}`,
        to: email,
        subject: `Code Verifikasi! ${footer}`,
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verifikasi Akun Kamu</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            text-align: center;
            max-width: 600px;
            padding: 40px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        h2 {
            color: #333333;
        }

        p {
            color: #666666;
            margin-bottom: 20px;
        }

        .btn {
            display: inline-block;
            background-color: #007bff;
            color: #ffffff;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
            cursor: pointer;
        }

        .btn:hover {
            background-color: #0056b3;
        }

        .powered {
            margin-top: 20px;
            font-size: 12px;
            color: #999999;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>T-Pedia - PT REVOLUSI DIGITAL BANGSA</h2>
        <p>Mau Cepet Gunain Fitur kami? Verifikasi dulu ya cukup klik tombol di bawah:</p>
        <a href="https://api.whatsapp.com/send?phone=${botNumber}&text=Registrasi%20${code}" class="btn">Confirm Register</a>
        <p class="powered">Powered by ${footer}</p>
    </div>
</body>
</html>`
    };
sett("verificationCode", dia, `${code}`)
    // Kirim email
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Berhasil Mengirim Ke Email : ' + email);
        }
    });
}
function sendEmail() {
    // Konfigurasi transporter untuk Gmail SMTP
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${global.emailNotif}`,
            pass: `${pwNotif}`
        }
    });

    // Siapkan email yang akan dikirim
    let mailOptions = {
    from: `${global.emailNotif}`,
    to: `${cek("email", m.sender)}`,
    subject: `Yeyy! Makasih ya udah join`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hello</title>
<style>
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
    }
    .container {
        max-width: 600px;
        margin: 50px auto;
        background-color: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }
  .header {
  background: #ff8832;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid rgb(255, 140, 0);
}
    .content {
        padding: 20px;
    }
    .content p {
        margin-bottom: 20px;
        line-height: 1.6;
        color: #444444;
    }
    .button-container {
        text-align: left;
        margin-top: 30px;
        position: fixed;
        bottom: 10px;
        left: 10px;
    }
    .button {
        display: inline-block;
        text-decoration: none;
        padding: 10px 20px;
        background-color: #FF8C00;
        color: #ffffff;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        margin-top: 20px;
        border: none;
        cursor: pointer;
    }
    .button:hover {
        background-color: #FF8C00;
    }
    .icon {
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 10px;
    }
    .powered-by {
        font-size: 12px;
        color: #888888; /* Warna abu-abu */
        text-align: right;
        margin-top: 20px;
    }
</style>
</head>
<body>

<div class="container">
    <div class="header">
        <h2>🎀 Wellcome 🎀</h2>
    </div>
    <div class="content">
        <p>Yoo ${pushname},</p>
        <p>Yeyy zan punya teman baru! Hehe, makasih telah mendaftar di ${footer}. zan senang sekali punya teman.</p>
        <ul>
            <li><strong>Nama :</strong> ${pushname}</li>
            <li><strong>Email :</strong> ${cek("email", m.sender)}</li>
            <li><strong>Level :</strong> ${cek("level", m.sender)}</li>
            <li><strong>Saldo :</strong> ${formatmoney(cek("saldo", m.sender))}</li>
            <li><strong>UID :</strong> ${dengan_nol}</li>
        </ul>
         <p>Silahkan klik tombol dibawah untuk melakukan deposit :</p>
        <a href="https://api.whatsapp.com/send?phone=${botNumber}&text=.deposit" class="button">Deposit Sekarang</a>
        <p><strong>Jika ada pertanyaan hubungi : <a href="https://wa.me/${owner}">WhatsApp</a>.<br></p>
      Cheers,<br>
            © PT TPedia Payment
        </p>
<div style="text-align: center; margin-top: 20px;">
    <p style="font-size: 12px; color: #888;">Powered by ${footer}</p>
</div>
</body>
</html>` 
};

    // Kirim email
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log(`Berhasil Mengirim Ke Email : ${cek("email", m.sender)}`);
        }
    });
}
function sendEmailDepo(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender) {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
            user: `${global.emailNotif}`,
            pass: `${pwNotif}`
        }
    });

    // Siapkan email yang akan dikirim
    let mailOptions = {
    from: `${global.emailNotif}`,
    to: `${cek("email", m.sender)}`,
    subject: `Yeyy! deposit ${formatmoney(price_sender)}, udah berhasil!`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hello</title>
<style>
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
    }
    .container {
        max-width: 600px;
        margin: 50px auto;
        background-color: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }
.header {
  background-color: #32cd33;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid rgb(0, 255, 0);
}
    .content {
        padding: 20px;
    }
    .content p {
        margin-bottom: 20px;
        line-height: 1.6;
        color: #444444;
    }
    .button-container {
        text-align: left;
        margin-top: 30px;
        position: fixed;
        bottom: 10px;
        left: 10px;
    }
    .button {
        display: inline-block;
        text-decoration: none;
        padding: 10px 20px;
        background-color: #32cd33;
        color: #ffffff;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        margin-top: 20px;
        border: none;
        cursor: pointer;
    }
    .button:hover {
        background-color: #FF8C00;
    }
    .icon {
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 10px;
    }
    .powered-by {
        font-size: 12px;
        color: #888888; /* Warna abu-abu */
        text-align: right;
        margin-top: 20px;
    }
</style>
</head>
<body>

<div class="container">
    <div class="header">
        <h2>DEPOSIT BERHASIL 🛒</h2>
    </div>
    <div class="content">
        <p>Yoo ${pushname},</p>
        <p>Yuhhuu, deposit ${formatmoney(price_sender)}, udah berhasil ya</p>
        <ul>
             <br><strong>DETAIL DEPOSIT :<br><br>
            <li><strong>Referensi :</strong> ${ref_sender}</li>
            <li><strong>Metode :</strong> ${method}</li>
            <li><strong>Jumlah :</strong> ${formatmoney(price_sender)}</li>
            <li><strong>Fee :</strong> ${formatmoney(fee_sender)}</li>
            <li><strong>Total Bayar :</strong> ${formatmoney(total_sender)}</li>
        </ul>
         <p>Seneng kan?. yuk mulai transaksi dengan click tombol dibawah :</p>
        <a href="https://api.whatsapp.com/send?phone=${botNumber}&text=.menu" class="button">New Order</a>
        <p><strong>Jika ada pertanyaan hubungi : <a href="https://wa.me/${owner}">WhatsApp</a>.<br></p>
       Cheers,<br>
            © PT TPedia Payment
        </p>
<div style="text-align: center; margin-top: 20px;">
    <p style="font-size: 12px; color: #888;">Powered by ${footer}</p>
</div>
</body>
</html>`
                };

                // Kirim email
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log('Error sending email:', error);
                    } else {
                        console.log(`Berhasil Mengirim Ke Email : ${cek("email", m.sender)}`);
                    }
                });
            }
            function sendEmailLevelUp(sender, pushname, new_level, benefits, email_sender) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${global.emailNotif}`,
            pass: `${pwNotif}`
        }
    });

    // Siapkan email yang akan dikirim
    let mailOptions = {
        from: `${global.emailNotif}`,
        to: `${email_sender}`,
        subject: `Selamat! Level kamu telah ditingkatkan ke Level ${new_level}`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Level Up</title>
<style>
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
    }
    .container {
        max-width: 600px;
        margin: 50px auto;
        background-color: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }
    .header {
        background-color: #32cd33;
        color: #ffffff;
        padding: 20px;
        text-align: center;
        border-bottom: 2px solid rgb(0, 255, 0);
    }
    .content {
        padding: 20px;
    }
    .content p {
        margin-bottom: 20px;
        line-height: 1.6;
        color: #444444;
    }
    .button-container {
        text-align: left;
        margin-top: 30px;
        position: fixed;
        bottom: 10px;
        left: 10px;
    }
    .button {
        display: inline-block;
        text-decoration: none;
        padding: 10px 20px;
        background-color: #32cd33;
        color: #ffffff;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        margin-top: 20px;
        border: none;
        cursor: pointer;
    }
    .button:hover {
        background-color: #FF8C00;
    }
    .icon {
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 10px;
    }
    .powered-by {
        font-size: 12px;
        color: #888888; /* Warna abu-abu */
        text-align: right;
        margin-top: 20px;
    }
</style>
</head>
<body>

<div class="container">
    <div class="header">
        <h2>LEVEL UP! 🎉</h2>
    </div>
    <div class="content">
        <p>Hi ${pushname},</p>
        <p>Selamat! Level kamu telah ditingkatkan ke Level ${new_level}!</p>
        <ul>
            <br><strong>DETAIL LEVEL BARU:<br><br>
            <li><strong>Level Baru :</strong> ${new_level}</li>
            <li><strong>Manfaat :</strong> ${benefits.join(", ")}</li>
        </ul>
        <p>Dengan level baru ini, kamu mendapatkan manfaat tambahan dan fitur yang lebih keren. Yuk, mulai eksplorasi dengan klik tombol di bawah:</p>
        <a href="https://api.whatsapp.com/send?phone=${botNumber}&text=.menu" class="button">Explore Now</a>
        <p><strong>Jika ada pertanyaan hubungi : <a href="https://wa.me/${owner}">WhatsApp</a>.<br></p>
       Cheers,<br>
            © PT TPedia Payment
        </p>
        <div style="text-align: center; margin-top: 20px;">
            <p style="font-size: 12px; color: #888;">Powered by ${footer}</p>
        </div>
    </div>
</div>

</body>
</html>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


function getlayanan() {
const axios = require('axios');
const qs = require('qs');
const fs = require('fs');
  var data = qs.stringify({
    'api_key': global.AtlaticKey,
    'type': 'prabayar'
  });

  var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://atlantich2h.com/layanan/price_list',
    headers: {},
    data: data
  };

  axios(config)
    .then(function (response) {
      let data = JSON.stringify(response.data.data);
      fs.writeFileSync("./SETTING2/DB/all_prepaid.json", data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Jalankan getlayanan setiap 5 menit (300000 milidetik)
setInterval(getlayanan, 300000);


function sendEmailTrxCancel(sender, pushname, referdf, product_name, user_no, parsedHarga, pesany) {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
            user: `${global.emailNotif}`,
            pass: `${pwNotif}`
        }
    });

    // Siapkan email yang akan dikirim
    let mailOptions = {
    from: `${global.emailNotif}`,
    to: `${cek("email", m.sender)}`,
    subject: `Yahh invoice ${cek("reff", m.sender)} aku batalin dulu ya!`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Detail Transaksi Kamu</title>
<style>
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
    }
    .container {
        max-width: 600px;
        margin: 50px auto;
        background-color: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }
.header {
  background-color: #ff8832;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #0077b6;
}
    .content {
        padding: 20px;
    }
    .content p {
        margin-bottom: 20px;
        line-height: 1.6;
        color: #444444;
    }
    .button-container {
        text-align: left;
        margin-top: 30px;
        position: fixed;
        bottom: 10px;
        left: 10px;
    }
    .button {
        display: inline-block;
        text-decoration: none;
        padding: 10px 20px;
        background: linear-gradient(to right, rgb(0, 255, 0), rgb(100, 255, 100), rgb(200, 255, 200));
        color: #ffffff;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        margin-top: 20px;
        border: none;
        cursor: pointer;
    }
    .button:hover {
        background-color: #FF8C00;
    }
    .icon {
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 10px;
    }
    .powered-by {
        font-size: 12px;
        color: #888888; /* Warna abu-abu */
        text-align: right;
        margin-top: 20px;
    }
</style>
</head>
<body>

<div class="container">
    <div class="header">
        <h2>DETAIL TRANSAKSI 📃</h2>
    </div>
    <div class="content">
        <p>Yoo ${pushname},</p>
        <p><strong>Maaf banget ya, aku nggak bisa melanjutkan pesanan kamu. Invoice ${referdf} sudah zan batalkan karena ${pesany}. Jangan khawatir, saldo kamu sudah zan kembalikan ke akun kamu.</p>
        <ul>
             <br><strong>DETAIL TRANSAKSI :<br><br>
            <li><strong>Trxid :</strong> ${referdf}</li>
            <li><strong>Status :</strong> Failed</li>
            <li><strong>Layanan :</strong> ${product_name}</li>
            <li><strong>No. Tujuan :</strong> ${user_no}</li>
            <li><strong>Harga :</strong> ${formatmoney(parsedHarga)}</li>
            <li><strong>Waktu :</strong> ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}</li>
        </ul>
        <p><strong>Ada Kendala Di Transaksi? Hubungi yuk : <a href="https://wa.me/${owner}">WhatsApp</a>.<br></p>
       </p>Cheers,<br>
            © PT TPedia Payment
        </p>
<div style="text-align: center; margin-top: 20px;">
    <p style="font-size: 12px; color: #888;">Powered by ${footer}</p>
</div>
</body>
</html>`
                };

                // Kirim email
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log('Error sending email:', error);
                    } else {
                        console.log(`Berhasil Mengirim Ke Email : ${cek("email", m.sender)}`);
                    }
                });
            }
            /* FUCTION GAGAL DIGI 2 */
            function sendEmailTrxCancele(sender, pushname, referdf, product_name, user_no, parsedHarga, pesanyu) {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
            user: `${global.emailNotif}`,
            pass: `${pwNotif}`
        }
    });

    // Siapkan email yang akan dikirim
    let mailOptions = {
    from: `${global.emailNotif}`,
    to: `${cek("email", m.sender)}`,
     subject: `Yahh invoice ${cek("reff", m.sender)} aku batalin dulu ya!`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Detail Transaksi Kamu</title>
<style>
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
    }
    .container {
        max-width: 600px;
        margin: 50px auto;
        background-color: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }
.header {
  background-color: #ff8832;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #0077b6;
}
    .content {
        padding: 20px;
    }
    .content p {
        margin-bottom: 20px;
        line-height: 1.6;
        color: #444444;
    }
    .button-container {
        text-align: left;
        margin-top: 30px;
        position: fixed;
        bottom: 10px;
        left: 10px;
    }
    .button {
        display: inline-block;
        text-decoration: none;
        padding: 10px 20px;
        background: linear-gradient(to right, rgb(0, 255, 0), rgb(100, 255, 100), rgb(200, 255, 200));
        color: #ffffff;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        margin-top: 20px;
        border: none;
        cursor: pointer;
    }
    .button:hover {
        background-color: #FF8C00;
    }
    .icon {
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 10px;
    }
    .powered-by {
        font-size: 12px;
        color: #888888; /* Warna abu-abu */
        text-align: right;
        margin-top: 20px;
    }
</style>
</head>
<body>

<div class="container">
    <div class="header">
        <h2>DETAIL TRANSAKSI 📃</h2>
    </div>
    <div class="content">
        <p>Yoo ${pushname},</p>
        <p><strong>Maaf banget ya, aku nggak bisa melanjutkan pesanan kamu. Invoice ${referdf} sudah zan batalkan karena ${pesanyu}. Jangan khawatir, saldo kamu sudah zan kembalikan ke akun kamu.</p>
        <ul>
             <br><strong>DETAIL TRANSAKSI :<br><br>
            <li><strong>Trxid :</strong> ${referdf}</li>
            <li><strong>Status :</strong> Failed</li>
            <li><strong>Layanan :</strong> ${product_name}</li>
            <li><strong>No. Tujuan :</strong> ${user_no}</li>
            <li><strong>Harga :</strong> ${formatmoney(parsedHarga)}</li>
            <li><strong>Waktu :</strong> ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}</li>
        </ul>
        <p><strong>Ada Kendala Di Transaksi? Hubungi yuk : <a href="https://wa.me/${owner}">WhatsApp</a>.<br></p>
       </p>Cheers,<br>
            © PT TPedia Payment
        </p>
<div style="text-align: center; margin-top: 20px;">
    <p style="font-size: 12px; color: #888;">Powered by ${footer}</p>
</div>
</body>
</html>` 
                };

                // Kirim email
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log('Error sending email:', error);
                    } else {
                        console.log(`Berhasil Mengirim Ke Email : ${cek("email", m.sender)}`);
                    }
                });
            }


const sendMessage = async (invoice) => {
let saldoku = cek("saldo", m.sender) * 1;

const sections = [
        {
            title: `Secure Payment by ${footer}`,
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `tpcash`, description: `${formatmoney(saldoku)}`, id: ".tpcash" }
            ]
        },
        {
          
            rows: [
                { header: "", title: `Membatalkan Transaksi`, description: ``, id: ".batal" }
            ]
        },

    ];
    const buttonParamsJson = `{
        "title": "CLICK HERE",
        "sections": ${JSON.stringify(sections)}
    }`;
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ''
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ``
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: invoice,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
};
let saldoktu = cek("saldo", m.sender) * 1;
let buttonParamsJson = `{
    "title": "CLICK HERE",
    "sections": [
        {
            "title": "",
            "highlight_label": "24 JAM",
            "rows": [
                {
                    "header": "",
                    "title": "tpcash",
                    "description": "${formatmoney(saldoktu)}",
                    "id": ".pay-tagihan"
                },
                {
                    "header": "",
                    "title": "Membatalkan Transaksi ",
                    "description": "",
                    "id": ".batal"
                }
                
            ]
        }
    ]
}`;
const sendTagihan = async (Tagihanku) => {
let saldoku = cek("saldo", m.sender) * 1;
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ''
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ``
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: Tagihanku,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
};

//=====[ Set Gagal Df ]===
const sendGagalDF = async (DFgagal) => {
let saldoku = cek("saldo", m.sender) * 1;
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ''
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ``
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: DFgagal,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Order Lagi!","id":".order ${cek("buyer_sku_code", m.sender)} ${cek("tujuan", m.sender)}"}`
                            },
                       {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Hubungi Customer Service",
                                "url": "https://wa.me/${owner}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                        ],
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
};
 async function sendSyaratAnanthaa() {
   const setujuAnantha = [
        { title: 'Setuju', description: 'Jika Menyetujui Kamu udah baca s&k kami :)', id: '.saya' },
        { title: 'Apa Saja Syarat nya?', description: 'Untuk Melihat S&K kami', id: '.syarat' }
    ];
    const buttonParamsJsont = `{
        "title": "Pilih Menu",
        "sections": [
            {
                "title": "Pilihan Menu",
                "rows": ${JSON.stringify(setujuAnantha)}
            }
        ]
    }`;
 let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Oops, Kamu Belum Menyetujui Syarat Ketentuan dari kami. Mohon setujuin dulu, agar dapat mengakses fitur dari kami.`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ''
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: '',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJsont
                            },
                            {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Hubungi Customer Service",
                                "url": "https://wa.me/${owner}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                        ],
                    })
                })
            }
        }
    }, {});


    await AnanthaGanz.relayMessage(m.chat, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    };
    async function UpgradeAnanthazz() {
    
   const sections = [
        {
            title: `Secure Payment by ${footer}`,
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `QRIS`, description: "Upgrade Melalui QRIS", id: ".upgrade QRIS" }
            ]
        },
       {
            
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `LINKAJA`, description: "Upgrade Melalui LINKAJA", id: ".upgrade LINKAJA" }
            ]
        },
        {
            
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `DANA`, description: "Upgrade Melalui DANA", id: ".upgrade DANA" }
            ]
        },
                {
            
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `SHOPEEPAY`, description: "Upgrade Melalui SHOPEEPAY", id: ".upgrade SHOPEEPAY" }
            ]
        },
                        {
            
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account Mandiri`, description: "Upgrade Melalui VA Mandiri", id: ".upgrade Mandiri" }
            ]
        },
                                {
            
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account BNI`, description: "Upgrade Melalui VA BNI", id: ".upgrade BNI" }
            ]
        },
        {
            
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account BRI`, description: "Upgrade Melalui VA BRI", id: ".upgrade BRI" }
            ]
             },
             {
            
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Alfamart`, description: "Upgrade Melalui Gerai Alfamart", id: ".upgrade ALFMART" }
            ]
             },
                          {
            
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Indomaret`, description: "Upgrade Melalui Gerai Indomaret", id: ".upgrade INDOMARET" }
            ]
             }
    ];
    const buttonParamsJson = `{
        "title": "Gasken",
        "sections": ${JSON.stringify(sections)}
    }`;
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ''
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Lihat Payment Channel :'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: `Mau Upgrade? Ayoo`,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    };
    
    
    async function JamBali() {
    
   const setujuAnantha = [
        { title: 'WITA', description: 'waktu Indonesia bagian tengah', id: '.wita' },
        { title: 'WIT', description: 'waktu Indonesia bagian timur', id: '.wit' },
       { title: 'WIB', description: 'waktu Indonesia bagian barat', id: '.wib' }
    ];
    const buttonParamsJsont = `{
        "title": "Pilih Menu",
        "sections": [
            {
                "title": "Pilihan Menu",
                "rows": ${JSON.stringify(setujuAnantha)}
            }
        ]
    }`;
 let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Oops, Kamu Belum Menentukan Waktu Wilayah`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ''
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: '',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJsont
                            },
                            {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Hubungi Customer Service",
                                "url": "https://wa.me/${owner}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                        ],
                    })
                })
            }
        }
    }, {});


    await AnanthaGanz.relayMessage(m.chat, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    };
    async function AnanthaGalauV() {
    
   
 let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Oops, invoice ${cek("deposit", m.sender)} masih tersedia`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ''
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: '',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
  {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Batalkan Aja :)","id":".cancel"}`
                            },
                            {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Hubungi Customer Service",
                                "url": "https://wa.me/${owner}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                        ],
                    })
                })
            }
        }
    }, {});


    await AnanthaGanz.relayMessage(m.chat, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    };
     async function AnanthaGalau() {
  
 let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Oops, invoice ${cek("reff", m.sender)} masih tersedia`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ''
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: '',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
  {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Batalkan Aja :)","id":".batal"}`
                            },
                            {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Hubungi Customer Service",
                                "url": "https://wa.me/${owner}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                        ],
                    })
                })
            }
        }
    }, {});


    await AnanthaGanz.relayMessage(m.chat, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    };
       async function sendReseller() {
  
 let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Oops, Silahkan hubungi admin untuk meningkatkan level reseller`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ''
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: '',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Lest Go",
                                "url": "https://wa.me/${owner}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                        ],
                    })
                })
            }
        }
    }, {});


    await AnanthaGanz.relayMessage(m.chat, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    };
 // VERIFIKASI EMAIL
async function sendVerif() {
 let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Oops, Silahkan Verifikasi Email : ${cek("email", m.sender)}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ''
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: '',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
{
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Verifikasi Sekarang","id":".verifikasicode"}`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Hubungi Customer Service",
                                "url": "https://wa.me/${owner}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(m.chat, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    };
    async function MinesAnanthaa() {
    const AnanthaYa = [
        { title: 'Isi Saldo Dulu', description: 'Tambahkan saldo dulu, baru bisa lanjutkan pesanan :)', id: '.deposit' },
        { title: 'Bayar Tanpa Saldo', description: 'Bisa langsung cuss bayar tanpa deposit lagi ', id: '.metodepembayaran' },

    ];
    const buttonParamsJsont = `{
        "title": "CLICK HERE",
        "sections": [
            {
                "title": "Pilihan Menu",
                "rows": ${JSON.stringify(AnanthaYa)}
            }
        ]
    }`;
 let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Oops, kamu tidak dapat melakukan transaksi produk ${cek("product_name", m.sender)}, karena saldo kamu tidak cukup`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ''
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: '',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
{
                                name: "single_select",
                                buttonParamsJson: buttonParamsJsont
                            },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Hubungi Customer Service",
                                "url": "https://wa.me/${owner}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(m.chat, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    };
//=====[ Set Gagal Df ]====//

             /* FUCTION SUKSES DIGI*/
            function sendEmailTrxSuks(sender, pushname, snket, referdf, product_name, user_no, parsedHarga) {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
            user: `${global.emailNotif}`,
            pass: `${pwNotif}`
        }
    });

    // Siapkan email yang akan dikirim
    let mailOptions = {
    from: `${global.emailNotif}`,
    to: `${cek("email", m.sender)}`,
    subject: `Yeayy! pesanan ${cek("reff", m.sender)} udah berhasil lho.`,
    html: `
<!DOCTYPE html>
<html>
<head>
<title>Transaksi Kamu</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
        margin: 0;
        padding: 0;
    }
    .content {
        max-width: 400px;
        margin: 50px auto;
        background-color: #fff;
        border-radius: 10px;
        padding: 30px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
    h1 {
  text-align: center;
  margin-bottom: 10px;
  background-color: #ff8832;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
    p {
        color: #ff8832;
        line-height: 1.6;
        margin-bottom: 10px;
    }
     i {
        color: #0a0b39;
        line-height: 1.6;
        margin-bottom: 10px;
    }
    .transaction-details {
        background-color: #444444;
        border-radius: 5px;
        padding: 15px;
        margin-bottom: 20px;
    }
    .transaction-details h2 {
        color: #ff8832;
        margin-bottom: 10px;
    }
    .button-container {
        text-align: center;
    }
    .button {
        display: inline-block;
        width: 100px;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #3498db;
        color: #fff;
        text-decoration: none;
        margin: 0 5px;
        transition: background-color 0.3s ease;
    }
    .button:hover {
        background-color: #0a0b39;
    }
    .powered-by {
        text-align: center;
        color: #999;
        font-size: 12px;
    }
</style>
</head>
<body>
<div class="content">
    <h1>Transaksi Kamu</h1>
    <div class="transaction-details">
        <h2>Detail Pembelian :</h2>
        <p><strong>Trxid :</strong> ${referdf}</p>
        <p><strong>Status :</strong> Success</p>
        <p><strong>Layanan :</strong> ${product_name}</p>
        <p><strong>Tujuan :</strong> ${user_no}</p>
        <p><strong>Harga :</strong> ${formatmoney(parsedHarga)}</p>
        <p><strong>Waktu :</strong> ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}</p>
        <p><strong>SN/Token/Kode :</strong> ${snket}</p>
    </div>
    <i><strong>Pesanan udah beres ya!, makasi juga ya udah order di ${footer}</strong></i>
    <div></div>
    <div class="powered-by">Powered by ${footer}</div>
</div>
</body>
</html>
`
                };

                // Kirim email
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log('Error sending email:', error);
                    } else {
                        console.log(`Berhasil Mengirim Ke Email : ${cek("email", m.sender)}`);
                    }
                });
            }
            /* FUCTION EXPIRED DEPOSIT */
            function sendExpDepo(sender) {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
            user: `${global.emailNotif}`,
            pass: `${pwNotif}`
        }
    });

    // Siapkan email yang akan dikirim
    let mailOptions = {
    from: `${global.emailNotif}`,
    to: `${cek("email", m.sender)}`,
    subject: `Aduhh invoice ${cek("deposit", sender)} udah engga berlaku`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invalid Invoice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            max-width: 400px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background-color: #e74c3c;
            color: #fff;
            padding: 20px;
            text-align: center;
            border-bottom: 2px solid #c0392b;
        }
        .content {
            padding: 20px;
            text-align: center;
            line-height: 1.6;
        }
        .button-container {
            text-align: center;
            padding: 20px 0;
        }
        .button {
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            background-color: #3498db;
            color: #fff;
            font-weight: bold;
            transition: background-color 0.3s ease;
            margin: 0 10px;
            display: inline-block;
        }
        .button:hover {
            background-color: #2980b9;
        }
        .icon {
            width: 20px;
            height: 20px;
            display: inline-block;
            background-size: cover;
            margin-right: 5px;
            vertical-align: middle;
        }
        
        .footer {
            text-align: center;
            padding: 10px 0;
            background-color: #f5f5f5;
            border-top: 1px solid #ddd;
        }
        .footer p {
            font-size: 12px;
            color: #888;
            margin: 0;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h2>INVOICE EXPIRED</h2>
    </div>
    <div class="content">
        <p>Invoice : ${cek("deposit", sender)} udah tidak berlaku lagi ya, tapi nanti kamu bisa buat lagi kok :)</p>
    
    </p>Cheers,<br>
            © PT TPedia Payment
        </p>
    <div class="footer">
        <p>Powered by ${footer}</p>
    </div>
</div>

</body>
</html>
`
                };

                // Kirim email
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log('Error sending email:', error);
                    } else {
                        console.log(`Berhasil Mengirim Ke Email : ${cek("email", m.sender)}`);
                    }
                });
            }
            
            function sendExpTrx(sender) {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
            user: `${global.emailNotif}`,
            pass: `${pwNotif}`
        }
    });

    // Siapkan email yang akan dikirim
    let mailOptions = {
    from: `${global.emailNotif}`,
    to: `${cek("email", m.sender)}`,
    subject: `Oops, invoice ${cek("reff", sender)} udah engga berlaku lagi`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biling Gagal</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            max-width: 400px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background-color: #e74c3c;
            color: #fff;
            padding: 20px;
            text-align: center;
            border-bottom: 2px solid #c0392b;
        }
        .content {
            padding: 20px;
            text-align: center;
            line-height: 1.6;
        }
        .button-container {
            text-align: center;
            padding: 20px 0;
        }
        .button {
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            background-color: #3498db;
            color: #fff;
            font-weight: bold;
            transition: background-color 0.3s ease;
            margin: 0 10px;
            display: inline-block;
        }
        .button:hover {
            background-color: #2980b9;
        }
        .icon {
            width: 20px;
            height: 20px;
            display: inline-block;
            background-size: cover;
            margin-right: 5px;
            vertical-align: middle;
        }
        .footer {
            text-align: center;
            padding: 10px 0;
            background-color: #f5f5f5;
            border-top: 1px solid #ddd;
        }
        .footer p {
            font-size: 12px;
            color: #888;
            margin: 0;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h2>INVOICE EXPIRED</h2>
    </div>
    <div class="content">
        <p>Invoice : ${cek("reff", sender)} udah tidak berlaku lagi ya, tapi nanti kamu bisa buat lagi :)</p>
   
    </p>Cheers,<br>
            © PT TPedia Payment
        </p>
    <div class="footer">
        <p>Powered by ${footer}</p>
    </div>
</div>

</body>
</html>
`
                };

                // Kirim email
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log('Error sending email:', error);
                    } else {
                        console.log(`Berhasil Mengirim Ke Email : ${cek("email", m.sender)}`);
                    }
                });
            }
            
/* PAYDISINI PENDING */
function sendEmailPending(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender, url) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${global.emailNotif}`,
            pass: `${pwNotif}`
        }
    });

    // Siapkan email yang akan dikirim
    let mailOptions = {
        from: `${global.emailNotif}`,
        to: `${cek("email", m.sender)}`,
        subject: `Yeyy, Invoice ${ref_sender} udh zan buatin, jangan lupa dibayar ya!`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Invoice Payment Reminder</title>
<style>
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
        user-select: none; /* Disable text selection */
        -webkit-user-select: none; /* For Safari */
        -moz-user-select: none; /* For Firefox */
        -ms-user-select: none; /* For Internet Explorer/Edge */
    }
    .container {
        max-width: 600px;
        margin: 50px auto;
        background-color: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }
    .header {
        background-color: #2ecc71;
        color: #ffffff;
        padding: 20px;
        text-align: center;
        border-bottom: 2px solid #27ae60;
    }
    .content {
        padding: 20px;
    }
    .content p {
        margin-bottom: 20px;
        line-height: 1.6;
        color: #444444;
    }
    .content w {
        margin-bottom: 10px;
        line-height: 1.3;
        color: #ff0000;
    }
    .button-container {
        text-align: left;
        margin-top: 30px;
        position: fixed;
        bottom: 10px;
        left: 10px;
    }
    .button {
        display: inline-block;
        text-decoration: none;
        padding: 10px 20px;
        background-color: #2ecc71;
        color: #ffffff;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        margin-top: 20px;
        border: none;
        cursor: pointer;
    }
    .button:hover {
        background-color: #27ae60;
    }
    .icon {
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 10px;
    }
    .powered-by {
        font-size: 12px;
        color: #888888; /* Warna abu-abu */
        text-align: right;
        margin-top: 20px;
    }
</style>
</head>
<body>

<div class="container">
    <div class="header">
        <h2>INVOICE TERSEDIA</h2>
    </div>
    <div class="content">
        <p>Yoo ${pushname},</p>
        <p>Hehe, zan mau ngasih sesuatu nih! Mau tau? Ada deh, hehe. Candaa... Aku mau ngasih invoice yang perlu dibayar. Jangan telat ya bayarnya!</p>
        <ul>
            <br><strong>DETAIL PEMBAYARAN :<br><br>
            <li><strong>Referensi :</strong> ${ref_sender}</li>
            <li><strong>Metode :</strong> ${method}</li>
            <li><strong>Jumlah :</strong> ${formatmoney(price_sender)}</li>
            <li><strong>Biaya :</strong> ${formatmoney(fee_sender)}</li>
            <li><strong>Total :</strong> ${formatmoney(total_sender)}</li>
        </ul>
        <p>Kalau udah siap, bisa di click tombol pembayaran dibawah :</p>
        <a href="${url}" class="button">Bayar Sekarang</a>
        <p><w>Note : Silahkan Lakukan Pembayaran Tepat Waktu, Jika ada pertanyaan hubungi : <a href="https://wa.me/${owner}">WhatsApp</a>.<br></p>
    </p>Cheers,<br>
            © PT TPedia Payment
        </p>
<div style="text-align: center; margin-top: 20px;">
    <p style="font-size: 12px; color: #888;">Powered by ${footer}</p>
</div>
</body>
</html>
`
    };

    // Kirim email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log(`Berhasil Mengirim Ke Email : ${cek("email", m.sender)}`);
        }
    });
}
            /* FUCTION DIGIFLAZZ*/
                    function sendInvPending(sender, jumlahHarga, potonganHarga, totalPembayaran) {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
            user: `${global.emailNotif}`,
            pass: `${pwNotif}`
        }
    });

    // Siapkan email yang akan dikirim
    let mailOptions = {
    from: `${global.emailNotif}`,
    to: `${cek("email", m.sender)}`,
    subject: `Yeyy! invoice ${cek("reff", sender)} udh zan buatin, jangan lupa dibayar ya biar cepat diproses`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Detail Transaksi Kamu</title>
<style>
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
    }
    .container {
        max-width: 600px;
        margin: 50px auto;
        background-color: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }
.header {
  background-color: #ff8832;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #0077b6;
}
    .content {
        padding: 20px;
    }
    .content p {
        margin-bottom: 20px;
        line-height: 1.6;
        color: #44444;
    }
    .button-container {
        text-align: left;
        margin-top: 30px;
        position: fixed;
        bottom: 10px;
        left: 10px;
    }
    .button {
        display: inline-block;
        text-decoration: none;
        padding: 10px 20px;
        background: linear-gradient(to right, rgb(0, 255, 0), rgb(100, 255, 100), rgb(200, 255, 200));
        color: #ffffff;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        margin-top: 20px;
        border: none;
        cursor: pointer;
    }
    .button:hover {
        background-color: #FF8C00;
    }
    .icon {
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 10px;
    }
    .powered-by {
        font-size: 12px;
        color: #888888; /* Warna abu-abu */
        text-align: right;
        margin-top: 20px;
    }
</style>
</head>
<body>

<div class="container">
    <div class="header">
        <h2>DETAIL TRANSAKSI 📃</h2>
    </div>
    <div class="content">
        <p>Yoo ${pushname},</p>
        <p><strong>Pesanan dengan trxid ${cek("reff", sender)} udah dibuatin ya</p>
        <ul>
             <br><strong>DETAIL TRANSAKSI :<br><br>
            <li><strong>Trxid :</strong> ${cek("reff",m.sender)}</li>
            <li><strong>Produk :</strong> ${cek("product_name", m.sender)}</li>
            <li><strong>No. Tujuan :</strong> ${cek("tujuan", m.sender)}</li>
            <li><strong>Harga :</strong> ${formatmoney(jumlahHarga)}</li>
            <li><strong>Diskon :</strong> ${formatmoney(potonganHarga)}</li>
            <li><strong>Total :</strong> ${formatmoney(totalPembayaran)}</li>
            <li><strong>Note :</strong> ${cek("desc_prabayar",m.sender)}</li>
        </ul>
        <p>
        <p>Pesanan sudah zan buat nih! jangan lupa untuk menyelesaikan pembayaran ya biar lebih cepat diproses</p>
        <p><strong>Ada Kendala Di Transaksi? Hubungi yuk : <a href="https://wa.me/${owner}">WhatsApp</a>.<br></p>
       </p>Cheers,<br>
            © PT TPedia Payment
        </p>
<div style="text-align: center; margin-top: 20px;">
    <p style="font-size: 12px; color: #888;">Powered by ${footer}</p>
</div>
</body>
</html>
`
                };

                // Kirim email
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log('Error sending email:', error);
                    } else {
                        console.log(`Berhasil Mengirim Ke Email : ${cek("email", m.sender)}`);
                    }
                });
            }
const time = moment().tz(`Asia/${waktuzone}`).format('HH:mm:ss');
let ucapanWaktu1;

if (time < "03:00:00" || time >= "23:59:00") {
  ucapanWaktu1 = 'Malam';
} else if (time < "10:00:00") {
  ucapanWaktu1 = 'Pagi';
} else if (time < "15:00:00") {
  ucapanWaktu1 = 'Siang';
} else if (time < "18:00:00") {
  ucapanWaktu1 = 'Sore';
} else {
  ucapanWaktu1 = 'Malam';
} 

const fdocc = {
  key: {
    participant: '0@s.whatsapp.net',
    ...(m.chat ? {
      remoteJid: `status@broadcast`
    } : {})
  },
  message: {
    documentMessage: {
      title: `Halo ${pushname}! Selamat ${ucapanWaktu1}, Saldo Anda saat ini ${formatmoney(cek("saldo", m.sender))}.`,
      jpegThumbnail: m,
    }
  }
};

function simpan(path, buff) {
    fs.writeFileSync(path, buff)
    return path
}

const nebal = (angka) => {
return Math.floor(angka)
}

function toRupiah(angka) {
  var angkaStr = angka.toString();
  var angkaTanpaKoma = angkaStr.split('.')[0];
  var angkaRev = angkaTanpaKoma.toString().split('').reverse().join('');
  var rupiah = '';
  for (var i = 0; i < angkaRev.length; i++) {
    if (i % 3 == 0) rupiah += angkaRev.substr(i, 3) + '.';
  }
  return '' + rupiah.split('', rupiah.length - 1).reverse().join('');
}
function pickrandoms(length) {
  var symbols = `ABCDEFGHIJKLMNOPQRSTUVWXYZ260409${dengan_nol}`;
  var symbolLength = symbols.length;
  var randomString = '';
  for (var i = 0; i < length; i++) {
    randomString += symbols.charAt(Math.floor(Math.random() * symbolLength));
  }
  return randomString;
}
let currentDate = new Date();
let beritatf = "ZN" + pickrandoms(4);
let today = new Date();
let tanggaly = today.getDate().toString().padStart(2, '0');
let bulany = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Months are zero-based
let tahuny = String(currentDate.getFullYear()).slice(-2);
let kode_random = pickrandoms(3);

let koderefe = `ZPAY${bulany}${tanggaly}${tahuny}${kode_random}26`;
if (m.sender.startsWith('212')) return AnanthaGanz.updateBlockStatus(m.sender, 'block')
if (m.key.remoteJid == 'status@broadcast') return AnanthaGanz.sendReadReceipt(from, m.sender, [m.key.id])

function pickrandom() {
  const symbols = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  let randomSymbol = '';
  for (let i = 0; i < 2; i++) {
    randomSymbol += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  
  
  const symbols1 = `${dengan_nol}`;
  let randomSymbol1 = '';
  for (let i = 0; i < 3; i++) {
    randomSymbol1 += symbols1.charAt(Math.floor(Math.random() * symbols1.length));
  }
randomSymbol1 += '26'; // Menambahkan angka 26 ke string acak
  const currentDate = new Date();
  const year = String(currentDate.getFullYear()).slice(-2); // Mengambil 2 digit terakhir dari tahun
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Menambahkan leading zero jika perlu
  const day = ('0' + currentDate.getDate()).slice(-2); // Menambahkan leading zero jika perlu
  return 'ZN' + day + month + year + randomSymbol + randomSymbol1;
}

let koderef = pickrandom();

const admModalPath = './SETTING2/DB/AdminPrepaid.json';

 switch (command) {
 /* IP V4 Digunakan Untuk Bertransaksi Via Api */
 case 'syarat':
    {
        let syaratku = `
        *Syarat & Ketentuan Layanan*

  *1. Umum:*
  
> Dengan mendaftar & menggunakan layanan *${footer}*, Anda secara otomatis menyetujui semua ketentuan layanan kami. Kami berhak mengubah ketentuan layanan ini tanpa pemberitahuan terlebih dahulu. Anda diharapkan membaca semua ketentuan layanan kami sebelum melakukan transaksi. Penolakan: *${footer}* tidak akan bertanggung jawab jika Anda mengalami kerugian dalam bisnis Anda. Kewajiban: *${footer}* tidak bertanggung jawab jika Anda mengalami kesalahan nomor tujuan saat memesan produk kami.

   *2. Layanan:*
   
> *${footer}* hanya digunakan untuk layanan pembelian tiket penerbangan. *${footer}* akan memberikan garansi ketika terjadi kendala saat pemesanan, "kecuali kesalahan nomor tujuan". *${footer}* tidak menerima permintaan pembatalan/pengembalian dana setelah pesanan masuk ke sistem kami. Kami memberikan pengembalian dana yang sesuai jika pesanan tidak dapat diselesaikan.

   *3. Pengguna/Akun:*
   
> *${footer}* berhak menghapus/blacklist akun Anda tanpa pemberian refund dari pihak kami apabila Anda melakukan hal di bawah ini:
> - Melakukan kecurangan dalam bertransaksi di *${footer}*
> - Melakukan penipuan dalam bentuk apapun di *${footer}*

   *4. Transaksi:*
   
> Apabila terdapat pengguna melakukan transaksi secara tidak resmi/kecurangan:
> *${footer}* berhak membawa ke jalur hukum. Pengguna wajib mempertanggungjawabkan kesalahannya.

   *5. Pembayaran:*
   
> *${footer}* hanya menerima pembayaran melalui transfer bank dan kartu kredit. Kami tidak menerima pembayaran tunai/utang. Apabila memaksa, kami akan melakukan blacklist terhadap pengguna tersebut.

 *Terakhir Update:* 10/15/22 | 07:05:40

*Hubungi Kami:*
 Silakan hubungi Customer Care kami melalui cara berikut:

> *WhatsApp:* wa.me/${owner}
> *Email:* tpedia@gmail.com
> *Telegram:* t.me/CsZannstore

${toko}
        `;
        
        let msg = generateWAMessageFromContent(from, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `${toko}`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: syaratku,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        
                  
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"SAYA TELAH MEMBACA & MENYETUJUI SYARAT KETENTUAN","id":".saya"}`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "CHAT OWNER",
                                "url": "https://carezannstore@gmail.com",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                })
            })
        }
    }
}, {});

await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
}, {quoted: m});
    }
    break
    case 'ipv4':
case 'getip': {
    if (m.isGroup) {
        return m.reply(mess.private);
    }
    if (!isOwner) {
        return m.reply(mess.owner);
    }

    try {
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        };

        const requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        const ip_panel = await fetch(`https://api.myip.com`, requestOptions);
        const res = await ip_panel.json();

        // Memeriksa apakah alamat IP adalah IPv4
        const ipv4Regex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
        const ipv4 = res.ip.match(ipv4Regex);

        if (ipv4) {
            const replyMessage = `*📮INFO SERVER*\n\n*IP :* ${ipv4}\n*Country :* ${res.country}`;
            m.reply(replyMessage);
        } else {
            m.reply('Gagal mengambil informasi IP IPv4. Silakan coba lagi nanti.');
        }
    } catch (error) {
        console.error('Error fetching IP:', error);
        m.reply('Gagal mengambil informasi IP. Silakan coba lagi nanti.');
    }
}
break;
/* End IP V4 */
case 'manfaat': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    
    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `*Keuntungan Upgrade ke Collector Z:*\n\n1. Akses penuh ke semua fitur premium seperti Ceknickname, topuser, dan lainnya.\n2. Potongan harga 10% setiap pembelian minimal Rp. 20.000 hingga maksimal pembelian Rp. 2.000.000\n3. Nikmati fitur transfer antar pengguna untuk kemudahan transaksi.\n4. Dapatkan langsung saldo Rp. 5.000 saat upgrade ke Collector Z\n\nJangan lewatkan kesempatan ini! Upgrade sekarang hanya dengan Rp. 45.000.`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih salah satu opsi di bawah:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Manfaat Upgrade ke Collector Z',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
{
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Gasken Upgrade Bozz","id":".upgrade"}`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Hubungi Customer Service",
                                "url": "https://wa.me/${owner}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(m.chat, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    break;
}

case 'upgrade': {
 if (cek("reff_deposit", m.sender) == false) return AnanthaGalauV() 
 if(cek("level", m.sender) == "Collector Z") return reply("Oops, Kamu Sudah Melakukan Pembayaran sebelumnya");
  
  const axios = require('axios');
  const qs = require('qs');
  let nominala = 15000 * 1
  

  async function makePayment() {
    try {
      const data = qs.stringify({
        'api_key': global.AtlaticKey,
        'reff_id': koderefe,
        'nominal': nominala,
        'type': 'ewallet',
        'metode': 'qrisfast'
      });

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://atlantich2h.com/deposit/create`,
        headers: {},
        data: data
      };

      let paymentResponse = await axios(config);
      let paymentDataResponse = paymentResponse.data.data;
                let obj = { id: m.sender, ref: `${paymentDataResponse.reff_id}`, method : `QRIS`, diterima: `${paymentDataResponse.nominal}`, total: `${paymentDataResponse.nominal}`, fee: `${paymentDataResponse.nominal}`, url: `${paymentDataResponse.qr_image}` }
                sett("reff_deposit", m.sender, false)
          sett("deposit", m.sender, `${koderefe}`)
fs.writeFileSync(`./SETTING2/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`, JSON.stringify(obj))
     await loading();
      let ccapt = `QRIS OTOMATIS\n\nMetode : QRIS\nReferensi : ${paymentDataResponse.reff_id}\nBerlaku : 5 menit\nTotal Bayar : ${formatmoney(paymentDataResponse.nominal)}\n\nSilahkan Lakukan Pembayaran Tepat Waktu`;
      
      let msg = generateWAMessageFromContent(from, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `Secure payment by ${footer}`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
 title: ccapt,
 subtitle: ``,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `${paymentDataResponse.qr_image}` } }, { upload: AnanthaGanz.waUploadToServer }))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"CANCEL UPGRADE","id":".cancel"}`
                        },
                        
                    ],
                })
            })
        }
    }
}, {});

 AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
}, {quoted: m});

      
      let unick = paymentDataResponse.id;
      sett("deposit", m.sender, `${unick}`)
      let dataStatus = paymentDataResponse.status;
      const startTime = new Date().getTime();

      while (dataStatus !== "success") {
        await sleep(1000);
        let qt = qs.stringify({
          'api_key': global.AtlaticKey,
          'id': unick
        });
        let checkStatusConfig = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `https://atlantich2h.com/deposit/status`,
          headers: {},
          data: qt
        };

        let statusResponse = await axios(checkStatusConfig);
        let statusDataResponse = statusResponse.data.data;
        dataStatus = statusDataResponse.status;
        console.log(dataStatus);
        const currentTime = new Date().getTime();
        const elapsedTime = (currentTime - startTime) / (1000 * 60 * 5);

        if (elapsedTime >= 1) {
          m.reply(`Upss, tiket udah gak berlaku nih. Yuk, buat yang baru!`);
          break;
        }

        if (dataStatus === "success") {
   AnanthaGanz.sendMessage(nomor+"@s.whatsapp.net", { text : "Yeyy, Pembayaran berhasil dilakukan. Level awal *Jagoan Z* telah ditingkatkan ke *Colector Z*. Terimakasih :)"})
    let keuntunganup = 5000 * 1 // SETT KEUNTUNGAN UP
               sett("level", nomor + "@s.whatsapp.net", "Collector Z");
               sett("+saldo", nomor + "@s.whatsapp.net", keuntunganup) 
                } else if (dataStatus === "cancel") {
        reply(`Pembayaran QRIS ref ${statusDataResponse.reff_id} dibatalkan`)
        sett("reff_deposit", m.sender, true)
          break;

        }
      }
    } catch (error) {
      console.error("Error occurred:", error);
      reply("Maaf, terjadi kesalahan dalam melakukan pembayaran. Silakan coba lagi nanti.");
    }
  }

  makePayment();
}
break;

case 'delprem': {
    if(!isOwner) return reply(mess.owner)
    let siapa = args[0];
    // Pastikan argumen nomor telepon diberikan
    if (!siapa) {
        return reply(`Format yang benar: ${prefix}delprem <nomor_telepon>`);
    }
    // Cek apakah nomor tersebut sudah menjadi anggota premium
   if(cek("level", siapa + "@s.whatsapp.net") == "Jagoan Z") return reply(`Oops, User Tersebut tidak didalam premium`)

    // Hapus nomor telepon dari array premium
        sett("level", siapa + "@s.whatsapp.net", "Jagoan Z");
    
    // Kirim balasan berhasil
    reply(`Berhasil menghapus nomor ${siapa} dari daftar premium.`);
}
break;
case 'addprem': {
    if (!isOwner) return reply(mess.wait)
    let siapa = args[0];

    // Pastikan argumen nomor telepon diberikan
    if (!siapa) {
        return reply(`Format yang benar: ${prefix}addprem <nomor_telepon>`);
    }

    // Cek apakah nomor tersebut sudah menjadi anggota premium
   if(cek("level", siapa + "@s.whatsapp.net") == "Collector Z") return reply(`Oops, User Tersebut Telah Collector Z`)

    // Tambahkan nomor telepon ke dalam array premium
    sett("level", siapa + "@s.whatsapp.net", "Collector Z");
    // Kirim balasan berhasil
    reply(`Berhasil menambahkan nomor ${siapa} ke dalam daftar premium.`);
}
break;
case 'transfer': {
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
 if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
    let members = require("./SETTING2/DB/dataPelanggan.json");
    let siapa = q.split(" ")[0];
    let brp = parseInt(q.split(" ")[1]);
    let wanet = siapa + "@s.whatsapp.net";
    let refftf = koderefe
    if (!siapa || !brp || isNaN(brp)) {
        reply("Format yang benar: .transfer 6285174667722 20000");
        return;
    }

    if (wanet === m.sender) {
        reply("Oops, mau nyoba transfer ke akun sendiri ya? hehe engga bisa yaa");
        return;
    }

    if (brp < 1 || brp > 100000000) {
        reply("Jumlah transfer harus minimal 1 dan maksimal 100 juta.");
        return;
    }

    let receiverData = members.find(member => member.id === wanet);
    if (!receiverData) {
        reply("Oops, Akun Itu Kayaknya Engga terdaftar di database kami pastiin bener yaa");
        return;
    }

    let senderBalance = cek("saldo", m.sender);
    if (brp > senderBalance) {
        reply(`Oops, Kamu belum bisa transfer ke ${siapa}! Karena Saldo kamu engga cukup isi dulu yukk`);
        return;
    }

    sett("-saldo", m.sender, brp);
    sett("+saldo", wanet, brp);
    reply(`Sip, Transfer Berhasil!. Ref: ${refftf}/${formatmoney(brp)}`);
    AnanthaGanz.sendMessage(wanet, { text: `Yuhuuu kamu telah menerima saldo dari pengguna ${dengan_nol}. Ref: ${refftf}/${formatmoney(brp)}` });
}
break;
/* Case Yang Tersedia */
case 'menu': {
    console.log("Menu command received from:", m.sender);

    // Check if the bot is under maintenance for non-owner users
    
    // Continue with normal checks for owner or if bot is not under maintenance
    if (cek("verfiyemail", m.sender) === true) {
        console.log("User needs to register email");
        return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail tpedia@gmail.com`);
    }
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    
    if (cek("waktu", m.sender) === true) {
        console.log("User needs to set time zone");
        return JamBali()
    }
  
    // Check if the user is the owner and if they need to set the digiflazz
    if (m.sender === ananthaa && cek("AtlaticKey", m.sender) === "") {
        console.log("Owner needs to set atlatic");
        return reply(`Silahkan Lakukan Koneksi Ke Atlatic Pedia Terlebih dahulu\n\nKetik *SETAPI*`)
    }
  
    if (m.sender === ananthaa && cek("APInick", m.sender) === "") {
        console.log("Owner needs to set apinick");
        return reply(`Silahkan Lakukan Koneksi Ke APINICK Terlebih dahulu\n\nKetik *SETAPINICK*`)
    }

    // Define the menu options
    
       const sections = [
        {
            title: `Powered by ${footer}`,
            highlight_label: "Terjamin Aman",
            rows: [
                { header: "Market Place", title: `Shop by ${footer}`, description: "Tempat Pembelian Prabayar & Pascabayar Termurah", id: ".shop" }
            ]
        },
        {
            highlight_label: "SETTING",
            rows: [
                { header: "Infomasi Akun", title: "Menu Tentang Informasi Akun seperti saldo, transaksi, etc", description: "Data kamu terjamin aman & telah di enkripsi", id: ".account" }
            ]
        },
        {
            highlight_label: "OWNER",
            rows: [
                { header: "Setting Admin", title: "Menu Tentang Rekap Penjualan, intergrasi api, dll", description: "", id: ".adminmenu" }
            ]
        }
    ];
    const menuMember = [
        {
            title: `Powered by ${footer}`,
            highlight_label: "Terjamin Aman",
            rows: [
                { header: "Market Place", title: `Shop by ${footer}`, description: "Tempat Pembelian Prabayar & Pascabayar Termurah", id: ".shop" }
            ]
        },
        {
            highlight_label: "SETTING",
            rows: [
                { header: "Infomasi Akun", title: "Menu Tentang Informasi Akun seperti saldo, transaksi, etc", description: "Data kamu terjamin aman & telah di enkripsi", id: ".account" }
            ]
        }
    ];

    const menuOptions = (m.sender === ananthaa) ? sections : menuMember;
    
const buttonParamsJson = `{
        "title": "CLICK HERE",
        "sections": ${JSON.stringify(menuOptions)}
    }`;
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Yuk, pilih menu yang kamu inginkan :'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Untuk Melihat daftar menu :'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: `Halo ${pushname}! Selamat ${ucapanWaktu1}`,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
}

break;
// Menangani respons setelah pengguna menyetujui syarat dan ketentuan
case 'saya': {
let send = `${sender.split('@')[0]}`
    // Melakukan pengecekan lagi apakah pengguna sudah menyetujui syarat dan ketentuan
    sett("syarat", m.sender, false);
  reply("Oke Sip, Kamu Telah Menyetujui Syarat Ketentuan dari kami, selamat menikmati fitur kami")
    // Jika pengguna sudah menyetujui syarat dan ketentuan, tampilkan menu
    setTimeout(() => {
    const sections = [
        {
            title: `Powered by ${footer}`,
            highlight_label: "Terjamin Aman",
            rows: [
                { header: "Market Place", title: `Shop by ${footer}`, description: "Tempat Pembelian Prabayar & Pascabayar Termurah", id: ".shop" }
            ]
        },
        {
            highlight_label: "SETTING",
            rows: [
                { header: "Infomasi Akun", title: "Menu Tentang Informasi Akun seperti saldo, transaksi, etc", description: "Data kamu terjamin aman & telah di enkripsi", id: ".account" }
            ]
        },
        {
            highlight_label: "OWNER",
            rows: [
                { header: "Setting Admin", title: "Menu Tentang Rekap Penjualan, intergrasi api, dll", description: "", id: ".adminmenu" }
            ]
        }
    ];
    const menuMember = [
        {
            title: `Powered by ${footer}`,
            highlight_label: "Terjamin Aman",
            rows: [
                { header: "Market Place", title: `Shop by ${footer}`, description: "Tempat Pembelian Prabayar & Pascabayar Termurah", id: ".shop" }
            ]
        },
        {
            highlight_label: "SETTING",
            rows: [
                { header: "Infomasi Akun", title: "Menu Tentang Informasi Akun seperti saldo, transaksi, etc", description: "Data kamu terjamin aman & telah di enkripsi", id: ".account" }
            ]
        }
    ];

    const menuOptions = (m.sender === ananthaa) ? sections : menuMember;
    
const buttonParamsJson = `{
        "title": "CLICK HERE",
        "sections": ${JSON.stringify(menuOptions)}
    }`;
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Yuk, pilih menu yang kamu inginkan :'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Untuk Melihat daftar menu :'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: `Halo ${pushname}! Selamat ${ucapanWaktu1}`,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

     AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    }, 2000);
}
break;
            case 'account': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("waktu", m.sender) == true) return JamBali()

    const buttonParamsJson = `{
        "title": "CLICK HERE",
        "sections": [
            {
                "title": "${toko}",
                "rows": [
                    {"title": "DASHBOARD", "description": "Lihat informasi : saldo, trx, dll", "id": ".info"}
                ]
            }
        ]
    }`;

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ''
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Silahkan Pilih :',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
}
break;

case 'stalking': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`);
   if (cek("waktu", m.sender) == true) return JamBali()

    const buttonParamsJson = `{
        "title": "CLICK HERE",
        "sections": [
            {
                "title": "Pilihan Menu",
                "rows": [
                    {"title": "Game", "description": "Lihat nama pengguna akun game", "id": ".games"},
                    {"title": "E-Wallet", "description": "Lihat nama pengguna akun e-wallet", "id": ".e-wallets"},
                    {"title": "Bank Indonesia", "description": "Lihat nama pengguna akun bank", "id": ".banks"},
                    {"title": "PLN", "description": "Lihat nama penguna PLN", "id": ".cekpln"}
                ]
            }
        ]
    }`;

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ''
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Pilih Opsion :',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
}
break;

case 'games': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`);
    if (cek("waktu", m.sender) == true) return JamBali()

    const buttonParamsJson = `{
        "title": "CLICK HERE",
        "sections": [
            {
                "title": "Powered by ${footer}",
                "rows": [
                    {"title": "Mobile Legends", "description": "Cek Nickname Mobile Legends", "id": ".cekml"},
                    {"title": "Free Fire", "description": "Cek Nickname Free Fire", "id": ".cekff"},
                    {"title": "Honkai Star Rail", "description": "Cek Nickname Honkai Star Rail", "id": ".cekhsr"},
                    {"title": "Genshin Impact", "description": "Cek Nickname Genshin Impact", "id": ".cekgi"},
                    {"title": "Honkai Impact 3", "description": "Cek Nickname Honkai Impact 3", "id": ".cekhi3"},
                    {"title": "Call of Duty", "description": "Cek Nickname Call of Duty", "id": ".cekcod"},
                    {"title": "Arena of Valor", "description": "Cek Nickname Arena of Valor", "id": ".cekaov"},
                    {"title": "AU2 Mobile", "description": "Cek Nickname AU2 Mobile", "id": ".cekau2m"},
                    {"title": "Black Clover Mobile", "description": "Cek Nickname Black Clover Mobile", "id": ".cekblackcloverm"},
                    {"title": "Dragon Raja", "description": "Cek Nickname Dragon Raja", "id": ".cekdragon-raja"},
                    {"title": "Garena Undawn", "description": "Cek Nickname Garena Undawn", "id": ".cekgarena-undawn"},
                    {"title": "Life After", "description": "Cek Nickname Life After", "id": ".ceklife-after"},
                    {"title": "Point Blank", "description": "Cek Nickname Point Blank", "id": ".cekpb"},
                    {"title": "Sausage Man", "description": "Cek Nickname Sausage Man", "id": ".ceksausageman"},
                    {"title": "Valorant", "description": "Cek Nickname Valorant", "id": ".cekvalo"}
                ]
            }
        ]
    }`;

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Mau Cek Nickname Game Apa Nih?'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ''
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Pilih daftar Game',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
}
break;

case 'banks': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`);
if (cek("waktu", m.sender) == true) return JamBali()

    const buttonParamsJson = `{
        "title": "CLICK HERE",
        "sections": [
            {
                "title": "Powered by ${footer}",
                "rows": [
                 {"title": "Daftar Bank Indonesia", "description": "Lihat daftar bank", "id": ".listbank"},
                    {"title": "Lakukan Pengecekan", "description": "Cek ID bank", "id": ".cekbankid"}
                ]
            }
        ]
    }`;

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Pilih dulu yuk :`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ''
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: '',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
}
break;

case 'e-wallets': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`);
if (cek("waktu", m.sender) == true) return JamBali()
    
    const buttonParamsJson = `{
        "title": "CLICK HERE",
        "sections": [
            {
                "title": "Powered by ${footer}",
                "rows": [
                    {"title": "DANA Wallet", "description": "Cek nickname DANA Wallet", "id": ".cekdana-wallet"},
                    {"title": "OVO Wallet", "description": "Cek nickname OVO Wallet", "id": ".cekovo-wallet"},
                    {"title": "GoPay Wallet", "description": "Cek nickname GoPay Wallet", "id": ".cekgopay-wallet"},
                    {"title": "LinkAja Wallet", "description": "Cek nickname LinkAja Wallet", "id": ".ceklinkaja-wallet"},
                    {"title": "ShopeePay Wallet", "description": "Cek nickname ShopeePay Wallet", "id": ".cekshopeepay-wallet"}
                ]
            }
        ]
    }`;

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Pilih Menu E-Wallet',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
}
break;

case 'shop': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("waktu", m.sender) == true) return JamBali()
    
    const buttonParamsJson = `{
        "title": "CLICK HERE",
        "sections": [
            {
                "title": "Powered by ${footer}",
                "rows": [
                    {"title": "Pulsa, Data, Topup Game, etc", "description": "Layanan Prabayar", "id": ".prabayar"}

                ]
            }
        ]
    }`;

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Pilih Salah Satu Kategori:`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Pilih Menu Shop',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
}
break;

            case 'adminmenu': {
    if (!isOwner) return m.reply(mess.owner);
    if (cek("cekVerify", m.sender) == true) return sendVerif();
    if (cek("syarat", m.sender) == true) return sendSyaratAnanthaa();
    if (cek("verfiyemail", m.sender) == true) 
        return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail tpedia@gmail.com`);
    if (m.sender === ananthaa && cek("AtlaticKey", m.sender) === "") {
        console.log("Owner needs to set atlatic");
        return reply(`Silahkan Lakukan Koneksi Ke Atlatic Pedia Terlebih dahulu\n\nKetik *SETAPI*`)
    }
    const axios = require("axios");
    const fs = require('fs');

    var qs = require('qs');
    var data = qs.stringify({
        'api_key': global.AtlaticKey
    });
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://atlantich2h.com/get_profile',
        headers: { },
        data : data
    };

    axios(config)
    .then(function (response) {
        // Membaca file JSON prabayar
        let r = JSON.parse(fs.readFileSync('./SETTING2/DB/all_prepaid.json'));

        // Menghitung total produk prabayar
        let totalProdukPrabayar = r.reduce((count, i) => count + (i.name ? 1 : 0), 0);

        let title = ` *INFO AKUN ATLANTICH H2H*

> Nama : ${response.data.data.name}
> Username : ${response.data.data.username}
> Email : ${response.data.data.email}
> No. Telp : ${response.data.data.phone}
> Saldo : ${formatmoney(response.data.data.balance)}
> Status : ${response.data.data.status}

*Total Produk Prabayar*: ${totalProdukPrabayar}
`
const menuuu = [
        {
            title: `Powered by ${footer}`,
         
            rows: [
                { header: "IP WITHELIST", title: "", description: "", id: ".ipv4" }
            ]
        },
                {
            highlight_label: "Member",
            rows: [
                { header: `Member ${footer}`, title: "", description: "", id: ".allmember" }
            ]
        }
    ];

    
    
const buttonParamsJson = `{
        "title": "CLICK HERE",
        "sections": ${JSON.stringify(menuuu)}
    }`;
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ''
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: ''
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: title,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    })
    .catch(function (error) {
        console.log(error);
    });
}
break

            case 'allmember': {
    if (!isOwner) return m.reply(mess.owner);
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    const allMemberButtons = `{
        "title": "Pilih Menu All Member",
        "sections": [
            {
                "title": "Pilihan All Member",
                "rows": [
                    {"title": "List Member", "description": "Melihat daftar semua member", "id": ".listmember"},
                    {"title": "Cek Riwayat Transaksi", "description": "Melihat riwayat transaksi member", "id": ".cekriwayattrx"},
                    {"title": "Cek Member", "description": "Memeriksa detail member", "id": ".cekmember"},
                    {"title": "Acc Deposit", "description": "Menyetujui deposit member", "id": ".accdepo"},
                    {"title": "Min Saldo", "description": "Mengatur saldo minimum", "id": ".minsaldo"}
                ]
            }
        ]
    }`;
    let allMemberMsg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silakan pilih menu untuk All Member:'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'All Member',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: allMemberButtons
                            }
                        ]
                    })
                })
            }
        }
    }, {});
    await AnanthaGanz.relayMessage(allMemberMsg.key.remoteJid, allMemberMsg.message, {
        messageId: allMemberMsg.key.id
    }, { quoted: m });
}
break;


case "toplayanan": {
   if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`);
    if (cek("waktu", m.sender) == true) return JamBali()
    const filePath = './SETTING2/DB/dataTrx.json';

    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const allTransactions = JSON.parse(fileData);

        if (Array.isArray(allTransactions) && allTransactions.length > 0) {
            const productDetails = allTransactions.reduce((acc, transaction) => {
                // Hanya proses transaksi dengan status "Sukses"
                if (transaction.status === "success") {
                    const productName = transaction.produk;

                    if (!acc[productName]) {
                        acc[productName] = {
                            count: 0,
                            totalHarga: 0
                        };
                    }

                    acc[productName].count += 1;
                    acc[productName].totalHarga += transaction.harga; // Dengan asumsi nama properti adalah 'harga'
                }
                return acc;
            }, {});

            const sortedProducts = Object.keys(productDetails).sort((a, b) => productDetails[b].count - productDetails[a].count);
            const topProducts = sortedProducts.slice(0, 10);

            const topProductsList = topProducts.map((product, index) => `ℝ𝕒𝕥𝕚𝕟𝕘 ${index + 1}\n> 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐧𝐚𝐦𝐞 : ${product}\n> 𝐎𝐫𝐝𝐞𝐫 𝐐𝐮𝐚𝐧𝐭𝐢𝐭𝐲 : ${productDetails[product].count}\n> 𝐓𝐨𝐭𝐚𝐥 𝐂𝐚𝐬𝐡 𝐎𝐮𝐭 : ${formatmoney(productDetails[product].totalHarga)}\n`).join('\n');
            
            // Hitung harga total di semua customer_kode
            const totalPrice = Object.values(productDetails).reduce((total, product) => total + product.totalHarga, 0);
            const currentDate = new Date();
            const monthNames = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            const currentMonth = monthNames[currentDate.getMonth()];
            const currentYear = currentDate.getFullYear();
            
            reply(` *𝕋𝕠𝕡 𝟙𝟘 ℙ𝕣𝕠𝕕𝕦𝕔𝕥𝕤 𝔹𝕪 𝕆𝕣𝕕𝕖𝕣* \n\n
𝚃𝚑𝚒𝚜 𝙼𝚘𝚗𝚝𝚑 : ${currentMonth} ${currentYear}\n
-----------------------------------------
${topProductsList}
-----------------------------------------
𝗧𝗵𝗼𝘀𝗲 𝗮𝗿𝗲 𝗼𝘂𝗿 𝟭𝟬 𝗯𝗲𝘀𝘁 𝘀𝗲𝗹𝗹𝗶𝗻𝗴 𝗽𝗿𝗼𝗱𝘂𝗰𝘁𝘀`);
        } else {
            reply("Oops, belum ada data produk terlaris.");
        }
    } catch (error) {
        console.error('Error reading/parsing the JSON file:', error);
        reply("Oops, terjadi kesalahan. Mohon hubungi admin untuk bantuan lebih lanjut.");
    }
    break;
}
function isValidEmailFormat(email) {
    return email.includes('@');
}
case 'setemail': {
    // Cek apakah pengguna sudah memiliki email yang terverifikasi
    if (cek("verfiyemail", m.sender) == false) 
        return reply(`Oops, Email hanya dapat diganti 1, jika ada kendala di email silahkan hubungi admin`);
    if (!cek("cekVerify", m.sender) == true) 
        return reply(`Oops, Silahkan periksa email : ${cek("email", m.sender)}, lalu ikuti langkah verifikasi`);
    // Split pesan untuk mendapatkan email
    let email = text.split(" ")[0];
    // Memastikan alamat email memiliki "@" dan format yang benar
    if (!email.includes('@') || !isValidEmailFormat(email)) {
        return reply(`Oops, Email yang kamu input tidak valid`);
    }
    // Baca file JSON
    const filePath = './SETTING2/DB/dataPelanggan.json';
    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const allUserData = JSON.parse(fileData);

        // Periksa apakah email sudah ada dalam data pengguna
        let emailAlreadyExists = false;
        for (const userData of allUserData) {
            // Jika email sudah ada, tandai bahwa email sudah terdaftar
            if (userData.email === email) {
                emailAlreadyExists = true;
                break;
            }
        }

        // Jika email sudah terdaftar, kirim pesan bahwa email telah digunakan
        if (emailAlreadyExists) {
            return reply(`Oops, Email Telah Digunakan Oleh User Lain`);
        }
    function generateRandomCodev(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}
let code = "TPVerif_" + dengan_nol + "_" +generateRandomCodev(30);
    // Generate random confirmation code
    sendConfirmationEmail(email, code)
    // Simpan email bersama dengan pengguna
    sett("email", m.sender, email);
    sett("verfiyemail", m.sender, false);
    reply(`Sip, Kode verifikasi telah dikirim ke email : ${email}, jika tidak menemukan silahkan cek folder spam :)`);
    } catch (error) {
        console.error("Error:", error);
        return reply("Oops, Terjadi kesalahan saat memperbarui email.");
    }
    break;
}
case 'verifikasicode':{
 if (cek("cekVerify", m.sender) == false) 
        return reply(`Oops, Kamu sudah terverifikasi`);
function generateRandomCodev(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}
let code = dengan_nol + "_" + generateRandomCodev(20);
let email = cek("email", m.sender)
    // Generate random confirmation code
    sendConfirmationEmail(email, code)

    // Simpan email bersama dengan pengguna
    reply(`Berhasil Silahkan Cek Email ${cek("email", m.sender)}`)
    }
    break
case 'registrasi': {
    // Memeriksa apakah pengguna telah memasukkan kode konfirmasi
    let userVerificationCode = text.split(" ")[0];
    let savedVerificationCode = cek("verificationCode", m.sender);
    console.log("User Verification Code:", userVerificationCode);
    console.log("Saved Verification Code:", savedVerificationCode);
    // Memeriksa apakah kode konfirmasi yang dimasukkan oleh pengguna sama dengan yang disimpan
    if (userVerificationCode !== savedVerificationCode) {
        return reply("Oops, kode yang anda input tidak valid");
    }
    // Lanjutkan proses pendaftaran jika kode konfirmasi valid
    // Simpan informasi pendaftaran ke dalam database atau penyimpanan sementara
    // Misalnya, Anda dapat menyimpan email dan kode konfirmasi yang telah diverifikasi
    // serta informasi pengguna lainnya.
    let userEmail = cek("email", m.sender);
    // Lanjutkan dengan proses pendaftaran, misalnya:
    // registrasi(userEmail, otherUserData);

    // Tandai email sebagai terverifikasi
    sendEmail();
    sett("cekVerify", m.sender, false);
    sett("verificationCode", m.sender, "");
    reply("Oke sip, email kamu udah terverifikasi");
    break;
}
case 'minbalance': {
  // Memeriksa apakah pengguna adalah pemilik bot
  if (!isOwner) return reply(mess.owner)
  // Memeriksa apakah pesan berisi data yang diperlukan xx
  if (!text) return reply(`Oops, Kamu salah input!\n\nContoh : ${prefix}minbalance 62851xxxx|20000`)
  // Memecah pesan menjadi ID dan saldo
  let id = text.split("|")[0]
  let saldo = text.split("|")[1] * 1
  // Memastikan saldo dimasukkan dengan benar
  if (!saldo) return reply(`Oops, Kamu salah input!\n\nContoh : ${prefix}minbalance 62851xxxx|20000`)
  // Mengurangkan saldo dari akun yang ditentukan
  sett("-saldo", id + "@s.whatsapp.net", saldo) 
  // Mendapatkan saldo terbaru dari akun yang terpengaruh
  let updatedSaldo = cek("saldo", id+"@s.whatsapp.net")
  // Memperbarui saldo agar dibulatkan
  updatedSaldo = Math.round(updatedSaldo)
  // Memberikan konfirmasi bahwa saldo berhasil dikurangkan
  reply(`Sip, Saldo ${formatmoney(saldo)} Pada User ${id} Telah Dikurangi Saldo Akun Terbaru User Tersebut ${formatmoney(updatedSaldo)}`)
  // Mengirim pesan notifikasi ke akun yang terpengaruh
  setTimeout(function(){
  AnanthaGanz.sendMessage(id+ "@s.whatsapp.net",{text: `Yoo, Ada Update Saldo Terbaru dari admin!! Saldo Anda telah dikurangi sebesar ${formatmoney(saldo)} Saldo Akun Anda Sekarang ${formatmoney(updatedSaldo)}`})
  }, 3000)
  
  // Mengatur ulang data terkait deposit
  sett("deposit", m.sender, "")
  sett("reff_deposit", m.sender, "")
  sett("tanggal_deposit", m.sender, "")
}
break
case 'accdepo': {
    if (!isOwner) return m.reply(mess.owner);
    let id = text.split(" ")[0];
    let sndr = id + "@s.whatsapp.net";
    const checkIdDepo1 = (userId, deppo) => {
        let status = false;
        Object.keys(deppo).forEach((i) => {
            if (deppo[i].id === userId) {
                status = true;
            }
        });
        return status;
    };
    const filePath = `./SETTING2/DB/TRANSACTION/Api/Deposit/${cek("deposit", sndr)}.json`;
    if (!fs.existsSync(filePath)) {
        return reply(`Oops, User ${id} tidak melakukan request deposit`);
    }
    const deppo = JSON.parse(fs.readFileSync(filePath));
    let ref_sender = checkIdDepo1(sndr, deppo) ? checkIdDepo1(sndr, deppo) : deppo.ref;
    let saldo = (checkIdDepo1(sndr, deppo) ? checkIdDepo1(sndr, deppo) : deppo.total) * 1;
    
    if (!id || !saldo) {
        return reply(`*FITUR ADDSALDO MANUAL* 
Silakan Gunakan Dengan Cara :
*${prefix}accdepo no_wa*
Contoh :
*${prefix}accdepo no_wa`);
    }
    sett("+saldo", sndr, saldo);
    reply(`Berhasil, kamu telah menambahkan saldo pengguna ${id}. Ref: ${ref_sender}/${formatmoney(saldo)}/Total: ${formatmoney(cek("saldo", sndr))}`);
    setTimeout(function() {
        AnanthaGanz.sendMessage(sndr, {
            text: `Hai *${id}*, kamu baru saja mendapatkan penambahan saldo dari admin. Ref: ${ref_sender}/${formatmoney(saldo)}/Saldo sekarang: ${formatmoney(cek("saldo", sndr))}`
        });
    }, 1000);
    const depoFilePath = './SETTING2/DB/TRANSACTION/dataDeposit.json';
    const depoUser = JSON.parse(fs.readFileSync(depoFilePath, 'utf8'));
    const newDepo = {
        buyer: sndr,
        status: "PAID",
        jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
        waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
        no_pembayaran: ref_sender,
        method: `MANUAL`,
        jumlah: saldo.toString(),
        fee: `0`,
        total: saldo.toString(),
    };
    
    depoUser.push(newDepo);
    fs.writeFileSync(depoFilePath, JSON.stringify(depoUser, null, 2), 'utf8');
    setTimeout(() => {
        sett("deposit", sndr, "");
        sett("desc_prabayar", sndr, "");
        sett("status", sndr, true);
        sett("reff_deposit", sndr, false)
        
        sett("desc_prabayar", sndr, "");
        fs.unlinkSync(filePath);
    }, 3000);
}
break;
case 'topuser': {
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`);
    
    const filePath = './SETTING2/DB/dataTrx.json';

    try {
        // Baca file JSON
        const fileData = fs.readFileSync(filePath, 'utf8');
        const allUserData = JSON.parse(fileData);

        if (allUserData.length === 0) {
            return reply("Oops! belum ada data leaderboard");
        }

        // Buat peta untuk menyimpan informasi pengguna
        const userMap = new Map();

        // Ulangi semua data transaksi untuk menghitung total transaksi setiap pengguna
        allUserData.forEach(data => {
            // Hanya proses transaksi dengan status "Sukses"
            if (data.status === "success") {
                const user = data.buyer.split('@')[0]; // Ambil nomor pengguna tanpa @s.whatsapp.net

                // Perbarui total transaksi dan jumlah order pengguna
                if (userMap.has(user)) {
                    const userInfo = userMap.get(user);
                    userInfo.totalTransactions += 1;
                    userInfo.totalOrders += parseFloat(data.harga);
                } else {
                    userMap.set(user, {
                        totalTransactions: 1,
                        totalOrders: parseFloat(data.harga)
                    });
                }
            }
        });

        // Urutkan pengguna berdasarkan total transaksi dalam urutan menurun
        const sortedUserList = Array.from(userMap).sort((a, b) => b[1].totalTransactions - a[1].totalTransactions).slice(0, 10);

        // Format daftar pengguna
        const formattedUserList = sortedUserList.map(([user, userData], index) => {
            let censoredNumber = user.replace(/^62/, '0');
            censoredNumber = `${censoredNumber.substring(0, 5)}*****${censoredNumber.substring(censoredNumber.length - 4)}`;

            return `𝚄𝚜𝚎𝚛𝚜 ${index + 1}\n> 𝐈𝐃 : ${censoredNumber}\n> 𝐓𝐨𝐭𝐚𝐥 𝐓𝐫𝐚𝐧𝐬𝐚𝐜𝐭𝐢𝐨𝐧𝐬 : ${userData.totalTransactions}\n> 𝐓𝐨𝐭𝐚𝐥 𝐂𝐚𝐬𝐡 𝐎𝐮𝐭 : ${formatmoney(userData.totalOrders)}\n`;
        });

        const currentDate = new Date();
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const currentMonth = monthNames[currentDate.getMonth()];
        const currentYear = currentDate.getFullYear();
        const replyMessage = `
 *Top 10 Pengguna Yang Paling Aktif* \n\n
Bulan : ${currentMonth} ${currentYear}\n
-----------------------------------------
${formattedUserList.join('\n')}
-----------------------------------------
*${toko}*
`;

        reply(replyMessage);
    } catch (error) {
        console.error('Error reading the transaction history file:', error);
        reply("Oops, terjadi kesalahan. Mohon hubungi admin untuk bantuan lebih lanjut.");
    }
    break;
}
case 'topdeposit': {
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
    const filePath = './SETTING2/DB/TRANSACTION/dataDeposit.json';

    try {
        // Baca file JSON
        const fileData = fs.readFileSync(filePath, 'utf8');
        const allUserData = JSON.parse(fileData);

        if (allUserData.length === 0) {
          return reply("Oops! sepertinya belum ada data leaderboard ");
        }

        // Buat peta untuk menyimpan informasi pengguna
        const userMap = new Map();

        // Ulangi semua data transaksi untuk menghitung total deposit setiap pengguna
        allUserData.forEach(data => {
            const user = data.buyer.split('@')[0]; // Ambil nomor pengguna tanpa @s.whatsapp.net
            const amount = parseFloat(data.jumlah); // Ambil jumlah deposit

            // Perbarui total deposit dan jumlah deposit pengguna
            if (userMap.has(user)) {
                const userData = userMap.get(user);
                userData.totalDeposits += amount;
                userData.numTransactions++;
            } else {
                userMap.set(user, {
                    totalDeposits: amount,
                    numTransactions: 1
                });
            }
        });

        // Urutkan pengguna berdasarkan total deposit dalam urutan menurun
        const sortedUserList = Array.from(userMap).sort((a, b) => b[1].totalDeposits - a[1].totalDeposits).slice(0, 10);

        // Format daftar pengguna
    const formattedUserList = sortedUserList.map(([user, userData], index) => {
    let censoredNumber = user.replace(/^62/, '0');
    censoredNumber = `${censoredNumber.substring(0, 5)}*****${censoredNumber.substring(censoredNumber.length - 4)}`;
    // Rest of your code
            
            return `*Top* ${index + 1}\n> UID : ${censoredNumber}\n> Total Transaksi : ${formatmoney(userData.totalDeposits)}\n> Total Uang Masuk : ${userData.numTransactions}\n`;
        });

        const currentDate = new Date();
        const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
        const currentMonth = monthNames[currentDate.getMonth()];
        const currentYear = currentDate.getFullYear();
        const replyMessage = `
 *Top 10 Leaderboard Deposit* \n\n
Bulan : ${currentMonth} ${currentYear}\n
-----------------------------------------
${formattedUserList.join('\n')}
-----------------------------------------
${toko}
`;

        reply(replyMessage);
    } catch (error) {
        console.error('Error reading the transaction history file:', error);
        reply("Oops, terjadi kesalahan. Mohon hubungi admin untuk bantuan lebih lanjut.");
    }
    break;
}
case 'detail.':{
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
reply(`*Masukan SKU CODE* Contoh: ${prefix}detail ML5`);
}
break







            case 'rekap': {
    if (!isOwner) return reply(mess.owner);
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const filePath = './SETTING2/DB/dataTrx.json';

    try {
        // Read the JSON file
        const fileData = fs.readFileSync(filePath, 'utf8');
        const allUserData = JSON.parse(fileData);

        if (allUserData.length === 0) {
            return reply("Gagal, Tidak Ditemukan Data Transaksi");
        }

        // Buat Peta Untuk Menyimpan Informasi Pembeli
        const buyerMap = new Map();

        // Inisialisasi variabel untuk totalHarga keseluruhan, totalHargaModal, totalProfit, totalTransaksi
        let overallTotalHarga = 0;
        let overallTotalHargaModal = 0;
        let overallTotalProfit = 0;
        let overallTotalTransactions = 0;

        // Ulangi seluruh riwayat transaksi untuk menghitung totalHarga, totalHargaModal, totalProfit, dan mengumpulkan detail
        allUserData.forEach(data => {
            // Ekstrak pembeli tanpa @s.whatsapp.net
            const buyerWithoutSuffix = data.buyer.split('@')[0];

            // Perbarui total keseluruhan
            overallTotalHarga += parseFloat(data.harga);
            overallTotalTransactions += 1;

            // Hitung totalHargaModal sebagai penjumlahan harga_modal untuk setiap transaksi
            const hargaModal = parseFloat(data.harga_modal);
            overallTotalHargaModal += isNaN(hargaModal) ? 0 : hargaModal;

            // Hitung keuntungan untuk setiap transaksi
            const profit = parseFloat(data.harga) - (isNaN(hargaModal) ? 0 : hargaModal);
            overallTotalProfit += profit;

            // Periksa apakah pembeli sudah ada di peta
            if (buyerMap.has(buyerWithoutSuffix)) {
                // Perbarui total transaksi pembeli yang ada, total harga, total harga modal, dan total keuntungan
                const buyerInfo = buyerMap.get(buyerWithoutSuffix);
                buyerInfo.totalTransactions += 1;
                buyerInfo.totalHarga += parseFloat(data.harga);
                buyerInfo.totalHargaModal += isNaN(hargaModal) ? 0 : hargaModal;
                buyerInfo.totalProfit += profit;
            } else {
                // Tambahkan pembeli baru ke peta
                buyerMap.set(buyerWithoutSuffix, {
                    totalTransactions: 1,
                    totalHarga: parseFloat(data.harga),
                    totalHargaModal: isNaN(hargaModal) ? 0 : hargaModal,
                    totalProfit: profit,
                });
            }
        });

        // Urutkan daftar pembeli berdasarkan totalProfit dalam urutan menurun
        const sortedBuyerList = Array.from(buyerMap).sort((a, b) => b[1].totalProfit - a[1].totalProfit);

        // Format totalHarga keseluruhan, totalHargaModal, totalProfit, dan totalTransaksi sebagai mata uang
        // Menggunakan Intl.NumberFormat untuk pemformatan mata uang


// Menggunakan fungsi formatMoney untuk pemformatan nilai
const formattedOverallTotalHarga = formatmoney(overallTotalHarga);
const formattedOverallTotalHargaModal = formatmoney(overallTotalHargaModal);
const formattedOverallTotalProfit = formatmoney(overallTotalProfit);

// ...

const buyerList = sortedBuyerList.map(([buyer, info]) => {
    const formattedTotalHarga = formatmoney(info.totalHarga);
    const formattedTotalHargaModal = formatmoney(info.totalHargaModal);
    const formattedTotalProfit = formatmoney(info.totalProfit);
const buyert = buyer.split('@')[0].replace('62', '0');
    return `𝗨𝘀𝗲𝗿 : ${buyert}\n> Total Pembelian : ${info.totalTransactions}\n> Omset : ${formattedTotalHarga}\n> Modal : ${formattedTotalHargaModal}\n> Profit : ${formattedTotalProfit}\n`;
});

const replyMessage = `𝗥𝗘𝗞𝗔𝗣 𝗢𝗥𝗗𝗘𝗥𝗦\n\n\`\`\`𝗧𝗼𝘁𝗮𝗹 𝗢𝗿𝗱𝗲𝗿𝘀 : ${overallTotalTransactions}\n𝗢𝗺𝘀𝗲𝘁 : ${formattedOverallTotalHarga}\n𝗠𝗼𝗱𝗮𝗹 : ${formattedOverallTotalHargaModal}\n𝗣𝗿𝗼𝗳𝗶𝘁 : ${formattedOverallTotalProfit} \n====================\`\`\`\n\n${buyerList.join('\n')}`;

reply(replyMessage);
    } catch (error) {
        console.error('Error reading the transaction history file:', error);
        reply("Gagal, Tidak dapat membaca data");
    }
    break;
}       
function isWithinDateRange(dateString, dateFrom, dateTo) {
    const date = moment(dateString, 'DD/MM/YY', true);
    return date.isBetween(moment(dateFrom, 'DD/MM/YY'), moment(dateTo, 'DD/MM/YY'), null, '[]');
} 

case 'addreseller': {
    if (!isOwner) return reply(mess.wait)
    let siapa = args[0];
    // Pastikan argumen nomor telepon diberikan
    if (!siapa) {
        return reply(`Format yang benar: ${prefix}addprem <nomor_telepon>`);
    }
    // Cek apakah nomor tersebut sudah menjadi anggota premium
   if(cek("level", siapa + "@s.whatsapp.net") == "Reseller Z") return reply(`Oops, User Tersebut Telah Reseller Z`)

    // Tambahkan nomor telepon ke dalam array premium
    sett("level", siapa + "@s.whatsapp.net", "Reseller Z");
    // Kirim balasan berhasil
    reply(`Oke sip, menambahkan nomor ${siapa} ke dalam daftar reseller`);
}
break;
case 'info':{
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("waktu", m.sender) == true) return JamBali()
const trxFilePath = './SETTING2/DB/dataTrx.json';
    const depFilePath = './SETTING2/DB/TRANSACTION/dataDeposit.json';

    try {
        // Baca file JSON riwayat transaksi
        const trxFileData = fs.readFileSync(trxFilePath, 'utf8');
        const allTrxUserData = JSON.parse(trxFileData);

        // Filter data untuk m.sender tertentu
        const trxUserData = allTrxUserData.filter(data => data.buyer === m.sender);

        // Hitung total transaksi
        const totalTransactions = trxUserData.length;
        
        // Baca file JSON riwayat deposit
        const depFileData = fs.readFileSync(depFilePath, 'utf8');
        const allDepUserData = JSON.parse(depFileData);

        // Filter data untuk m.sender tertentu
        const depUserData = allDepUserData.filter(data => data.buyer === m.sender);

        // Hitung total deposit
        const totalDeposits = depUserData.length;
       
       
        let infoMessage = ` TENTANG AKUN KU\n\n`;
        infoMessage += `> Nama : ${pushname}\n`;
        infoMessage += `> Saldo : ${formatmoney(cek("saldo", m.sender))}\n`;
        infoMessage += `> UID : ${sender.replace("@s.whatsapp.net", "")}\n`;
        infoMessage += `> Email : ${cek("email", m.sender)}\n`;
        infoMessage += `> Level : ${cek("level", m.sender)}\n`;
        infoMessage += `> Transaksi : ${totalTransactions}\n`;
        infoMessage += `> Deposit : ${totalDeposits}\n`;
        infoMessage += `> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')}\n> Hari : ${hasiltgl}`
        
    const buttonParamsJson = `{
        "title": "Pilih Menu Info",
        "sections": [
            {
                "title": "Pilihan Info",
                "rows": [
                    {"title": "Deposit", "description": "Melakukan Penambahan Saldo", "id": ".deposit"},
                    {"title": "Manajemen Transaksi", "description": "Informasi tentang transaksi", "id": ".infotrxku"},

                    {"title": "Transfer antar pengguna", "description": "Melakukan Transfer Ke Pengguna ", "id": ".transfer"},
                    {"title": "Leaderboard Pengguna", "description": "Daftar Leader Pengguna ${footer}", "id": ".leaderboard"},

                    {"title": "Tingkatkan Level", "description": "Proses upgrade ke Collector Z", "id": ".upgrade"},
                    {"title": "Manfaat Meningkatkan Level", "description": "Manfaat menjadi Collector Z", "id": ".manfaat"},
                    {"title": "Hapus Akun saya", "description": "Akan Kembali ke dealfut", "id": ".hapus_akun"},
                    {"title": "Ubah Waktu", "description": "Set ulang waktu", "id": ".setwaktu"}
                ]
            }
        ]
    }`;

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ''
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: infoMessage,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    } catch (error) {
        console.error('Error reading transaction history files:', error);
        reply("Gagal, Terjadi kesalahan saat mengambil riwayat transaksi Anda.");
        }
}
break;
    case 'leaderboard':
    const leaderbordButtons = `{
        "title": "Pilih Menu Leaderboard",
        "sections": [
            {
                "title": "Pilihan Leaderboard",
                "rows": [
                    {"title": "Top User", "description": "Leaderboard untuk pengguna teratas", "id": ".topuser"},
                    {"title": "Top Deposit", "description": "Leaderboard untuk deposit teratas", "id": ".topdeposit"},
                    {"title": "Top Layanan", "description": "Leaderboard untuk layanan teratas", "id": ".toplayanan"}
                ]
            }
        ]
    }`;

    let leaderbordMsg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silakan pilih jenis leaderboard:'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Leaderboard',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: leaderbordButtons
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(leaderbordMsg.key.remoteJid, leaderbordMsg.message, {
        messageId: leaderbordMsg.key.id
    }, { quoted: m });
    break;

case 'infotrxku':
    const infotrxkuButtons = `{
        "title": "Pilih Menu Info Transaksi",
        "sections": [
            {
                "title": "Pilihan Info Transaksi",
                "rows": [
                    {"title": "Riwayat Deposit", "description": "Lihat riwayat deposit", "id": ".riwayatdeposit"},
                    {"title": "Riwayat Transaksi", "description": "Lihat riwayat transaksi", "id": ".riwayattrx"}
                ]
            }
        ]
    }`;

    let infotrxkuMsg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silakan pilih jenis informasi transaksi:'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Info Transaksi',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: infotrxkuButtons
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(infotrxkuMsg.key.remoteJid, infotrxkuMsg.message, {
        messageId: infotrxkuMsg.key.id
    }, { quoted: m });
    break;
    case 'riwayattrx': {
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const filePath = './SETTING2/DB/dataTrx.json';
    try {
        // Baca file JSON
        const fileData = fs.readFileSync(filePath, 'utf8');
        const allUserData = JSON.parse(fileData);

        // Filter data untuk m.sender tertentu
        const userData = allUserData.filter(data => data.buyer === m.sender);

        if (userData.length === 0) {
            return reply("Kamu belum memiliki riwayat transaksi yang sukses.");
        }

        // Inisialisasi variabel untuk total harga dan total transaksi
        let totalHarga = 0;
        let totalTransactions = userData.length;

        // Ulangi riwayat transaksi pengguna untuk menghitung totalHarga
        userData.forEach(data => {
            totalHarga += parseFloat(data.harga);
        });

        // Ulangi riwayat transaksi pengguna untuk membuat historyText
        const historyText = userData.map((data, index) => {
          
            let totale = data.harga * 1

            return `
  Trx - ${index + 1}:
> Produk : ${data.produk}
> ID Trx : ${data.ref_id}
> Tujuan : ${data.tujuan}
> Harga : ${formatmoney(totale)}
> Status : Succes
> Waktu : ${data.jam} | ${data.waktu}
> Catatan : ${data.invoice}
`;
        });

let totalw = totalHarga * 1
        // Cantumkan total harga dan total transaksi di reply
        const replyMessage = `
*Riwayat Transaksi Kamu* 

Total Pesanan : ${totalTransactions}
Total Harga Pesanan : ${formatmoney(totalw)}

${historyText.join('\n')}
`;

        reply(replyMessage);
    } catch (error) {
        console.error('Error reading the transaction history file:', error);
        reply("Gagal, Ada Masalah Ketika Membaca data, silahkan hubungi Admin");
    }
    break;
}
    case 'riwayatdeposit': {
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const filePath = './SETTING2/DB/TRANSACTION/dataDeposit.json';
    try {
        // Baca file JSON
        const fileData = fs.readFileSync(filePath, 'utf8');
        const allUserData = JSON.parse(fileData);

        // Filter data untuk m.sender tertentu
        const userData = allUserData.filter(data => data.buyer === m.sender);

        if (userData.length === 0) {
            return reply("Kamu belum memiliki riwayat deposit.");
        }

        // Inisialisasi variabel untuk total harga dan total transaksi
        let totalHarga = 0;
        let totalTransactions = userData.length;

        // Ulangi riwayat transaksi pengguna untuk menghitung totalHarga
        userData.forEach(data => {
            totalHarga += parseFloat(data.total);
        });

        // Ulangi riwayat transaksi pengguna untuk membuat historyText
        const historyText = userData.map((data, index) => {
            // Format harga sebagai angka dengan simbol mata uang
            let fee = data.fee * 1
            let total = data.total * 1
            let jumlah = data.jumlah * 1
            return `
 Deposit - ${index + 1} : 
> Metode : ${data.method}
> Referensi : ${data.no_pembayaran}
> Jumlah : ${formatmoney(jumlah)}
> Biaya Admin : ${formatmoney(fee)} 
> Total : ${formatmoney(total)}
> Waktu : ${data.jam} | ${data.waktu}
> Status : ${data.status}
`;
});
       let totalw = totalHarga * 1
        // Cantumkan total harga dan total transaksi di reply
        const replyMessage = `
  *RIWAYAT DEPOSIT KAMU* 

Total Deposit : ${totalTransactions}
Total Nominal : ${formatmoney(totalw)}

${historyText.join('\n')}
`;

        reply(replyMessage);
    } catch (error) {
        console.error('Error reading the transaction history file:', error);
        reply("Gagal, Ada Masalah Ketika Membaca data, silahkan hubungi Admin");
    }
    break;
}
case 'riwayat': {
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
    const filePath = './SETTING2/DB/dataTrx.json';
    let tanggalFrom = text.split(" ")[0];
    let tanggalTo = text.split(" ")[1];

    // Periksa apakah kedua input tanggal disediakan
    if (!tanggalFrom || !tanggalTo) {
        return reply(`Gagal, Masukan Tanggal Awal & Akhir.\nContoh: ${prefix}riwayat 10/11/23 11/11/23`);
    }

    try {
        // Baca file JSON
        const fileData = fs.readFileSync(filePath, 'utf8');
        const allUserData = JSON.parse(fileData);

        // Filter data untuk m.sender tertentu dan dalam rentang tanggal
        const userData = allUserData.filter(data =>
            data.buyer === m.sender &&
            isWithinDateRange(data.waktu, tanggalFrom, tanggalTo)
        );

        if (userData.length === 0) {
            return reply(`Gagal, Tidak Ada Transaksi Yang Tercatat Pada Tanggal : ${tanggalFrom} - ${tanggalTo}`);
        }

        // Inisialisasi variabel untuk total harga dan total transaksi
        let totalHarga = 0;
        let totalTransactions = userData.length;

        // Ulangi riwayat transaksi pengguna untuk menghitung totalHarga
        userData.forEach(data => {
            totalHarga += parseFloat(data.harga);
        });

        // Ulangi riwayat transaksi pengguna untuk membuat historyText
        const historyText = userData.map((data, index) => {
            // Format Harga sebagai angka dengan simbol mata uang
            const formattedHarga = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR'
            }).format(data.harga);

            return `🛒 𝗢𝗿𝗱𝗲𝗿𝘀 𝗞𝗲 ${index + 1} : 
› 𝗡𝗮𝗺𝗮 𝗣𝗿𝗼𝗱𝘂𝗸 : ${data.customer_kode}
› 𝗧𝗿𝘅𝗶𝗱 : ${data.ref_id}
› 𝗧𝘂𝗷𝘂𝗮𝗻 : ${data.tujuan}
› 𝗛𝗮𝗿𝗴𝗮 : ${formattedHarga}
› 𝗪𝗮𝗸𝘁𝘂 : ${data.jam} | ${data.waktu}
› 𝗦𝗻/𝗞𝗲𝘁 : ${data.invoice}\n`;
        });

        // Format total Harga sebagai mata uang
        const formattedTotalHarga = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).format(totalHarga);

        // Cantumkan total Harga dan total transaksi di reply
        const replyMessage = ` 𝗥𝗜𝗪𝗔𝗬𝗔𝗧 𝗢𝗥𝗗𝗘𝗥𝗦 

𝗧𝗼𝘁𝗮𝗹 𝗢𝗿𝗱𝗲𝗿𝘀 : ${totalTransactions}
𝗝𝘂𝗺𝗹𝗮𝗵 𝗢𝗿𝗱𝗲𝗿𝘀 : ${formattedTotalHarga}

${historyText.join('\n')}`;

        reply(replyMessage);
    } catch (error) {
        console.error('Error reading the transaction history file:', error);
         reply("Gagal, Ada Masalah Ketika Membaca data, silahkan hubungi Admin");
    }
    break;
}


case 'hubungi': {
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
    reply(`Hai Kak ${pushname}, Jika ada yang perlu ditanyakan atau ada kendala, jangan ragu untuk menghubungi tim Customer Service kami ya! 😉\n\nKamu bisa langsung chat dengan kami di WhatsApp melalui link berikut: (wa.me/${owner}?text=Halo)`);
    break;
}


  case 'reset': {
    if (!isOwner) return reply(mess.owner);

    const filesToReset = [
        './SETTING2/DB/all_prepaid.json'
    ];

    try {
        // Menghapus isi teks dari setiap file
        filesToReset.forEach(file => fs.writeFileSync(file, '[]', 'utf8'));
        reply("Sip, Berhasil Menghapus");
    } catch (error) {
        console.error('Error resetting data:', error);
        reply('An error occurred while resetting data.');
    }

    break;
}
case 'getpasca':{
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'api_key': global.AtlaticKey,
  'type': 'pascabayar' 
});
var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://atlantich2h.com/layanan/price_list',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
  let data = JSON.stringify(response.data.data);
      fs.writeFileSync("./SETTING2/DB/all_postpaid.json", data);
     
})
.catch(function (error) {
  console.log(error);
});
}
break
case 'cektagihan':{
var axios = require('axios');
var qs = require('qs');
let sku_pasca = q.split(" ")[0]
    let no_pasca = q.split(" ")[1]
    if (!sku_pasca || !no_pasca) {
        return reply(`*CEK & BAYAR TAGIHAN*

Gunakan:
*cektagihan sku_kode no_pelanggan*

Contoh:
*cektagihan PLNP 55555xxxx*`)
    }
    
    let pasca = JSON.parse(fs.readFileSync('./SETTING2/DB/all_postpaid.json'));
    let layanan_pasca = ""
    
    for(let i of pasca) {
        if (i.code == sku_pasca) {
            layanan_pasca = i.layanan;
            sett("desc_prabayar", m.sender, layanan_pasca);
            break;
        }
    }
var data = qs.stringify({
  'api_key': global.AtlaticKey,
  'reff_id': randomPay,
  'code': sku_pasca,
  'customer_no': no_pasca
});
var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://atlantich2h.com/transaksi/tagihan',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
  let tagihan = parseInt(response.data.data.total_tagihan - response.data.data.biaya_admin * 1);
  reply(` *RICIAN TAGIHAN*

> Nama Pelanggan : ${response.data.data.nama_pelanggan}
> Id Pelanggan : ${response.data.data.nomor_pelanggan}
> Layanan :
> Tagihan : ${formatmoney(tagihan)}
> Admin : ${formatmoney(response.data.data.biaya_admin)}
> Total Tagihan : ${formatmoney(response.data.data.total_tagihan)}
  
  `)
  setTimeout(() => {
                    sett("price", m.sender, response.data.data.total_tagihan);
                    sett("product_name", m.sender, response.data.data.nama_pelanggan);
                    sett("status", m.sender, false);
                    sett("tujuan", m.sender, response.data.data.nomor_pelanggan);
                    sett("buyer_sku_code", m.sender, sku_pasca);
                    sett("desc_prabayar", m.sender, layanan_pasca);
                    sett("reff", m.sender, response.data.data.reff_id);
                    sett("layanan", m.sender, layanan_pasca);
                }, 1000);
  
})
.catch(function (error) {
     if (error.response) {
  reply(error.response.data.message)
  }
});
}
break
case 'bayartagihan': {
  var axios = require('axios');
  var qs = require('qs');
  if (cek("reff", m.sender) == "") return reply(`Gagal, kamu belum melakukan *${prefix}cektagihan* yuk cek tagihan nya dulu...`);
  let ru = `${sender.split('@')[0]}`;
  let total_tagihan = `${cek("price", m.sender)}` * 1;
  if (total_tagihan > cek("saldo", m.sender)) return reply(`Oops, saldo tidak mencukupi untuk melakukan transaksi`);
  sett("-saldo", ru + "@s.whatsapp.net", total_tagihan);
  let ref_pasca = `${cek("reff", m.sender)}`;
  var data = qs.stringify({
    'api_key': global.AtlaticKey,
    'reff_id': ref_pasca,
    'code': `${cek("buyer_sku_code", m.sender)}`,
    'customer_no': `${cek("tujuan", m.sender)}`
  });
  var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://atlantich2h.com/transaksi/tagihan/bayar',
    headers: {},
    data: data
  };

  axios(config)
    .then(async response => {
      await loading();
      if (response.data.data.status == "failed") {
        reply("Oops, Pembayaran Tidak dapat dilakukan");
      } else if (response.data.data.status === "success") {
        let currentDate = moment.tz('Asia/Makassar');
        let tglll = currentDate.format('DD/MM/YYYY');
        let bulanskrg = currentDate.format('MMMM');
        let thun = currentDate.format('YYYY');
        setTimeout(() => {
          AnanthaGanz.sendPoll(from, `    
> ---------------------------------------
> STRUK PEMBAYARAN
> ---------------------------------------
> Tanggal : ${tglll} ${bulanskrg} ${thun}
> Waktu : ${currentDate.format('HH:mm')}
> Nama Pelanggan : ${response.data.data.nama_pelanggan}
> Nomor Pelanggan : ${response.data.data.nomor_pelanggan}     
> Layanan : ${cek("layanan", m.sender)} 
> ---------------------------------------                           
> Total Bayar : ${formatmoney(response.data.data.harga)}
> ---------------------------------------
> Nomor Seri : ${response.data.data.sn}
> ---------------------------------------
> Terima kasih telah melakukan pembayaran.
> Silakan simpan struk ini sebagai bukti pembayaran.\n`, [`Print ${response.data.data.reff_id}`, 'Hubungi Kami']);
        }, 3000);
        const trxFilePath = './SETTING2/DB/trxuser.json';
        const trxUserData = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const newTransaction = {
          buyer: m.sender,
          status: response.data.data.status,
          no_pembayaran: `INV${randomPay}`,
          ref_id: response.data.data.reff_id,
          jam: moment.tz(`Asia/${global.Wilayah}`).format('HH:mm:ss'),
          waktu: moment.tz(`Asia/${global.Wilayah}`).format('DD/MM/YY'),
          produk: `${cek("layanan", m.sender)}`,
          harga: response.data.data.harga,
          harga_modal: response.data.data.harga,
          tujuan: response.data.data.nomor_pelanggan,
          invoice: response.data.data.sn,
        };
        trxUserData.push(newTransaction);
        fs.writeFileSync(trxFilePath, JSON.stringify(trxUserData, null, 2), 'utf8');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
break;
 
case 'getlayanan':{
if (!isOwner) return
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'api_key': global.AtlaticKey,
  'type': 'prabayar' 
});
var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://atlantich2h.com/layanan/price_list',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
  let data = JSON.stringify(response.data.data);
      fs.writeFileSync("./SETTING2/DB/all_prepaid.json", data);
     
})
.catch(function (error) {
  console.log(error);
});
}
break
case 'margin':{
      if (m.sender === ananthaa && cek("AtlaticKey", m.sender) === "") {
        console.log("Owner needs to set atlatic");
        return reply(`Silahkan Lakukan Koneksi Ke Atlatic Pedia Terlebih dahulu\n\nKetik *SETAPI*`)
    }
    let qtpro =  text.split(" ")[0];
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'api_key': global.AtlaticKey,
  'type': 'prabayar'
});
var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://atlantich2h.com/layanan/price_list',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
  let data = JSON.stringify(response.data.data);
      fs.writeFileSync("./SETTING2/DB/all_prepaid.json", data);
     sett("profit", ananthaa, qtpro)
     reply("Berhasil mendapatkan layanan")
})
.catch(function (error) {
  console.log(error);
});
}
break
case 'order': {
    if (cek("verfiyemail", m.sender) == true) 
        return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("status", m.sender) == false) 
        return AnanthaGalau()
            if (cek("level", m.sender) == "") 
        return sendReseller()

    let order_contoh = `*Tips Orders :*
${prefix}order <sku_kode> <tujuan/id/zone>
Contoh: ${prefix}order BY5 0851xxxxx

*NOTE :*
Perlu Diingat!! Silahkan Cek Dulu *Nomor Tujuan* kamu pastiin udh bener ya
`;
    let create_reff = koderef;
    let customer_kode = text.split(" ")[0];
    let customer_no = text.split(" ")[1];
    if (!customer_kode || !customer_no) return reply(order_contoh);

    let hargaProduk = 0;
    const MINIMAL_PEMBELIAN = 5000;
    const MAXIMAL_PEMBELIAN = 1000000;
    let potongan = 0;

    for (let i of dbAtl) {    
        if (i.code == customer_kode) { 
            let uphar = i.price * 1;  // Harga awal produk
            let untungkita = cek("profit",m.sender) * 1 // Keuntungan dalam bentuk desimal (misalnya 8% keuntungan)
                        let upp = uphar += uphar * (untungkita / 100)  // Menghitung harga setelah menambahkan keuntungan
            let pricee = Math.round(upp);  // Membulatkan hasil perhitungan ke bilangan bulat terdekat
            let nama_produkk = i.name;  // Nama produk
            let product_buyer = i.code;  // Status produk
            let descc = i.note;  // Catatan produk
            

            
            sett("price", m.sender, pricee);
            sett("product_name", m.sender, nama_produkk);
            sett("status", m.sender, false);
            sett("tujuan", m.sender, customer_no);
            sett("buyer_sku_code", m.sender, product_buyer);
            sett("desc_prabayar", m.sender, descc);
            sett("reff", m.sender, create_reff);
        }
    }

    let harga = cek("price", m.sender) * 1; // Mendapatkan harga produk dari database
let potonganHarga = potongan * 1; // Menggunakan potongan harga yang telah dihitung sebelumnya
let jumlahHarga = harga + potonganHarga * 1; // Menambahkan harga produk dengan potongan harga
let totalPembayaran = jumlahHarga - potonganHarga * 1; // Menghitung total pembayaran setelah potongan harga
let tpcash = cek("saldo", m.sender) * 1;
let cash = `${formatmoney(tpcash)}`;
await loading();
setTimeout(() => {
    sendInvPending(sender, jumlahHarga, potonganHarga, totalPembayaran);
}, 3000);

if (/^(PLN|PLNP)/.test(customer_kode)) {
    let axios = require('axios');
    const url = `https://${global.APIcek}/api/pln-token/?target=${customer_no}&api_key=${global.AnanthaCEK}`;
    axios.get(url)
        .then(response => {
            console.log(response.data);
            let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.nama_pelanggan}
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;

            if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
        })
        .catch(error => {
            console.error(error.response.data);
            let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
            
            if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
        });
} else if (customer_kode.startsWith('AUMD')) {
let axios = require('axios');
const url = `https://${global.APIcek}/api/au2m/?target=${customer_no}&api_key=${global.AnanthaCEK}`
axios.get(url)
  .then(response => {
  console.log(response.data);
  let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.nickname}
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
  
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
  })
  .catch(error => {
    console.error(error.response.data);
    let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
  });
  } else if (customer_kode.startsWith('ML')) {
 let axios = require('axios');
const url = `https://${global.APIcek}/api/mobile-legends2/?target=${customer_no}&api_key=${global.AnanthaCEK}`
axios.get(url)
  .then(response => {
  console.log(response.data);
  let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.nickname}
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
  
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
  })
  .catch(error => {
  if (error.response){
    console.error(error.response.data);
let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
    }
  });
} else if (customer_kode.startsWith('F')) {
let axios = require('axios');
const url = `https://${global.APIcek}/api/free-fire/?target=${customer_no}&api_key=${global.AnanthaCEK}`
axios.get(url)
  .then(response => {
  console.log(response.data);
  let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.nickname}
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
  
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
            
  })
  .catch(error => {
  if (error.response){
    console.error(error.response.data);
let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
            }
  });
} else if (/^(DN|D)/.test(customer_kode)) {
let axios = require('axios');
const url = `https://${global.APIcek}/api/dana-ewallet/?target=${customer_no}&api_key=${global.AnanthaCEK}`
axios.get(url)
  .then(response => {
  console.log(response.data);
  let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.nickname}
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
  
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
  })
  .catch(error => {
  if (error.response){
    console.error(error.response.data);
let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
            }
  });
  } else if (customer_kode.startsWith('SPY')) {
let axios = require('axios');
const url = `https://${global.APIcek}/api/shopee-pay-ewallet/?target=${customer_no}&api_key=${global.AnanthaCEK}`
axios.get(url)
  .then(response => {
  console.log(response.data);
  let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.nickname}
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
  
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
  })
  .catch(error => {
  if (error.response){
    console.error(error.response.data);
let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
            }
  });
} else if (/^(OVB|OV)/.test(customer_kode)) {

let axios = require('axios');
const url = `https://${global.APIcek}/api/ovo-ewallet/?target=${customer_no}&api_key=${global.AnanthaCEK}`
axios.get(url)
  .then(response => {
  console.log(response.data);
  let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.nickname}
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
  
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
  })
  .catch(error => {
  if (error.response){
    console.error(error.response.data);
let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
            }
  });
} else if (customer_kode.startsWith('GP')) {
let axios = require('axios');
const url = `https://${global.APIcek}/api/gopay-ewallet/?target=${customer_no}&api_key=${global.AnanthaCEK}`
axios.get(url)
  .then(response => {
  console.log(response.data);
  let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.nickname}
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
  
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
  })
  .catch(error => {
  if (error.response){
    console.error(error.response.data);
let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
            }
  });
  } else if (customer_kode.startsWith('LINK')) {

let axios = require('axios');
const url = `https://${global.APIcek}/api/link-aja-ewallet/?target=${customer_no}&api_key=${global.AnanthaCEK}`
axios.get(url)
  .then(response => {
  console.log(response.data);
  let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.nickname}
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
  
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
  })
  .catch(error => {
  if (error.response){
    console.error(error.response.data);
let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
            }
  });
 } else if (customer_kode === customer_kode) {
  
let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff",m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> Note : ${cek("desc_prabayar",m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;

if (cek("product_name", m.sender) == "") return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
            sendMessage(invoice);
} 
}
break

case 'sgif':
case 'stikerin':
case 's':
case 'sticker':
case 'stiker': {
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
    if (!quoted) return reply(`Reply Foto/Video Dengan Caption ${prefix + command}\n\nDurasi Video Max 1-9 Detik`);
    const isImage = /image/.test(mime);
    const isVideo = /video/.test(mime);

    if (isImage || isVideo) {
        const maxDuration = isVideo ? 11 : 9;
        if ((quoted.msg || quoted).seconds > maxDuration) return reply(`Reply Foto/Video Dengan Caption ${prefix + command}\n\nDurasi Video Max 1-${maxDuration - 1} Detik`);

        const media = await quoted.download();
        const encmedia = isImage ? await AnanthaGanz.sendImageAsSticker(m.chat, media, m, { packname, author: dengan_nol }) : await AnanthaGanz.sendVideoAsSticker(m.chat, media, m, { packname, author: dengan_nol });
        await fs.unlinkSync(encmedia);
    } else {
        AnanthaGanz.sendMessage(from, { text: `Reply Foto/Video Dengan Caption ${prefix + command}\n\nDurasi Video Max 1-9 Detik`}, { quoted: m });
    }
    break;
}
         
case 'cancel': {
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
    if (cek("reff_deposit", m.sender) == true) {
        return reply(`Waduh, kayaknya gak ada invoice yang lagi berlangsung nih.`);
    } else {
    cancelPay();
    }
    break;
}

case 'batal': {
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
    if (cek("status", m.sender) === true) {
        return reply(`Oops! Sepertinya kamu belum memiliki pesanan. Ayo, buat pesanan sekarang!`);
    } else {
        setTimeout(() => {
            sett("status", m.sender, true);
            sett("product_name", m.sender, "");
            sett("price", m.sender, 0);
            sett("tujuan", m.sender, "");
            sett("desc", m.sender, 0);
            sett("desc_prabayar", m.sender, "");
            sett("reff", m.sender, "");
            sett("buyer_sku_code", m.sender, "");
            sett("layanan", m.sender, "");
        }, 1200);
        let batal = `Yaudah, invoice ${cek("reff", m.sender)} udah dibatalin kok`;
        m.reply(batal);
        sendExpTrx(sender)
    }
    break;
}

case 'tpcash': {
    if (cek("status", m.sender) == true) return reply(`Oops, kamu belum memiliki invoice! buat dulu yukk`)
        if (m.sender === ananthaa && cek("AtlaticKey", m.sender) === "") {
        console.log("Owner needs to set atlatic");
        return reply(`Silahkan Lakukan Koneksi Ke Atlatic Pedia Terlebih dahulu\n\nKetik *SETAPI*`)
    }
    var axios = require('axios');
    var qs = require('qs');
    let kodey = `${cek("buyer_sku_code", m.sender)}`;
    
    for(let i of dbAtl){    
        if (i.code == kodey) { 
            if (cek("price", m.sender) > cek("saldo", m.sender)) return reply(`Oops, saldo tidak mencukupi untuk melakukan transaksi`)
            let sekarang = Math.round(cek("price", m.sender));
            sett("-saldo", m.sender, sekarang)
            
            async function orderPay() {
                try {
                    const data = qs.stringify({
                        'api_key': global.AtlaticKey,
                        'code': cek("buyer_sku_code", m.sender),
                        'reff_id': cek("reff", m.sender),
                        'target': cek("tujuan", m.sender)
                    });
                    var dataTopup = {
                        method: 'post',
                        maxBodyLength: Infinity,
                        url: 'https://atlantich2h.com/transaksi/create',
                        headers: { },
                        data : data
                    };

                    let paymentResponse = await axios(dataTopup);
                    let paymentDataResponse = paymentResponse.data.data;
                    let ccapt = ` DETAIL PESANAN 
                        
> Trxid : ${paymentDataResponse.reff_id}
> Layanan : ${paymentDataResponse.layanan}
> No. Tujuan : ${paymentDataResponse.target}
> Status : ${paymentDataResponse.status}
> Harga : ${formatmoney(sekarang)}
> Catatan : Pesanan Kamu sedang diproses 
`;
                    reply(ccapt);
                    let unick = paymentDataResponse.id;
                    
                    let dataStatus = paymentDataResponse.status;
                    
                    while (dataStatus !== "success") {
                        await sleep(1000);
                        let qt = qs.stringify({
                            'api_key': global.AtlaticKey,
                            'id': unick,
                            'type': 'prabayar' 
                        });
                        let checkStatusConfig = {
                            method: 'post',
                            maxBodyLength: Infinity,
                            url: 'https://atlantich2h.com/transaksi/status',
                            headers: {},
                            data: qt
                        };
                        
                        let statusResponse = await axios(checkStatusConfig);
                        let statusDataResponse = statusResponse.data.data;
                        dataStatus = statusDataResponse.status;
                        console.log(dataStatus);
                        if (dataStatus === "failed") {
                            reply("Transaksi Gagal, Saldo Telah Dikembalikan Ke akun kamu")
                            sett("+saldo", m.sender, sekarang)
                            setTimeout(() => {
sett("product_name", m.sender, "")
sett("price", m.sender, 0)
sett("tujuan", m.sender, "")  
sett("desc_prabayar", m.sender, "")  
sett("reff", m.sender, "") 
sett("buyer_sku_code", m.sender, "")  
sett("status", m.sender, true)
}, 1000);
                            break;
                        }
                        if (dataStatus === "success") {
                            let ccapt = ` DETAIL PESANAN 
                                
> Trxid : ${statusDataResponse.reff_id}
> Layanan : ${statusDataResponse.layanan}
> No. Tujuan : ${statusDataResponse.target}
> Status : ${statusDataResponse.status}
> Harga : ${formatmoney(sekarang)}
> Catatan : ${statusDataResponse.sn}
`;
                            reply(ccapt);
                            for (let i of dbAtl) {
                                if (i.code == statusDataResponse.code) {  
                                    let hargamodal = i.price * 1
                                    const trxFilePath = './SETTING2/DB/dataTrx.json';
                                    const trxUserData = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
                                    const newTransaction = {
                                        buyer: m.sender,
                                        status: statusDataResponse.status,
                                        no_pembayaran: `INV${randomPay}`,
                                        ref_id: statusDataResponse.reff_id,
                                        jam: moment.tz(`Asia/${global.Wilayah}`).format('HH:mm:ss'),
                                        waktu: moment.tz(`Asia/${global.Wilayah}`).format('DD/MM/YY'),
                                        produk: `${statusDataResponse.layanan}`,
                                        harga: sekarang,
                                        harga_modal: hargamodal,
                                        tujuan: statusDataResponse.target,
                                        invoice: statusDataResponse.sn,
                                    };
                                    trxUserData.push(newTransaction);
                                    fs.writeFileSync(trxFilePath, JSON.stringify(trxUserData, null, 2), 'utf8');
                                }
                            }
                            setTimeout(() => {
sett("product_name", m.sender, "")
sett("price", m.sender, 0)
sett("tujuan", m.sender, "")  
sett("desc_prabayar", m.sender, "")  
sett("reff", m.sender, "") 
sett("buyer_sku_code", m.sender, "")  
sett("status", m.sender, true)
}, 1000);
                            break;
                        }
                    }
                } catch (error) {
                if (error.response){
                reply("Transaksi Gagal, Saldo Telah Dikembalikan Ke akun kamu")
                            sett("+saldo", m.sender, sekarang)
                    AnanthaGanz.sendMessage(ananthaa, {text : error.response.data.message});
                    setTimeout(() => {
sett("product_name", m.sender, "")
sett("price", m.sender, 0)
sett("tujuan", m.sender, "")  
sett("desc_prabayar", m.sender, "")  
sett("reff", m.sender, "") 
sett("buyer_sku_code", m.sender, "")  
sett("status", m.sender, true)
}, 1000);
                    }
                }
            }
            orderPay();
        }
    }
}
break;



case 'pulsareguler': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const sections = [
        {
            title: "XL AXIATA",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "XL AXIATA", title: "Pulsa Reguler", description: "", id: ".p-xl" }
            ]
        },
        {
            title: "SMARTFREN",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "SMARTFREN", title: "Pulsa Reguler", description: "", id: ".p-smartfren" }
            ]
        },
        {
            title: "TELKOMSEL",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "TELKOMSEL", title: "Pulsa Reguler", description: "", id: ".p-telkomsel" }
            ]
        },
        {
            title: "TRI",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "TRI", title: "Pulsa Reguler", description: "", id: ".p-tri" }
            ]
        },
        {
            title: "INDOSAT",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "INDOSAT", title: "Pulsa Reguler", description: "", id: ".p-indosat" }
            ]
        },
        {
            title: "by.U",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "by.U", title: "Pulsa Reguler", description: "", id: ".p-by.u" }
            ]
        },
        {
            title: "AXIS",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "AXIS", title: "Pulsa Reguler", description: "", id: ".p-axis" }
            ]
        }
    ];

    const buttonParamsJson = `{
        "title": "Pilih Pulsa",
        "sections": ${JSON.stringify(sections)}
    }`;

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Mau Beli Pulsa Apa Nih?'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Pilih Pulsa',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "single_select",
                                "buttonParamsJson": buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
}
break;

case 'pulsatransfer': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()

    const sections = [
        {
            title: "XL AXIATA",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "XL AXIATA", title: "Pulsa Transfer", descrittion: "", id: ".t-xl" }
            ]
        },
        {
            title: "SMARTFREN",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "SMARTFREN", title: "Pulsa Transfer", descrittion: "", id: ".t-smartfren" }
            ]
        },
        {
            title: "TELKOMSEL",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "TELKOMSEL", title: "Pulsa Transfer", descrittion: "", id: ".t-telkomsel" }
            ]
        },
        {
            title: "TRI",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "TRI", title: "Pulsa Transfer", descrittion: "", id: ".t-tri" }
            ]
        },
        {
            title: "INDOSAT",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "INDOSAT", title: "Pulsa Transfer", descrittion: "", id: ".t-indosat" }
            ]
        },
        {
            title: "by.U",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "by.U", title: "Pulsa Transfer", descrittion: "", id: ".t-by.u" }
            ]
        },
        {
            title: "AXIS",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "AXIS", title: "Pulsa Transfer", descrittion: "", id: ".t-axis" }
            ]
        }
    ];

    const buttonParamsJson = `{
        "title": "Pilih Pulsa",
        "sections": ${JSON.stringify(sections)}
    }`;

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Mau Beli Pulsa Transfer Apa Nih?'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Pilih Pulsa Transfer',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "single_select",
                                "buttonParamsJson": buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
}
break;

case 'listmember': {
    if (m.isGroup || !isOwner) return;

    // Membaca data anggota dari file JSON
    let listmemb = JSON.parse(fs.readFileSync('./SETTING2/DB/dataPelanggan.json'));

    // Membaca data riwayat transaksi dari file JSON
    const trxFilePath = './SETTING2/DB/dataTrx.json';
    const trxFileData = fs.readFileSync(trxFilePath, 'utf8');
    const allTrxUserData = JSON.parse(trxFileData);

    // Membaca data riwayat deposit dari file JSON
    const depFilePath = './SETTING2/DB/TRANSACTION/dataDeposit.json';
    const depFileData = fs.readFileSync(depFilePath, 'utf8');
    const allDepUserData = JSON.parse(depFileData);

    // Mengurutkan anggota berdasarkan saldo
    listmemb.sort((a, b) => b.saldo - a.saldo);

    // Membuat pesan daftar anggota dengan format yang lebih sederhana
    let listmember1 = "*[ LIST MEMBER ]*\n\n";
    listmemb.forEach(member => {
        // Menghitung jumlah transaksi untuk anggota saat ini
        const memberTrxCount = allTrxUserData.filter(trx => trx.buyer === member.id).length;
        
        // Menghitung jumlah deposit untuk anggota saat ini
        const memberDepCount = allDepUserData.filter(dep => dep.buyer === member.id).length;

        // Menghasilkan UID sesuai dengan permintaan
        const UID = member.id.split('@')[0].replace('62', '0');

        // Cek status premium untuk setiap anggota
        

        listmember1 += `> ${UID}\nSaldo: ${formatmoney(member.saldo)}\nLevel : ${member.level}\nTransaksi: ${memberTrxCount}\nDeposit: ${memberDepCount}\n\n`;
    });            

    // Mengirim pesan dengan daftar anggota yang sudah diformat
    reply(listmember1);
}
break;
case 'cekmember': {
    if (m.isGroup || !isOwner) return;

    // Membaca data anggota dari file JSON
    let listmemb = JSON.parse(fs.readFileSync('./SETTING2/DB/dataPelanggan.json'));

    // Mengambil ID anggota yang ingin diperiksa
    let pelanggan = q.split(" ")[0];
    let hasil = pelanggan + "@s.whatsapp.net";
    const memberId = hasil;
    if (!pelanggan) {
        reply("Format yang benar: .cekmember 6285174667722");
        return;
    }
    
    // Menyesuaikan format nomor jika dimulai dengan 0
    if (pelanggan.startsWith('0')) {
        pelanggan = '62' + pelanggan.substring(1); // Mengubah nomor yang dimulai dengan 0 menjadi 62
        reply("Pastikan untuk menggunakan nomor yang dimulai dengan 62 untuk memeriksa anggota.");
    }

    // Mencari anggota berdasarkan ID
    const member = listmemb.find(m => m.id === memberId);

    if (member !== undefined) {
        // Membaca data riwayat transaksi dari file JSON
        const trxFilePath = './SETTING2/DB/dataTrx.json';
        const trxFileData = fs.readFileSync(trxFilePath, 'utf8');
        const allTrxUserData = JSON.parse(trxFileData);

        // Membaca data riwayat deposit dari file JSON
        const depFilePath = './SETTING2/DB/TRANSACTION/dataDeposit.json';
        const depFileData = fs.readFileSync(depFilePath, 'utf8');
        const allDepUserData = JSON.parse(depFileData);

        // Menghitung jumlah transaksi untuk anggota saat ini
        const memberTrxCount = allTrxUserData.filter(trx => trx.buyer === memberId).length;

        // Menghitung jumlah deposit untuk anggota saat ini
        const memberDepCount = allDepUserData.filter(dep => dep.buyer === memberId).length;

        // Menghasilkan UID sesuai dengan permintaan
        const UID = memberId.split('@')[0].replace('62', '0');

        // Format pesan dengan detail anggota
        const memberDetails = ` *MEMBER DETAILS* \n\n> UID : ${UID}\n> Saldo : ${formatmoney(member.saldo)}\n> Level : ${member.level}\n> Email : ${member.email}\n> Jumlah Transaksi : ${memberTrxCount}\n> Jumlah Deposit : ${memberDepCount}`;

        // Mengirim pesan dengan detail anggota
        reply(memberDetails);
    } else {
        reply("Anggota dengan ID tersebut tidak ditemukan.");
    }
    break;
}
case 'cektrx': {
    let refId = q.split(" ")[0]; // Menyimpan ref_id yang ingin diperiksa

    if (!refId) {
        reply("Kamu belum memasukkan ref_id yang ingin diperiksa.\n\nContoh : cektrx TPxxxxx");
        return;
    }

    const filePath = './SETTING2/DB/dataTrx.json';
    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const allUserData = JSON.parse(fileData);

        const userData = allUserData.find(data => data.ref_id === refId); // Mencari transaksi berdasarkan refId

        if (!userData) {
            return reply(`Transaksi dengan *${refId}* ini tidak ditemukan.`);
        }

        let totalHarga = parseFloat(userData.harga);
        let totale = totalHarga * 1;

        const replyMessage = `
*RIWAYAT TRANSAKSI* 

> Produk : ${userData.produk}
> ID Trx : ${userData.ref_id}
> Tujuan : ${userData.tujuan}
> Harga : ${formatmoney(totale)}
> Status : ${userData.status}
> Waktu : ${userData.jam} | ${userData.waktu}
> Catatan : ${userData.invoice}
`;

        reply(replyMessage);
    } catch (error) {
        console.error('Error reading the transaction history file:', error);
        reply("Gagal, Ada Masalah Ketika Membaca data, silahkan hubungi Admin");
    }
    break;
}
case 'cekriwayattrx': {
    let pelanggan = args.slice(0).join(' ');
    if (!pelanggan) {
        reply("Kamu belum memasukkan ID pengguna yang ingin diperiksa.\n\nContoh : cekriwayattrx 6285174667722");
        return;
    }

    // Normalisasi nomor telepon
    pelanggan = pelanggan.replace(/[^0-9]/g, ''); // Menghapus semua karakter non-numeric
    if (pelanggan.startsWith('0')) {
        pelanggan = '62' + pelanggan.substring(1); // Mengubah nomor yang dimulai dengan 0 menjadi 62
    } else if (pelanggan.startsWith('8')) {
        pelanggan = '62' + pelanggan; // Menambahkan 62 jika nomor dimulai dengan 8
    } else if (pelanggan.startsWith('6')) {
        if (!pelanggan.startsWith('62')) {
            pelanggan = '62' + pelanggan.substring(1); // Mengubah nomor yang dimulai dengan 6 dan tidak diikuti oleh 2
        }
    } else if (pelanggan.startsWith('+62')) {
        pelanggan = pelanggan.replace('+', ''); // Menghapus tanda + di awal nomor
    }

    let userId = pelanggan + "@s.whatsapp.net"; // ID pengguna yang ingin diperiksa riwayat transaksinya

    const usersFilePath = './SETTING2/DB/dataPelanggan.json';
    const trxFilePath = './SETTING2/DB/dataTrx.json';
    try {
        // Membaca data pengguna
        const usersFileData = fs.readFileSync(usersFilePath, 'utf8');
        const allUsers = JSON.parse(usersFileData);
        
        // Cek apakah pengguna terdaftar
        const user = allUsers.find(u => u.id === userId);
        if (!user) {
            return reply(`Pengguna dengan nomor ${pelanggan} tidak terdaftar.`);
        }

        // Membaca data riwayat transaksi
        const fileData = fs.readFileSync(trxFilePath, 'utf8');
        const allUserData = JSON.parse(fileData);

        // Filter riwayat transaksi pengguna
        const userData = allUserData.filter(data => data.buyer === userId);

        if (userData.length === 0) {
            return reply(`Pengguna ${pelanggan} terdaftar tetapi belum memiliki riwayat transaksi yang sukses.`);
        }

        let totalHarga = 0;
        let totalTransactions = userData.length;

        userData.forEach(data => {
            totalHarga += parseFloat(data.harga);
        });

        const historyText = userData.map((data, index) => {
            let totale = data.harga * 1;
            let status;
            if (data.status === "Transaksi Sukses") {
                status = "Success";
            } else if (data.status === "Transaksi Gagal" || data.status === "Saldo Tidak Cukup") {
                status = "Failed";
            } else {
                status = data.status;
            }
            return `
  Trx - ${index + 1}:
> Produk : ${data.produk}
> ID Trx : ${data.ref_id}
> Tujuan : ${data.tujuan}
> Harga : ${formatmoney(totale)}
> Status : ${status}
> Waktu : ${data.jam} | ${data.waktu}
> Catatan : ${data.invoice}
`;
        });

        let totalw = totalHarga * 1;
        const replyMessage = `
*Riwayat Transaksi Pengguna* 

Total Pesanan : ${totalTransactions}
Total Harga Pesanan : ${formatmoney(totalw)}

${historyText.join('\n')}
`;

        reply(replyMessage);
    } catch (error) {
        console.error('Error reading the transaction history file:', error);
        reply("Gagal, Ada Masalah Ketika Membaca data, silahkan hubungi Admin");
    }
    break;
}
case 'pln': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const productData = JSON.parse(fs.readFileSync('./SETTING2/DB/all_prepaid.json', 'utf8'));
    const requestedCategory = "PLN";
    const brands = [...new Set(productData.filter(item => item.category === requestedCategory).map(item => item.brand))];

    const sections = [
        {
            title: "DETAIL PRODUK",
            highlight_label: "Populer +++",
            rows: [
                {
                    header: "TOKEN PLN",
                    title: "PLN PRABAYAR",
                    description: `Powered by ${footer}`,
                    id: "List PLN"
                }
            ]
        }
    ];

    const buttonParamsJson = {
        title: "Click Here",
        sections: sections
    };

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ''
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: `${toko}`
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: "Silahkan Pilih",
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify(buttonParamsJson)
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
}
break;

case 'voucher': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const productData = JSON.parse(fs.readFileSync('./SETTING2/DB/all_prepaid.json', 'utf8'));
    const requestedCategory = "Voucher";
    let brands = [...new Set(productData.filter(item => item.category === requestedCategory && !['by.U','INDOSAT','XL', 'TELKOMSEL','AXIS','SMARTFREN','TRI'].includes(item.provider)).map(item => item.provider))];

    if (brands.length > 0) {
        const sections = brands.map((provider) => {
            const rows = [
                {
                    header: `${provider}`,
                    title: `Voucher ${provider}`,
                    description: `Powered by ${footer}`,
                    id: `.list ${provider}`
                }
            ];
            const section = {
                title: provider,
                rows: rows
            };

            // Add highlight_label for UniPin and Garena
            if (provider === 'Unipin Voucher' || provider === 'GOOGLE PLAY INDONESIA' || provider === 'GOOGLE PLAY US REGION' || provider === 'WAVE GAME' || provider === 'Roblox' || provider === 'Razer Gold' || provider === 'GARENA') {
                section.highlight_label = "Populer +++";
            }

            return section;
        });

        const buttonParamsJson = `{
            "title": "Beli Voucher",
            "sections": ${JSON.stringify(sections)}
        }`;

        let msg = generateWAMessageFromContent(from, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: 'Mau Beli Voucher Apa nih?'
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: 'Pilih dari daftar berikut:'
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: 'Pilih Voucher yang ingin dibeli',
                            subtitle: '',
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: buttonParamsJson
                                }
                            ]
                        })
                    })
                }
            }
        }, {});

        await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        }, { quoted: m });
    }
}
break;
case 'e-money': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("cekVerify", m.sender) == true) return sendVerif();
    if (cek("syarat", m.sender) == true) return sendSyaratAnanthaa();
    
    const productData = JSON.parse(fs.readFileSync('./SETTING2/DB/all_prepaid.json', 'utf8'));
    const requestedCategory = "E-Money";
    const brands = [...new Set(productData.filter(item => item.category === requestedCategory).map(item => item.provider))];

    if (brands.length > 0) {
        const sections = brands.map((provider) => {
            const rows = [
                {
                    header: `${provider}`,
                    title: `E - Money ${provider}`,
                    description: `Powered by ${footer}`,
                    id: `.list ${provider}`
                }
            ];
            const section = {
                title: provider,
                rows: rows
            };

            // Add highlight_label for popular brands
            if (['dana', 'linkaja', 'go pay', 'shopee pay', 'ovo'].includes(provider.toLowerCase())) {
                section.highlight_label = "Populer +++";
            }

            return section;
        });

        const buttonParamsJson = `{
            "title": "Topup E-Money",
            "sections": ${JSON.stringify(sections)}
        }`;

        let msg = generateWAMessageFromContent(from, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: 'Mau isi e-money apa?'
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: 'Pilih dari daftar berikut:'
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: 'Topup E-Money',
                            subtitle: '',
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    "name": "single_select",
                                    "buttonParamsJson": buttonParamsJson
                                }
                            ]
                        })
                    })
                }
            }
        }, {});

        await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        }, { quoted: m });
    }
}
break;

case 'tpcash':{
    if (cek("status", m.sender) == true) return reply(`Oops, kamu belum memiliki invoice! buat dulu yukk`)
    var axios = require('axios');
    var qs = require('qs');
    let kodey = `${cek("buyer_sku_code", m.sender)}`;
    
    for(let i of dbAtl){    
        if (i.code == kodey) { 
            if (i.price > cek("saldo", m.sender)) return reply(`Oops, saldo tidak mencukupi untuk melakukan transaksi`)
            let sekarang = Math.round(cek("price", m.sender));
            sett("-saldo", m.sender, sekarang)
            
            async function orderPay() {
                try {
                    const data = qs.stringify({
                        'api_key': global.AtlaticKey,
                        'code': cek("buyer_sku_code", m.sender),
                        'reff_id': cek("reff", m.sender),
                        'target': cek("tujuan", m.sender)
                    });
                    var dataTopup = {
                        method: 'post',
                        maxBodyLength: Infinity,
                        url: 'https://atlantich2h.com/transaksi/create',
                        headers: { },
                        data : data
                    };

                    let paymentResponse = await axios(dataTopup);
                    let paymentDataResponse = paymentResponse.data.data;
                    let ccapt = ` DETAIL PESANAN 
                        
> Trxid : ${paymentDataResponse.reff_id}
> Layanan : ${paymentDataResponse.layanan}
> No. Tujuan : ${paymentDataResponse.target}
> Status : ${paymentDataResponse.status}
> Harga : ${formatmoney(sekarang)}
> Catatan : Pesanan Kamu sedang diproses 
`;
                    reply(ccapt);
                    let unick = paymentDataResponse.id;
                    
                    let dataStatus = paymentDataResponse.status;
                    
                    while (dataStatus !== "success") {
                        await sleep(2000);
                        let qt = qs.stringify({
                            'api_key': global.AtlaticKey,
                            'id': unick,
                            'type': 'prabayar' 
                        });
                        let checkStatusConfig = {
                            method: 'post',
                            maxBodyLength: Infinity,
                            url: 'https://atlantich2h.com/transaksi/status',
                            headers: {},
                            data: qt
                        };
                        
                        let statusResponse = await axios(checkStatusConfig);
                        let statusDataResponse = statusResponse.data.data;
                        dataStatus = statusDataResponse.status;
                        console.log(dataStatus);
                        if (dataStatus === "failed") {
                            reply("Transaksi Gagal, Saldo Telah Dikembalikan Ke akun kamu")
                            sett("+saldo", m.sender, sekarang)
                            break;
                        }
                        if (dataStatus === "success") {
                            let ccapt = ` DETAIL PESANAN 
                                
> Trxid : ${statusDataResponse.reff_id}
> Layanan : ${statusDataResponse.layanan}
> No. Tujuan : ${statusDataResponse.target}
> Status : ${statusDataResponse.status}
> Harga : ${formatmoney(sekarang)}
> Catatan : ${statusDataResponse.sn}
`;
                            reply(ccapt);
                            for (let i of dbAtl) {
                                if (i.code == statusDataResponse.code) {  
                                    let hargamodal = i.price * 1
                                    const trxFilePath = './SETTING2/DB/trxuser.json';
                                    const trxUserData = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
                                    const newTransaction = {
                                        buyer: m.sender,
                                        status: statusDataResponse.status,
                                        no_pembayaran: `INV${randomPay}`,
                                        ref_id: statusDataResponse.reff_id,
                                        jam: moment.tz(`Asia/${global.Wilayah}`).format('HH:mm:ss'),
                                        waktu: moment.tz(`Asia/${global.Wilayah}`).format('DD/MM/YY'),
                                        produk: `${statusDataResponse.layanan}`,
                                        harga: sekarang,
                                        harga_modal: i.price,
                                        tujuan: statusDataResponse.target,
                                        invoice: statusDataResponse.sn,
                                    };
                                    trxUserData.push(newTransaction);
                                    fs.writeFileSync(trxFilePath, JSON.stringify(trxUserData, null, 2), 'utf8');
                                }
                            }
                            break;
                        }
                    }
                } catch (error) {
                if (error.response.data){
                reply("Transaksi Gagal, Saldo Telah Dikembalikan Ke akun kamu")
                            sett("+saldo", m.sender, sekarang)
                    AnanthaGanz.sendMessage(nomorKu, {text : error.response.data.message});
                    }
                }
            }
            orderPay();
        }
    }
}
break;
  case 'pdam': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    // Membaca data customer_kode dari file JSON yang disimpan sebelumnya
    const productData = JSON.parse(
        fs.readFileSync('./SETTING2/DB/dataPostpaid.json', 'utf8')
    );

    // Mengubah deskripsi yang diminta menjadi huruf kecil untuk konsistensi
    const requestedDesc = text.toLowerCase();

    // Memeriksa apakah pengguna menyertakan deskripsi produk
    if (!requestedDesc) return m.reply("Oops, kamu belum input deskripsi produk.");

    // Mencocokkan deskripsi produk dengan deskripsi yang diminta
    const matchingProducts = productData.filter(item => item.desc.toLowerCase().includes(requestedDesc));

    // Jika tidak ada produk yang cocok dengan deskripsi yang diminta, beri tahu pengguna
    if (matchingProducts.length === 0) {
        return m.reply(`Pdam Pada Wilayah  "${requestedDesc}" Tidak Tersedia `);
    }

    // Membuat respons yang diformat dengan baik berdasarkan deskripsi produk yang ditemukan
    let formattedResponse = `*PDAM ${requestedDesc}*\n\n`;
    matchingProducts.forEach(product => {
        const status = product.seller_product_status ? "Ready" : "Sold Out";
        const statusEmoji = product.seller_product_status ? "✅" : "❌";
        
        formattedResponse += `
≫ ${product.product_name}

> *Kode :* ${product.buyer_sku_code}
> *Status :* ${statusEmoji} ${status}
> *Deskripsi :* ${product.desc}
> *Cara Order :* Reply pesan ini dengan *${prefix}cektagihan ${product.buyer_sku_code} <id_pelanggan>*

---------------------------------------
`;
    });

    // Mengirim pesan respons bersama dengan thumbnail dan tautan terkait
    AnanthaGanz.relayMessage(m.chat,  {
     requestPaymentMessage: {
           currencyCodeIso4217: 'IDR',
                 amount1000: '0',
                       requestFrom: m.sender,
                             noteMessage: {
                                   extendedTextMessage: {
                                         text: formattedResponse,
                                               contextInfo: {
                                                     externalAdReply: {
                                                           showAdAttribution: true
                                                                 }}}}}}, {})          
}
break;
case 'detail': {    
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
    let code_nya = q.split(" ")[0];
    if (!code_nya) return reply(`*Masukan SKU CODE* Contoh: ${prefix}detail ML5`);
    let data16a = JSON.parse(fs.readFileSync('./SETTING2/DB/all_prepaid.json'));
    let listProduct16z = "𝗗𝗘𝗧𝗔𝗜𝗟 𝗣𝗥𝗢𝗗𝗨𝗖𝗧\n\n";
    let found = false;
    
    for (let i of data16a) {
        if (i.code == code_nya) {  
            found = true;
            
            let status = i.status ? "Ready" : "Sold Out";
                    let hargaku = i.price * 1;
        let untungkita = cek("profit", m.sender) * 1; // Keuntungan dalam bentuk desimal (misalnya 8% keuntungan)
        let upp = hargaku + (hargaku * (untungkita / 100)); // Menghitung harga setelah menambahkan keuntungan
        const hrt = formatmoney(upp);
            
            listProduct16z += `› 𝗡𝗮𝗺𝗮 𝗣𝗿𝗼𝗱𝘂𝗸 : ${i.name}
› 𝗞𝗮𝘁𝗲𝗴𝗼𝗿𝗶 : ${i.category}
› 𝗧𝘆𝗽𝗲 : ${i.type}
› 𝗞𝗼𝗱𝗲 : ${i.code}
› 𝗛𝗮𝗿𝗴𝗮 : ${hrt}
› 𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝘁𝗮𝘁𝘂𝘀 : ${status}
› 𝗗𝗲𝘀𝗸𝗿𝗶𝗽𝘀𝗶 : ${i.note}
`;
        }
    }
    
    if (!found) {
        return reply(`Produk dengan kode ${code_nya} tidak ditemukan.`);
    }
    
    let msg = generateWAMessageFromContent(from, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: ``
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: `${listProduct16z}`,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                    {
                "name": "cta_copy",
                "buttonParamsJson": JSON.stringify({
                "display_text": "Copy Format",
                "copy_code": `.order ${code_nya} (diisi no tujuan/zone tujuan)`
                })
              },
              {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Format Benar",
                                "url": "https://telegra.ph/file/65c81a9c79d9691b49345.jpg",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                                      {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Format Salah",
                                "url": "https://telegra.ph/file/0760d1bda7ef84a12e12a.jpg",
                                "merchant_url": "https://www.google.com"
                            }`
                        }
                     
                        
                    ],
                })
            })
        }
    }
}, {});

await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
}, {quoted: m});
}
break;
     case 'list': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("cekVerify", m.sender) == true) return sendVerif();
    if (cek("syarat", m.sender) == true) return sendSyaratAnanthaa();

    const productData = JSON.parse(fs.readFileSync('./SETTING2/DB/all_prepaid.json', 'utf8'));
    const requestedBrand = text.toLowerCase();

    if (!requestedBrand) return m.reply("Oops, kamu belum input brand.");

    const matchingProducts = productData.filter(item => item.provider.toLowerCase() === requestedBrand);

    if (matchingProducts.length === 0) {
        return m.reply(`Gak ada nih merek ${requestedBrand.toUpperCase()}, coba merek lain ya.`);
    }

    matchingProducts.sort((a, b) => a.price - b.price);

    const statusData = JSON.parse(fs.readFileSync('./SETTING2/DB/all_prepaid.json', 'utf8'));

    let productButtons = matchingProducts.map(product => {
        const statusEntry = statusData.find(i => i.code === product.code);
        const status = statusEntry ? (statusEntry.status ? "Ready" : "Sold Out") : "Unknown";
        const statusEmoji = statusEntry ? (statusEntry.status ? "✅" : "❌") : "❓";
        let hargaku = product.price * 1;
        let untungkita = cek("profit", m.sender) * 1; // Keuntungan dalam bentuk desimal (misalnya 8% keuntungan)
        let upp = hargaku + (hargaku * (untungkita / 100)); // Menghitung harga setelah menambahkan keuntungan
        const priceFormatted = formatmoney(upp);

        return {
            header: `${product.name} ${statusEmoji}`,
            title: `${product.category}/${product.type}`,
            description: `${priceFormatted}`,
            id: `.detail ${product.code}`
        };
    });

    let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Berikut adalah produk dalam merek '${requestedBrand.toUpperCase()}':`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih produk yang Anda inginkan:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: `Pilih Produk ${requestedBrand.toUpperCase()}`,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `Pilih Produk ${requestedBrand.toUpperCase()}`,
                                    sections: [
                                        {
                                            rows: productButtons
                                        }
                                    ]
                                })
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(interactiveMessage.key.remoteJid, interactiveMessage.message, {
        messageId: interactiveMessage.key.id
    }, { quoted: m });

    break;
}
case 'ping':{
   const used = process.memoryUsage();
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
    return cpu;
  });

  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total;
    last.speed += cpu.speed / length;
    last.times.user += cpu.times.user;
    last.times.nice += cpu.times.nice;
    last.times.sys += cpu.times.sys;
    last.times.idle += cpu.times.idle;
    last.times.irq += cpu.times.irq;
    return last;
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  });

  let timestamp = speed();
  let latensi = speed() - timestamp;
  neww = performance.now();
  oldd = performance.now();
     m.reply( `Kecepatan Respon :
${latensi.toFixed(4)} _Second_
${oldd - neww} _miliseconds_

Runtime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`)
}
break       



//FITUR OWNER         
function calculateSignature(username, apiKey, action) {
  return crypto.createHash('md5')
    .update(username + apiKey + action)
    .digest('hex');
}


    
  case 'deposit': {
      if (m.sender === ananthaa && cek("AtlaticKey", m.sender) === "") {
        console.log("Owner needs to set atlatic");
        return reply(`Silahkan Lakukan Koneksi Ke Atlatic Pedia Terlebih dahulu\n\nKetik *SETAPI*`)
    }
 if (cek("reff_deposit", m.sender) == false) return AnanthaGalauV() 
  const minimal = 5000; // SET MINIMAL DEPOSIT
  const max = 2000000; // SET MAX DEPOSIT
  const request_depo = parseInt(q.split(" ")[0]);
  
  if (isNaN(request_depo)) {
    reply("Oops, format salah\n\n> Contoh : deposit 20000");
    return;
  }
  
  if (!request_depo) {
    reply(`Oops, format salah, ikuti yang benar seperti ini:\n\nContoh: ${prefix + command} 5000`);
    return;
  }
  
  if (request_depo < minimal) {
    reply(`Oops, minimal deposit adalah ${formatmoney(minimal)}`);
    return;
  }
  
  if (request_depo > max) {
    reply(`Oops, Maximal deposit adalah ${formatmoney(max)}`);
    return;
  }
  
  const axios = require('axios');
  const qs = require('qs');
let nominala = request_depo; // Misalkan request_depo adalah nilai deposit yang diterima

async function makePayment() {
  try {
    // Menghitung nilai fee berdasarkan 1,3% dari nominala
 let fee = nominala * 0.0132;
let totalNominal = nominala + fee;

// Membuat data yang akan dikirim
const data = qs.stringify({
  'api_key': global.AtlaticKey,
  'reff_id': koderefe,
  'nominal': totalNominal,
  'type': 'ewallet',
  'metode': 'qrisfast'
});

const config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: `https://atlantich2h.com/deposit/create`,
  headers: {},
  data: data
};


  let paymentResponse = await axios(config);
  let paymentDataResponse = paymentResponse.data.data;

  // Menghitung fee berdasarkan persentase
  let feeAmount = fee * 1 // Membulatkan fee menjadi 2 desimal

  // Menghitung total yang harus dibayar setelah dikurangi fee
  let totalDiterima = (totalNominal - fee * 1)

  // Membuat objek untuk disimpan sebagai JSON
  let obj = {
    id: m.sender,
    ref: `${paymentDataResponse.reff_id}`,
    method: `QRIS`,
    diterima: `${formatmoney(totalDiterima)}`, // Total yang harus dibayar setelah dikurangi fee
    fee: `${formatmoney(feeAmount)}`, // Fee
    total: `${formatmoney(totalNominal)}`, // Total yang harus dibayar sebelum dikurangi fee
    url: `${paymentDataResponse.qr_image}`
  };

  sett("reff_deposit", m.sender, false);
  sett("deposit", m.sender, `${koderefe}`);
  fs.writeFileSync(`./SETTING2/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`, JSON.stringify(obj));

  await loading();

  // Membuat pesan ccapt dengan informasi tambahan
  let ccapt = `QRIS OTOMATIS\n\nMetode : QRIS\nReferensi : ${paymentDataResponse.reff_id}\nBerlaku : 5 menit\nTotal Diterima : ${formatmoney(totalDiterima)}\nFee : ${formatmoney(feeAmount)}\nTotal Bayar : ${formatmoney(totalNominal)}\n\nSilahkan Lakukan Pembayaran Tepat Waktu`;


      let msg = generateWAMessageFromContent(from, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `Secure payment by ${footer}`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
 title: ccapt,
 subtitle: ``,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `${paymentDataResponse.qr_image}` } }, { upload: AnanthaGanz.waUploadToServer }))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"CANCEL DEPOSIT","id":".cancel"}`
                        },
                        
                    ],
                })
            })
        }
    }
}, {});

 AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
}, {quoted: m});

      
      let unick = paymentDataResponse.id;
      sett("deposit", m.sender, `${unick}`)
      let dataStatus = paymentDataResponse.status;
      const startTime = new Date().getTime();

      while (dataStatus !== "success") {
        await sleep(1000);
        let qt = qs.stringify({
          'api_key': global.AtlaticKey,
          'id': unick
        });
        let checkStatusConfig = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `https://atlantich2h.com/deposit/status`,
          headers: {},
          data: qt
        };

        let statusResponse = await axios(checkStatusConfig);
        let statusDataResponse = statusResponse.data.data;
        dataStatus = statusDataResponse.status;
        console.log(dataStatus);
        const currentTime = new Date().getTime();
        const elapsedTime = (currentTime - startTime) / (1000 * 60 * 5);

        if (elapsedTime >= 1) {
          m.reply(`Upss, tiket udah gak berlaku nih. Yuk, buat yang baru!`);
          break;
        }

        if (dataStatus === "success") {
          
const depoFilepAth = './SETTING2/DB/TRANSACTION/dataDeposit.json';
    const depoUser = JSON.parse(fs.readFileSync(depoFilepAth, 'utf8'));
        const newDepo = {
            buyer: m.sender,
            status: "PAID",
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            no_pembayaran: `${unick}`,
            method: `QRIS`,
            jumlah: `${statusDataResponse.get_balance}`,
            fee: `0`,
            total: `${nominala}`,
            
        };
            depoUser.push(newDepo);
    fs.writeFileSync(depoFilepAth, JSON.stringify(depoUser, null, 2), 'utf8');
    
          let pendapat = statusDataResponse.get_balance * 1;
          let tot = nominala * 1;
          reply(`Pembayaran berhasil! Total : ${formatmoney(tot)}, Saldo didapatkan termasuk PPN : ${formatmoney(pendapat)}`);
          sett("+saldo", m.sender, pendapat);
          sett("reff_deposit", m.sender, true)
        } else if (dataStatus === "cancel") {
        reply(`Pembayaran QRIS ref ${statusDataResponse.reff_id} dibatalkan`)
        sett("reff_deposit", m.sender, true)
          break;
        }
      }
    } catch (error) {
      console.error("Error occurred:", error);
      reply("Maaf, terjadi kesalahan dalam melakukan pembayaran. Silakan coba lagi nanti.");
    }
  }

  makePayment();
}
break;
case 'qrispay': {
    if (m.sender === ananthaa && cek("AtlaticKey", m.sender) === "") {
        console.log("Owner needs to set atlatic");
        return reply(`Silahkan Lakukan Koneksi Ke Atlatic Pedia Terlebih dahulu\n\nKetik *SETAPI*`);
    }
    if (cek("reff_deposit", m.sender) == false) return AnanthaGalauV();
    let bulatharga = Math.round(cek("price", m.sender) * 1);
    let user_payment_mount = bulatharga;
    if (user_payment_mount < 2000) return m.reply(`Minimun Payment *QRIS* adalah Rp. 2000`);
    if (user_payment_mount > 10000000) return m.reply(`Maximal Payment *QRIS* adalah Rp. 10.000.000`);
    let kodey = cek("buyer_sku_code", m.sender);
    const axios = require('axios');
    const qs = require('qs');
    let nominala = bulatharga;

    for (let i of dbAtl) {
        if (i.code == kodey) {
            
            let sekarang = Math.round(cek("price", m.sender));

            async function makePayment() {
                try {
                    let fee = nominala * 0.0132;
                    let totalNominal = nominala + fee;
                    let hargaKut = Math.round(totalNominal * 1);

                    const data = qs.stringify({
                        'api_key': global.AtlaticKey,
                        'reff_id': koderefe,
                        'nominal': hargaKut,
                        'type': 'ewallet',
                        'metode': 'qrisfast'
                    });

                    const config = {
                        method: 'post',
                        maxBodyLength: Infinity,
                        url: `https://atlantich2h.com/deposit/create`,
                        headers: {},
                        data: data
                    };

                    let paymentResponse = await axios(config);
                    let paymentDataResponse = paymentResponse.data.data;

                    let feeAmount = fee * 1;
                    let totalDiterima = totalNominal - fee * 1;

                    let obj = {
                        id: m.sender,
                        ref: paymentDataResponse.reff_id,
                        method: 'QRIS',
                        diterima: formatmoney(totalDiterima),
                        fee: formatmoney(feeAmount),
                        total: formatmoney(totalNominal),
                        url: paymentDataResponse.qr_image
                    };

                    sett("reff_deposit", m.sender, false);
                    sett("deposit", m.sender, koderefe);
                    fs.writeFileSync(`./SETTING2/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`, JSON.stringify(obj));

                    await loading();

                    let ccapt = `QRIS OTOMATIS\n\nMetode : QRIS\nReferensi : ${paymentDataResponse.reff_id}\nBerlaku : 5 menit\nTotal Diterima : ${formatmoney(totalDiterima)}\nFee : ${formatmoney(feeAmount)}\nTotal Bayar : ${formatmoney(totalNominal)}\n\nSilahkan Lakukan Pembayaran Tepat Waktu`;

                    let msg = generateWAMessageFromContent(from, {
                        viewOnceMessage: {
                            message: {
                                "messageContextInfo": {
                                    "deviceListMetadata": {},
                                    "deviceListMetadataVersion": 2
                                },
                                interactiveMessage: proto.Message.InteractiveMessage.create({
                                    body: proto.Message.InteractiveMessage.Body.create({
                                        text: ''
                                    }),
                                    footer: proto.Message.InteractiveMessage.Footer.create({
                                        text: `Secure payment by ${footer}`
                                    }),
                                    header: proto.Message.InteractiveMessage.Header.create({
                                        title: ccapt,
                                        subtitle: ``,
                                        hasMediaAttachment: true,
                                        ...(await prepareWAMessageMedia({ image: { url: paymentDataResponse.qr_image } }, { upload: AnanthaGanz.waUploadToServer }))
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                        buttons: [
                                            {
                                                "name": "quick_reply",
                                                "buttonParamsJson": `{"display_text":"CANCEL DEPOSIT","id":".cancel"}`
                                            },
                                        ],
                                    })
                                })
                            }
                        }
                    }, {});

                    AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
                        messageId: msg.key.id
                    }, { quoted: m });

                    let unick = paymentDataResponse.id;
                    sett("deposit", m.sender, unick);
                    let dataStatus = paymentDataResponse.status;
                    const startTime = new Date().getTime();

                    while (dataStatus !== "success") {
                        await sleep(4000);
                        let qt = qs.stringify({
                            'api_key': global.AtlaticKey,
                            'id': unick
                        });
                        let checkStatusConfig = {
                            method: 'post',
                            maxBodyLength: Infinity,
                            url: `https://atlantich2h.com/deposit/status`,
                            headers: {},
                            data: qt
                        };

                        let statusResponse = await axios(checkStatusConfig);
                        let statusDataResponse = statusResponse.data.data;
                        dataStatus = statusDataResponse.status;
                        console.log(dataStatus);
                        const currentTime = new Date().getTime();
                        const elapsedTime = (currentTime - startTime) / (1000 * 60 * 5);

                        if (elapsedTime >= 1) {
                            m.reply(`Upss, tiket udah gak berlaku nih. Yuk, buat yang baru!`);
                            break;
                        }

                        if (dataStatus === "success") {
                            async function orderPay() {
                                try {
                                    const data = qs.stringify({
                                        'api_key': global.AtlaticKey,
                                        'code': cek("buyer_sku_code", m.sender),
                                        'reff_id': cek("reff", m.sender),
                                        'target': cek("tujuan", m.sender)
                                    });
                                    var dataTopup = {
                                        method: 'post',
                                        maxBodyLength: Infinity,
                                        url: 'https://atlantich2h.com/transaksi/create',
                                        headers: {},
                                        data: data
                                    };

                                    let paymentResponse = await axios(dataTopup);
                                    let paymentDataResponse = paymentResponse.data.data;
                                    let ccapt = ` DETAIL PESANAN 
> Trxid : ${paymentDataResponse.reff_id}
> Layanan : ${paymentDataResponse.layanan}
> No. Tujuan : ${paymentDataResponse.target}
> Status : ${paymentDataResponse.status}
> Harga : ${formatmoney(sekarang)}
> Catatan : Pesanan Kamu sedang diproses 
`;
                                    reply(ccapt);
                                    let unick = paymentDataResponse.id;
                                    let dataStatus = paymentDataResponse.status;

                                    while (dataStatus !== "success") {
                                        await sleep(1000);
                                        let qt = qs.stringify({
                                            'api_key': global.AtlaticKey,
                                            'id': unick,
                                            'type': 'prabayar'
                                        });
                                        let checkStatusConfig = {
                                            method: 'post',
                                            maxBodyLength: Infinity,
                                            url: 'https://atlantich2h.com/transaksi/status',
                                            headers: {},
                                            data: qt
                                        };

                                        let statusResponse = await axios(checkStatusConfig);
                                        let statusDataResponse = statusResponse.data.data;
                                        dataStatus = statusDataResponse.status;
                                        console.log(dataStatus);
                                        if (dataStatus === "failed") {
                                            reply("Transaksi Gagal, Saldo Telah Dikembalikan Ke akun kamu");
                                            sett("+saldo", m.sender, sekarang);
                                            setTimeout(() => {
                                                sett("product_name", m.sender, "");
                                                sett("price", m.sender, 0);
                                                sett("tujuan", m.sender, "");
                                                sett("desc_prabayar", m.sender, "");
                                                sett("reff", m.sender, "");
                                                sett("buyer_sku_code", m.sender, "");
                                                sett("status", m.sender, true);
                                            }, 1000);
                                            break;
                                        }
                                        if (dataStatus === "success") {
                                            let ccapt = ` DETAIL PESANAN 
> Trxid : ${statusDataResponse.reff_id}
> Layanan : ${statusDataResponse.layanan}
> No. Tujuan : ${statusDataResponse.target}
> Status : ${statusDataResponse.status}
> Harga : ${formatmoney(sekarang)}
> Catatan : ${statusDataResponse.sn}
`;
                                            reply(ccapt);
                                            for (let i of dbAtl) {
                                                if (i.code == statusDataResponse.code) {
                                                    let hargamodal = i.price * 1;
                                                    const trxFilePath = './SETTING2/DB/dataTrx.json';
                                                    const trxUserData = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
                                                    const newTransaction = {
                                                        buyer: m.sender,
                                                        status: statusDataResponse.status,
                                                        no_pembayaran: `INV${randomPay}`,
                                                        ref_id: statusDataResponse.reff_id,
                                                        jam: moment.tz(`Asia/${global.Wilayah}`).format('HH:mm:ss'),
                                                        waktu: moment.tz(`Asia/${global.Wilayah}`).format('DD/MM/YY'),
                                                        produk: `${statusDataResponse.layanan}`,
                                                        harga: sekarang,
                                                        harga_modal: hargamodal,
                                                        tujuan: statusDataResponse.target,
                                                        invoice: statusDataResponse.sn,
                                                        };
                                                    trxUserData.push(newTransaction);
                                                    fs.writeFileSync(trxFilePath, JSON.stringify(trxUserData, null, 2), 'utf8');
                                                }
                                            }
                                            setTimeout(() => {
                                                sett("product_name", m.sender, "");
                                                sett("price", m.sender, 0);
                                                sett("tujuan", m.sender, "");
                                                sett("desc_prabayar", m.sender, "");
                                                sett("reff", m.sender, "");
                                                sett("buyer_sku_code", m.sender, "");
                                                sett("status", m.sender, true);
                                            }, 1000);
                                            break;
                                        }
                                    }
                                } catch (error) {
                                    if (error.response) {
                                        reply("Transaksi Gagal, Saldo Telah Dikembalikan Ke akun kamu");
                                        sett("+saldo", m.sender, sekarang);
                                        AnanthaGanz.sendMessage(ananthaa, { text: error.response.data.message });
                                        setTimeout(() => {
                                            sett("product_name", m.sender, "");
                                            sett("price", m.sender, 0);
                                            sett("tujuan", m.sender, "");
                                            sett("desc_prabayar", m.sender, "");
                                            sett("reff", m.sender, "");
                                            sett("buyer_sku_code", m.sender, "");
                                            sett("status", m.sender, true);
                                        }, 1000);
                                    }
                                }
                            }
                            orderPay();
                            sett("reff_deposit", m.sender, true);
                        } else if (dataStatus === "cancel") {
                            reply(`Pembayaran QRIS ref ${statusDataResponse.reff_id} dibatalkan`);
                            sett("reff_deposit", m.sender, true);
                            break;
                        }
                    }
                } catch (error) {
                    console.error("Error occurred:", error);
                    reply("Maaf, terjadi kesalahan dalam melakukan pembayaran. Silakan coba lagi nanti.");
                }
            }

            makePayment();
        }
    }
    break;
}
 case 'setapinick':{
    let ananthaNick = text.split(" ")[0];
        if (!ananthaNick) return reply("Mohon masukkan API key Nick yang valid, contoh: .setapinick 4a18c0a4-7ff5-4de9-8e49-017f7d04");
    sett("APInick", ananthaa, ananthaNick)
    reply(`Berhasil Terkoneksi APINICK : ${ananthaNick}`)
    }
    break
case 'infoakun':{
if (!isOwner) return m.reply(mess.owner);
    if (m.sender === ananthaa && cek("AtlaticKey", m.sender) === "") {
        console.log("Owner needs to set atlatic");
        return reply(`Silahkan Lakukan Koneksi Ke Atlatic Pedia Terlebih dahulu\n\nKetik *SETAPI*`)
    }
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'api_key': global.AtlaticKey
});
var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://atlantich2h.com/get_profile',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
reply(` *INFO AKUN ATLANTICH H2H*

> Nama : ${response.data.data.name}
> Username : ${response.data.data.username}
> Email : ${response.data.data.email}
> No. Telp : ${response.data.data.phone}
> Saldo : ${formatmoney(response.data.data.balance)}
> Status : ${response.data.data.status}

`)
})
.catch(function (error) {
  console.log(error);
});
}
break
case 'setapi':{
let ananthaNick = text.split(" ")[0];
        if (!ananthaNick) return reply("Mohon masukkan API key yang valid, contoh: .setapi Pxr4iPRYMa5QQ9SmTylBU22njv6Q3ttPP5lkN77e5xaDT7SMV3UJmyPlUfSzAxeSIlyWTftY6Ck9FaXyolew5Ubc1DMViABYSXP");
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'api_key': ananthaNick
});
var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://atlantich2h.com/get_profile',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
reply(` *INFO AKUN ATLANTICH H2H*

> Nama : ${response.data.data.name}
> Username : ${response.data.data.username}
> Email : ${response.data.data.email}
> No. Telp : ${response.data.data.phone}
> Saldo : ${formatmoney(response.data.data.balance)}
> Status : ${response.data.data.status}

`)
sett("AtlaticKey", ananthaa, ananthaNick)
})
.catch(function (error) {
  console.log(error);
  reply("Oops, apikey tidak ditemukan")
});
}
break
case 'getbank':{
let axios = require('axios');
let apiUrl = `https://${global.apiNick}/listBank`;
let config = {
  headers: {
    'Content-Type': 'application/json', // Contoh header, sesuaikan dengan kebutuhan Anda
  }
};
axios.get(apiUrl, config)
  .then((response) => {
    let responseData = JSON.stringify(response.data.data);
    fs.writeFileSync("./SETTING2/DB/data.json", responseData);
    reply("Sip, Berhasil get all bank")
    })
  .catch((error) => {
    console.error('Error:', error);
});
}
break 
/* API STALKING */
case 'cekbankid':{
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
let code_bank = q.split(" ")[0];
let no_bank = q.split(" ")[1];
if (!code_bank || !no_bank) {
          return reply(`BANK INDONESIA\n\nMasukan Kode bank dan rekening dengan benar, *Contoh :*\n.cekbankid 535 901341077047`)
        }
let axios = require('axios');
let apiUrl = `https://${global.apiNick}/getBankAccount?bankCode=${code_bank}&accountNumber=${no_bank}`;
let config = {
  headers: {
    'Content-Type': 'application/json', // Contoh header, sesuaikan dengan kebutuhan Anda
  }
};
axios.get(apiUrl, config)
  .then((response) => {
    let responseData = response.data;
    if (!responseData.data || !responseData.data.accountname) {
    reply("Oops, akun bank tidak ditemukan")
    }
    reply(`*${responseData.data.bankname}*\n\n> Nama Pemilik : ${responseData.data.accountname}\n> Nomor Rekening : ${responseData.data.accountnumber}\n> Kode Bank : ${responseData.data.bankcode}\n\n${toko}`)
})
  .catch((error) => {
    console.error('Error:', error);
});
}
break
case 'listbank': {
    if (cek("verifyemail", m.sender) === true) 
        return reply(`Oops, Silahkan Daftarkan Email Anda\nContoh: .setemail xxxxx@gmail.com`);
        
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    let replyBank = "「 BANK INDONESIA 」\n";
    let dataBank = JSON.parse(fs.readFileSync('./SETTING2/DB/data.json'));
    dataBank.forEach(function(product) {
        replyBank += `
${product.namaBank}\n> Kode Bank : ${product.kodeBank}\n`;
    });
    
    reply(`${replyBank}`);
    break;
}

 

      
      case 'manual.':{

    methodCode = 'MANUAL';
    methodName = 'MANUAL';
    
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
         if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()

    const sections = [
        {
            title: 'Nominal Cepat',
            rows: [
                { header: methodName, title: "Rp 50.000", id: `${methodCode} 50000` },
                { header: methodName, title: "Rp 100.000", id: `${methodCode} 100000` },
                { header: methodName, title: "Rp 200.000", id: `${methodCode} 200000` },
                { header: methodName, title: "Rp 500.000", id: `${methodCode} 500000` },
                { header: methodName, title: "Nominal Lainnya", id: methodCode }
            ]
        }
    ];

    const buttonParamsJson = `{
        "title": "Nominal Cepat",
        "sections": ${JSON.stringify(sections)}
    }`;

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Pilih nominal cepat:'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih satu dari opsi di bawah:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Nominal Cepat',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "single_select",
                                "buttonParamsJson": buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });

   }
break

case 'manual': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("cekVerify", m.sender) == true) return sendVerif();
    if (cek("syarat", m.sender) == true) return sendSyaratAnanthaa();
 if (cek("reff_deposit", m.sender) == false) return AnanthaGalauV() 
    let senderName = sender.split('@')[0];
   

    let depositAmount = parseInt(q.split(" ")[0]);

    if (isNaN(depositAmount)) {
        return reply(`Oops, Cara Deposit Salah\n\nContoh : .manual 20000`);
    }

    if (!depositAmount) {
        return reply(`Oops, Cara Deposit Salah\n\nContoh : .manual 20000`);
    }

    if (depositAmount < 10000) {
        return m.reply(`Oops, minimal deposit 10.000`);
    }
    if (depositAmount > 2000000) {
        return m.reply(`Oops, maximal deposit 2 juta`);
    }

    let referenceNumber = koderef
    let unikk = parseInt(generateRandomString(3));

    let fee = Math.ceil(depositAmount * 0.004);
    let totalPaymentQRIS = depositAmount + unikk + fee * 1
    let totalPaymentOther = depositAmount + unikk * 1
    let jadiBrp = depositAmount + unikk * 1
    sett("deposit", m.sender, `${referenceNumber}`);
    let depositData = {
        id: sender,
        ref: referenceNumber,
        method: 'MANUAL',
        diterima: depositAmount,
        total: jadiBrp,
        fee: fee,
        url: `https://wa.me${botNumber}?text=.menu`
    };

    fs.writeFileSync(`./SETTING2/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`, JSON.stringify(depositData));
    loading();

let depositInfoMessage = `
    *MANUAL DEPOSIT*
    
› *Referensi :* ${referenceNumber}
› *Berita Transfer :* ${beritatf}

> UNTUK QRIS
› *Jumlah :* ${formatmoney(depositAmount)}
› *Unik Kode :* ${formatmoney(unikk)}
› *Biaya QRIS :* ${formatmoney(fee)}
› *Total Transfer QRIS :* ${formatmoney(totalPaymentQRIS)}
› *Total Diterima :* ${formatmoney(jadiBrp)}

> UNTUK SELAIN QRIS
› *Jumlah :* ${formatmoney(depositAmount)}
› *Unik Kode :* ${formatmoney(unikk)}
› *Total Transfer  :* ${formatmoney(totalPaymentOther)}
› *Total Diterima :* ${formatmoney(jadiBrp)}
=========================
*Pilih Metode Pembayaran :*

  *E - WALLET*
> QRIS : Silahkan Scan QR di atas
> OVO : 085174667722
> SHOPEEPAY : 085174667722
> GOPAY : 087837456208
> DANA : 087837456208

  *TRANSFER BANK*
> SEABANK : 901341077047
> BANK JAGO : 100245971611
> BANK NEO : 5859459401999569
=========================
*Cara Melakukan Pembayaran* 

1. Pilih Metode Pembayaran
2. Transfer Sesuai *QRIS: ${formatmoney(totalPaymentQRIS)}* atau *SELAIN QRIS: ${formatmoney(totalPaymentOther)}* Tanpa Pembulatan/Pengurangan
3. Masukkan *${beritatf}* Pada Kolom Catatan Transfer (untuk metode selain QRIS)
4. Konfirmasi & Lanjutkan Pembayaran
5. Transfer Selesai, Tunggu 10 - 20 Menit
6. Saldo Berhasil Masuk

*NOTE !*
! Salah Memasukkan Nominal Transfer, Potong 10% ❌
! Jika Saldo Belum Masuk Sampai 1 Jam Silahkan Hubungi Admin
    `;
    sett("reff_deposit", m.sender, false)

    let qtt = { url: 'https://telegra.ph/file/72ef76e0411572b1dd6cb.jpg' };
    AnanthaGanz.sendMessage(from, { image: qtt, caption: depositInfoMessage }, { quoted: m });

    setTimeout(() => {
        let notif = `*Tiket Deposit Manual*\n\nHalo *${ownername}*,\nAda tiket deposit manual baru yang dibuat!\n\nDetail Tiket :\n> Member : ${senderName}\n> Referensi : ${referenceNumber}\n> Berita Transfer : ${beritatf}\n> Jumlah : ${formatmoney(depositAmount)}\n> Kode Unik : ${referenceNumber}\n> Total Transfer QRIS : ${formatmoney(totalPaymentQRIS)}\n> Total Transfer Lainnya : ${formatmoney(totalPaymentOther)}\n\n> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}\n*JIKA KAMU MENERIMA UANG*\n Silahkan Klik Tombol dibawah`;

        let msg = generateWAMessageFromContent(from, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: ''
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: ``
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: notif,
                            subtitle: '',
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    "name": "quick_reply",
                                    "buttonParamsJson": `{"display_text":"ACC","id":"${prefix}accdepo ${senderName}"}`
                                }
                            ]
                        })
                    })
                }
            }
        }, {});

        AnanthaGanz.relayMessage(`${owner}@s.whatsapp.net`, msg.message, {
            messageId: msg.key.id
        }, { quoted: m });
    }, 7000);
    break;
}
    case 'qris.': {
    methodCode = 'QRISS';
    methodName = 'QRIS by Nobu';
    
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
         if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()

    const sections = [
        {
            title: 'Nominal Cepat',
            rows: [
                { header: methodName, title: "Rp 50.000", id: `${methodCode} 50000` },
                { header: methodName, title: "Rp 100.000", id: `${methodCode} 100000` },
                { header: methodName, title: "Rp 200.000", id: `${methodCode} 200000` },
                { header: methodName, title: "Rp 500.000", id: `${methodCode} 500000` },
                { header: methodName, title: "Nominal Lainnya", id: methodCode }
            ]
        }
    ];

    const buttonParamsJson = `{
        "title": "Nominal Cepat",
        "sections": ${JSON.stringify(sections)}
    }`;

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Pilih nominal cepat:'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih satu dari opsi di bawah:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Nominal Cepat',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "single_select",
                                "buttonParamsJson": buttonParamsJson
                            }
                        ]
                    })
                })
            }
        }
    }, {});

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });

    break;
}


case 'tourl': {
           m.reply(mess.wait)
        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
        let media = await AnanthaGanz.downloadAndSaveMediaMessage(qmsg)
        if (/image/.test(mime)) {
            let anu = await TelegraPh(media)
            m.reply(util.format(anu))
        } else if (!/image/.test(mime)) {
            let anu = await UploadFileUgu(media)
            m.reply(util.format(anu))
        }
        await fs.
        unlinkSync(media)
    }
    break;

case 'setstatus': case 'setbiobot': case 'setbotbio': {
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
           if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
            if (!text) throw `this is a WhatsApp Bot named Hisoka-Morou`
            let name = await AnanthaGanz.updateProfileStatus(text)
            m.reply(`Successfully changed bot bio status to ${name}`)
            }
            break
                        case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 AnanthaGanz.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await AnanthaGanz.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz(`Asia/${waktuzone}`).format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 AnanthaGanz.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    AnanthaGanz.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
                     case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await AnanthaGanz.downloadAndSaveMediaMessage(qmsg, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    AnanthaGanz.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
  case 'hapus_akun':{
  const vt = [
        { title: 'Hapus Hehe :)', description: 'Kalo Kamu Klik Ini otomatis semua data kamu ilang', id: '.hapusakun' },
        { title: 'Engga jadi', description: '', id: '' }
    ];
    const buttonParamsJsont = `{
        "title": "Select Options",
        "sections": [
            {
                "title": "Pilihan Menu",
                "rows": ${JSON.stringify(vt)}
            }
        ]
    }`;
 let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Apakah Ada Yakin Untuk Menghapus Akun Anda?semua data deposit dll akan ilang`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih salah satu opsi di bawah:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: '',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: buttonParamsJsont
                            },
                            {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Hubungi Customer Service",
                                "url": "https://wa.me/${owner}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                        ],
                    })
                })
            }
        }
    }, {});


    await AnanthaGanz.relayMessage(m.chat, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });

  }
  break
  case 'delakun': {
  if (!isOwner) return reply(mess.owner)
  let akun = text.split(" ")[0]
  if (!akun) return reply("Oops, perintah salah\n\n> Contoh : .delakun 62851xxxx")
    const index = user.findIndex(u => u.id === akun + "@s.whatsapp.net");
    if (index !== -1) {
        // Hapus akun dari dataPelanggan.json
        setTimeout(() => {
            user.splice(index, 1);
            fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user));
        }, 3000);
        console.log("Akun telah berhasil dihapus.");
        // Tambahkan pesan respons langsung
        reply(`Sip, ID ${akun} berhasil dihapus`);
        
        // Hapus riwayat deposit dari depodataPelanggan.json
        const depoFilePath = './SETTING2/DB/TRANSACTION/dataDeposit.json';
        setTimeout(() => {
            try {
                // Baca file JSON
                const depoFileData = fs.readFileSync(depoFilePath, 'utf8');
                let allDepoUserData = JSON.parse(depoFileData);

                // Filter data untuk m.sender tertentu
                const depoUserData = allDepoUserData.filter(data => data.buyer === akun);

                if (depoUserData.length > 0) {
                    // Hapus data dari file JSON
                    allDepoUserData = allDepoUserData.filter(data => data.buyer !== akun);
                    fs.writeFileSync(depoFilePath, JSON.stringify(allDepoUserData));
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }, 5000);
        
        // Hapus riwayat transaksi dari trxdataPelanggan.json
        const trxFilePath = './SETTING2/DB/dataTrx.json';
        try {
            // Baca file JSON
            const trxFileData = fs.readFileSync(trxFilePath, 'utf8');
            let allTrxUserData = JSON.parse(trxFileData);

            // Filter data untuk m.sender tertentu
            const trxUserData = allTrxUserData.filter(data => data.buyer === akun);

            if (trxUserData.length > 0) {
                // Hapus data dari file JSON
                allTrxUserData = allTrxUserData.filter(data => data.buyer !== akun);
                fs.writeFileSync(trxFilePath, JSON.stringify(allTrxUserData));
            }
        } catch (error) {
            console.error("Error:", error);
        }
    } else {
        console.log("Pengguna tidak ditemukan.");
        // Tambahkan pesan respons langsung
        reply("Oops, akun tidak ditemukan");
    }
    }
    break;
  case 'hapusakun':
    const index = user.findIndex(u => u.id === m.sender);
    if (index !== -1) {
        // Hapus akun dari dataPelanggan.json
        setTimeout(() => {
            user.splice(index, 1);
            fs.writeFileSync('./SETTING2/DB/dataPelanggan.json', JSON.stringify(user));
        }, 3000);
        console.log("Akun telah berhasil dihapus.");
        // Tambahkan pesan respons langsung
        reply("Akun Anda telah berhasil dihapus.");
        
        // Hapus riwayat deposit dari depodataPelanggan.json
        const depoFilePath = './SETTING2/DB/TRANSACTION/dataDeposit.json';
        setTimeout(() => {
            try {
                // Baca file JSON
                const depoFileData = fs.readFileSync(depoFilePath, 'utf8');
                let allDepoUserData = JSON.parse(depoFileData);

                // Filter data untuk m.sender tertentu
                const depoUserData = allDepoUserData.filter(data => data.buyer === m.sender);

                if (depoUserData.length > 0) {
                    // Hapus data dari file JSON
                    allDepoUserData = allDepoUserData.filter(data => data.buyer !== m.sender);
                    fs.writeFileSync(depoFilePath, JSON.stringify(allDepoUserData));
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }, 5000);
        
        // Hapus riwayat transaksi dari trxdataPelanggan.json
        const trxFilePath = './SETTING2/DB/dataTrx.json';
        try {
            // Baca file JSON
            const trxFileData = fs.readFileSync(trxFilePath, 'utf8');
            let allTrxUserData = JSON.parse(trxFileData);

            // Filter data untuk m.sender tertentu
            const trxUserData = allTrxUserData.filter(data => data.buyer === m.sender);

            if (trxUserData.length > 0) {
                // Hapus data dari file JSON
                allTrxUserData = allTrxUserData.filter(data => data.buyer !== m.sender);
                fs.writeFileSync(trxFilePath, JSON.stringify(allTrxUserData));
            }
        } catch (error) {
            console.error("Error:", error);
        }
    } else {
        console.log("Pengguna tidak ditemukan.");
        // Tambahkan pesan respons langsung
        reply("Maaf, akun Anda tidak ditemukan.");
    }
    break;
    case 'editdesc': {
    // Memeriksa apakah pengguna adalah pemilik bot
    if (!isOwner) return reply(mess.owner);
    
    // Memisahkan argumen dari pesan
    const args = text.split(' ');

    // Memeriksa apakah jumlah argumen sesuai
    if (args.length < 2) {
        reply(`Contoh: ${prefix}editnama <buyer_sku_code> <new_description>`);
        return;
    }
    
    // Mendapatkan kode SKU pembeli dan deskripsi baru dari argumen
    const buyerSkuCode = args[0];
    const newDescription = args.slice(1).join(' '); 
    
    // Mendapatkan data customer_kode dari file JSON
    let jsonData;
    try {
        jsonData = JSON.parse(fs.readFileSync('./SETTING2/DB/all_prepaid.json', 'utf8'));
    } catch (error) {
        reply("Error reading 'all_prepaid.json': " + error.message);
        return;
    }
    
    let updated = false;
    let oldDescription = '';
    
    // Iterasi untuk mencari customer_kode dengan kode SKU yang sesuai
    for (let product of jsonData) {
        if (product.buyer_sku_code === buyerSkuCode) {
            // Menyimpan deskripsi lama
            oldDescription = product.desc;
            
            // Memperbarui deskripsi
            product.desc = newDescription;
            updated = true;
            break;
        }
    }
    
    // Menulis kembali data customer_kode ke file JSON jika ada pembaruan
    if (updated) {
        fs.writeFileSync('./SETTING2/DB/all_prepaid.json', JSON.stringify(jsonData, null, 2), 'utf8');
        
        // Memberikan balasan dengan informasi tentang produk yang diperbarui
        reply(`Deskripsi produk dengan KODE SKU ${buyerSkuCode} berhasil diperbarui.\nDeskripsi sebelumnya: ${oldDescription}\nDeskripsi baru: ${newDescription}`);
    } else {
        reply(`Gagal, Produk dengan KODE SKU ${buyerSkuCode} tidak ditemukan`);
    }
    break;
}
case 'editstatus': {
    // Memeriksa apakah pengguna adalah pemilik bot
    if (!isOwner) return reply(mess.owner);
    
    // Memisahkan argumen dari pesan
    const args = text.split(' ');

    // Memeriksa apakah jumlah argumen sesuai
    if (args.length < 2) {
        reply(`Contoh: ${prefix}editstatus <buyer_sku_code> <true|false>`);
        return;
    }
    
    // Mendapatkan kode SKU pembeli dan status baru dari argumen
    const buyerSkuCode = args[0];
    const newStatus = args[1].toLowerCase(); 

    // Memeriksa apakah status baru adalah 'true' atau 'false'
    if (newStatus !== 'true' && newStatus !== 'false') {
        reply(`Status harus 'true' atau 'false'`);
        return;
    }
    
    // Mengonversi status baru menjadi boolean
    const newSellerProductStatus = (newStatus === 'true');
    
    // Mendapatkan data customer_kode dari file JSON
    let jsonData;
    try {
        jsonData = JSON.parse(fs.readFileSync('./SETTING2/DB/all_prepaid.json', 'utf8'));
    } catch (error) {
        reply("Error reading 'all_prepaid.json': " + error.message);
        return;
    }
    
    let updated = false;
    let oldSellerProductStatus = null;
    
    // Iterasi untuk mencari customer_kode dengan kode SKU yang sesuai
    for (let product of jsonData) {
        if (product.buyer_sku_code === buyerSkuCode) {
            // Menyimpan status produk lama
            oldSellerProductStatus = product.seller_product_status;
            
            // Memperbarui status produk
            product.seller_product_status = newSellerProductStatus;
            updated = true;
            break;
        }
    }
    
    // Menulis kembali data customer_kode ke file JSON jika ada pembaruan
    if (updated) {
        fs.writeFileSync('./SETTING2/DB/all_prepaid.json', JSON.stringify(jsonData, null, 2), 'utf8');
        
        // Memberikan balasan dengan informasi tentang produk yang diperbarui
        reply(`Status produk dengan KODE SKU ${buyerSkuCode} berhasil diperbarui.\nStatus sebelumnya: ${oldSellerProductStatus}\nStatus baru: ${newSellerProductStatus}`);
    } else {
        reply(`Gagal, Produk dengan KODE SKU ${buyerSkuCode} tidak ditemukan`);
    }
    break;
}
    case 'editnama': {
    // Memeriksa apakah pengguna adalah pemilik bot
    if (!isOwner) return reply(mess.owner);
    
    // Memisahkan argumen dari pesan
    const args = text.split(' ');

    // Memeriksa apakah jumlah argumen sesuai
    if (args.length < 2) {
        reply(`Contoh: ${prefix}editnama <buyer_sku_code> <new_product_name>`);
        return;
    }
    
    // Mendapatkan kode SKU pembeli dan nama produk baru dari argumen
    const buyerSkuCode = args[0];
    const newProductName = args.slice(1).join(' '); 
    
    // Mendapatkan data customer_kode dari file JSON
    let jsonData;
    try {
        jsonData = JSON.parse(fs.readFileSync('./SETTING2/DB/all_prepaid.json', 'utf8'));
    } catch (error) {
        reply("Error reading 'all_prepaid.json': " + error.message);
        return;
    }
    
    let updated = false;
    let oldProductName = '';
    
    // Iterasi untuk mencari customer_kode dengan kode SKU yang sesuai
    for (let product of jsonData) {
        if (product.buyer_sku_code === buyerSkuCode) {
            // Menyimpan nama produk lama
            oldProductName = product.product_name;
            
            // Memperbarui nama produk
            product.product_name = newProductName;
            updated = true;
            break;
        }
    }
    
    // Menulis kembali data customer_kode ke file JSON jika ada pembaruan
    if (updated) {
        fs.writeFileSync('./SETTING2/DB/all_prepaid.json', JSON.stringify(jsonData, null, 2), 'utf8');
        
        // Memberikan balasan dengan informasi tentang produk yang diperbarui
        reply(`Nama produk dengan KODE SKU ${buyerSkuCode} berhasil diperbarui.\nNama sebelumnya: ${oldProductName}\nNama baru: ${newProductName}`);
    } else {
        reply(`Gagal, Produk dengan KODE SKU ${buyerSkuCode} tidak ditemukan`);
    }
    break;
}


case 'setwaktu':{
   JamBali()
}
break
case 'wita':{
sett("wilayah", m.sender, "Makassar");
sett("waktu", m.sender, false);
reply("Oke Sip, Waktu Telah diganti ke *WITA*")
}
break
case 'wib':{
sett("wilayah", m.sender, "Jakarta");
sett("waktu", m.sender, false);
reply("Oke Sip, Waktu Telah diganti ke *WIB*")
}
break
case 'wit':{
sett("wilayah", m.sender, "Jayapura");
sett("waktu", m.sender, false);
reply("Oke Sip, Waktu Telah diganti ke *WIT*")
}
break
case 'jadibot': {
            if (!text) return reply('*<!> Example:* .jadibot 628xxx')
if (m.isGroup) return reply("Maaf Kak Fitur Ini Hanya Bisa Di Gunakan Di Pribadi Chat")      
await jadibot(AnanthaGanz, text, fkontak, from)
            let loli = '`'
     await sleep(4500)      
        reply(`*Masukkan code dibawah ini untuk jadi bot sementara*\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk perangkat tertaut\n3. Ketuk tautkan perangkat\n4. Ketuk tautkan dengan nomor telepon saja\n5. Masukkan code di bawah ini\n\nNote: code dapat expired kapan saja!\n\nCode: ${loli}${global.codepairing}${loli}\nJika Code Error Silahkan Hapus  Folder Jadibot`);
      
}
break     
case 'pinterest': case 'pin': {
let axios = require('axios');
  if (!text) return reply('Nakano Ninoo'); // Check if text is provided, otherwise return a message
  await m.reply(mess.wait); // Send a wait message

  // Function to create an image message
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, {
      upload: AnanthaGanz.waUploadToServer
    });
    return imageMessage;
  }

  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Fetch data from Pinterest API
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Shuffle the array of image URLs
  let selectedImages = res.slice(0, 5); // Select the first 5 images after shuffling
  let push = [];
  let i = 1;

  // Prepare the message content with the selected images
  for (let imageUrl of selectedImages) {
    push.push({
      body: { text: `Image ke - ${i++}` },
      footer: { text: `${footer}` },
      header: {
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(imageUrl)
      },
      nativeFlowMessage: {
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      }
    });
  }

  // Construct the final bot message
  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { text: "Done ya" },
          footer: { text: `${footer}` },
          header: { hasMediaAttachment: false },
          carouselMessage: { cards: push }
        }
      }
    }
  }, {});

  await AnanthaGanz.relayMessage(m.chat, bot.message, { messageId: bot.key.id });
}
break;
case 'prabayar': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    // Baca data customer_kode dari file JSON
    const dataProduk = JSON.parse(fs.readFileSync('./SETTING2/DB/all_prepaid.json', 'utf8'));
    
    // Jika ada pengirim
    if (from) {
        // Ambil kategori unik dan urutkan
        const kategori = Array.from(new Set(dataProduk.map(item => item.kategori))).sort();
        
        // Siapkan buttonParamsJson dengan kategori
        const buttonParamsJson = `{
            "title": "Pilih Produk untuk Pembelian",
            "sections": [
                {
                    "title": "Pilihan Produk",
                    "rows": [
                        {"title": "E - Money", "description": "Topup E - Money", "id": ".e-money"},
                        {"title": "PLN Listrik", "description": "Beli Token PLN", "id": ".pln"},
                        {"title": "Pulsa, Data & Voucher", "description": "Beli Pulsa, Data & Voucher", "id": ".pulsa/data"},
                        {"title": "Topup Game", "description": "Mobile Legends, Free Fire, Pubg, etc", "id": ".game"},
                        {"title": "Voucher", "description": "Garena Shell, Razer Gold, etc", "id": ".voucher"}
                    ]
                }
            ]
        }`;

        // Siapkan pesan dengan nama pengirim
        const pesan = 'Mau Beli Produk Apa nih?';
        
        let prabayarMsg = generateWAMessageFromContent(from, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: pesan
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: 'Pilih dari daftar berikut:'
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: 'Pembelian Produk',
                            subtitle: '',
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: buttonParamsJson
                                }
                            ]
                        })
                    })
                }
            }
        }, {});

        await AnanthaGanz.relayMessage(prabayarMsg.key.remoteJid, prabayarMsg.message, {
            messageId: prabayarMsg.key.id
        }, { quoted: m });
    }
    break;
}
case 'pascabayar': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const productData = JSON.parse(fs.readFileSync('./SETTING2/DB/dataPostpaid.json', 'utf8'));
    const requestedCategory = "Pascabayar";
    let brands = [...new Set(productData.filter(item => item.category === requestedCategory && item.brand !== "E-MONEY" && item.brand !== "PDAM").map(item => item.brand))];

    if (brands.length > 0) {
        // Buat buttonParamsJson dengan kategori yang ditentukan
        const buttonParamsJson = `{
            "title": "Pilih Brand Pascabayar",
            "sections": [
                {
                    "title": "Pilihan Brand",
                    "rows": [
                        ${brands.map(brand => `{"title": "${brand}", "description": "Cek & Bayar ${brand}", "id": ".list2 ${brand}"}`).join(",")},
                        {"title": "PDAM", "description": "Cek & Bayar PDAM", "id": ".PDAM."},
                        {"title": "Cek Tagihan", "description": "Lakukan pengecekan tagihan", "id": ".cektagihan"}
                    ]
                }
            ]
        }`;

        const pesan = 'Silakan Pilih Brand Pascabayar :)';
        
        let pascabayarMsg = generateWAMessageFromContent(from, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: pesan
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: 'Pilih dari daftar berikut:'
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: 'Pascabayar',
                            subtitle: '',
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: buttonParamsJson
                                }
                            ]
                        })
                    })
                }
            }
        }, {});

        await AnanthaGanz.relayMessage(pascabayarMsg.key.remoteJid, pascabayarMsg.message, {
            messageId: pascabayarMsg.key.id
        }, { quoted: m });
    }
}
break; 
case 'game': {
  
  const productData = JSON.parse(fs.readFileSync('./SETTING2/DB/all_prepaid.json', 'utf8'));
  const requestedCategory = "Games";
  let brands = [...new Set(productData.filter(item => item.category === requestedCategory).map(item => item.provider))];

  if (brands.length > 0) {
    const sections = brands.map((provider) => {
      const rows = [
        {
          header: `Aman & Valid 100%`,
          title: `${provider}`,
          description: `Powered by ${footer}`,
          id: `.list ${provider}`
        }
      ];
      const section = {
        title: provider,
        rows: rows
      };

      // Add highlight_label for popular games
      if (['MOBILE LEGENDS', 'FREE FIRE', 'PUBG MOBILE', 'Honor of Kings', 'Genshin Impact'].includes(provider)) {
        section.highlight_label = "Populer +++";
      }

      return section;
    });

    const buttonParamsJson = `{
      "title": "CLICK HERE",
      "sections": ${JSON.stringify(sections)}
    }`;

    // Construct the second bot message with the interactive list
    let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: ''
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: ''
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: 'DAFTAR GAME',
              subtitle: '',
              hasMediaAttachment: false
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  "name": "single_select",
                  "buttonParamsJson": buttonParamsJson
                }
              ]
            })
          })
        }
      }
    }, {});

    await AnanthaGanz.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    }, { quoted: m });
  }
break;
}
case 'pulsa/data':{
  // Load the product data
  const productData = JSON.parse(fs.readFileSync('./SETTING2/DB/all_prepaid.json', 'utf8'));
  const requestedCategory = "Data Internet";
  let brands = [...new Set(productData.filter(item => item.category === requestedCategory).map(item => item.provider))];

  if (brands.length > 0) {
    const sections = brands.map((provider) => {
      const rows = [
        {
          header: `Aman & Valid 100%`,
          title: `${provider}`,
          description: `Powered by ${footer}`,
          id: `.list ${provider}`
        }
      ];
      const section = {
        title: provider,
        rows: rows
      };

      // Add highlight_label for popular games
      if (['XL', 'by.U', 'TELKOMSEL', 'INDOSAT', 'AXIS'].includes(provider)) {
        section.highlight_label = "Populer +++";
      }

      return section;
    });

    const buttonParamsJson = `{
      "title": "CLICK HERE",
      "sections": ${JSON.stringify(sections)}
    }`;

    // Construct the second bot message with the interactive list
    let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: ''
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: ''
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: 'DAFTAR PAKET & PULSA',
              subtitle: '',
              hasMediaAttachment: false
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  "name": "single_select",
                  "buttonParamsJson": buttonParamsJson
                }
              ]
            })
          })
        }
      }
    }, {});

    await AnanthaGanz.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    }, { quoted: m });
    }
    }
    break
            default:
                if (budy.startsWith('=>')) {
                    if (!isOwner) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isOwner) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isOwner) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
		
			
	
        }
        

    } catch (err) {
console.log(err);
let errorMessage = "Halo Developer, ada yang error nih. Jangan lupa diperbaiki ya: " + err;
AnanthaGanz.sendMessage("6285174279764@s.whatsapp.net", { text: errorMessage });
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
