import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/header';
import SecondRow from './components/secondrow';
import AppRoutes from './routes/Routes';
import Banner from './components/Banner';
import ClinicCards from './components/ClinicCards';
import BookingInfo from './components/BookingInfo';
import Telemedicine from './components/Telemedicine';
import AppointmentReminders from './components/AppointmentReminders';
import PrivateSecure from './components/PrivateSecure';
import CustomForm from './components/ClinicForm';
import Footer from './components/Footer';
import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons();

const App: React.FC = () => {
  return (
    <Router>
    <div>
      <Header />
      <SecondRow />
      <AppRoutes />
      <Banner />
      <ClinicCards /> 
      <BookingInfo />
      <Telemedicine />
      <AppointmentReminders />
      <PrivateSecure />
      <CustomForm />
      <Footer />
    </div>
    </Router>
  );
};

export default App;
