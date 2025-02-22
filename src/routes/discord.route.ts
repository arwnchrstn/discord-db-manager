import { Router, Request, Response } from 'express'
import DiscordController from '../controller/discord.controller'

const route = Router()

route.post('/insert', DiscordController)

export default route