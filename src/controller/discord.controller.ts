import { Request, Response } from 'express'
import insertToDatabase from '../service/discord.service'

const controller = async (req: Request, res: Response) => {
	try {
		await insertToDatabase(req.body.data)
		console.log(`Insert data success: ${new Date().toISOString()}`)
		res.send('Insert data success')
	} catch (error: any) {
		res.status(500).send(error.message)
	}
}

export default controller