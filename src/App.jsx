import { Routes , Route } from 'react-router-dom'
import Register from './pages/Register'
import Page404 from './pages/Page404'
import Game1 from './pages/Game1'
import Game2 from './pages/Game2'
import Main from './pages/Main'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/Game1' element={<Game1 />}></Route>
        <Route path='/Game2' element={<Game2 />}></Route>
        <Route path='*' element={<Page404 />}></Route>
      </Routes>
    </>
  );
}

export default App;