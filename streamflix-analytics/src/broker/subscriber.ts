import { streaming } from "./channels/streaming.ts";

streaming.consume('streaming', async message => {
  if (!message) {
    return null
  }

  console.log(message?.content.toString())
  
  streaming.ack(message)
}, {
  noAck: false
})