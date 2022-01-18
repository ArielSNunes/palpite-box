import Link from 'next/link'
import React from 'react'

const Index = () => {
	return (
		<div>
			<p className='my-12 text-center'>
				O restaurante X sempre busca por atender melhor seus clientes.
				<br />
				Por isso, estamos sempre abertos a ouvir a sua opinião.
			</p>
			<div className='text-center my-12'>
				<Link href='/pesquisa'>
					<a className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:text-gray-100 border-blue-400 hover:bg-blue-500 hover:border-blue-600 border-2 duration-150 transition-all hover:shadow'>
						Dar opinião ou sugestão
					</a>
				</Link>
			</div>
			
			<p className='my-12 text-center'>
				Mensagem do desconto
			</p>
		</div>
	)
}

export default Index