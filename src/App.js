import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import AllQuiz from './Components/AllQuiz/AllQuiz';
import NotFound from './Components/NotFound/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz")
          }
        },
        {
          path: "/home",
          element: <Home></Home>,
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz")
          }
        },
        {
          path: "/topics",
          element: <Topics></Topics>,
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz")
          }
        },
        {
          path: "/quiz/:quizId",
          element: <AllQuiz></AllQuiz>,
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          }
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz")
          }
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
