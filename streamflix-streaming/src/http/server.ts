import '@opentelemetry/auto-instrumentations-node/register'

import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { dispatchStreamingStarted } from '../broker/messages/streaming-started.ts'
import { trace } from '@opentelemetry/api'
import { setTimeout } from 'node:timers/promises'
import { tracer } from '../../tracer/tracer.ts'

const fastify = Fastify({
  logger: true
})

fastify.register(fastifyCors, { origin: '*' })

fastify.get('/health', async (request, reply) => {
  return 'OK'
})

fastify.post('/streaming/start', async (request, reply) => {
  const { userId, contentId, device, quality, timestamp } = request.body as any

  console.log("Stream started")

  const span = tracer.startSpan('DB insertion')

  await setTimeout(2000)

  span.end()

  trace.getActiveSpan()?.setAttribute('contentId', contentId)

  dispatchStreamingStarted({
    content: {
      id: contentId
    },
    device,
    quality,
    user: {
      id: userId
    },
    timestamp
  })

  return reply.status(200).send()
})

fastify.listen({ port: 3333, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  console.log("[Streaming] http server running on port: 3333 🚀")
})