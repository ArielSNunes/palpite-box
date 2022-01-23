import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const sheetId = '1v9y1toMozR63PaiV01zl7F9xm8ae7su0Koi7PF9fbLU'

const doc = new GoogleSpreadsheet(sheetId)

/**
 * @function
 * 
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async (req, res) => {
	const body = JSON.parse(req.body)

	try {
		await doc.useServiceAccountAuth(credentials)
		await doc.loadInfo()

		const sheet = doc.sheetsByIndex[1]

		await sheet.addRow({
			Nome: body.nome,
			'E-mail': body['E-mail'],
			Whatsapp: body.Whatsapp,
			Cupom: new Date().getTime(),
			Promo: new Date().getTime()
		})

		return res.json(body)
	} catch (error) {
		return res.end(error)
	}
}