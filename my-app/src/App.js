import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/common/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Page/Home';
import { About } from './Page/About';
import { Contact } from './Page/Contact';
import  {Login}  from './Page/Login';
import  Signup  from './Page/Signup';

import { VerifyEmail } from './Page/VerifyEmail';
import { MyProfile } from './components/core/ownerDashbord/MyProfile';
import  AddCard  from './components/core/ownerDashbord/AddCard';
import { ShowCard } from './components/core/showCard/ShowCard';
import { CardDetails } from './components/core/specificCardInfo/CardDetails';


function App() {
  return (
  <div className='w-screen h-screen bg-gray-200'>
  <Navbar/>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/verify-email' element={<VerifyEmail/>}/>
    <Route path='/my-profile' element={<MyProfile/>}/>
    <Route path='/add-card' element={<AddCard/>}/>
    <Route path='/add-card/show-card' element={<ShowCard/>}/>
    <Route path='/add-card/show-card/:cardId' element={<CardDetails/>}/>
  </Routes>

  </div>
  );
}

export default App;
