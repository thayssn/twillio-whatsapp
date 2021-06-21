require('dotenv').config();
console.log(process.env.TWILIO_FROM)
console.log(process.env.TWILIO_TO)
const client = require('twilio')();
client.messages.create({
        from: `whatsapp:+${process.env.TWILIO_FROM}`,
        body: 'CAMPEONATO THANOS https://arenafortnite.com.br/eventos/epicgames_S17_ThanosCup_BR',
        // mediaUrl: ['https://demo.twilio.com/owl.png'],
        mediaUrl: ["https://cdn2.unrealengine.com/17br-thanoscup-ingame-poster-front-750x1080-0b51e7467a7a.jpg"],
        to: `whatsapp:+${process.env.TWILIO_TO}`
}).then(message => console.log(message.sid))