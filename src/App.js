import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeleteUser from './components/DeleteUser';
import SearchUser from './components/SearchUser';
import AddUser from './components/AddUser';
import ViewAllUsers from './components/ViewAllUsers';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <AddUser/> } />  
      <Route path="/search" element={ <SearchUser/> } />        
      <Route path="/delete" element={ <DeleteUser/> } />        
      <Route path="/viewall" element={ <ViewAllUsers/> } />        

    </Routes>
    </BrowserRouter>
  );
}

export default App;
