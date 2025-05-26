import { Routes, Route} from 'react-router-dom';
import Page from './pages/Page'
import Hasil from './pages/Hasil'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={Page} />
        <Route path='/hasil' Component={Hasil} />
      </Routes>
    </>
  )
}

export default App
