import { channels } from "../channels/index.ts";
import type { StreamingStarted } from '../../../../contracts/messages/streaming-started.ts'

export function dispatchStreamingStarted(data: StreamingStarted) {
  channels.streaming.sendToQueue('streaming', Buffer.from(JSON.stringify(data)))
}