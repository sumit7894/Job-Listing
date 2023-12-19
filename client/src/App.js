import Homepage from "./Pages/Homepage";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import SignInSignUp from "./Pages/SignInSignUp";
function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Homepage/>
    },
    {
      path:'signin',
      element:<SignInSignUp type="signin"/>
    },
    {
      path:'register',
      element:<SignInSignUp type="register"/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
