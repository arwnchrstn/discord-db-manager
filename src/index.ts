import Express from 'express'
import DiscordRoute from './routes/discord.route'
import Cors from 'cors'
import queueVerify from './middleware/verifyRequest'
import { Request, Response } from 'express'

const app = Express()
app.use(Cors({
  origin: process.env.CONSUMER_ORIGIN
}))
app.use(Express.json())

app.use('/api/dbmanager/', queueVerify, DiscordRoute)

app.get('/health', (req: Request, res: Response) => {
  console.log('Health: ' + new Date().toISOString())
  res.send('Health')
})

app.listen(10002, () => {
  console.log(`Database running on port 10002`)
})