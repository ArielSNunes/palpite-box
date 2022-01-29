import React, { useState } from 'react'
import Link from 'next/link'

const Pesquisa = () => {
	const [form, setForm] = useState({
		Nome: '',
		'E-mail': '',
		Whatsapp: ''
	})
	const save = async () => {
		try {
			const response = await fetch('/api/save', {
				method: 'POST',
				body: JSON.stringify(form)
			})

			const data = await response.json()

			console.log(data)
		} catch (error) {
			console.warn(error)
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
					<button onClick={save} className='block w-[100%] bg-blue-400 px-6 py-4 mt-4 font-bold rounded-lg shadow-lg hover:text-gray-100 border-blue-400 hover:bg-blue-500 hover:border-blue-600 border-2 duration-150 transition-all hover:shadow'>
						Salvar
					</button>
				</div>
			</div>
		</div>
	)
}

export default Pesquisa