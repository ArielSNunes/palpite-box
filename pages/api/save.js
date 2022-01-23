import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'

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

	const formData = {
		Nome: body.nome,
		'E-mail': body['E-mail'],
		Whatsapp: body.Whatsapp,
		Cupom: '',
		Promo: '',
		'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:ss'),
		Nota: 5
	}
	try {
		await doc.useServiceAccountAuth(credentials)
		await doc.loadInfo()

		const sheet = doc.sheetsByIndex[1]

		const configSheet = doc.sheetsByIndex[2]
		await configSheet.loadCells('A2:B3')

		const mostarPromo = (configSheet.getCell(2, 0)).value
		const texto = (configSheet.getCell(2, 1)).value

		if (mostarPromo === 'VERDADEIRO') {
			formData.Promo = texto
			formData.Cupom = 'teste'
		}

		console.log(formData)
		await sheet.addRow(formData)

		return res.json(body)
	} catch (error) {
		return res.end(error)
	}
}