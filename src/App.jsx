import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopCards from './components/TopCards'
import TopBanner from './components/TopBanner'
import ProjectCards from './components/ProjectCards'
import ProjectBanner from './components/ProjectBanner'
import EmployeeCard from './components/EmployeeCard'
import Employees from './components/Employees'
import MainPage from './pages/MainPage'
import AddProject from './pages/AddProjectPage'
import { Route, Routes } from 'react-router'
import AddProjectPage from './pages/AddProjectPage'
import { AppProvider } from './reducer/AppContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <TopCards/> */}
      {/* <TopBanner/>    */}
      {/* <ProjectCards/> */}
      {/* <ProjectBanner/> */}
      {/* <EmployeeCard/> */}
      {/* <Employees/> */}
      {/* <MainPage/> */}
      <AppProvider>
      <Routes>
      <Route path="/" element={<MainPage/>}/>
        <Route path="/addproject" element={<AddProjectPage/>}/>
      </Routes>
      </AppProvider>
       </>
  )
}

export default App
