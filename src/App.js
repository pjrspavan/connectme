import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/loginPage';
import ExplorePage from './pages/ExplorePage';
import NavbarComponent from './components/navbarComponent';
import NetworkPage from './pages/networkPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='explore' element={<ExplorePage/>}/>
      <Route path='/network' element={<NetworkPage/>}/>
      <Route path='/settings' element={<SettingsPage/>}/>
    </Routes>
  );
}

export default App;
