import './App.css';
import {createBrowserRouter,Route, RouterProvider} from "react-router-dom"
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';

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
    element: <div>Result Element</div>
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
