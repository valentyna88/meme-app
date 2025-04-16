import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MemeTable from '../pages/MemeTable';
import MemeList from '../pages/MemeList';
import AppNavbar from './AppNavbar';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Navigate to="/table" />} />
        <Route path="/table" element={<MemeTable />} />
        <Route path="/list" element={<MemeList />} />
      </Routes>
    </Router>
  );
}

export default App;
