const bedrock = require('bedrock-protocol')

const client = bedrock.createClient({
  host: 'Tusharwhx.aternos.me',
  port: 34671,
  username: 'AFK_Bot_24x7',
  offline: true
})

client.on('connect', () => {
  console.log('Bot server se connect ho raha hai...')
})

client.on('spawn', () => {
  console.log('Bot Join Ho Gaya! AFK ON')
})

client.on('disconnect', (packet) => {
  console.log('Disconnect ho gaya, 5 sec me restart:', packet)
  setTimeout(() => process.exit(1), 5000)
})

client.on('error', (err) => {
  console.log('Error:', err)
})
