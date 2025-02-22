import * as z from 'zod'

const discordSchema = z.object({
  authorId: z.string(),
  dateSent: z.coerce.date(),
  isMessageProfane: z.number(),
  isMessageContainingUrl: z.number(),
  isMessageContainingImage: z.number()
}).required({
  authorId: true,
  dateSent: true,
  isMessageContainingImage: true,
  isMessageContainingUrl: true,
  isMessageProfane: true
})

export default discordSchema