import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Faq from './routes/Faq';
import Home from './routes/Home';
import Pricing from './routes/Pricing'
import Contact from './routes/Contact'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Pricing' element={<Pricing />} />
      <Route path='/Faq' element={<Faq />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
