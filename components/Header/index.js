import Image from "next/image"
import Link from "next/link"
import React, { Fragment } from "react"
import styles from './styles.module.css'

const Header = () => {
	return (
		<Fragment>
			<div className={styles.wrapper}>
				<div className={styles.headerContainer}>
					<Link href='/'>
						<a>
							<Image
								src="/img/logo_paplpitebox.png"
								alt="Palpitebox logo"
								width={144}
								height={120}
							/>
						</a>
					</Link>
				</div>
			</div>
			<div className={styles.submenuWrapper}>
				<Link href='/sobre'>
					<a className={styles.link}>Sobre</a>
				</Link>
				<Link href='/contato'>
					<a className={styles.link}>Contato</a>
				</Link>
				<Link href='/pesquisa'>
					<a className={styles.link}>Pesquisa</a>
				</Link>
			</div>
		</Fragment>
	)
}

export default Header