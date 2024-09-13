/**
   * Coded by JamvanHax0r 
   * Fiony Alveria Tantri
   * Fiony Shop
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

module.exports = JamvanHax0r = async (JamvanHax0r, m, chatUpdate, store) => {
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
        
        const groupMetadata = m.isGroup ? await JamvanHax0r.groupMetadata(m.chat).catch(e => {}) : ''
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
        
       const reply = (teks) => {JamvanHax0r.sendMessage(from, { text: teks }, { quoted: m })}
       if (m.message) {
      JamvanHax0r.readMessages([m.key]);
      
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
    return JSON.parse(fs.readFileSync(`./SETTING2/DB/${cek("deposit", m.sender)}.json`));
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
    const frames = ["F", "FI", "FIO", "FION", "FIONY", "S", "SH", "SHO", "SHOP"]; // Simbol untuk animasi loading
    const loadingFrames = ["□", "▢", "▣", "▤", "▥", "▦", "▧", "▨", "▩"]; // Simbol untuk loading frames

    let message = await JamvanHax0r.sendMessage(from, { text: `${frames[0]}. ${loadingFrames[0]}` }); // Menambahkan titik dan loading frame pada teks pertama
    let i = 1;
    let j = 1;

    const interval = setInterval(async () => {
        if (i === frames.length) {
            clearInterval(interval);
            await JamvanHax0r.sendMessage(from, { text: `ZANNSTORE`, edit: message.key });
        } else {
            await JamvanHax0r.sendMessage(from, { text: `${frames[i]}. ${loadingFrames[j]}`, edit: message.key }); // Menambahkan titik dan loading frame pada setiap frame
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
return JamvanHax0r.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
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
(id == null || id == undefined || id == false) ? JamvanHax0r.sendMessage(from, {text: teks.trim(), jpegThumbnail: global.JamvanHax0rmenu}, text, { sendEphemeral: true, contextInfo: { mentions: memberr } }) : JamvanHax0r.sendMessage(from, {text: teks.trim(), jpegThumbnail: global.JamvanHax0rmenu}, text, { sendEphemeral: true, quoted: m, contextInfo: { mentions: memberr } })
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
                    return JamvanHax0r.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
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
const dengan_nol = m.sender.replace('@s.whatsapp.net', '').replace('62', '0');
let currentDate = new Date();
let beritatf = "TP" + pickrandoms(4);
let today = new Date();
let tanggaly = today.getDate().toString().padStart(2, '0');
let bulany = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Months are zero-based
let tahuny = String(currentDate.getFullYear()).slice(-2);
let kode_random = pickrandoms(3);

let koderefe = `ZPAY${bulany}${tanggaly}${tahuny}${kode_random}26`;
if (m.sender.startsWith('212')) return JamvanHax0r.updateBlockStatus(m.sender, 'block')
if (m.key.remoteJid == 'status@broadcast') return JamvanHax0r.sendReadReceipt(from, m.sender, [m.key.id])

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
  return 'TP' + day + month + year + randomSymbol + randomSymbol1;
}
global.PayDisiniKey = 'fdc6ceabf189f3b7edcafca47f03b934'
let koderef = pickrandom();
        
let jhax0rr = `${owner}@s.whatsapp.net`
const daftar = () => {
m.reply(`You are not registered yet`)
}
let user = JSON.parse(fs.readFileSync('./SETTING2/DB/dataSmm.json'))
const cek = (satu, dua) => { 
let x1 = false
Object.keys(user).forEach((i) => {
if (user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return user[x1].id }
if (satu == "apiWeb"){ return user[x1].apiWeb }
}

if (x1 == false) { return null } 
}
let sett = (satu, dua, tiga) => { 
Object.keys(user).forEach((i) => {
if (user[i].id == dua){
if (satu == "apiWeb"){ user[i].apiWeb = tiga
fs.writeFileSync('./SETTING2/DB/dataSmm.json', JSON.stringify(user))}
}})

}
if (cek("id", m.sender) == null) {
    if (m.sender == jhax0rr) { // Ganti "id_pemilik" dengan ID pemilik yang valid
        user.push({
            id: m.sender,
            apiWeb: ""
            
        });
    } else {
        user.push({
            id: m.sender,
            apiWeb: ""
        });
    }

    // Simpan data ke file
    fs.writeFileSync('./SETTING2/DB/dataSmm.json', JSON.stringify(user));

}

if (command) {
JamvanHax0r.readMessages([m.key]) 
}

 switch (command) {
 case 'setweb':{
    let jhax0rNick = text.split(" ")[0];
        if (!jhax0rNick) return reply("Mohon masukkan API key Nick yang valid, contoh: .setweb zannkey-NxpMXoIo93-d3ECg");
    const axios = require("axios");
    var config = {
        method: 'POST',
        url: 'https://zannstoresmm.my.id/api/config.php',
        data: new URLSearchParams(Object.entries({
            api_key: jhax0rNick,
            action: 'profile',
        })),
    };

    axios(config)
        .then(function (response) {
            if (response.data.status == true) {
                let newData = response.data.data;
             reply(` Berhasil Terkoneksi\n\nPUSAT SMM & NICK\n\nUsername : ${newData.username}\nBalance : ${formatmoney(newData.balance * 1)}\nVendor : https://zannstoresmm.my.id/`)
             sett("apiWeb", m.sender, jhax0rNick)
    
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
    case 'deposit': {
    if (cek("apiWeb", m.sender) == "") return reply(`Oops, Silahkan Daftarkan ApiKey zannstoresmm.my.id\nContoh : .setweb zannkey-xxx`);
    let send = `${sender.split('@')[0]}`;
    let axios = require('axios');
    let FormData = require('form-data');
    let md5 = require('md5');

    let minimal = 100; // Minimal deposit
    let max = 5000000; // Maximal deposit

    let request_depo = q.split(" ")[0];
    let total = Number(request_depo);

    if (isNaN(request_depo)) {
        reply("Oops, deposit harus berupa angka bukan simbol/selain angka");
        return;
    }
    if (!request_depo) return reply(`Oops, format salah, ikuti yang bener yuk :\n\nContoh: ${prefix + command} 5000`);
    if (total < minimal) return m.reply(`Oops, minimal deposit adalah ${formatmoney(minimal)}`);
    if (total > max) return m.reply(`Oops, Maximal deposit adalah ${formatmoney(max)}`);

    async function makePayment() {
        try {
            let keynya = global.PayDisiniKey;
            let kodeunick = koderefe;
            let paymetcod = '11';
            let aomut = total
            let exp = 10800;
            let create = `${keynya}${kodeunick}${paymetcod}${aomut}${exp}NewTransaction`;
            let signature = md5(create);

            // Membuat data form untuk permintaan pembayaran
            let paymentData = new FormData();
            paymentData.append('key', keynya);
            paymentData.append('request', 'new');
            paymentData.append('merchant_id', '71');
            paymentData.append('unique_code', kodeunick);
            paymentData.append('service', paymetcod);
            paymentData.append('amount', aomut);
            paymentData.append('note', `DEPOSIT WEBSITE`);
            paymentData.append('valid_time', exp);
            paymentData.append('customer_email', "carezannstore@gmail.com");
            paymentData.append('type_fee', '1');
            paymentData.append('signature', signature);

            // Konfigurasi untuk permintaan pembayaran
            let paymentConfig = {
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

            if (!paymentDataResponse || typeof paymentDataResponse.unique_code === 'undefined') {
                reply(`Oops, ${paymentResponse.data.msg}`);
                console.error(paymentResponse.data.msg);
                return;
            }

          reply("Membuat Invoice...")
          setTimeout(() => {
            let ccapt = `  *PEMBAYARAN OTOMATIS*\n\n` +
                        `> Metode : ${paymentDataResponse.service_name}\n` +
                        `> Referensi : ${paymentDataResponse.unique_code}\n` +
                        `> Berlaku : ${getExpirationTime()} menit\n` +
                        `> Total Diterima : ${formatmoney(paymentDataResponse.balance)}\n` +
                        `> Fee : ${formatmoney(paymentDataResponse.fee)}\n` +
                        `> Total Pembayaran : ${formatmoney(paymentDataResponse.amount)}\n`;
let dot = { url: `${paymentDataResponse.qrcode_url}` }
JamvanHax0r.sendMessage(m.sender,{image: dot, caption: ccapt },  { quoted: m })
}, 1000);

            let unick = paymentDataResponse.unique_code;

            function getExpirationTime() {
                const currentTime = new Date().getTime();
                const expirationTime = currentTime + (10 * 60 * 1000); // 10 menit ke depan
                const timeRemaining = Math.ceil((expirationTime - currentTime) / 60000); // Konversi ke menit dan dibulatkan ke atas
                return timeRemaining;
            }

            // Memantau status pembayaran
            let dataStatus = paymentDataResponse.status;
            const startTime = new Date().getTime();
            while (dataStatus !== "Success") {
                await sleep(1000);

                let create3 = `${keynya}${unick}StatusTransaction`;
                let signature3 = md5(create3);

                let checkStatusData = new FormData();
                checkStatusData.append('key', keynya);
                checkStatusData.append('request', 'status');
                checkStatusData.append('unique_code', unick);
                checkStatusData.append('signature', signature3);

                let checkStatusConfig = {
                    method: 'post',
                    url: 'https://paydisini.co.id/api/',
                    headers: {
                        ...checkStatusData.getHeaders()
                    },
                    data: checkStatusData
                };

                let statusResponse = await axios(checkStatusConfig);
                let statusDataResponse = statusResponse.data.data;
                dataStatus = statusDataResponse.status;
                console.log(dataStatus);

                const currentTime = new Date().getTime();
                const elapsedTime = (currentTime - startTime) / (1000 * 60 * 10);

                if (elapsedTime >= 1) {
                    reply("Pembayaran Kadaluarsa");
                    break;
                }

                if (dataStatus === "Success") {
                    let config = {
                        method: 'POST',
                        url: 'https://zannstoresmm.my.id/v2/bot.php',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: new URLSearchParams({
                            api_key: cek("apiWeb", m.sender),
                            action: 'deposit',
                            amount: statusDataResponse.balance,
                            trxid: statusDataResponse.unique_code,
                            metode: "QRIS"
                        }).toString()
                    };

                    axios(config)
                        .then(function (response) {
                            if (response.data.status) {
                                let newData = response.data.data;
                                console.log(newData);
                                reply(`Deposit berhasil. Saldo terbaru: ${newData.balance}`);
                            } else {
                                console.log('Gagal mendapatkan data dari API: ', response.data);
                                reply(`${response.data.data.msg}`);
                            }
                        })
                        .catch(function (error) {
                            console.log('Error saat mengakses API: ', error);
                            reply('Terjadi kesalahan saat mengakses API.');
                        });

                } else if (dataStatus === "Canceled") {
                    console.log(`Berhasil! Ref ${cek("deposit", m.sender)} Dihapus`);
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
JamvanHax0r.sendMessage("6281244286074@s.whatsapp.net", { text: errorMessage });
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
