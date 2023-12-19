import Homepage from "./Pages/Homepage";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import SignInSignUp from "./Pages/SignInSignUp";
import { Provider } from "./context/JobContext";
function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Homepage/>
    },
    {
      path:'/signin',
      element:<SignInSignUp type="signin"/>
    },
    {
      path:'/register',
      element:<SignInSignUp type="register"/>
    }
  ])
  return (
    <div className="App">
      <Provider>
      <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
