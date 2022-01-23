import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const sheetId = '1v9y1toMozR63PaiV01zl7F9xm8ae7su0Koi7PF9fbLU'

const doc = new GoogleSpreadsheet(sheetId)

export default async (req, res) => {
	try {
		await doc.useServiceAccountAuth(credentials)
		await doc.loadInfo()

		const sheet = doc.sheetsByIndex[2]

		await sheet.loadCells('A2:B3')
		const mostarPromo = (sheet.getCell(2, 0)).value
		const texto = (sheet.getCell(2, 1)).value

		return res.send({
			showCoupon: mostarPromo === 'VERDADEIRO',
			message: texto
		})
	} catch (error) {
		return res.send({
			showCoupon: false,
			message: ''
		})
	}
	return res.send({
		showCoupon: true,
		message: 'Coupon Message'
	})
}