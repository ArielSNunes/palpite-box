import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
	const { data, error, isValidating } = useSWR('/api/getPromo', fetcher)

	if (!data && isValidating)
		return (
			<h3>Carregando</h3>
		)
	return (
		<div>
			<PageTitle title='Home'/>
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
			{
				isValidating && (
					<h3>Carregando</h3>
				)
			}
			{
				!error && !isValidating && data && data.showCoupon && (
					<p className='my-12 text-center'>
						{data.message}
					</p>
				)
			}
		</div>
	)
}

export default Index