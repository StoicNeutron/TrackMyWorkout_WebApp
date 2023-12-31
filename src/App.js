import "./components/NavBar";
import Navbar from './components/NavBar';
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <Navbar/>
      <Button variant="contained">Sign In</Button>
    </div>
  );
}

export default App;
