// import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Dashboardkeeper } from './auth/Dashboardkeeper';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { AllRoutes } from './Allroutes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Loader } from './Loader';
import { WebKeeper } from './auth/WebKeeper';
import { Login } from './auth/Login/Login';
import { SignUp } from './auth/SignUp/SignUp';
function App() {


  return (
    <>

      <Loader />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Dashboardkeeper />}>
            {AllRoutes.dashboard.map((res, key) => <Route key={key} exact path={res.path} element={<res.element />} />
            )}
          </Route>

          <Route path='/' element={<WebKeeper />}>
            {AllRoutes.website.map((res, key) => <Route key={key} exact path={res.path} element={<res.element />} />
            )}
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
