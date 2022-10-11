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
        {
          path: "home",
          element: <Home/>,
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz/");
          },
          errorElement: <Error></Error>
        },
        {
          path: "/",
          element: <Home/>,
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz/");
          },
          errorElement: <Error></Error>
        },
        {
          path: "/:id",
          loader: ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Quiz/>,
          errorElement: <Error></Error>
        },
        {
          path: "statics",
          element: <Statics/>,
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz/");
          },
          errorElement: <Error></Error>
        },
        {
          path: "Blog",
          element: <Blog/>,
          errorElement: <Error></Error>
        },
        

        { path: '*', element: <Error/>},
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
