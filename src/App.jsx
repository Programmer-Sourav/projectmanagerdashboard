import { useEffect, useState } from 'react'
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
import Header from './components/Header'
import AllProjects from './pages/AllProjects'
import AllTeam from './pages/AllTeam'
import AllClients from './pages/AllClients'
import loadScript from 'load-script'; // Import load-script

function App() {

  const [chartLoaded, setChartLoaded] = useState(false);
  useEffect(() => {
    loadScript('https://cdn.jsdelivr.net/npm/chart.js', (err, script) => {
      if (err) {
        console.error('Error loading Chart.js:', err);
        return;
      }
      // Once Chart.js is loaded, set chartLoaded to true
      setChartLoaded(true);
    });
  }, []);

  if (!chartLoaded) {
    return <div>Loading Chart.js...</div>;
  }

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
        <Route path="/projects" element={<AllProjects/>}/>
        <Route path="/team" element={<AllTeam/>}/>
        <Route path="/clients" element={<AllClients/>}/>
      </Routes>
      </AppProvider>
       </>
  )
}

export default App
