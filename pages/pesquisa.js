import React, { useState } from 'react'
import Link from 'next/link'

const Pesquisa = () => {
	const [success, setSuccess] = useState(false)
	const [returnData, setReturnData] = useState({})
	const [form, setForm] = useState({
		Nome: '',
		'E-mail': '',
		Whatsapp: '',
		Nota: 0
	})
	const notas = [0, 1, 2, 3, 4, 5]

	const save = async () => {
		try {
			const response = await fetch('/api/save', {
				method: 'POST',
				body: JSON.stringify(form)
			})

			const data = await response.json()
			setSuccess(true)
			setReturnData(data)
		} catch (error) {
			console.error(error)
		}
	}

	const onChange = e => {
		const { value, name } = e.target
		setForm(old => ({
			...old,
			[name]: value
		}))
	}
	return (
		<div className='pt-6'>
			<h1 className='my-4 text-center font-bold text-2xl'>Criticas e sugestões</h1>
			<p className='my-6 text-center'>
				O restaurante X sempre busca por atender melhor seus clientes.
				<br />
				Por isso, estamos sempre abertos a ouvir a sua opinião.
			</p>
			{
				!success &&
				<div className='flex items-center justify-start flex-col mb-6 mt-3'>
					<div className='flex items-start flex-col w-80'>
						<label htmlFor="">Seu nome:</label>
						<input
							type="text"
							className='p-4 block shadow bg-blue-100 my-2 rounded-md w-[100%]'
							placeholder='Nome'
							name='Nome'
							onChange={onChange}
							value={form.Nome} />
					</div>
					<div className='flex items-start flex-col w-80'>
						<label htmlFor="">E-mail:</label>
						<input
							type="text"
							className='p-4 block shadow bg-blue-100 my-2 rounded-md w-[100%]'
							placeholder='E-mail'
							name='E-mail'
							onChange={onChange}
							value={form['E-mail']} />
					</div>
					<div className='flex items-start flex-col w-80'>
						<label htmlFor="">Whatsapp:</label>
						<input
							type="text"
							className='p-4 block shadow bg-blue-100 my-2 rounded-md w-[100%]'
							placeholder='Whatsapp'
							name='Whatsapp'
							onChange={onChange}
							value={form.Whatsapp} />
					</div>
					<div className='flex items-start flex-col w-80'>
						<label htmlFor="">Sua critica ou sugestão:</label>
						<input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded-md w-[100%]' />
					</div>
					<div className='flex items-start flex-col w-80'>
						<label htmlFor="">Sua nota:</label>
						<div className='flex flex-row justify-between w-[100%]'>
							{notas.map(nota => (
								<label htmlFor={`nota${nota}`}>
									<span className='block text-center'>{nota}</span>
									<input type="radio" name='Nota' id={`nota${nota}`} value={nota} onChange={onChange}/>
								</label>
							))}
						</div>
					</div>
					<div className='flex items-start flex-col w-80'>
						<button onClick={save} className='block w-[100%] bg-blue-400 px-6 py-4 mt-4 font-bold rounded-lg shadow-lg hover:text-gray-100 border-blue-400 hover:bg-blue-500 hover:border-blue-600 border-2 duration-150 transition-all hover:shadow'>
							Salvar
						</button>
					</div>
				</div>
			}
			{
				success &&
				<div className='flex items-center justify-start flex-col mb-6 mt-3'>
					<div class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700 mb-6" role="alert">
						<svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
						<div>
							<span class="font-medium">Obrigado por contribuir com sua sugestão ou crítica!</span>
						</div>
					</div>
					{
						returnData.showCoupon &&
						<div className='my-7 text-center'>
							Cupom: <br />
							<strong className='text-xl mb-4 block'>{returnData.coupon}</strong>
							<p>{returnData.promo}</p>
							<small className='italic text-xs mt-7'>
								Apresente o cupom ao garçom para receber o desconto
							</small>
						</div>
					}

				</div>
			}
		</div>
	)
}

export default Pesquisa