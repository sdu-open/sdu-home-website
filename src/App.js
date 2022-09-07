
import Layout from './Layout/Layout';
import './normalize.css';
import Dashboard from './pages/Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom';
import Events from './pages/Events/Events';
import Sport from './pages/Sport/Sport';
import Marketplace from './pages/Marketplace/Marketplace';
import LostAndFound from './pages/LostAndFound/LostAndFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/lostandfound" element={<LostAndFound />} />
        <Route path="/" exact element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
