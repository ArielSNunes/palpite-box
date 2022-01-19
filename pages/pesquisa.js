import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
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
					<input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded-md w-[100%]' />
				</div>
				<div className='flex items-start flex-col w-80'>
					<label htmlFor="">E-mail:</label>
					<input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded-md w-[100%]' />
				</div>
				<div className='flex items-start flex-col w-80'>
					<label htmlFor="">WhatsApp:</label>
					<input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded-md w-[100%]' />
				</div>
				<div className='flex items-start flex-col w-80'>
					<label htmlFor="">Sua critica ou sugestão:</label>
					<input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded-md w-[100%]' />
				</div>
				
			</div>
		</div>
	)
}

export default Pesquisa