import styles from './MeetBishop.module.css';

const MeetBishop = () => {
	return (
		<>
			<header className={styles.Header}>
				<div className={styles.HeaderInner}>
					<h1 className={styles.Heading}>Meet the Bishop</h1>
					<p>Rt. Revd. Stephen Adeniran Oni. <span className='faded'>PhD, Mcasson</span></p>
				</div>
			</header>
			<section className={styles.CurrentBishopSection}>
				<div className={styles.MainImageWrapper}>
					<img className={styles.MainImage}  alt='bishop'/>
				</div>
				<div className={styles.MainTextWrapper}>
					<h3 className={styles.MainTextHeading}>Rt. Revd. Stephen Adeniran Oni, PhD, Mcasson</h3>
					<div className='faded'>Bishop, Diocese of Ondo.</div>
					<p className={styles.MainText}>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
						invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
						accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
						sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
						sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
						aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
						rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
						amet.
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
						invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
						accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
						sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
						sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
						aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
						rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
						amet.
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
						invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
						accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
						sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
						sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
						aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
						rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
						amet.
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
						invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
						accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
						sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
						sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
						aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
						rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
						amet.
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
						invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
						accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
						sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
						sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
						aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
						rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
						amet.
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
						invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
						accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
						sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
						sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
						aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
					</p>
				</div>
			</section>
			<section>
				<h3 className={styles.SubHeading}>Former Bishops</h3>
				<div className={styles.ClergyList}>
					{[...Array(6)].map((bishop, i) => (
						<div key={i} className={styles.Clergy}>
							<img alt='clergy' className={styles.ClergyImage} />
							<h4 className={styles.ClergyName}>Rt. Revd. Stephen Adeniran O</h4>
							<div className='faded'>From 1900 - 2021</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default MeetBishop;