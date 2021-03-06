import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'

import credentials from '../../credentials.json'
import Coupon from '../../helpers/Coupon'

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
		Nome: body.Nome,
		'E-mail': body['E-mail'],
		Whatsapp: body.Whatsapp,
		Cupom: '',
		Promo: '',
		'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:ss'),
		Nota: parseInt(body.Nota)
	}
	try {
		await doc.useServiceAccountAuth(credentials)
		await doc.loadInfo()

		const sheet = doc.sheetsByIndex[1]

		const configSheet = doc.sheetsByIndex[2]
		await configSheet.loadCells('A2:B3')

		const mostarPromo = (configSheet.getCell(2, 0)).value
		const texto = (configSheet.getCell(2, 1)).value

		const cupom = new Coupon()

		if (mostarPromo === 'VERDADEIRO') {
			formData.Promo = texto
			formData.Cupom = cupom.gerar()
		}

		await sheet.addRow(formData)

		return res.json({
			showCoupon: formData.Cupom !== '',
			coupon: formData.Cupom,
			promo: formData.Promo
		})
	} catch (error) {
		return res.end(error)
	}
}