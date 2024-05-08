import React from 'react';
import DropdownMenu from 'my-react-app\src\DropdownMenu.js';
import Header from 'my-react-app\src\Header.js';
/*import FeaturedArtists from './components/FeaturedArtists';
import HighlightedSongs from './components/HighlightedSongs';
import OurTeam from './components/OurTeam';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';*/

function App() {
  return (
    <div className="App">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mi Página de Música</title>
        <link rel="stylesheet" href="/my-react-app/src/styles/css/Style.css" />
      </head>
      <DropdownMenu />
      <Header />
    </div>
  );
}

export default App;
