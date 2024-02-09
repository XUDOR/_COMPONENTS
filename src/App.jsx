import React from 'react';
import Accordion from './Accordion';

import './App.css';

// Data
const accordionData = [
  { title: "section 1",
    content: `Section ONE _____________`,
  },
  { title: "section 2",
  content: `Section TWO _____________`,
  },
  { title: "section 3",
  content: `Section ONE _____________`,
  },
]

function App() => {
  return (
    <div >__ACCORDION
    <h1>___RDX</h1>
  <Accordion sections={accordionData}/>
  </div>
  );
};

export default App;
