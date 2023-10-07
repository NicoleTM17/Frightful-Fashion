import './App.scss';

import WebFont from 'webfontloader';

import Navbar from './Navbar.js';
import Banner from './Banner';
import Shopping from './Shopping';
import Footer from './Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

library.add(faBasketShopping);


WebFont.load({
  google: {
    families: [
      'Creepster&display=swap',
      'Open+Sans&display=swap',
    ],
  },
});


function App() {
  return (
    <div className="container">
      <Navbar/>
      <Banner/>
      <Shopping/>
      <Footer/>
    </div>
  );
}


export default App;
