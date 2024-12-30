import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './Components/App/Home/Home';
import NavBar from './Components/Shared/Navigation/NavBar'
import AddTask from './Components/App/Add Tasks/AddTasks';
import Calendar from './Components/App/Calendar/Calendar';
import List from './Components/App/All Tasks/List';
import FinishList from './Components/App/Completed/FinishList';
import Footer from './Components/Shared/Footer/Footer';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>} >
          {/* <Route element={<Dashboard></Dashboard>}></Route> */}
          <Route path='calendar' element={<Calendar></Calendar>}></Route>
          <Route index element={<AddTask></AddTask>}></Route>
          <Route path='allTasks' element={<List></List>}></Route>
          <Route path='completed' element={<FinishList></FinishList>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
