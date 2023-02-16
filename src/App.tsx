import { CssBaseline } from '@mui/material';
import 'material-react-toastify/dist/ReactToastify.css';

import './App.css';
import Header from './components/Header/Header';
import { MyRoutes } from './routes/Routes';

function App() {


  return (
    <>
      <CssBaseline />
      <MyRoutes />
    </>
  );
}

export default App;
