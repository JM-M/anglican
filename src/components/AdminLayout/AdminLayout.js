import { NavLink } from 'react-router-dom'
import styles from './AdminLayout.module.css';

// const Nav = () => {
// 	return (
// 		<nav className={styles.Nav}>
// 			
// 		</nav>
// 	)
// }

const Sidebar = () => {
	const pageNames = ['home', 'news', 'events', 'women', 'gallery', 'radio', 'churches', 'priests', 'members'];

	const capitalize = ([firstLetter, ...rest]) => firstLetter.toUpperCase() + rest.join('');

	return (
		<nav className={styles.Sidebar}>
			<h1 className={styles.SidebarHeading}>WELCOME ADMIN</h1>
			<ul className={styles.SidebarInner}>
				{pageNames.map(pageName => (
					<li 
						key={pageName} 
						className={styles.SidebarItem}>
						<NavLink 
							to={pageName}
							className={({ isActive }) => [
			        	styles.SidebarLink,
			        	isActive ? styles.Active : ''
			        ].join(' ')}
						>{ capitalize(pageName).replace(' ', '-') }</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

const AdminLayout = ({ children }) => {
	return (
		<div className={styles.Container}>
			{/* <Nav /> */}
			<Sidebar />
			<main className={styles.Main}>
				{ children }
			</main>
		</div>
	)
}

export default AdminLayout;