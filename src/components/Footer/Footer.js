import styles from './Footer.module.css';

const footer = () => {
	return (
		<footer className={styles.Footer}>
			<div className={styles.Top}>
				<div className={styles.FooterListWrapper}>
					<h3 className={styles.FooterListHeading}>News</h3>
					<ul className={styles.FooterList}>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Events</a>
						</li>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Blogs</a>
						</li>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Synod</a>
						</li>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Programs</a>
						</li>
					</ul>
				</div>
				<div className={styles.FooterListWrapper}>
					<h3 className={styles.FooterListHeading}>Watch</h3>
					<ul className={styles.FooterList}>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Youtube</a>
						</li>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Radio</a>
						</li>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Podcast</a>
						</li>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Gallery</a>
						</li>
					</ul>
				</div>
				<div className={styles.FooterListWrapper}>
					<h3 className={styles.FooterListHeading}>Give</h3>
					<ul className={styles.FooterList}>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Payable Accounts</a>
						</li>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Donate</a>
						</li>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Dues</a>
						</li>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Accounting System</a>
						</li>
					</ul>
				</div>
				<div className={styles.FooterListWrapper}>
					<h3 className={styles.FooterListHeading}>Ministries</h3>
					<ul className={styles.FooterList}>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Youth</a>
						</li>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Children</a>
						</li>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Women</a>
						</li>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Men</a>
						</li>
					</ul>
				</div>
				<div className={styles.FooterListWrapper}>
					<h3 className={styles.FooterListHeading}>Churches</h3>
					<ul className={styles.FooterList}>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Archdeaconries</a>
						</li>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Archdeacons</a>
						</li>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Parish Churches</a>
						</li>
						<li className={styles.FooterListItem}>
							<a href='/' className={styles.FooterLink}>Priests</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.Bottom}>
				<div>Contact us</div>
			</div>
		</footer>
	)
}

export default footer;