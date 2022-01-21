Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@AdikaRafi 
AdikaRafi
/
fibot
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
fibot
/
index.js
in
main
 

Tabs

8

No wrap
1
const {
2
WAConnection,
3
MessageType,
4
Presence,
5
MessageOptions,
6
Mimetype,
7
WALocationMessage,
8
WA_MESSAGE_STUB_TYPES,
9
WA_DEFAULT_EPHEMERAL,
10
ReconnectMode,
11
ProxyAgent,
12
GroupSettingChange,
13
waChatKey,
14
mentionedJid,
15
id,
16
} = require('@adiwajshing/baileys')
17
const fs = require('fs')
18
const hx = require('hxz-api')
19
const axios = require("axios")
20
const yts = require('yt-search')
21
const crypto = require('crypto')  
22
const request = require('request')
23
const ffmpeg = require('fluent-ffmpeg')
24
const speed = require('performance-now')
25
const moment = require('moment-timezone')
26
var translate = require('translation-google');
27
const Math_js = require('mathjs')
28
const { lirikLagu } = require('./lib/lirik.js')
29
const { color, bgcolor } = require('./lib/color')
30
const { mediafireDl } = require('./lib/mediafire.js')
31
const { qrcode } = require('./lib/qr.js') 
32
const { dewabatch } = require('./lib/anime.js') 
33
const { fetchJson, fetchText } = require('./lib/fetcher')
34
const fetch = require('node-fetch')
35
const { rugaapi } = require('./lib/rugaApi.js')
36
const { images } = require('./lib/images.js')
37
const { resep } = require('./lib/resep.js')
38
const { exec, spawn, execSync } = require('child_process')
39
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
40
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
41
const zekskey = 'GunturPrst' //ini apikey dari zeks
42
const lolkey = 'ciko' //ini apikey dari lolhuman
43
const { 
44
    processTime, 
45
} = require('./utils')
@AdikaRafi
Commit changes
Commit summary
Create index.js
Optional extended description
Add an optional extended description…
 Commit directly to the main branch.
 Create a new branch for this commit and start a pull request. Learn more about pull requests.
 
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
