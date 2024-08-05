import { Route, Routes } from 'react-router-dom';
import './App.css';
import Component from './component';
import Login from './login';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Component/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
