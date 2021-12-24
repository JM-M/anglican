import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import RadioAndPodcast from './containers/RadioAndPodcast/RadioAndPodcast';
import Gallery from './containers/Gallery/Gallery';
import NewsAndEvents from './containers/NewsAndEvents/NewsAndEvents';
import FindChurch from './containers/FindChurch/FindChurch';
import About from './containers/About/About';
import MeetBishop from './containers/MeetBishop/MeetBishop';
import Membership from './containers/Membership/Membership';
import ClergyMen from './containers/ClergyMen/ClergyMen';
import Admin from './containers/Admin';
import { IconContext } from 'react-icons';

const App = ({ children }) => {
  return (
    <IconContext.Provider
        value={{ color: 'var(--pri)' }}
    >
      <Routes>
        <Route
          path='/*'
          element={
            <Layout>
              <Routes>
                <Route path='/radio-and-podcast' element={<RadioAndPodcast />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/news-and-events' element={<NewsAndEvents />} />
                <Route path='/find-church' element={<FindChurch />} />
                <Route path='/about' element={<About />} />
                <Route path='/meet-bishop' element={<MeetBishop />} />
                <Route path='/membership' element={<Membership />} />
                <Route path='/clergy' element={<ClergyMen />} />
                <Route path='*' element={<div>404 | Page Not Found</div>} />
              </Routes>
            </Layout>
          }
        />
        <Route 
          path='/admin/*'
          element={<Admin />}
        />
      </Routes>
    </IconContext.Provider>
  );
}

export default App;
