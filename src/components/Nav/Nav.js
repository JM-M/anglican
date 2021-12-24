import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const openMenu = () => {
		if (menuOpen) return
		setMenuOpen(true)
	}

	const closeMenu = () => {
		if (!menuOpen) return
		setMenuOpen(false)
	}

	return (	
		<nav 
			className={[
				styles.Nav,
				menuOpen ? styles.OpenMenu : ''
			].join(' ')}>
			{ menuOpen && <div className={styles.Backdrop} onClick={closeMenu}></div> }
			<div className={styles.NavBrand}>
				<div className={styles.NavBrandImgWrapper}>
					<img className={styles.NavBrandImg} alt='Church Logo'/>
				</div>
				<div className={styles.NavBrandText}>
					DIOCESE OF ONDO
					<div>[Anglican Communion]</div>
				</div>
			</div>
			<div className={styles.NavInner}>
				<div className={styles.NavMenuCloser} onClick={closeMenu}></div>
				<div className={styles.Top}>
					<ul className={styles.TopNavItemsList}>
						<li className={styles.TopNavItem}>
							<NavLink 
								onClick={() => setMenuOpen(false)}
								to='/find-church'
								className={({ isActive }) => [
				        	styles.TopNavLink,
				        	isActive ? styles.Active : ''
				        ].join(' ')}
							>Find a Church</NavLink>
						</li>
						<li className={styles.TopNavItem}>
							<NavLink 
								onClick={() => setMenuOpen(false)}
								to='/redress'
								className={({ isActive }) => [
				        	styles.TopNavLink,
				        	isActive ? styles.Active : ''
				        ].join(' ')}
							>Redress</NavLink>
						</li>
						<li className={styles.TopNavItem}>
							<NavLink 
								onClick={() => setMenuOpen(false)}
								to='/#contact-us'
								className={({ isActive }) => [
				        	styles.TopNavLink,
				        	isActive ? styles.Active : ''
				        ].join(' ')}
							>Contact us</NavLink>
						</li>
						<li className={styles.TopNavItem}>
							<NavLink 
								onClick={() => setMenuOpen(false)}
								to='clergy'
								className={({ isActive }) => [
				        	styles.TopNavLink,
				        	isActive ? styles.Active : ''
				        ].join(' ')}
							>Clergy Men</NavLink>
						</li>
					</ul>
				</div>
				<div className={styles.Bottom}>
					<div className={styles.NavSearch}>
						<input className={styles.NavSearchInput} placeholder="Search" />
						<button className={styles.NavSearchButton}>
							<img className={styles.NavSearchIcon} alt='Search Icon' />
						</button>
					</div>
					<ul className={styles.NavItemsList}>
						<li className={styles.NavItem}>
							<NavLink 
								onClick={() => setMenuOpen(false)}
								to='/events'
								className={({ isActive }) => [
				        	styles.NavLink,
				        	isActive ? styles.Active : ''
				        ].join(' ')}
							>Life Events</NavLink>
						</li>
						<li className={styles.NavItem}>
							<NavLink 
								onClick={() => setMenuOpen(false)}
								to='news-and-events'
								className={({ isActive }) => [
				        	styles.NavLink,
				        	isActive ? styles.Active : ''
				        ].join(' ')}
							>News & Events</NavLink>
						</li>
						<li className={styles.NavItem}>
							<NavLink 
								onClick={() => setMenuOpen(false)}
								to='about'
								className={({ isActive }) => [
				        	styles.NavLink,
				        	isActive ? styles.Active : ''
				        ].join(' ')}
							>About the Church</NavLink>
						</li>
						<li className={styles.NavItem}>
							<NavLink 
								onClick={() => setMenuOpen(false)}
								to='/women'
								className={({ isActive }) => [
				        	styles.NavLink,
				        	isActive ? styles.Active : ''
				        ].join(' ')}
							>Women[M.U & W.G]</NavLink>
						</li>
						<li className={styles.NavItem}>
							<NavLink 
								onClick={() => setMenuOpen(false)}
								to='meet-bishop'
								className={({ isActive }) => [
				        	styles.NavLink,
				        	isActive ? styles.Active : ''
				        ].join(' ')}
							>Meet the Bishop</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.NavMenuOpener} onClick={openMenu}>
				<div className={styles.Bar}></div>
				<div className={styles.Bar}></div>
				<div className={styles.Bar}></div>
			</div>
		</nav>
	)
}

export default Nav;