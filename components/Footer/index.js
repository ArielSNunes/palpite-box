import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'

const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<div className="container mx-auto">
				Projeto desenvolvido por <span className={styles.me}>Ariel S Nunes</span> /
				<a href="https://github.com/ArielSNunes" target='_blank' className={styles.github}>Github</a>
				<div className={styles.logos}>
					<a target='_blank' href="https://devpleno.com/">
						<Image src='/img/logo_semana_fsm.png' width={214} height={75} alt='Logo semana fsm'/>
					</a>
					<a target='_blank' href="https://devpleno.com/">
						<Image src='/img/logo_devpleno.png' width={240} height={60} alt='Logo devpleno'/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer