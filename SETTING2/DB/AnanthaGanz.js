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
const { getHarga } = require('./SETTING/GET_API/getHarga')
const { getProduk } = require('./SETTING/GET_API/getpro')
const { getPasca } = require('./SETTING/GET_API/getPasca')
const { jadibot, conns } = require('./jadibot')   
let antilink = JSON.parse(fs.readFileSync('./SETTING/DB/antilink.json'))
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
        const isOwner = [`${owner}@s.whatsapp.net`,"6285179722574@s.whatsapp.net"].includes(sender) ? true : false
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
    return JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`));
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
let r = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json'))
let zannSmm = JSON.parse(fs.readFileSync('./SETTING/DB/zannstoresmm.json'))
let aa = JSON.parse(fs.readFileSync('./SETTING/DB/dataPelanggan.json'))
const daftar = () => {
m.reply(`You are not registered yet`)
}
let user = JSON.parse(fs.readFileSync('./SETTING/DB/dataPelanggan.json'))
const cek = (satu, dua) => { 
let x1 = false
Object.keys(user).forEach((i) => {
if (user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return user[x1].id }
if (satu == "product_name"){ return user[x1].product_name }
if (satu == "price"){ return user[x1].price }
if (satu == "saldo"){ return user[x1].saldo }
if (satu == "saldosmm"){ return user[x1].saldosmm }
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
if (satu == "allapi"){ return user[x1].allapi }
if (satu == "digiflazz"){ return user[x1].digiflazz }
if (satu == "tokopay"){ return user[x1].tokopay }
if (satu == "paydisini"){ return user[x1].paydisini }
if (satu == "digiuser"){ return user[x1].digiuser }
if (satu == "digiapi"){ return user[x1].digiapi }
if (satu == "pdsini"){ return user[x1].pdsini }
if (satu == "merchant_id"){ return user[x1].merchant_id }
if (satu == "secret_key"){ return user[x1].secret_key }
if (satu == "APInick"){ return user[x1].APInick }
if (satu == "smm_harga"){ return user[x1].smm_harga }
if (satu == "smm_name"){ return user[x1].smm_name }
if (satu == "smm_status"){ return user[x1].smm_status }
if (satu == "smm_no"){ return user[x1].smm_no }
if (satu == "smm_code"){ return user[x1].smm_code }
if (satu == "smm_quantity"){ return user[x1].smm_quantity }
}
if (x1 == false) { return null } 
}
let sett = (satu, dua, tiga) => { 
Object.keys(user).forEach((i) => {
if (user[i].id == dua){
if (satu == "+saldo")
{ user[i].saldo += tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "-saldo"){
user[i].saldo -= tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "+saldosmm")
{ user[i].saldosmm += tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "-saldosmm"){
user[i].saldosmm -= tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "price"){ user[i].price = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "email"){ user[i].email = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "tanggal_trx"){ user[i].tanggal_trx = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}    
if (satu == "tanggal_deposit"){ user[i].tanggal_deposit = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))} 
 if (satu == "status"){ user[i].status = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "product_name"){ user[i].product_name = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "reff"){ user[i].reff = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "deposit"){ user[i].deposit = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "reff_deposit"){ user[i].reff_deposit = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "buyer_sku_code"){ user[i].buyer_sku_code = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "tujuan"){ user[i].tujuan = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "desc"){ user[i].desc = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "verfiyemail"){ user[i].verfiyemail = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "level"){ user[i].level = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "desc_prabayar"){ user[i].desc_prabayar = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "syarat"){ user[i].syarat = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "layanan"){ user[i].layanan = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "verificationCode"){ user[i].verificationCode = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "cekVerify"){ user[i].cekVerify = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "wilayah"){ user[i].wilayah = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "waktu"){ user[i].waktu = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "allapi"){ user[i].allapi = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "digiflazz"){ user[i].digiflazz = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "tokopay"){ user[i].tokopay = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "paydisini"){ user[i].paydisini = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "digiuser"){ user[i].digiuser = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "digiapi"){ user[i].digiapi = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "pdsini"){ user[i].pdsini = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "merchant_id"){ user[i].merchant_id = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "secret_key"){ user[i].secret_key = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "APInick"){ user[i].APInick = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "smm_harga"){ user[i].smm_harga = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "smm_name"){ user[i].smm_name = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "smm_status"){ user[i].smm_status = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "smm_no"){ user[i].smm_no = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "smm_code"){ user[i].smm_code = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
if (satu == "smm_quantity"){ user[i].smm_quantity = tiga
fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user))}
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
            saldosmm: 0,
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
            level: "Collector Z", // Jika pemilik, set level menjadi "Collector Z"
            layanan: "",
            allapi: true,
            digiflazz: true,
            tokopay: true,
            paydisini: true,
            digiuser: "",
            digiapi: "",
            pdsini: "",
            merchant_id: "",
            secret_key: "",
            api_idsmm: "",
            api_keysmm: "",
            medanpedia: true,
            APInick: "",
            smm_harga: "",
            smm_status: "",
            smm_no: "",
            smm_code :"",
            smm_quantity: ""
           
        });
    } else {
        user.push({
            id: m.sender,
            product_name: "",
            tujuan: "",
            price: 0,
            email: "Belum Verifikasi Email",
            saldo: 0,
            saldosmm: 0,
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
            level: "Jagoan Z", // Jika bukan pemilik, set level menjadi "Jagoan Z"
            layanan: "",
            smm_harga: "",
            smm_status: "",
            smm_no: "",
            smm_code :"",
            smm_quantity: ""
        });
    }

    // Simpan data ke file
    fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user));

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
global.PayDisiniKey = cek("pdsini", ananthaa);
global.TokoPay_merchant = cek("merchant_id", ananthaa);
global.TokoPay_secret = cek("secret_key", ananthaa);
global.UsernameDF = cek("digiuser", ananthaa);
global.APIkeyDF = cek("digiapi", ananthaa);
global.api_IdSmm = cek("api_idsmm", ananthaa);
global.api_KeySmm = cek("api_keysmm", ananthaa);

const nodemailer = require('nodemailer');
function cancelPay() {
        let axios = require('axios');
        let md5 = require('md5');
        let FormData = require('form-data');
        let keynya = global.PayDisiniKey;
        var data = new FormData();
        let uni = `${cek("deposit", m.sender)}`
        let signnya = md5(keynya + uni + 'CancelTransaction'); // Fixed the signature calculation
         
        data.append('key', keynya);
        data.append('request', "cancel");
        data.append('unique_code', uni);
        data.append('signature', signnya);

        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://paydisini.co.id/api/',
            headers: { 
                ...data.getHeaders()
            },
            data: data
        };

        axios(config)
        .then(function (response) {
            sendExpDepo(sender);
            setTimeout(() => {
            fs.unlinkSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`);
                sett("deposit", m.sender, "");
            }, 100);
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
           
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Metode Pembayaran lainnya`, description: `QRIS, DANA, OVO, etc`, id: ".metodepembayaran" }
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
    async function Zann() {
    
   
 let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `Oops, invoice masih tersedia`
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
                                "buttonParamsJson": `{"display_text":"Batalkan Aja :)","id":".batalsmm"}`
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
let d = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json'))    
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

const admModalPath = './SETTING/DB/AdminPrepaid.json';

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
            const replyMessage = `*📮INFO SERVER*\n\n*IP :* ${ipv4}\n*Country :* ${res.country}\n*Cc :* ${res.cc}`;
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
                        text: `*Keuntungan Upgrade ke Collector Z:*\n\n1. Akses penuh ke semua fitur premium seperti Ceknickname, topuser, dan lainnya.\n2. Potongan harga 10% setiap pembelian minimal Rp. 5.000 hingga maksimal pembelian Rp. 2.000.000\n3. Nikmati fitur transfer antar pengguna untuk kemudahan transaksi.\n4. Dapatkan langsung saldo Rp. 5.000 saat upgrade ke Collector Z\n\nJangan lewatkan kesempatan ini! Upgrade sekarang hanya dengan Rp. 25.000.`
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
let axios = require('axios');
  let FormData = require('form-data');
  let md5 = require('md5');
 if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
if(cek("level", m.sender) == "Collector Z") return reply("Oops, Kamu Sudah Melakukan Pembayaran sebelumnya");
    const nomor = sender.split("@")[0];
    const metodePembayaran = args[0]; // Metode pembayaran yang dipilih oleh pengguna
       if(fs.existsSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`)) return AnanthaGalauV() 
    const ref_id = "ZUP26" + randomPay
    const jumlah = 25000 * 1
    let metode;
    if (!metodePembayaran) {
        return UpgradeAnanthazz()
    } else {
        switch (metodePembayaran.toLowerCase()) {
            case 'qris':
                metode = '11';
                break;
            case 'dana':
                metode = '13';
                break;
            case 'linkaja':
                metode = '14';
                break;
                case 'shopeepay':
                metode = '16';
                break;
            case 'mandiri':
                metode = '5';
                break;
            case 'bca':
                metode = '1';
                break;
            case 'bri':
                metode = '2';
                break;
            case 'bni':
                metode = '4';
                break;
            case 'alfamart':
                metode = '18';
                break;
            case 'indomaret':
                metode = '19';
                break;
                
            default:
                return UpgradeAnanthazz()
        }
    }
  async function makePayment() {
    try {
      let keynya = global.PayDisiniKey;
      let kodeunick = ref_id;
      let paymetcod = metode;
      let aomut = jumlah * 1;
      let exp = 10800;
      let create = keynya + kodeunick + paymetcod + aomut + exp + 'NewTransaction'
      let signature = md5(create);
    // Membuat data form untuk permintaan pembayara
    
      var paymentData = new FormData();
      paymentData.append('key', keynya);
      paymentData.append('request', 'new');
      paymentData.append('unique_code', kodeunick);
      paymentData.append('service', paymetcod);
      paymentData.append('amount', aomut);
      paymentData.append('note', `Upgrade Level : ${dengan_nol}`);
      paymentData.append('valid_time', exp);
      paymentData.append('customer_email', cek("email", m.sender));
      paymentData.append('ewallet_phone', dengan_nol);
      paymentData.append('type_fee', '1');
      paymentData.append('payment_guide', "true");
      paymentData.append('signature', signature); // Menggunakan signature yang telah dihitung
      // Konfigurasi untuk permintaan pembayaran
      var paymentConfig = {
        method: 'post',
        url: 'https://paydisini.co.id/api/',
        headers: { 
          ...paymentData.getHeaders()
        },
        data: paymentData
      };
      // Mengirim permintaan pembayaran
      let paymentResponse = await axios(paymentConfig);
      let paymentDataResponse = paymentResponse.data.data;
                         if (!paymentDataResponse || !paymentDataResponse || typeof paymentDataResponse.unique_code === 'undefined') {
        reply(`Oops, ${paymentResponse.data.msg}`)
            console.error(paymentResponse.data.msg);
            return;
        }
        console.log(paymentResponse)
          let obj = { id: m.sender, ref: `${paymentDataResponse.unique_code}`, method : `${paymentDataResponse.service_name}`, diterima: `${paymentDataResponse.balance}`, total: `${paymentDataResponse.amount}`, fee: `${paymentDataResponse.fee}`, url: `${paymentDataResponse.checkout_url_v2}` }
          sett("deposit", m.sender, `${paymentDataResponse.unique_code}`)
fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${paymentDataResponse.unique_code}.json`, JSON.stringify(obj))
    var ccapt = ` *PEMBAYARAN OTOMATIS*

> Metode : ${paymentDataResponse.service_name}
> Referensi : ${paymentDataResponse.unique_code}
> Berlaku : 30 menit
> Tagihan : ${formatmoney(paymentDataResponse.balance)}
> Fee : ${formatmoney(paymentDataResponse.fee)}
> Total Pembayaran : ${formatmoney(paymentDataResponse.amount)}
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
                    title: ccapt,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"CANCEL DEPOSIT","id":".cancel"}`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Bayar Sekarang",
                                "url": "${paymentDataResponse.checkout_url_v2}",
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

const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
setTimeout(() => {
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
               let url = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.url}`
               sendEmailPending(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender, url);
               }, 2500);
let unick = paymentDataResponse.unique_code
function getExpirationTime() {
    const currentTime = new Date().getTime();
    const expirationTime = currentTime + (30 * 60 * 1000); // 30 menit kedepan
    const timeRemaining = Math.ceil((expirationTime - currentTime) / 60000); // Konversi ke menit dan dibulatkan ke atas
    return timeRemaining;
}
      // Memantau status pembayaran
      let dataStatus = paymentDataResponse.status;
      const startTime = new Date().getTime();
      while (dataStatus !== "Success") {
        await sleep(1000);
       let create3 = keynya + unick + 'StatusTransaction'
      let signature3 = md5(create3);
        var checkStatusData = new FormData();
        checkStatusData.append('key', keynya);
        checkStatusData.append('request', 'status');
        checkStatusData.append('unique_code', kodeunick);
        checkStatusData.append('signature', signature3); 
        // Konfigurasi untuk memeriksa status pembayaran
        var checkStatusConfig = {
          method: 'post',
          url: 'https://paydisini.co.id/api/',
          headers: { 
            ...checkStatusData.getHeaders()
          },
          data: checkStatusData
        };
        // Mengirim permintaan untuk memeriksa status pembayaran
        let statusResponse = await axios(checkStatusConfig);
        let statusDataResponse = statusResponse.data.data;
        dataStatus = statusDataResponse.status;
        console.log(dataStatus);
        // Memeriksa waktu timeout
        const currentTime = new Date().getTime();
           const elapsedTime = (currentTime - startTime) / (1000 * 60 * 30);
             if (elapsedTime >= 1) {
             m.reply(`Upss, tiket ${cek("deposit", m.sender)} udah gak berlaku nih. Yuk, buat yang baru!`);
              cancelPay();
          break;
        }
        // Jika pembayaran berhasil
        if (dataStatus === "Success") {
          const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
               sendEmailDepo(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender);
             AnanthaGanz.sendMessage(nomor+"@s.whatsapp.net", { text : "Yeyy, Pembayaran berhasil dilakukan. Level awal *Jagoan Z* telah ditingkatkan ke *Colector Z*. Terimakasih :)"})
             setTimeout(() => {
  let notif = `Hai *${ownername}*,
Ada transaksi yang telah dibayar!

Member : ${dengan_nol}
Kode Unik : ${ref_sender}
Metode Pembayaran : ${method}
Jumlah Deposit : ${formatmoney(price_sender)}
Biaya Admin : ${formatmoney(fee_sender)}
Total Deposit : ${formatmoney(total_sender)}
Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Detail transaksi dapat dilihat pada website 
`
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
                    title: notif,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "DETAIL PEMBAYARAN",
                                "url": "https://web.paydisini.co.id/Riwayat-Transaksi/?status=&unique_code=${ref_sender}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                })
            })
        }
    }
}, {});

AnanthaGanz.relayMessage(`${owner}@s.whatsapp.net`, msg.message, {
    messageId: msg.key.id
    }, {quoted: m});
   }, 2000); // 2000 milliseconds (3 seconds)
                // Tambahkan pengguna ke fitur premium setelah pembayaran berhasil
                let keuntunganup = 5000 * 1 // SETT KEUNTUNGAN UP
               sett("level", nomor + "@s.whatsapp.net", "Collector Z");
               sett("+saldo", nomor + "@s.whatsapp.net", keuntunganup) 
                setTimeout(() => { 
                fs.unlinkSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`);
                }, 4000);
                setTimeout(() => {
                sett("deposit", m.sender, "")
                }, 6000);
                 } else if (dataStatus === "Canceled") {
               console.log(`Berhasil! Ref ${cek("deposit", m.sender)} Dihapus`)
          break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  // Memanggil fungsi untuk melakukan pembayaran
  makePayment();
}
break;
/*

*/
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
    let members = require("./SETTING/DB/dataPelanggan.json");
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
    if (m.sender === ananthaa && cek("digiflazz", m.sender) === true) {
        console.log("Owner needs to set digiflazz");
        return reply(`Silahkan Lakukan Koneksi Ke Digiflazz Terlebih dahulu\n\nKetik *SETDIGI*`)
    

    }
    if (m.sender === ananthaa && cek("paydisini", m.sender) === true) {
        console.log("Owner needs to set paydisini");
        return reply(`Silahkan Lakukan Koneksi Ke Paydisini Terlebih dahulu\n\nKetik *SETPAYDISINI*`)
    }
    if (m.sender === ananthaa && cek("tokopay", m.sender) === true) {
        console.log("Owner needs to set paydisini");
        return reply(`Silahkan Lakukan Koneksi Ke Paydisini Terlebih dahulu\n\nKetik *SETTOKOPAY*`)
    }
    if (m.sender === ananthaa && cek("APInick", m.sender) === "") {
        console.log("Owner needs to set apinick");
        return reply(`Silahkan Lakukan Koneksi Ke APINICK Terlebih dahulu\n\nKetik *SETAPIZANN*`)
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
                    {"title": "DASHBOARD", "description": "Lihat informasi : saldo, trx, dll", "id": ".info"},
                    {"title": "STALKING", "description": "Lihat informasi akun game, e-wallet, dll.", "id": ".stalking"}
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
    if (cek("cekVerify", m.sender) == true) return sendVerif();
    if (cek("syarat", m.sender) == true) return sendSyaratAnanthaa();
    if (cek("waktu", m.sender) == true) return JamBali();

    let sections = [
        {
            title: `Powered by ${footer}`,
            rows: [
                { title: "Pulsa, Data, Topup Game, etc", description: "Layanan Prabayar", id: ".prabayar" },
                { title: "Bpjs, Internet, Pdam, etc", description: "Layanan Pascabayar", id: ".pascabayar" },
                  { title: `SMM PANEL - ${footer}`, description: "Layanan khusus Penambahan Followers, Likes, View, etc", id: ".smm" }
            ]
        }
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

    const crypto = require("crypto");
    const axios = require("axios");
    const fs = require('fs');

    const third = 'depo';
    const hash = crypto.createHash('md5').update(global.UsernameDF + global.APIkeyDF + third).digest('hex');

    const configDigiflazz = {
        method: 'POST',
        url: 'https://api.digiflazz.com/v1/cek-saldo',
        data: {
            "cmd": "deposit",
            "username": global.UsernameDF,
            "sign": hash
        }
    };

    let digiflazzError = null;
    let paydisiniError = null;
    let tokopayError = null;

    const handleErrors = () => {
        let errorMessages = [];
        if (digiflazzError) errorMessages.push(`Digiflazz: ${digiflazzError}`);
        if (paydisiniError) errorMessages.push(`Paydisini: ${paydisiniError}`);
        if (tokopayError) errorMessages.push(`TokoPay: ${tokopayError}`);

        if (errorMessages.length > 0) {
            m.reply(`Gagal mengambil informasi. Detail:\n${errorMessages.join('\n')}`);
        }
    };

    // Fungsi untuk mendapatkan informasi dari API Zannstore
    const getZannstoreInfo = async () => {
        try {
            const response = await axios.post('https://zannstoresmm.my.id/api/config.php', new URLSearchParams(Object.entries({
                api_key: cek("APInick", ananthaa),
                action: 'profile',
            })));

            if (response.data.status == true) {
                return {
                    username: response.data.data.username,
                    balance: response.data.data.balance * 1,
                };
            } else {
                throw new Error(response.data.data.msg);
            }
        } catch (error) {
            throw error;
        }
    };

    // Mendapatkan informasi dari API Digiflazz
    axios(configDigiflazz)
        .then(response => {
            if (response.data.data) {
                const profile = response.data.data;
                const saldo = `💰 *Saldo Digiflazz*: ${formatmoney(profile.deposit)}`;

                // Membaca file JSON prabayar dan pascabayar
                let r = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json'));
                let pascabayar = JSON.parse(fs.readFileSync('./SETTING/DB/dataPostpaid.json'));

                // Menghitung total produk, kategori, tipe, dan brand
                let totalProdukPrabayar = r.reduce((count, i) => count + (i.product_name ? 1 : 0), 0);
                let totalProdukPascabayar = pascabayar.reduce((count, i) => count + (i.product_name ? 1 : 0), 0);
                let totalKategoriPrabayar = r.reduce((categories, i) => i.category && !categories.includes(i.category) ? categories.concat(i.category) : categories, []).length;
                let totalKategoriPascabayar = pascabayar.reduce((categories, i) => i.category && !categories.includes(i.category) ? categories.concat(i.category) : categories, []).length;
                let totalTipePrabayar = r.reduce((types, i) => i.type && !types.includes(i.type) ? types.concat(i.type) : types, []).length;
                let totalTipePascabayar = pascabayar.reduce((types, i) => i.type && !types.includes(i.type) ? types.concat(i.type) : types, []).length;
                let totalBrandPrabayar = r.reduce((brands, i) => i.brand && !brands.includes(i.brand) ? brands.concat(i.brand) : brands, []).length;
                let totalBrandPascabayar = pascabayar.reduce((brands, i) => i.brand && !brands.includes(i.brand) ? brands.concat(i.brand) : brands, []).length;

                // Mengeksekusi case infopaydisini untuk mendapatkan informasi akun Paydisini
                const infopaydisini = () => {
                    const md5 = require('md5');
                    const FormData = require('form-data');
                    const keynya = global.PayDisiniKey;
                    const data = new FormData();
                    const signnya = keynya + 'Profile';
                    const signa3 = md5(signnya);
                    data.append('key', keynya);
                    data.append('request', 'profile');
                    data.append('signature', signa3);

                    const configPaydisini = {
                        method: 'post',
                        maxBodyLength: Infinity,
                        url: 'https://paydisini.co.id/api/',
                        headers: { 
                            ...data.getHeaders()
                        },
                        data: data
                    };

                    axios(configPaydisini)
                        .then(response => {
                            if (response.data.data) {
                                const tersedia = response.data.data.saldo * 1;
                                const tertahan = response.data.data.saldo_tertahan * 1;
                                const infoPaydisini = `INFO AKUN PAYDISINI \n\n> Nama : ${response.data.data.full_name}\n> Merchant : ${response.data.data.merchant}\n> No.Telp : ${response.data.data.telephone}\n> Email : ${response.data.data.email}\n> Saldo Tersedia : ${formatmoney(tersedia)}\n> Tertahan : ${formatmoney(tertahan)}\n> Auto Withdraw : ${response.data.data.auto_wd}`;

                                // Mengeksekusi case infotokopay untuk mendapatkan informasi akun TokoPay
                                const infotokopay = async () => {
                                    try {
                                        const md5 = require('md5');
                                        const axios = require('axios');
                                        const Merchantnya = global.TokoPay_merchant
    const screct = global.TokoPay_secret
                                        const setmd = `${Merchantnya}:${screct}`;
                                        const signature = md5(setmd);

                                        const configTokopay = {
                                            method: 'POST',
                                            url: 'https://api.tokopay.id/v1/merchant',
                                            data: {
                                                "merchant_id": Merchantnya,
                                                "signature": signature
                                            }
                                        };

                                        const response = await axios(configTokopay);

                                        // Ekstrak data dari respons API
                                        const { nama_toko, saldo_tertahan, saldo_tersedia } = response.data.data;

                                        // Format saldo sebagai mata uang
                                        const formattedTertahan = formatmoney(saldo_tertahan);
                                        const formattedTersedia = formatmoney(saldo_tersedia);

                                        // Mendapatkan informasi dari API Zannstore
                                        const zannstoreInfo = await getZannstoreInfo();

                                        let title = `
🌟 *DETAIL DIGIFLAZZ* 🌟

${saldo}

📊 *Prabayar*:
  • Total Produk: ${totalProdukPrabayar}
  • Total Kategori: ${totalKategoriPrabayar}
  • Total Tipe: ${totalTipePrabayar}
  • Total Brand: ${totalBrandPrabayar}

📊 *Pascabayar*:
  • Total Produk: ${totalProdukPascabayar}
  • Total Kategori: ${totalKategoriPascabayar}
  • Total Tipe: ${totalTipePascabayar}
  • Total Brand: ${totalBrandPascabayar}

${infoPaydisini}

*TOKOPAY INFO*

*Nama Akun :* ${nama_toko}
*Saldo Tertahan :* ${formattedTertahan}
*Saldo Tersedia :* ${formattedTersedia}

*SMM by ZANNSTORE*
*Username :* ${zannstoreInfo.username}
*Balance :* ${formatmoney(zannstoreInfo.balance)}

`;

const menuuu = [
    {
        title: `Powered by ${footer}`,
        rows: [
            { header: "Intergrasi API", title: `Terkait Koneksi BOT`, description: "", id: ".intergrasi" }
        ]
    },
    {
        highlight_label: "IPV4",
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

const msg = generateWAMessageFromContent(from, {
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

await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
}, { quoted: m });

} catch (error) {
    if (error.response) {
        console.error('Error fetching TokoPay info:', error.response.data);
        tokopayError = error.response.data.message;
        handleErrors();
    } else {
        console.error('Error fetching TokoPay info:', error);
        tokopayError = error.message;
        handleErrors();
    }
}
};
infotokopay();

} else {
    console.error("Paydisini API response is missing data:", response.data);
    paydisiniError = response.data.msg;
    handleErrors();
}
})
.catch(error => {
    if (error.response) {
        console.error("Error fetching Paydisini info:", error.response.data);
        paydisiniError = error.response.data.msg;
        handleErrors();
    } else {
        console.error("Error fetching Paydisini info:", error);
        paydisiniError = error.message;
        handleErrors();
    }
});
};

infopaydisini();
} else {
    console.error("Failed to get API data from Digiflazz:", response.data);
    digiflazzError = "Gagal mendapatkan data dari API Digiflazz. Silakan coba lagi nanti.";
    handleErrors();
}
})
.catch(error => {
    if (error.response) {
        console.error("Error fetching Digiflazz info:", error.response.data);
        digiflazzError = error.response.data.message;
    } else {
        console.error("Error fetching Digiflazz info:", error);
        digiflazzError = error.message;
    }
    handleErrors();
});
}
break;
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
                    {"title": "Min Saldo", "description": "Mengatur saldo minimum", "id": ".minbalance"}
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

case 'digiflazz': {
    if (!isOwner) return m.reply(mess.owner);
    if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    const digiflazzButtons = `{
        "title": "Pilih Menu DigiFlazz",
        "sections": [
            {
                "title": "Pilihan DigiFlazz",
                "rows": [
                    {"title": "Balance Digiflazz", "description": "Melihat saldo Digiflazz", "id": ".balance"},
                    {"title": "Get Seller", "description": "Mendapatkan daftar penjual", "id": ".update_seller"},
                    {"title": "Get Prabayar", "description": "Mendapatkan daftar produk prabayar", "id": ".update_prabayar"},
                    {"title": "Get Pascabayar", "description": "Mendapatkan daftar produk pascabayar", "id": ".update_pascabayar"},
                    {"title": "Margin Harga", "description": "Melihat margin harga", "id": ".margin"},
                    {"title": "Add Harga", "description": "Menambahkan harga produk", "id": ".addharga"},
                    {"title": "Edit Nama Produk", "description": "Mengedit nama produk", "id": ".editnama"},
                    {"title": "Edit Harga Produk", "description": "Mengedit harga produk", "id": ".editharga"},
                    {"title": "Rekap Transaksi", "description": "Melihat rekap transaksi", "id": ".rekap"},
                    {"title": "Lihat Produk Secara Spesifik", "description": "Mengecek detail produk", "id": ".cek"},
                   {"title": "Lihat Total Keuntungan 1/1", "description": "Mengecek Untung Produk", "id": ".total"}
                ]
            }
        ]
    }`;
    let digiflazzMsg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silakan pilih menu untuk DigiFlazz:'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'DigiFlazz',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: digiflazzButtons
                            }
                        ]
                    })
                })
            }
        }
    }, {});
    await AnanthaGanz.relayMessage(digiflazzMsg.key.remoteJid, digiflazzMsg.message, {
        messageId: digiflazzMsg.key.id
    }, { quoted: m });
}
break;

case 'intergrasi': {
    if (!isOwner) return m.reply(mess.owner);
    if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    
    const ppp = [
        {
            highlight_label: "DIGIFLAZZ",
            rows: [
                { header: "DIGIFLAZZ API", title: `INFORMASI PUSAT`, description: "", id: ".digiflazz" }
            ]
        },
        {
            highlight_label: "TOKOPAY",
            rows: [
                { header: "TOKOPAY API", title: "INFORMASI AKUN PAYMENT GATEWAY", description: "", id: ".tkpay" }
            ]
        },
                {
            highlight_label: "TOKOPAY",
            rows: [
                { header: `TARIK SALDO`, title: "", description: "", id: ".tarik-" }
            ]
        },
        {
            highlight_label: "PAYDISINI",
            rows: [
                { header: `PAYDISINI API`, title: "INFORMASI AKUN PAYMENT GATEWAY", description: "", id: ".infopaydisini" }
            ]
        }
    ];

    
    
const hi = `{
        "title": "CLICK HERE",
        "sections": ${JSON.stringify(ppp)}
    }`;
    let intergrasiMsg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silakan pilih vendor untuk integrasi:'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Integrasi Vendor',
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: hi
                            }
                        ]
                    })
                })
            }
        }
    }, {});
    await AnanthaGanz.relayMessage(intergrasiMsg.key.remoteJid, intergrasiMsg.message, {
        messageId: intergrasiMsg.key.id
    }, { quoted: m });
}
break;
            /* End Case Custom */
            
            /* Fitur Database Rekap & Lain */
case "toplayanan": {
   if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`);
    if (cek("waktu", m.sender) == true) return JamBali()
    const filePath = './SETTING/DB/dataTrx.json';

    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const allTransactions = JSON.parse(fileData);

        if (Array.isArray(allTransactions) && allTransactions.length > 0) {
            const productDetails = allTransactions.reduce((acc, transaction) => {
                // Hanya proses transaksi dengan status "Sukses"
                if (transaction.status === "Transaksi Sukses") {
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
    const filePath = './SETTING/DB/dataPelanggan.json';
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
        return reply("Oops, Verifikasi Code yang kamu input enggak valid :)");
    }
    // Lanjutkan proses pendaftaran jika kode konfirmasi valid
    let userEmail = cek("email", m.sender);

    // Tandai email sebagai terverifikasi
    sendEmail();
    sett("cekVerify", m.sender, false);
    sett("verificationCode", m.sender, "");

    // Membaca data anggota dari file JSON
    let listmemb = JSON.parse(fs.readFileSync('./SETTING/DB/dataPelanggan.json'));

    // Menghapus "wa" dan "@" dari UserId
    

    // Menghitung total anggota berdasarkan jumlah ID unik
    let uniqueIds = new Set(listmemb.map(member => member.id));
    let totalMembers = uniqueIds.size;

    // Kirim pesan ke ananthaa dengan jumlah total pendaftar
    setTimeout(() => {
        AnanthaGanz.sendMessage(ananthaa, { text: `*PENDAFTARAN USER BARU*\n\n> UserId : ${dengan_nol}\n> Email : ${userEmail}\n\nTotal pendaftar: ${totalMembers}`});
    }, 2400);
    
    reply("Oke sip, email kamu udah terverifikasi");
    setTimeout(() => {
    let te = `Hai ${pushname}, Silahkan Setujui Syarat Ketentuan Kami :), Agar Bisa Akses Fitur" Kami\n\n`;
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
                                               
                        
                    ],
                })
            })
        }
    }
}, {});

 AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
}, {quoted: m});
}, 2000);
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
    const filePath = `./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", sndr)}.json`;
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
    const depoFilePath = './SETTING/DB/TRANSACTION/dataDeposit.json';
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
        sett("deposit", "", "");
        sett("desc_prabayar", "", "");
        sett("status", sndr, true);
        sett("desc_prabayar", "", "");
        fs.unlinkSync(filePath);
    }, 3000);
}
break;
case 'topuser': {
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`);
    
    const filePath = './SETTING/DB/dataTrx.json';

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
            if (data.status === "Transaksi Sukses") {
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
    const filePath = './SETTING/DB/TRANSACTION/dataDeposit.json';

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
case 'detail': {    
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
    let code_nya = q.split(" ")[0];
    if (!code_nya) return reply(`*Masukan SKU CODE* Contoh: ${prefix}detail ML5`);
    let data16a = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json'));
    let listProduct16z = "𝗗𝗘𝗧𝗔𝗜𝗟 𝗣𝗥𝗢𝗗𝗨𝗖𝗧\n\n";
    let found = false;
    
    for (let i of data16a) {
        if (i.buyer_sku_code == code_nya) {  
            found = true;
            let stock_display = i.stock === 0 ? "∞" : i.stock;
            let status = i.seller_product_status ? "Ready" : "Sold Out";
            let multiStatus = i.multi ? "Ya" : "Tidak";
            let cutOffTime = `${i.start_cut_off} - ${i.end_cut_off}`;
            listProduct16z += `› 𝗡𝗮𝗺𝗮 𝗣𝗿𝗼𝗱𝘂𝗸 : ${i.product_name}
› 𝗕𝗿𝗮𝗻𝗱𝘀 : ${i.brand}
› 𝗞𝗮𝘁𝗲𝗴𝗼𝗿𝗶 : ${i.category}
› 𝗧𝘆𝗽𝗲 : ${i.type}
› 𝗞𝗼𝗱𝗲 : ${i.buyer_sku_code}
› 𝗛𝗮𝗿𝗴𝗮 : ${formatmoney(i.price)}
› 𝗦𝘁𝗼𝗰𝗸 : ${stock_display}
› 𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝘁𝗮𝘁𝘂𝘀 : ${status}
› 𝗠𝘂𝗹𝘁𝗶 𝗢𝗿𝗱𝗲𝗿 : ${multiStatus}
› 𝗝𝗮𝗺 𝗖𝘂𝘁 𝗢𝗳𝗳 : ${cutOffTime}
› 𝗗𝗲𝘀𝗸𝗿𝗶𝗽𝘀𝗶 : ${i.desc}
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
  case 'delete': {
  if (!isOwner) return reply(mess.owner)
    if (cek("cekVerify", m.sender) == true) return sendVerif();
    if (cek("syarat", m.sender) == true) return sendSyaratAnanthaa();
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`);

    let code_nya = q.split(" ")[0];
    if (!code_nya) return reply(`*Masukan SKU CODE* Contoh: ${prefix}hapus ML5`);

    let data16a = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json'));
    let indexToRemove = data16a.findIndex(i => i.buyer_sku_code == code_nya);

    if (indexToRemove === -1) {
        return reply(`Produk dengan kode ${code_nya} tidak ditemukan.`);
    }

    data16a.splice(indexToRemove, 1); // Menghapus produk dari array
    fs.writeFileSync('./SETTING/DB/dataPrepaid.json', JSON.stringify(data16a, null, 2)); // Menyimpan perubahan ke file

    reply(`Produk dengan kode ${code_nya} berhasil dihapus.`);
}
break;
// Fungsi untuk mengonversi waktu ke WIB
function convertToWIB(time) {
    let [hours] = time.split(":");
    let wibHours = parseInt(hours) - 1; // Kurangi 1 jam untuk konversi ke WIB
    if (wibHours < 0) {
        wibHours += 24;
    }
    let formattedTime = `${wibHours.toString().padStart(2, "0")}:00`;
    return formattedTime;
}
case 'total': {
    if (cek("cekVerify", m.sender) == true) return sendVerif();
    if (cek("syarat", m.sender) == true) return sendSyaratAnanthaa();
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (!isOwner) return m.reply(mess.owner);
    if (m.isGroup) return m.reply(mess.private);

    let code_nya = q.split(" ")[0];
    if (!code_nya) return reply(`*Masukan SKU CODE* Contoh: ${prefix}total ML10`);

    let dataDetail = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json'));
    let dataCek = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json'));

    let detailProduct = dataDetail.find(i => i.buyer_sku_code == code_nya);
    let cekProduct = dataCek.find(i => i.buyer_sku_code == code_nya);

    if (!detailProduct || !cekProduct) {
        return reply(`Produk dengan kode ${code_nya} tidak ditemukan di database.`);
    }

    let detailPrice = detailProduct.price * 1
    let cekPrice = cekProduct.price * 1

    
    let totalProfit = detailProduct.price - cekProduct.price;

    let response = `𝗧𝗢𝗧𝗔𝗟 𝗞𝗘𝗨𝗡𝗧𝗨𝗡𝗚𝗔𝗡 𝗣𝗥𝗢𝗗𝗨𝗞\n\n`;
    response += `> Produk : ${detailProduct.product_name}\n`;
    response += `> Kode : ${code_nya}\n`;
    response += `> Harga Jual : ${formatmoney(detailPrice)}\n`;
    response += `> Harga Modal : ${formatmoney(cekPrice)}\n`;  
    response += `> Keutungan : ${formatmoney(totalProfit)}\n`;

    reply(response);
}
break;


case 'cek': {	
if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
    if (!isOwner) return m.reply(mess.owner);	
    if (m.isGroup) return m.reply(mess.private);	
    let code_buat_cek = q.split(" ")[0];
    if (!code_buat_cek) return reply(`*Masukan SKU CODE*\n*Contoh:* ${prefix}cek ML5`);
    let listProduct16 = "𝗗𝗘𝗧𝗔𝗜𝗟 𝗣𝗥𝗢𝗗𝗨𝗖𝗧\n";
    let found = false;
    
    for (let i of d) {
        let stock_display = i.stock === 0 ? "∞" : i.stock;
        if (i.buyer_sku_code == code_buat_cek) { 
            found = true;
            let multiStatus = i.multi ? "Ya" : "Tidak";
            let sellerProductStatus = i.seller_product_status ? "Ready" : "Sold Out";
            let cutOffStartTime = convertToWita(i.start_cut_off);
            let cutOffEndTime = convertToWita(i.end_cut_off);
            let cutOffTime = `${cutOffStartTime} - ${cutOffEndTime} WITA`;
            listProduct16 += `
› 𝗡𝗮𝗺𝗮 𝗣𝗿𝗼𝗱𝘂𝗸 : ${i.product_name}\n› 𝗕𝗿𝗮𝗻𝗱𝘀 : ${i.brand}\n› 𝗞𝗮𝘁𝗲𝗴𝗼𝗿𝗶 : ${i.category}\n› 𝗧𝘆𝗽𝗲 : ${i.type}\n› 𝗞𝗼𝗱𝗲 : ${i.buyer_sku_code}\n› 𝗛𝗮𝗿𝗴𝗮 : ${formatmoney(i.price)}\n› 𝗦𝘁𝗼𝗰𝗸 : ${stock_display}\n› 𝗠𝘂𝗹𝘁𝗶 : ${multiStatus}\n› *Nama Seller :* ${i.seller_name}\n› 𝗦𝘁𝗮𝘁𝘂𝘀 𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝗲𝗹𝗹𝗲𝗿 : ${sellerProductStatus}\n› 𝗝𝗮𝗺 𝗖𝘂𝘁 𝗢𝗳𝗳 : ${cutOffTime}\n› 𝗗𝗲𝘀𝗸𝗿𝗶𝗽𝘀𝗶 : ${i.desc}\n\n${toko}`;
        }
    };
    
    if (!found) {
        return reply(`Produk dengan kode ${code_buat_cek} tidak ditemukan.`);
    }
    
    reply(`${listProduct16}`);
}
break;

// Fungsi untuk mengonversi waktu ke WITA
function convertToWita(time) {
    let [hours, minutes] = time.split(":");
    let witaHours = parseInt(hours) + 1; // Tambah 1 jam untuk konversi ke WITA
    if (witaHours >= 24) {
        witaHours -= 24;
    }
    let formattedTime = `${witaHours.toString().padStart(2, "0")}:${minutes.padStart(2, "0")}`;
    return formattedTime;
}
case 'nonaktif.':{
    if (cek("cekVerify", m.sender) == true) return sendVerif();
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa();
    if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`);

    const sections = [
        {
            title: `Powered by ${footer}`,
            rows: [
                { header: "Games", title: "Lihat Produk Nonaktif", description: "", id: "Nonaktif Games" },
                { header: "Voucher", title: "Lihat Produk Nonaktif", description: "", id: "Nonaktif Voucher" },
                { header: "Pulsa", title: "Lihat Produk Nonaktif", description: "Matikan fitur Pulsa", id: "Nonaktif Pulsa" },
                { header: "Data", title: "Lihat Produk Nonaktif", description: "", id: "Nonaktif Data" },
                { header: "E-Money", title: "Lihat Produk Nonaktif", description: "", id: "Nonaktif E-Money" }
            ]
        }
    ];

    const menuMember = [
        {
            title: `Powered by ${footer}`,
            rows: [
                { header: "Games", title: "Lihat Produk Nonaktif", description: "", id: "Nonaktif Games" },
                { header: "Voucher", title: "Lihat Produk Nonaktif", description: "", id: "Nonaktif Voucher" },
                { header: "Pulsa", title: "Lihat Produk Nonaktif", description: "Matikan fitur Pulsa", id: "Nonaktif Pulsa" },
                { header: "Data", title: "Lihat Produk Nonaktif", description: "", id: "Nonaktif Data" },
                { header: "E-Money", title: "Lihat Produk Nonaktif", description: "", id: "Nonaktif E-Money" }
            ]
        }
    ];

    const menuOptions = (m.sender === ananthaa) ? sections : menuMember;

    const buttonParamsJson = `{"title": "Pilih Menu", "sections": ${JSON.stringify(menuOptions)}}`;

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {"deviceListMetadata": {}, "deviceListMetadataVersion": 2},
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({text: 'Silakan pilih fitur yang diinginkan:'}),
                    footer: proto.Message.InteractiveMessage.Footer.create({text: 'Untuk Melihat daftar menu :'}),
                    header: proto.Message.InteractiveMessage.Header.create({title: `Halo ${pushname}!`, subtitle: '', hasMediaAttachment: false}),
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

    await AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id}, { quoted: m });
}
break;
case 'nonaktif':{	
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
    let category = q.split(" ")[0];
    if (!category) return reply(`*Masukkan Kategori*\n- Games\n- Pulsa\n- Data\n- PLN\n- Voucher\n\n*Contoh:* ${prefix}nonaktif Games`);
    
    let listProduct = "*BERIKUT DETAIL PRODUK NONAKTIF*\n";
    let found = false;
    
    for (let product of d) {
        if (product.category === category && !product.seller_product_status) {
            found = true;
            listProduct += `> Nama Produk: ${product.product_name}\n`;
            listProduct += `  Kode Produk: ${product.buyer_sku_code}\n`;
            listProduct += `  Status Produk: ${product.seller_product_status ? 'Aktif' : 'Nonaktif'}\n\n`;
        }
    }
    
    if (!found) {
        return reply(`Tidak ada produk nonaktif dalam kategori ${category}.`);
    }
    
    reply(`${listProduct}`);
    break;
}


           
case 'editharga': {
    // Memeriksa apakah pengguna adalah pemilik bot
    if (!isOwner) return reply(mess.owner);
    if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
    if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    // Memisahkan argumen dari pesan
    const args = text.split(' ');

    // Memeriksa apakah jumlah argumen sesuai
    if (args.length !== 2) {
        reply(`Contoh: ${prefix}editharga <buyer_sku_code> <new_price>`);
        return;
    }
    
    // Mendapatkan kode SKU pembeli dan nilai harga baru dari argumen
    const buyerSkuCode = args[0];
    const newPriceInput = args[1]; 
    
    // Mendapatkan data customer_kode dari file JSON
    let jsonData;
    try {
        jsonData = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8'));
    } catch (error) {
        reply("Error reading 'dataPrepaid.json': " + error.message);
        return;
    }
    
    let updated = false;
    let productName = '';
    let oldPrice = 0;
    let newPrice = 0;
    
    // Iterasi untuk mencari customer_kode dengan kode SKU yang sesuai
    for (let product of jsonData) {
        if (product.buyer_sku_code === buyerSkuCode) {
            // Menyimpan nama customer_kode dan harga lama
            productName = product.product_name;
            oldPrice = product.price;
            
            // Menggunakan nilai harga baru yang langsung diinput
            newPrice = parseFloat(newPriceInput);

            // Memperbarui harga customer_kode
            product.price = newPrice;
            updated = true;
            break;
        }
    }
    
    // Menulis kembali data customer_kode ke file JSON jika ada pembaruan
    if (updated) {
        fs.writeFileSync('./SETTING/DB/dataPrepaid.json', JSON.stringify(jsonData, null, 2), 'utf8');
        
        let hargadulu = oldPrice * 1
        let hargabaru = newPrice * 1
        // Memberikan balasan dengan informasi tentang customer_kode yang diperbarui
        reply(`Produk ${productName} berhasil diperbarui.\nHarga awal: ${formatmoney(hargadulu)}\nHarga baru: ${formatmoney(hargabaru)}`);
    } else {
        reply(`Gagal, Produk dengan KODE SKU ${buyerSkuCode} tidak ditemukan`);
    }
    break;
}
    
    
            case 'rekap': {
    if (!isOwner) return reply(mess.owner);
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const filePath = './SETTING/DB/dataTrx.json';

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


case 'info':{
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("waktu", m.sender) == true) return JamBali()
const trxFilePath = './SETTING/DB/dataTrx.json';
    const depFilePath = './SETTING/DB/TRANSACTION/dataDeposit.json';

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
                    {"title": "Lihat Produk Lebih Spesifik", "description": "Informasi detail produk", "id": ".detail"},
                    {"title": "Transfer antar pengguna", "description": "Melakukan Transfer Ke Pengguna ", "id": ".transfer"},
                    {"title": "Leaderboard Pengguna", "description": "Daftar Leader Pengguna ${footer}", "id": ".leaderboard"},
                    {"title": "Lihat Produk Nonaktif", "description": "Melihat Beberapa Produk Nonaktif", "id": ".nonaktif"},
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
    if (cek("cekVerify", m.sender) == true) return sendVerif();
    if (cek("syarat", m.sender) == true) return sendSyaratAnanthaa();
    const filePath = './SETTING/DB/dataTrx.json';
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
        let suksesCount = 0;
        let gagalCount = 0;

        // Ulangi riwayat transaksi pengguna untuk menghitung totalHarga dan jumlah sukses/gagal
        userData.forEach(data => {
            totalHarga += parseFloat(data.harga);

            if (data.status === "Transaksi Sukses") {
                suksesCount++;
            } else {
                gagalCount++;
            }
        });

        // Ulangi riwayat transaksi pengguna untuk membuat historyText
        const historyText = userData.map((data, index) => {
            let totale = data.harga * 1;

            // Tentukan status berdasarkan data.status
            let status;
            if (data.status === "Transaksi Sukses") {
                status = "Succes";
            } else if (data.status === "Saldo tidak cukup" || data.status === "Transaksi Gagal") {
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
        // Cantumkan total harga dan total transaksi di reply
        const replyMessage = `
*Riwayat Transaksi Kamu* 

Total Trx Succes : ${suksesCount}
Total Trx Failed : ${gagalCount}
Total Harga Trx : ${formatmoney(totalw)}

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
    const filePath = './SETTING/DB/TRANSACTION/dataDeposit.json';
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
    const filePath = './SETTING/DB/dataTrx.json';
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
        './SETTING/DB/dataPrepaid.json',
        './SETTING/DB/AdminPrepaid.json',
        './SETTING/DB/dataPostpaid.json'
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
/* DIGIFLAZZ & LIST PRODUK */
case 'order': {
    if (cek("verfiyemail", m.sender) == true) 
        return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("status", m.sender) == false) 
        return AnanthaGalau()
    let foty = '`'
let order_contoh = `  *TIPS ORDER :*  \n\n*${foty}${prefix}order <sku_kode> <tujuan/id/zone>${foty}*\n\n> *Contoh : ${prefix}order MLWDP 137411756215661*\n\n*NOTE :*\nPerlu Diingat!! Silahkan Cek Dulu *Nomor Tujuan* kamu pastiin udh bener ya
    `;
    
    let create_reff = koderef;
    let TimePesanan = `${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}`;
    let customer_kode = text.split(" ")[0];
    let customer_no = text.split(" ")[1];
    
    if (!customer_kode) return reply(order_contoh);
    if (!customer_no) return reply(order_contoh);

    let hargaProduk = 0;
    const MINIMAL_PEMBELIAN = 5000;
    const MAXIMAL_PEMBELIAN = 1000000;
    let potongan = 0;

    for (let i of r) {
        if (i.buyer_sku_code == customer_kode) {
            let pricee = i.price * 1;
            let nama_produkk = i.product_name;
            let product_buyer = i.buyer_product_status;
            let product_seller = i.seller_product_status;
            let descc = i.desc;

                if (pricee >= MINIMAL_PEMBELIAN && pricee <= MAXIMAL_PEMBELIAN) {
                    if (cek("level", m.sender) == "Collector Z") {
                        let diskonPersen = global.Diskon; // Diskon untuk pengguna level tertentu
                        potongan = pricee * diskonPersen;
                        pricee -= potongan;
                    }
                }

                hargaProduk = Math.round(pricee);

                sett("price", m.sender, hargaProduk);
                sett("product_name", m.sender, nama_produkk);
                sett("status", m.sender, false);
                sett("tujuan", m.sender, customer_no);
                sett("buyer_sku_code", m.sender, customer_kode);
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

var config = {
  method: 'POST',
  url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',
  data: new URLSearchParams(Object.entries({
    api_key: global.AnanthaCEK,
    action: 'token-pln',
    no_id: customer_no,
  })),
};

axios(config)
  .then(function (response) {
    let invoice;

    if (response.data.status == true) {
      console.log(response.data);
      if (response.data.data.code == "404" || response.data.data.code == "422") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;

      } else if (response.data.data.code == "200") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.name}
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
      }

    } else if (response.data.status == false) {
      invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
    }

    // Check if invoice is defined before sending
    if (invoice) {
      if (cek("product_name", m.sender) == "") {
        return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
      }
      sendMessage(invoice);
    }
  })
  .catch(function (error) {
    console.log(error);
    // Handle errors if needed
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

var config = {
  method: 'POST',
  url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',
  data: new URLSearchParams(Object.entries({
    api_key: global.AnanthaCEK,
    action: 'mobile-legends',
    no_id: customer_no,
  })),
};

axios(config)
  .then(function (response) {
    let invoice;

    if (response.data.status == true) {
      console.log(response.data);
      if (response.data.data.code == "404" || response.data.data.code == "422") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;

      } else if (response.data.data.code == "200") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.name}
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
      }

    } else if (response.data.status == false) {
      invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
    }

    // Check if invoice is defined before sending
    if (invoice) {
      if (cek("product_name", m.sender) == "") {
        return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
      }
      sendMessage(invoice);
    }
  })
  .catch(function (error) {
    console.log(error);
    // Handle errors if needed
  });
} else if (customer_kode.startsWith('F')) {
let axios = require('axios');

var config = {
  method: 'POST',
  url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',
  data: new URLSearchParams(Object.entries({
    api_key: global.AnanthaCEK,
    action: 'free-fire',
    no_id: customer_no,
  })),
};

axios(config)
  .then(function (response) {
    let invoice;

    if (response.data.status == true) {
      console.log(response.data);
      if (response.data.data.code == "404" || response.data.data.code == "422") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;

      } else if (response.data.data.code == "200") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.name}
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
      }

    } else if (response.data.status == false) {
      invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
    }

    // Check if invoice is defined before sending
    if (invoice) {
      if (cek("product_name", m.sender) == "") {
        return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
      }
      sendMessage(invoice);
    }
  })
  .catch(function (error) {
    console.log(error);
    // Handle errors if needed
  });
} else if (/^(DN|D)/.test(customer_kode)) {
let axios = require('axios');

var config = {
  method: 'POST',
  url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',
  data: new URLSearchParams(Object.entries({
    api_key: global.AnanthaCEK,
    action: 'dana',
    no_id: customer_no,
  })),
};

axios(config)
  .then(function (response) {
    let invoice;

    if (response.data.status == true) {
      console.log(response.data);
      if (response.data.data.code == "404" || response.data.data.code == "422") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;

      } else if (response.data.data.code == "200") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.name}
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
      }

    } else if (response.data.status == false) {
      invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
    }

    // Check if invoice is defined before sending
    if (invoice) {
      if (cek("product_name", m.sender) == "") {
        return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
      }
      sendMessage(invoice);
    }
  })
  .catch(function (error) {
    console.log(error);
    // Handle errors if needed
  });
  } else if (customer_kode.startsWith('SPY')) {
let axios = require('axios');

var config = {
  method: 'POST',
  url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',
  data: new URLSearchParams(Object.entries({
    api_key: global.AnanthaCEK,
    action: 'shopeepay',
    no_id: customer_no,
  })),
};

axios(config)
  .then(function (response) {
    let invoice;

    if (response.data.status == true) {
      console.log(response.data);
      if (response.data.data.code == "404" || response.data.data.code == "422") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;

      } else if (response.data.data.code == "200") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.name}
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
      }

    } else if (response.data.status == false) {
      invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
    }

    // Check if invoice is defined before sending
    if (invoice) {
      if (cek("product_name", m.sender) == "") {
        return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
      }
      sendMessage(invoice);
    }
  })
  .catch(function (error) {
    console.log(error);
    // Handle errors if needed
  });
} else if (/^(OVB|OV)/.test(customer_kode)) {
let axios = require('axios');

var config = {
  method: 'POST',
  url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',
  data: new URLSearchParams(Object.entries({
    api_key: global.AnanthaCEK,
    action: 'ovo',
    no_id: customer_no,
  })),
};

axios(config)
  .then(function (response) {
    let invoice;

    if (response.data.status == true) {
      console.log(response.data);
      if (response.data.data.code == "404" || response.data.data.code == "422") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;

      } else if (response.data.data.code == "200") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.name}
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
      }

    } else if (response.data.status == false) {
      invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
    }

    // Check if invoice is defined before sending
    if (invoice) {
      if (cek("product_name", m.sender) == "") {
        return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
      }
      sendMessage(invoice);
    }
  })
  .catch(function (error) {
    console.log(error);
    // Handle errors if needed
  });
} else if (customer_kode.startsWith('GP')) {
let axios = require('axios');

var config = {
  method: 'POST',
  url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',
  data: new URLSearchParams(Object.entries({
    api_key: global.AnanthaCEK,
    action: 'gopay',
    no_id: customer_no,
  })),
};

axios(config)
  .then(function (response) {
    let invoice;

    if (response.data.status == true) {
      console.log(response.data);
      if (response.data.data.code == "404" || response.data.data.code == "422") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;

      } else if (response.data.data.code == "200") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.name}
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
      }

    } else if (response.data.status == false) {
      invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
    }

    // Check if invoice is defined before sending
    if (invoice) {
      if (cek("product_name", m.sender) == "") {
        return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
      }
      sendMessage(invoice);
    }
  })
  .catch(function (error) {
    console.log(error);
    // Handle errors if needed
  });
  } else if (customer_kode.startsWith('LINK')) {
let axios = require('axios');

var config = {
  method: 'POST',
  url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',
  data: new URLSearchParams(Object.entries({
    api_key: global.AnanthaCEK,
    action: 'linkaja',
    no_id: customer_no,
  })),
};

axios(config)
  .then(function (response) {
    let invoice;

    if (response.data.status == true) {
      console.log(response.data);
      if (response.data.data.code == "404" || response.data.data.code == "422") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;

      } else if (response.data.data.code == "200") {
        invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : ${response.data.data.name}
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
      }

    } else if (response.data.status == false) {
      invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> ID Trx : ${cek("reff", m.sender)}
> Layanan : ${cek("product_name", m.sender)}  
> Tujuan : ${cek("tujuan", m.sender)}
> NickName : tidak ditemukan 
> Note : ${cek("desc_prabayar", m.sender)}
> Harga : ${formatmoney(jumlahHarga)}
> Diskon : ${formatmoney(potonganHarga)}
> Total : ${formatmoney(totalPembayaran)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
    }

    // Check if invoice is defined before sending
    if (invoice) {
      if (cek("product_name", m.sender) == "") {
        return reply(`Oops, Kode *${customer_kode}* tidak ditemukan, coba cek lagi :)`);
      }
      sendMessage(invoice);
    }
  })
  .catch(function (error) {
    console.log(error);
    // Handle errors if needed
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
case 'metodepembayaran': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()

const sections = [
        {
            title: `Secure Payment by ${footer}`,
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `QRIS`, description: "Pembayaran Melalui QRIS", id: ".qrispay" }
            ]
        },
                {
 
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `E - Wallet`, description: "Pembayaran Melalui E - Wallet", id: ".ewalletpay" }
            ]
        },
                {
        
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account`, description: "Pembayaran Melalui Virtual Account", id: ".virtualaccountpay" }
            ]
        },
                {
      
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Convenience Store`, description: "Pembayaran Melalui Gerai Retail", id: ".retailpay" }
            ]
        },
                {
   
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Pulsa`, description: "Pembayaran Melalui Convert Pulsa", id: ".pulsapay" }
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
                        text: `Pilih dulu yuk metode pembayaran untuk invoice ini : ${cek("product_name", m.sender)}/${formatmoney(cek("price", m.sender))}/ ref ${cek("reff", m.sender)}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Payment Channel :'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
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
case 'virtualaccountpay': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    
    const sections = [
        {
            title: `Secure Payment by ${footer}`,
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account Bank Mandiri`, description: "Pembayaran Melalui VA MANDIRI", id: ".mandiripay" }
            ]
        },
                {
 
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account Bank BNI`, description: "Pembayaran Melalui VA BNI", id: ".bnipay" }
            ]
        },
                {
        
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account Bank BCA`, description: "Pembayaran Melalui VA BCA", id: ".bcapay" }
            ]
        },
                {
      
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account Bank BRI`, description: "Pembayaran Melalui VA BRI", id: ".bripay" }
            ]
        },
                {
   
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account Bank BSI`, description: "Pembayaran Melalui VA BSI", id: ".bsipay" }
            ]
        },
          {
          
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account Bank Neo Commerce`, description: "Pembayaran Melalui VA BNC", id: ".bncpay" }
            ]
        },
        {
          
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account Bank CIMB NIAGA`, description: "Pembayaran Melalui VA CIMB", id: ".cimbpay" }
            ]
        },
        {
          
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account Bank Permata`, description: "Pembayaran Melalui VA PERMATA", id: ".permatapay" }
            ]
        },
        {
          
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account Bank Danamon`, description: "Pembayaran Melalui VA DANAMON", id: ".danamonpay" }
            ]
        },
                {
          
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account Bank MayBank`, description: "Pembayaran Melalui VA MAYBANK", id: ".maybankpay" }
            ]
        },
                        {
          
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account Bank Muamalat`, description: "Pembayaran Melalui VA MUAMALAT", id: ".muamalatpay" }
            ]
        },
        {
          
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Virtual Account Bank OCBC`, description: "Pembayaran Melalui VA OCBC", id: ".ocbcpay" }
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
                        text: `Pilih dulu yuk metode pembayaran untuk invoice ini : ${cek("product_name", m.sender)}/${formatmoney(cek("price", m.sender))}/ ref ${cek("reff", m.sender)}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Payment Channel :'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
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
case 'ewalletpay': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const sections = [
        {
            title: `Secure Payment by ${footer}`,
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `DANA`, description: "Pembayaran Melalui DANA", id: ".danapay" }
            ]
        },
                {
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `LinkAja Apps`, description: "Pembayaran Melalui LinkAja", id: ".linkajapay" }
            ]
        },
                             {
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `GoPay`, description: "Pembayaran Melalui GoPay", id: ".gopaypay" }
            ]
        },
                        {
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `OVO`, description: "Pembayaran Melalui Ovo", id: ".ovopay" }
            ]
        },
                        {
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `ShopeePay`, description: "Pembayaran Melalui Shopeepay", id: ".shopeepaypay" }
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
                        text: `Pilih dulu yuk metode pembayaran untuk invoice ini : ${cek("product_name", m.sender)}/${formatmoney(cek("price", m.sender))}/ ref ${cek("reff", m.sender)}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Payment Channel :'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
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
case 'pulsapay': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const sections = [
        {
            title: `Powered by ${footer}`,
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Telkomsel`, description: "Pembayaran Melalui Pulsa Telkomsel", id: ".telkomselpay" }
            ]
        },
                {
            title: `Powered by ${footer}`,
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `XL`, description: "Pembayaran Melalui Pulsa XL", id: ".xlpay" }
            ]
        },
                {
            title: `Powered by ${footer}`,
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `AXIS`, description: "Pembayaran Melalui Pulsa AXIS", id: ".axispay" }
            ]
        },
                {
            title: `Powered by ${footer}`,
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Three`, description: "Pembayaran Melalui Pulsa Three", id: ".threepay" }
            ]
        },
        {
            title: `Powered by ${footer}`,
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `Smartfren`, description: "Pembayaran Melalui Pulsa Smartfren", id: ".smartfrenpay" }
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
                        text: `Pilih dulu yuk metode pembayaran untuk invoice ini : ${cek("product_name", m.sender)}/${formatmoney(cek("price", m.sender))}/ ref ${cek("reff", m.sender)}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Payment Channel :'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
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
case 'retailpay': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()

       const sections = [
        {
            title: `Powered by ${footer}`,
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `INDOMARET`, description: "Pembayaran Melalui Gerai Indomaret", id: ".Indomaretpay" }
            ]
        },
        {
            title: `Powered by ${footer}`,
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `ALFAMART`, description: "Pembayaran Melalui Gerai Alfamart", id: ".alfamartpay" }
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
                        text: `Pilih dulu yuk metode pembayaran untuk invoice ini : ${cek("product_name", m.sender)}/${formatmoney(cek("price", m.sender))}/ ref ${cek("reff", m.sender)}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Payment Channel :'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
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
    if (!fs.existsSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`)) {
        return reply(`Waduh, kayaknya gak ada invoice yang lagi berlangsung nih.`);
    } else {
    m.reply(`Yaudah, invoice ${cek("deposit", m.sender)} udah dibatalin kok`);
    setTimeout(() => {
cancelPay();
}, 1050);
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
case 'batalsmm': {
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`)
    if (cek("smm_status", m.sender) === true) {
        return reply(`Oops! Sepertinya kamu belum memiliki pesanan. Ayo, buat pesanan sekarang!`);
    } else {
        setTimeout(() => {
             sett("smm_harga", m.sender, "");
                sett("smm_name", m.sender, "");
                sett("smm_status", m.sender, true);
                sett("smm_no", m.sender, "");
                sett("smm_code", m.sender, "");
                sett("smm_quantity", m.sender, "");
        }, 1200);
        let batal = `Sip, Berhasil membatalkan`;
        m.reply(batal);
        
    }
    break;
}
case 'bebasnominal':
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail indcash33@gmail.com`)
  if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
    if(cek("status", m.sender) == false) return AnanthaGalau()
    var axios = require('axios')
    const [sku_wallet, no_wallet, jumlah_wallet] = q.split("|");
    const minimal = 10000;
    const max = 500000;
    const potongan = 50;

    if (!sku_wallet || !no_wallet || !jumlah_wallet) {
        return reply(`*E-MONEY BEBAS NOMINAL*

Silakan gunakan dengan format :
*.bebasnominal sku_kode|no_wallet|nominal*

Contoh :
*.bebasnominal DNA20|081236167286|20000*`);
    }

    const jumlah_payment = parseInt(jumlah_wallet);
    if (isNaN(jumlah_payment)) {
        return reply("Jumlah payment tidak valid.");
    }
    if (jumlah_payment < minimal) {
        return m.reply(`Jumlah minimal E-Wallet Bebas Nominal adalah ${formatmoney(minimal)}.`);
    }
    if (jumlah_payment > max) {
        return m.reply(`Jumlah maksimal E-Wallet Bebas Nominal adalah ${formatmoney(max)}.`);
    }

    const ref_wallet = koderef;
    let layanan_wallet = "";

    for (let i of JSON.parse(fs.readFileSync('./SETTING/DB/dataPostpaid.json'))) {
        if (i.buyer_sku_code == sku_wallet) {
            layanan_wallet = i.product_name;
            sett("desc", m.sender, layanan_wallet);
            break;
        }
    }

    const signature = crypto.createHash('md5')
        .update(global.UsernameDF + global.APIkeyDF + ref_wallet)
        .digest('hex');

    var config = {
        method: 'POST',
        url: 'https://api.digiflazz.com/v1/transaction',
        data: {
            "commands": "inq-pasca",
            "username": String(global.UsernameDF),
            "buyer_sku_code": sku_wallet,
            "customer_no": no_wallet,
            "ref_id": ref_wallet,
            "amount": jumlah_payment,
            "sign": signature
        }
    };

    axios(config)
        .then(async response => {
            const uangg = response.data.data.selling_price !== undefined ? response.data.data.selling_price * 1 : 0;
            const admint = uangg - jumlah_payment * 1;
            const potonganAmount = potongan * 1;
            const totalHarga = uangg - potonganAmount;

            let bankCode;
            if (sku_wallet.startsWith('DNB')) bankCode = 'dana-ewallet';
            else if (sku_wallet.startsWith('OVB')) bankCode = 'ovo-ewallet';
            else if (sku_wallet.startsWith('GPB')) bankCode = 'gopay-ewallet';
            else if (sku_wallet.startsWith('SPB')) bankCode = 'shopee-pay-ewallet';
            else if (sku_wallet.startsWith('LNB'))
  bankCode = 'link';

            if (bankCode) {
                const apiUrl = `https://${global.APIcek}/api/${bankCode}/?target=${no_wallet}&api_key=${global.AnanthaCEK}`;
                var config = { headers: { 'Content-Type': 'application/json' } };

                axios.get(apiUrl, config)
                    .then(async res => {
                        const responseData = res.data;
                        const accountname = responseData.data ? responseData.data.nickname : "tidak ditemukan";
let titikg = '`'
                        let invoice = `*RINCIAN PEMESANAN*

${titikg}Status :${titikg} Menunggu Konfirmasi 
${titikg}ID Trx :${titikg} ${ref_wallet}
${titikg}Layanan :${titikg} ${layanan_wallet}  
${titikg}Tujuan :${titikg} ${no_wallet}
${titikg}NickName :${titikg} ${accountname}
${titikg}Note :${titikg} Topup Bebas Nominal
${titikg}Harga :${titikg} ${formatmoney(jumlah_payment)}
${titikg}Admin :${titikg} ${formatmoney(admint)}
${titikg}Diskon :${titikg} ${formatmoney(potonganAmount)}
${titikg}Total :${titikg} ${formatmoney(totalHarga)}
${titikg}Waktu :${titikg} ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Apakah data pesanan kamu sudah benar?`;
                        let buyyer_saldo = cek("saldo", m.sender) * 1;
                        let buttonBebas = [
        {
            title: ``,
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `tpcash`, description: `${formatmoney(buyyer_saldo)}`, id: ".paybebasnominal" }
            ]
        },
        {
            highlight_label: "",
            rows: [
                { header: "", title: "Membatalkan Transaksi", description: "", id: ". batal" }
            ]
        }
    ];

const buttonParamsJson = `{
        "title": "CLICK HERE",
        "sections": ${JSON.stringify(buttonBebas)}
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
                        setTimeout(() => {
                            sett("price", m.sender, `${totalHarga}`)
                            sett("product_name", m.sender, `${jumlah_payment}`)
                            sett("status", m.sender, false)
                            sett("tujuan", m.sender, `${no_wallet}`)
                            sett("buyer_sku_code", m.sender, `${sku_wallet}`)
                            sett("desc", m.sender, `${layanan_wallet}`)
                            sett("tanggal_deposit", m.sender, `${jumlah_payment}`)
                            sett("reff", m.sender, `${ref_wallet}`)
                            
                        }, 3000);
                    })
        .catch(error => {
    console.error(error.response.data);
    if(error.response.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if ( error.response.data.code = "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
    }
  });
  }
        })
        .catch(error => {
            if (error.response && error.response.data.data.message == "SKU tidak di temukan atau Non-Aktif") {
                setTimeout(() => {
                    AnanthaGanz.sendMessage(from, { text: `Gagal, periksa SKU KODE, pastikan sudah sesuai.` })
                }, 2000);
            }
        });
break;
case 'paybebasnominal': {
    if (cek("cekVerify", m.sender) == true) return sendVerif();
    if (cek("syarat", m.sender) == true) return sendSyaratAnanthaa();
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`);

    const crypto = require("crypto");
    const axios = require("axios");
    const fs = require('fs');
    const moment = require('moment-timezone');
    const ru = sender.split('@')[0];
    const total_wallet = cek("price", m.sender) * 1;

    if (cek("status", m.sender) == true) return reply(`Oops, Kamu tidak memiliki status pesanan :)`)
    if (total_wallet > cek("saldo", m.sender)) return reply(`Gagal, saldo kamu tidak cukup untuk proses pesanan.`);

    sett("-saldo", `${ru}@s.whatsapp.net`, total_wallet);

    const ref_pasca = cek("reff", m.sender);
    const signature = crypto.createHash('md5')
        .update(global.UsernameDF + global.APIkeyDF + ref_pasca)
        .digest('hex');

    const config = {
        method: 'POST',
        url: 'https://api.digiflazz.com/v1/transaction',
        data: {
            "commands": "pay-pasca",
            "username": global.UsernameDF,
            "buyer_sku_code": cek("buyer_sku_code", m.sender),
            "customer_no": cek("tujuan", m.sender),
            "ref_id": ref_pasca,
            "amount": total_wallet,
            "sign": signature
        }
    };

    axios(config)
        .then(async res => {
            await loading();
            if (res.data.data.status == "Gagal") {
                AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, {
                    text: `Gagal, ${res.data.data.message}`
                });
                AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, { text: `*KESALAHAN SISTEM*

> Layanan : ${cek("desc", m.sender)}
> Message : ${res.data.data.message}
> Customer : ${ru}` }, { quoted: m });
            } else if (res.data.data.status == "Sukses") {
                setTimeout(() => {
                    let donePbebas = `*RINCIAN PEMESANAN*

> Status : Success
> ID Trx : ${res.data.data.ref_id}
> Layanan : ${cek("desc", m.sender)}
> Tujuan : ${cek("tujuan", m.sender)}
> Harga : ${formatmoney(total_wallet)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}
> SN/Token : ${res.data.data.sn}

Oke Sip, pesanan kamu udah berhasil! Makasih udah belanja di *${footer}*`;

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
                                        title: donePbebas,
                                        subtitle: '',
                                        hasMediaAttachment: false
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                        buttons: [
                                            {
                                                "name": "quick_reply",
                                                "buttonParamsJson": `{"display_text":"Cetak Struk","id":".print ${res.data.data.ref_id}"}`
                                            },
                                            {
                                                "name": "quick_reply",
                                                "buttonParamsJson": `{"display_text":"Order lagi","id":".bebasnominal ${cek("buyer_sku_code", m.sender)}|${cek("tujuan", m.sender)}|${cek("tanggal_deposit", m.sender)}"}`
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

                    AnanthaGanz.relayMessage(cek("id", m.sender), msg.message, {
                        messageId: msg.key.id
                    }, { quoted: m });

                    let totalPendapatan = total_wallet - res.data.data.price * 1;
                    let lastSaldo = res.data.data.buyer_last_saldo * 1;
                    let digiSaldo = `${formatmoney(lastSaldo)}`;

                    AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, {
                        text: `*LAPORAN PENDAPATAN*

> Customer : ${ru}
> Layanan : ${cek("desc", m.sender)}
> Tujuan : ${cek("tujuan", m.sender)}
> ID Trx : ${res.data.data.ref_id}
> Harga Pokok : ${formatmoney(total_wallet)}
> Harga Modal : ${formatmoney(res.data.data.price)}
> Total Komisi : ${formatmoney(totalPendapatan)}
> Saldo Akhir Vendor : ${digiSaldo}
> Tanggal Penjualan : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz('Asia/Makassar').format('DD/MM/YY')}`
                    }, { quoted: m });

                    let fileRekap = JSON.stringify(res.data.data);
                    fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Prabayar/Sukses/${ref_pasca}.json`, fileRekap);

                    const trxFilePath = './SETTING/DB/dataTrx.json';
                    const trxUserData = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
                    const newTransaction = {
                        buyer: m.sender,
                        status: res.data.data.status,
                        no_pembayaran: `${koderefe}`,
                        ref_id: res.data.data.ref_id,
                        jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
                        waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
                        produk: `${cek("desc", m.sender)}`,
                        harga: total_wallet,
                        harga_modal: res.data.data.price,
                        tujuan: `${cek("tujuan", m.sender)}`,
                        invoice: res.data.data.sn
                    };

                    trxUserData.push(newTransaction);
                    fs.writeFileSync(trxFilePath, JSON.stringify(trxUserData, null, 2), 'utf8');
                }, 3000);
            }
        })
        .catch(error => {
            if (error.response) {
                sett("+saldo", `${ru}@s.whatsapp.net`, total_wallet);
                AnanthaGanz.sendMessage(`${ru}@s.whatsapp.net`, {
                    text: `Gagal, ${String(error.response.data.data.message)}`
                });
            }
        });

    setTimeout(() => {
        sett("product_name", m.sender, "");
        sett("price", m.sender, 0);
        sett("tujuan", m.sender, "");
        sett("desc", m.sender, "");
        sett("tanggal_deposit", m.sender, "");
        sett("reff", m.sender, "");
        sett("buyer_sku_code", m.sender, "");
        sett("status", m.sender, true);
    }, 12000);
}
break;
case 'tpcash': {
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if (cek("status", m.sender) == true) return reply(`Oops, Kamu tidak memiliki status pesanan :)`)
let axios = require('axios');
let md5 = require('md5');
let kode_buyer = `${cek("buyer_sku_code", m.sender)}` 
for(let i of r){     
if(i.buyer_sku_code == kode_buyer){ 
if (i.price > cek("saldo", m.sender)) return MinesAnanthaa()
let tujuan = `${cek("tujuan", m.sender)}` 
let harga = Math.round(`${cek("price", m.sender)}` * 1);
sett("-saldo", m.sender, harga);
let referdf = `${cek("reff", m.sender)}` 
let product_name = `${cek("product_name", m.sender)}`
let user_no = `${tujuan}`
let harga_produk = `${harga}`
let kode_produk = `${kode_buyer}`
const trxFilePath = './SETTING/DB/dataTrx.json';
const signature = crypto.createHash('md5')
.update(global.UsernameDF + global.APIkeyDF + referdf)
.digest('hex');

var config = {
    method: 'POST',
    url: `https://${global.digiFlazz}/v1/transaction`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    data: JSON.stringify({
        "username": global.UsernameDF,
        "buyer_sku_code": kode_buyer,
        "customer_no": user_no,
        "ref_id": referdf,
        "sign": signature
    })
};

  const parsedHarga = parseFloat(harga);  
axios(config)
.then(async res => {
AnanthaGanz.sendMessage(cek("id", m.sender), {text:`*RINCIAN PEMESANAN*

> Status : Process
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Weett, pesanan kamu sedang dalam proses`}, {Quoted: m})
let status = res.data.data.status;  
    console.log(status)        
while (status !== 'Sukses') {
await sleep(1000); 
const response = await axios(config);
status = response.data.data.status; 
if (status == "Gagal") {
sett("+saldo", cek("id", m.sender), harga) 
let DFgagal = `*RINCIAN PESANAN*

> Status : Failed
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

yahh, pesanan kamu udah nggak bisa diproses. Mau Coba Lagi?`
sendGagalDF(DFgagal);
let pesany = response.data.data.message
    let GagalTr = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const NewGagal = {
            buyer: m.sender,
            status: pesany,
            no_pembayaran: `${koderefe}`,
            ref_id: referdf,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: product_name,
            harga: "0",
            harga_modal: "0",
            tujuan: user_no,
            invoice: "Oops, Transaksi ini sudah dibatalkan oleh sistem",
        };
            GagalTr.push(NewGagal);
    fs.writeFileSync(trxFilePath, JSON.stringify(GagalTr, null, 2), 'utf8');
setTimeout(() => {
sendEmailTrxCancel(sender, pushname, referdf, product_name, user_no, parsedHarga, pesany);
}, 500);
AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, {text:`*KESALAHAN SISTEM*

> Layanan : ${product_name} 
> Message : ${response.data.data.message} 
> Customer : ${dengan_nol}`}, {Quoted: m})
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
if (status === "Sukses") {
setTimeout(() => { 
    let suksesp = `*RINCIAN PEMESANAN*

> Status : Success
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}
> SN/Token : ${response.data.data.sn}

Oke Sip, pesanan kamu udah berhasil! Makasih udah belanja di *${footer}*`
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
                        title: suksesp,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Cetak Struk","id":".print ${referdf}"}` 
                        },
                                               {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Order lagi","id":".order ${cek("buyer_sku_code", m.sender)} ${cek("tujuan", m.sender)}"}` 
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

     AnanthaGanz.relayMessage(cek("id", m.sender), msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    }, 1000);
let snket = response.data.data.sn
setTimeout(() => {
sendEmailTrxSuks(sender, pushname, snket, referdf, product_name, user_no, parsedHarga);
}, 500);
const productDetails = d.find(i => i.buyer_sku_code === kode_produk);
let fileRekap = JSON.stringify(response.data.data);
      fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Prabayar/Sukses/${referdf}.json`, fileRekap);
if (productDetails) {
    const productInfo = `
Nama: ${productDetails.product_name}\nHarga: ${formatmoney(productDetails.price)}
`;
}
    const hargaModal = productDetails ? productDetails.price : null;
    const parsedModal = parseFloat(hargaModal);
    let lastSaldo = response.data.data.buyer_last_saldo * 1
    let digiSaldo = `${formatmoney(lastSaldo)}` 
    let totalPendapatan = parsedHarga - hargaModal * 1
    let tele = response.data.data.tele.replace(/@/g, '');  // This will remove all "@" characters
    let wa = response.data.data.wa.replace(/^0/, '62');  // This will replace the leading "0" with "62"
    setTimeout(() => {
    let SnKr = `*LAPORAN PENDAPATAN*

> Customer : ${dengan_nol}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> ID Trx : ${referdf}
> Harga Pokok : ${formatmoney(parsedHarga)}
> Harga Modal : ${formatmoney(hargaModal)}
> Total Komisi : ${formatmoney(totalPendapatan)}
> Saldo Akhir Vendor : ${digiSaldo}
> Tanggal Penjualan : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}`
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
                        title: SnKr,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                       {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Web Digiflazz",
                                "url": "https://member.digiflazz.com/buyer-area",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                                               {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Telegram Seller",
                                "url": "https://t.me/${tele}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "WhatsApp Seller",
                                "url": "https://wa.me/${wa}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                    })
                })
            }
        }
    }, {});

     AnanthaGanz.relayMessage(ananthaa, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    }, 2000);
   const trxFilePath = './SETTING/DB/dataTrx.json';
    const trxUserData = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const newTransaction = {
            buyer: m.sender,
            status: response.data.data.message,
            no_pembayaran: `${koderefe}`,
            ref_id: response.data.data.ref_id,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: product_name,
            harga: parsedHarga,
            harga_modal: parsedModal,
            tujuan: user_no,
            invoice: response.data.data.sn,
        };
            trxUserData.push(newTransaction);
    fs.writeFileSync(trxFilePath, JSON.stringify(trxUserData, null, 2), 'utf8');
    setTimeout(() => {
sett("product_name", m.sender, "")
sett("price", m.sender, 0)
sett("tujuan", m.sender, "")  
sett("desc_prabayar", m.sender, "")  
sett("reff", m.sender, "") 
sett("buyer_sku_code", m.sender, "")  
sett("status", m.sender, true)
}, 1500);
}
          }})
          .catch(error => {
            if (error.response) {   
   sett("+saldo", cek("id", m.sender), harga) 
   console.error(error.response.data.data);
   let rekapGagal = JSON.stringify(error.response.data.data);
      fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Prabayar/Gagal/${koderefe}.json`, rekapGagal);
      let DFgagal = `*RINCIAN PESANAN*

> Status : Failed
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

yahh, pesanan kamu udah nggak bisa diproses. Mau Coba Lagi?`
sendGagalDF(DFgagal);
let pesanyu = error.response.data.data.message
  let GagalTru = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const NewGagalr = {
            buyer: m.sender,
            buyer: m.sender,
            status: pesanyu,
            no_pembayaran: `${koderefe}`,
            ref_id: referdf,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: product_name,
            harga: "0",
            harga_modal: "0",
            tujuan: user_no,
            invoice: "Oops, Transaksi ini sudah dibatalkan oleh sistem",
        };
            GagalTru.push(NewGagalr);
    fs.writeFileSync(trxFilePath, JSON.stringify(GagalTru, null, 2), 'utf8');
setTimeout(() => {
sendEmailTrxCancele(sender, pushname, referdf, product_name, user_no, parsedHarga, pesanyu);
}, 500);
              AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, {text:`*KESALAHAN SISTEM*

> Layanan : ${product_name} 
> Message : ${error.response.data.data.message} 
> Customer : ${dengan_nol}`}, {Quoted: m})
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
   });
} }
break;
}
case 'bnipay':
case 'ocbcpay':
case 'bripay':
case 'cimbpay':
case 'mandiripay': 
case 'bncpay':
case 'bsipay':
case 'maybankpay':
case 'muamalatpay':
case 'danamonpay':
case 'permatapay':
case 'bcapay':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("status", m.sender) == true) return reply(`Oops, kamu belum memiliki invoice! buat dulu yukk`);
    if(fs.existsSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`)) return AnanthaGalauV() 
let user_payment_mount = `${cek("price", m.sender)}` * 1;
let hargac = Math.round(user_payment_mount);
if (command === 'bcapay') {
if (hargac < 10000) return m.reply(`Minimun Payment *Virtual Account BCA* adalah Rp. 10.000`)
  if (hargac > 20000000) return m.reply(`Maximal Payment *Virtual Account BCA* adalah Rp. 20.000.000`);
    metode = '1'; 
} else if (command === 'mandiripay') {
if (hargac < 10000) return m.reply(`Minimun Payment *Virtual Account Mandiri* adalah Rp. 10.000`)
  if (hargac > 20000000) return m.reply(`Maximal Payment *Virtual Account Mandiri* adalah Rp. 20.000.000`);
    metode = '5'; 
    } else if (command === 'bripay') {
if (hargac < 10000) return m.reply(`Minimun Payment *Virtual Account BRI* adalah Rp. 10.000`)
  if (hargac > 20000000) return m.reply(`Maximal Payment *Virtual Account BRI* adalah Rp. 20.000.000`);
    metode = '2'; 
    } else if (command === 'ocbcpay') {
if (hargac < 10000) return m.reply(`Minimun Payment *Virtual Account OCBC* adalah Rp. 10.000`)
  if (hargac > 20000000) return m.reply(`Maximal Payment *Virtual Account OCBC* adalah Rp. 20.000.000`);
    metode = '21'; 
    } else if (command === 'muamalatpay') {
if (hargac < 10000) return m.reply(`Minimun Payment *Virtual Account Muamalat* adalah Rp. 10.000`)
  if (hargac > 20000000) return m.reply(`Maximal Payment *Virtual Account Muamalat* adalah Rp. 20.000.000`);
    metode = '22'; 
    } else if (command === 'bnipay') {
if (hargac < 10000) return m.reply(`Minimun Payment *Virtual Account BNI* adalah Rp. 10.000`)
  if (hargac > 20000000) return m.reply(`Maximal Payment *Virtual Account BNI* adalah Rp. 20.000.000`);
    metode = '4'; 
        } else if (command === 'cimbpay') {
if (hargac < 10000) return m.reply(`Minimun Payment *Virtual Account CIMB* adalah Rp. 10.000`)
  if (hargac > 20000000) return m.reply(`Maximal Payment *Virtual Account CIMB* adalah Rp. 20.000.000`);
    metode = '3'; 
            } else if (command === 'bncpay') {
if (hargac < 10000) return m.reply(`Minimun Payment *Virtual Account BNC* adalah Rp. 10.000`)
  if (hargac > 20000000) return m.reply(`Maximal Payment *Virtual Account BNC* adalah Rp. 20.000.000`);
    metode = '10'; 
                } else if (command === 'bsipay') {
if (hargac < 10000) return m.reply(`Minimun Payment *Virtual Account BSI* adalah Rp. 10.000`)
  if (hargac > 20000000) return m.reply(`Maximal Payment *Virtual Account BSI* adalah Rp. 20.000.000`);
                  } else if (command === 'permatapay') {
if (hargac < 10000) return m.reply(`Minimun Payment *Virtual Account Permata* adalah Rp. 10.000`)
  if (hargac > 20000000) return m.reply(`Maximal Payment *Virtual Account Permata* adalah Rp. 20.000.000`);
    metode = '7'; 
                      } else if (command === 'danamonpay') {
if (hargac < 10000) return m.reply(`Minimun Payment *Virtual Account DANAMON*adalah Rp. 10.000`)
  if (hargac > 20000000) return m.reply(`Maximal Payment *Virtual Account DANAMON* adalah Rp. 20.000.000`);
    metode = '8'; 
                      } else if (command === 'maybankpay') {
if (hargac < 10000) return m.reply(`Minimun Payment *Virtual Account MAYBANK* adalah Rp. 10.000`)
  if (hargac > 20000000) return m.reply(`Maximal Payment *Virtual Account MAYBANK* adalah Rp. 20.000.000`);
    metode = '6'; 
    }
    let FormData = require('form-data');
    let axios = require('axios');
    let md5 = require('md5');
    let kode_buyer = `${cek("buyer_sku_code", m.sender)}`;
    for(let i of r) {     
        if(i.buyer_sku_code == kode_buyer) { 
            let tujuan = `${cek("tujuan", m.sender)}` ;
            let harga = hargac * 1
            let referdf = `${cek("reff", m.sender)}`;
            let product_name = `${cek("product_name", m.sender)}`;
            let user_no = `${tujuan}`;
            let harga_produk = `${harga}`;
            let kode_produk= `${kode_buyer}`;
                   let zannstoreTOP = '`'
            async function makePayment() {
                try {
                    let keynya = global.PayDisiniKey;
                    let kodeunick = koderefe
                    let paymetcod = metode
                    let aomut = Math.round(harga_produk);
                    let exp = 10800;
                    let create = keynya + kodeunick + paymetcod + aomut + exp + 'NewTransaction';
                    let signature = md5(create);
                    
                    // Membuat data form untuk permintaan pembayaran
                    var paymentData = new FormData();
                    paymentData.append('key', keynya);
                    paymentData.append('request', 'new');
                    paymentData.append('unique_code', kodeunick);
                    paymentData.append('service', paymetcod);
                    paymentData.append('amount', aomut);
                    paymentData.append('note', `${product_name} [${kode_produk}] Ref ${referdf}`);
                    paymentData.append('valid_time', exp);
                    paymentData.append('customer_email', cek("email", m.sender));
                    paymentData.append('type_fee', '1');
                    paymentData.append('signature', signature); // Menggunakan signature yang telah dihitung

                    // Konfigurasi untuk permintaan pembayaran
                    var paymentConfig = {
                        method: 'post',
                        url: 'https://paydisini.co.id/api/',
                        headers: { 
                            ...paymentData.getHeaders()
                        },
                        data: paymentData
                    };

                    // Mengirim permintaan pembayaran
                    let paymentResponse = await axios(paymentConfig);
                    let paymentDataResponse = paymentResponse.data.data;
                                       if (!paymentDataResponse || !paymentDataResponse || typeof paymentDataResponse.unique_code === 'undefined') {
        reply(`Oops, ${paymentResponse.data.msg}`)
            console.error(paymentResponse.data.msg);
            return;
        }
                  let obj = { id: m.sender, ref: `${paymentDataResponse.unique_code}`, method : `${paymentDataResponse.service_name}`, diterima: `${paymentDataResponse.balance}`, total: `${paymentDataResponse.amount}`, fee: `${paymentDataResponse.fee}`, url: `${paymentDataResponse.checkout_url_v2}` }
          sett("deposit", m.sender, `${paymentDataResponse.unique_code}`)
fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`, JSON.stringify(obj))
                    let ccapt = ` CHECK OUT YOUR ORDER \n\n> Metode : ${paymentDataResponse.service_name}\n> Referensi : ${paymentDataResponse.unique_code}\n> Berlaku : 30 Menit\n> Tagihan : ${formatmoney(paymentDataResponse.balance)}\n> Fee : ${formatmoney(paymentDataResponse.fee)}\n> Total Bayar : ${formatmoney(paymentDataResponse.amount)}\n> Catatan : Pay ${referdf}|${product_name} ke ${zannstoreTOP}${user_no}${zannstoreTOP}\n\nSilahkan Lakukan Pembayaran Tepat Waktu`;
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
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"BATALKAN TRANSAKSI","id":".cancel"}`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Bayar Sekarang",
                                "url": "${paymentDataResponse.checkout_url_v2}",
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
                    setTimeout(() => {
const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
               let url = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.url}`
               sendEmailPending(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender, url);
               }, 2000);
                    let unick = paymentDataResponse.unique_code;

                    // Memantau status pembayaran
                    let dataStatus = paymentDataResponse.status;
                    const startTime = new Date().getTime();
                    while (dataStatus !== "Success") {
                        await sleep(1000);
                        let create3 = keynya + unick + 'StatusTransaction';
                        let signature3 = md5(create3);
                        var checkStatusData = new FormData();
                        checkStatusData.append('key', keynya);
                        checkStatusData.append('request', 'status');
                        checkStatusData.append('unique_code', unick);
                        checkStatusData.append('signature', signature3); 
                        // Konfigurasi untuk memeriksa status pembayaran
                        var checkStatusConfig = {
                            method: 'post',
                            url: 'https://paydisini.co.id/api/',
                            headers: { 
                                ...checkStatusData.getHeaders()
                            },
                            data: checkStatusData
                        };
                        // Mengirim permintaan untuk memeriksa status pembayaran
                        let statusResponse = await axios(checkStatusConfig);
                        let statusDataResponse = statusResponse.data.data;
                        dataStatus = statusDataResponse.status;
                        console.log(dataStatus);
                        // Memeriksa waktu timeout
                        const currentTime = new Date().getTime();
                        const elapsedTime = (currentTime - startTime) / (1000 * 60 * 30);
                        if (elapsedTime >= 1) {
                            m.reply(`Upss, tiket ${cek("deposit", m.sender)} udah gak berlaku nih. Yuk, buat yang baru!`);
              cancelPay();
                            break;
                        }
                        // Jika pembayaran berhasil
                        if (dataStatus === "Success") {
                        const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
               setTimeout(() => {
let notif = `Hai *${ownername}*,
Ada transaksi yang telah dibayar!

Member : ${dengan_nol}
Kode Unik : ${ref_sender}
Metode Pembayaran : ${method}
Jumlah Deposit : ${formatmoney(price_sender)}
Biaya Admin : ${formatmoney(fee_sender)}
Total Deposit : ${formatmoney(total_sender)}
Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Detail transaksi dapat dilihat pada website 
`
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
                    title: notif,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "DETAIL PEMBAYARAN",
                                "url": "https://web.paydisini.co.id/Riwayat-Transaksi/?status=&unique_code=${ref_sender}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                })
            })
        }
    }
}, {});

AnanthaGanz.relayMessage(`${owner}@s.whatsapp.net`, msg.message, {
    messageId: msg.key.id
    }, {quoted: m});
   }, 2000); // 2000 milliseconds (3 seconds)
const trxFilePath = './SETTING/DB/dataTrx.json';
const signature = crypto.createHash('md5')
.update(global.UsernameDF + global.APIkeyDF + referdf)
.digest('hex');

var config = {
    method: 'POST',
    url: `https://${global.digiFlazz}/v1/transaction`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    data: JSON.stringify({
        "username": global.UsernameDF,
        "buyer_sku_code": kode_buyer,
        "customer_no": user_no,
        "ref_id": referdf,
        "sign": signature
    })
};
  const parsedHarga = parseFloat(harga);  
axios(config)
.then(async res => {
AnanthaGanz.sendMessage(cek("id", m.sender), {text:`*RINCIAN PEMESANAN*

> Status : Process
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Weett, pesanan kamu sedang dalam proses`}, {Quoted: m})
let status = res.data.data.status;  
    console.log(status)        
while (status !== 'Sukses') {
await sleep(1000); 
const response = await axios(config);
status = response.data.data.status; 
if (status == "Gagal") {
sett("+saldo", cek("id", m.sender), harga) 
let DFgagal = `*RINCIAN PESANAN*

> Status : Failed
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

yahh, pesanan kamu udah nggak bisa diproses. Mau Coba Lagi?`
sendGagalDF(DFgagal);
let pesany = response.data.data.message
    let GagalTr = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const NewGagal = {
            buyer: m.sender,
            status: pesany,
            no_pembayaran: `${koderefe}`,
            ref_id: referdf,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: product_name,
            harga: "0",
            harga_modal: "0",
            tujuan: user_no,
            invoice: "Oops, Transaksi ini sudah dibatalkan oleh sistem",
        };
            GagalTr.push(NewGagal);
    fs.writeFileSync(trxFilePath, JSON.stringify(GagalTr, null, 2), 'utf8');
setTimeout(() => {
sendEmailTrxCancel(sender, pushname, referdf, product_name, user_no, parsedHarga, pesany);
}, 500);
AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, {text:`*KESALAHAN SISTEM*

> Layanan : ${product_name} 
> Message : ${response.data.data.message} 
> Customer : ${dengan_nol}`}, {Quoted: m})
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
if (status === "Sukses") {
    let suksesp = `*RINCIAN PEMESANAN*

> Status : Success
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}
> SN/Token : ${response.data.data.sn}

Oke Sip, pesanan kamu udah berhasil! Makasih udah belanja di *${footer}*`
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
                        title: suksesp,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Cetak Struk","id":".print ${referdf}"}` 
                        },
                                               {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Order lagi","id":".order ${cek("buyer_sku_code", m.sender)} ${cek("tujuan", m.sender)}"}` 
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

     AnanthaGanz.relayMessage(cek("id", m.sender), msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
let snket = response.data.data.sn
setTimeout(() => {
sendEmailTrxSuks(sender, pushname, snket, referdf, product_name, user_no, parsedHarga);
}, 500);
const productDetails = d.find(i => i.product_name === product_name);
let fileRekap = JSON.stringify(response.data.data);
      fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Prabayar/Sukses/${referdf}.json`, fileRekap);
if (productDetails) {
    const productInfo = `
Nama: ${productDetails.product_name}\nHarga: ${formatmoney(productDetails.price)}
`;
}
    const hargaModal = productDetails ? productDetails.price : null;
    const parsedModal = parseFloat(hargaModal);
    let lastSaldo = response.data.data.buyer_last_saldo * 1
    let digiSaldo = `${formatmoney(lastSaldo)}` 
    let totalPendapatan = parsedHarga - hargaModal * 1
    let tele = response.data.data.tele.replace(/@/g, '');  // This will remove all "@" characters
    let wa = response.data.data.wa.replace(/^0/, '62');  // This will replace the leading "0" with "62"
    setTimeout(() => {
    let SnKr = `*LAPORAN PENDAPATAN*

> Customer : ${dengan_nol}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> ID Trx : ${referdf}
> Harga Pokok : ${formatmoney(parsedHarga)}
> Harga Modal : ${formatmoney(hargaModal)}
> Total Komisi : ${formatmoney(totalPendapatan)}
> Saldo Akhir Vendor : ${digiSaldo}
> Tanggal Penjualan : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}`
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
                        title: SnKr,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                       {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Web Digiflazz",
                                "url": "https://member.digiflazz.com/buyer-area",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                                               {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Telegram Seller",
                                "url": "https://t.me/${tele}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "WhatsApp Seller",
                                "url": "https://wa.me/${wa}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                    })
                })
            }
        }
    }, {});

     AnanthaGanz.relayMessage(ananthaa, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    }, 2000);
   const trxFilePath = './SETTING/DB/dataTrx.json';
    const trxUserData = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const newTransaction = {
            buyer: m.sender,
            status: response.data.data.message,
            no_pembayaran: `${koderefe}`,
            ref_id: response.data.data.ref_id,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: product_name,
            harga: parsedHarga,
            harga_modal: parsedModal,
            tujuan: user_no,
            invoice: response.data.data.sn,
        };
            trxUserData.push(newTransaction);
    fs.writeFileSync(trxFilePath, JSON.stringify(trxUserData, null, 2), 'utf8');
    setTimeout(() => {
sett("product_name", m.sender, "")
sett("price", m.sender, 0)
sett("tujuan", m.sender, "")  
sett("desc_prabayar", m.sender, "")  
sett("reff", m.sender, "") 
sett("buyer_sku_code", m.sender, "")  
sett("status", m.sender, true)
}, 1500);
}
          }})
          .catch(error => {
            if (error.response) {   
   sett("+saldo", cek("id", m.sender), harga) 
   console.error(error.response.data.data);
   let rekapGagal = JSON.stringify(error.response.data.data);
      fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Prabayar/Gagal/${koderefe}.json`, rekapGagal);
      let DFgagal = `*RINCIAN PESANAN*

> Status : Failed
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

yahh, pesanan kamu udah nggak bisa diproses. Mau Coba Lagi?`
sendGagalDF(DFgagal);
let pesanyu = error.response.data.data.message
  let GagalTru = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const NewGagalr = {
            buyer: m.sender,
            buyer: m.sender,
            status: pesanyu,
            no_pembayaran: `${koderefe}`,
            ref_id: referdf,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: product_name,
            harga: "0",
            harga_modal: "0",
            tujuan: user_no,
            invoice: "Oops, Transaksi ini sudah dibatalkan oleh sistem",
        };
            GagalTru.push(NewGagalr);
    fs.writeFileSync(trxFilePath, JSON.stringify(GagalTru, null, 2), 'utf8');
setTimeout(() => {
sendEmailTrxCancele(sender, pushname, referdf, product_name, user_no, parsedHarga, pesanyu);
}, 500);
              AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, {text:`*KESALAHAN SISTEM*

> Layanan : ${product_name} 
> Message : ${error.response.data.data.message} 
> Customer : ${dengan_nol}`}, {Quoted: m})
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
   });
   setTimeout(() => {
                fs.unlinkSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`);
                }, 1500);
                setTimeout(() => {
    sett("deposit", m.sender, "")
                }, 2000);
                 } else if (dataStatus === "Canceled") {
               console.log(`Berhasil! Ref ${cek("deposit", m.sender)} Dihapus`)
                        }
                    }
                } catch (error) {
                    console.log(error);
                    
                }
            }

            makePayment();
} }
break;

}
case 'qrispay': {
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("status", m.sender) == true) return reply(`Oops, kamu belum memiliki invoice! buat dulu yukk`);
    if(fs.existsSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`)) return AnanthaGalauV() 
let bulatharga = Math.round(`${cek("price", m.sender)}` * 1);
let user_payment_mount = bulatharga
if (user_payment_mount < 100) return m.reply(`Minimun Payment *QRIS* adalah Rp. 100`)
if (user_payment_mount > 10000000) return m.reply(`Maximal Payment *QRIS* adalah Rp. 10.000.000`)
    let FormData = require('form-data');
    let axios = require('axios');
    let md5 = require('md5');
    let kode_buyer = `${cek("buyer_sku_code", m.sender)}`;

    for(let i of r) {     
        if(i.buyer_sku_code == kode_buyer) { 
            let tujuan = `${cek("tujuan", m.sender)}` ;
            let harga = user_payment_mount * 1
            let referdf = `${cek("reff", m.sender)}`;
            let product_name = `${cek("product_name", m.sender)}`;
            let user_no = `${tujuan}`;
            let harga_produk = `${harga}`;
            let kode_produk= `${kode_buyer}`;
            let zannstoreTOP = '`'
            async function makePayment() {
                try {
                    let keynya = global.PayDisiniKey;
                    let kodeunick = koderefe
                    let paymetcod = '11';
                    let aomut = Math.round(harga_produk);
                    let exp = 10800;
                    let create = keynya + kodeunick + paymetcod + aomut + exp + 'NewTransaction';
                    let signature = md5(create);
                    
                    // Membuat data form untuk permintaan pembayaran
                    var paymentData = new FormData();
                    paymentData.append('key', keynya);
                    paymentData.append('request', 'new');
                    paymentData.append('merchant_id', '478');
                    paymentData.append('unique_code', kodeunick);
                    paymentData.append('service', paymetcod);
                    paymentData.append('amount', aomut);
                    paymentData.append('note', `${product_name} [${kode_produk}] Ref ${referdf}`);
                    paymentData.append('valid_time', exp);
                    paymentData.append('customer_email', cek("email", m.sender));
                    paymentData.append('type_fee', '1');
                    paymentData.append('signature', signature); // Menggunakan signature yang telah dihitung

                    // Konfigurasi untuk permintaan pembayaran
                    var paymentConfig = {
                        method: 'post',
                        url: 'https://paydisini.co.id/api/',
                        headers: { 
                            ...paymentData.getHeaders()
                        },
                        data: paymentData
                    };

                    // Mengirim permintaan pembayaran
                    let paymentResponse = await axios(paymentConfig);
                    let paymentDataResponse = paymentResponse.data.data;
                                       if (!paymentDataResponse || !paymentDataResponse || typeof paymentDataResponse.unique_code === 'undefined') {
        reply(`Oops, ${paymentResponse.data.msg}`)
            console.error(paymentResponse.data.msg);
            return;
        }
                  let obj = { id: m.sender, ref: `${paymentDataResponse.unique_code}`, method : `${paymentDataResponse.service_name}`, diterima: `${paymentDataResponse.balance}`, total: `${paymentDataResponse.amount}`, fee: `${paymentDataResponse.fee}`, url: `${paymentDataResponse.checkout_url_v2}` }
          sett("deposit", m.sender, `${paymentDataResponse.unique_code}`)
fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`, JSON.stringify(obj))
                   let ccapt = ` CHECK OUT YOUR ORDER \n\n> Metode : ${paymentDataResponse.service_name}\n> Referensi : ${paymentDataResponse.unique_code}\n> Berlaku : 30 Menit\n> Tagihan : ${formatmoney(paymentDataResponse.balance)}\n> Fee : ${formatmoney(paymentDataResponse.fee)}\n> Total Bayar : ${formatmoney(paymentDataResponse.amount)}\n> Catatan : Pay ${referdf}|${product_name} ke ${zannstoreTOP}${user_no}${zannstoreTOP}\n\nSilahkan Lakukan Pembayaran Tepat Waktu`;
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
 subtitle: `Secure payment by ${footer}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `${paymentDataResponse.qrcode_url}` } }, { upload: AnanthaGanz.waUploadToServer }))
 }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Cancel Transaksi","id":".cancel"}`
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
                    setTimeout(() => {
const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
               let url = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.url}`
               sendEmailPending(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender, url);
               }, 2000);
                    let unick = paymentDataResponse.unique_code;

                    // Memantau status pembayaran
                    let dataStatus = paymentDataResponse.status;
                    const startTime = new Date().getTime();
                    while (dataStatus !== "Success") {
                        await sleep(1000);
                        let create3 = keynya + unick + 'StatusTransaction';
                        let signature3 = md5(create3);
                        var checkStatusData = new FormData();
                        checkStatusData.append('key', keynya);
                        checkStatusData.append('request', 'status');
                        checkStatusData.append('unique_code', unick);
                        checkStatusData.append('signature', signature3); 
                        // Konfigurasi untuk memeriksa status pembayaran
                        var checkStatusConfig = {
                            method: 'post',
                            url: 'https://paydisini.co.id/api/',
                            headers: { 
                                ...checkStatusData.getHeaders()
                            },
                            data: checkStatusData
                        };
                        // Mengirim permintaan untuk memeriksa status pembayaran
                        let statusResponse = await axios(checkStatusConfig);
                        let statusDataResponse = statusResponse.data.data;
                        dataStatus = statusDataResponse.status;
                        console.log(dataStatus);
                        // Memeriksa waktu timeout
                        const currentTime = new Date().getTime();
                        const elapsedTime = (currentTime - startTime) / (1000 * 60 * 30);
                        if (elapsedTime >= 1) {
                            m.reply(`Upss, tiket ${cek("deposit", m.sender)} udah gak berlaku nih. Yuk, buat yang baru!`);
              cancelPay();
                            break;
                        }
                        // Jika pembayaran berhasil
                        if (dataStatus === "Success") {
                        const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
               setTimeout(() => {
let notif = `Hai *${ownername}*,
Ada transaksi yang telah dibayar!

Member : ${dengan_nol}
Kode Unik : ${ref_sender}
Metode Pembayaran : ${method}
Jumlah Deposit : ${formatmoney(price_sender)}
Biaya Admin : ${formatmoney(fee_sender)}
Total Deposit : ${formatmoney(total_sender)}
Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Detail transaksi dapat dilihat pada website 
`
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
                    title: notif,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "DETAIL PEMBAYARAN",
                                "url": "https://web.paydisini.co.id/Riwayat-Transaksi/?status==&unique_code=${ref_sender}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                })
            })
        }
    }
}, {});

AnanthaGanz.relayMessage(`${owner}@s.whatsapp.net`, msg.message, {
    messageId: msg.key.id
    }, {quoted: m});
   }, 2000); // 2000 milliseconds (3 seconds)
const trxFilePath = './SETTING/DB/dataTrx.json';
const signature = crypto.createHash('md5')
.update(global.UsernameDF + global.APIkeyDF + referdf)
.digest('hex');

var config = {
    method: 'POST',
    url: `https://${global.digiFlazz}/v1/transaction`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    data: JSON.stringify({
        "username": global.UsernameDF,
        "buyer_sku_code": kode_buyer,
        "customer_no": user_no,
        "ref_id": referdf,
        "sign": signature
    })
};
  const parsedHarga = parseFloat(harga);  
axios(config)
.then(async res => {
AnanthaGanz.sendMessage(cek("id", m.sender), {text:`*RINCIAN PEMESANAN*

> Status : Process
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Weett, pesanan kamu sedang dalam proses`}, {Quoted: m})
let status = res.data.data.status;  
    console.log(status)        
while (status !== 'Sukses') {
await sleep(1000); 
const response = await axios(config);
status = response.data.data.status; 
if (status == "Gagal") {
sett("+saldo", cek("id", m.sender), harga) 
let DFgagal = `*RINCIAN PESANAN*

> Status : Failed
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

yahh, pesanan kamu udah nggak bisa diproses. Mau Coba Lagi?`
sendGagalDF(DFgagal);
let pesany = response.data.data.message
    let GagalTr = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const NewGagal = {
            buyer: m.sender,
            status: pesany,
            no_pembayaran: `${koderefe}`,
            ref_id: referdf,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: product_name,
            harga: "0",
            harga_modal: "0",
            tujuan: user_no,
            invoice: "Oops, Transaksi ini sudah dibatalkan oleh sistem",
        };
            GagalTr.push(NewGagal);
    fs.writeFileSync(trxFilePath, JSON.stringify(GagalTr, null, 2), 'utf8');
setTimeout(() => {
sendEmailTrxCancel(sender, pushname, referdf, product_name, user_no, parsedHarga, pesany);
}, 500);
AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, {text:`*KESALAHAN SISTEM*

> Layanan : ${product_name} 
> Message : ${response.data.data.message} 
> Customer : ${dengan_nol}`}, {Quoted: m})
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
if (status === "Sukses") {
    let suksesp = `*RINCIAN PEMESANAN*

> Status : Success
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}
> SN/Token : ${response.data.data.sn}

Oke Sip, pesanan kamu udah berhasil! Makasih udah belanja di *${footer}*`
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
                        title: suksesp,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Cetak Struk","id":".print ${referdf}"}` 
                        },
                                               {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Order lagi","id":".order ${cek("buyer_sku_code", m.sender)} ${cek("tujuan", m.sender)}"}` 
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

     AnanthaGanz.relayMessage(cek("id", m.sender), msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
let snket = response.data.data.sn
setTimeout(() => {
sendEmailTrxSuks(sender, pushname, snket, referdf, product_name, user_no, parsedHarga);
}, 500);
const productDetails = d.find(i => i.product_name === product_name);
let fileRekap = JSON.stringify(response.data.data);
      fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Prabayar/Sukses/${referdf}.json`, fileRekap);
if (productDetails) {
    const productInfo = `
Nama: ${productDetails.product_name}\nHarga: ${formatmoney(productDetails.price)}
`;
}
    const hargaModal = productDetails ? productDetails.price : null;
    const parsedModal = parseFloat(hargaModal);
    let lastSaldo = response.data.data.buyer_last_saldo * 1
    let digiSaldo = `${formatmoney(lastSaldo)}` 
    let totalPendapatan = parsedHarga - hargaModal * 1
    let tele = response.data.data.tele.replace(/@/g, '');  // This will remove all "@" characters
    let wa = response.data.data.wa.replace(/^0/, '62');  // This will replace the leading "0" with "62"
    setTimeout(() => {
    let SnKr = `*LAPORAN PENDAPATAN*

> Customer : ${dengan_nol}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> ID Trx : ${referdf}
> Harga Pokok : ${formatmoney(parsedHarga)}
> Harga Modal : ${formatmoney(hargaModal)}
> Total Komisi : ${formatmoney(totalPendapatan)}
> Saldo Akhir Vendor : ${digiSaldo}
> Tanggal Penjualan : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}`
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
                        title: SnKr,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                       {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Web Digiflazz",
                                "url": "https://member.digiflazz.com/buyer-area",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                                               {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Telegram Seller",
                                "url": "https://t.me/${tele}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "WhatsApp Seller",
                                "url": "https://wa.me/${wa}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                    })
                })
            }
        }
    }, {});

     AnanthaGanz.relayMessage(ananthaa, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    }, 2000);
   const trxFilePath = './SETTING/DB/dataTrx.json';
    const trxUserData = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const newTransaction = {
            buyer: m.sender,
            status: response.data.data.message,
            no_pembayaran: `${koderefe}`,
            ref_id: response.data.data.ref_id,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: product_name,
            harga: parsedHarga,
            harga_modal: parsedModal,
            tujuan: user_no,
            invoice: response.data.data.sn,
        };
            trxUserData.push(newTransaction);
    fs.writeFileSync(trxFilePath, JSON.stringify(trxUserData, null, 2), 'utf8');
    setTimeout(() => {
sett("product_name", m.sender, "")
sett("price", m.sender, 0)
sett("tujuan", m.sender, "")  
sett("desc_prabayar", m.sender, "")  
sett("reff", m.sender, "") 
sett("buyer_sku_code", m.sender, "")  
sett("status", m.sender, true)
}, 1500);
}
          }})
          .catch(error => {
            if (error.response) {   
   sett("+saldo", cek("id", m.sender), harga) 
   console.error(error.response.data.data);
   let rekapGagal = JSON.stringify(error.response.data.data);
      fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Prabayar/Gagal/${koderefe}.json`, rekapGagal);
      let DFgagal = `*RINCIAN PESANAN*

> Status : Failed
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

yahh, pesanan kamu udah nggak bisa diproses. Mau Coba Lagi?`
sendGagalDF(DFgagal);
let pesanyu = error.response.data.data.message
  let GagalTru = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const NewGagalr = {
            buyer: m.sender,
            buyer: m.sender,
            status: pesanyu,
            no_pembayaran: `${koderefe}`,
            ref_id: referdf,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: product_name,
            harga: "0",
            harga_modal: "0",
            tujuan: user_no,
            invoice: "Oops, Transaksi ini sudah dibatalkan oleh sistem",
        };
            GagalTru.push(NewGagalr);
    fs.writeFileSync(trxFilePath, JSON.stringify(GagalTru, null, 2), 'utf8');
setTimeout(() => {
sendEmailTrxCancele(sender, pushname, referdf, product_name, user_no, parsedHarga, pesanyu);
}, 500);
              AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, {text:`*KESALAHAN SISTEM*

> Layanan : ${product_name} 
> Message : ${error.response.data.data.message} 
> Customer : ${dengan_nol}`}, {Quoted: m})
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
   });
   setTimeout(() => {
                fs.unlinkSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`);
                }, 1500);
                setTimeout(() => {
    sett("deposit", m.sender, "")
                }, 2000);
                 } else if (dataStatus === "Canceled") {
               console.log(`Berhasil! Ref ${cek("deposit", m.sender)} Dihapus`)
                        }
                    }
                } catch (error) {
                    console.log(error);
                    
                }
            }

            makePayment();
} }
break;

}
case 'axispay':
case 'xlpay':
case 'smartfrenpay':
case 'threepay':
case 'telkomselpay':
case 'gopaypay':
case 'linkajapay':
case 'ovopay':
case 'shopeepaypay':
case 'danapay': {
let send = `${sender.split('@')[0]}`
  let axios = require('axios');
  let md5 = require('md5');
  let ref_id = koderefe
  let endPoint = 'https://api.tokopay.id/v1/order' // SET ENDPOINT
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("status", m.sender) == true) return reply(`Oops, kamu belum memiliki invoice! buat dulu yukk`);
    if(fs.existsSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`)) return AnanthaGalauV() 
let bulatharga = Math.round(`${cek("price", m.sender)}` * 1);
let user_payment_mount = bulatharga
let kode_buyer = `${cek("buyer_sku_code", m.sender)}`;
for(let i of r) {     
        if(i.buyer_sku_code == kode_buyer) { 
            let tujuan = `${cek("tujuan", m.sender)}` ;
            let harga = Math.round(user_payment_mount);
            let referdf = `${cek("reff", m.sender)}`;
            let product_name = `${cek("product_name", m.sender)}`;
            let user_no = `${tujuan}`;
            let harga_produk = `${harga}`;
            let kode_produk= `${kode_buyer}`;
if (command === 'danapay') {
if (harga < 100) return m.reply(`Minimun Payment *DANA* adalah Rp. 100`)
  if (harga > 20000000) return m.reply(`Maximal Payment *DANA* adalah Rp. 20.000.000`);
    metode = 'DANA'; 
    metode1 = 'DANA'
} else if (command === 'telkomselpay') {
 if (harga < 5000) return m.reply(`Minimun Payment *Pulsa Telkomsel* adalah Rp. 5.000`)
  if (harga > 1000000) return m.reply(`Maximal Payment *Pulsa Telkomsel* adalah Rp. 1.000.000`);
    metode = 'TELKOMSEL'; 
    metode1 = 'Pulsa Telkomsel'
    } else if (command === 'smartfrenpay') {
 if (harga < 5000) return m.reply(`Minimun Payment *Pulsa Smartfren* adalah Rp. 5.000`)
  if (harga > 1000000) return m.reply(`Maximal Payment *Pulsa Smartfren* adalah Rp. 1.000.000`);
    metode = 'SMARTFREN'; 
    metode1 = 'Pulsa Smartfren'
    } else if (command === 'threepay') {
 if (harga < 1000) return m.reply(`Minimun Payment *Pulsa Three* adalah Rp. 1.000`)
  if (harga > 200000) return m.reply(`Maximal Payment *Pulsa Three* adalah Rp. 200.000`);
    metode = 'TRI'; 
    metode1 = 'Pulsa Three'
        } else if (command === 'axispay') {
 if (harga < 2000) return m.reply(`Minimun Payment *Pulsa Axis* adalah Rp. 2.000`)
  if (harga > 2000000) return m.reply(`Maximal Payment *Pulsa Axis* adalah Rp. 2.000.000`);
    metode = 'AXIS'; 
    metode1 = 'Pulsa Axis'
        } else if (command === 'xlpay') {
 if (harga < 2000) return m.reply(`Minimun Payment *Pulsa XL* adalah Rp. 2.000`)
  if (harga > 2000000) return m.reply(`Maximal Payment *Pulsa XL* adalah Rp. 2.000.000`);
    metode = 'XL'; 
    metode1 = 'Pulsa XL'
} else if (command === 'shopeepaypay') {
if (harga < 99) return m.reply(`Minimun Payment *ShopeePay* adalah Rp. 100`)
    if (harga > 2000000) return m.reply(`Maximal Payment *ShopeePay* adalah Rp. 2.000.000`);
    metode = 'SHOPEEPAY';
    metode1 = 'ShopeePay'
    } else if (command === 'linkajapay') {
if (harga < 99) return m.reply(`Minimun Payment *LinkAja* adalah Rp. 100`)
    if (harga > 2000000) return m.reply(`Maximal Payment *LinkAja* adalah Rp. 2.000.000`);
    metode = 'LINKAJA';
    metode1 = 'LinkAja'
        } else if (command === 'gopaypay') {
if (harga < 10) return m.reply(`Minimun Payment *GoPay* adalah Rp. 100`)
    if (harga > 2000000) return m.reply(`Maximal Payment *GoPay* adalah Rp. 2.000.000`);
    metode = 'GOPAY';
    metode1 = 'GoPay'
} else if (command === 'ovopay') {
if (harga < 99) return m.reply(`Minimun Payment *OVO* adalah Rp. 100`)
    if (harga > 10000000) return m.reply(`Maximal Payment *OVO* adalah Rp. 10.000.000`);
    metode = 'OVOPUSH'; 
    metode1 = 'Ovo'
}
let zannstoreTOP = '`'
let merchantid = global.TokoPay_merchant
let secret = global.TokoPay_secret
let create_md5 = `${merchantid}:${secret}:${ref_id}`;
let signature = md5(create_md5);
var config1 = {
method: 'POST',
headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
 "merchant_id": `${merchantid}`,
 "kode_channel": `${metode}`,
 "reff_id": `${ref_id}`,
 "amount": `${harga}`,
 "customer_name": `${pushname}`,
 "customer_email":`${cek("email", m.sender)}`,
 "customer_phone":`${dengan_nol}`,
 "redirect_url":"https://wa.me/6285174667722",
 "expired_ts":0, //default 0
 "signature": signature,
 "items":[{
         "product_code": `${referdf}`,
         "name":`${product_name}`,
         "price":`${harga}`,
         "product_url":"https://wa.me/6285174667722",
         "image_url":"https://telegra.ph/file/92e8994e5996b0a87fec8.jpg"
     }]
}),
}; 
fetch(endPoint, config1)
 .then(async (response) => {
     const data = await response.json();
       if (!data || !data.data || typeof data.data.total_bayar === 'undefined') {
            reply(`Oops, ${data.error_msg}`)
            console.error(data.error_msg);
            return;
        }
    const fee_users = `${data.data.total_bayar - data.data.total_diterima}` * 1
          let obj = { id: m.sender, ref: `${ref_id}`, method : `${metode1}`, diterima: `${data.data.total_diterima}`, total: `${data.data.total_bayar}`, fee: `${fee_users}`, url: `${data.data.pay_url}` }
          sett("deposit", m.sender, `${ref_id}`)
fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`, JSON.stringify(obj))
let ccapt = ` CHECK OUT YOUR ORDER \n\n> Metode : ${metode1}\n> Referensi : ${ref_id}\n> Berlaku : 30 Menit\n> Tagihan : ${formatmoney(data.data.total_diterima)}\n> Fee : ${formatmoney(fee_users)}\n> Total Bayar : ${formatmoney(data.data.total_bayar)}\n> Catatan : Pay ${referdf}|${product_name} ke ${zannstoreTOP}${user_no}${zannstoreTOP}\n\nSilahkan Lakukan Pembayaran Tepat Waktu`;
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
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"BATALKAN TRANSAKSI","id":".cancel"}`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Bayar Sekarang",
                                "url": "${data.data.pay_url}",
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
setTimeout(() => {
const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
               let url = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.url}`
               sendEmailPending(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender, url);
               }, 2500);
              let dataStatus = data.data.status;
              const startTime = new Date().getTime();
              while (dataStatus !== "Success") {
              await sleep(1000);
              let zann = await fetch(endPoint, config1);
              let dataJson = await zann.json();
              let dataStatus = dataJson.data.status;
              console.log(dataStatus);
              const currentTime = new Date().getTime();
              const elapsedTime = (currentTime - startTime) / (1000 * 60 * 30);
                        if (elapsedTime >= 1) {
                  m.reply(`Upss, tiket ${cek("deposit", m.sender)} udah gak berlaku nih. Yuk, buat yang baru!`);
              cancelPay();
                break;
            }
            if (dataStatus === "Success") {
try {
            const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
               setTimeout(() => {
let notif = `Hai *${ownername}*,
Ada transaksi yang telah dibayar!

Member : ${dengan_nol}
Kode Unik : ${ref_sender}
Metode Pembayaran : ${method}
Jumlah Deposit : ${formatmoney(price_sender)}
Biaya Admin : ${formatmoney(fee_sender)}
Total Deposit : ${formatmoney(total_sender)}
Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Detail transaksi dapat dilihat pada website 
`
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
                    title: notif,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "DETAIL PEMBAYARAN",
                                "url": "https://dash.tokopay.id/transaksi/${dataJson.data.trx_id}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                })
            })
        }
    }
}, {});

AnanthaGanz.relayMessage(`${owner}@s.whatsapp.net`, msg.message, {
    messageId: msg.key.id
    }, {quoted: m});
   }, 2000); // 2000 milliseconds (3 seconds)
const trxFilePath = './SETTING/DB/dataTrx.json';
const signature = crypto.createHash('md5')
.update(global.UsernameDF + global.APIkeyDF + referdf)
.digest('hex');

var config = {
    method: 'POST',
    url: `https://${global.digiFlazz}/v1/transaction`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    data: JSON.stringify({
        "username": global.UsernameDF,
        "buyer_sku_code": kode_buyer,
        "customer_no": user_no,
        "ref_id": referdf,
        "sign": signature
    })
};
  const parsedHarga = parseFloat(harga);  
axios(config)
.then(async res => {
AnanthaGanz.sendMessage(cek("id", m.sender), {text:`*RINCIAN PEMESANAN*

> Status : Process
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Weett, pesanan kamu sedang dalam proses`}, {Quoted: m})
let status = res.data.data.status;  
    console.log(status)        
while (status !== 'Sukses') {
await sleep(1000); 
const response = await axios(config);
status = response.data.data.status; 
if (status == "Gagal") {
sett("+saldo", cek("id", m.sender), harga) 
let DFgagal = `*RINCIAN PESANAN*

> Status : Failed
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

yahh, pesanan kamu udah nggak bisa diproses. Mau Coba Lagi?`
sendGagalDF(DFgagal);
let pesany = response.data.data.message
    let GagalTr = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const NewGagal = {
            buyer: m.sender,
            status: pesany,
            no_pembayaran: `${koderefe}`,
            ref_id: referdf,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: product_name,
            harga: "0",
            harga_modal: "0",
            tujuan: user_no,
            invoice: "Oops, Transaksi ini sudah dibatalkan oleh sistem",
        };
            GagalTr.push(NewGagal);
    fs.writeFileSync(trxFilePath, JSON.stringify(GagalTr, null, 2), 'utf8');
setTimeout(() => {
sendEmailTrxCancel(sender, pushname, referdf, product_name, user_no, parsedHarga, pesany);
}, 500);
AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, {text:`*KESALAHAN SISTEM*

> Layanan : ${product_name} 
> Message : ${response.data.data.message} 
> Customer : ${dengan_nol}`}, {Quoted: m})
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
if (status === "Sukses") {
    let suksesp = `*RINCIAN PEMESANAN*

> Status : Success
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}
> SN/Token : ${response.data.data.sn}

Oke Sip, pesanan kamu udah berhasil! Makasih udah belanja di *${footer}*`
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
                        title: suksesp,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Cetak Struk","id":".print ${referdf}"}` 
                        },
                                               {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Order lagi","id":".order ${cek("buyer_sku_code", m.sender)} ${cek("tujuan", m.sender)}"}` 
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

     AnanthaGanz.relayMessage(cek("id", m.sender), msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
let snket = response.data.data.sn
setTimeout(() => {
sendEmailTrxSuks(sender, pushname, snket, referdf, product_name, user_no, parsedHarga);
}, 500);
const productDetails = d.find(i => i.product_name === product_name);
let fileRekap = JSON.stringify(response.data.data);
      fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Prabayar/Sukses/${referdf}.json`, fileRekap);
if (productDetails) {
    const productInfo = `
Nama: ${productDetails.product_name}\nHarga: ${formatmoney(productDetails.price)}
`;
}
    const hargaModal = productDetails ? productDetails.price : null;
    const parsedModal = parseFloat(hargaModal);
    let lastSaldo = response.data.data.buyer_last_saldo * 1
    let digiSaldo = `${formatmoney(lastSaldo)}` 
    let totalPendapatan = parsedHarga - hargaModal * 1
    let tele = response.data.data.tele.replace(/@/g, '');  // This will remove all "@" characters
    let wa = response.data.data.wa.replace(/^0/, '62');  // This will replace the leading "0" with "62"
    setTimeout(() => {
    let SnKr = `*LAPORAN PENDAPATAN*

> Customer : ${dengan_nol}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> ID Trx : ${referdf}
> Harga Pokok : ${formatmoney(parsedHarga)}
> Harga Modal : ${formatmoney(hargaModal)}
> Total Komisi : ${formatmoney(totalPendapatan)}
> Saldo Akhir Vendor : ${digiSaldo}
> Tanggal Penjualan : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}`
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
                        title: SnKr,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                       {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Web Digiflazz",
                                "url": "https://member.digiflazz.com/buyer-area",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                                               {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Telegram Seller",
                                "url": "https://t.me/${tele}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "WhatsApp Seller",
                                "url": "https://wa.me/${wa}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                    })
                })
            }
        }
    }, {});

     AnanthaGanz.relayMessage(ananthaa, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    }, 2000);
   const trxFilePath = './SETTING/DB/dataTrx.json';
    const trxUserData = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const newTransaction = {
            buyer: m.sender,
            status: response.data.data.message,
            no_pembayaran: `${koderefe}`,
            ref_id: response.data.data.ref_id,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: product_name,
            harga: parsedHarga,
            harga_modal: parsedModal,
            tujuan: user_no,
            invoice: response.data.data.sn,
        };
            trxUserData.push(newTransaction);
    fs.writeFileSync(trxFilePath, JSON.stringify(trxUserData, null, 2), 'utf8');
    setTimeout(() => {
sett("product_name", m.sender, "")
sett("price", m.sender, 0)
sett("tujuan", m.sender, "")  
sett("desc_prabayar", m.sender, "")  
sett("reff", m.sender, "") 
sett("buyer_sku_code", m.sender, "")  
sett("status", m.sender, true)
}, 1500);
}
          }})
          .catch(error => {
            if (error.response) {   
   sett("+saldo", cek("id", m.sender), harga) 
   console.error(error.response.data.data);
   let rekapGagal = JSON.stringify(error.response.data.data);
      fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Prabayar/Gagal/${koderefe}.json`, rekapGagal);
      let DFgagal = `*RINCIAN PESANAN*

> Status : Failed
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

yahh, pesanan kamu udah nggak bisa diproses. Mau Coba Lagi?`
sendGagalDF(DFgagal);
let pesanyu = error.response.data.data.message
  let GagalTru = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const NewGagalr = {
            buyer: m.sender,
            buyer: m.sender,
            status: pesanyu,
            no_pembayaran: `${koderefe}`,
            ref_id: referdf,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: product_name,
            harga: "0",
            harga_modal: "0",
            tujuan: user_no,
            invoice: "Oops, Transaksi ini sudah dibatalkan oleh sistem",
        };
            GagalTru.push(NewGagalr);
    fs.writeFileSync(trxFilePath, JSON.stringify(GagalTru, null, 2), 'utf8');
setTimeout(() => {
sendEmailTrxCancele(sender, pushname, referdf, product_name, user_no, parsedHarga, pesanyu);
}, 500);
              AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, {text:`*KESALAHAN SISTEM*

> Layanan : ${product_name} 
> Message : ${error.response.data.data.message} 
> Customer : ${dengan_nol}`}, {Quoted: m})
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
   });
   setTimeout(() => {
                fs.unlinkSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`);
                }, 4000);
                setTimeout(() => {
    sett("deposit", m.sender, "")
                }, 6000);
                  } catch (error) {
        console.log(error);
        }
                break;
            }
        }
    });
    } }
}
break;

case 'indomaretpay':
case 'alfamartpay': {
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("status", m.sender) == true) return reply(`Oops, kamu belum memiliki invoice! buat dulu yukk`);
        if(fs.existsSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`)) return AnanthaGalauV() 
let bulatharga = Math.round(`${cek("price", m.sender)}` * 1);
let user_payment_mount = bulatharga
if (user_payment_mount < 15000) return m.reply(`Minimun Payment *Retail* adalah Rp. 15.000`)
if (user_payment_mount > 2500000) return m.reply(`Maximal Payment *Retail* adalah Rp. 2.500.000`)
    let FormData = require('form-data');
    let axios = require('axios');
    let md5 = require('md5');
    let kode_buyer = `${cek("buyer_sku_code", m.sender)}`;

    for(let i of r) {     
        if(i.buyer_sku_code == kode_buyer) { 
            let tujuan = `${cek("tujuan", m.sender)}` ;
            let harga = user_payment_mount * 1
            let referdf = `${cek("reff", m.sender)}`;
            let ref_no = `${sender.split('@')[0]}`;
            let product_name = `${cek("product_name", m.sender)}`;
            let user_no = `${tujuan}`;
            let harga_produk = `${harga}`;
            let kode_produk= `${kode_buyer}`;
            let zannstoreTOP = '`'
            async function makePayment() {
                             if (command === 'alfamartpay') {
                paymetcod1 = '18'; // Ganti '13' dengan kode pembayaran dana yang sesuai
    } else if (command === 'indomaretpay') {
                paymetcod1 = '19'; // Ganti '14' dengan kode pembayaran linkaja yang sesuai
                }
                try {
                    let keynya = global.PayDisiniKey;
                    let kodeunick = koderefe
                    let paymetcod = paymetcod1
                    let aomut = Math.round(harga_produk);
                    let exp = 10800;
                    let create = keynya + kodeunick + paymetcod + aomut + exp + 'NewTransaction';
                    let signature = md5(create);
                    
                    // Membuat data form untuk permintaan pembayaran
                    var paymentData = new FormData();
                    paymentData.append('key', keynya);
                    paymentData.append('request', 'new');
                    paymentData.append('unique_code', kodeunick);
                    paymentData.append('service', paymetcod);
                    paymentData.append('amount', aomut);
                    paymentData.append('note', `${product_name} [${kode_produk}] Ref ${referdf}`);
                    paymentData.append('valid_time', exp);
                    paymentData.append('customer_email', cek("email", m.sender));
                    paymentData.append('type_fee', '1');
                    paymentData.append('signature', signature); // Menggunakan signature yang telah dihitung

                    // Konfigurasi untuk permintaan pembayaran
                    var paymentConfig = {
                        method: 'post',
                        url: 'https://paydisini.co.id/api/',
                        headers: { 
                            ...paymentData.getHeaders()
                        },
                        data: paymentData
                    };

                    // Mengirim permintaan pembayaran
                    let paymentResponse = await axios(paymentConfig);
                    let paymentDataResponse = paymentResponse.data.data;
                                       if (!paymentDataResponse || !paymentDataResponse || typeof paymentDataResponse.unique_code === 'undefined') {
        reply(`Oops, ${paymentResponse.data.msg}`)
            console.error(paymentResponse.data.msg);
            return;
        }
      let obj = { id: m.sender, ref: `${paymentDataResponse.unique_code}`, method : `${paymentDataResponse.service_name}`, diterima: `${paymentDataResponse.balance}`, total: `${paymentDataResponse.amount}`, fee: `${paymentDataResponse.fee}`, url: `${paymentDataResponse.checkout_url_v2}` }
          sett("deposit", m.sender, `${paymentDataResponse.unique_code}`)
fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`, JSON.stringify(obj))
                    let ccapt = ` CHECK OUT YOUR ORDER \n\n> Metode : ${paymentDataResponse.service_name}\n> Referensi : ${paymentDataResponse.unique_code}\n> Berlaku : 30 Menit\n> Tagihan : ${formatmoney(paymentDataResponse.balance)}\n> Fee : ${formatmoney(paymentDataResponse.fee)}\n> Total Bayar : ${formatmoney(paymentDataResponse.amount)}\n> Catatan : Pay ${referdf}|${product_name} ke ${zannstoreTOP}${user_no}${zannstoreTOP}\n\nSilahkan Lakukan Pembayaran Tepat Waktu`;
    

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
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"BATALKAN TRANSAKSI","id":".cancel"}`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Bayar Sekarang",
                                "url": "${paymentDataResponse.checkout_url_v2}",
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
setTimeout(() => {
const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
               let url = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.url}`
               sendEmailPending(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender, url);
               }, 5000);
                    let unick = paymentDataResponse.unique_code;
                    // Memantau status pembayaran
                    let dataStatus = paymentDataResponse.status;
                    const startTime = new Date().getTime();
                    while (dataStatus !== "Success") {
                        await sleep(1000);
                        let create3 = keynya + unick + 'StatusTransaction';
                        let signature3 = md5(create3);
                        var checkStatusData = new FormData();
                        checkStatusData.append('key', keynya);
                        checkStatusData.append('request', 'status');
                        checkStatusData.append('unique_code', unick);
                        checkStatusData.append('signature', signature3); 
                        // Konfigurasi untuk memeriksa status pembayaran
                        var checkStatusConfig = {
                            method: 'post',
                            url: 'https://paydisini.co.id/api/',
                            headers: { 
                                ...checkStatusData.getHeaders()
                            },
                            data: checkStatusData
                        };
                        // Mengirim permintaan untuk memeriksa status pembayaran
                        let statusResponse = await axios(checkStatusConfig);
                        let statusDataResponse = statusResponse.data.data;
                        dataStatus = statusDataResponse.status;
                        console.log(dataStatus);
                        // Memeriksa waktu timeout
                        const currentTime = new Date().getTime();
                        const elapsedTime = (currentTime - startTime) / (1000 * 60 * 30);
                        if (elapsedTime >= 1) {
                            m.reply(`Upss, tiket ${cek("deposit", m.sender)} udah gak berlaku nih. Yuk, buat yang baru!`);
              cancelPay();
                            break;
                        }
                        // Jika pembayaran berhasil
                        if (dataStatus === "Success") {
                        const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
               setTimeout(() => {
let notif = `Hai *${ownername}*,
Ada transaksi yang telah dibayar!

Member : ${dengan_nol}
Kode Unik : ${ref_sender}
Metode Pembayaran : ${method}
Jumlah Deposit : ${formatmoney(price_sender)}
Biaya Admin : ${formatmoney(fee_sender)}
Total Deposit : ${formatmoney(total_sender)}
Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Detail transaksi dapat dilihat pada website 
`
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
                    title: notif,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "DETAIL PEMBAYARAN",
                                "url": "https://web.paydisini.co.id/Riwayat-Transaksi/?status==&unique_code=${ref_sender}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                })
            })
        }
    }
}, {});

AnanthaGanz.relayMessage(`${owner}@s.whatsapp.net`, msg.message, {
    messageId: msg.key.id
    }, {quoted: m});
   }, 2000); // 2000 milliseconds (3 seconds)
const trxFilePath = './SETTING/DB/dataTrx.json';
const signature = crypto.createHash('md5')
.update(global.UsernameDF + global.APIkeyDF + referdf)
.digest('hex');

var config = {
    method: 'POST',
    url: `https://${global.digiFlazz}/v1/transaction`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    data: JSON.stringify({
        "username": global.UsernameDF,
        "buyer_sku_code": kode_buyer,
        "customer_no": user_no,
        "ref_id": referdf,
        "sign": signature
    })
};
  const parsedHarga = parseFloat(harga);  
axios(config)
.then(async res => {
AnanthaGanz.sendMessage(cek("id", m.sender), {text:`*RINCIAN PEMESANAN*

> Status : Process
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Weett, pesanan kamu sedang dalam proses`}, {Quoted: m})
let status = res.data.data.status;  
    console.log(status)        
while (status !== 'Sukses') {
await sleep(1000); 
const response = await axios(config);
status = response.data.data.status; 
if (status == "Gagal") {
sett("+saldo", cek("id", m.sender), harga) 
let DFgagal = `*RINCIAN PESANAN*

> Status : Failed
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

yahh, pesanan kamu udah nggak bisa diproses. Mau Coba Lagi?`
sendGagalDF(DFgagal);
let pesany = response.data.data.message
    let GagalTr = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const NewGagal = {
            buyer: m.sender,
            status: pesany,
            no_pembayaran: `${koderefe}`,
            ref_id: referdf,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: product_name,
            harga: "0",
            harga_modal: "0",
            tujuan: user_no,
            invoice: "Oops, Transaksi ini sudah dibatalkan oleh sistem",
        };
            GagalTr.push(NewGagal);
    fs.writeFileSync(trxFilePath, JSON.stringify(GagalTr, null, 2), 'utf8');
setTimeout(() => {
sendEmailTrxCancel(sender, pushname, referdf, product_name, user_no, parsedHarga, pesany);
}, 500);
AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, {text:`*KESALAHAN SISTEM*

> Layanan : ${product_name} 
> Message : ${response.data.data.message} 
> Customer : ${dengan_nol}`}, {Quoted: m})
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
if (status === "Sukses") {
    let suksesp = `*RINCIAN PEMESANAN*

> Status : Success
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}
> SN/Token : ${response.data.data.sn}

Oke Sip, pesanan kamu udah berhasil! Makasih udah belanja di *${footer}*`
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
                        title: suksesp,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Cetak Struk","id":".print ${referdf}"}` 
                        },
                                               {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Order lagi","id":".order ${cek("buyer_sku_code", m.sender)} ${cek("tujuan", m.sender)}"}` 
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

     AnanthaGanz.relayMessage(cek("id", m.sender), msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
let snket = response.data.data.sn
setTimeout(() => {
sendEmailTrxSuks(sender, pushname, snket, referdf, product_name, user_no, parsedHarga);
}, 500);
const productDetails = d.find(i => i.product_name === product_name);
let fileRekap = JSON.stringify(response.data.data);
      fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Prabayar/Sukses/${referdf}.json`, fileRekap);
if (productDetails) {
    const productInfo = `
Nama: ${productDetails.product_name}\nHarga: ${formatmoney(productDetails.price)}
`;
}
    const hargaModal = productDetails ? productDetails.price : null;
    const parsedModal = parseFloat(hargaModal);
    let lastSaldo = response.data.data.buyer_last_saldo * 1
    let digiSaldo = `${formatmoney(lastSaldo)}` 
    let totalPendapatan = parsedHarga - hargaModal * 1
    let tele = response.data.data.tele.replace(/@/g, '');  // This will remove all "@" characters
    let wa = response.data.data.wa.replace(/^0/, '62');  // This will replace the leading "0" with "62"
    setTimeout(() => {
    let SnKr = `*LAPORAN PENDAPATAN*

> Customer : ${dengan_nol}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> ID Trx : ${referdf}
> Harga Pokok : ${formatmoney(parsedHarga)}
> Harga Modal : ${formatmoney(hargaModal)}
> Total Komisi : ${formatmoney(totalPendapatan)}
> Saldo Akhir Vendor : ${digiSaldo}
> Tanggal Penjualan : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}`
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
                        title: SnKr,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                       {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Web Digiflazz",
                                "url": "https://member.digiflazz.com/buyer-area",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                                               {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Telegram Seller",
                                "url": "https://t.me/${tele}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "WhatsApp Seller",
                                "url": "https://wa.me/${wa}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                    })
                })
            }
        }
    }, {});

     AnanthaGanz.relayMessage(ananthaa, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
    }, 2000);
   const trxFilePath = './SETTING/DB/dataTrx.json';
    const trxUserData = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const newTransaction = {
            buyer: m.sender,
            status: response.data.data.message,
            no_pembayaran: `${koderefe}`,
            ref_id: response.data.data.ref_id,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: product_name,
            harga: parsedHarga,
            harga_modal: parsedModal,
            tujuan: user_no,
            invoice: response.data.data.sn,
        };
            trxUserData.push(newTransaction);
    fs.writeFileSync(trxFilePath, JSON.stringify(trxUserData, null, 2), 'utf8');
    setTimeout(() => {
sett("product_name", m.sender, "")
sett("price", m.sender, 0)
sett("tujuan", m.sender, "")  
sett("desc_prabayar", m.sender, "")  
sett("reff", m.sender, "") 
sett("buyer_sku_code", m.sender, "")  
sett("status", m.sender, true)
}, 1500);
}
          }})
          .catch(error => {
            if (error.response) {   
   sett("+saldo", cek("id", m.sender), harga) 
   console.error(error.response.data.data);
   let rekapGagal = JSON.stringify(error.response.data.data);
      fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Prabayar/Gagal/${koderefe}.json`, rekapGagal);
      let DFgagal = `*RINCIAN PESANAN*

> Status : Failed
> ID Trx : ${referdf}
> Layanan : ${product_name}
> Tujuan : ${user_no}
> Harga : ${formatmoney(parsedHarga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

yahh, pesanan kamu udah nggak bisa diproses. Mau Coba Lagi?`
sendGagalDF(DFgagal);
let pesanyu = error.response.data.data.message
  let GagalTru = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
        const NewGagalr = {
            buyer: m.sender,
            buyer: m.sender,
            status: pesanyu,
            no_pembayaran: `${koderefe}`,
            ref_id: referdf,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: product_name,
            harga: "0",
            harga_modal: "0",
            tujuan: user_no,
            invoice: "Oops, Transaksi ini sudah dibatalkan oleh sistem",
        };
            GagalTru.push(NewGagalr);
    fs.writeFileSync(trxFilePath, JSON.stringify(GagalTru, null, 2), 'utf8');
setTimeout(() => {
sendEmailTrxCancele(sender, pushname, referdf, product_name, user_no, parsedHarga, pesanyu);
}, 500);
              AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, {text:`*KESALAHAN SISTEM*

> Layanan : ${product_name} 
> Message : ${error.response.data.data.message} 
> Customer : ${dengan_nol}`}, {Quoted: m})
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
   });
   setTimeout(() => {
                fs.unlinkSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`);
                }, 4000);
                setTimeout(() => {
    sett("deposit", m.sender, "")
                }, 6000);
                 } else if (dataStatus === "Canceled") {
               console.log(`Berhasil! Ref ${cek("deposit", m.sender)} Dihapus`)
                        }
                    }
                } catch (error) {
                    console.log(error);
                    
                }
            }

            makePayment();
} }
break;

}
case 'cektagihan':{
const fs = require('fs');
let md5 = require("md5");
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("status", m.sender) == false) return AnanthaGalau()
    
    let sku_pasca = q.split(" ")[0]
    let no_pasca = q.split(" ")[1]
    if (!sku_pasca || !no_pasca) {
        return reply(`*CEK & BAYAR TAGIHAN*

Gunakan:
*cektagihan sku_kode no_pelanggan*

Contoh:
*cektagihan PLNP 55555xxxx*`)
    }
    
    let ref_pasca = koderef
    let pasca = JSON.parse(fs.readFileSync('./SETTING/DB/dataPostpaid.json'));
    let layanan_pasca = ""
    
    for(let i of pasca) {
        if (i.buyer_sku_code == sku_pasca) {
            layanan_pasca = i.product_name;
            sett("desc_prabayar", m.sender, layanan_pasca);
            break;
        }
    }
    const crypto = require("crypto");
    const axios = require("axios");
    
    
    let signature = crypto.createHash('md5')
        .update(global.UsernameDF + global.APIkeyDF + ref_pasca)
        .digest('hex');
        
    var config = {
    method: 'POST',
    url: `https://${global.digiFlazz}/v1/transaction`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    data: JSON.stringify({
            "commands": "inq-pasca",
            "username": global.UsernameDF,
            "buyer_sku_code": sku_pasca,
            "customer_no": no_pasca,
            "ref_id": ref_pasca,
            "sign": signature
    })
};
     
    axios(config)
        .then(async response => {          
         console.log(response.data.data);
            if (response.data.data.status == "Sukses") {
const {
    lembar_tagihan,
    alamat,
    tarif,
    transaksi,
    kode_iuran,
    daya,
    jpk,
    tanggal_registrasi,
    jkk,
    kantor_cabang,
    tgl_efektif,
    kode_divisi,
    jkm,
    no_registrasi,
    jumlah_peserta,
    jht,
    jpn,
    npp,
    kode_program,
    tgl_expired,
    jatuh_tempo
} = response.data.data.desc;
const {
    customer_name,
    customer_no
} = response.data.data;
const { detail: [{ meter_awal, meter_akhir, biaya_lain }] } = response.data.data.desc;
const totalTagihan = parseInt(response.data.data.selling_price);
var periodeTagihan = response.data.data.desc.detail.map(detail => detail.periode);
var periodeTagihanFinal = periodeTagihan.join(", ");
let tgh = (totalTagihan - response.data.data.admin) * 1;
let admin = response.data.data.admin;
var denda = response.data.data.desc.detail.map(detail => detail.denda).reduce((acc, cur) => acc + cur * 1, 0);
await loading();
if (sku_pasca === "PLNP") {
    let Tagihanku = `
> ===================================
> |   DETAIL TAGIHAN                    
> ===================================
> | Layanan : ${layanan_pasca}                        
> | Nomor Pelanggan : ${customer_no || '-'}                    
> | Nama Pelanggan : ${customer_name || '-'}                  
> | Tarif : ${tarif || '-'}    
> | Daya : ${daya || '-'}                      
> ===================================
> | *Lembar Tagihan :* ${lembar_tagihan || '-'}
> | *Periode :* ${periodeTagihanFinal || '-'}
> | *Catatan:* Tagihan Tersedia 
> ===================================
> | *Denda :* ${formatmoney(denda)}
> | *Tagihan :* ${formatmoney(tgh)}
> | *Admin :* ${formatmoney(admin)}
> | *Total :* ${formatmoney(totalTagihan)}
> | *Meter Awal :* ${meter_awal || '-'}
> | *Meter Akhir :* ${meter_akhir || '-'}
> ===================================\n`
sendTagihan(Tagihanku);
} else if (sku_pasca === "PLNTGLIS") {
        let Tagihanku = `   
> ===================================
> |   DETAIL TAGIHAN                    
> ===================================
> | Layanan : ${layanan_pasca}                   
> | Nomor Pelanggan : ${customer_no || '-'}                    
> | Nama Pelanggan : ${customer_name || '-'}                  
> | Tarif : ${tarif || '-'}    
> | Daya : ${daya || '-'}                      
> ===================================
> | *Lembar Tagihan :* ${lembar_tagihan || '-'} 
> | *Transaksi :* ${transaksi || '-'}
> | *No Registrasi :* ${no_registrasi || '-'}
> | *Tanggal Registrasi :* ${tanggal_registrasi || '-'}
> ===================================
> | *Tagihan :* ${formatmoney(tgh)}
> | *Admin :* ${formatmoney(admin)}
> | *Total :* ${formatmoney(totalTagihan)}
> ===================================\n`
sendTagihan(Tagihanku);
} else if (["Indihome", "Inconnet", "CBN", "TELKOMPSTN", "MyRepublic"].includes(sku_pasca)) {
    let Tagihanku = `  
> ===================================
> |    DETAIL TAGIHAN                           
> ===================================
> | *Layanan :* ${layanan_pasca}     
> | *Nama Pelanggan :* ${customer_name || '-'}                  
> | *Id Pelanggan :* ${customer_no || '-'}   
> ===================================
> | *Lembar Tagihan :* ${lembar_tagihan || '-'} 
> | *Periode :* ${periodeTagihanFinal || '-'}
> | *Catatan :* Tagihan Tersedia 
> ===================================
> | *Tagihan :* ${formatmoney(tgh)}
> | *Admin :* ${formatmoney(admin)}
> | *Total :* ${formatmoney(totalTagihan)}
> ===================================\n`
sendTagihan(Tagihanku)
} else if (sku_pasca === "BPJSKES") {
    let Tagihanku = `  
> ===================================
> |   DETAIL TAGIHAN                  
> ===================================
> | Layanan : ${layanan_pasca}                       
> | Nomor Peserta : ${customer_no || '-'}                    
> | Nama Peserta : ${customer_name || '-'}                 
> | Jumlah Peserta : ${jumlah_peserta || '-'}       
> | *Alamat :* ${alamat || "-"}               
> ===================================
> | *Lembar Tagihan :* ${lembar_tagihan || '-'} 
> | *Periode :* ${periodeTagihanFinal || '-'}
> | *Catatan :* Tagihan Tersedia 
> ===================================
> | *Tagihan :* ${formatmoney(tgh)}
> | *Admin :* ${formatmoney(admin)}
> | *Total :* ${formatmoney(totalTagihan)}
> ===================================\n`
sendTagihan(Tagihanku)
} else if (sku_pasca === "BPJSKBPU") {
    let Tagihanku = `  
> ===================================
> |        DETAIL TAGIHAN                  
> ===================================
> | Layanan : ${layanan_pasca}               
> | Nomor Peserta : ${customer_no || '-'}                    
> | Nama Peserta : ${customer_name || '-'}                           
> ===================================
> | *Lembar Tagihan :* ${lembar_tagihan || '-'} 
> | *Kode Iuran :* ${kode_iuran || '-'} 
> | *Kode Program :* ${kode_program || '-'} 
> | *JKK :* ${jkk || '-'} 
> | *JKM :* ${jkm || '-'} 
> | *JHT :* ${jht || '-'} 
> | *Kantor Cabang :* ${kantor_cabang || '-'} 
> | *Tanggal Efektif :* ${tgl_efektif || '-'} 
> | *Tanggal Expired :* ${tgl_expired || '-'} 
> ===================================
> | *Tagihan :* ${formatmoney(tgh)}
> | *Admin :* ${formatmoney(admin)}
> | *Total :* ${formatmoney(totalTagihan)}
> ===================================\n`
sendTagihan(Tagihanku)
} else if (sku_pasca === "BPJSKPU") {
    let Tagihanku = `  
> ===================================
> |        DETAIL TAGIHAN                  
> ===================================
> | Layanan : ${layanan_pasca}                               
> | Nomor Peserta : ${customer_no || '-'}                    
> | Nama Peserta : ${customer_name || '-'}                 
> ===================================
> | *Lembar Tagihan :* ${lembar_tagihan || '-'} 
> | *Kode Iuran :* ${kode_iuran || '-'} 
> | *JHT :* ${formatmoney(jht || 0)}
> | *JKK :* ${formatmoney(jkk || 0)}
> | *JKM :* ${formatmoney(jkm || 0)}
> | *JPK :* ${formatmoney(jpk || 0)}
> | *JPN :* ${formatmoney(jpn || 0)}
> | *NPP :* ${npp || '-'} 
> | *Kode Divisi :* ${kode_divisi || '-'} 
> ===================================
> | *Tagihan :* ${formatmoney(tgh)}
> | *Admin :* ${formatmoney(admin)}
> | *Total :* ${formatmoney(totalTagihan)}
> ===================================\n`
sendTagihan(Tagihanku)
} else if (sku_pasca.startsWith('PDAM')) {
    let Tagihanku = `  
> ===================================
> |      DETAIL TAGIHAN                           
> ===================================
> | *Layanan:* ${layanan_pasca}    
> | *Nama Pelanggan:* ${customer_name || "-"}                  
> | *Id Pelanggan:* ${customer_no || "-"}   
> ===================================
> | *Lembar Tagihan :* ${lembar_tagihan || "-"} 
> | *Periode :* ${periodeTagihanFinal || "-"}
> | *Jatuh Tempo :* ${jatuh_tempo || "-"}
> | *Alamat :* ${alamat || "-"}
> | *Tarif :* ${tarif || "-"}
> | *Meter Awal :* ${meter_awal || "-"}
> | *Meter Akhir :* ${meter_akhir || "-"}
> | *Biaya Lain :* ${biaya_lain || "-"}
> | *Denda :* ${formatmoney(denda || 0)}
> ===================================
> | *Tagihan :* ${formatmoney(tgh)}
> | *Admin :* ${formatmoney(admin)}
> | *Total :* ${formatmoney(totalTagihan)}
> ===================================\n`
sendTagihan(Tagihanku)
} else if (sku_pasca === sku_pasca) {
    let Tagihanku = `  
> ===================================
> |           DETAIL TAGIHAN                           
> ===================================
> | *Layanan :* ${layanan_pasca} 
> | *Nama Pelanggan :* ${customer_name || '-'}                  
> | *Id Pelanggan :* ${customer_no || '-'}   
> ===================================
> | *Lembar Tagihan :* ${lembar_tagihan || '-'} 
> | *Periode :* ${periodeTagihanFinal || '-'}
> | *Catatan :* Tagihan Tersedia 
> ===================================
> | *Tagihan :* ${formatmoney(tgh)}
> | *Admin :* ${formatmoney(admin)}
> | *Total :* ${formatmoney(totalTagihan)}
> ===================================\n`
sendTagihan(Tagihanku)
}
let qc = JSON.stringify(response.data.data);
      fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Pascabayar/Inq-pasca/${ref_pasca}.json`, qc);
                setTimeout(() => {
                    sett("price", m.sender, response.data.data.selling_price);
                    sett("product_name", m.sender, response.data.data.customer_name);
                    sett("status", m.sender, false);
                    sett("tujuan", m.sender, response.data.data.customer_no);
                    sett("buyer_sku_code", m.sender, sku_pasca);
                    sett("desc_prabayar", m.sender, layanan_pasca);
                    sett("reff", m.sender, response.data.data.ref_id);
                    sett("layanan", m.sender, layanan_pasca);
                }, 2000);
            }
switch(response.data.data.rc) {
    case "60":
        reply("Oops, tagihan untuk bulan ini nggak ada nih! Coba lagi bulan depan ya :)")
        break;
    case "43":
        reply("Oops, *Kode SKU* tidak ada! pastikan sudah sesuai database kami ya :)")
        break;
    case "02":
        AnanthaGanz.sendMessage(from, { text: "Oops, Terjadi kendala di sistem! Coba lagi nanti :)" });
        break;
    case "54":
        AnanthaGanz.sendMessage(from, { text: "Oops, ID pelanggan kamu tidak terdaftar di penyedia layanan! Pastikan udah benar ya :)" });
        break;
}
        })
        .catch(error => {
    if (error.response) {
      console.log(error.response.data.data);
         let qc = JSON.stringify(error.response.data.data);
      fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Pascabayar/Gagal/${ref_pasca}.json`, qc);
      reply("Oops, Gagal dari sistem! silahkan hubungi cs :)")
      
setTimeout(() => {
      AnanthaGanz.sendMessage(ananthaa, { text: `Oops, ${error.response.data.data.message}`}, { Quoted: m })
      }, 1000);
                }
        });
}
break; 
case 'pay-tagihan': {
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
const crypto = require("crypto")
const axios = require("axios")
if(cek("reff", m.sender) == "") return reply(`Gagal, kamu belum melakukan *${prefix}cektagihan* yuk cek tagihan nya dulu...`)
let ru = `${sender.split('@')[0]}`
let total_tagihan = `${cek("price", m.sender)}` * 1
if(total_tagihan > cek("saldo", m.sender)) return reply(`Oops, Saldo tidak cukup! Isi dulu yuk :)`)
sett("-saldo", ru+"@s.whatsapp.net", total_tagihan) 
let ref_pasca = `${cek("reff", m.sender)}`
let signature = crypto.createHash('md5')
  .update(global.UsernameDF + global.APIkeyDF + ref_pasca)
  .digest('hex');

var config = {
  method: 'POST',  
  url: `https://${global.digiFlazz}/v1/transaction`,
  data: {
    "commands": "pay-pasca",
    "username": global.UsernameDF,
    "buyer_sku_code": `${cek("buyer_sku_code", m.sender)}`,
    "customer_no": `${cek("tujuan", m.sender)}`,
    "ref_id": ref_pasca,
    "sign": signature
}
};
axios(config)
  .then(async response => {   
await loading();
   if (response.data.data.status == "Gagal") 
              {           
              sett("+saldo", ru+"@s.whatsapp.net", total_tagihan) 
 AnanthaGanz.sendMessage(from, { text : `Oops, ${response.data.data.message}`})
 AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, {text:`🚨 *LAPORAN KESALAHAN TIDAK BERHASIL:*

Produk: ${cek("layanan", m.sender)} 
Kesalahan: ${response.data.data.message} 
Pelanggan: [Klik untuk chat](wa.me/${ru})`}, {Quoted: m})
              } else if (response.data.data.status == "Sukses") {
          let currentDate = moment.tz('Asia/Makassar');
          let tglll = currentDate.format('DD/MM/YYYY');
          let bulanskrg = currentDate.format('MMMM');
          let thun = currentDate.format('YYYY');
          let totalTagihan = parseInt(response.data.data.selling_price);
          let tgh = (totalTagihan - response.data.data.admin) * 1;
          let admin = response.data.data.admin;
          let periodeTagihan = response.data.data.desc.detail.map(detail => detail.periode);
          let periodeTagihanFinal = periodeTagihan.join(", ");
          setTimeout(() => {
            let doneTgh =  `    
> ===================================
> STRUK PEMBAYARAN
> ===================================
> Tanggal : ${tglll} ${bulanskrg} ${thun}
> Waktu : ${currentDate.format('HH:mm')}
> Nama Pelanggan : ${response.data.data.customer_name}
> Nomor Pelanggan : ${response.data.data.customer_no}     
> Layanan : ${cek("layanan", m.sender)} 
> ===================================
> Lembar Tagihan : ${response.data.data.desc.lembar_tagihan} 
> Periode : ${periodeTagihanFinal}
> ===================================
> Tagihan : ${formatmoney(tgh)}                       
> Admin : ${formatmoney(admin)}                                
> Total : ${formatmoney(totalTagihan)}
> ===================================
> Potongan : Rp 0
> Total Pembayaran : ${formatmoney(totalTagihan)}
> ===================================
> Nomor Seri : ${response.data.data.sn}
> ===================================
> Terima kasih telah melakukan pembayaran.
> Silakan simpan struk ini sebagai bukti pembayaran.\n`
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
                        title: doneTgh,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Cetak Struk","id":".print ${response.data.data.ref_id}"}` 
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

     AnanthaGanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }, { quoted: m });
          }, 3000);
          let qc = JSON.stringify(response.data.data);
          fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Pascabayar/Pay-pasca/${response.data.data.ref_id}.json`, qc)
          setTimeout(() => {
          AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, {
            text: `*LAPORAN PENDAPATAN*

> Customer : wa.me/${ru}
> Layanan : ${cek("layanan", m.sender)}
> Tujuan : ${response.data.data.customer_no}
> ID Trx : ${response.data.data.ref_id}
> Tagihan : ${formatmoney(totalTagihan)}
> Tanggal Penjualan : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}`
  }, {Quoted: m})
          }, 2000);
          const trxFilePath = './SETTING/DB/dataTrx.json';
          const trxUserData = JSON.parse(fs.readFileSync(trxFilePath, 'utf8'));
          const newTransaction = {
            buyer: m.sender,
            status: response.data.data.message,
            no_pembayaran: `${koderefe}`,
            ref_id: response.data.data.ref_id,
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            produk: `${cek("layanan", m.sender)}/ Nama : ${response.data.data.customer_name}`,
            harga: totalTagihan,
            harga_modal: response.data.data.price,
            tujuan: response.data.data.customer_no,
            invoice: response.data.data.sn,
          };
          trxUserData.push(newTransaction);
          fs.writeFileSync(trxFilePath, JSON.stringify(trxUserData, null, 2), 'utf8');
             setTimeout(() => {
                    sett("price", m.sender, 0);
                    sett("product_name", m.sender, "");
                    sett("status", m.sender, true);
                    sett("tujuan", m.sender, "");
                    sett("buyer_sku_code", m.sender, "");
                    sett("desc_prabayar", m.sender, "");
                    sett("reff", m.sender, "");
                    sett("layanan", m.sender, "");
                }, 4500);
      }
    })
    .catch(error => {
      if (error.response) {
            console.log(error.response.data.data)
                sett("+saldo", ru + "@s.whatsapp.net", total_tagihan);
                reply("Oops, Gagal dari sistem! silahkan hubungi cs :)")
                AnanthaGanz.sendMessage(`${owner}@s.whatsapp.net`, { text: `Oops, ${String(error.response.data.data.message)}` });
                setTimeout(() => {
                    sett("price", m.sender, 0);
                    sett("product_name", m.sender, "");
                    sett("status", m.sender, true);
                    sett("tujuan", m.sender, "");
                    sett("buyer_sku_code", m.sender, "");
                    sett("desc_prabayar", m.sender, "");
                    sett("reff", m.sender, "");
                    sett("layanan", m.sender, "");
                }, 2000);
            }
    });
}
break;
case 'prabayar': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    // Baca data customer_kode dari file JSON
    const dataProduk = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8'));
    
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
                        {"title": "PLN Listrik", "description": "Beli Token PLN", "id": ".plnkuu"},
                        {"title": "Pulsa, Data & Voucher", "description": "Beli Pulsa, Data & Voucher", "id": ".pulsa/data"},
                        {"title": "Topup Game", "description": "Mobile Legends, Free Fire, Pubg, etc", "id": ".gamekuu"},
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


case 'pulsa/data': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const buttonParamsJson = `{
        "title": "Pilih Varian Isi Ulang",
        "sections": [
            {
                "title": "Pilihan Isi Ulang",
                "rows": [
                    {"title": "Paket Internet", "description": "", "id": ".datakuotak"},
                    {"title": "Pulsa Reguler", "description": "", "id": ".pulsareguler"},
                    {"title": "Pulsa Transfer", "description": "", "id": ".pulsatransfer"},
                    {"title": "Voucher Data", "description": "", "id": ".voucherku"}
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
                        text: 'Mau Beli Varian isi ulang Apa Nih?'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Pilih Varian Isi Ulang',
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

case 'datakuotak': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const sections = [
        {
            title: "XL AXIATA",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "XL AXIATA", title: "Paket Internet", description: "", id: ".d-xl" }
            ]
        },
        {
            title: "SMARTFREN",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "SMARTFREN", title: "Paket Internet", description: "", id: ".d-smartfren" }
            ]
        },
        {
            title: "TELKOMSEL",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "TELKOMSEL", title: "Paket Internet", description: "", id: ".d-telkomsel" }
            ]
        },
        {
            title: "TRI",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "TRI", title: "Paket Internet", description: "", id: ".d-tri" }
            ]
        },
        {
            title: "INDOSAT",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "INDOSAT", title: "Paket Internet", description: "", id: ".d-indosat" }
            ]
        },
        {
            title: "by.U",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "by.U", title: "Paket Internet", description: "", id: ".d-by.u" }
            ]
        },
        {
            title: "AXIS",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "AXIS", title: "Paket Internet", description: "", id: ".d-axis" }
            ]
        }
    ];

    const buttonParamsJson = `{
        "title": "Pilih Kuota",
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
                        text: 'Mau Beli Kuota Apa Nih?'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Pilih Kuota',
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

case 'voucherku': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const sections = [
        {
            title: "XL AXIATA",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "XL AXIATA", title: "Voucher Data", description: "", id: ".v-xl" }
            ]
        },
        {
            title: "SMARTFREN",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "SMARTFREN", title: "Voucher Data", description: "", id: ".v-smartfren" }
            ]
        },
        {
            title: "TELKOMSEL",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "TELKOMSEL", title: "Voucher Data", description: "", id: ".v-telkomsel" }
            ]
        },
        {
            title: "TRI",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "TRI", title: "Voucher Data", description: "", id: ".v-tri" }
            ]
        },
        {
            title: "INDOSAT",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "INDOSAT", title: "Voucher Data", description: "", id: ".v-indosat" }
            ]
        },
        {
            title: "by.U",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "by.U", title: "Voucher Data", description: "", id: ".v-by.u" }
            ]
        },
        {
            title: "AXIS",
            highlight_label: "Terlaris +++",
            rows: [
                { header: "AXIS", title: "Voucher Data", description: "", id: ".v-axis" }
            ]
        }
    ];

    const buttonParamsJson = `{
        "title": "Pilih Voucher",
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
                            title: 'Pilih Voucher',
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
    let listmemb = JSON.parse(fs.readFileSync('./SETTING/DB/dataPelanggan.json'));

    // Membaca data riwayat transaksi dari file JSON
    const trxFilePath = './SETTING/DB/dataTrx.json';
    const trxFileData = fs.readFileSync(trxFilePath, 'utf8');
    const allTrxUserData = JSON.parse(trxFileData);

    // Membaca data riwayat deposit dari file JSON
    const depFilePath = './SETTING/DB/TRANSACTION/dataDeposit.json';
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
    let listmemb = JSON.parse(fs.readFileSync('./SETTING/DB/dataPelanggan.json'));

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
        const trxFilePath = './SETTING/DB/dataTrx.json';
        const trxFileData = fs.readFileSync(trxFilePath, 'utf8');
        const allTrxUserData = JSON.parse(trxFileData);

        // Membaca data riwayat deposit dari file JSON
        const depFilePath = './SETTING/DB/TRANSACTION/dataDeposit.json';
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

    const filePath = './SETTING/DB/dataTrx.json';
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

    const usersFilePath = './SETTING/DB/dataPelanggan.json';
    const trxFilePath = './SETTING/DB/dataTrx.json';
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
        let suksesCount = 0;
        let gagalCount = 0;

        userData.forEach(data => {
            totalHarga += parseFloat(data.harga);
            if (data.status === "Transaksi Sukses") {
                suksesCount++;
            } else {
                gagalCount++;
            }
        });

        const historyText = userData.map((data, index) => {
            let totale = data.harga * 1;
            let status;
            if (data.status === "Transaksi Sukses") {
                status = "Success";
            } else if (data.status === "Transaksi Gagal" || data.status === "Saldo tidak cukup") {
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
Total Pesanan Sukses : ${suksesCount}
Total Pesanan Gagal : ${gagalCount}
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

case 'pdam.': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const fs = require('fs');
    const productData = JSON.parse(fs.readFileSync('./SETTING/DB/dataPostpaid.json', 'utf8'));
    const requestedBrand = "PDAM";
    let desc = [...new Set(productData.filter(item => item.brand === requestedBrand).map(item => item.desc))];

    // Filter deskripsi yang bukan "-"
    desc = desc.filter(description => description !== "-");
    
    if (desc.length > 0) {
        let descList = desc.map(description => ({
            header: `${description}`,
            title: `PDAM ${description}`,
            description: `Powered by ${footer}`,
            id: `PDAM ${description}` // Generate an ID based on the description
        }));
        
        const buttonParamsJson = `{
            "title": "PDAM",
            "sections": [
                {
                    "title": "PDAM",
                    "rows": ${JSON.stringify(descList)}
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
                            text: `${toko}`
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: "Pilih PDAM ",
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
case 'voucher': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const productData = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8'));
    const requestedCategory = "Voucher";
    let brands = [...new Set(productData.filter(item => item.category === requestedCategory && !['by.U','INDOSAT','XL', 'TELKOMSEL','AXIS','SMARTFREN','TRI'].includes(item.brand)).map(item => item.brand))];

    if (brands.length > 0) {
        const sections = brands.map((brand) => {
            const rows = [
                {
                    header: `${brand}`,
                    title: `Voucher ${brand}`,
                    description: `Powered by ${footer}`,
                    id: `.list ${brand}`
                }
            ];
            const section = {
                title: brand,
                rows: rows
            };

            // Add highlight_label for UniPin and Garena
            if (brand === 'Unipin Voucher' || brand === 'GOOGLE PLAY INDONESIA' || brand === 'GOOGLE PLAY US REGION' || brand === 'WAVE GAME' || brand === 'Roblox' || brand === 'Razer Gold' || brand === 'GARENA') {
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
    
    const productData = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8'));
    const requestedCategory = "E-Money";
    const brands = [...new Set(productData.filter(item => item.category === requestedCategory).map(item => item.brand))];

    if (brands.length > 0) {
        const sections = brands.map((brand) => {
            const rows = [
                {
                    header: `${brand}`,
                    title: `E - Money ${brand}`,
                    description: `Powered by ${footer}`,
                    id: `.list ${brand}`
                }
            ];
            const section = {
                title: brand,
                rows: rows
            };

            // Add highlight_label for popular brands
            if (['dana', 'linkaja', 'go pay', 'shopee pay', 'ovo'].includes(brand.toLowerCase())) {
                section.highlight_label = "Populer +++";
            }

            return section;
        });

        // Add the "Bebas Nominal" section at the end
        sections.push({
            title: 'Bebas Nominal',
            rows: [
                {
                    header: `Bebas Nominal`,
                    title: `E - Money Dana, Ovo, etc`,
                    description: `Powered by ${footer}`,
                    id: `.bebas`
                }
            ]
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
case 'bebas': {
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
  if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
    // Membaca data customer_kode dari file JSON yang disimpan sebelumnya
    const productData = JSON.parse(
        fs.readFileSync('./SETTING/DB/dataPostpaid.json', 'utf8')
    );
     let text = "E-MONEY"
    // Mengubah merek yang diminta menjadi huruf kecil untuk konsistensi
    const requestedBrand = text.toLowerCase();

    // Memeriksa apakah pengguna menyertakan merek customer_kode
    if (!requestedBrand) return m.reply("Bro, kasih tau gw merek produknya dong.");

    // Mencocokkan customer_kode berdasarkan merek yang diminta
    const matchingProducts = productData.filter(item => item.brand.toLowerCase() === requestedBrand);

    // Jika tidak ada customer_kode yang cocok dengan merek yang diminta, beri tahu pengguna
    if (matchingProducts.length === 0) {
        return m.reply(`Gak ada nih merek ${requestedBrand.toUpperCase()}, coba merek lain ya.`);
    }


    // Membuat respons yang diformat dengan baik berdasarkan customer_kode yang ditemukan
    let formattedResponse = `*${requestedBrand.toUpperCase()}*\n\n`;
    matchingProducts.forEach(product => {
        const status = product.seller_product_status ? "Ready" : "Sold Out";
        const statusEmoji = product.seller_product_status ? "✅" : "❌";
       
        
        formattedResponse += `
≫ ${product.product_name}

> *Kode :* ${product.buyer_sku_code}
> *Status :* ${statusEmoji} ${status}
> *Deskripsi :* ${product.desc}
> *Cara Order :* Reply pesan ini dengan *${prefix}bebasnominal ${product.buyer_sku_code}|no_ewallet|nominal*

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
case 'pascabayar': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const productData = JSON.parse(fs.readFileSync('./SETTING/DB/dataPostpaid.json', 'utf8'));
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

     case 'list': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("cekVerify", m.sender) == true) return sendVerif();
    if (cek("syarat", m.sender) == true) return sendSyaratAnanthaa();

    const productData = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8'));
    const requestedBrand = text.toLowerCase();

    if (!requestedBrand) return m.reply("Oops, kamu belum input brand.");

    const matchingProducts = productData.filter(item => item.brand.toLowerCase() === requestedBrand);

    if (matchingProducts.length === 0) {
        return m.reply(`Gak ada nih merek ${requestedBrand.toUpperCase()}, coba merek lain ya.`);
    }

    matchingProducts.sort((a, b) => a.price - b.price);

    const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8'));

    let productButtons = matchingProducts.map(product => {
        const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
        const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
        const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
        let stock_display = product.stock === 0 ? "∞" : product.stock;
        const priceFormatted = formatmoney(product.price);

        return {
            title: `${product.product_name} ${statusEmoji}`,
            description: `${formatmoney(priceFormatted)}`,
            id: `.detail ${product.buyer_sku_code}`
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
  case 'pdam': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    // Membaca data customer_kode dari file JSON yang disimpan sebelumnya
    const productData = JSON.parse(
        fs.readFileSync('./SETTING/DB/dataPostpaid.json', 'utf8')
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
case 'list2': {
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    // Membaca data customer_kode dari file JSON yang disimpan sebelumnya
    const productData = JSON.parse(
        fs.readFileSync('./SETTING/DB/dataPostpaid.json', 'utf8')
    );

    // Mengubah merek yang diminta menjadi huruf kecil untuk konsistensi
    const requestedBrand = text.toLowerCase();

    // Memeriksa apakah pengguna menyertakan merek customer_kode
    if (!requestedBrand) return m.reply("Oops, kamu belum input brand.");

    // Mencocokkan customer_kode berdasarkan merek yang diminta
    const matchingProducts = productData.filter(item => item.brand.toLowerCase() === requestedBrand);

    // Jika tidak ada customer_kode yang cocok dengan merek yang diminta, beri tahu pengguna
    if (matchingProducts.length === 0) {
        return m.reply(`Gak ada nih merek ${requestedBrand.toUpperCase()}, coba merek lain ya.`);
    }


    // Membuat respons yang diformat dengan baik berdasarkan customer_kode yang ditemukan
    let formattedResponse = `*${requestedBrand.toUpperCase()}*\n\n`;
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

case 'depoin': {
  let axios = require('axios')
  // Cek kalo lagi di grup, kalo iya, kasih tau kalo ini privat
  if (m.isGroup) return m.reply(mess.private);
  // Cek dulu, nih, kalo kamu bukan bos, ya udah bilang ke kamu kalo kamu bukan bos
  if (!isOwner) return m.reply(mess.owner);

  // Pisahin pesan berdasarkan titik
  const textParts = text.split(".");
  // Kalo ga ada 3 bagian, beri tahu cara menggunakan fitur ini
  if (textParts.length !== 3) {
    return m.reply(`*DEPO DIGIFLAZZ*\n\nNih caranya, tulis begini ya:\n\n.depoin [Jumlah Uang].[Nama Rekening].[Kode Bank]\n\nContoh:\n.depoin 200000.PT REVOLUSI DIGITAL BANGSA.BRI\n\nKode Bank yang tersedia:\n- BCA\n- MANDIRI\n- BRI\n- BNI`);
  }

  // Ambil nilai nominal, nama rekening, dan kode bank dari pesan
  const [nominal, namaRekening, kodeBank] = textParts;

  // Kalo ada yang kosong, kasih tau cara benerinnya
  if (!nominal || !namaRekening || !kodeBank) {
    return m.reply(`*Deposit Yuk!*\n\nNih caranya, tulis begini ya:\n\n.depoin [Jumlah Uang].[Nama Rekening].[Kode Bank]\n\nContoh:\n.depoin 200000.PT REVOLUSI DIGITAL BANGSA.BRI\n\nKode Bank yang tersedia:\n- BCA\n- MANDIRI\n- BRI\n- BNI`);
  }

  // Buat tanda tangan menggunakan username, API key, dan kata kunci "deposit"
  const signature = crypto.createHash('md5')
    .update(`${global.UsernameDF}${global.APIkeyDF}deposit`)
    .digest('hex');

  // Ubah nominal ke format angka bulat
  const amount = parseInt(nominal);
  // Data yang akan dikirim ke API untuk deposit
  const requestData = {
    "username": String(global.UsernameDF),
    "amount": amount,
    "bank": String(kodeBank),
    "owner_name": String(namaRekening),
    "sign": String(signature)
  };

  // Konfigurasi untuk mengirim permintaan ke API
  const config = {
    method: 'POST',
    url: 'https://api.digiflazz.com/v1/deposit',
    data: requestData
  };

  // Kirim permintaan ke API Digiflazz
  axios(config)
    .then(async response => {
      m.reply(mess.wait);

      // Tanggapi balasan dari API
      const depositData = response.data.data;
      let rekening = depositData.rc;

      // Ubah nomor rekening sesuai dengan kode bank yang dipilih
      switch (kodeBank) {
        case 'BCA':
          rekening = '6042888890';
          break;
        case 'MANDIRI':
          rekening = '1550009910111';
          break;
        case 'BRI':
          rekening = '213501000291307';
          break;
        case 'BNI':
          rekening = '1996888992';
          break;
      }

      // Tunggu sebentar sebelum memberikan balasan
      setTimeout(() => {
        m.reply(`Yuk, Langsung aja transfer ke Rekening Digiflazz :\n\nRekening Bank ${kodeBank}: ${rekening}\n\nAtas Nama *DIGIFLAZZ INTERKONEKSI INDONESIA*\n\nTotal Deposit : Rp ${depositData.amount}\nCatatan : ${depositData.notes}`);
      }, 1000);
    })
    .catch(error => {
      // Tanggapan jika permintaan gagal
      if (error.response) {
        m.reply(`*Oops! Gagal nih!*\n\n› Pesan: ${String(error.response.data.data.message)}`);
      }
    });
  break;
}


case 'margin':
    if (m.isGroup) return m.reply(mess.private);
    if (!isOwner) return m.reply(mess.owner);

    const newData = JSON.parse(fs.readFileSync("./SETTING/DB/untung.json"));

    if (text) {
        const newMargin = text.split(" ")[0]
        if (isNaN(newMargin)) {
            return reply("Format salah, bro. Harusnya : margin <nilai_margin>");
        }

        newData[0].keuntungan = newMargin;

        // Simpan ke file JSON
        fs.writeFileSync('./SETTING/DB/untung.json', JSON.stringify(newData));
        reply(`Yeay, harga produk udah disetel jadi ${newMargin}%`);

        // Delay antara setiap pemanggilan fungsi untuk memberikan jeda waktu   
        setTimeout(() => {
            const updd = JSON.parse(fs.readFileSync("./SETTING/DB/untung.json"));
            let up = updd[0].keuntungan;
            getProduk(global.UsernameDF, global.APIkeyDF, up);
        }, 1000); // Jeda 1 detik
        setTimeout(() => {
            const updd = JSON.parse(fs.readFileSync("./SETTING/DB/untung.json"));
            let up3 = updd[0].keuntungan;
            getPasca(global.UsernameDF, global.APIkeyDF, up3);
        }, 6000); // Jeda 3 detik 
        setTimeout(() => {
            const updd = JSON.parse(fs.readFileSync("./SETTING/DB/untung.json"));
            let up2 = updd[0].keuntungan;
            getHarga(global.UsernameDF, global.APIkeyDF, up2);
        }, 8000); // Jeda 7 detik
    } else {
        const currentMargin = newData[0].keuntungan;
        reply(`Margin harga sekarang : ${currentMargin}%`);
    }
    break;
    case 'addharga': {
    if (!isOwner) return reply(mess.owner);
    const args = text.split(' ')[0];
    const args1 = text.split(' ')[1];
    if (!args || !args1) {
        reply(`Contoh: ${prefix}addharga <category> <price_increase>`);
        return;
    }
    const category = args;
    const priceIncrease = parseFloat(args1);
    if (isNaN(priceIncrease)) {
        reply("Gagal, Masukan Jumlah Harga Baru Untuk Ditambahkan");
        return;
    }
    let jsonData;
    try {
        jsonData = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8'));
    } catch (error) {
        reply("Error reading 'dataPrepaid.json': " + error.message);
        return;
    }
    let updated = false;
    let product;
    for (product of jsonData) {
        if (product.category === category) {
            // Menghitung penambahan harga dengan persentase
            const priceIncreasePercent = (priceIncrease / 100) * product.price;
            // Menambahkan harga dengan persentase
            product.price += priceIncreasePercent;
            updated = true;
        }
    }
    if (updated) {
        fs.writeFileSync('./SETTING/DB/dataPrepaid.json', JSON.stringify(jsonData, null, 2), 'utf8');
        reply(`Harga Semua Produk Dengan Category ${category} Sukses Diperbarui`);
    } else {
        reply(`Produk Dengan Category ${category} Tidak Ditemukan`);
    }

    break;
}
case 'addbrand': {
    if (!isOwner) return reply(mess.owner);
    const args = text.split('"')[1];
    const args1 = text.split('"')[2];
    if (!args || !args1) {
        reply(`Contoh: ${prefix}addharga "<brand>" <price_increase>`);
        return;
    }
    const brand = args;
    const priceIncrease = parseFloat(args1);
    if (isNaN(priceIncrease)) {
        reply("Gagal, Masukan Jumlah Harga Baru Untuk Ditambahkan");
        return;
    }
    let jsonData;
    try {
        jsonData = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8'));
    } catch (error) {
        reply("Error reading 'dataPrepaid.json': " + error.message);
        return;
    }
    let updated = false;
    for (let product of jsonData) {
        if (product.brand === brand) {
            // Menghitung penambahan harga dengan persentase
            const priceIncreaseAmount = (priceIncrease / 100) * product.price;
            // Menambahkan harga dengan persentase
            product.price += priceIncreaseAmount;
            updated = true;
        }
    }
    if (updated) {
        fs.writeFileSync('./SETTING/DB/dataPrepaid.json', JSON.stringify(jsonData, null, 2), 'utf8');
        reply(`Harga Semua Produk Dengan Brand "${brand}" Sukses Diperbarui`);
    } else {
        reply(`Produk Dengan Brand "${brand}" Tidak Ditemukan`);
    }

    break;
}
case 'update_all':
  if (m.isGroup || !isOwner) return m.reply(m.isGroup ? mess.private : mess.owner);
  const updateData = JSON.parse(fs.readFileSync("./SETTING/DB/untung.json"))[0].keuntungan;
  
  // Update data secara paralel dengan Promise.all()
  Promise.all([
    new Promise((resolve) => setTimeout(() => {
      getPasca(global.UsernameDF, global.APIkeyDF, updateData);
      resolve();
    }, 2000)),
    new Promise((resolve) => setTimeout(() => {
      getProduk(global.UsernameDF, global.APIkeyDF, updateData);
      resolve();
    }, 4000)), // Penundaan 2 detik dari sebelumnya
    new Promise((resolve) => setTimeout(() => {
      getHarga(global.UsernameDF, global.APIkeyDF, updateData);
      resolve();
    }, 7000)), // Penundaan 3 detik dari sebelumnya
  ]).then(() => reply("Sip, Berhasil Update"));

  break;
case 'update_seller':
  if (m.isGroup) return m.reply(mess.private);
  if (!isOwner) return m.reply(mess.owner);

  const updateSeller = JSON.parse(fs.readFileSync("./SETTING/DB/untung.json"));
  let up = updateSeller[0].keuntungan;

  // Menunda pemanggilan fungsi getHarga selama 5 detik
  setTimeout(() => {
    getHarga(global.UsernameDF, global.APIkeyDF, up);
    }, 5000); // Penundaan 5 detik
    reply("Sip, Berhasil Update Seller");

  break;

case 'update_prabayar':
 if (m.isGroup || !isOwner) return m.reply(m.isGroup ? mess.private : mess.owner);

  const updatePrabayar = JSON.parse(fs.readFileSync("./SETTING/DB/untung.json"));
  let up2 = updatePrabayar[0].keuntungan;

  // Menunda pemanggilan fungsi getProduk selama 5 detik
  setTimeout(() => {
    getProduk(global.UsernameDF, global.APIkeyDF, up2);
      }, 10000); // Penundaan 5 detik
    reply("Sip, Berhasil Update Prabayar");
  break;

case 'update_pascabayar':
  if (m.isGroup) return m.reply(mess.private);
  if (!isOwner) return m.reply(mess.owner);

  const updatePasca = JSON.parse(fs.readFileSync("./SETTING/DB/untung.json"));
  let up3 = updatePasca[0].keuntungan;
  getPasca(global.UsernameDF, global.APIkeyDF, up3);

  reply("Sip, Berhasil Update Pascabayar");
  break;
case 'balance': {
  if (m.isGroup || !isOwner) return m.reply(m.isGroup ? mess.private : mess.owner);

  const crypto = require("crypto");
  const axios = require("axios");
  const third = 'depo';
  const hash = crypto.createHash('md5').update(global.UsernameDF + global.APIkeyDF + third).digest('hex');

  const config = {
    method: 'POST',
    url: 'https://api.digiflazz.com/v1/cek-saldo',
    data: {
      "cmd": "deposit",
      "username": global.UsernameDF,
      "sign": hash
    }
  };

  axios(config)
    .then(response => {
      if (response.data.data) {
        const profile = response.data.data;
        const df = `Saldo Digiflazz anda : *${formatmoney(profile.deposit)}*.`;
        m.reply(df);
      } else {
        console.log("Failed to get API data.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      console.log("Failed to make API request.");
    });
}
break;
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
    fs.writeFileSync("./SETTING/DB/data.json", responseData);
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
    let dataBank = JSON.parse(fs.readFileSync('./SETTING/DB/data.json'));
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

    let senderName = sender.split('@')[0];
    if (fs.existsSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`)) return AnanthaGalauV();

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

    fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`, JSON.stringify(depositData));
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

    let qtt = { url: 'https://telegra.ph/file/72ef76e0411572b1dd6cb.jpg' };
    AnanthaGanz.sendMessage(from, { image: qtt, caption: depositInfoMessage }, { quoted: m });

    setTimeout(() => {
        let notif = `*Tiket Deposit Manual*\n\nHalo *${ownername}*,\nAda tiket deposit manual baru yang dibuat!\n\nDetail Tiket :\n> Member : ${senderName}\n> Referensi : ${referenceNumber}\n> Berita Transfer : ${beritatf}\n> Jumlah : ${formatmoney(depositAmount)}\n> Kode Unik : ${referenceNumber}\n> Total Transfer QRIS : ${formatmoney(totalPaymentQRIS)}\n> Total Transfer Lainnya : ${formatmoney(totalPaymentOther)}\n\n> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}\n*JIKA KAMU MENERIMA UANG\n Silahkan Klik Tombol dibawah`;

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
case 'deposit': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()

    const sections = [
        {
            title: 'E-Wallet & Qris',
            rows: [
                {
                    header: '',
                    title: 'E-Wallet & Qris',
                    description: 'Deposit menggunakan E-Wallet dan QRIS',
                    id: '.e-wallet'
                }
            ]
        },
        {
            title: 'Virtual Account',
            rows: [
                {
                    header: '',
                    title: 'Virtual Account',
                    description: 'Deposit menggunakan Virtual Account untuk Collector Z',
                    id: '.virtual'
                }
            ]
        },
        {
            title: 'Convenience Store',
            rows: [
                {
                    header: '',
                    title: 'Convenience Store',
                    description: 'Deposit di Alfamart, Indomaret',
                    id: '.convenience'
                }
            ]
        },
        {
            title: 'Pulsa',
            rows: [
                {
                    header: '',
                    title: 'Pulsa Convert',
                    description: 'Deposit menggunakan pulsa untuk Collector Z',
                    id: '.pulsa'
                }
            ]
        },
        {
            title: 'Manual',
            rows: [
                {
                    header: '',
                    title: 'Manual',
                    description: 'Deposit manual acc admin',
                    id: '.manual.'
                }
            ]
        }
    ];

    // Add highlight_label for all sections except 'Manual'
    sections.forEach(section => {
        if (section.title !== 'Manual') {
            section.highlight_label = "24 Jam";
        }
    });

    const buttonParamsJson = `{
        "title": "Pilih Metode Deposit",
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
                        text: 'Silakan pilih metode deposit:'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Metode Deposit',
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

case 'pulsa': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`);

    const sections = [
        {
            title: 'Metode Pulsa',
            rows: [
                {
                    title: 'XL',
                    description: 'Deposit Menggunakan Pulsa XL',
                    id: 'XL.'
                },
                {
                    title: 'TELKOMSEL',
                    description: 'Deposit Menggunakan Pulsa TELKOMSEL',
                    id: 'TELKOMSEL.'
                },
                {
                    title: 'AXIS',
                    description: 'Deposit Menggunakan Pulsa AXIS',
                    id: 'AXIS.'
                },
                {
                    title: 'THREE',
                    description: 'Deposit Menggunakan Pulsa THREE',
                    id: 'THREE.'
                }
            ]
        }
    ];

    const buttonParamsJson = `{
        "title": "Pilih Metode Pulsa",
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
                        text: 'Silakan pilih metode pulsa:'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Metode Pulsa',
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
case 'e-wallet': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
      if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()

    const sections = [
        {
            title: 'Metode E-Wallet',
            rows: [
                { title: 'Qris', description: 'Pembayaran melalui Qris', id: 'Qris.' },
                { title: 'Dana', description: 'Pembayaran melalui Dana', id: 'Dana.' },
                { title: 'LinkAja', description: 'Pembayaran melalui LinkAja', id: 'LinkAja.' },
                { title: 'Shopeepay', description: 'Pembayaran melalui Shopeepay', id: 'Shopeepay.' },
                { title: 'Gopay', description: 'Pembayaran melalui Gopay', id: 'Gopay.' },
                { title: 'Ovo', description: 'Pembayaran melalui Ovo', id: 'Ovo.' }
            ]
        }
    ];

    const buttonParamsJson = `{
        "title": "Pilih Metode E-Wallet",
        "sections": ${JSON.stringify(sections)},
        "highlight_label": "24 Jam"
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
                        text: 'Silakan pilih metode e-wallet:'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Metode E-Wallet',
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

case 'convenience': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()

    const sections = [
        {
            title: 'Metode Convenience Store',
            rows: [
                { title: 'Alfamart', description: 'Pembayaran melalui Alfamart', id: 'Alfamart' },
                { title: 'Indomaret', description: 'Pembayaran melalui Indomaret', id: 'Indomaret' }
            ]
        }
    ];

    const buttonParamsJson = `{
        "title": "Pilih Metode Convenience Store",
        "sections": ${JSON.stringify(sections)},
        "highlight_label": "24 Jam"
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
                        text: 'Silakan pilih metode convenience store:'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Metode Convenience Store',
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
case 'virtual': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const sections = [
        {
            title: 'Metode Virtual Account',
            rows: [
                { title: 'BCA', description: 'Pembayaran melalui BCA Virtual Account', id: 'BCA VIRTUAL ACCOUNT' },
                { title: 'BNI', description: 'Pembayaran melalui BNI Virtual Account', id: 'BNI VIRTUAL ACCOUNT' },
                { title: 'Mandiri', description: 'Pembayaran melalui Mandiri Virtual Account', id: 'MANDIRI VIRTUAL ACCOUNT' },
                { title: 'BRI', description: 'Pembayaran melalui BRI Virtual Account', id: 'BRI VIRTUAL ACCOUNT' },
                { title: 'BSI', description: 'Pembayaran melalui BSI Virtual Account', id: 'BSI VIRTUAL ACCOUNT' },
                { title: 'Neo Bank', description: 'Pembayaran melalui Neo Bank Virtual Account', id: 'NEO BANK VIRTUAL ACCOUNT' },
                { title: 'CIMB Niaga', description: 'Pembayaran melalui CIMB Niaga Virtual Account', id: 'CIMB NIAGA VIRTUAL AKUN' },
                { title: 'Permata', description: 'Pembayaran melalui Permata Virtual Account', id: 'PERMATA VIRTUAL ACCOUNT' },
                { title: 'Danamon', description: 'Pembayaran melalui Danamon Virtual Account', id: 'DANAMON VIRTUAL ACCOUNT' },
                { title: 'Maybank', description: 'Pembayaran melalui Maybank Virtual Account', id: 'MAYBANK VIRTUAL ACCOUNT' },
                { title: 'Bank OCBC', description: 'Pembayaran melalui Bank OCBC Virtual Account', id: 'OCBC VIRTUAL ACCOUNT' },
                 { title: 'Bank Muamalat', description: 'Pembayaran melalui Bank Muamalat Virtual Account', id: 'Muamalat VIRTUAL ACCOUNT' }
            ]
        }
    ];

    const buttonParamsJson = `{
        "title": "Pilih Metode Virtual Account",
        "sections": ${JSON.stringify(sections)},
        "highlight_label": "24 Jam"
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
                        text: 'Silakan pilih metode virtual account:'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Pilih dari daftar berikut:'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: 'Metode Virtual Account',
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
case 'alfamart': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    
    const sections = [
        {
            title: 'Nominal Cepat',
            rows: [
                { header: "ALFAMART", title: "Rp 50.000", id: "ALFA 50000" },
                { header: "ALFAMART", title: "Rp 100.000", id: "ALFA 100000" },
                { header: "ALFAMART", title: "Rp 200.000", id: "ALFA 200000" },
                { header: "ALFAMART", title: "Rp 500.000", id: "ALFA 500000" },
                { header: "ALFAMART", title: "Nominal Lainnya", id: "ALFA" }
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

break;

case 'indomaret': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
         if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    
    const sections = [
        {
            title: 'Nominal Cepat',
            rows: [
                { header: "INDOMARET", title: "Rp 50.000", id: "INDO 50000" },
                { header: "INDOMARET", title: "Rp 100.000", id: "INDO 100000" },
                { header: "INDOMARET", title: "Rp 200.000", id: "INDO 200000" },
                { header: "INDOMARET", title: "Rp 500.000", id: "INDO 500000" },
                { header: "INDOMARET", title: "Nominal Lainnya", id: "INDO" }
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

break;

case 'bayar': {
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if (!fs.existsSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`)) {
        AnanthaGanz.sendMessage(from, { text: "Oops! Sepertinya belum ada Invoice yang tersedia saat ini.." }, { quoted: m });
    } else {
        const depositData = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`));
        const paymentUrl = checkIdDepo(m.sender, depositData) ? checkIdDepo(m.sender, depositData) : depositData.url;
        reply(`Sip, Ini Link Pembayaran Buat kamu & jangan lupa bayar tepat waktu ya!\n\n${paymentUrl} `);
    }
    break;
}

case 'qriss': {
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
let send = `${sender.split('@')[0]}`
  let axios = require('axios');
  let FormData = require('form-data');
  let md5 = require('md5');
let minimal = '100' * 1// SETT MIN DEPO
let max = '5000000' * 1 // SETT MAX DEPO
 if(fs.existsSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`)) return AnanthaGalauV() 
let request_depo = q.split(" ")[0]
let total = `${request_depo}` * 1
      if (isNaN(request_depo)) {
        reply("Oops, deposit harus berupa angka bukan simbol/selain angka");
        return;
    }
if (!request_depo) return reply(`Oops, format salah, ikuti yang bener yuk :\n\nContoh: ${prefix + command} 5000`)
if (total < minimal) return m.reply(`Oops, minimal deposit adalah ${formatmoney(minimal)}`)
if (total > max) return m.reply(`Oops, Maximal deposit adalah ${formatmoney(max)}`)
  async function makePayment() {
    try {
      let keynya = global.PayDisiniKey;
      let kodeunick = koderefe
      let paymetcod = '11';
      let aomut = total * 1;
      let exp = 10800;
      let create = keynya + kodeunick + paymetcod + aomut + exp + 'NewTransaction'
      let signature = md5(create);
      // Membuat data form untuk permintaan pembayaran
      var paymentData = new FormData();
      paymentData.append('key', keynya);
      paymentData.append('request', 'new');
      paymentData.append('merchant_id', '71');
      paymentData.append('unique_code', kodeunick);
      paymentData.append('service', paymetcod);
      paymentData.append('amount', aomut);
      paymentData.append('note', `DEPOSIT ${pushname}`);
      paymentData.append('valid_time', exp);
      paymentData.append('customer_email', cek("email", m.sender));
      paymentData.append('type_fee', '1');
      paymentData.append('signature', signature); // Menggunakan signature yang telah dihitung

      // Konfigurasi untuk permintaan pembayaran
      var paymentConfig = {
        method: 'post',
        url: 'https://paydisini.co.id/api/',
        headers: { 
          ...paymentData.getHeaders()
        },
        data: paymentData
      };

      // Mengirim permintaan pembayaran
      let paymentResponse = await axios(paymentConfig);
            let paymentDataResponse = paymentResponse.data.data;
                   if (!paymentDataResponse || !paymentDataResponse || typeof paymentDataResponse.unique_code === 'undefined') {
        reply(`Oops, ${paymentResponse.data.msg}`)
            console.error(paymentResponse.data.msg);
            return;
        }
          let obj = { id: m.sender, ref: `${paymentDataResponse.unique_code}`, method : `${paymentDataResponse.service_name}`, diterima: `${paymentDataResponse.balance}`, total: `${paymentDataResponse.amount}`, fee: `${paymentDataResponse.fee}`, url: `${paymentDataResponse.checkout_url_v2}` }
          sett("deposit", m.sender, `${paymentDataResponse.unique_code}`)
fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`, JSON.stringify(obj))
     await loading();
          
          
     let ccapt = `  *PEMBAYARAN OTOMATIS*

> Metode : ${paymentDataResponse.service_name}
> Referensi : ${paymentDataResponse.unique_code}
> Berlaku : ${getExpirationTime()} menit
> Total Diterima : ${formatmoney(paymentDataResponse.balance)}
> Fee : ${formatmoney(paymentDataResponse.fee)}
> Total Pembayaran : ${formatmoney(paymentDataResponse.amount)}
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
 title: ccapt,
 subtitle: `Secure payment by ${footer}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `${paymentDataResponse.qrcode_url}` } }, { upload: AnanthaGanz.waUploadToServer }))
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

setTimeout(() => {
const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
               let url = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.url}`
               sendEmailPending(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender, url);
               }, 2500);
let unick = paymentDataResponse.unique_code
function getExpirationTime() {
    const currentTime = new Date().getTime();
    const expirationTime = currentTime + (10 * 60 * 1000); // 30 menit kedepan
    const timeRemaining = Math.ceil((expirationTime - currentTime) / 60000); // Konversi ke menit dan dibulatkan ke atas
    return timeRemaining;
}
      // Memantau status pembayaran
      let dataStatus = paymentDataResponse.status;
      const startTime = new Date().getTime();
      while (dataStatus !== "Success") {
        await sleep(1000);
       let create3 = keynya + unick + 'StatusTransaction'
      let signature3 = md5(create3);
        var checkStatusData = new FormData();
        checkStatusData.append('key', keynya);
        checkStatusData.append('request', 'status');
        checkStatusData.append('unique_code', unick);
        checkStatusData.append('signature', signature3); 
        // Konfigurasi untuk memeriksa status pembayaran
        var checkStatusConfig = {
          method: 'post',
          url: 'https://paydisini.co.id/api/',
          headers: { 
            ...checkStatusData.getHeaders()
          },
          data: checkStatusData
        };
        // Mengirim permintaan untuk memeriksa status pembayaran
        let statusResponse = await axios(checkStatusConfig);
        let statusDataResponse = statusResponse.data.data;
        dataStatus = statusDataResponse.status;
        console.log(dataStatus);
        // Memeriksa waktu timeout
        const currentTime = new Date().getTime();
        const elapsedTime = (currentTime - startTime) / (1000 * 60 * 10);
              if (elapsedTime >= 1) {
              cancelPay();
              m.reply(`Upss, tiket ${cek("deposit", m.sender)} udah gak berlaku nih. Yuk, buat yang baru!`);
          break;
        }
        // Jika pembayaran berhasil
        if (dataStatus === "Success") {
          const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
const depoFilepAth = './SETTING/DB/TRANSACTION/dataDeposit.json';
    const depoUser = JSON.parse(fs.readFileSync(depoFilepAth, 'utf8'));
        const newDepo = {
            buyer: m.sender,
            status: "PAID",
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            no_pembayaran: `${ref_sender}`,
            method: `${method}`,
            jumlah: `${price_sender}`,
            fee: `${fee_sender}`,
            total: `${total_sender}`,
            
        };
            depoUser.push(newDepo);
    fs.writeFileSync(depoFilepAth, JSON.stringify(depoUser, null, 2), 'utf8');
    sendEmailDepo(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender);
                setTimeout(() => {
let notif = `Hai *${ownername}*,
Ada transaksi yang telah dibayar!

Member : ${dengan_nol}
Kode Unik : ${ref_sender}
Metode Pembayaran : ${method}
Jumlah Deposit : ${formatmoney(price_sender)}
Biaya Admin : ${formatmoney(fee_sender)}
Total Deposit : ${formatmoney(total_sender)}
Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Detail transaksi dapat dilihat pada website 
`
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
                    title: notif,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "DETAIL PEMBAYARAN",
                                "url": "https://web.paydisini.co.id/Riwayat-Transaksi/?status==&unique_code=${ref_sender}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                })
            })
        }
    }
}, {});

AnanthaGanz.relayMessage(`${owner}@s.whatsapp.net`, msg.message, {
    messageId: msg.key.id
    }, {quoted: m});
   }, 2000); // 2000 milliseconds (3 seconds)
                const capt = `*Pembayaran Berhasil*

Payment Details  :

› *Metode :* ${method}
› *Referensi :* ${ref_sender}
› *Jumlah :* ${formatmoney(price_sender)}
› *Fee :* ${formatmoney(fee_sender)}
› *Total :* ${formatmoney(total_sender)}

Information :
Pengisian saldo berhasil! Terima kasih atas transaksinya.
`

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
                    title: capt,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"DEPOSIT LAGI","id":".deposit"}`
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
    }, {quoted: m});
                sett("+saldo", member, price_sender)           
                setTimeout(() => {
                fs.unlinkSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`);
                }, 4000);
                setTimeout(() => {
    sett("deposit", m.sender, "")
                }, 6000);
                } else if (dataStatus === "Canceled") {
               console.log(`Berhasil! Ref ${cek("deposit", m.sender)} Dihapus`)
          break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  // Memanggil fungsi untuk melakukan pembayaran
  makePayment();
}
break;
case 'indo':
case 'alfa': {
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
let send = `${sender.split('@')[0]}`
  let axios = require('axios');
  let FormData = require('form-data');
  let md5 = require('md5');
let minimal = '15000' * 1// SETT MIN DEPO
let max = '2500000' * 1 // SETT MAX DEPO
 if(fs.existsSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`)) return AnanthaGalauV() 
let request_depo = q.split(" ")[0]
let total = `${request_depo}` * 1
  if (isNaN(request_depo)) {
        reply("Oops, deposit harus berupa angka bukan simbol/selain angka");
        return;
    }
if (!request_depo) return reply(`Oops, format salah, ikuti yang bener yuk :\n\nContoh: ${prefix + command} 5000`)
if (total < minimal) return m.reply(`Oops, minimal deposit adalah ${formatmoney(minimal)}`)
if (total > max) return m.reply(`Oops, Maximal deposit adalah ${formatmoney(max)}`)
  async function makePayment() {
    try {
      let keynya = global.PayDisiniKey;
     let kodeunick = koderefe
      let paymetcod;
     if (command === 'alfa') {
                paymetcod = '18'; // 
    } else if (command === 'indo') {
                paymetcod = '19'; 
            }
      let aomut = total * 1;
      let exp = 10800;
      let create = keynya + kodeunick + paymetcod + aomut + exp + 'NewTransaction'
      let signature = md5(create);
      // Membuat data form untuk permintaan pembayaran
      var paymentData = new FormData();
      paymentData.append('key', keynya);
      paymentData.append('request', 'new');
      paymentData.append('unique_code', kodeunick);
      paymentData.append('service', paymetcod);
      paymentData.append('amount', aomut);
      paymentData.append('note', `Penambahan Saldo ID : ${dengan_nol}`);
      paymentData.append('valid_time', exp);
      paymentData.append('customer_email', cek("email", m.sender));
      paymentData.append('type_fee', '1');
      paymentData.append('signature', signature); // Menggunakan signature yang telah dihitung

      // Konfigurasi untuk permintaan pembayaran
      var paymentConfig = {
        method: 'post',
        url: 'https://paydisini.co.id/api/',
        headers: { 
          ...paymentData.getHeaders()
        },
        data: paymentData
      };

      // Mengirim permintaan pembayaran
      let paymentResponse = await axios(paymentConfig);
      let paymentDataResponse = paymentResponse.data.data;
                         if (!paymentDataResponse || !paymentDataResponse || typeof paymentDataResponse.unique_code === 'undefined') {
        reply(`Oops, ${paymentResponse.data.msg}`)
            console.error(paymentResponse.data.msg);
            return;
        }
      let obj = { id: m.sender, ref: `${paymentDataResponse.unique_code}`, method : `${paymentDataResponse.service_name}`, diterima: `${paymentDataResponse.balance}`, total: `${paymentDataResponse.amount}`, fee: `${paymentDataResponse.fee}`, url: `${paymentDataResponse.checkout_url_v2}` }
          sett("deposit", m.sender, `${paymentDataResponse.unique_code}`)
fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`, JSON.stringify(obj))
     await loading()
    let ccapt = `  *PEMBAYARAN OTOMATIS*

> Metode : ${paymentDataResponse.service_name}
> Referensi : ${paymentDataResponse.unique_code}
> Berlaku : ${getExpirationTime()} menit
> Total Diterima : ${formatmoney(paymentDataResponse.balance)}
> Fee : ${formatmoney(paymentDataResponse.fee)}
> Total Pembayaran : ${formatmoney(paymentDataResponse.amount)}
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
                    text: `Secure payment by ${footer}`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ccapt,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"CANCEL DEPOSIT","id":".cancel"}`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Bayar Sekarang",
                                "url": "${paymentDataResponse.checkout_url_v2}",
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
setTimeout(() => {
const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
               let url = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.url}`
               sendEmailPending(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender, url);
               }, 5000);
let unick = paymentDataResponse.unique_code
function getExpirationTime() {
    const currentTime = new Date().getTime();
    const expirationTime = currentTime + (3 * 60 * 60 * 60 * 1000); // 3 jam ke depan
    const timeRemaining = Math.ceil((expirationTime - currentTime) / (60 * 60 * 1000));// Konversi ke menit dan dibulatkan ke atas
    return timeRemaining;
}
      // Memantau status pembayaran
      let dataStatus = paymentDataResponse.status;
      const startTime = new Date().getTime();
      while (dataStatus !== "Success") {
        await sleep(1000);
       let create3 = keynya + unick + 'StatusTransaction'
      let signature3 = md5(create3);
        var checkStatusData = new FormData();
        checkStatusData.append('key', keynya);
        checkStatusData.append('request', 'status');
        checkStatusData.append('unique_code', kodeunick);
        checkStatusData.append('signature', signature3); 
        // Konfigurasi untuk memeriksa status pembayaran
        var checkStatusConfig = {
          method: 'post',
          url: 'https://paydisini.co.id/api/',
          headers: { 
            ...checkStatusData.getHeaders()
          },
          data: checkStatusData
        };
        // Mengirim permintaan untuk memeriksa status pembayaran
        let statusResponse = await axios(checkStatusConfig);
        let statusDataResponse = statusResponse.data.data;
        dataStatus = statusDataResponse.status;
        console.log(dataStatus);
        // Memeriksa waktu timeout
        const currentTime = new Date().getTime();
              const elapsedTime = (currentTime - startTime) / (1000 * 60 * 60 * 3);
              if (elapsedTime >= 1) {
m.reply(`Upss, tiket ${cek("deposit", m.sender)} udah gak berlaku nih. Yuk, buat yang baru!`);
cancelPay();
          break;
        }
        // Jika pembayaran berhasil
        if (dataStatus === "Success") {
          const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
const depoFilepAth = './SETTING/DB/TRANSACTION/dataDeposit.json';
    const depoUser = JSON.parse(fs.readFileSync(depoFilepAth, 'utf8'));
        const newDepo = {
            buyer: m.sender,
            status: "PAID",
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            no_pembayaran: `${ref_sender}`,
            method: `${method}`,
            jumlah: `${price_sender}`,
            fee: `${fee_sender}`,
            total: `${total_sender}`,
            
        };
            depoUser.push(newDepo);
    fs.writeFileSync(depoFilepAth, JSON.stringify(depoUser, null, 2), 'utf8');
    sendEmailDepo(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender);
                setTimeout(() => {
let notif = `Hai *${ownername}*,
Ada transaksi yang telah dibayar!

Member : ${dengan_nol}
Kode Unik : ${ref_sender}
Metode Pembayaran : ${method}
Jumlah Deposit : ${formatmoney(price_sender)}
Biaya Admin : ${formatmoney(fee_sender)}
Total Deposit : ${formatmoney(total_sender)}
Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Detail transaksi dapat dilihat pada website 
`
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
                    title: notif,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "DETAIL PEMBAYARAN",
                                "url": "https://web.paydisini.co.id/Riwayat-Transaksi/?status==&unique_code=${ref_sender}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                })
            })
        }
    }
}, {});

AnanthaGanz.relayMessage(`${owner}@s.whatsapp.net`, msg.message, {
    messageId: msg.key.id
    }, {quoted: m});
   }, 2000); // 2000 milliseconds (3 seconds)
                                const capt = `*Pembayaran Berhasil*

Payment Details  :

› *Metode :* ${method}
› *Referensi :* ${ref_sender}
› *Jumlah :* ${formatmoney(price_sender)}
› *Fee :* ${formatmoney(fee_sender)}
› *Total :* ${formatmoney(total_sender)}

Information :
Pengisian saldo berhasil! Terima kasih atas transaksinya.
`

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
                    title: capt,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"DEPOSIT LAGI","id":".deposit"}`
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
    }, {quoted: m});
                sett("+saldo", member, price_sender)           
                setTimeout(() => {
                fs.unlinkSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`);
                }, 4000);
                setTimeout(() => {
    sett("deposit", m.sender, "")
                }, 6000);
                } else if (dataStatus === "Canceled") {
               console.log(`Berhasil! Ref ${cek("deposit", m.sender)} Dihapus`)
          break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  // Memanggil fungsi untuk melakukan pembayaran
  makePayment();
}
break;

    case 'mandiri':
    case 'bca':
    case 'ocbc':
    case 'maybank':
    case 'bri':
    case 'cimb':
    case 'neo':
    case 'bni':
    case 'muamalat':
    case 'danamon':
    case 'permata':
    case 'bsi': {
        if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
         if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if (command === 'mandiri') {
         methodName = 'Virtual Account Mandiri';
         methodCode = 'MANDIRIVA'
    } else if (command === 'bca') {
                methodName = 'Virtual Account BCA';
         methodCode = 'BCAVA'
    } else if (command === 'maybank') {
    methodName = 'Virtual Account MayBank';
         methodCode = 'MAYBANKVA'
         } else if (command === 'bri') {
    methodName = 'Virtual Account BRI';
         methodCode = 'BRIVA'
         } else if (command === 'cimb') {
    methodName = 'Virtual Account CIMB Niaga';
         methodCode = 'CIMBVA'
         } else if (command === 'bni') {
    methodName = 'Virtual Account BNI';
         methodCode = 'BNIVA'
         } else if (command === 'neo') {
    methodName = 'Virtual Account BANK NEO';
         methodCode = 'BNCVA'
         } else if (command === 'danamon') {
    methodName = 'Virtual Account DANAMON';
         methodCode = 'DANAMONVA'
         } else if (command === 'permata') {
    methodName = 'Virtual Account Permata';
         methodCode = 'PERMATAVA'
         } else if (command === 'bsi') {
    methodName = 'Virtual Account BSI';
         methodCode = 'BSIVA'
         } else if (command === 'ocbc') {
    methodName = 'Virtual Account Bank OCBC';
         methodCode = 'OCBCVA'
         } else if (command === 'muamalat') {
    methodName = 'Virtual Account Bank Muamalat';
         methodCode = 'MuamalatVA'
         }
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
    break;

case 'cimbva':
case 'briva':
case 'bniva':
case 'bncva':
case 'bcava':
case 'bsiva':
case 'ocbcva':
case 'danamonva':
case 'permatava':
case 'maybankva':
case 'muamalatva':
case 'mandiriva': {
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
         if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
let send = `${sender.split('@')[0]}`
  let axios = require('axios');
  let FormData = require('form-data');
  let md5 = require('md5');
let minimal = '10000' * 1// SETT MIN DEPO
let max = '5000000' * 1 // SETT MAX DEPO
if(fs.existsSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`)) return AnanthaGalauV() 
let request_depo = q.split(" ")[0]
let total = `${request_depo}` * 1
    if (isNaN(request_depo)) {
        reply("Oops, deposit harus berupa angka bukan simbol/selain angka");
        return;
    }
if (!request_depo) return reply(`Oops, Parameter salah! Silahkan Ikuti\n\n> Contoh : ${prefix + command} 5000`)
if (total < minimal) return m.reply(`Oops, minimal deposit adalah ${formatmoney(minimal)}`)
if (total > max) return m.reply(`Oops, Maximal deposit adalah ${formatmoney(max)}`)
  async function makePayment() {
    try {
      let keynya = global.PayDisiniKey;
      let kodeunick = koderefe
      let paymetcod;
               if (command === 'bcava') {
                paymetcod = '1'; 
               } else if (command === 'briva') {
                paymetcod = '2';
               } else if (command === 'cimbva') {
                paymetcod = '3';
               } else if (command === 'bniva') {
                paymetcod = '4'; 
               } else if (command === 'mandiriva') {
               paymetcod = '5';
               } else if (command === 'maybankva') {
                paymetcod = '6'; 
               } else if (command === 'permatava') {
                paymetcod = '7'; 
               } else if (command === 'danamonva') {
                paymetcod = '8'; 
               } else if (command === 'bsiva') {
                paymetcod = '9'; 
               } else if (command === 'bncva') {
                paymetcod = '10';
               } else if (command === 'ocbcva') {
                paymetcod = '21'; 
               } else if (command === 'muamalatva') {
                paymetcod = '22';
}
      let aomut = total * 1;
      let exp = 10800;
      let create = keynya + kodeunick + paymetcod + aomut + exp + 'NewTransaction'
      let signature = md5(create);
      var paymentData = new FormData();
      paymentData.append('key', keynya);
      paymentData.append('request', 'new');
      paymentData.append('unique_code', kodeunick);
      paymentData.append('service', paymetcod);
      paymentData.append('amount', aomut);
      paymentData.append('note', `ISI SALDO ${dengan_nol}`);
      paymentData.append('valid_time', exp);
      paymentData.append('customer_email', cek("email", m.sender));
      paymentData.append('type_fee', '1');
      paymentData.append('signature', signature); 
      
      var paymentConfig = {
        method: 'post',
        url: 'https://paydisini.co.id/api/',
        headers: { 
          ...paymentData.getHeaders()
        },
        data: paymentData
      };

      let paymentResponse = await axios(paymentConfig);
      let paymentDataResponse = paymentResponse.data.data;
          let obj = { id: m.sender, ref: `${paymentDataResponse.unique_code}`, method : `${paymentDataResponse.service_name}`, diterima: `${paymentDataResponse.balance}`, total: `${paymentDataResponse.amount}`, fee: `${paymentDataResponse.fee}`, url: `${paymentDataResponse.checkout_url_v2}` }
        if (!paymentDataResponse || !paymentDataResponse || typeof paymentDataResponse.unique_code === 'undefined') {
        reply(`Oops, ${paymentResponse.data.msg}`)
            console.error(paymentResponse.data.msg);
            return;
        }
          sett("deposit", m.sender, `${paymentDataResponse.unique_code}`)
fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`, JSON.stringify(obj))
     await loading()
    let ccapt = `  *PEMBAYARAN OTOMATIS*

> Metode : ${paymentDataResponse.service_name}
> Referensi : ${paymentDataResponse.unique_code}
> Berlaku : ${getExpirationTime()} menit
> Total Diterima : ${formatmoney(paymentDataResponse.balance)}
> Fee : ${formatmoney(paymentDataResponse.fee)}
> Total Pembayaran : ${formatmoney(paymentDataResponse.amount)}
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
                    text: `Secure payment by ${footer}`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ccapt,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"CANCEL DEPOSIT","id":".cancel"}`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Bayar Sekarang",
                                "url": "${paymentDataResponse.checkout_url_v2}",
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
setTimeout(() => {
const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
               let url = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.url}`
               sendEmailPending(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender, url);
               }, 5000);
let unick = paymentDataResponse.unique_code
function getExpirationTime() {
    const currentTime = new Date().getTime();
    const expirationTime = currentTime + (3 * 60 * 60 * 60 * 1000); // 3 jam ke depan
    const timeRemaining = Math.ceil((expirationTime - currentTime) / (60 * 60 * 1000));// Konversi ke menit dan dibulatkan ke atas
    return timeRemaining;
}
      // Memantau status pembayaran
      let dataStatus = paymentDataResponse.status;
      const startTime = new Date().getTime();
      while (dataStatus !== "Success") {
        await sleep(1000);
       let create3 = keynya + unick + 'StatusTransaction'
      let signature3 = md5(create3);
        var checkStatusData = new FormData();
        checkStatusData.append('key', keynya);
        checkStatusData.append('request', 'status');
        checkStatusData.append('unique_code', kodeunick);
        checkStatusData.append('signature', signature3); 
        // Konfigurasi untuk memeriksa status pembayaran
        var checkStatusConfig = {
          method: 'post',
          url: 'https://paydisini.co.id/api/',
          headers: { 
            ...checkStatusData.getHeaders()
          },
          data: checkStatusData
        };
        // Mengirim permintaan untuk memeriksa status pembayaran
        let statusResponse = await axios(checkStatusConfig);
        let statusDataResponse = statusResponse.data.data;
        dataStatus = statusDataResponse.status;
        console.log(dataStatus);
        // Memeriksa waktu timeout
        const currentTime = new Date().getTime();
              const elapsedTime = (currentTime - startTime) / (1000 * 60 * 60 * 3);
              if (elapsedTime >= 1) {
m.reply(`Upss, tiket ${cek("deposit", m.sender)} udah gak berlaku nih. Yuk, buat yang baru!`);
cancelPay();
          break;
        }
        // EKSEKUSI PEMBAYARAN SUKSES
        if (dataStatus === "Success") {
          const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
const depoFilepAth = './SETTING/DB/TRANSACTION/dataDeposit.json';
    const depoUser = JSON.parse(fs.readFileSync(depoFilepAth, 'utf8'));
        const newDepo = {
            buyer: m.sender,
            status: "PAID",
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            no_pembayaran: `${ref_sender}`,
            method: `${method}`,
            jumlah: `${price_sender}`,
            fee: `${fee_sender}`,
            total: `${total_sender}`,
            
        };
            depoUser.push(newDepo);
    fs.writeFileSync(depoFilepAth, JSON.stringify(depoUser, null, 2), 'utf8');
    sendEmailDepo(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender);
                setTimeout(() => {
let notif = `Hai *${ownername}*,
Ada transaksi yang telah dibayar!

Member : ${dengan_nol}
Kode Unik : ${ref_sender}
Metode Pembayaran : ${method}
Jumlah Deposit : ${formatmoney(price_sender)}
Biaya Admin : ${formatmoney(fee_sender)}
Total Deposit : ${formatmoney(total_sender)}
Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Detail transaksi dapat dilihat pada website 
`
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
                    title: notif,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "DETAIL PEMBAYARAN",
                                "url": "https://web.paydisini.co.id/Riwayat-Transaksi/?status==&unique_code=${ref_sender}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                })
            })
        }
    }
}, {});

AnanthaGanz.relayMessage(`${owner}@s.whatsapp.net`, msg.message, {
    messageId: msg.key.id
    }, {quoted: m});
   }, 2000); // 2000 milliseconds (2 seconds)
                                const capt = `*Pembayaran Berhasil*

Payment Details  :

› *Metode :* ${method}
› *Referensi :* ${ref_sender}
› *Jumlah :* ${formatmoney(price_sender)}
› *Fee :* ${formatmoney(fee_sender)}
› *Total :* ${formatmoney(total_sender)}

Information :
Pengisian saldo berhasil! Terima kasih atas transaksinya.
`

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
                    title: capt,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"DEPOSIT LAGI","id":".deposit"}`
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
    }, {quoted: m});
                sett("+saldo", member, price_sender)           
                setTimeout(() => {
                fs.unlinkSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`);
                }, 4000);
                setTimeout(() => {
    sett("deposit", m.sender, "")
                }, 6000);
                } else if (dataStatus === "Canceled") {
               console.log(`Berhasil! Ref ${cek("deposit", m.sender)} Dihapus`)
          break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  // Memanggil fungsi untuk melakukan pembayaran
  makePayment();
}
break;
case 'axis.':
case 'smartfren.':
case 'xl.':
case 'three.':
case 'telkomsel.':
case 'gopay.':
case 'linkaja.':
case 'ovo.':
case 'shopeepay.':
case 'dana.': {
    let methodCode, methodName;
    switch(command) {
        case 'axis.':
            methodCode = 'AXIS';
            methodName = 'Pulsa Axis';
            break;
        case 'smartfren.':
            methodCode = 'SMARTFREN';
            methodName = 'Pulsa Smartfren';
            break;
        case 'xl.':
            methodCode = 'XL';
            methodName = 'Pulsa XL';
            break;
        case 'three.':
            methodCode = 'THREE';
            methodName = 'Pulsa Three';
            break;
        case 'telkomsel.':
            methodCode = 'TELKOMSEL';
            methodName = 'Pulsa Telkomsel';
            break;
        case 'gopay.':
            methodCode = 'GOPAY';
            methodName = 'Gopay';
            break;
        case 'linkaja.':
            methodCode = 'LINKAJA';
            methodName = 'LinkAja';
            break;
        case 'ovo.':
            methodCode = 'OVO';
            methodName = 'OVO';
            break;
        case 'shopeepay.':
            methodCode = 'SHOPEEPAY';
            methodName = 'ShopeePay';
            break;
        case 'dana.':
            methodCode = 'DANA';
            methodName = 'DANA';
            break;
        default:
            methodCode = '';
            methodName = '';
    }
    
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
                { header: methodName, title: "Nominal Lainnya", id: `.${methodCode}` }
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
                        text: ''
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: `${methodName} by ${footer}`
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: "*Nominal Cepat :*",
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
    }, {quoted: m});

    break;
}
case 'smartfren':
case 'axis':
case 'xl':
case 'three':
case 'telkomsel':
case 'gopay':
case 'linkaja':
case 'ovo':
case 'shopeepay':
case 'dana': {
let send = `${sender.split('@')[0]}`
  let axios = require('axios');
  let md5 = require('md5');
  let ref_id = koderefe
  let endPoint = 'https://api.tokopay.id/v1/order' // SET ENDPOINT
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
         if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    if(fs.existsSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`)) return AnanthaGalauV() 
    let request_depo = q.split(" ")[0]
let total = `${request_depo}` * 1
    if (isNaN(request_depo)) {
        reply("Oops, deposit harus berupa angka bukan simbol/selain angka");
        return;
    }
if (!request_depo) return reply(`Oops, Parameter salah! Silahkan Ikuti\n\n> Contoh : ${prefix + command} 5000`)
   let harga = `${total}` * 1
      if (command === 'dana') {
      if (harga < 1000) return m.reply(`Minimun Payment DANA adalah Rp. 1.000`)
      if (harga > 20000000) return m.reply(`Maximal Payment DANA adalah Rp. 20.000.000`);
       metode = 'DANA'; 
       metodee = 'DANA'
      } else if (command === 'telkomsel') {
      if (harga < 5000) return m.reply(`Minimun Payment TELKOMSEL adalah Rp. 5.000`)
      if (harga > 1000000) return m.reply(`Maximal Payment TELKOMSEL adalah Rp. 1.000.000`);
       metode = 'TELKOMSEL'; 
       metodee = 'Pulsa TELKOMSEL'
      } else if (command === 'three') {
      if (harga < 1000) return m.reply(`Minimun Payment THREE adalah Rp. 1.000`)
      if (harga > 200000) return m.reply(`Maximal Payment THREE adalah Rp. 200.000`);
       metode = 'TRI'; 
       metodee = 'Pulsa THREE'
      } else if (command === 'smartfren') {
      if (harga < 5000) return m.reply(`Minimun Payment SMARTFREN adalah Rp. 5.000`)
      if (harga > 1000000) return m.reply(`Maximal Payment SMARTFREN adalah Rp. 1.000.000`);
       metode = 'SMARTFREN'; 
       metodee = 'Pulsa SMARTFREN'
      } else if (command === 'axis') {
      if (harga < 2000) return m.reply(`Minimun Payment AXIS adalah Rp. 2.000`)
      if (harga > 2000000) return m.reply(`Maximal Payment AXIS adalah Rp. 2.000.000`);
       metode = 'AXIS'; 
       metodee = 'Pulsa AXIS'
     } else if (command === 'xl') {
      if (harga < 2000) return m.reply(`Minimun Payment XL adalah Rp. 2.000`)
      if (harga > 2000000) return m.reply(`Maximal Payment XL adalah Rp. 2.000.000`);
      metode = 'XL'; 
      metodee = 'Pulsa XL'
     } else if (command === 'shopeepay') {
     if (harga < 1000) return m.reply(`Minimun Payment SHOPEEPAY adalah Rp. 1.000`)
     if (harga > 2000000) return m.reply(`Maximal Payment SHOPEEPAY adalah Rp. 2.000.000`);
     metode = 'SHOPEEPAY';
     metodee = 'SHOPEEPAY'
     } else if (command === 'linkaja') {
     if (harga < 1000) return m.reply(`Minimun Payment LINKAJA adalah Rp. 1.000`)
     if (harga > 2000000) return m.reply(`Maximal Payment LINKAJA adalah Rp. 2.000.000`);
     metode = 'LINKAJA';
     metodee = 'LINKAJA'
     } else if (command === 'gopay') {
     if (harga < 1000) return m.reply(`Minimun Payment GOPAY adalah Rp. 1.000`)
     if (harga > 2000000) return m.reply(`Maximal Payment GOPAY adalah Rp. 2.000.000`);
      metode = 'GOPAY';
      metodee = 'GOPAY'
     } else if (command === 'ovo') {
    if (harga < 1000) return m.reply(`Minimun Payment OVO adalah Rp. 1.000`)
    if (harga > 10000000) return m.reply(`Maximal Payment OVO adalah Rp. 10.000.000`);
      metode = 'OVOPUSH'; 
      metodee = 'OVO'
}
let merchantid = global.TokoPay_merchant
let secret = global.TokoPay_secret
let create_md5 = `${merchantid}:${secret}:${ref_id}`;
let signature = md5(create_md5);
var config1 = {
method: 'POST',
headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
 "merchant_id": `${merchantid}`,
 "kode_channel": `${metode}`,
 "reff_id": `${ref_id}`,
 "amount": `${harga}`,
 "customer_name": `${pushname}`,
 "customer_email":`${cek("email", m.sender)}`,
 "customer_phone":`${dengan_nol}`,
 "redirect_url":"https://wa.me/6285174667722",
 "expired_ts":0, //default 0
 "signature": signature,
 "items":[{
         "product_code": `${ref_id}`,
         "name":`DEPOSIT ${formatmoney(harga)}`,
         "price":`${harga}`,
         "product_url":"https://wa.me/6285174667722",
         "image_url":"https://telegra.ph/file/92e8994e5996b0a87fec8.jpg"
     }]
}),
}; 
fetch(endPoint, config1)
 .then(async (response) => {
     const data = await response.json();
       if (!data || !data.data || typeof data.data.total_bayar === 'undefined') {
            reply(`Oops, ${data.error_msg}`)
            console.error(data.error_msg);
            return;
        }
    const fee_users = `${data.data.total_bayar - data.data.total_diterima}` * 1
          let obj = { id: m.sender, ref: `${ref_id}`, method : `${metodee}`, diterima: `${data.data.total_diterima}`, total: `${data.data.total_bayar}`, fee: `${fee_users}`, url: `${data.data.pay_url}` }
          sett("deposit", m.sender, `${ref_id}`)
fs.writeFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`, JSON.stringify(obj))
console.log(data.data);
 await loading();
let ccapt = ` *PEMBAYARAN OTOMATIS*

> Metode : ${metodee}
> Referensi : ${ref_id}
> Berlaku : 30 menit
> Total Diterima : ${formatmoney(data.data.total_diterima)}
> Fee : ${formatmoney(fee_users)}
> Total Pembayaran : ${formatmoney(data.data.total_bayar)}
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
                    text: `Secure payment by ${footer}`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ccapt,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"CANCEL DEPOSIT","id":".cancel"}`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "Bayar Sekarang",
                                "url": "${data.data.pay_url}",
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
setTimeout(() => {
const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
               let url = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.url}`
               sendEmailPending(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender, url);
               }, 2500);
              let dataStatus = data.data.status;
              const startTime = new Date().getTime();
              while (dataStatus !== "Success") {
              await sleep(1000);
              let zann = await fetch(endPoint, config1);
              let dataJson = await zann.json();
              let dataStatus = dataJson.data.status;
              console.log(dataStatus);
              const currentTime = new Date().getTime();
              const elapsedTime = (currentTime - startTime) / (1000 * 60 * 30);
                        if (elapsedTime >= 1) {
              m.reply(`Upss, tiket ${cek("deposit", m.sender)} udah gak berlaku nih. Yuk, buat yang baru!`);
                            cancelPay();
                break;
            }
            if (dataStatus === "Success") {
            try {
            const deppo = JSON.parse(fs.readFileSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`))
               let method = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.method}`
              let member = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.id}`
                let price_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.diterima}` * 1
               let fee_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.fee}` * 1
               let ref_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.ref}` 
               let total_sender = `${checkIdDepo(m.sender, deppo) ? checkIdDepo(m.sender, deppo) : deppo.total}` * 1
const depoFilepAth = './SETTING/DB/TRANSACTION/dataDeposit.json';
    const depoUser = JSON.parse(fs.readFileSync(depoFilepAth, 'utf8'));
        const newDepo = {
            buyer: m.sender,
            status: "PAID",
            jam: moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss'),
            waktu: moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY'),
            no_pembayaran: `${ref_sender}`,
            method: `${method}`,
            jumlah: `${price_sender}`,
            fee: `${fee_sender}`,
            total: `${total_sender}`,
            
        };
            depoUser.push(newDepo);
    fs.writeFileSync(depoFilepAth, JSON.stringify(depoUser, null, 2), 'utf8');
    sendEmailDepo(sender, pushname, ref_sender, method, price_sender, fee_sender, total_sender);
                setTimeout(() => {
let notif = `Hai *${ownername}*,
Ada transaksi yang telah dibayar!

Member : ${dengan_nol}
Kode Unik : ${ref_sender}
Metode Pembayaran : ${method}
Jumlah Deposit : ${formatmoney(price_sender)}
Biaya Admin : ${formatmoney(fee_sender)}
Total Deposit : ${formatmoney(total_sender)}
Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}

Detail transaksi dapat dilihat pada website 
`
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
                    title: notif,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "cta_url",
                            "buttonParamsJson": `{
                                "display_text": "DETAIL PEMBAYARAN",
                                "url": "https://dash.tokopay.id/transaksi/${dataJson.data.trx_id}",
                                "merchant_url": "https://www.google.com"
                            }`
                        },
                    ],
                })
            })
        }
    }
}, {});

AnanthaGanz.relayMessage(`${owner}@s.whatsapp.net`, msg.message, {
    messageId: msg.key.id
    }, {quoted: m});

   }, 2000); // 2000 milliseconds (3 seconds)
                             const capt = `*Pembayaran Berhasil*

Payment Details  :

› *Metode :* ${method}
› *Referensi :* ${ref_sender}
› *Jumlah :* ${formatmoney(price_sender)}
› *Fee :* ${formatmoney(fee_sender)}
› *Total :* ${formatmoney(total_sender)}

Information :
Pengisian saldo berhasil! Terima kasih atas transaksinya.
`

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
                    title: capt,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"DEPOSIT LAGI","id":".deposit"}`
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
    }, {quoted: m});
                sett("+saldo", member, price_sender)           
                setTimeout(() => {
                fs.unlinkSync(`./SETTING/DB/TRANSACTION/Api/Deposit/${cek("deposit", m.sender)}.json`);
    sett("deposit", m.sender, "")
                 }, 4000);
               } catch (error) {
        console.log(error);
        }
                break;
            }
        }
    });
}
break;

case 'infopaydisini': {
  var axios = require('axios');
  let md5 = require('md5');
  var FormData = require('form-data');
  let keynya = global.PayDisiniKey;
  let token = 'YOUR_API_TOKEN'; // Replace with your actual API token

  var data = new FormData();
  let signnya = keynya + 'Profile';
  let signa3 = md5(signnya);

  data.append('key', keynya);
  data.append('request', 'profile');
  data.append('signature', signa3);

  var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://paydisini.co.id/api/',
    headers: {
      'Authorization': `Bearer ${token}`, 
      ...data.getHeaders() // 
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      let tersedia = response.data.data.saldo * 1;
      let tertahan = response.data.data.saldo_tertahan * 1;
      reply(`INFO AKUN PAYDISINI \n\n> Nama : ${response.data.data.full_name}\n> Merchant : ${response.data.data.merchant}\n> No.Telp : ${response.data.data.telephone}\n> Email : ${response.data.data.email}\n> Saldo Tersedia : ${formatmoney(tersedia)}\n> Tertahan : ${formatmoney(tertahan)}\n> Auto Withdraw : ${response.data.data.auto_wd}`);
    })
    .catch(function (error) {
      console.log(error.response ? error.response.data : error.msg);
    });
}
break;
case 'tarik-':
case 'wdtokopay': {
    if (!isOwner) return m.reply(mess.owner);
    let wdnominal = text.split(' ')[0];
    if (!wdnominal) return m.reply(`Oops, Format Withdraw salah :\n\n> Contoh : .tarik- 100000`);
    let bulatkan = Math.round(wdnominal * 1);
    let md5 = require("md5");
    let axios = require("axios");
    let merchant = global.TokoPay_merchant;
    let secret_key = global.TokoPay_secret;
    let createSign = `${merchant}:${secret_key}:${bulatkan}`;
    let Sign = md5(createSign);

    var request = {
        method: 'POST',
        url: 'https://api.tokopay.id/v1/tarik-saldo',
        data: {
            "nominal": bulatkan,
            "merchant_id": merchant,
            "signature": Sign
        }
    };

    try {
        const response = await axios(request);
            if (response.data.rc === 500) {
           m.reply(`${response.data.error_msg}`);
          } else if (response.data.rc === 200) {
           reply(`Sip, ${response.data.message}`)
          }
        } catch (error) {
        if (error.response) {
            m.reply(`Gagal, ${error.response.data.error_msg}`);
        } else {
            console.error('Error during withdrawal:', error);
            m.reply("Gagal, Terjadi kesalahan saat melakukan penarikan saldo. Silakan coba lagi nanti.");
        }
    }
    break;
}
case 'tkpay': {
    if (!isOwner) return m.reply(mess.owner);
    const md5 = require('md5');
    let axios = require('axios');
    const Merchantnya = global.TokoPay_merchant
    const screct = global.TokoPay_secret
    const setmd = `${Merchantnya}:${screct}`;
    const signature = md5(setmd);

    const config = {
        method: 'POST',
        url: 'https://api.tokopay.id/v1/merchant',
        data: {
            "merchant_id": Merchantnya,
            "signature": signature
        }
    };

    try {
        const response = await axios(config);

        // Ekstrak data dari respons API
        const { saldo_tertahan, saldo_tersedia, nama_toko } = response.data.data;

        // Format saldo sebagai mata uang
        const formattedTertahan = formatmoney(saldo_tertahan);
        const formattedTersedia = formatmoney(saldo_tersedia);

        // Kirim pesan dengan informasi TokoPay
        m.reply(`
*TOKOPAY INFO*

*Nama Akun :* ${nama_toko}
*Saldo Tertahan :* ${formattedTertahan}
*Saldo Tersedia :* ${formattedTersedia}
`);
    } catch (error) {
        if (error.response) {
            m.reply(`Gagal, ${error.response.data.data.error_msg}`);
        } else {
            console.error('Error fetching TokoPay info:', error);
            m.reply("Gagal, Terjadi kesalahan saat mengambil informasi TokoPay. Silakan coba lagi nanti.");
        }
    }
    break;
}

case 'getlayanann':{
let axios = require('axios');

const api_key = "9hg0pjrcztur46gh3728ip0joytnluf";
const secret_key = "y831jmeebnqrlowrd7f94n79yigkt60u6shmxz10pa5u3ojc8v";
const action = "services";

const url = "https://buzzerpanel.id/api/json.php";

        axios('https://buzzerpanel.id/api/json.php',{
method: 'POST',
data: new URLSearchParams(Object.entries({
api_key: api_key,
secret_key: secret_key,
action: 'services',
}))}).then((response) => {
        // Lakukan sesuatu dengan data yang diperoleh
        console.log(response.data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
break
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
    /* LIST XL AXIATA*/
 case 'd-xl': {
 if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Data" && product.brand === "XL");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 'v-xl': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Voucher" && product.brand === "XL");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 't-xl': {
  if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Pulsa" && product.brand === "XL" && product.type === "Pulsa Transfer");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
   
}
break;
case 'p-xl': {
    
        if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Pulsa" && product.brand === "XL" && product.type === "Umum");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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

/* end Xl*/
/* TELKOM */
case 'd-telkomsel': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Data" && product.brand === "TELKOMSEL");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 'v-telkomsel': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Voucher" && product.brand === "Telkomsel");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 't-telkomsel': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Pulsa" && product.brand === "TELKOMSEL" && product.type === "Pulsa Transfer");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;
case 'p-telkomsel': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Pulsa" && product.brand === "TELKOMSEL" && product.type === "Umum");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;
/* END TELKOM */
/* INDOSAT*/
case 'd-indosat': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Data" && product.brand === "INDOSAT");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 'v-indosat': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Voucher" && product.brand === "INDOSAT");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 't-indosat': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Pulsa" && product.brand === "INDOSAT" && product.type === "Pulsa Transfer");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 'p-indosat': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Pulsa" && product.brand === "INDOSAT" && product.type === "Umum");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;
case 'd-axis': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Data" && product.brand === "AXIS");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 'v-axis': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Voucher" && product.brand === "AXIS");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 't-axis': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Pulsa" && product.brand === "AXIS" && product.type === "Pulsa Transfer");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 'p-axis': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Pulsa" && product.brand === "AXIS" && product.type === "Umum");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 'd-tri': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Data" && product.brand === "TRI");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 'v-tri': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Voucher" && product.brand === "TRI");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 't-tri': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Pulsa" && product.brand === "TRI" && product.type === "Pulsa Transfer");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 'p-tri': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Pulsa" && product.brand === "TRI" && product.type === "Umum");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;
case 'd-smartfren': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Data" && product.brand === "SMARTFREN");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 'v-smartfren': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Voucher" && product.brand === "SMARTFREN");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 't-smartfren': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Pulsa" && product.brand === "SMARTFREN" && product.type === "Pulsa Transfer");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 'p-smartfren': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Pulsa" && product.brand === "SMARTFREN" && product.type === "Umum");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;
case 'd-by.u': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Data" && product.brand === "by.U");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 'v-by.u': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Voucher" && product.brand === "by.U");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 't-by.u': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Pulsa" && product.brand === "by.U" && product.type === "Pulsa Transfer");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
}
break;

case 'p-by.u': {
if (cek("verfiyemail", m.sender)) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
        if (cek("cekVerify", m.sender)) return sendVerif();
        if (cek("syarat", m.sender)) return sendSyaratAnanthaa();

        const dataPrepaid = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8')) || [];
        const statusData = JSON.parse(fs.readFileSync('./SETTING/DB/AdminPrepaid.json', 'utf8')) || [];

        // Filter data untuk produk XL dengan kategori "Pulsa" dan tipe "Umum"
        const xlProducts = dataPrepaid.filter(product => product.category === "Pulsa" && product.brand === "by.U" && product.type === "Umum");

        // Mengurutkan produk berdasarkan harga
        xlProducts.sort((a, b) => a.price - b.price);

        // Membuat array tombol produk untuk pesan interaktif
        let productButtons = xlProducts.map(product => {
            const statusEntry = statusData.find(i => i.buyer_sku_code === product.buyer_sku_code);
            const status = statusEntry ? (statusEntry.seller_product_status ? "Ready" : "Sold Out") : "Unknown";
            const statusEmoji = statusEntry ? (statusEntry.seller_product_status ? "✅" : "❌") : "❓";
            let stockDisplay = product.stock === 0 ? "∞" : product.stock;

            return {
                
                title: `${product.product_name} ${statusEmoji}`,
                description: `Harga: ${formatmoney(product.price)}`,
                id: `.detail ${product.buyer_sku_code}`
            };
            
        });

        // Membuat pesan interaktif
        let interactiveMessage = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: ``
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Silahkan Pilih Produk'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        subtitle: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: `CLICK HERE`,
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
            fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user));
        }, 3000);
        console.log("Akun telah berhasil dihapus.");
        // Tambahkan pesan respons langsung
        reply(`Sip, ID ${akun} berhasil dihapus`);
        
        // Hapus riwayat deposit dari depodataPelanggan.json
        const depoFilePath = './SETTING/DB/TRANSACTION/dataDeposit.json';
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
        const trxFilePath = './SETTING/DB/dataTrx.json';
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
            fs.writeFileSync('./SETTING/DB/dataPelanggan.json', JSON.stringify(user));
        }, 3000);
        console.log("Akun telah berhasil dihapus.");
        // Tambahkan pesan respons langsung
        reply("Akun Anda telah berhasil dihapus.");
        
        // Hapus riwayat deposit dari depodataPelanggan.json
        const depoFilePath = './SETTING/DB/TRANSACTION/dataDeposit.json';
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
        const trxFilePath = './SETTING/DB/dataTrx.json';
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
        jsonData = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8'));
    } catch (error) {
        reply("Error reading 'dataPrepaid.json': " + error.message);
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
        fs.writeFileSync('./SETTING/DB/dataPrepaid.json', JSON.stringify(jsonData, null, 2), 'utf8');
        
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
        jsonData = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8'));
    } catch (error) {
        reply("Error reading 'dataPrepaid.json': " + error.message);
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
        fs.writeFileSync('./SETTING/DB/dataPrepaid.json', JSON.stringify(jsonData, null, 2), 'utf8');
        
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
        jsonData = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8'));
    } catch (error) {
        reply("Error reading 'dataPrepaid.json': " + error.message);
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
        fs.writeFileSync('./SETTING/DB/dataPrepaid.json', JSON.stringify(jsonData, null, 2), 'utf8');
        
        // Memberikan balasan dengan informasi tentang produk yang diperbarui
        reply(`Nama produk dengan KODE SKU ${buyerSkuCode} berhasil diperbarui.\nNama sebelumnya: ${oldProductName}\nNama baru: ${newProductName}`);
    } else {
        reply(`Gagal, Produk dengan KODE SKU ${buyerSkuCode} tidak ditemukan`);
    }
    break;
}
// E WALLET CEK

  case 'cekdana-wallet':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`E WALLET : DANA \nMasukan No Hp, contoh:\n*.cekdana-wallet* 087837456208`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'dana',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
case 'cekovo-wallet':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`E WALLET : OVO \nMasukan No Hp, contoh:\n*.cekovo-wallet* 087837456208`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'ovo',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
case 'cekgopay-wallet':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`E WALLET : GOPAY \nMasukan No Hp, contoh:\n*.cekgopay-wallet* 087837456208`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'gopay',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
 case 'ceklinkaja-wallet':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`E WALLET : LINKAJA \nMasukan No Hp, contoh:\n*.ceklinkaja-wallet* 087837456208`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'linkaja',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
 
 case 'cekshopeepay-wallet':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`E WALLET : SHOPEEPAY \nMasukan No Hp, contoh:\n*.cekshopeepay-wallet* 087837456208`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'shopeepay',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
 // GAMES CEKNICKNAME 

      case 'cekff':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`GAME : FREE FIRE \nMasukan ID dan Server dengan benar, contoh:\n*.cekff* 7194234362`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'free-fire',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
      case 'cekvalo':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`GAME : VALORANT \nMasukan ID dan Server dengan benar, contoh:\n*.cekvalo* Nyx%236477`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'valorant',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
    case 'cekpb':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`GAME : POINT BLANK \nMasukan ID dan Server dengan benar, contoh:\n*.cekpb* catsdoto`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'point-blank',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
  case 'ceksausageman':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`GAME : SAUSAGEMAN \nMasukan ID dan Server dengan benar, contoh:\n*.ceksausageman* 5sn9jf`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'sausageman',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
     case 'cekhi3':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`GAME : Honkai Impact 3 \nMasukan ID dan Server dengan benar, contoh:\n*.cekhi3* 14629300`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'honkai-impact',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
  case 'cekcod':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`GAME : Call Of Duty \nMasukan ID dan Server dengan benar, contoh:\n*.cekcod* 3661482077829392935`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'callofduty',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
  case 'cekaov':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`GAME : Arena Of Valor \nMasukan ID dan Server dengan benar, contoh:\n*.cekaov* 888347346994333`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'aov',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
  case 'cekau2m':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`GAME : AU2 Mobile \nMasukan ID dan Server dengan benar, contoh:\n*.cekau2m* 3178235`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'au2m',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
 
 
  case 'cekblackcloverm':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`GAME : BLACK CLOVER MOBILE \nMasukan ID dan Server dengan benar, contoh:\n*.cekblackcloverm* PQML1258684807`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'blackcloverm',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
  
   case 'cekdragon-raja':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`GAME : DRAGON RAJA \nMasukan ID dan Server dengan benar, contoh:\n*.cekdragon-raja* 282830040`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'dragon-raja',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
  
    case 'cekpln':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
let id = args[0];
        if (!id) {
          return reply(`PLN PRABAYAR \nMasukan ID dengan benar, contoh:\n*.cekpln* 551200816435`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'token-pln',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
                reply(`「 *${response.data.data.brand}* 」\n\n> Nama : ${response.data.data.name}\n> Id Pln : ${response.data.data.id_pln}\n> No Meter : ${response.data.data.meter_pln}\n> Daya : ${response.data.data.daya}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
  case 'cekgarena-undawn':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
const id = args[0];
        if (!id) {
          return reply(`GAME : GARENA UNDAWN \nMasukan ID dan Server dengan benar, contoh:\n*.cekgarena-undawn* 13004216394`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'garena-undawn',
                  no_id: id,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
               reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
  
  case 'cekml':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
let id = args[0];
let zone = args[1];
        if (!id || !zone) {
          return reply(`GAME : Mobile Legends\nMasukan ID dan Server dengan benar, contoh:\n*.cekml* 1374117562 15661`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'mobile-legendsv2',
                  no_id: id,
                  zone_id: zone,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
                reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${response.data.data.userid} (${response.data.data.zone})\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
  case 'cekgi':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
let id = args[0];
let zone = args[1];
        if (!id || !zone) {
          return reply(`GAME : Genshin Impact\nMasukan ID dan Server dengan benar,\nGunakan salah satu server :\n> Asia = os_asia\n> America = os_usa\n> Europe = os_euro\n> TW, HK, MO = os_cht\n contoh:\n*.cekgi* 815969773 os_asia`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'genshin-impact',
                  no_id: id,
                  zone_id: zone,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
                reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${id}\n> Server : ${zone}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
  
   case 'ceklife-after':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
let axios = require('axios');
let id = args[0];
let zone = args[1];
        if (!id || !zone) {
          return reply(`GAME : Life After\nMasukan ID dan Server dengan benar,\nGunakan salah satu server :\n> 500001 = MiskaTown\n> 500002 = SandCastle\n> 500003 = MouthSwamp\n> 500004 = RedwoodTown\n> 500005 = Obelisk\n> 500007 = ChaosOutpost\n> 500008 = IronStride\n> 510001 = FallForest\n> 510002 = MountSnow\n> 520001 = NancyCity\n> 520002 = CharlesTown\n> 520003 = SnowHighlands\n> 520004 = Santopany\n> 520005 = LevinCity\n> 520007 = ChaosCity\n> 520008 = TwinIslands\n> 520009 = HopeWall\n> 500006 = NewLand\n> 500009 = CrystalthornSea\n> 520006 = MileStone\n> 520010 = LabyrinthSea\n contoh:\n*.ceklife-after* 22512309 520006`)
        }
const url = `https://${global.APIcek}/api/life-after/?target=${id}&zone=${zone}&api_key=${global.AnanthaCEK}`

axios.get(url)
  .then(response => {
  console.log(response.data);
      reply(`「 *Life After* 」\n\n> Username : ${response.data.data.nickname}\n> ID : ${id}\n> Server : ${zone}\n\n${toko}`);
  })
  .catch(error => {
    console.error(error.response.data);
    if(error.response.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if ( error.response.data.code = "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
    }
  });
  }
  break
  case 'cekhsr':{
if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
     if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
if(cek("level", m.sender) == "Jagoan Z") return reply(`Oops, Fitur Ini Khusus Untuk Akun Collector Z! Silahkan Upgrade akun anda`)
let id = args[0];
let zone = args[1];
        if (!id || !zone) {
          return reply(`GAME : Honkai: Star Rail\nMasukan ID dan Server dengan benar,\nGunakan salah satu server :\n> Asia = os_asia/prod_official_asia\n> America = os_usa/prod_official_usa\n> Europe = os_euro/prod_official_eurprod_official_eur\n> TW, HK, MO = os_cht/prod_official_cht\n contoh:\n*.cekhsr* 803952809 prod_official_asia`)
        }
let axios = require('axios');
              var config = {
                method: 'POST',  // Set the HTTP method to POST
                url: 'https://zannstoresmm.my.id/v2/validasi_byzann.php',  // Set the target URL
                data: new URLSearchParams(Object.entries({
                  api_key: global.AnanthaCEK,
                  action: 'honkai-star-rail',
                  no_id: id,
                  zone_id: zone,
                  })),
              };
            
            axios(config)
              .then(function (response) {
                if (response.data.status == true) {
                console.log(response.data)
                if(response.data.data.code == "404") {
    reply("Oops, Nickname Tidak Dapat ditemukan")
    } else if (response.data.data.code == "422") {
    reply("Oops, Silahkan Input Userid dengan benar")
                
                } else if (response.data.data.code == "200") {
                reply(`「 *${response.data.data.game}* 」\n\n> Username : ${response.data.data.name}\n> ID : ${id}\n> Server : ${zone}\n\n${toko}`);
                }
              } 
              if (response.data.status == false) {
              reply(`${response.data.data.msg}`)
            }
              })
  }
  break
  
  
  

case 'print': {
const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
    let refId = q.split(" ")[0]; // Menyimpan ref_id yang ingin diperiksa

    if (!refId) {
        reply("Oops, Silahkan Masukkan ReffId Pesanan Sukses\n\n*Contoh : print TPxxxxx*");
        return;
    }

    const filePath = './SETTING/DB/dataTrx.json';
    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const allUserData = JSON.parse(fileData);

        const userData = allUserData.find(data => data.ref_id === refId); // Mencari transaksi berdasarkan refId

        if (!userData) {
            return reply(`Oops, pesanan ${refId} tidak ditemukan :(`);
        }

        // Memanggil fungsi createReceipt dengan userData yang sesuai
        createReceipt(userData, function(err) {
            if (err) {
                console.error('Error creating receipt:', err);
                reply("Oops, silahkan hubungi admin");
            } else {
                sendReceiptImage(`./SETTING/DB/TRANSACTION/${userData.ref_id}.png`);
            }
        });

    } catch (error) {
        console.error('Error reading the transaction history file:', error);
        reply("Oops, silahkan hubungi admin :)");
    }
    break;
}

function createReceipt(userData, callback) {
    const fs = require('fs');
    const { createCanvas, loadImage } = require('canvas');
    
    const width = 800; // Lebar struk
    const height = 1200; // Tinggi struk
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    context.fillStyle = '#fff';
    context.fillRect(0, 0, width, height);

    context.textAlign = 'center';
    context.font = 'bold 30px Arial';
    context.fillStyle = '#000';
    context.fillText('ZANNSTORE', width / 2, 120); // Posisi disesuaikan
    context.font = '25px Arial';
    context.fillText(`${userData.jam} | ${userData.waktu}`, width / 2, 150); // Posisi disesuaikan
    context.font = 'italic 30px Arial';
    context.fillText('===========================================', width / 2, 220);

    // Menambahkan detail transaksi dengan font yang lebih besar
    context.font = 'bold 40px Arial';
    context.fillText('STRUK PEMBAYARAN', width / 2, 310);
    context.textAlign = 'left'; // Atur penempatan teks menjadi kiri
    context.font = 'bold 30px Montserrat'; // Menggunakan font Montserrat
    context.fillStyle = '#000'; // Warna teks

    // Function to wrap text
    function wrapText(context, text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        let lines = [];
        for (let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let metrics = context.measureText(testLine);
            let testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                lines.push(line);
                line = words[n] + ' ';
            } else {
                line = testLine;
            }
        }
        lines.push(line);
        for (let k = 0; k < lines.length; k++) {
            context.fillText(lines[k], x, y + (k * lineHeight));
        }
        return y + (lines.length * lineHeight); // Return new y position after wrapped text
    }

    const lineHeight = 40; // Tinggi baris

    // Tampilkan informasi transaksi dengan judul dan nilai yang jelas
    let currentY = 400;
    context.fillText(`ID Trx : ${userData.ref_id}`, 50, currentY);
    currentY += lineHeight;
    context.fillText(`No. Tujuan : ${userData.tujuan}`, 50, currentY);
    currentY += lineHeight;
    context.fillText(`Harga : ${formatmoney(userData.harga)}`, 50, currentY);
    currentY += lineHeight;
    context.fillText(`Status : Success`, 50, currentY);
    currentY += lineHeight;

    // Use wrapText for potentially long text fields
    currentY = wrapText(context, `Layanan : ${userData.produk}`, 50, currentY, 700, lineHeight);
    
    context.textAlign = 'center';
    context.font = 'bold 35px Arial';
    currentY += lineHeight; // Add some space before the next section
    context.fillText('SN/VOUCHER/TOKEN :', width / 2, currentY);
    context.font = 'bold 30px Arial';

    // Menyimpan nomor seri dalam array untuk memungkinkan pemisahan ke beberapa baris jika perlu
    const snArray = userData.invoice.match(/.{1,25}/g); // Ubah 25 sesuai dengan jumlah karakter maksimum per baris
    currentY += lineHeight; // Move Y position down for SN lines

    snArray.forEach(sn => {
        context.fillText(sn, width / 2, currentY);
        currentY += 40; // Sesuaikan jarak antar baris
    });

    context.font = 'italic 30px Arial';
    context.fillText('===========================================', width / 2, 890);
    // Menyediakan informasi tentang layanan yang ditawarkan
    currentY += 2 * lineHeight; // Add some space before the next section
    context.font = 'italic 30px Montserrat';
    context.fillStyle = '#333'; // Warna teks yang kontras dengan latar belakang
    context.fillText('Menyediakan Pulsa, Data, Topup Game, Token PLN,', width / 2, 980);
    context.fillText('Bayar Tagihan Listrik, Pdam, Internet, dll', width / 2, 1020);

    // Menambahkan informasi tentang perusahaan di bawah nomor seri
    currentY += 2 * lineHeight; // Add some space before the next section
    context.font = 'bold 25px Montserrat';
    context.fillStyle = '#000'; // Warna teks yang kontras dengan latar belakang
    context.fillText('PT REVOLUSI DIGITAL BANGSA', width / 2, 1080);

    // Simpan struk sebagai gambar PNG
    const buffer = canvas.toBuffer('image/png');
    fs.writeFile(`./SETTING/DB/TRANSACTION/${userData.ref_id}.png`, buffer, callback);
}
// Fungsi untuk mengirim gambar struk

function sendReceiptImage(filePath) {
const fs = require('fs');
    const image = fs.readFileSync(filePath);
    AnanthaGanz.sendMessage(from, { image: image }, { quoted: m });
    // Hapus file setelah dikirim
    setTimeout(() => {
        fs.unlinkSync(filePath);
    }, 4000);
}


case 'print2': {
    
const fs = require('fs');
const axios = require('axios');
    let refId = q.split(" ")[0]; // Menyimpan ref_id yang ingin diperiksa

    if (!refId) {
        reply("Kamu belum memasukkan ref_id yang ingin diperiksa.\n\nContoh : print TPxxxxx");
        return;
    }

    const filePath = './SETTING/DB/dataTrx.json';
    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const allUserData = JSON.parse(fileData);

        const userData = allUserData.find(data => data.ref_id === refId); // Mencari transaksi berdasarkan refId

        if (!userData) {
            return reply(`Oops, tidak dapat melakukan print silahkan cek refid pembelian`);
        }

        // Memanggil fungsi createReceipt dengan userData yang sesuai
        createReceipt(userData);
async function createReceipt(userData) {
     let uig = userData.harga * 1;
const roundedHarga = Math.round(uig);
const formattedHarga = roundedHarga.toLocaleString('id-ID', { minimumFractionDigits: 0 });

const apiUrl = `https://api.lolhuman.xyz/api/creator/receipt2?apikey=virtualDimension&logo=https://telegra.ph/file/5d1c57b13cc0e902dd02b.jpg&name=ZANNSTORE&background=https://telegra.ph/file/972ac28302d15bfd1b828.jpg&product=${userData.produk}/Rp. ${formattedHarga}&reff_id=${userData.ref_id}&serial_number=${userData.invoice}&destination=${userData.tujuan}&status=Succes&time=${userData.jam} ~ ${userData.waktu}&status_color=green`;

const response = await axios.get(apiUrl, { responseType: 'stream' });
                

                if (response.status === 200) {
                    const filePath = `./SETTING/DB/TRANSACTION/${koderefe}.jpg`;
                    const writer = fs.createWriteStream(filePath);
                    const finishPromise = new Promise((resolve, reject) => {
                        writer.on('finish', () => {
                            resolve(filePath);
                        });

                        writer.on('error', (err) => {
                            reject(err);
                        });
                    });
                    response.data.pipe(writer);
                    await finishPromise;

                    let receipt = {
                        image: fs.readFileSync(filePath),
                        caption: "Haloo",
                        headerType: 5,
                    };
                    // Pastikan variabel 'from' dan 'm' didefinisikan sebelumnya
                     AnanthaGanz.sendMessage(from, receipt, { quoted: m });

                    return filePath;
                } else {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
           }
    } catch (error) {
        console.error('Error reading the transaction history file:', error);
        reply("Gagal, Ada Masalah Ketika Membaca data, silahkan hubungi Admin");
    }


    break;
}
case 'upscale': case 'hdr': {
  
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./uploader')
  
  reply(mess.wait);
  
  try {
    let ahah = await AnanthaGanz.downloadAndSaveMediaMessage(quoted, `./SETTING/DB/${m.sender.split('@')[0]}.jpg`);
    let memey = await TelegraPh(ahah);
    let get_result = await getBuffer(`https://api.lolhuman.xyz/api/upscale?apikey=virtualDimension&img=${memey}`);
    
    
    AnanthaGanz.sendMessage(from, { image: get_result, caption: `*Done converter HD*` }, { quoted: m });
    fs.unlinkSync(ahah);
  } catch (err) {
    console.log(err);
    reply('Terjadi kesalahan, coba lagi nanti');
  
  }
}

break;
case 'bacaqr': case 'bacaqr': {
  let axios = require("axios");
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./uploader')
  
  reply(mess.wait);
  
  
    let ahah = await AnanthaGanz.downloadAndSaveMediaMessage(quoted, `./SETTING/DB/${m.sender.split('@')[0]}.jpg`);
    let memey = await TelegraPh(ahah);
    const url = `https://api.lolhuman.xyz/api/read-qr?apikey=virtualDimension&img=${memey}`
    axios.get(url)
  .then(response => {
    reply(response.data.result);
    fs.unlinkSync(ahah);
  })
  .catch(error => {
    reply(error.response.data.message);
  });
}

break;
case 'buatqr':{
let axios = require("axios");
if (!text) {
reply("textmana")
}
const apiUrl = `https://api.lolhuman.xyz/api/qrcode?apikey=virtualDimension&text=${encodeURIComponent(text)}`
const response = await axios.get(apiUrl, { responseType: 'stream' });
                if (response.status === 200) {
                    const filePath = `./SETTING/DB/${koderefe}.jpg`;
                    const writer = fs.createWriteStream(filePath);
                    const finishPromise = new Promise((resolve, reject) => {
                        writer.on('finish', () => {
                            resolve(filePath);
                        });

                        writer.on('error', (err) => {
                            reject(err);
                        });
                    });
                    response.data.pipe(writer);
                    await finishPromise;

                    let receipt = {
                        image: fs.readFileSync(filePath),
                        caption: "Haloo",
                        headerType: 5,
                    };
                    // Pastikan variabel 'from' dan 'm' didefinisikan sebelumnya
                     AnanthaGanz.sendMessage(from, receipt, { quoted: m });

                    return filePath;
                } else {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
    }
    break 
case 'nulisbuku':{
let axios = require("axios");
if (!text) {
reply("textmana")
}
const apiUrl = `https://api.lolhuman.xyz/api/nulis?apikey=virtualDimension&text=${encodeURIComponent(text)}`
const response = await axios.get(apiUrl, { responseType: 'stream' });
                if (response.status === 200) {
                    const filePath = `./SETTING/DB/${koderefe}.jpg`;
                    const writer = fs.createWriteStream(filePath);
                    const finishPromise = new Promise((resolve, reject) => {
                        writer.on('finish', () => {
                            resolve(filePath);
                        });

                        writer.on('error', (err) => {
                            reject(err);
                        });
                    });
                    response.data.pipe(writer);
                    await finishPromise;

                    let receipt = {
                        image: fs.readFileSync(filePath),
                        caption: "Haloo",
                        headerType: 5,
                    };
                    // Pastikan variabel 'from' dan 'm' didefinisikan sebelumnya
                     AnanthaGanz.sendMessage(from, receipt, { quoted: m });

                    return filePath;
                } else {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
    }
    break 
case 'roboguru':{
let axios = require("axios");
if (!text) {
reply("textmana")
}
const url = `https://api.lolhuman.xyz/api/roboguru?apikey=virtualDimension&query=${encodeURIComponent(text)}&grade=sma&subject=sejarah`
axios.get(url)
  .then(response => {
    const results = response.data.result;
    const answers = results.map(item => item.answer);
    const questions = results.map(item => item.question);
    const combined = questions.map((question, index) => `${question} - ${answers[index]}`);
    reply(combined.join("\n"));
  })
  .catch(error => {
    reply(error.response.data.message);
  });
    }
    break

case 'ai':
    case 'openai': {
        if (!text) {
      const randomSentences = [
        "Hai, ada yang bisa aku bantu?",
        "Apa kabar? Ada yang bisa aku bantu hari ini?",
        "Selamat datang! Ada yang ingin kamu tanyakan?",
        "Halo! Aku siap menjawab pertanyaanmu. Apa yang ingin kamu tanyakan?",
        "Ada yang ingin ditanyakan? Aku di sini untuk membantu!",
        "Hai, ada yang ingin kamu diskusikan? Aku siap membantu.",
        "Apakah ada pertanyaan menarik yang ingin kamu ajukan?",
        "Selamat datang di layanan kami! Ada yang ingin kamu tanyakan?",
        "Halo! Jangan ragu untuk mengajukan pertanyaanmu. Aku siap membantu!",
        "Apa yang ingin kamu ketahui hari ini? Tanyakan saja!"
      ];
    
      const randomIndex = Math.floor(Math.random() * randomSentences.length);
      const randomResponse = randomSentences[randomIndex];
    
      return reply(randomResponse);
    }
      
      
      fetch(`https://api.lolhuman.xyz/api/openai?apikey=virtualDimension&text=${encodeURIComponent(text)}&user=user-unique-id`)
        .then(res => res.json())
        .then(data => {
          reply(data.result)
        })
        .catch(err => {
          console.error(err)
          reply(`Terjadi kesalahan saat meminta respon AI. Silakan coba lagi nanti.`)
        })
      }
      break

    case 'resetapi': {
        if (!isOwner) return reply(mess.owner);
        sett("merchant_id", m.sender, "");
        sett("secret_key", m.sender, "");
        sett("tokopay", m.sender, true);
        sett("digiuser", m.sender, "");
        sett("digiapi", m.sender, "");
        sett("digiflazz", m.sender, true);
        sett("allapi", m.sender, true);
        sett("pdsini", m.sender, "");
        sett("paydisini", m.sender, true);
        reply("Berhasil, Reset ke default");
        break;
    }
    case 'setapizann':{
    let ananthaNick = text.split(" ")[0];
        if (!ananthaNick) return reply("Mohon masukkan API key Nick yang valid, contoh: .setapizann zannkey-NxpMXoIo93-d3ECg");
    const axios = require("axios");
    var config = {
        method: 'POST',
        url: 'https://zannstoresmm.my.id/api/config.php',
        data: new URLSearchParams(Object.entries({
            api_key: ananthaNick,
            action: 'profile',
        })),
    };

    axios(config)
        .then(function (response) {
            if (response.data.status == true) {
                let newData = response.data.data;
             reply(` Berhasil Terkoneksi\n\nPUSAT SMM & NICK\n\nUsername : ${newData.username}\nBalance : ${formatmoney(newData.balance * 1)}\nVendor : https://zannstoresmm.my.id/`)
             sett("APInick", m.sender, ananthaNick)
    
            } else {
                console.log('Gagal mendapatkan data dari API: ', response.data);
                reply(`${response.data.data.msg}`)
            }
        })
        .catch(function (error) {
            console.log('Error saat mengakses API: ', error);
        });
    }
    break
    
    case 'settokopay': {
    if (!isOwner) return reply(mess.owner);
    const [mrcht, scrt] = text.split("|");
    if (!mrcht || !scrt) return reply("Mohon masukkan merchant id dan secret tokopay yang valid, contoh: .settokopay M231204FSVYUI08|f819ce792a81cc8235f2d8e80465");

    const md5 = require('md5');
    const axios = require('axios');
    const signature = md5(`${mrcht}:${scrt}`);

    const data = {
        "merchant_id": mrcht,
        "signature": signature
    };

    (async () => {
        try {
            const response = await axios.post('https://api.tokopay.id/v1/merchant', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const { nama_toko, saldo_tertahan, saldo_tersedia } = response.data.data;
            const formattedTertahan = formatmoney(saldo_tertahan);
            const formattedTersedia = formatmoney(saldo_tersedia);

            m.reply(`Berhasil Terkoneksi :\n\n*TOKOPAY INFO*\n\n*Nama Akun :* ${nama_toko}\n*Saldo Tertahan :* ${formattedTertahan}\n*Saldo Tersedia :* ${formattedTersedia}`);

            sett("merchant_id", ananthaa, mrcht);
            sett("secret_key", ananthaa, scrt);
            sett("tokopay", ananthaa, false);
            sett("allapi", ananthaa, false);
        } catch (error) {
            if (error.response) {
                m.reply(`Gagal, ${error.response.data.message}`);
            } else {
                console.error('Error fetching TokoPay info:', error);
                m.reply("Oops, Merchant_id & secret_key salah atau tidak ditemukan");
            }
        }
    })();
    break;
}
    case 'setpaydisini': {
    if (!isOwner) return reply(mess.owner);
    let payd = text.split(" ")[0];
    if (!payd) return reply("Mohon masukkan API key Paydisini yang valid, contoh: .setpaydisini f819ce792a81cc8235f2d8e80465");

    const axios = require('axios');
    const md5 = require('md5');
    const qs = require('qs');
    const signa3 = md5(payd + 'Profile');

    const data = qs.stringify({
        key: payd,
        request: 'profile',
        signature: signa3
    });

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://paydisini.co.id/api/',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };

    axios(config)
        .then(response => {
            if (response.data.data) {
                let tersedia = response.data.data.saldo * 1;
                let tertahan = response.data.data.saldo_tertahan * 1;
                reply(`BERHASIL TERKONEKSI \n\n> Nama : ${response.data.data.full_name}\n> Merchant : ${response.data.data.merchant}\n> No.Telp : ${response.data.data.telephone}\n> Email : ${response.data.data.email}\n> Saldo Tersedia : ${formatmoney(tersedia)}\n> Tertahan : ${formatmoney(tertahan)}\n> Auto Withdraw : ${response.data.data.auto_wd}`);
                sett("pdsini", m.sender, payd);
                sett("paydisini", m.sender, false);
                sett("allapi", m.sender, false);
            } else {
                reply("Oops, APIkey Tidak ditemukan atau salah");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            reply("Oops, APIkey Tidak ditemukan atau salah");
        });
    break;
}
    case 'setdigi': {
    if (!isOwner) return reply(mess.owner);
    let [digius, digiap] = text.split("|");
    if (!digius || !digiap) return reply("Mohon masukkan username dan API key Digiflazz yang valid, contoh: .setdigi recfygj|tcjwjwjw");

    const crypto = require("crypto");
    const axios = require("axios");

    const hash = crypto.createHash('md5').update(digius + digiap + 'depo').digest('hex');

    const data = {
        "cmd": "deposit",
        "username": digius,
        "sign": hash
    };

    (async () => {
        try {
            const response = await axios.post('https://api.digiflazz.com/v1/cek-saldo', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.data.data) {
                const profile = response.data.data;
                const df = `Berhasil Terkoneksi : ${formatmoney(profile.deposit)}`;
                sett("digiuser", m.sender, digius);
                sett("digiapi", m.sender, digiap);
                sett("digiflazz", m.sender, false);
                sett("allapi", m.sender, false);
                m.reply(df);
            } else {
                reply("Oops, API key Tidak ditemukan atau salah");
            }
        } catch (error) {
            console.error("Error:", error);
            reply("Oops, API key Tidak ditemukan atau salah");
        }
    })();

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
case 'customgame': {
  
  await loading(); // Send a wait message

  // Function to create an image message
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, {
      upload: AnanthaGanz.waUploadToServer
    });
    return imageMessage;
  }

  // Manually define images and names for each game
  const games = {
    1: { name: "Honor of Kings", imageUrl: "https://telegra.ph/file/df77a6229af249d061296.jpg", namaG: ".list HONOR OF KINGS" },
    2: { name: "Mobile Legends", imageUrl: "https://telegra.ph/file/e718f04780edbfdc2c6c9.jpg", namaG: ".list MOBILE LEGENDS" },
    3: { name: "Free Fire", imageUrl: "https://telegra.ph/file/31136e38075cea27f9a39.jpg", namaG: ".list FREE FIRE" },
    4: { name: "Pubg Mobile", imageUrl: "https://telegra.ph/file/48e81b0a8a4bca01693a6.jpg", namaG: ".list Pubg Mobile" },
    5: { name: "Genshin Impact", imageUrl: "https://telegra.ph/file/71ea4de0ff64b55134a73.jpg", namaG: ".list Genshin Impact" }
  };

  // Prepare the message content with the images and names for the game
  let push = [];
  for (let i = 1; i <= 5; i++) {
    if (games[i]) {
      push.push({
        body: { text: `${games[i].name}` },
        footer: { text: `${footer}` },
        header: {
          title: 'POPULER +++',
          hasMediaAttachment: true,
          imageMessage: await createImage(games[i].imageUrl)
        },
        nativeFlowMessage: {
          buttons: [
                                  {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"TOPUP SEKARANG","id":"${games[i].namaG}"}` 
                        }
            
          ]
        }
      });
    }
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
case 'plnkuu': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
if (cek("cekVerify", m.sender) == true) return sendVerif()
    if(cek("syarat", m.sender) == true) return sendSyaratAnanthaa()
    const productData = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8'));
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
                },
                {
                    header: "TAGIHAN PLN",
                    title: "PLN PASCABAYAR",
                    description: `Powered by ${footer}`,
                    id: "List2 PLN PASCABAYAR"
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
case 'gamekuu': {

  const productData = JSON.parse(fs.readFileSync('./SETTING/DB/dataPrepaid.json', 'utf8'));
  const requestedCategory = "Games";
  let brands = [...new Set(productData.filter(item => item.category === requestedCategory).map(item => item.brand))];

  if (brands.length > 0) {
    const sections = brands.map((brand) => {
      const rows = [
        {
          header: ``,
          title: `${brand}`,
          description: ``,
          id: `.list ${brand}`
        }
      ];
      const section = {
        title: brand,
        rows: rows
      };

      // Add highlight_label for popular games
      if (['MOBILE LEGENDS', 'FREE FIRE', 'PUBG MOBILE', 'Honor of Kings', 'Genshin Impact'].includes(brand)) {
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
}
break;
case 'getsmm': {
    if (m.isGroup) return m.reply('Fitur Khusus Private Chat');
    if (!isOwner) return m.reply("Fitur khusus owner!");
    let hi = q.split(" ")[0]
    if (!hi) return reply("Oops format salah\nContoh : .getsmm 1.1\n 1.1 = 10%\n1.2 = 20%")
    const crypto = require("crypto");
    const axios = require("axios");
    const md5 = require('md5');
    const fs = require('fs'); // Modul untuk operasi file

   
    const Api_Key = global.AnanthaCEK
  

    var config = {
        method: 'POST',
        url: 'https://zannstoresmm.my.id/api/config.php',
        data: new URLSearchParams(Object.entries({
            api_key: Api_Key,
            action: 'services',
        })),
    };

    axios(config)
        .then(function (response) {
            if (response.data.status == true) {
                let newData = response.data.data;
             console.log(newData)
                // Menaikkan harga sebesar 10%
                // Menaikkan harga sebesar 10% dan membulatkannya
newData.forEach(service => {
    service.price *= hi; // Menambahkan 10% ke harga saat ini
    service.price = Math.round(service.price); // Memastikan harga dibulatkan
});

                // Konversi data ke format JSON string setelah dimodifikasi
                let data_file = JSON.stringify(newData, null, 2);

                // Simpan data yang sudah dimodifikasi ke dalam file
                fs.writeFileSync("./SETTING/DB/zannstoresmm.json", data_file);

                console.log('Data berhasil disimpan ke zannstoresmm dengan harga produk dimodifikasi');
            } else {
                console.log('Gagal mendapatkan data dari API: ', response.data);
            }
        })
        .catch(function (error) {
            console.log('Error saat mengakses API: ', error);
        });
}
break;
case 'getprofile': {
    if (m.isGroup) return m.reply('Fitur Khusus Private Chat');
    if (!isOwner) return m.reply("Fitur khusus owner!");
   
    const crypto = require("crypto");
    const axios = require("axios");
    const md5 = require('md5');
    const fs = require('fs'); // Modul untuk operasi file

   
    const Api_Key = global.AnanthaCEK
  

    var config = {
        method: 'POST',
        url: 'https://zannstoresmm.my.id/api/config.php',
        data: new URLSearchParams(Object.entries({
            api_key: "zannkey-83BlnhK4LB-s5Ybk",
            action: 'profile',
        })),
    };

    axios(config)
        .then(function (response) {
            if (response.data.status == true) {
                let newData = response.data.data;
             console.log(newData)
              
            } else {
                console.log('Gagal mendapatkan data dari API: ', response.data);
            }
        })
        .catch(function (error) {
            console.log('Error saat mengakses API: ', error);
        });
}
break;





case 'smm': {
    if (cek("verifyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (cek("cekVerify", m.sender) == true) return sendVerif();
    if (cek("syarat", m.sender) == true) return sendSyaratAnanthaa();

    const productData = JSON.parse(fs.readFileSync('./SETTING/DB/zannstoresmm.json', 'utf8'));

    // Mendapatkan daftar kategori unik
    let categories = [...new Set(productData.map(item => item.category))];

    if (categories.length > 0) {
        // Membuat pesan untuk ditampilkan
        const pesan = 'Silakan Pilih Kategori Layanan SMM:';
        
        // Menyiapkan daftar kategori untuk ditampilkan
        let categoryList = categories.map(category => ({
             title: '',
            description: category,
            id: `.smm2 ${category}`  // Menyiapkan id untuk case kedua
        }));

        // Menyiapkan pesan interaktif dengan daftar kategori
        let smmMsg = generateWAMessageFromContent(from, {
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
                            text: 'Pilih kategori layanan:'
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: 'Pilih Kategori SMM',
                            subtitle: '',
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "Pilih Kategori SMM",
                                        sections: [
                                            {
                                                rows: categoryList
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

        await AnanthaGanz.relayMessage(smmMsg.key.remoteJid, smmMsg.message, {
            messageId: smmMsg.key.id
        }, { quoted: m });
    }
    break;
}

case 'smm2': {
    const category = q.trim().toLowerCase();
    if (!category) return reply(`*Masukkan Nama Produk*\n*Contoh:* ${prefix}smm2 youtube subscribers`);

    const productData = JSON.parse(fs.readFileSync('./SETTING/DB/zannstoresmm.json', 'utf8'));

    // Filter produk berdasarkan kategori yang dipilih
    let products = productData.filter(item => item.category.toLowerCase() === category.toLowerCase());

    if (products.length > 0) {
        // Membuat pesan untuk ditampilkan
        
        // Menyiapkan daftar produk untuk ditampilkan
       let pesan = products.map(product => ({
            title: '',
            description: product.name,
            id: `.smmku ${product.name}`
        }));

        // Menyiapkan pesan interaktif dengan daftar produk
        let smmMsg = generateWAMessageFromContent(from, {
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
                            title: `${category}`,
                            subtitle: '',
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: `CLICK HERE`,
                                        sections: [
                                            {
                                                rows: pesan
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

        await AnanthaGanz.relayMessage(smmMsg.key.remoteJid, smmMsg.message, {
            messageId: smmMsg.key.id
        }, { quoted: m });
    } else {
        reply(`Tidak ada produk dalam kategori '${category}'`);
    }
    break;
}
case 'smmku': {
    if (cek("verfiyemail", m.sender) == true) return reply(`Oops, Silahkan Daftarkan Email anda\nContoh : .setemail xxxxx@gmail.com`);
    if (!isOwner) return m.reply(mess.owner);
    if (m.isGroup) return m.reply(mess.private);

    // Mengambil nama produk dari pesan yang dikirimkan
    let query = q.trim().toLowerCase();
    if (!query) return reply(`*Masukkan Nama Produk*\n*Contoh:* ${prefix}smmku shopee followers`);

    // Membaca data dari file JSON
    const productData = JSON.parse(fs.readFileSync('./SETTING/DB/zannstoresmm.json', 'utf8'));

    // Mencari layanan berdasarkan nama produk
    const matchingProducts = productData.filter(item => {
        // Memeriksa apakah nama produk mengandung query yang diminta
        return item.name.toLowerCase().includes(query);
    });

    // Jika tidak ada layanan yang cocok dengan nama produk yang diminta, beri tahu pengguna
    if (matchingProducts.length === 0) {
        return reply(`Gak ada layanan dengan nama produk '${query}', coba yang lain ya.`);
    }

    // Membuat respons yang diformat dengan baik berdasarkan layanan yang ditemukan
    let formattedResponse = "𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗦𝗜 𝗣𝗥𝗢𝗗𝗨𝗖𝗧\n";
    matchingProducts.forEach(product => {
        formattedResponse += `
› 𝗡𝗮𝗺𝗮 𝗣𝗿𝗼𝗱𝘂𝗸 : ${product.name}
› 𝗞𝗮𝘁𝗲𝗴𝗼𝗿𝗶 : ${product.category}
› 𝗣𝗿𝗶𝗰𝗲 : ${formatmoney(product.price)}
› *Code :* ${product.id}
› 𝗠𝗶𝗻 : ${product.min} - ${product.max}
› 𝗡𝗼𝘁𝗲 : ${product.note}
\n`;
    });

    // Mengirim pesan respons dengan informasi layanan yang diformat dengan baik
    
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
                    title: `${formattedResponse}`,
                    subtitle: '',
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                    {
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Format Order SMM","id":".ordersmm"}`
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
break;
case 'ordersmm': {
    if (cek("smm_status", m.sender) == false) 
        return Zann()
    let code_smm = q.split("|")[0];
    let tujuan_smm = q.split("|")[1];
    let limit_smm = parseInt(q.split("|")[2]); // Pastikan limit_smm diubah menjadi angka
    let foty = '`';
    let order_contoh = `  *TIPS ORDER :*  \n\n*${foty}${prefix}ordersmm <code>|<link/username>|<jumlah>${foty}*\n\n> *Contoh : ${prefix}ordersmm 234|@|50*\n\n*NOTE :*\nPerlu Diingat!! Silahkan Cek Dulu *Nomor Tujuan* kamu pastiin udh bener ya
    `;
    if (!code_smm) return reply(order_contoh);
    if (!tujuan_smm) return reply(order_contoh);
    if (isNaN(limit_smm)) return reply(order_contoh); // Periksa jika limit_smm bukan angka
    
    let smmFound = false;

    for (let smm of zannSmm) {
        if (smm.id == code_smm) {
            smmFound = true;
            let price_smm = parseFloat(smm.price); // Pastikan price_smm diubah menjadi angka
            let name_smm = smm.name;
            let description_smm = smm.note;
            let minimal_smm = parseInt(smm.min); // Pastikan minimal_smm diubah menjadi angka
            let maximal_smm = parseInt(smm.max); // Pastikan maximal_smm diubah menjadi angka
            
            if (limit_smm < minimal_smm) {
                return reply(`Jumlah yang Anda masukkan kurang dari minimal yang diperbolehkan (${minimal_smm}).`);
            } else if (limit_smm > maximal_smm) {
                return reply(`Jumlah yang Anda masukkan lebih dari maksimal yang diperbolehkan (${maximal_smm}).`);
            } else {
                // Calculate the total price (assuming price_smm is per 1K units)
                let total_price = (price_smm * limit_smm) / 1000;
               let hargaKuy = Math.round(total_price);
                if (isNaN(hargaKuy) || hargaKuy <= 0) {
                    return reply(`Terjadi kesalahan pada perhitungan harga. Silakan coba lagi.`);
                }
                
                sett("smm_harga", m.sender, hargaKuy);
                sett("smm_name", m.sender, name_smm);
                sett("smm_status", m.sender, false);
                sett("smm_no", m.sender, tujuan_smm);
                sett("smm_code", m.sender, code_smm);
                sett("smm_quantity", m.sender, limit_smm);
                sett("layanan", m.sender, description_smm);
            }
            break;
        }
    }

    if (!smmFound) {
        return reply(`Oops, Kode *${code_smm}* tidak ditemukan, coba cek lagi :)`);
    }

    let harga = cek("smm_harga", m.sender) * 1; // Mendapatkan harga produk dari database
    let invoice = `*RINCIAN PEMESANAN*

> Status : Menunggu Konfirmasi 
> Layanan : ${cek("smm_name", m.sender)}  
> Tujuan : ${cek("smm_no", m.sender)}
> Jumlah : ${cek("smm_quantity",m.sender)}
> Harga : ${formatmoney(harga)}
> Waktu : ${moment.tz(`Asia/${waktuzone}`).format('HH:mm:ss')} | ${moment.tz(`Asia/${waktuzone}`).format('DD/MM/YY')}
> Description = ${cek("layanan",m.sender)}

Apakah data pesanan kamu sudah benar?`;

    let saldoku = cek("saldo", m.sender) * 1;

    const sections = [
        {
            title: `Secure Payment by ${footer}`,
            highlight_label: "24 Jam",
            rows: [
                { header: "", title: `tpcash`, description: `${formatmoney(saldoku)}`, id: ".lanjutsmm" }
            ]
        },
        {
            rows: [
                { header: "", title: `Membatalkan Transaksi`, description: ``, id: ".batalsmm" }
            ]
        }
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
    break;
}
            case 'addsmm':{
            let saldo = q.split(" ")[0]
            let hy = saldo * 1
            sett("+saldosmm", m.sender, 2000);
            }
            break

case 'lanjutsmm': {
    const APIKEY = global.AnanthaCEK
    if (cek("smm_status", m.sender)) return reply(`Oops, Kamu tidak memiliki status pesanan :)`);
    const axios = require('axios');
    let code_smm = cek("smm_code", m.sender);

    for (let smm of zannSmm) {
        if (smm.id == code_smm) {
         let ananthaZ = cek("smm_harga", m.sender) * 1;
            if (ananthaZ > cek("saldo", m.sender)) return reply("Oops, Saldo tidak cukup");

            let smm_no = cek("smm_no", m.sender);
            let harga = Math.round(cek("smm_harga", m.sender) * 1);
            sett("-saldo", m.sender, harga);
            let name = cek("smm_name", m.sender);
            let quanty = cek("smm_quantity", m.sender);

            async function orderAndCheckStatus() {
                try {
                    // Melakukan transaksi order
                    let orderData = {
                        api_key: APIKEY,
                        action: "order",
                        service: code_smm,
                        data: smm_no,
                        quantity: quanty
                    };

                    const orderResponse = await axios.post('https://zannstoresmm.my.id/api/config.php', new URLSearchParams(Object.entries(orderData)));

                    if (orderResponse.data.status === false) {
                        reply(orderResponse.data.data.msg);
                        return;
                    }

                    const orderResult = orderResponse.data.data;
                    reply(`*RINCIAN PEMESANAN*\n> Trxid : #${orderResult.id}\n> Layanan : ${name}\n> No. Tujuan : ${smm_no}\n> Status : Pending\n> Harga : ${formatmoney(harga)}\n> Jumlah : ${quanty}\n> Catatan : Pesanan Kamu sedang di proses paling lama 24 jam`);

                    let trxid = orderResult.id;
                    sett("desc", sender, trxid);
                    let dataStatus = orderResult.status;

                    // Memeriksa status transaksi setiap 5 detik
                    while (dataStatus !== "Success") {
                        await sleep(5000);

                        let statusData = {
                            api_key: APIKEY,
                            action: "status",
                            id: trxid
                        };

                        const statusResponse = await axios.post('https://zannstoresmm.my.id/api/config.php', new URLSearchParams(Object.entries(statusData)));

                        if (statusResponse.data.status === false) {
                            reply(statusResponse.data.data.msg);
                            return;
                        }

                        const statusResult = statusResponse.data.data;
                        if (statusResult) {
                            dataStatus = statusResult.status;

                            console.log(dataStatus);

                            if (dataStatus === "Error") {
                                reply("Transaksi Gagal, Saldo Telah Dikembalikan Ke akun kamu");
                                sett("+saldo", m.sender, harga);
                                setTimeout(() => {
                                    sett("smm_harga", sender, "");
    sett("smm_name", sender, "");
    sett("smm_status", sender, true);
    sett("smm_no", sender, "");
    sett("smm_code", sender, "");
    sett("smm_quantity", sender, "");
                                }, 1200);
                                break;
                            }

                            if (dataStatus === "Success") {
                                reply(`*RINCIAN PEMESANAN*\n> Trxid : #${cek("desc", m.sender)}\n> Layanan : ${name}\n> No. Tujuan : ${smm_no}\n> Status : ${statusResult.status}\n> Harga : ${formatmoney(harga)}\n> Jumlah : ${quanty}\n> Catatan : start_count:${statusResult.start_count}/remains:${statusResult.remains}`);
                                  
                                setTimeout(() => {
                                    sett("smm_harga", sender, "");
    sett("smm_name", sender, "");
    sett("smm_status", sender, true);
    sett("smm_no", sender, "");
    sett("smm_code", sender, "");
    sett("smm_quantity", sender, "");
                                }, 1200);
                                break;
                            }
                        } else {
                            reply('Error: "data" field is missing in status response');
                            break;
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            orderAndCheckStatus();
        }
    }
    break;
}



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
