import React from 'react';
import { bindActionCreators } from 'redux';
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';

function HomeScreen() {
  return (
    <div className="HomeScreen">
        <Nav />
        <Banner />

        {/*Row*/}
    </div>
  );
}

export default HomeScreen;