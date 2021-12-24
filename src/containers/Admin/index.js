import { Routes, Route } from 'react-router-dom';
import Layout from '../../components/AdminLayout/AdminLayout';
import Home from './Home/Home';
import News from './News/News';
import Events from './Events/Events';
import Gallery from './Gallery/Gallery';
import Radio from './Radio/Radio';
import Churches from './Churches/Churches';
import Priests from './Priests/Priests';

const Admin = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/news' element={<News />} />
				<Route path='/events' element={<Events />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/radio' element={<Radio />} />
				<Route path='/churches' element={<Churches />} />
				<Route path='/priests' element={<Priests />} />
				<Route path='*' element={<div>404 | Not Found</div>} />		
			</Routes>
		</Layout>
	)
}

export default Admin;