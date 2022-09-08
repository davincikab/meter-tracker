import { useEffect } from 'react';
import './App.css';
import MapPage from './components/MapPage';
import authService from './services/auth-service';


function App() {
  useEffect(() => {
    // call the 
    authService.login()
      .then(response => {
        console.log(response);
      })
      .catch(console.error);

  }, [authService.getCurrentUser()]);
  

  return (
    <MapPage />
  );
}

export default App;
