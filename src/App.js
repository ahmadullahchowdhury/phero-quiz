import logo from './logo.svg';
import './App.css';
import Main from './Components/Layout/Main'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Statics from './Components/Statics/Statics';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:  () => {
            return fetch('https://openapi.programming-hero.com/api/quiz/');
          },
        },
        {
          path: "home",
          element: <Home></Home>,
          loader:  () => {
            return fetch('https://openapi.programming-hero.com/api/quiz/');
          },
        },
        {
          path: "statics",
          element: <Statics></Statics>
        },
        {
          path: "Blog",
          element: <Blog></Blog>
        },
        { path: '*', element: <h1>Error</h1> },
       
      ],
      
    },

  ]);
  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
