import './style.css';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';


export default function App() {
  return (
     <>    
      <Header />
      <Outlet />
      </>  
  );
}
