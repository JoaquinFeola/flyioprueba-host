import { type FastifyPluginAsync } from 'fastify'

const anotherRoute: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return reply.send({
        data: btoa("dadadwaasdwddddddddddddddddddddddddddddddddasd")
    })
  })

}

export default anotherRoute
