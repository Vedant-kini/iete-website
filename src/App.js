import React from 'react';
import Header from './components/Header/Header';  // Update the path if needed
import Hero from './components/Hero/Hero';  // Update the path if needed
import Magazines from './components/Magazine/Magazine';  // Update the path if needed
import Team from './components/Team/Team';  // Update the path if needed
import Events from './components/Events/Events';  // Update the path if needed
import Contact from './components/Contact/Contact';  // Update the path if needed
import Footer from './components/Footer/Footer';  // Update the path if needed
import 'font-awesome/css/font-awesome.min.css';



const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Magazines />
      <Team />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

