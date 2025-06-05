import '@opentelemetry/auto-instrumentations-node/register'
import '../broker/subscriber.ts'

import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'

const fastify = Fastify({
  logger: true
})

fastify.register(fastifyCors, { origin: '*' })

fastify.get('/health', async (request, reply) => {
  return 'OK'
})

fastify.listen({ port: 3334, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  console.log("[Analytics] http server running on port: 3334 🚀")
})