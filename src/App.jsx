import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // import React Router components
import React from 'react'; // import React
// Import our pages
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element = {<Home/>} />
        <Route path='/about' element={<About/>} />


      </Routes>


    </BrowserRouter>






  )
}


// Export our app
export default App;
