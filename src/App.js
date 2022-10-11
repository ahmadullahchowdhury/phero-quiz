import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Layout/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Statics from "./Components/Statics/Statics";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";
import Error from "./Components/Error/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: '*', element: <Error/>},
        {
          path: "home",
          element: <Home/>,
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz/");
          },
        },
        {
          path: "/",
          element: <Home/>,
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz/");
          },
        },
        {
          path: "/:id",
          loader: ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Quiz/>,
        },
        {
          path: "statics",
          element: <Statics/>,
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz/");
          },
        },
        {
          path: "Blog",
          element: <Blog/>,
        },
        

      ],
    },
    { path: '*', element: <Error/>},
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
