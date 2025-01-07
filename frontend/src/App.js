import { Route, Routes } from 'react-router';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from './components/Homepage';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar.js';
import ChooseRole from './components/ChooseRole.js';
import OrganizerRegisterPage from './components/OrganiserRegistrationPage.js';
import CustomerRegistrationPage from './components/CustomerRegistrationPage.js';
import ForgotPassword from './components/ForgotPassword.js';

function App() {
  return (
    <div className="App">
      { <Navbar/> }
      <div className="container mt-4">
        <Routes>
          <Route path='/' element={ <HomePage /> }/>
          <Route path='/login' element={ <LoginPage/> }/>
          <Route path='/chooserole' element={ <ChooseRole/> }/>
          <Route path='/registerCustomer' element={<CustomerRegistrationPage/>} />
          <Route path='/registerOrganiser' element={<OrganizerRegisterPage/>} />
          <Route path='/forgotPassword' element={<ForgotPassword/>}/>
<<<<<<< Updated upstream
=======
          
          {/* <Route path='/profile' element={<Dashboard/>}/> */}
>>>>>>> Stashed changes
        </Routes>
      </div>
    </div>
  );
}

export default App;