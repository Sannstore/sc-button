/**
   * Coded by JamvanHax0r 
   * Fiony Alveria Tantri
   * Fiony Shop
**/

require('./config.js')
const makeWASocket = require("@whiskeysockets/baileys").default
const { uncache, nocache } = require('./lib/loader.js')
const { color } = require('./lib/color.js')
const NodeCache = require("node-cache")
const readline = require("readline")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const { Low, JSONFile } = require('./lib/lowdb/index.js')
const yargs = require('yargs/yargs')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const _ = require('lodash')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif.js')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/myfunc.js')
const { default: JamvanHax0rConnect, getAggregateVotesInPollMessage, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@whiskeysockets/baileys")

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(new JSONFile(`src/database.json`))

global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    database: {},
    chats: {},
    game: {},
    settings: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

if (global.db) setInterval(async () => {
   if (global.db.data) await global.db.write()
}, 30 * 1000)

require('./fionyshop.js')
nocache('../fionyshop2.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./main.js')
nocache('../main.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))

//------------------------------------------------------
let phoneNumber = "6281244286074"
let owner = global.owner

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

async function startJamvanHax0r() {
let { version, isLatest } = await fetchLatestBaileysVersion()
const {  state, saveCreds } =await useMultiFileAuthState(`./FionyShop`)
    const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
    const JamvanHax0r = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // popping up QR in terminal log
      mobile: useMobile, // mobile api (prone to bans)
      browser: [ "Ubuntu", "Chrome", "20.0.04" ], // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      markOnlineOnConnect: true, // set false for offline
      generateHighQualityLinkPreview: true, // make high preview link
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })
   
   store.bind(JamvanHax0r.ev)

    // login use pairing code
   // source code https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
   if (pairingCode && !JamvanHax0r.authState.creds.registered) {
      if (useMobile) throw new Error('Cannot use pairing code with mobile api')

      let phoneNumber
      if (!!phoneNumber) {
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Start with country code of your WhatsApp Number, Example : +62xxx")))
            process.exit(0)
         }
      } else {
         phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number \nFor example: +62xxx : `)))
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         // Ask again when entering the wrong number
         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Start with country code of your WhatsApp Number, Example : +62xxx")))

            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number \nFor example: +62xxx : `)))
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            rl.close()
         }
      }

      setTimeout(async () => {
         let code = await JamvanHax0r.requestPairingCode(phoneNumber)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
      }, 3000)
   }
   
   

JamvanHax0r.ev.on('connection.update', async (update) => {
	const {
        
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Bad Session File, Please Delete Session and Scan Again`);
				startJamvanHax0r()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Connection closed, reconnecting....");
				startJamvanHax0r();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Connection Lost from Server, reconnecting...");
				startJamvanHax0r();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
				startJamvanHax0r()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Device Logged Out, Please Delete Session and Scan Again.`);
				startJamvanHax0r();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Restart Required, Restarting...");
				startJamvanHax0r();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Connection TimedOut, Reconnecting...");
				startJamvanHax0r();
			} else JamvanHax0r.end(`Unknown DisconnectReason: ${reason}|${connection}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\nConnecting...`, 'white'))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			console.log(color(` `,'magenta'))
            console.log(color(`Connected to => ` + JSON.stringify(JamvanHax0r.user, null, 2), 'green'))
			await delay(1999)
       const CFonts = require('cfonts');
CFonts.say('Sparkling', {
  font: '3d',              // Jenis font
  align: 'left',            // Posisi teks (left, center, right)
  colors: ['green', 'white'],    // Warna teks
  background: 'transparent',  // Warna latar belakang
  letterSpacing: 1,           // Spasi antar huruf
  lineHeight: 1,              // Tinggi baris
  space: true,                // Spasi antar karakter
  maxLength: '0',             // Panjang maksimal teks (0 untuk tidak dibatasi)
});

     
            
            console.log('> Sukses terkoneksi ke Bot!')
		}
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  startJamvanHax0r();
	}
})
JamvanHax0r.ev.on('creds.update', saveCreds)
JamvanHax0r.ev.on("messages.upsert",  () => { })
//------------------------------------------------------


// Anti Call
    JamvanHax0r.ev.on('call', async (BCCTeam) => {
    	if (global.anticall){
    console.log(BCCTeam)
    for (let BCCHax of BCCTeam) {
    if (BCCHax.isGroup == false) {
    if (BCCHax.status == "offer") {
    let JHBlokMsg = await JamvanHax0r.sendTextWithMentions(BCCHax.from, `*${JamvanHax0r.user.name}* can't receive ${BCCHax.isVideo ? `video` : `voice` } call. Sorry @${BCCHax.from.split('@')[0]} you will be blocked. If called accidentally please contact the owner to be unblocked !`)
    JamvanHax0r.sendContact(BCCHax.from, owner, JHBlokMsg)
    await sleep(8000)
    await JamvanHax0r.updateBlockStatus(BCCHax.from, "block")
    }
    }
    }
    }
    })
    //autostatus view
        JamvanHax0r.ev.on('messages.upsert', async chatUpdate => {
        	if (global.antiswview){
            mek = chatUpdate.messages[0]
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
            	await JamvanHax0r.readMessages([mek.key]) }
            }
    })
   
            
    JamvanHax0r.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!JamvanHax0r.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('JHax') && mek.key.id.length === 16) return
            if (mek.key.id.startsWith('BAE5')) return
            m = smsg(JamvanHax0r, mek, store)
            require("./fionyshop.js")(JamvanHax0r, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "Hai aku Fiony Shop"
        }
    }
JamvanHax0r.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
	                global.prefix = prefix
                    var prefCmd = prefix+toCmd
	                JamvanHax0r.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })
      JamvanHax0r.ev.on('group-participants.update', async (anu) => {
    	
console.log(anu)
try {
let metadata = await JamvanHax0r.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await JamvanHax0r.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await JamvanHax0r.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//welcome\\
memb = metadata.participants.length
JHaxWlcm = await getBuffer(ppuser)
JHaxLft = await getBuffer(ppuser)
                if (anu.action == 'add') {
                const jhaxbuffer = await getBuffer(ppuser)
                let jhaxName = num
                const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	            const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length
                jhaxbody = `┌─❖
│「 𝗛𝗶 👋 *Welcome to ${metadata.subject}* 」
└┬❖ 「  @${jhaxName.split("@")[0]}  」
   └───────────────┈ ⳹
   │ *SC BOT TOPUP WITH BUTTON*
   └───────────────┈ ⳹
   │ Cocok Untuk Agen Pulsa,data dll
   ┌─❖ *INTEGRASI :*
   │ ✑ Digiflazz
   │ ✑ Paydisini
   │ ✑ Tokopay
   ┌─❖ *FITUR MEMBER*
   │ • Order Otp All Apk (Nokos)
   │ • Order Suntik Sosmed (SMM)
   │ • Cek Profile
   │ • Deposit Otomatis (via paydisini)
   │ • Deposit Manual (acc owner)
   │ • Pay Langsung Tanpa Depo (QRIS) (PAYDISINI)
   │ • Cek Produk
   │ • Cek Status Pembelian
   │ • Cek Status Produk
   │ • List Produk
   │ • TopUp
   │ • Pembelian Otomatis
   ┌─❖ *FITUR OWNER :* 
   │ • Provider SMM Ada 2 (MEDANPEDIA & IRVANKEDE) 
   │ • Cek Saldo Digiflaz
   │ • Cek Saldo Paydisini
   │ • Cek saldo medan pedia 
   │ • Cek saldo Otp Web
   │ • Daftar User
   │ • Status Pembelian
   │ • Kurangi Saldo Member
   │ • Tambah Saldo Member
   │ • Mutasi Saldo
   │ • Set Keuntungan
   │ • Set Harga
   │ • Rekap Transaksi ( Melihat Riwayat Transaksi )
   ┌─❖ *INFORMASI :* 
   │ 🟢 *Demo :* wa.me/6282196900766?text+menu
   │ 🙋🏻‍♂️ *Owner :* wa.me/6281244286074
   └────────────────┈ ⳹`
JamvanHax0r.sendMessage(anu.id,
 { text: jhaxbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": JHaxWlcm,
"sourceUrl": `https://chat.whatsapp.com/DwVxacM5tc55VOXdA80lp4`}}})
                } else if (anu.action == 'remove') {
                	const jhaxbuffer = await getBuffer(ppuser)
                    const jhaxtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	                const jhaxdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                	let jhaxName = num
                    const jhaxmembers = metadata.participants.length
                    jhaxbody = `┌─❖
│「 𝗛𝗶 👋 *Welcome to ${metadata.subject}* 」
└┬❖ 「  @${jhaxName.split("@")[0]}  」
   └───────────────┈ ⳹
   │ *SC BOT TOPUP WITH BUTTON*
   └───────────────┈ ⳹
   │ Cocok Untuk Agen Pulsa,data dll
   ┌─❖ *INTEGRASI :*
   │ ✑ Digiflazz
   │ ✑ Paydisini
   │ ✑ Tokopay
   ┌─❖ *FITUR MEMBER*
   │ • Order Otp All Apk (Nokos)
   │ • Order Suntik Sosmed (SMM)
   │ • Cek Profile
   │ • Deposit Otomatis (via paydisini)
   │ • Deposit Manual (acc owner)
   │ • Pay Langsung Tanpa Depo (QRIS) (PAYDISINI)
   │ • Cek Produk
   │ • Cek Status Pembelian
   │ • Cek Status Produk
   │ • List Produk
   │ • TopUp
   │ • Pembelian Otomatis
   ┌─❖ *FITUR OWNER :* 
   │ • Provider SMM Ada 2 (MEDANPEDIA & IRVANKEDE) 
   │ • Cek Saldo Digiflaz
   │ • Cek Saldo Paydisini
   │ • Cek saldo medan pedia 
   │ • Cek saldo Otp Web
   │ • Daftar User
   │ • Status Pembelian
   │ • Kurangi Saldo Member
   │ • Tambah Saldo Member
   │ • Mutasi Saldo
   │ • Set Keuntungan
   │ • Set Harga
   │ • Rekap Transaksi ( Melihat Riwayat Transaksi )
   ┌─❖ *INFORMASI :* 
   │ 🟢 *Demo :* wa.me/6282196900766?text+menu
   │ 🙋🏻‍♂️ *Owner :* wa.me/6281244286074
   └────────────────┈ ⳹`
JamvanHax0r.sendMessage(anu.id,
 { text: jhaxbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": JHaxLft,
"sourceUrl": `https://chat.whatsapp.com/DwVxacM5tc55VOXdA80lp4`}}})
}
}
} catch (err) {
console.log(err)
}
})
    JamvanHax0r.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    JamvanHax0r.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = JamvanHax0r.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    JamvanHax0r.getName = (jid, withoutContact = false) => {
        id = JamvanHax0r.decodeJid(jid)
        withoutContact = JamvanHax0r.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = JamvanHax0r.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === JamvanHax0r.decodeJid(JamvanHax0r.user.id) ?
            JamvanHax0r.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

JamvanHax0r.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await JamvanHax0r.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await JamvanHax0r.getName(i)}\nFN:${await JamvanHax0r.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
	    })
	}
	JamvanHax0r.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

    JamvanHax0r.public = true

    JamvanHax0r.serializeM = (m) => smsg(JamvanHax0r, m, store)

    JamvanHax0r.sendText = (jid, text, quoted = '', options) => JamvanHax0r.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    JamvanHax0r.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await JamvanHax0r.sendMessage(jid, {
            image: buffer,
            caption: caption,
            ...options
        }, {
            quoted
        })
    }
    JamvanHax0r.sendTextWithMentions = async (jid, text, quoted, options = {}) => JamvanHax0r.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    JamvanHax0r.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await JamvanHax0r.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

JamvanHax0r.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await JamvanHax0r.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
    JamvanHax0r.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
    JamvanHax0r.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await JamvanHax0r.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}
    
    JamvanHax0r.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return JamvanHax0r.sendMessage(jid, { poll: { name, values, selectableCount }}) }

JamvanHax0r.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
            
    JamvanHax0r.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    return JamvanHax0r
}

startJamvanHax0r()

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})