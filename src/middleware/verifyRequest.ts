import { Request, Response, NextFunction } from "express";
import Jwt from "../lib/JWT";
import discordSchema from "../utils/schemaValidator";
import 'dotenv/config'

const jwt = new Jwt()

const queueVerify = (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = JSON.parse(req.body.data)
    const token = req.headers.authorization?.split(' ')[1]
    const validationResult = discordSchema.safeParse(data)

    if (!token) throw new Error('Invalid token')
    if (!jwt.verifyToken(token, process.env.JWT_SECRET as string)) throw new Error('Invalid token')
    if (!validationResult.success) throw new Error('Invalid data')

    req.body.data = validationResult.data
    
    next()
  } catch (error: any) {
    console.log(error.message)
    if (error.message === 'Invalid data' || error.message.includes('is not valid JSON')) res.status(400).send('Invalid queue data')
    else if (error.message === 'Invalid token') res.status(400).send('Invalid token')
    else res.status(500).send('Something went wrong')
  }
}

export default queueVerify