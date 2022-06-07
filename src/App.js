import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);
   
  return (
    <div>
      
        <Header></Header>
      
    
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route exact path="/home" element={<Home courses={courses}></Home>}>
       
        </Route>
        <Route exact path="/services" element={<Services></Services>}>
          
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
    
    </Routes>
   
      <Footer></Footer>
  
      
    </div>
  );
}

export default App;
