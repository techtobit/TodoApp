import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/App/Home/Home';
import NavBar from './Components/Shared/Navigation/NavBar'
import Dashboard from './Components/App/Dashboard/Dashboard'
import AddTask from './Components/App/Add Tasks/AddTasks';
import AllTasks from './Components/App/All Tasks/AllTasks';
import Complied from './Components/App/Complied/Complied'
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>} >
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path='addTasks' element={<AddTask></AddTask>}></Route>
          <Route path='allTasks' element={<AllTasks></AllTasks>}></Route>
          <Route path='complied' element={<Complied></Complied>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
