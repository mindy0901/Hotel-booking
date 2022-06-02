import React from 'react';

import Feature from '../components/Feature';
import FeatureProperties from '../components/FeatureProperties';
import PropertyList from '../components/PropertyList';
import Footer from '../components/Footer';
import MailList from '../components/MailList';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => {
      return (
            <div className="home">
                  <Navbar />
                  <Header />
                  <div className="home__container">
                        <Feature />
                        <h1 className="home__title">Browse by property type</h1>
                        <PropertyList />
                        <h1 className="home__title">Homes guests love</h1>
                        <FeatureProperties />
                        <MailList />
                        <Footer />
                  </div>

            </div>
      )
}

export default Home