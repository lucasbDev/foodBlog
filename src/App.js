import React from 'react';
import Headers from './Headers';
import Article from './Article';
import Footer from './Footer';

function App (props) {
  return (
    <div>
        <Headers />
        <Article />
        <div className="main">
          <Footer />
        </div>
    </div>    
  );
};

export default App;
