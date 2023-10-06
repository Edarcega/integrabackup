import { Routes, Route } from 'react-router-dom'
import Igreja from "./pages/igreja"
import Igrejas from "./pages/igrejas"
import Paineladmigreja from "./pages/paineladmigreja"
import Paineladm from "./pages/paineladm"
import Membros from "./pages/membros"
import Membro from "./pages/membro"
import Grupos from './pages/grupos'
import Grupo from './pages/grupo'


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Igrejas />} />
        <Route path='/igrejas' element={<Igrejas />} />
        <Route path='/igreja/:id?' element={<Igreja />} />
        <Route path='/grupos/:id?' element={<Grupos />} />
        <Route path='/paineladmigreja/:id?' element={<Paineladmigreja />} />
        <Route path='/paineladm' element={<Paineladm />} />
        <Route path='/membros/:id?' element={<Membros />} />
        <Route path='/membro/:id?' element={<Membro />} />
        <Route path='/grupo/:id?' element={<Grupo />} />
      </Routes>

    </div>
  )

}

export default App
