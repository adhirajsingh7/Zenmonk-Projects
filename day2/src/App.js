import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import RemovedArray from './pages/RemovedArray';


const App = ()=>{
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/home' element={<Home/>}/>
    {/* <Route path='/RemovedArray' element={<RemovedArray/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
