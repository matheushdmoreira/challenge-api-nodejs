import fastify from 'fastify'

const server = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
})

server.get('/', (request, reply) => {
  return reply.send({ message: 'Hello World' })
})

server.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})