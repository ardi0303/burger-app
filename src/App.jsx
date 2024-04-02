import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "./App.css";
import Home from './pages/Home';
import About from './pages/About';
import Order from './pages/Order';
import Post from './pages/Post';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/order",
    element: <Order />
  },
  {
    path: "/post",
    element: <Post />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
