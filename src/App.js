import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import PerspectiveBar from './components/PerspectiveBar'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <PerspectiveBar />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
