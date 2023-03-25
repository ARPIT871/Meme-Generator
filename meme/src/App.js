import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import { Edit } from './pages/Edit';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <h1>Meme generator</h1>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/edit' element={<Edit/>}/>

      </Routes>
    </div>
  );
}

export default App;
