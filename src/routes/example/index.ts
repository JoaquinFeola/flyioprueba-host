import { type FastifyPluginAsync } from 'fastify'

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })
  fastify.get('/2', async function (request, reply) {
    return 'this is an example 2'
  })
}

export default example
