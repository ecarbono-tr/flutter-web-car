const { RealtimeClient } = require('@supabase/realtime-js')
const REALTIME_URL = process.env.REALTIME_URL || 'https://ugvulbowcrdkhgxdbzvy.supabase.co'
var client = new RealtimeClient(REALTIME_URL)
client.connect()

var databaseChanges = client.channel('realtime:*')
databaseChanges.on('*', (e) => console.log(e))
databaseChanges.on('INSERT', (e) => console.log(e))
databaseChanges.on('UPDATE', (e) => console.log(e))
databaseChanges.on('DELETE', (e) => console.log(e))
databaseChanges.subscribe()