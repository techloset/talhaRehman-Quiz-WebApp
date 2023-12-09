import './App.css';
import {createBrowserRouter,Route, RouterProvider} from "react-router-dom"
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>
  },
  {
    path:'/quiz',
    element: <Quiz></Quiz>
  },
  {
    path : '/result',
    element: <Result/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
