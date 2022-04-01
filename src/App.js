import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grand from './Components/Grand/Grand';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Parent from './Components/Parent/Parent';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/grand' element={<Grand/> }/>
        <Route path='/parent' element={<Parent/> }/>
      </Routes>
    </div>
  );
}

export default App;
