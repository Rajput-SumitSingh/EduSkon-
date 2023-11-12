import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom';
import Welcome from './Components/FrontComponent/Welcome';
import Dashboard from './Components/Dashboard/Dashboard';
import { Helmet } from 'react-helmet';
import OrganizerForm from './Components/FormComponents/StartOrganizationForm/OrganizerForm/OrganizerForm';
import OrganizationRegisterStep from './Utils/OrganizationRegisterStep/OrganizationRegisterStep';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Welcome />} />

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/startOrganization' element={<OrganizationRegisterStep />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
