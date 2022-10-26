import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Routes/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
