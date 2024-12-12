import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CreatePage from './Pages/CreatePage'
import {Box} from '@chakra-ui/react'
import Login from '../Global/Login/Login'
import Register from '../Global/Register/Register'

function App() {
  
  return (
    <>
      <Box minH ={"100vh"}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create" element={<CreatePage />} />
          <Route path='/login' element={< Login/>} />
          <Route  path='/register' element={< Register />}/>
          </Routes>
        </BrowserRouter>
        


      </Box>
    </>
  )
}

export default App
