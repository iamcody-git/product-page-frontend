import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CreatePage from './Pages/CreatePage'
import {Box} from '@chakra-ui/react'

function App() {
  
  return (
    <>
      <Box minH ={"100vh"}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create" element={<CreatePage />} />
          </Routes>
        </BrowserRouter>
        


      </Box>
    </>
  )
}

export default App
