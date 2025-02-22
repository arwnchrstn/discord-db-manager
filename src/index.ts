import Express from 'express'
import DiscordRoute from './routes/discord.route'
import Cors from 'cors'
import queueVerify from './middleware/verifyRequest'

const app = Express()
app.use(Cors({
  origin: process.env.CONSUMER_ORIGIN
}))
app.use(Express.json())

app.use('/api/dbmanager/', queueVerify, DiscordRoute)

app.listen(5100, () => {
  console.log(`Database running on port 5100`)
})