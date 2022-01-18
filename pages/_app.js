import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {
	return (
		<div>
			<Header />
			<div className='container mx-auto'>
				<Component {...pageProps} />
			</div>
			<Footer />
		</div>
	)
}

export default MyApp