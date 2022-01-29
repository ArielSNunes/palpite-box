import moment from "moment"

class Coupon {
	gerar() {
		const code = parseInt(
			moment().format('YYYYMMDDHHmmssSSS')
		).toString(16)

		const finalCode = this.splitCode(code)
		return finalCode.toUpperCase()
	}
	splitCode(code) {
		const parts = [
			code.substr(0, 4),
			code.substr(4, 4),
			code.substr(8, 4),
		]

		return parts.join('-')
	}
}

export default Coupon